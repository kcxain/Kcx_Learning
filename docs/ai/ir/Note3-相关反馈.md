---
id: note3
sidebar_position: 3
---

# Note3-相关反馈

## 显式相关反馈

### Rocchio Method

定义文档的质心：
$$
\vec{\mu}(D)=\frac{1}{|D|}\sum\limits_{d\in D}\vec{v}(d)
$$
Rocchio 算法的思想是得到查询使得相关文档和不相关文档区分度最大。
$$
\begin{align}
\vec{Q}_{m}&=\text{argmax}_{\vec{q}}[sim(\vec{q},\mu(Dr))-sim(\vec{q},\mu(Dnr))] \\
&=a\vec{Q}_o+b\frac{1}{|D_r|}\sum\limits_{\vec{D}_j\in D_r}\vec{D}_j-c\frac{1}{|D_{nr}|}\sum\limits_{\vec{D}_k\in D_n}\vec{D}_k
\end{align}
$$
如图：

![](./assets/image-20230530144604005.png)

### 通过用户点击获得显式反馈

用户对搜索结果有偏见，用户偏好于点击排名靠前得结果。所以将用户的点击行为解释为结果与查询的相关性是不合理的，将其理解为用户偏好的度量标准更合适。

给出如下定义：

- $R(q_i,d_j)$：给定一个排序函数，$r_k$是结果中排序为$k$的结果
- $Vr_k$表示用户点击了第$k$个结果

两个用于确定偏好关系的策略：

- Skip-Above：如果$Vr_k$，那么$r_k>r_{k-n}$（对于所有没有点击的$r_{k-n}$）
- Skip-Previous：如果$Vr_k$，那么$r_k>r_{k-1}$（如果$r_{k-1}$没有被点击）

## 隐式相关反馈

### 局部聚类

对于给定的一个查询$q$：

- $D_l$：局部文档集合
- $N_l$：$D_l$中文档个数
- $V_l$：局部词表（$D_l$中的不同的单词集合）
- $f_{i,j}$：词项$k_i$在文档$D_j\in D_l$中出现的次数
- $M_l=[m_{ij}]$：词项-文档矩阵
- $m_{ij}=f_{i,j}$：矩阵$M_l$中的元素
- $C_l=M_lM_l^T$：局部词项-词项关联矩阵

局部词项-词项关联矩阵中的元素$c_{u,v}\in C_l$表示词项$k_u$和$k_v$之间的关联程度。显然，两个词项同时出现的文档数越多，相关性就越强

**度量簇**

基本思想：同一句话中出现的两个术语往往相关性更强

- 令函数$k_u(n,j)$返回词项$k_u$在文档$d_j$中出现的第$n$个位置
- 令函数$r(k_u(n,j),k_v(m,j))$计算词项之间的距离

则度量簇关联矩阵为：
$$
c_{u,v}=\sum_{d_{j}\in D_l}\sum_{n}\sum_{m}\frac{1}{r\left(k_u\left(n,j\right),k_{v}\left(m,j\right)\right)}
$$
**标量簇**

基本思想：通过比较两个词项的邻域，也可以得到两个词项之间的相关性

- $\vec{s}_{u}=(s_{u,x1},s_{u,x2},\dots,s_{u,x n})$是词项$k_u$的邻域关联值向量

则局部标量矩阵为：
$$
c_{u,v}=\frac{s_{u}\cdot s_{v}}{|\vec{s}_{u}|\times|\vec{s}_{v}|}
$$