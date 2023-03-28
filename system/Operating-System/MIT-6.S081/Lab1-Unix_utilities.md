# 实验概览

第一个实验叫 Unix utilities。顾名思义，就是实现一些基础的用户程序，帮助熟悉 xv6 操作系统以及它的系统接口，系统有如下接口：

![image-20220425223127079](./assets/image-20220425223127079.png)

在本实验中，我们要实现 5 个程序，这些程序都是在 Linux Shell 经常使用到的：`sleep`、`pingpong`、`primes`、`find`、`xargs`

# sleep

很简单，直接上代码

```c
int
main(int argc, char *argv[])
{
  if(argc != 2){
    fprintf(2, "sleep: missing operand\n");
    exit(1);
  }
  int time = atoi(argv[1]);
  sleep(time);
  exit(0);
}
```

# pingpong

## 要求

编写一个程序，使两个进程通过管道进行一次 "ping-pong"，即父进程向子进程发送一个字节，子进程读出后打印`<pid>：received ping`，随后再向父进程发送一个字节，父进程读入后打印`<pid>：received pong`，最后退出

## 进程间通信

这道题考察利用管道来实现进程间通信

**管道**就是一个内核里的一个小 buffer，它有一个读端和一个写端，通过传给用户两个指向端口的文件描述符来使用

进程`fork` 时，子进程会复制父进程的文件描述符，这样，两个进程就可以对同一个管道进行写入和读出。管道本来是只支持单向通信的，如果要相互读写，应该用两个管道来实现，但是这里要实现的效果很简单，只使用一个管道并在恰当的时机关闭相应的端口也能达到目的，如图：

![image-20220426142906558](./assets/image-20220426142906558.png)

## 代码

```c
int
main(int argc, char *argv[])
{
  int p[2];
  int pid;
  pipe(p);

  char buf[2];
  if(fork() == 0) {
      pid = getpid();
      if(read(p[0], buf, 1) == -1)
      {
        fprintf(2, "READ ERROR!\n");
        exit(1);
      }
      close(p[0]);
      
      printf("%d: received ping\n", pid);

      if(write(p[1], buf, 1) == -1){
        fprintf(2, "WRITE ERROR!\n");
        exit(1);
      }
      close(p[1]);
      exit(0);   
  } 
  else {
      pid = getpid();
      if(write(p[1], buf + 1, 1) == -1){
        fprintf(2, "WRITE ERROR!\n");
        exit(1);
      }
      close(p[1]);
      wait(0);
      if(read(p[0], buf + 1, 1) == -1)
      { 
        fprintf(2, "READ ERROR!\n");
        exit(1);
      }
      printf("%d: received pong\n", pid);
      close(p[0]);
      exit(0);
  }
}
```

# primes

## 要求

使用管道编写一个并发版本的素数筛，实现 35 以内的即可。这里使用的方法是**埃拉托色尼筛**

## 埃氏筛及其并发实现

埃氏筛简单来说就是先将 2 ~ 35 的整数一次性写出来，从前往后遍历，遍历到的第一个数就是一个素数，然后将往后遍历到的该素数的倍数全部删掉，不断循环即可。

并发版本的实现就是开进程来分别筛掉不同类的素数，算法如下：

```c
p = get a number from left neighbor
print p
loop:
    n = get a number from left neighbor
    if (p does not divide n)
        send n to right neighbor
```

父进程将数字 2 ~ 35 输入到管道的左端，第一个进程从管道中读出数，打印 2，并将 2 倍数以外的数输入到管道，第二个进程输出从管道读入的第一个数，再将 3 的倍数以外的数输入到管道...以此类推，下图可以直观理解：

![image-20220426145241685](./assets/image-20220426145241685.png)

## 代码

很容易想到递归实现，每次传入管道的读端口，从管道中读出数字，筛选完后，再在子进程中用新的管道读端口作为参数调用下一轮递归，直到无数可读时终止递归。递归部分代码如下：

![image-20220426150750274](./assets/image-20220426150750274.png)

**要考虑很多细节！**

注意我圈出的两行代码，它们都是关闭写端口，但是意义却不完全相同

如果注释掉第一个`close(p[1])`。上一个进程没有关闭写端口，它的子进程从管道中读完所有数字后，`read`函数会因为有一个指向管道写端的文件描述符而阻塞。除了主函数创建的第一个进程，后面的每一个进程都会阻塞在第 20 行的`read`中，程序能正常输出所有的素数，但是却永不会终止，结果：

![image-20220426161527040](./assets/image-20220426161527040.png)

我们打印一下每次递归`p[0]`的值：

```c
$ primes
p[0]=4-prime 2
p[0]=5-prime 3
p[0]=6-prime 5
p[0]=7-prime 7
p[0]=8-prime 11
p[0]=9-prime 13
p[0]=10-prime 17
p[0]=11-prime 19
p[0]=12-prime 23
p[0]=13-prime 29
p[0]=14-prime 31

```

`p[0]`每次加 1，这是因为文件描述符默认使用当前可用范围内的最小值，而第 29 行在开始下一轮递归前关闭了写端口，于是下一轮递归使用的读端口的文件描述符就是上一轮写端口的文件描述符。

如果注释掉第二个`close(p[1])`，不仅会有上述`read`阻塞的问题，还由于递归前的写端口没有关闭，下次创建的读端口的文件描述符总会是上一个加 2，超出 xv6 系统每一个进程能打开的文件数的限制。运行一下试试：

```c
$ primes
p[0]=4-prime 2
p[0]=6-prime 3
p[0]=8-prime 5
p[0]=10-prime 7
p[0]=12-prime 11
p[0]=14-prime 13
p[0]=4-prime 17

```

只打印到 17 就卡住了

完整代码如下：

```c
#include "kernel/types.h"
#include "kernel/stat.h"
#include "user/user.h"

void 
func(int r)
{
  int num;
  //递归终止
  if(read(r, &num, sizeof(int)) == 0){
    exit(0);
  }
  int p[2];
  pipe(p);
  int pid;
  if((pid = fork()) != 0){
    close(p[0]);
    printf("prime %d\n", num);
    int n = num;
    while(read(r, &num, sizeof(int)) != 0){
      if(num % n){
        write(p[1], &num, sizeof(int));
      }
    }
    close(p[1]);
    //wait(0);
    exit(0);
  } else{
    close(p[1]);
    func(p[0]);
    close(p[0]);
  }
}
int
main(int argc, char *argv[])
{
  //p[0]读
  //p[1]写
  int p[2];
  pipe(p);
  int pid;
  if((pid = fork()) != 0){
    close(p[0]);
    //第一个进程，把所有数送进第一个pipe
    for(int i = 2; i <= 35; i++){
        write(p[1], &i, 4);
    }
    close(p[1]);
    wait(0);
  }
  else{
    close(p[1]);
    //参数传入前一个pipe的读端口
    func(p[0]);
    close(p[0]);
  }
  exit(0);
}
```

# find

## 要求

编写一个简单版本的 UNIX 查找程序：查找目录树中特定名称的所有文件

主要仿造实验文件中的`ls`函数来写就可以了，里面的一些结构我也不太清楚，可能要学到后面的文件系统才能搞明白，等学到那里再回来详细说说

## 代码

```c
#include "kernel/types.h"
#include "kernel/stat.h"
#include "user/user.h"
#include "kernel/fs.h"

void 
find(char *path, char *file)
{
  char buf[512], *p;
  int fd;
  struct dirent de;
  struct stat st;

  if((fd = open(path, 0)) < 0){
    fprintf(2, "find: cannot open %s\n", path);
    return;
  }

  if(fstat(fd, &st) < 0){
    fprintf(2, "find: cannot stat %s\n", path);
    close(fd);
    return;
  }
  strcpy(buf, path);
  p = buf+strlen(buf);
  *p++ = '/';
  while(read(fd, &de, sizeof(de)) == sizeof(de)){
    if(de.inum == 0)
      continue;
    memmove(p, de.name, DIRSIZ);
    p[DIRSIZ] = 0;
    if(stat(buf, &st) < 0){
      printf("find: cannot stat %s\n", buf);
      continue;
    }
    switch (st.type) {
    case T_DIR:
      if(strcmp(de.name, ".") != 0 && strcmp(de.name, ".."))
        find(buf, file);
    case T_FILE:
      if (strcmp(de.name, file) == 0) {
				printf("%s\n", buf);
			}
    }
  }
  close(fd);
  return;
}

int
main(int argc, char *argv[])
{
  /* 未指定目录, 则在当前目录下查找 */
  if(argc == 2){
    find(".", argv[1]);
  }
  else if(argc == 3){
    find(argv[1], argv[2]);.0
  }
  else{
    fprintf(2, "find: find <dir> <file>\n");
    exit(1);
  }
  exit(0);
}
```

`fstat`函数将文件描述符指向的`inode`的相关信息保存在`struct stat`中，这个结构体定义为：

```c
#define T_DIR     1   // Directory
#define T_FILE    2   // File
#define T_DEVICE  3   // Device

struct stat {
  int dev;     // File system's disk device
  uint ino;    // Inode number
  short type;  // Type of file
  short nlink; // Number of links to file
  uint64 size; // Size of file in bytes
};
```

目录和文件没有显式的区别，我们只能用`st.type`来区分它们，`T_DIR`表示目录，`T_FILE`表示文件

大体思路是：如果读到一个`T_DIR`，则对当前目录下的每一个目录继续递归，直到读到`T_FILE`，这是一个深度优先查找的过程。要注意每一个目录下的前两个目录都是`.`和`..`，分别表示当前目录和上一级目录，递归时应把这两者排除，否则会死循环

# xargs

## 要求

编写一个简单版本的`UNIX xargs`程序。`xargs`是组合多个命令的工具，简单来说，它可以通过管道接受字符串，并将接收到的字符串通过空格分割成许多参数，然后再将参数传递给其后面的命令，作为后面命令的命令行参数

## Shell 中的 PIPE 原理

在开始之前，为了更深入理解，不妨看看 Shell 中管道符`|`的原理是什么

![image-20220426182731397](./assets/image-20220426182731397.png)

这个代码写得简直是太漂亮了！

- 当 Shell 检测到命令中有`|`时，将`fork`两个进程，分别运行两边的命令
- 运行左边的命令前，会关闭表示标准输出的文件描述符 0，由于文件描述符默认使用当前可用范围内的最小值，所以随后的`dup`操作就使文件描述符 0 指向 pipe 的写端口，即将标准输出重定向到 pipe 的写端
- 同理，在运行右边的命令前，使标准输入重定向到了 pipe 的读端

## xargs 举例

考虑如下命令：

```c
find . b | xargs grep hello
```

- `xargs grep`表示这行命令最终运行`grep`程序
- `find . b`将找到的文件路径写入管道，假设这里找到的是`./b`，而`xargs grep hello`阻塞等待
- 左侧写完后，`xargs`从管道中读入所有字符，将`hello`，`./b`作为命令行参数来运行`grep`

于是，这条命令就等价运行：

```c
grep hello ./b
```

## 代码

```c
#include "kernel/types.h"
#include "kernel/stat.h"
#include "user/user.h"
#include "kernel/param.h"

#define MAXLEN 128

int main(int argc, char *argv[])
{
  if (argc < 2)
  {
    fprintf(2, "xargs [options] [command [initial-arguments]]\n");
    exit(1);
  }

  char *arg[MAXARG];
  int j = 0;
  for (int i = 1; i < argc; i++)
    arg[j++] = argv[i];
  for (int i = argc - 1; i < MAXARG; i++)
    arg[i] = (char *)malloc(sizeof(MAXLEN));
  //临时保存读入的字符
  char buf;
  int _read;
  //可能有多行命令, 用'\n'分隔
  while (1)
  {
    //每一组参数中的位置
    int m = 0;
    while ((_read = read(0, &buf, 1)) != 0)
    {
      if (buf == ' ')
      {
        arg[j][m] = 0;
        m = 0;
        j++;
      }
      else if (buf == '\n')
      {
        arg[j][m] = 0;
        m = 0;
        j++;
        break;
      }
      else
      {
        arg[j][m] = buf;
        m++;
      }
    }
    arg[j] = 0;
    j = argc - 1;
    int pid;
    if ((pid = fork()) == 0)
    {
      exec(arg[0], arg);
    }
    else
    {
      wait(0);
    }

    if (_read <= 0)
      break;
  }
  exit(0);
}
```

- 只要搞清楚了原理，难点就只在字符串的处理了（用 C 语言处理字符串着实恶心）
- 每当读到`\n`就执行一条命令，但也有可能在管道前同时输入了多行命令，所以执行完毕后不能退出，还要判断管道中是否还有数据，如果有，则要将其作为新的参数再一次执行

# 测试

测试截图：

![image-20220426185456523](./assets/image-20220426185456523.png)

满分通过！

# 总结

- lab 1 就是用接口实现一些功能函数，属于顶层设计，做起来比较轻松，过程也很有趣。越往后的实验越靠近底层，难度应该也会越大
- 最近真是忙得焦头烂额，能抽出时间写一篇博客已经成了奢侈。6.S081 的刷课速度可能要放缓了，我争取能够两周产出一篇高质量博客吧（不仅仅是 lab 记录，也可能是 xv6 的源码剖析）
- 本实验耗时 3 天，约 7 小时
