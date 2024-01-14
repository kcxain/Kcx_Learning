---
id: note1
sidebar_position: 1
---

# Note1-信息检索模型

信息检索模型是一个四元组$[D,Q,F,R(q_i,d_j)]$

- $D$：文档集的机内表示
- $Q$：用户需求的机内表示
- $F$：文档表示、查询表示和它们之间的关系的模型框架
- $R(q_i,d_j)$：排序函数，给$\text{query}\ q_i$和$\text{document}\ d_j$评分

## 布尔模型

布尔模型是一种最简单的信息检索模型，它返回所有满足布尔表达式的文档。

比如，有如下查询：

> Which plays of Shakespeare contain the words Brutus and Caesar, but not Calpurnia?

那么对应的查询就是：Brutus AND Caesar AND NOT Calpurnia

### 关联矩阵

于是可以定义词项与文档的关联矩阵，对于每一个词项，如果其在对应的文档出现过，就将该位置设置为 1，如：

![](./assets/image-20230530094456308.png)

那么当我们要求 Brutus AND Caesar AND NOT Calpurnia 时，只需要对 Calpuria 所在的行求反，然后将这三个向量按位“与”，最后得到的向量就标识了哪些文档符合这个条件。

## 向量空间模型

同样是用一组向量来表示文档$D(t_1,t_2,\cdots,t_n)$，$t$指出现在文档中能够代表文档性质的基本语言单位，即检索词。

### 词袋模型

即不考虑文档中词的顺序的模型。

设$tf_{t,d}$表示词项$t$在文档$d$中出现的次数，那么就可以定义文档和查询之间的匹配程度为：
$$
tf-matching-score(q,d)=\Sigma_{t\in q\cap d}(1+\text{log}tf_{t,d})
$$
考虑高频词含有的信息量往往比低频词要少。因此，设$df_t$为词项$t$在文档集合中出现的文档数目，那么就可以定义**倒置文档频率(IDF)**为：
$$
idf_t=\text{log}_{10}\frac{N}{df}
$$
IDF 衡量了一个词的信息量大小。

那么就可以把文档$d$中的一个词项$t$的权值定义为：
$$
w_{t,d}=(1+\text{log}\, tf_{t,d})\text{log}\frac{N}{df_t}
$$
即：

- 一个词对于一个文档的重要性随着它在该文档中出现次数的增加而增加
- 随着它出现的所有文档的数量的增加而减少

### 相似度衡量

- 内积
- 余弦相似度
- Jaccard 系数
  - $JaccardSim(D_i,Q)=\frac{\Sigma_{k=1}^t(d_{ik}\, q_k)}{\Sigma_{k=1}^td_{ik}^2+\Sigma_{k=1}^tq_k^2-\Sigma_{k=1}^t(d_{ik}\, q_k)}$

## 概率模型

假设相关度$R_{d,q}$是二值的，即$R_{d,q}=1$表示文档$d$与查询$q$是相关的，我们利用概率模型来估计每篇文档和查询之间的相关性概率，然后对结果进行降序排列：
$$
p(R=1|d,q)
$$

### 二值独立模型

$$
p(R=1|x,q)=\frac{p(x|R=1,q)\, p(R=1|q)}{p(x|q)}
$$

- $p(x|R=1,q)$：当返回一篇相关文档时，文档为$x$的概率
- $p(R=1|q)$：对于查询$q$，返回一篇相关文档的先验概率，可以根据文档集合中相关文档所占的百分比估计

定义排序函数：
$$
O\left(R|\vec{x},\vec{q}\right)=\frac{p\left(R=1|\vec{x},\vec{q}\right)}{p\left(R=0|\vec{x},\vec{q}\right)}=\frac{\frac{p\left(R=1|\vec{q}\right)p\left(\vec{x}|R=1,\vec{q}\right)}{p\left(\vec{x}|\vec{q}\right)}}{\frac{p\left(R=0|\vec{q}\right)p\left(\vec{x}|R=0,\vec{q}\right)}{p\left(\vec{x}|\vec{q}\right)}}=\frac{p(R=1|\vec{q})}{p(R=0|\vec{q})}\frac{p\left(\vec{x}|R=1,\vec{q}\right)}{p\left(\vec{x}|R=0,\vec{q}\right)}
$$
根据贝叶斯条件独立性假设，一个词的出现与否，与任意一个其他词出现与否互相独立，故
$$
\frac{p\left(\vec{x}|R=1,\vec{q}\right)}{p\left(\vec{x}|R=0,\vec{q}\right)}=\prod_{t=1}^{M}\frac{p\left(x_{t}|R=1,\vec{q}\right)}{p\left(x_{t}|R=0,\vec{q}\right)}
$$
从而
$$
O(R|\vec{x},\vec{q})=O(R|\vec{q})\cdot\prod\limits_{t,x_t=1}\frac{p(x_t=1|R=1,\vec{q})}{p(x_t=1|R=0,\vec{q})}\cdot\prod\limits_{t,x_t=0}\frac{p(x_t=0|R=1,\vec{q})}{p(x_t=0|R=0,\vec{q})}
$$
令

- $p_t=p(x_t=1|R=1,\vec{q})$，词项出现在一篇相关文档中的概率
- $u_t=p(x_t=1|R=0,\vec{q})$，词项出现在一篇不相关文档中的概率

 最后的排序函数为：
$$
\begin{aligned}
0\left(R|\vec{x},\vec{q}\right)
&=O\left(R|\vec{q}\right)\cdot\prod_{t,x_{t}=q_{t}=1}\frac{p_{t}}{u_{t}}\cdot\prod_{t,x_{t}=0,q_{t}=1}\frac{1-p_{t}}{1-u_{t}} \\
&=O\left(R|\vec{q}\right)\cdot\prod_{t,x_{t}=q_{t}=1}\frac{p_{t}}{u_{t}}\cdot\prod_{t,x_{t}=q_{t}=1}\frac{1-u_{t}}{1-p_{t}}\cdot \prod_{t,x_{t}=q_{t}=1}\frac{1-p_{t}}{1-u_{t}}\prod_{t,x_{t}=0,q_{t}=1}\frac{1-p_{t}}{1-u_{t}} \\
&=O\left(R|\vec{q}\right)\cdot\prod_{t:x_{t}=q_{t}=1}\frac{p_{t}\left(1-u_{t}\right)}{u_{t}\left(1-p_{t}\right)}\cdot\prod_{t:q_{t}=1}\frac{1-p_{t}}{1-u_{t}}
\end{aligned}
$$
最终，就得到了我们的检索状态值
$$
R S V_{d}=\log\prod_{t:x_{t}=q_{t}=1}\frac{p_{t}\left(1-u_{t}\right)}{u_{t}\left(1-p_{t}\right)}=\sum_{t:x_{t}=q_{t}=1}\log\frac{p_{t}\left(1-u_{t}\right)}{u_{t}\left(1-p_{t}\right)}
$$
令$c_{t}=\log\frac{p_{t}(1-u_{t})}{u_{t}(1-p_{t})}=\log\frac{p_{t}}{1-p_{t}}+\log\frac{1-u_{t}}{u_{t}}$

举例，假设有如下统计信息：

![](./assets/image-20230530105057129.png)

则
$$
c_t=\log\frac{p_t\left(1-u_t\right)}{u_t\left(1-p_t\right)}=\log\frac{\frac{s}{\left(S-s\right)}}{\frac{\left(df_t-s\right)}{\left(\left(N-df_t\right)-\left(S-s\right)\right)}}=\log\frac{\frac{s+0.5}{\left(S-s+0.5\right)}}{\frac{\left(d f_t-s+0.5\right)}{\left(\left(N-d f_t+s+0.5\right)-\left(S-s+0.5\right)\right)}}
$$

### BM25 模型

$$
\begin{aligned}
   \\
R S V_{d} =\sum_{t\in q}\log[\frac{N}{d f_{t}}]\cdot\frac{\left(k_{1}+1\right)t f_{t d}}{k_{1}\left(\left(1-b\right)+b\times\left(L_{d}/L_{a v e}\right)\right)+t f_{t d}}\cdot\frac{\left(k_{3}+1\right)t f_{t q}}{k_{3}+t f_{t q}} 
\end{aligned}
$$

- $L_d$：文档$d$的长度
- $tf_{td}$：词项$t$在文档$d$中的权重

## 语言模型

文档集中的每篇文档$d$构建其对应的语言模型$M_d$，我们的目标是将文档按照其与查询相关的似然$p(d|q)$排序
$$
P(d|q)=\frac{P(q|d)P(d)}{P(q)}
$$

- $P(q)$对所有的文档都相同，可以忽略
- $P(d)$是先验概率，可以视为均匀分布，也可以忽略
- $P(q|d)$是在文档对应的语言模型下生成$q$的概率

$$
P(q|M_d)=P\bigl(\bigl(t_1,t_2,\dots,t_{|q|}\bigr)|M_d\bigr)=\prod\limits_{1\leq k\leq|q|}P(t_k|M_d)=\prod\limits_{distinctterm\tan q}P(t|M_d)^{tf_d}
$$

这样估计$P(t|M_d)$：
$$
\hat{P}\left(t|M_{d}\right)=\frac{t f_{t,d}}{|d|}
$$

### 概率平滑

如果一个词在查询中出现了，但在文档中没有出现，那么$\prod P(t|M_d)=0$，这很不合理。于是就需要概率平滑。
$$
\hat{P}\left(t|d\right)=\lambda\hat{P}_{m l e}\left(t|M_{d}\right)+\left(1-\lambda\right)\hat{P}_{m l e}\left(t|M_{c}\right)
$$
$M_c$是基于全部文档集构造的语言模型。

这个语言模型公式的本质可以理解为：

- 用户心中已经有了一篇理想文档，根据这篇文档生成了查询
- 要返回用户心目中的文档的概率