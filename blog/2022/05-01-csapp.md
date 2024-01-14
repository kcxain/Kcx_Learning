---
authors: kcxain
tags: [计算机科学]
---

# CSAPP，我的计算机科学启蒙书

本文最早发布于我的知乎：[如何阅读《深入理解计算机系统》这本书？ - 知乎](https://www.zhihu.com/question/20402534/answer/2655186100)

今天，聊聊《深入理解计算机系统》这本书，很多人一看“深入”二字就会被吓到。实际上，它的英文全称是：Computer Systems: A Programmer’s Perspective

直译过来：以一个程序员的视角来看计算机系统。内容并没有那么难，可以说是计算机科学的大纲，计算机组成原理、操作系统、编译原理、计算机网络的知识均有涉及，内容兼具广度与深度。

这本书最早是 CMU 开设的 Introduction to Computer Systems 课程教材，后来也被国内的北大、上交、哈工大、北邮、武大等学校使用，作为本科生“计算机系统导论”课程的教材。我校（哈工大）甚至将它作为考研专业课的参考教材。

我是从大二的寒假开始读的，耗时三个月，读完了整本书，做完了书中所有的 exercise（homework 只做了部分题），并完成了配套的全部 9 个实验。

<!--truncate-->

读完也是成就感满满（图片水印为我个人知乎）：

![img](./assets/v2-1435e8b4a167fb514e291aff1c7ef695_720w.webp)

![img](./assets/v2-0805340d1858d58b284d3f7537c26b10_720w.webp)

我校大二下的“计算机系统”课程就是用的这本教材，我在备考期末时制作的一纸开卷，梳理了全书内容：

![img](./assets/v2-21941a3f99caabdbb44ad5cda43834f8_720w.webp)

![img](./assets/v2-0f0072083850bbda3306ec5f71218b99_720w.webp)

最后考了 92 分，成绩还算理想

我阅读此书前计算机基础几乎为 0（专业课只学了 C 语言和数据结构），故我的阅读方法应该是适合大部分人的。

### 先提出一些总体上的建议：

- **不建议**看任何网课，包括该书作者在 CMU 录制的课。这本书的内容相当丰富，而且讲解的很清晰，难度曲线上升很缓慢，直接耐心啃书就好。
- 每个章节的 **[exercise](https://www.zhihu.com/search?q=exercise&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType":"answer"%2C"sourceId":2655186100})** 一定要做！这些习题都是作者精心设计用来巩固当前学习内容的，尤其是前六章和第九章的习题设计的非常好，后面还附上了细致的解析，做完对知识的理解大有好处。
- **任务驱动式**学习。我读这本书时定下的目标是每个周末做完一个 lab，一个 lab 基本上对应书中的一个章节。这也就意味着我每周要至少读完一个章节，有了这种明确的目标，我的学习效率大大提升

下面分章节提出一些阅读建议：

### 第一章：计算机系统漫游

属于是全书的纲要，概括了全书要讲解的内容。读不懂很正常，略读即可，等读完全书再回来自会有不同的领悟。

### 第二章：信息的表示和处理

讲解数据的机器级存储，补码/反码、IEEE 浮点数表示等。本章非常难啃且技巧性较强，建议读时以理解为主，不要死扣书上的数学推导。此外，也可以边读边做本章对应的 [Data Lab](https://zhuanlan.zhihu.com/p/472188244) 来促进理解

### 第三章：程序的机器级表示

这章从底层讲解一段代码是如何运行的，涉及汇编代码，[函数调用栈](https://www.zhihu.com/search?q=函数调用栈&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType":"answer"%2C"sourceId":2655186100})等，是相对难啃的一章。

如果实在读不下去可以先读一读王爽的**《汇编语言》**

![img](./assets/v2-5cfb610c486daa42d88e247081ac065e_720w.webp)

此书相当于缩小版的 CSAPP，通俗易懂，难度曲线更低。我花了三天时间读完这本书，然后再回来读 CSAPP 的第三章，基本就没什么障碍了。

读完本章可以做两个 lab：

- 一个是非常出名的[Bomb Lab](https://zhuanlan.zhihu.com/p/472178808)，这个 lab 考察阅读汇编代码的能力，非常难，但是如果你真的能一行一行代码读下来，当做完这个实验后，你阅读汇编代码将如阅读 C 代码般丝滑！
- 另一个是[Attack Lab](https://zhuanlan.zhihu.com/p/476396465)，这个 lab 主要考察第三章中讲解的缓冲区溢出原理，同样也是训练阅读汇编代码的能力，以及对函数调用栈的理解。

### 第四章：处理器体系结构

这章依旧很难，介绍处理器的执行过程，流水线设计等，原书作者为了写这章花费了不少心血，设计了一个 Y86-64 指令集来为我们讲解。学习这章一定要多画画图，把各个指令每一阶段执行的过程搞清楚。

读完本章可以做[Architecture Lab](https://zhuanlan.zhihu.com/p/480380496)，这个 lab 中作者实现了 Y86-64 的模拟器，我们的任务有三部分：

- 用 Y86-64 指令集编写代码，考察本章**第一节**
- 为 Y86-64 新增指令，考察本章**第二、三节**
- 优化 Y86-64 程序，考察本章**第四、五节**

建议读完对应小节后就做实验的对应部分，加深理解。而书上讲解有不理解的地方，也可以打开本实验材料查看原书作者的代码实现。

### **第五章：优化程序性能**

在第四章的基础上讲解优化程序性能的技巧，如循环展开等，速读即可，不必在意过多细节。

### 第六章：存储器层次结构

这一章又是重点，主要讲解缓存的实现及作用，难点在于理解这样设计背后的原理，切记不要死记硬背

本章读完后，可以做[Cache Lab](https://zhuanlan.zhihu.com/p/484657229)，这也是非常经典的 lab，既考察了 Cache 的实现，又考察了如何编写 Cache 友好的程序

### 第七章：链接

讲解程序编译的过程，个人认为讲解不是很清晰，可以结合电子工业出版社的《[程序员的自我修养](https://book.douban.com/subject/3652388/)》来看

### 第八章：异常控制流

是操作系统的内容，讲解操作系统异常、进程调度、信号等概念。如果像我一样没有学过操作系统，读这一章是非常吃力的。

同时书中会有大量代码，所以我建议边读边做这章对应的实验[Shell Lab](https://zhuanlan.zhihu.com/p/492645370)，毕竟这些代码要在实践中才能理解。本章对应的 Shell Lab 就是在原书作者实现的 Shell 框架下，自己补全相关函数，实现作业控制功能

### **第九章：虚拟内存**

这章的内容非常难，学习这章之前可以先回顾一下第五章的内容，学习过程中不要轻易跳过书中模拟地址翻译的题目，多模拟几遍才能理解透彻。

后面**动态内存分配器**的实现也是很难的内容，要想将其读懂读透，需要下大功夫。本章对应的 lab [Malloc Lab](https://zhuanlan.zhihu.com/p/496366818)，要自己实现`malloc`函数，对于我这种代码能力较弱的人来说，这个 lab 是全书最难也是最耗时的，还好在参考别人代码的基础上成功跑通了

### 第十章：系统级 I/O

介绍操作系统 I/O 的相关知识，感觉作者从这一章开始就写得有点简略了，没有相关的编程经验很难读下去

### 第十一、十二章：[网络编程](https://www.zhihu.com/search?q=网络编程&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType":"answer"%2C"sourceId":2655186100})和并发编程

涉及计网和操作系统的内容，没有基础的话很难看懂，这两章依旧有大量的代码，比如作者实现的 TINY Web 服务器，以及后面的基于预线程化的服务器，还是建议边实践边读

服务器的代码在本章对应的[Proxy Lab](https://zhuanlan.zhihu.com/p/497982541)中，这个 lab 是实现一个[多线程带缓存](https://www.zhihu.com/search?q=多线程带缓存&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType":"answer"%2C"sourceId":2655186100}) Web 代理，只要能读懂原书作者服务器的实现，再结合 Cache Lab 就能很容易写出来

### 重读第一章

读完整本书，再回到第一章梳理全书的脉络，你会发现整个人都通透了，毕竟书名的直译是“以一个程序员的角度来看待计算机系统”，整本书讲解的无非就是一段程序在整个计算机系统中从**出生到死亡**的全过程。

由此，我写了一篇文章，串起全书的知识，讲解一段 C 语言程序从编译到运行的全过程：[计算机系统漫游 | Hello, world 的一生](https://zhuanlan.zhihu.com/p/513307151)

## 后续学习

本书前半部分写的非常好，但是后面涉及**操作系统**，计算机网络概念的部分就显得有些简略了，如果读不懂不建议在这上面死磕，可以去搜索其它学习材料。

比如，我非常建议读完本书后去学习MIT [操作系统导论](https://www.zhihu.com/search?q=操作系统导论&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType":"answer"%2C"sourceId":2655186100})课程 **6.S081: Operating System Engineering**

这门课程公开了详尽的学习计划表，课程视频以及 10 个 lab，教学使用的 MIT 三个老师编写的类 Unix 操作系统 xv6，及其说明文档 [xv6 book](https://pdos.csail.mit.edu/6.828/2021/xv6/book-riscv-rev2.pdf) 也全部开源，简直不要太良心！

6.S081 可以说是无缝衔接 CSAPP，比如前者的第三个实验就是在内核中**页表**相关的代码上动刀，而页表正是 CSAPP 第九章的重点，还有第五个实验 COW 和第十个实验 mmap 都是在 CSAPP 中有讲解但是并不深入的内容。

课程主页：[6.S081 / Fall 2021](https://pdos.csail.mit.edu/6.828/2021/schedule.html)

对于计网，可以学习斯坦福的课程 **CS 144: Introduction to Computer Networking**，该课程是用 C++ 实现一个TCP，参考教材为《计算机网络：自顶向下方法》

课程主页：[CS 144: Introduction to Computer Networking](https://cs144.github.io/)
