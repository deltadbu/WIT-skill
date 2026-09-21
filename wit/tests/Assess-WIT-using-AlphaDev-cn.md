# 使用 AlphaDev 检验 WIT

## 检验范围

本文使用：

- Mankowitz, D. J. et al. *Faster sorting algorithms discovered using deep reinforcement learning*. Nature 618, 257–263 (2023). DOI: 10.1038/s41586-023-06004-9。
- 当前 WIT Agent Skill：[SKILL.md](../SKILL.md)
- 当前完整 WIT workflow：[WIT-Scientific-thinking-and-writing-skill.md](../references/WIT-Scientific-thinking-and-writing-skill.md)

AlphaDev 发表早于 WIT，因此对于 WIT 的大部分原则，它可以作为 external stress test。但是，WIT 最近新增的“先用自然语言解释 basic idea，再用最小 concrete example 让 reader mentally execute the method”这一条，本身就是受 AlphaDev 启发后加入的。因此 AlphaDev 可以**说明**这条规则，但不能作为这条规则的独立验证。

## 总体结论

AlphaDev 对 WIT 的主体架构提供了很强的支持：Results 可以灵活组织、Fact 与 interpretation 应控制推理距离、方法论文需要 mechanism-revealing case、需要比较 competing alternatives、需要分析 boundary，而且 Discussion 的抽象应与 evidence 相称。

但 AlphaDev 也暴露了当前 WIT 中一条过强的 surface rule：

> 不应要求 Figure 1 本身一定承担全文 overview。

AlphaDev 的 Figure 1 主要解释 C++ 与 assembly 的关系；真正把 AssemblyGame 的核心思想讲清楚的是 Figure 2。因此，更好的 WIT 规则应是：

> **方法论文应尽早提供一个 overview figure——通常可以是 Figure 1，但不必强制是 Figure 1——使 reader 能掌握 central idea 和 high-level operation。**

这正好符合 WIT 自己的 meta-principle：

> reasoning function 应被要求，但 surface form 不应被强制。

## 1. Introduction / missing component

AlphaDev 的 Introduction 清楚地指出一个 missing capability：已有 program synthesis 可以生成或优化程序，但要在巨大的 program space 中高效找到同时 correct 且 fast 的程序仍然困难，尤其是直接优化 CPU-level measured latency。AlphaDev 把这一问题改写成 AssemblyGame，并用 RL + search 来解决。

这与 WIT 的 Introduction logic 相容：

`Final Goal → Existing Components → Missing Capability → Why It Matters → This Study`

论文并没有机械地按这个模板写，反而进一步说明 WIT 的原则是对的：检查的是逻辑功能，而不是固定 prose form。

## 2. Results 的组织方式

AlphaDev 的 Results 并不是 question-driven titles，而是沿着科学故事推进：

- fixed sorting algorithms；
- variable sorting algorithms；
- new algorithm discoveries；
- swap / copy moves；
- variable-sort mechanism；
- 与 stochastic search 对比；
- additional domains；
- libc++ patch。

这说明一个优秀的方法论文完全可以采用 component / finding-driven 的表面结构，只要背后的 scientific progression 清楚。

因此 AlphaDev 支持 WIT 当前的修正：

> **Results should expose the logical progression of the scientific story, not obey a single title format.**

## 3. 自然语言解释 + 最小 concrete walkthrough

AlphaDev 先用自然语言解释 AssemblyGame 的 basic idea：agent 逐步选择 low-level CPU instructions 来构造程序，reward 同时考虑 correctness 与 latency。随后再用很小的 sorting example 把状态、action 和 correctness 具体化。

论文还使用三个数的 sorting network 来解释 AlphaDev swap move。reader 能直接看到传统步骤中为什么存在冗余，以及 AlphaDev 为什么可以少掉一条 instruction。

这非常好地说明了 WIT 新增原则：

> **先用自然语言讲清 idea，再用最小例子让方法“跑起来”。**

但这里必须强调：这是 **positive example，而不是 independent validation**，因为这条 WIT 规则就是受 AlphaDev 启发后加入的。

## 4. Worked comparative case：why ours succeeds / why existing methods fail

AlphaDev 的 comparative case 做得非常好。

对于 swap / copy move，论文把 classic sorting-network logic 与 AlphaDev 改进后的 logic 并排展示，因此读者不仅知道“少了一条 instruction”，还可以理解少掉的原因。

对于 VarSort4，human benchmark 根据 sequence length 分别调用相应 sorting network；AlphaDev 则复用已经排序的前缀，再调用一个 simplified routine。这样就直接解释了 latency gain 从哪里来。

这支持 WIT 的区分：

> **Benchmark evidence 说明方法有效；worked comparative case 解释方法 how and why it works。**

## 5. Difference-focused benchmark analysis

AlphaDev 不只报告总体 performance，而是进一步区分不同 regime：

- fixed vs variable sorts；
- branchless vs branching；
- algorithm length 能否作为 latency proxy；
- cold start vs warm start stochastic search。

这正是 WIT 所强调的：不能只问“平均提高多少”，还要问：

> **performance gap 出现在哪里？为什么在那里出现？**

AlphaDev 同时提示 WIT 的措辞可以更宽一点。除了 cases / subsets，还应包括：

> **cases, subsets, conditions, or regimes**

因为方法差异有时来自条件或 regime，而不是某几个具体样本。

## 6. Competing alternatives、falsification 与 boundary

AlphaDev 认真比较了 stochastic superoptimization baseline，并设置 cold-start 与 warm-start variants，也控制 computational resources / wall-clock。论文并没有宣称 AlphaDev 在任何情况下都优越；例如在某些 branchless、warm-start 场景下 stochastic search 更具 computational efficiency。

这符合 WIT 的核心思想：

> 要设计 discriminating comparison，而不是只找 supporting evidence；claim 要有 boundary。

Nature 文章页面的 post-publication discussion 还提供了一个很好的 boundary lesson。论文写到 brute force 可证明 sort 3 不存在短于 17 instructions 的程序；作者后来澄清，这个 lower bound 是针对本文限定的 branchless instruction set。这个例子非常直接地说明：

> **Claim strength and scope must match the tested evidence boundary.**

## 7. Discussion

AlphaDev 的 Discussion 很短：总结主要 achievement，指出 RL 与 stochastic search 的互补性，并讨论可能的 generalization。它没有机械出现一套“Limitations → Future Work → Conclusion”的固定结构。

这支持 WIT 当前的非模板化原则：

> **Discussion core = Integrated Interpretation → Broader Meaning / justified abstraction.**

New Questions、Boundary、Limitations、Future Studies 有科学需要时才展开，不应成为 ritualized sections。

## 8. 六维 question space

AlphaDev 很自然地可以用 WIT 的六维 question space 展开：

- **Existence / Whether：** RL 能否发现优于高度优化 human baseline 的 sorting routines？
- **Determinants / What：** representation、reward、search strategy、branching structure、initialization regime。
- **Cause / Why：** learned search 为什么能优于某些 stochastic search。
- **Mechanism / How：** AssemblyGame + neural representation + MCTS-guided RL + correctness/latency reward。
- **Boundary / When：** branchless / branching、cold / warm start、instruction-set restriction、hardware regime。
- **Magnitude / To what extent：** instruction savings、latency gains、libc++ downstream impact。

因此六维框架作为 attention map 是合理的；它不需要变成论文的六个 subsection。

## 最终判断

AlphaDev 没有推翻 WIT 的核心 reasoning architecture。相反，它：

1. 支持 WIT 对 Results / Discussion 非模板化的理解；
2. 强烈说明 mechanism-revealing worked example 的价值；
3. 支持对 performance gap 来源进行系统分析；
4. 支持 competing-method comparison 与 boundary-aware claim；
5. **反驳了“Figure 1 本身通常必须压缩全文 idea”这一过强 surface rule。**

因此最准确的结论不是：

> “AlphaDev 验证了 WIT。”

而是：

> **AlphaDev 对 WIT 的大部分原则构成了一个很强的 external stress test，并帮助 WIT 把一条过强规则修得更准确。**

最值得立即修改的一条是：

> **方法论文应尽早提供一个 overview figure——often, but not necessarily, Figure 1——使 reader 能够掌握 central idea 和 high-level operation。**

这本身就是 WIT 的运行方式：

`Rule → Counterexample → Boundary → Better Rule`
