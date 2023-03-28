# LeetCode 分类题解

## 动态规划

### 最长公共子序列

题目列表：

- [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/description/)
- [1092. 最短公共超序列](https://leetcode.cn/problems/shortest-common-supersequence/description/)

定义一个字符串的子序列为从这个字符串中删除一些字符后得到的新的字符串。模板题就是求两个字符串 $a$ 和 $b$ 最长公共子序列的长度。

状态表示：定义 $f(i,j)$ 为 $a$ 的前 $i$ 个字符与 $b$ 的前 $j$ 个字符最长公共子序列长度。

递推关系：

- $a[i]=b[j]$，则这个字符一定可以加入最长公共子序列中，$f(i,j)=f(i-1,j-1)+1$
- 
