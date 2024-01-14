# LeetCode 分类题解

## 数据结构

### 单调栈

题目列表：

- [1019. 链表中的下一个更大节点](https://leetcode.cn/problems/next-greater-node-in-linked-list/)
- [496. 下一个更大元素 I ](https://leetcode.cn/problems/next-greater-element-i/)

模板题，给定一个数组，求数组每个元素的下一个最大元素，代码：

```cpp
vector<int> nextGreaterElement(vector<int>& nums) {
    stack<int> stk;
    vector<int> ans(nums.size());
    for(int i = nums.size() - 1; i >= 0; i --) {
        int x = nums[i];
        while(stk.size() && x >= stk.top()){
            stk.pop();
        }
        if(stk.empty()) ans[i] = -1;
        else ans[i] = stk.top();
        stk.push(x);
    }
    return ans;
}
```

## 动态规划

动态规划问题，其实就是要找出两要素：

- 状态表示
- 递推关系

### 背包问题

#### 01背包

$f[i][j] = \text{max}(f[i-1][j], f[i-1][j - v[i]] + w[i])$

```c++
for(int i = 1; i <= n; i++) {
	for(int j = 0; j <= m; j++) {
        f[i][j] = f[i-1][j];
        if(j >= v[i]) f[i][j] = max(f[i-1][j], f[i-1][j - v[i]] + w[i])
    }
}
```

一维化：

```cpp
for(int i = 1; i <= n; i++)
	for(int j = m; j >= v[i]; j--)
    f[j] = max(f[j], f[j - v[i]] + w[i])
```

#### 完全背包

$f[i][j] = \text{max}(f[i-1][j], f[i-1][j-k*v[i]] + k*w[i])$

$f[i][j - v] = \text{max}(f[i-1][j-v], f[i-1][j - 2v],\cdots)$

$f[i][j] = \text{max}(f[i-1][j], f[i][j-v[i]] + w[i])$

### 最长公共子序列

题目列表：

- [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/description/)
- [1092. 最短公共超序列](https://leetcode.cn/problems/shortest-common-supersequence/description/)

定义一个字符串的子序列为从这个字符串中删除一些字符后得到的新的字符串。模板题就是求两个字符串 $a$ 和 $b$ 最长公共子序列的长度。

状态表示：定义 $f(i,j)$ 为 $a$ 的前 $i$ 个字符与 $b$ 的前 $j$ 个字符最长公共子序列长度。

递推关系：

- $a[i]=b[j]$，则这个字符一定可以加入最长公共子序列中，$f(i,j)=f(i-1,j-1)+1$
- $a[i]!=b[j]$，则这两个字符一定不能同时加到当前的公共子序列中，所以$f(i,j)=\text{max}(f(i-1,j),f(i,j-1))$

代码如下：

```cpp
int longestCommonSubsequence(string a, string b) {
    int n = a.size();
    int m = b.size();
    vector<vector<int>> f(n + 1, vector<int>(m + 1));
    f[0][0] = 0;
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= m; j++) {
            f[i][j] = max(f[i-1][j], f[i][j-1]);
            if(a[i-1] == b[j-1]) {
                f[i][j] = f[i-1][j-1] + 1;
            }
        }
    }
    return f[n][m];
}
```

而**最短公共超序列**其实可以转化为最长公共子序列问题。最后的超序列的组成为：$a$ 和 $b$ 的最长公共子序列 + $a$和$b$未被加入最长公共子序列的部分。所以接下来的任务就是通过求解最长公共子序列过程中的状态表示找到哪些字符是公共子序列的一部分。代码如下：

```cpp
string res;
while(n > 0 && m > 0) {
    // 相等，说明该字符在公共子序列中，只push一次
    if(a[n - 1] == b[m - 1]) {
        res.push_back(a[n - 1]);
        n--;
        m--;
    }
    else {
        // 说明a[n-1]对最长公共子序列没有贡献，独有字符
        if(f[n - 1][m] == f[n][m]) {
            res.push_back(a[n - 1]);
            n--;
        }
        // 说明b[m-1]对最长公共子序列没有贡献，独有字符
        else {
            res.push_back(b[m - 1]);
            m--;
        }
    }
}
while(n > 0) {
    res += a[--n];
}
while(m > 0) {
    res += b[--m];
}
reverse(res.begin(), res.end());
```

### 区间DP

区间 DP 问题的特点是问题能被分解为两两合并的形式，我们的目标就是求解最优分段点。状态转移方程往往能写成$f(i,j)=\text{max}(f(i,k)+f(k,j)+cost)$

题目列表：

- [1039. 多边形三角剖分的最低得分](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/)
- [1547. 切棍子的最小成本](https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/)
- [1000. 合并石头的最低成本](https://leetcode.cn/problems/minimum-cost-to-merge-stones/)

状态表示：将多边形顶点以逆时针编号为$1,\dots,n$，$f(i,j)$表示$i$与$j$相连逆时针形成的多边形中划分方案中权值的最小值

递推关系：按$i$和$j$所在的三角形的另一个顶点编号来分类，设编号为$k(i < k < j)$，则每一类的最小值就为$f(i,k)+f(k,j)+v[i]*v[j]*v[k]$。注意，我们在计算$f(i,j)$时，需要知道$f(k,j)(i<k<j)$的值，所以起点$i$要从大到小遍历

代码如下：

```cpp
int minScoreTriangulation(vector<int>& values) {
    int n = values.size();
    vector<vector<int>> f(n, vector<int>(n));
    for(int i = n - 3; i >= 0; i--) {
        f[i][i + 2] = values[i] * values[i + 1] * values[i + 2];
        for(int j = i + 3; j < n; j++) {
            f[i][j] = 1e9;
            for(int k = i + 1; k < j; k++) {
                f[i][j] = min(f[i][j], f[i][k] + f[k][j] + values[i] * values[j] * values[k]);
            }
        }
    }
    return f[0][n - 1];
}
```

也可以这样理解，$f(i,k)$和$f(k,j)$中包含的元素数量一定小于$f(i,j)$，所以我们可以按区间枚举，即令$len=j-i+1$，让$len$从 3 开始从小到大计算，代码如下：

```cpp
int minScoreTriangulation(vector<int>& values) {
    int n = values.size();
    vector<vector<int>> f(n, vector<int>(n));
    for(int len = 3; len <= n; len++) {
        for(int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            if(len == 3) f[i][j] = values[i] * values[i + 1] * values[j];
            else {
                f[i][j] = 1e9;
                for(int k = i + 1; k < j; k++) {
                	f[i][j] = min(f[i][j], f[i][k] + f[k][j] + values[i] * values[j] * values[k]);
            	}
            }
        }
    }
    return f[0][n - 1];
}
```

合并石头的最低成本这道题，我们可以把$f(i,j)$的属性理解为：将$i$到$j$堆石头合并为小于$k$堆的最小代价。

- 如果$j-i$不能被$k-1$整除，则一定不能合并成 1 堆，它的集合可以划分为将前$k-1,2(k-1),3(k-1)\cdots$合并成一堆，其它部分合并成小于$k$堆。即 $f(i,j)=\text{max}(f[i][k]+f[k][j]),k=i+n(k-1)$
- 如果$j-i$能被$k-1$整除，则一定能合并成$k$堆，为满足状态定义，必须再将这$k$堆合并为 1 堆

```cpp
int mergeStones(vector<int>& values, int m) {
        int n = values.size();
        if((n - 1) % (m - 1) != 0) return -1;
        vector<int> prefix(n + 1);
        for(int i = 1; i <= n; i++) {
            prefix[i] = prefix[i - 1] + values[i - 1];
        }
        // i,j之间能合成小于m堆的最小代价
        vector<vector<int>> f(n, vector<int>(n));
        for(int len = 2; len <= n; len ++) {
            for(int i = 0; i + len - 1 < n; i++) {
                int j = i + len - 1;
                f[i][j] = 1e9;
                for(int k = i; k < j; k += m - 1) {
                    // 对于 j - i 不能被 m - 1 整除，则这就是合成小于 m 堆的最小代价
                    f[i][j] = min(f[i][j], f[i][k] + f[k + 1][j]);
                }
                // 如果 j - i 能被 m - 1 整除，则当前f[i][j]表示合成 m 堆的最小代价，则把它合成 1 堆
                if ((j - i) % (m - 1) == 0) {
                    f[i][j] += prefix[j + 1] - prefix[i];
                }
            }
        }
        return f[0][n - 1];
    }
```

