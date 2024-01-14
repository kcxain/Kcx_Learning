---
authors: kcxain
tags: [NLP, deep learning]
---

# 详解 Beam Search 代码实现

Beam Search 是一个思想很简单，但在实际应用中代码实现技巧性很强的算法，不同实现方式的性能可能千差万别。

在 [Stanford CS 224N | Natural Language Processing with Deep Learning](https://web.stanford.edu/class/cs224n/) 课程作业 [A4-NMT with RNNs](/docs/ai/dl-nlp/Assignment4-NMT_with_RNNs) 中就用到了 Beam Search，它的`beam_search`函数实现得非常妙，当然，技巧性也很强，读懂它并不容易。

本文就具体讲解其中的实现思路与细节。

<!--truncate-->

## 函数规约

```python
def beam_search(self, src_sent: List[str], beam_size: int=5, max_decoding_time_step: int=70) -> List[Hypothesis]:
    """ Given a single source sentence, perform beam search, yielding translations in the target language.
    @param src_sent (List[str]): a single source sentence (words)
    @param beam_size (int): beam size
    @param max_decoding_time_step (int): maximum number of time steps to unroll the decoding RNN
    @returns hypotheses (List[Hypothesis]): a list of hypothesis, each hypothesis has two fields:
            value: List[str]: the decoded target sentence, represented as a list of words
            score: float: the log-likelihood of the target sentence
    """
```

简单来说，就是输入源句子，beam_size，最长长度，期望输出概率前 beam_size 个句子及其对应的概率。

## 代码解析

我先逐步核心分析，最后给出全部代码

### 初始化

整个代码的核心就是维护`hypotheses`和`hyp_scores`

```python
# 存放所有序列集合, 最开始是<s>标签
hypotheses = [['<s>']]
# 每个序列的分数, 大小也就是序列集合中的序列数量
hyp_scores = torch.zeros(len(hypotheses), dtype=torch.float, device=self.device)
# 存放已经计算完毕的序列，
completed_hypotheses = []
```

### 更新

1. **首先，使用一个大循环，一步一步解码生成下一个 token，并在每步结束时选择当前得分前 beam_size 个序列，更新序列和得分**

```python
t = 0
while len(completed_hypotheses) < beam_size and t < max_decoding_time_step:
    t += 1
```

终止条件有两个：

- 计算完毕的序列达到了 beam_size
- 序列长度达到了 max_decoding_time_step

然后，在循环内部：

2. **使用`torch.expand()`将输入的 encoding 复制为当前时间步序列的数量，这是为了并行生成**

```python
# 序列的数量
hyp_num = len(hypotheses)

# (hyp_num, src_len, h)
exp_src_encodings = src_encodings.expand(hyp_num,
                                         src_encodings.size(1),
                                         src_encodings.size(2))
# (hyp_num, src_len, h)
exp_src_encodings_att_linear = src_encodings_att_linear.expand(hyp_num,                                                   src_encodings_att_linear.size(1),
                                    src_encodings_att_linear.size(2))
```

3. **根据每个序列的最后一个 token 和输入，利用`step()`函数得到下一步 token，并计算该 token 的概率**

```python
# 每个序列的最后一个词的嵌入(hyp_num,e)
y_tm1 = torch.tensor([self.vocab.tgt[hyp[-1]] for hyp in hypotheses], dtype=torch.long, device=self.device)
y_t_embed = self.model_embeddings.target(y_tm1)
x = torch.cat([y_t_embed, att_tm1], dim=-1)

# 利用step函数下一步预测
(h_t, cell_t), att_t, _  = self.step(x, h_tm1, exp_src_encodings, exp_src_encodings_att_linear, enc_masks=None)
# 注意，这里输入的大小为 (hyp_num, src_len, h)
# 所以，输出的att_t大小为(hyp_num, h)

# self.target_vocab_projection 是将隐藏层隐射到整个词表
# log_p_t 就是每一个序列下一个词的概率
# 大小为(hyp_num, vocab_size)
log_p_t = F.log_softmax(self.target_vocab_projection(att_t), dim=-1)
# 剩余需要的序列数量
live_hyp_num = beam_size - len(completed_hypotheses)
```

4. **计算不同序列的得分**

```python
# 这就得到了每个序列在整个词表的得分
# view(-1) 是为了选取所有中最大的
# hyp_scores: (hyp_num, ) -> (hyp_num, 1) -> (hyp_num, vocab_size) -> (hyp_num * vocab_size,) 
contiuating_hyp_scores = (hyp_scores.unsqueeze(1).expand_as(log_p_t) + log_p_t).view(-1)
# 前 k 个最大的
top_cand_hyp_scores, top_cand_hyp_pos = torch.topk(contiuating_hyp_scores, k=live_hyp_num)

# 找到之后，怎么确定这前 k 个最大的是哪个序列，以及选择的词表中的哪个词呢？
# 由于 contiuating_hyp_scores: (hyp_num * vocab_size,), 故作商就得到了具体的序列，余数即为对应词表的词，太秒了！！
prev_hyp_ids = top_cand_hyp_pos // len(self.vocab.tgt) # (live_hyp_num, )
hyp_word_ids = top_cand_hyp_pos % len(self.vocab.tgt) # (live_hyp_num, )
```

5. **得到当前 topk 的序列和分数**

```python
new_hypotheses = []
live_hyp_ids = []
new_hyp_scores = []
# 一共循环了 live_hyp_num 次
for prev_hyp_id, hyp_word_id, cand_new_hyp_score in zip(prev_hyp_ids, hyp_word_ids, top_cand_hyp_scores):
    prev_hyp_id = prev_hyp_id.item()
    hyp_word_id = hyp_word_id.item()
    cand_new_hyp_score = cand_new_hyp_score.item()
    # top[i]的序列和词
    hyp_word = self.vocab.tgt.id2word[hyp_word_id]
    new_hyp_sent = hypotheses[prev_hyp_id] + [hyp_word]
  	# 有结束标志，就直接加进完成序列中
    if hyp_word == '</s>':
        completed_hypotheses.append(Hypothesis(value=new_hyp_sent[1:-1],score=cand_new_hyp_score))
    else:
        new_hypotheses.append(new_hyp_sent)
        live_hyp_ids.append(prev_hyp_id)
        new_hyp_scores.append(cand_new_hyp_score)

if len(completed_hypotheses) == beam_size:
        break
```

6. **更新`hypotheses`和`hyp_scores`，进入下一步循环**

```python
hypotheses = new_hypotheses
hyp_scores = torch.tensor(new_hyp_scores, dtype=torch.float, device=self.device)
```

### 完整代码

```python
def beam_search(self, src_sent: List[str], beam_size: int=5, max_decoding_time_step: int=70) -> List[Hypothesis]:
    """ Given a single source sentence, perform beam search, yielding translations in the target language.
    @param src_sent (List[str]): a single source sentence (words)
    @param beam_size (int): beam size
    @param max_decoding_time_step (int): maximum number of time steps to unroll the decoding RNN
    @returns hypotheses (List[Hypothesis]): a list of hypothesis, each hypothesis has two fields:
            value: List[str]: the decoded target sentence, represented as a list of words
            score: float: the log-likelihood of the target sentence
    """
    src_sents_var = self.vocab.src.to_input_tensor([src_sent], self.device)

    src_encodings, dec_init_vec = self.encode(src_sents_var, [len(src_sent)])
    src_encodings_att_linear = self.att_projection(src_encodings)

    h_tm1 = dec_init_vec
    att_tm1 = torch.zeros(1, self.hidden_size, device=self.device)

    eos_id = self.vocab.tgt['</s>']
    hypotheses = [['<s>']]
    hyp_scores = torch.zeros(len(hypotheses), dtype=torch.float, device=self.device)

    completed_hypotheses = []

    t = 0
    while len(completed_hypotheses) < beam_size and t < max_decoding_time_step:
        t += 1

        hyp_num = len(hypotheses)

        exp_src_encodings = src_encodings.expand(hyp_num,
                                                 src_encodings.size(1),
                                                 src_encodings.size(2))

        exp_src_encodings_att_linear = src_encodings_att_linear.expand(hyp_num,
                                                                       src_encodings_att_linear.size(1),
                                                                       src_encodings_att_linear.size(2))

        y_tm1 = torch.tensor([self.vocab.tgt[hyp[-1]] for hyp in hypotheses], dtype=torch.long, device=self.device)
        y_t_embed = self.model_embeddings.target(y_tm1)

        x = torch.cat([y_t_embed, att_tm1], dim=-1)

        (h_t, cell_t), att_t, _  = self.step(x, h_tm1,
                                                  exp_src_encodings, exp_src_encodings_att_linear, enc_masks=None)

        log_p_t = F.log_softmax(self.target_vocab_projection(att_t), dim=-1)

        live_hyp_num = beam_size - len(completed_hypotheses)
        contiuating_hyp_scores = (hyp_scores.unsqueeze(1).expand_as(log_p_t) + log_p_t).view(-1)
        top_cand_hyp_scores, top_cand_hyp_pos = torch.topk(contiuating_hyp_scores, k=live_hyp_num)
        prev_hyp_ids = torch.div(top_cand_hyp_pos, len(self.vocab.tgt), rounding_mode='floor')
        hyp_word_ids = top_cand_hyp_pos % len(self.vocab.tgt)

        new_hypotheses = []
        live_hyp_ids = []
        new_hyp_scores = []
        for prev_hyp_id, hyp_word_id, cand_new_hyp_score in zip(prev_hyp_ids, hyp_word_ids, top_cand_hyp_scores):
            prev_hyp_id = prev_hyp_id.item()
            hyp_word_id = hyp_word_id.item()
            cand_new_hyp_score = cand_new_hyp_score.item()

            hyp_word = self.vocab.tgt.id2word[hyp_word_id]
            new_hyp_sent = hypotheses[prev_hyp_id] + [hyp_word]
            if hyp_word == '</s>':
                completed_hypotheses.append(Hypothesis(value=new_hyp_sent[1:-1],
                                                       score=cand_new_hyp_score))
            else:
                new_hypotheses.append(new_hyp_sent)
                live_hyp_ids.append(prev_hyp_id)
                new_hyp_scores.append(cand_new_hyp_score)

        if len(completed_hypotheses) == beam_size:
            break
        live_hyp_ids = torch.tensor(live_hyp_ids, dtype=torch.long, device=self.device)
        h_tm1 = (h_t[live_hyp_ids], cell_t[live_hyp_ids])
        att_tm1 = att_t[live_hyp_ids]

        hypotheses = new_hypotheses
        hyp_scores = torch.tensor(new_hyp_scores, dtype=torch.float, device=self.device)

    if len(completed_hypotheses) == 0:
        completed_hypotheses.append(Hypothesis(value=hypotheses[0][1:],
                                               score=hyp_scores[0].item()))
    completed_hypotheses.sort(key=lambda hyp: hyp.score, reverse=True)
    return completed_hypotheses
```



## 总结

总体来说，就是维护了每一个时间步的前 k 个句子以及对应的分数。

在得到下一步词表概率后，当前张量形式为 (k, vocab_size)，候选句子就有 k * vocab_size 个，如何快速得到这么多句子的 topk 呢？该代码最妙的地方就是将该张量展开为 1 维，快速得到 topk 个序号，再根据序号与 vocab_size 的商和余定位对应的句子和词，这一步非常妙！

