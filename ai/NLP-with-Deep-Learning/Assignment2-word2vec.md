## 实验概览

本次作业考察对 word2vec 相关算法的理解，分为两部分，第一部分是计算题，第二部分为代码

## Part 1: Understanding word2vec

### 知识回顾

设中心单词为$C$，则 Skip-gram 模型的要点在于计算给定中心词时上下文单词的概率 $P(O|C)$。在计算前者的中心词向量和后者的上下文向量做点积后，套一层 softmax 函数即视为概率：

$$
\begin{aligned}
P(O=o|C=c)=\frac{exp(u_o^Tv_c)}{\sum_{w\in Vocab}exp(u_w^Tv_o)}
\end{aligned}
$$

所有单词的上下文向量组成矩阵$U$，中心词向量组成$V$，则交叉熵损失函数为：

$$
\begin{aligned}
J_{naive-softmax}(v_c, o, U)=-logP(O=o|C=c)
\end{aligned}
$$

最后的输出 $\hat{y}$ 的第 k 行表示第 k 个单词是中心词 $c$ 的上下文单词的概率

### 题目

![](assets/241149894.png)

**Answer**：因为 $y_w$ 是 one-hot 向量，$y_{w,i=o}=1,y_{w,i\neq o}=0$

![](assets/1262388185.png)

**Answer**：

$$
\begin{aligned}
J_{naive-softmax}(v_c, o, U)&=-logP(O=o|C=c) \\
&=-log\frac{exp(u_o^Tv_c)}{\sum_{w \in Vocab}exp(u_w^Tv_o)} \\
&= -u_o^Tv_c+log\sum_{w \in Vocab}exp(u_w^Tv_c)
\end{aligned}
$$

求偏导：

$$
\begin{aligned}
\frac{\partial J_{naive-softmax}(v_c, o, U)}{\partial v_c}&=-u_o+\frac{\sum_{w \in Vocab}exp(u_w^Tv_c)u_w}{\sum_{w \in Vocab}exp(u_w^Tv_c)}\\
&=-u_o+\sum_{w \in Vocab}P(O=w|C=c)u_w\\
&=U^T(\hat{y}-y)
\end{aligned}
$$

![](assets/2732243041.png)

**Answer**：

$w=o$：

$$
\begin{aligned}
\frac{\partial J_{naive-softmax}(v_c, o, U)}{\partial u_w}&=-v_c+\frac{\sum_{w \in Vocab}exp(u_w^Tv_c)u_w}{\sum_{w \in Vocab}exp(u_w^Tv_c)}\\
&=-v_c+\frac{exp(u_o^Tv_c)v_c}{\sum_{w \in Vocab}exp(u_w^Tv_c)} \\
&=(P(O=o|C=c)-1)v_c
\end{aligned}
$$

$w\neq o$：

$$
\begin{aligned}
\frac{\partial J_{naive-softmax}(v_c, o, U)}{\partial u_w}&=P(O=w|C=c)v_c

\end{aligned}
$$

![](assets/2187095450.png)

**Answer**：

$$
\begin{aligned}
\frac{\partial J_{naive-softmax}(v_c, o, U)}{\partial U}&=\frac{\partial J}{\partial u_1}+···\frac{\partial J}{\partial u_|Vocab|} \\
&= -v_c + \sum_{w \in Vocab }\frac{exp(u_wv_c)v_c}{\sum_{w \in Vocab}exp(u_w^Tv_c)}\\
&=(\hat{y}-y)v_c

\end{aligned}
$$

![](assets/3757878064.png)

**Answer**：

$$
\begin{align*}

\begin{split}
f^{'}(x)= \left \{

\begin{array}{ll}
 

    1,                    & x > 0 \\
    0,                    & x < 0   
 
\end{array}

\right.

\end{split}

\end{align*}
$$

![](assets/1099169642.png)

**Answer**：

$$
\begin{aligned}
\sigma^{'}(x) = (1-\sigma(x))\sigma(x)
\end{aligned}
$$

![](assets/347237103-1668092094437-13.png)

**Answer**：

$$
\begin{aligned}
\frac{\partial J}{\partial v_c}=-(1-\sigma(u_o^Tv_c))u_o-\sum \limits_{s=1}^K(1-\sigma(-u_{w_s}^Tu_c))u_{w_s}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial J}{\partial u_o}=-(1-\sigma(u_o^Tv_c))v_c
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial J}{\partial u_{w_s}}=(1-\sigma(-u_{w_s}^Tv_c))v_c
\end{aligned}
$$

![](assets/1084457724.png)

**Answer**：

$o=w_s$：

$$
\begin{aligned}
\frac{\partial J}{\partial u_{w_s}}=-(1-\sigma(u_{w_s}^Tv_c))v_c+\sum \limits_{s=1}^K(1-\sigma(-u_{w_s}^Tv_c))v_c
\end{aligned}
$$

$o\neq w_s$：

$$
\begin{aligned}
\frac{\partial J}{\partial u_{w_s}}=(1-\sigma(-u_{w_s}^Tv_c))v_c
\end{aligned}
$$

![](assets/1271399127.png)

**Answer**：

$$
\begin{aligned}
\frac{\partial J}{\partial U} = \sum\limits_{-m \le j \le m,j \neq 0}\frac{\partial J}{\partial U} \\

\frac{\partial J}{\partial v_c} = \sum\limits_{-m \le j \le m,j \neq 0}\frac{\partial J}{\partial v_c}\\

\frac{\partial J}{\partial v_w} = 0(w\neq c)
\end{aligned}
$$

## Part 2: Implementing word2vec

### 实现 sigmoid 函数

很简单，不必多说：

```python
def sigmoid(x):
    """
    Compute the sigmoid function for the input here.
    Arguments:
    x -- A scalar or numpy array.
    Return:
    s -- sigmoid(x)
    """

    ### YOUR CODE HERE (~1 Line)
    s = 1 / (1 + np.exp(-x))
    ### END YOUR CODE

    return s
```

### 实现 softmax 函数

老师已经为我们实现了 softmax，写法非常精彩，于是把代码拿出来赏析一下

softmax 函数为：

$$
\begin{aligned}
softmax(x) = \frac{exp(a_x)}{\sum\limits_{i=1}^nexp(a_i)}
\end{aligned}
$$

由于指数运算，这样会有溢出的风险，注意到：

$$
\begin{aligned}
softmax(x) &= \frac{exp(a_x)}{\sum\limits_{i=1}^nexp(a_i)} \\
&=\frac{Cexp(a_x)}{C\sum\limits_{i=1}^nexp(a_i)}\\
&=\frac{exp(a_x+C^{'})}{C\sum\limits_{i=1}^nexp(a_i+{C'})}
\end{aligned}
$$

于是就可以对每一个向量运算时，先减去其最大值，代码如下：

```python
def softmax(x):
    """Compute the softmax function for each row of the input x.
    It is crucial that this function is optimized for speed because
    it will be used frequently in later code. 

    Arguments:
    x -- A D dimensional vector or N x D dimensional numpy matrix.
    Return:
    x -- You are allowed to modify x in-place
    """
    orig_shape = x.shape

    if len(x.shape) > 1:
        # Matrix
        tmp = np.max(x, axis=1)
        x -= tmp.reshape((x.shape[0], 1))
        x = np.exp(x)
        tmp = np.sum(x, axis=1)
        x /= tmp.reshape((x.shape[0], 1))
    else:
        # Vector
        tmp = np.max(x)
        x -= tmp
        x = np.exp(x)
        tmp = np.sum(x)
        x /= tmp

    assert x.shape == orig_shape
    return x
```

### 实现计算损失函数及梯度

根据第一部分的公式推导计算即可，注意维度的关系

```python
def naiveSoftmaxLossAndGradient(
    centerWordVec,
    outsideWordIdx,
    outsideVectors,
    dataset
):
    """ Naive Softmax loss & gradient function for word2vec models

    Implement the naive softmax loss and gradients between a center word's 
    embedding and an outside word's embedding. This will be the building block
    for our word2vec models. For those unfamiliar with numpy notation, note 
    that a numpy ndarray with a shape of (x, ) is a one-dimensional array, which
    you can effectively treat as a vector with length x.

    Arguments:
    centerWordVec -- numpy ndarray, center word's embedding
                    in shape (word vector length, )
                    (v_c in the pdf handout)
    outsideWordIdx -- integer, the index of the outside word
                    (o of u_o in the pdf handout)
    outsideVectors -- outside vectors is
                    in shape (num words in vocab, word vector length) 
                    for all words in vocab (tranpose of U in the pdf handout)
    dataset -- needed for negative sampling, unused here.

    Return:
    loss -- naive softmax loss
    gradCenterVec -- the gradient with respect to the center word vector
                     in shape (word vector length, )
                     (dJ / dv_c in the pdf handout)
    gradOutsideVecs -- the gradient with respect to all the outside word vectors
                    in shape (num words in vocab, word vector length) 
                    (dJ / dU)
    """

    ### YOUR CODE HERE (~6-8 Lines)

    ### Please use the provided softmax function (imported earlier in this file)
    ### This numerically stable implementation helps you avoid issues pertaining
    ### to integer overflow. 
    centerWordVec = centerWordVec.reshape(centerWordVec.shape[0], 1)
    y = softmax(np.dot(outsideVectors, centerWordVec).reshape(-1)).reshape(-1, 1) # (num, 1)
    loss = -np.log(y[outsideWordIdx])

    y[outsideWordIdx] -= 1
    gradCenterVec = np.dot(outsideVectors.T, y) # (word vector, num)
    gradOutsideVecs = np.dot(y, centerWordVec.T) # (num, word vector)
    ### END YOUR CODE

    return loss, gradCenterVec, gradOutsideVecs
```

### 实现负采样的损失函数及梯度

还是依据上述公式写即可，注意$\sigma(x)+\sigma(-x)=1$，公式中$\sigma(u_o^Tv_c)$及$\sigma(u_k^Tv_c)$可以重用

```python
def negSamplingLossAndGradient(
    centerWordVec,
    outsideWordIdx,
    outsideVectors,
    dataset,
    K=10
):
    """ Negative sampling loss function for word2vec models

    Implement the negative sampling loss and gradients for a centerWordVec
    and a outsideWordIdx word vector as a building block for word2vec
    models. K is the number of negative samples to take.

    Note: The same word may be negatively sampled multiple times. For
    example if an outside word is sampled twice, you shall have to
    double count the gradient with respect to this word. Thrice if
    it was sampled three times, and so forth.

    Arguments/Return Specifications: same as naiveSoftmaxLossAndGradient
    """

    # Negative sampling of words is done for you. Do not modify this if you
    # wish to match the autograder and receive points!
    negSampleWordIndices = getNegativeSamples(outsideWordIdx, dataset, K)
    indices = [outsideWordIdx] + negSampleWordIndices

    ### YOUR CODE HERE (~10 Lines)
    z = sigmoid(np.dot(outsideVectors[negSampleWordIndices], centerWordVec)) # sum v_cv_k
    b = sigmoid(np.dot(outsideVectors[outsideWordIdx], centerWordVec))  # v_ov_C
    loss = -np.log(b) - np.sum(np.log(1 - z))

    gradCenterVec = (b - 1) * outsideVectors[outsideWordIdx] + np.sum(z.reshape(-1, 1) * outsideVectors[negSampleWordIndices],axis=0)
    gradOutsideVecs = np.zeros_like(outsideVectors)
    gradOutsideVecs[outsideWordIdx] = (b - 1) * centerWordVec
    for j, index in enumerate(negSampleWordIndices):
        gradOutsideVecs[index] += z[j] * centerWordVec
    ### Please use your implementation of sigmoid in here.

    ### END YOUR CODE

    return loss, gradCenterVec, gradOutsideVecs
```

### 实现 skip-gram 算法

调用前面实现的负采样函数，计算损失值和梯度即可

```python
def skipgram(currentCenterWord, windowSize, outsideWords, word2Ind,
             centerWordVectors, outsideVectors, dataset,
             word2vecLossAndGradient=naiveSoftmaxLossAndGradient):
    """ Skip-gram model in word2vec

    Implement the skip-gram model in this function.

    Arguments:
    currentCenterWord -- a string of the current center word
    windowSize -- integer, context window size
    outsideWords -- list of no more than 2*windowSize strings, the outside words
    word2Ind -- a dictionary that maps words to their indices in
              the word vector list
    centerWordVectors -- center word vectors (as rows) is in shape 
                        (num words in vocab, word vector length) 
                        for all words in vocab (V in pdf handout)
    outsideVectors -- outside vectors is in shape 
                        (num words in vocab, word vector length) 
                        for all words in vocab (transpose of U in the pdf handout)
    word2vecLossAndGradient -- the loss and gradient function for
                               a prediction vector given the outsideWordIdx
                               word vectors, could be one of the two
                               loss functions you implemented above.

    Return:
    loss -- the loss function value for the skip-gram model
            (J in the pdf handout)
    gradCenterVec -- the gradient with respect to the center word vector
                     in shape (num words in vocab, word vector length)
                     (dJ / dv_c in the pdf handout)
    gradOutsideVecs -- the gradient with respect to all the outside word vectors
                    in shape (num words in vocab, word vector length) 
                    (dJ / dU)
    """

    loss = 0.0
    gradCenterVecs = np.zeros(centerWordVectors.shape)
    gradOutsideVectors = np.zeros(outsideVectors.shape)

    ### YOUR CODE HERE (~8 Lines)
    currentCenterWordIdx=word2Ind[currentCenterWord]
    currentCenterWordVec=centerWordVectors[currentCenterWordIdx]
    for outsideWord in outsideWords:
        (curloss,curgradCenterVecs,curgradOutVecs)=word2vecLossAndGradient(currentCenterWordVec,
                                                                                word2Ind[outsideWord],
                                                                                outsideVectors,
                                                                                dataset)
        loss += curloss
        gradCenterVecs[currentCenterWordIdx] += curgradCenterVecs.flatten()
        gradOutsideVectors += curgradOutVecs

    ### END YOUR CODE
  
    return loss, gradCenterVecs, gradOutsideVectors
```

### 实现随机梯度下降算法

根据函数的梯度更新即可

```python
def sgd(f, x0, step, iterations, postprocessing=None, useSaved=False,
        PRINT_EVERY=10):
    """ Stochastic Gradient Descent

    Implement the stochastic gradient descent method in this function.

    Arguments:
    f -- the function to optimize, it should take a single
         argument and yield two outputs, a loss and the gradient
         with respect to the arguments
    x0 -- the initial point to start SGD from
    step -- the step size for SGD
    iterations -- total iterations to run SGD for
    postprocessing -- postprocessing function for the parameters
                      if necessary. In the case of word2vec we will need to
                      normalize the word vectors to have unit length.
    PRINT_EVERY -- specifies how many iterations to output loss

    Return:
    x -- the parameter value after SGD finishes
    """

    # Anneal learning rate every several iterations
    ANNEAL_EVERY = 20000

    if useSaved:
        start_iter, oldx, state = load_saved_params()
        if start_iter > 0:
            x0 = oldx
            step *= 0.5 ** (start_iter / ANNEAL_EVERY)

        if state:
            random.setstate(state)
    else:
        start_iter = 0

    x = x0

    if not postprocessing:
        postprocessing = lambda x: x

    exploss = None

    for iter in range(start_iter + 1, iterations + 1):
        # You might want to print the progress every few iterations.

        loss = None
        ### YOUR CODE HERE (~2 lines)
        loss, grad = f(x)
        x -= step * grad
        ### END YOUR CODE

        x = postprocessing(x)
        if iter % PRINT_EVERY == 0:
            if not exploss:
                exploss = loss
            else:
                exploss = .95 * exploss + .05 * loss
            print("iter %d: %f" % (iter, exploss))

        if iter % SAVE_PARAMS_EVERY == 0 and useSaved:
            save_params(iter, x)

        if iter % ANNEAL_EVERY == 0:
            step *= 0.5

    return x
```

## 运行

回顾一下整个框架：

- 模型采用 **skip-gram**，根据中心词向量计算上下文词向量，由此得到损失函数
- 计算损失函数和梯度时使用**负采样方法**，从而提高模型效率
- 最后更新参数时使用**随机梯度下降法**

以上我们就搭建好了整个 word2vec 模型！

对斯坦福提供的数据集迭代计算 40000 次：

```python
wordVectors = sgd(
    lambda vec: word2vec_sgd_wrapper(skipgram, tokens, vec, dataset, C,
        negSamplingLossAndGradient),
    wordVectors, 0.3, 40000, None, True, PRINT_EVERY=10)
```

跑了将近一个小时，终于出来结果了：

![](assets/2199599960.png)

这是一些训练后的词向量的可视化：

![](assets/1938010594.png)

可以看到：

- 同义词以及词性相同的反义词非常靠近，如 wonderful，amazing，great，boring。这很容易理解
- 像 queen 和 king 形成的向量与 female 和 male 形成的向量基本平行
