---
authors: kcxain
tags: [NLP, 代码解读]
---

# [代码解读] BERT句子表征能力的改进：Condenser

> Paper: [Condenser: a Pre-training Architecture for Dense Retrieval](https://arxiv.org/abs/2104.08253)
>
> Code: https://github.com/luyug/Condenser
>
> Publication: EMNLP 2021

最近在忙的项目需要一个好的方法来表征句子，于是就读到了这篇论文。这篇论文的 idea 和代码都不复杂，基本上就是对 Bert 的一个简单改造。我写本文的目的是记录学习一下它改造 bert 的代码技巧。

<!--truncate-->

## 一、模型动机

Condenser 的动机来源于一个已发现的现象：一个预训练好的 Bert 中，中间层的 CLS 与句子中的其他 token 的 attention 系数很低，直到最后一层 CLS 才与所有的 token 有比较大的 attention系数。所以，是否可以让最后一层的 CLS 向量与中间层的其它 token 的向量做 self-attention 学习呢？

## 二、模型结构

基于这样的动机，模型如下：

![](./assets/image-20230518103007659.png)

将 12 层 BertLayer 分为 Late 和 Early，各 6 层。用第 12 层的 CLS 位置向量与第 6 层除 CLS 位置的其他隐藏向量拼接成原长度的输出向量，最后接一个 2 层 BertLayer 训练。

12 层 BertLayer 的权重就从已经预训练好的 Bert 中加载。而由于最上面的两层 BertLayer 是自己添加的，其权重是随机初始化的。为了防止这两层的随机权重在反向传播时对整个模型的权重有破坏。所以在设计损失函数时，把最原始的 Bert 的 MLM 损失也要加上。

## 三、代码解读

下面介绍我学到的一些代码技巧。

### 1. 如何初始化的自定义 BertLayer？

首先，需要定义自己设置的 BertLayer：

```python
self.c_head = nn.ModuleList(
    # 论文中model_args.n_head_layers=2
    [BertLayer(bert.config) for _ in range(model_args.n_head_layers)]
)
```

对于这个 ModuleList 中的每个 Module，可以使用 apply 方法，进行权重初始化，这个方法需要一个接收 Module 为参数的函数

huggingface 的每个`PreTrainedModel`都有`init_weights`方法，这是说明文档：

:::info `init_weights`

If needed prunes and maybe initializes weights. If using a custom `PreTrainedModel`, you need to implement any initialization logic in `_init_weights`.

:::

所以，可以直接调用 BertModel 的初始化权重方法来初始化自定义的 BertLayer：

```python
self.lm = BertModel
self.c_head.apply(self.lm._init_weights)
```

我们也可以看看 BertModel 中的这个方法：

```python
def _init_weights(self, module):
    """Initialize the weights"""
    if isinstance(module, nn.Linear):
        # Slightly different from the TF version which uses truncated_normal for initialization
        # cf https://github.com/pytorch/pytorch/pull/5617
        module.weight.data.normal_(mean=0.0, std=self.config.initializer_range)
        if module.bias is not None:
            module.bias.data.zero_()
    elif isinstance(module, nn.Embedding):
        module.weight.data.normal_(mean=0.0, std=self.config.initializer_range)
        if module.padding_idx is not None:
            module.weight.data[module.padding_idx].zero_()
    elif isinstance(module, nn.LayerNorm):
        module.bias.data.zero_()
        module.weight.data.fill_(1.0)
```

Bert 中的 initializer_range=0.02，也就是用 mean=0，std=0.02 来随机初始化参数。

### 2.如何得到特定隐藏层的输出？

`MaskedLMOutput`有这样几个值：

- last_hidden_state: (batch_size, sequence_length, hidden_size)，最后一层输出的隐藏状态
- pooler_output: (batch_size, hidden_size)，序列第一个 token 最后一层的隐藏状态
- hidden_states: 需要指定`config.output_hidden_states=True`，这是一个元组，第一个元素为 embedding，其余元素是各层的输出，每个元素的形状为 (batch_size, sequence_length, hidden_size)
- attentions: 需要 `config.output_attentions=True`，这是一个元组，元素是每一层的注意力权重

所以，要得到 CLS 最后一层的输出，可以这样：

```python
cls_hiddens = lm_out.hidden_states[-1][:, :1]
```

得到其它位置第 6 层的输出，可以这样：

```python
skip_hiddens = lm_out.hidden_states[6][:, 1:]
```

## 三、TODO

暂且先写这些内容，以后有时间就以这个模型为例讲讲如何把自己的模型加入 transformers 库中
