---
authors: kcxain
tags: [NLP, 复盘]
---

# 哈工大 SCIR 实验室笔试小记

昨天参加了哈工大 SCIR 实验室的 2024 研究生招生笔试。试题很基础，但题量很大，一个半小时要完成一道逻辑题，一道文献翻译题，两道数学题，两道神经网络相关知识的题，两道编程题。反正我没做完。

本文给出两道数学题和两道编程题的题解，权当复习巩固基础。

<!--truncate-->

## 一、高斯分布的KL散度

这道题完全空着了，忘了 KL 散度怎么求了。究其原因是没有深入理解信息熵、交叉熵、相对熵那一套原理[^1]。

**信息熵：**
$$
H_p(X)=-\int p(x)\cdot\log(p(x))\mathrm dx
$$
$-\log_b(p(x))=\log_b(\frac{1}{p(x)})$可以理解为一个事件的不确定性程度，那么$H_p(X)$显然就是整个分布的期望。

**交叉熵：**
$$
H_{p_o,p_s}(X)=-\int p_o(x)\cdot\log(p_s(x))\mathrm dx
$$
其中，$p_s$为主观认为的概率分布，或者说机器学习方法预测出来的概率分布，而$p_o$为客观的概率分布。可以理解为，我们带着某个主观认知去接触某个客观随机现象的不确定性程度。

**相对熵（KL散度）：**
$$
\begin{aligned}
D_{KL}(p_o||p_s) &= H_{p_o,p_s}(X)-H_{p_o}(X) \\
&=-\int p_o(x)\cdot\log(\frac{p_s(x)}{p_o(x)})\mathrm dx 
\end{aligned}
$$
其实就是衡量交叉熵与信息熵的差值。

KL散度的若干条性质：

- KL散度大于等于 0，简单证明：
  - 对$x\in(0,1]$，有$\text{ln}(x)\le x-1$，从而
    $$
    \begin{aligned}
    D_{KL}(p_o||p_s) &=-\int p_o(x)\cdot\text{ln}(\frac{p_s(x)}{p_o(x)})\mathrm dx  \\
    &\ge -\int p_o(x)\cdot(\frac{p_s(x)}{p_o(x)}-1)\mathrm dx  \\
    &=-\int p_o(x)\cdot(\frac{p_s(x)}{p_o(x)}-1)\mathrm dx  \\
    &=-(\int p_s(x)\text{dx} - \int p_o(x)\mathrm dx ) \\
    &=0
    \end{aligned}
    $$
- 可以理解为两个分布的距离，但是并不满足对称性和三角不等式

回到本题：
$$
\begin{aligned}
\operatorname{D_{KL}}({\mathcal{N}}(\mu_{1},\sigma_{1}^{2})||{\mathcal{N}}(\mu_{2},\sigma_{2}^{2}))& =\int_{\mathrm x}\frac{1}{\sqrt{2\pi}\sigma_1}\mathrm e^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}\log\frac{\frac{1}{\sqrt{2\pi}\sigma_1}\mathrm e^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}}{\frac{1}{\sqrt{2\pi}\sigma_2}\mathrm e^{-\frac{(x-\mu_2)^2}{2\sigma_2^2}}}\mathrm dx  \\
&=\int_{x}\frac{1}{\sqrt{2\pi}\sigma_1}\mathrm{e}^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}\left[\log\frac{\sigma_2}{\sigma_1}-\frac{(x-\mu_1)^2}{2\sigma_1^2}+\frac{(x-\mu_2)^2}{2\sigma_2^2}\right]\mathrm{dx}
\end{aligned}
$$
第一项：
$$
\log\frac{\sigma_2}{\sigma_1}\int_x\frac{1}{\sqrt{2\pi}\sigma_1}\mathrm{e}^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}\mathrm{dx}=\log\frac{\sigma_2}{\sigma_1}
$$
第二项要看出里面是方差：
$$
-\frac{1}{2\sigma_1^2}\int_x(\mathrm x-\mu_1)^2\frac{1}{\sqrt{2\pi}\sigma_1}\mathrm e^{-\frac{(\mathrm x-\mu_1)^2}{2\sigma_1^2}}\mathrm dx=-\frac{1}{2\sigma_1^2}\sigma_1^2=-\frac{1}{2}
$$
第三项，注意$E(x)^2=D(x)+E(x^2)$
$$
\begin{aligned}
\frac{1}{2\sigma_{2}^{2}}\int_{x}(x-\mu_{2})^{2}\frac{1}{\sqrt{2\pi}\sigma_{1}}\mathrm{e}^{-\frac{(\mathrm{x}-\mu_{1})^{2}}{2\sigma_{1}^{2}}}\mathrm{dx}& =\frac{1}{2\sigma_2^2}\int_{x}(x^2-2\mu_2x+\mu_2^2)\frac{1}{\sqrt{2\pi}\sigma_1}\mathrm{e}^{-\frac{(x-\mu_1)^2}{2\sigma_1^2}}\mathrm{dx}  \\
&=\frac{\sigma_1^2+\mu_1^2-2\mu_1\mu_2+\mu_2^2}{2\sigma_2^2}=\frac{\sigma_1^2+(\mu_1-\mu_2)^2}{2\sigma_2^2}
\end{aligned}
$$
综上：
$$
\operatorname{D_{KL}}({\mathcal{N}}(\mu_{1},\sigma_{1}^{2})||{\mathcal{N}}(\mu_{2},\sigma_{2}^{2}))=\log\frac{\sigma_2}{\sigma_1}-\frac{1}{2}+\frac{\sigma_1^2+(\mu_1-\mu_2)^2}{2\sigma_2^2}
$$

## 二、组合题（图论）

> 有 n 个人，每次坐成一圈，为了使每次每个人的邻居与之前都不同，则坐法最多有几次？

实际上可以抽象为：完全图$K_n$中最多有多少个边不重复的哈密顿圈。

很明显，要将每个人都认识一遍且不重复，不会超过$\lfloor \frac{n-1}{2} \rfloor$次，主要是考虑如何构造[^2]：

奇数：

![](./assets/scir_1.png)

可以旋转$\frac{n-1}{2}$次

偶数：

![](./assets/scir_2.png)

可以旋转$\frac{n-2}{2}$次

故，答案为$\lfloor \frac{n-1}{2} \rfloor$

## 三、编程题（求编辑距离）

原题：[72. 编辑距离 - 力扣](https://leetcode.cn/problems/edit-distance/)

经典的字符串 dp 题：

```cpp
int minDistance(string word1, string word2) {
    int m = word1.size(), n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    // dp[i][j] = max(
    //		dp[i-1][j] + 1, 	删除
    // 		dp[i][j-1] + 1, 	插入
    //		dp[i-1][j-1] + 1, 	修改
    //	)
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            dp[i][j] = min(dp[i-1][j] + 1, dp[i][j-1] + 1);
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = min(dp[i][j], dp[i-1][j-1]);
            }
            else {
                dp[i][j] = min(dp[i][j], dp[i-1][j-1] + 1);
            }
        }
    }
    return dp[m][n];
}
```

## 四、编程题（滑动窗口）

原题：[239. 滑动窗口最大值 - 力扣](https://leetcode.cn/problems/sliding-window-maximum/)

主要考虑如果 i > j，并且 nums[i] > nums[j]，则 j 就可以丢弃，故维护一个单调队列：

```cpp
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    int n = nums.size();
    deque<int> d;
    vector<int> ans;
    for(int i = 0; i < n; i++) {
        while(!d.empty() && nums[d.back()] <= nums[i]) d.pop_back();
        d.push_back(i);
        if(i >= k - 1) {
            while(!d.empty() && d.front() <= i - k) d.pop_front();
            ans.push_back(nums[d.front()]);
        }
    }
    return ans;
}
```



[^1]:[一篇文章讲清楚交叉熵和KL散度 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/573385147)
[^2]:[11个人坐一圆桌儿，每次每人左右边两人都不同，问有几种坐法？](https://www.zhihu.com/question/47823783)
