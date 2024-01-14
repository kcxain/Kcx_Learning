---
id: note2
sidebar_position: 2
---

# Note02-结构化查询语言SQL

SQL 语言有以下几个部分：

- 数据定义语言(DDL)：提供定义关系模式、删除关系以及修改关系模式的命令
- 数据操纵语言(DML)：提供从数据中查询信息、以及在数据中插入元组、删除元组、修改元组的能力
- 完整性：SQL DDL 包括定义完整性约束命令
- 视图定义：SQL DDL 包括定义视图的命令
- 事务控制：定义事务的开始和结束

## 数据定义

SQL 的 DDL 包括以下语句：

|      | 创建         | 删除       | 修改        |
| ---- | ------------ | ---------- | ----------- |
| 表   | CREATE TABLE | DROP TABLE | ALTER TABLE |
| 视图 | CREATE VIEW  | DROP VIEW  |             |
| 索引 | CREATE INDEX | DROP INDEX |             |

### CREATE TABLE

- 格式：
  ```sql
  CREATE TABLE <关系名>
  (<属性名> <属性类型>[NOT NULL],...,
   <属性名> <属性类型>[NOT NULL],
  	完整性约束1，完整性约束2,…);
  ```
- 属性类型：
  - char(n)、varchar(n)
  - int、smallint
  - numeric(p,d)
  - real、float(n)、double precision
- 完整性约束
  - $\text{primary key}(A_1,A_2,\cdots,A_n)$：声明属性$(A_1,A_2,\cdots ,A_n)$构成关系的主码，主码属性必须是非空且唯一的
  - $\text{foreign key}(A_1,A_2,\cdots ,A_n) \ \text{references}$：声明表示关系中任意元组在属性$(A_1,A_2,\cdots ,A_n)$上的取值必须对应于关系$s$中某元组在主码属性上的取值
  - not null：在该属性上不允许为空值

例：

```sql
CREATE TABLE Student
	(SSN CHAR(9) NOT NULL,
	 Name VARCHAR(15) NOT NULL,
	 Year INTEGER,
	 Specialty VARCHAR(30),
	 Department VARCHAR(30),
	 Primary key (SSN));

CREATE TABLE Grade
    ( SSN CHAR(9) NOT NULL,
     CNO CHAR(7) NOT NULL,
     Score INTEGER,
     Primary key (SSN, CNO),
     foreign key(SSN) references Student
     foreign key(CNO) references Course); 
```

### ALTER TABLE

- 格式：
  ```sql
  ALTER TABLE <关系名> ADD|DROP <列名><列类型>
  ```
- 例：
  - 在 Student 关系模式中增加一个属性 Age
    ```sql
    ALTER TABLE Student ADD Age INTEGER
    ```
  - 在 Student 关系模式中删除属性 Age
    ```sql
    ALTER TABLE Student DROP Age
    ```

### CREATE INDEX

- 格式：
  ```sql
  CREATE [UNIQUE] INDEX 〈索引名〉ON 〈关系名〉(〈列名〉[ORDER], ...,〈列名〉[ORDER]) [CLUSTER]
  ```
- 功能：
  - 在一个指定关系的指定属性上建立索引
  - ORDER：ASC 或 DESC
  - CLUSTER：是否为聚集索引
- 例：
  - 在 Student 关系上以 SSN 属性为索引属性，建立一个聚集索引，索引文件名字为 SSN_INDEX，并说 SSN 是主码属性，索引按照 SSN 的值递增排序
    ```sql
    CREATE UNIQUE INDEX SSN_INDEX ON
    	Student(SSN ASC) CLUSTER
    ```

建立索引有什么用呢？

比如有如下 TABLE：

![](./assets/image-20230523192714835.png)

我想要找到所有 CS/MA 系的学生，可以用如下语句：

```sql
Select *
From student
Where sdept in ('MA', 'CS')
```

数据库系统可能会使用顺序扫描，逐元组查询的方式，为$O(n)$的时间复杂度。而如果在 Sdept 属性上建立了索引，那么时间复杂度就为$O(1)$了

###   CREATE VIEW

建立计算机系学生的视图：

```sql
CREATE VIEW CS_Student
	AS
	SELECT Sno, Sname, Sage
	FROM Student
	WHERE Sdept= 'CS';
```

## 查询

- 单表查询
- 连接查询
- 嵌套子查询
- 集合查询

### 单表查询

查询仅涉及一个表，是一种最简单的查询操作，包括：

- 选择表中若干列
  - 对应于投影投影运算
  - 例，查询全体学生的学号和姓名
    ```sql
    Select Sno, Sname
    From student
    ```
  
- 选择表中的若干元组
  - 对应于选择运算
  - 例，查询年龄在19-21之间的学生姓名及性别
    ```sql
    Select sname, ssex
    From student
    Where sage between 19 and 21;
    ```
  
- 对查询结果排序
  - 使用 ORDER BY 子句
  - 例，查询选修了3号课程的学生的学号及其成绩，查询结果按分数降序排列
    ```sql
    SELECT Sno，Grade
    FROM SC
    WHERE Cno= '3'
    ORDER BY Grade DESC;
    ```
  
- 使用聚集函数
  - 统计元组个数：`COUNT([DISTINCT | ALL] *)`
  - 统计一列中值的个数：`COUNT([DISTINCT | ALL] <列名>)`
  - 计算一列值的总和/平均值/最大值/最小值
  
- 对查询结果分组
  - 用途：细化聚集函数的作用对象
  
  - 例，查询各个课程号与相应的选课人次
    ```sql
    Select Cno, count(Sno)
    From sc
    Group by Cno;
    ```

:::caution 注意

任何没出现在 Group by 子句中的属性如果出现在 Select 子句中，它只能出现在聚集函数内部。如下写法就是错的：

```sql
select dept_name, ID, avg(salary)
from instructor
group by dept_name
```

:::

### 连接查询

同时涉及多个表的查询称为连接查询。例：

![](./assets/image-20230523194348505.png)

查询选修 2 号课且成绩 90 分以上学生姓名

```sql
Select sname
From student, sc
Where student.sno=sc.sno and
cno='2' and grade>90;
```

查询每个学生的学号、姓名、选修的课程名及成绩

```sql
Select student.sno, sname, cname, grade
From student, sc, course
Where student.sno=sc.sno and
sc.cno=course.cno;
```

### 嵌套子查询

一个 SELECT-FROM-WHERE 语句称为一个查询块，将一个查询块嵌套在另一个查询块的 WHERE 子句、FROM 子句、或 HAVING 短语的条件中的查询称为嵌套子查询

例：

查询选修了1号课的学生姓名

```sql
Select sname
From student as S
Where exists (
			  Select *
			  From sc
			  where sno=S.sno and cno='1'
);
```

查询系平均工资超过42000美元的那些系名与教师平均工资

```sql
Select dept_name, avg_salary
From ( 
      Select dept_name, Avg(salary) as avg_salary
      From instuctor
      Group by dept_name
)
Where avg_salary>42000;
```

### 集合查询

参加集合操作的各结果表列数必须相同;对应的数据类型也必须相同，系统自动去掉重复行

例：

查询CS系或年龄不大于19岁的学生

```sql
(Select *
From student
Where sdept='CS' )
UNION
(Select *
From student
Where sage<=19);
```

查询CS系的年龄不大于19岁的学生

```sql
(Select *
From student
Where sdept='CS' )
INTERSECT
(Select *
From student
Where sage<=19);
```

查询CS系中年龄不小于19岁的学生

```sql
(Select *
From student
Where sdept='CS')
EXCEPT
(Select *
From student
Where sage<19);
```

## 数据更新

### 插入

DBMS 在执行插入、修改及删除语句时会检查所插入、修改、删除的元组是否破坏表上已定义的完整性规则

- 插入单条数据
  ```sql
  INSERT
  INTO <表名> [(<属性列1>[,<属性列2 >…)]
  VALUES (<常量1> [，<常量2>]…)
  ```
- 插入子查询结果
  ```sql
  INSERT INTO <表名>
  	[(<属性列1> [，<属性列2>… )]
  子查询;
  ```

例，对每一个系，求学生的平均年龄，并把结果存入数据库

```sql
# 建表
CREATE TABLE Deptage
    (Sdept CHAR(15);
    Avgage SMALLINT);
# 插入数据
INSERT
INTO Deptage(Sdept，Avgage)
    SELECT Sdept，AVG(Sage)
    FROM Student
    GROUP BY Sdept;
```

### 修改

```sql
UPDATE <表名>
SET <列名>=<表达式>[，<列名>=<表达式>]...
[WHERE <条件>];
```

### 删除

```sql
DELETE
FROM <表名>
[WHERE <条件>];
```

## 事务

事务(transaction)由查询和更新语句的序列组成

- Commit：提交当前事务，也就是将该事务所做的更新在数据库中持久保存
- Rollback：回滚当前事务，即撤销该事务中所有 SQL 语句对数据库的更新。数据库恢复到执行该事务第一条语句之前的状态

## 触发器

触发器(trigger)是一条语句，当对数据修改时它自动被执行，设置触发器机制，必须满足两个要求：

- 指明什么条件下执行触发器
- 指明触发器的动作

一旦把一个触发器输入数据库，只要指定的事件发生，相应条件满足，数据库系统就有责任执行它

例：

![](./assets/image-20230523200254991.png)

使用触发器表示 SC 表参照 Course 表的完整性

```sql
create trigger check1 after insert on SC
    referencing new row as nrow
    for each row
    when (nrow.cno not in (
          select cno
          from course) )
    begin
    	rollback;
    end

create trigger check2 after delete on Course
    referencing old row as orow
    for each row
    when (orow.cno not in (select cno from Course)
    	  and orow.cno in (select cno from SC))
    begin
    	rollback;
    end
```

## 授权机制

- 授权语法格式
  ```sql
  GRANT <privilege list> ON <object> TO <user ID list>
  [WITH GRANT OPTION]
  ```
  - privilege list：select, insert, update, delete
  - with grant option：授权用户可以把此权限授予其他用户或角色
- 收回授权
  ```sql
  REVOKE <privilege list> ON <object> FROM <user ID list>
  [Restrict/Cascade]
  ```