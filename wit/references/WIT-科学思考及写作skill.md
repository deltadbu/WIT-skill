# WIT：科学思考及写作skill

By Dongbo Bu  
Institute of Computing Technology,  
Chinese Academy of Sciences  
Email: dbu@ict.ac.cn  
2026/08/28


> **贯穿示例：** 本文主要以 **MSFold** 和 **AlphaGo** 两篇研究作为贯穿示例。MSFold 代表蛋白质结构 / 生物信息学研究，AlphaGo 代表经典 AI / method-system research。两者用于从不同研究范式解释、检验和修正 WIT，而不是要求所有论文都采用相同的表面写法。

## 1. WIT 的释义

**WIT = Writing Is Thinking。**

WIT 是一套“**用写作推动科学思考**”的工作流：把开题、实验结果、Discussion、Limitations 和 Future Studies 串成一个连续的科研推理过程。

它的核心观点只有一句：

> **写作不是思考完成后的表达，而是科学思考本身的一部分。**

WIT 内部使用 **REWRITE loop** 作为执行循环：

> **Research Question → Examine Literature → Work → Read Finding → Interrogate → Test Answerability → Extend / Exit**

其中，WIT 是总框架，REWRITE 是具体运行机制。

> **使用原则：** WIT 不是只给结论的 checklist。对于关键规则，应同时说明“为什么”、给出典型例子，并提供可执行的判断标准。

> **元原则：WIT 约束的是科学思考需要完成的逻辑功能，而不是论文表面的固定格式。**
>
> 同一种 reasoning function，可以用不同的 prose form 表达。WIT 应要求作者能够回答“为什么这一部分存在、证据支持什么、下一步逻辑是什么”，但不要求每篇论文都机械地使用同一种 subsection title、同一种段落顺序或固定的 Limitations / Future Studies 模板。
>
> **Reasoning structure ≠ Surface prose structure.**

> **WIT 用来生成问题，而不是用来完成清单。**

WIT 的作用是帮助研究者暴露可能遗漏的 scientific dimensions、competing explanations 和 unresolved questions；它不要求每个 project 把所有问题逐项回答，也不要求每篇论文把所有模块逐项写完。

> **人机协同原则：推进研究，成长研究者。**  
> **Advance the research. Grow the researcher.**

WIT 不仅要帮助研究者把研究做得更好，也要让研究者在协同过程中提升提问、解释证据、比较不同解释、设计实验、校准 claim 和进行 scientific judgment 的能力。如果 paper 变好了，而研究者只是被动等待 AI 产出，那么这种 human–LLM collaboration 并没有达到 WIT 的目标。

> **Automate labor; augment judgment.**  
> **自动化劳动，增强判断。**

对于低 learning-value 的劳动，例如检索整理、格式处理、重复性 coding、机械分析和文字整理，可以充分利用 AI 自动化；但不应把研究者本应掌握的 reasoning 自动化掉。研究者应持续参与高价值的 judgment nodes：什么问题值得研究、一个重要 finding 应如何解释、有哪些 competing hypotheses、哪个 experiment 最有 discrimination power、证据能够支持多强的 claim、结论的 boundary 在哪里，以及什么时候应该停止扩展研究。

因此，LLM 在 WIT 中应主要扮演 **scaffold、challenger、generator 和 auditor of reasoning**：必要时先让研究者给出初步判断，再补充遗漏、提出反例、比较 alternatives、帮助修正判断。这并不意味着每次都要强行采用苏格拉底式问答；如果用户明确要求直接答案，或者处于 Deadline Mode，WIT 应直接帮助完成任务，同时仍把关键假设、备选解释和决策逻辑显性化。

## 2. WIT 解决哪些痛点问题

WIT 主要解决科学研究与论文写作中以下常见困惑：

（1）**开题时只有一个模糊想法，不知道怎样把问题真正“打开”。**  
   如何从 **Whether / What / Why / How / When / To what extent** 等角度，把一个单点问题展开成可以研究的 question space？

（2）**Results 与 Discussion 经常混在一起。**  
   Results 的 subsection 应该写到什么程度？什么时候只是 Fact，什么时候可以加入 1-hop Opinion？Discussion 为什么不能只是把 Results 再重复一遍？

（3）**一个 finding 会产生很多新问题，但不知道哪些应该现在做，哪些应该留到以后。**  
   哪些问题能够通过当前数据或补充实验回答，并应继续形成新的 Results？哪些问题才真正属于 Discussion、Limitations 和 Future Studies？

（4）**Discussion 容易要么太浅，要么过度拔高。**  
   如何从多个 1-hop Opinions 综合成 2-hop Interpretation，再进一步抽象成 beyond this study 的 General Principle，同时保持证据边界？

（5）**Introduction 常常只是“已有工作很多，但仍有 gap”的文献罗列。**  
   如何从最终科学目标出发，识别 previous studies 已经建立的必要组件，并说明本研究补上的真正是哪个 **missing component**？

（6）**Limitations 和 Future Studies 容易变成例行公事。**  
   如何让 limitation 来自“当前研究无法回答的重要问题”，并让 future study 成为针对这些 unresolved questions 的自然下一步？

（7）**真实研究会出现异常结果、审稿人挑战和 deadline。**  
   如何处理 unexpected findings？如何从 reviewer perspective 做压力测试？如何在有限时间和资源下形成一个最小但完整、可信、可辩护的 scientific story？

（8）**AI 可以提高研究产出，但如果把 reasoning 过度外包，也可能削弱研究者自身的科研能力。**  
   如何让 human–LLM collaboration 在推进 project 的同时，也训练研究者提出问题、解释 finding、比较 hypotheses、选择实验和独立进行 scientific judgment 的能力？

## 3. 如何使用 WIT

WIT 有两种主要使用方式：

（1）**Agent Skill 模式**：如果所使用的 agent / IDE 支持 Agent Skills 或能够读取项目中的 skill 文件，推荐让 [`SKILL.md`](../SKILL.md) 作为入口，由 agent 按其中的规则自动选择 WIT 的工作模式、加载完整 workflow，并在人与 LLM 之间安排合适的 control transfer。

（2）**直接加载 WIT workflow**：如果当前环境不支持 skill discovery，或者只是想在一次对话中使用 WIT，可以直接把完整的 WIT workflow 文件提供给 AI，再明确要求它按照 WIT 工作。

二者的关系是：

> **完整 WIT 文件定义方法；`SKILL.md` 定义 agent 如何调用和执行这个方法。**

也就是说，完整 WIT 文件更像 **reference / specification**；[`SKILL.md`](../SKILL.md) 更像 **agent-facing executable collaboration protocol**：它规定什么时候调用 WIT、调用哪个 mode、需要加载哪些材料、哪些步骤可以由 AI 自动完成、哪些关键 judgment 应让研究者参与，以及什么时候停止。

### 3.1 文件入口与下载

WIT 的 GitHub 仓库：

> [https://github.com/deltadbu/WIT-skill](https://github.com/deltadbu/WIT-skill)

主要文件：

- [`SKILL.md`](../SKILL.md) — agent 的执行入口与人机协同协议；[直接下载](https://github.com/deltadbu/WIT-skill/raw/refs/heads/main/wit/SKILL.md)
- [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md) — 中文完整 workflow；[直接下载](https://github.com/deltadbu/WIT-skill/raw/refs/heads/main/wit/references/WIT-%E7%A7%91%E5%AD%A6%E6%80%9D%E8%80%83%E5%8F%8A%E5%86%99%E4%BD%9Cskill.md)
- [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md) — English full workflow；[直接下载](https://github.com/deltadbu/WIT-skill/raw/refs/heads/main/wit/references/WIT-Scientific-thinking-and-writing-skill.md)

如果希望长期使用 WIT，推荐直接 clone 整个仓库，而不是只下载一个文件：

```bash
git clone https://github.com/deltadbu/WIT-skill.git
```

真正可安装的 skill package 是仓库中的 [`wit/`](../) 子目录。保持这个目录整体不变，就能保证 `SKILL.md`、`references/`、`tests/` 和 `case-studies/` 之间的相对路径正确。

---

### 3.2 使用 `SKILL.md`：让 Agent 按 WIT 自动协同

如果 agent 支持 Agent Skills，推荐把仓库中的 [`wit/`](../) 子目录——也就是真正可安装的 WIT skill package——安装或放入该 agent 能够发现的 skill 目录。不同平台的 skill 安装位置可能不同，应按照相应平台的规则配置；WIT 本身不假定某一个固定目录。

Agent 发现 [`SKILL.md`](../SKILL.md) 后，首先读取其中的 metadata 和执行规则。它会把 `SKILL.md` 作为一个 **dispatcher + workflow controller + collaboration protocol**，主要负责：

（1）判断当前任务是否应该使用 WIT；

（2）识别当前需要的 mode，例如 **Open a question、Advance from a finding、Choose the next experiment、Review Results、Review Discussion、Stress-test a study、Deadline Mode**；

（3）根据语言与任务，加载完整的 [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md) 或 [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md)；

（4）需要时再加载 skill package 内的 `tests/` 或 `case-studies/`（仓库路径分别为 [`wit/tests/`](../tests/) 和 [`wit/case-studies/`](../case-studies/)）中的 supporting materials，而不是默认把所有材料一次性塞进 context；

（5）执行 WIT 的 REWRITE decision loop、reasoning invariants 和 stop rule；

（6）在人机协同中安排 **control transfer**：低 learning-value 的劳动可以由 AI 自动完成；高 learning-value 的 judgment nodes，应让研究者保持实质参与。

因此，使用 [`SKILL.md`](../SKILL.md) 时，用户不需要每一步都手工指定 WIT 的全部流程。可以直接说：

> Use WIT to analyze this finding and decide the next experiment.

或者：

> 按 WIT 检查这篇论文的 Results 和 Discussion。

如果 agent 已经正确发现并加载 WIT，它应根据 [`SKILL.md`](../SKILL.md) 自动选择相应的 mode，而不是要求用户重新描述整套 WIT 流程。

如果当前工具**不能自动发现 skill**，但能够读取 repo 中的文件，也可以显式要求：

> 请先读取 [SKILL.md](../SKILL.md)，再按照其中的 routing、human–LLM collaboration rules 和 stop rule 使用 WIT。需要中文完整 workflow 时，读取 [WIT-科学思考及写作skill.md](WIT-科学思考及写作skill.md)。

核心原则是：

> **`SKILL.md` 不是 WIT 理论正文的替代品，而是 agent 执行 WIT 的入口和控制程序。**

---

### 3.3 不支持 Skill Discovery 时：直接加载完整 WIT workflow

如果只是使用普通 ChatGPT 对话，或者当前 agent 不支持自动发现 [`SKILL.md`](../SKILL.md)，最简单的方法是直接加载完整的 WIT workflow。

#### 在 ChatGPT 中

下载并上传中文 [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md)，或英文 [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md)，然后说：

> 请读取这个 WIT workflow，并在本次对话中按它工作。

之后可以直接说：

> 按 WIT 展开这个 finding：……

或：

> 按 WIT 检查这篇论文的 Results 和 Discussion。

如果希望同时采用 agent-level 的 routing、human–LLM control transfer 和 stop rule，也可以把 [`SKILL.md`](../SKILL.md) 一并提供给 AI。

如果开启新的对话，而这些文件没有自动带入，就需要重新提供文件或 GitHub 链接。

#### 在 ChatGPT Work / 项目空间中

可以把 [`SKILL.md`](../SKILL.md) 与中文 [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md) 或英文 [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md) 放进对应项目资料中，然后在项目开始时说：

> 请读取 WIT 的 `SKILL.md` 和完整 workflow，并把它们作为本项目的人机协同科学思考与写作规则。

这样可以让 WIT 与论文草稿、实验结果、项目文档一起长期使用。

#### 在 VSCode / Codex / Copilot 中

推荐直接 clone [WIT GitHub repo](https://github.com/deltadbu/WIT-skill)。若工具支持 Agent Skills，则把仓库中的 [`wit/`](../) 子目录作为可发现的 skill package，并让其从 [`wit/SKILL.md`](../SKILL.md) 自动发现和执行 WIT；若不支持，则在对话或项目 instruction 中明确要求：

> Read [SKILL.md](../SKILL.md) first, then load the appropriate full WIT workflow and follow its routing, reasoning, human–LLM collaboration, and stop rules.

核心原则是：

> **支持 Skill Discovery：以 `SKILL.md` 为入口。**  
> **不支持 Skill Discovery：直接加载完整 WIT workflow；需要更稳定的 routing 与协同控制时，再同时加载 `SKILL.md`。**

---

### 3.4 加载后如何调用

#### 模式 A：开题——把问题打开

输入：

> 按 WIT 把这个问题打开：XXX。

重点从以下方向展开：

> **Whether / What / Why / How / When / To what extent**

目标是把一个模糊问题展开成可研究的 **question space**。

---

#### 模式 B：从一个 Finding 继续推进研究

输入：

> 这是一个 finding：XXX。按 WIT 展开。

重点输出：

（1）Fact；
（2）1-hop Opinion；
（3）Literature positioning；
（4）新的 Why / How / What / When / Whether / To what extent 问题；
（5）哪些当前可回答；
（6）最值得补的实验或分析；
（7）哪些当前不可回答；
（8）2-hop Interpretation；
（9）General Principle；
（10）Potential Limitation（若与当前 story 相关）；
（11）Potential Future Study（若值得显式展开）。

这是 WIT 最核心的日常使用方式：

> **每得到一个重要 finding，就重新把问题打开一次。**

---

#### 模式 C：检查 Results

输入：

> 按 WIT 检查 Results。

重点检查：

- subsection titles 连起来，是否能形成清楚、递进的 scientific story；
- 每个 subsection 的存在是否有明确的逻辑功能，而不只是“又做了一个实验”；
- 是否形成清楚的 **Fact → restrained 1-hop Opinion**；
- **Question / Finding-driven** 的组织是否合适；如果是 method / system paper，**Component / Pipeline-driven** 的组织是否更自然；
- 即使表面按 pipeline 组织，背后的 **Question → Test → Finding → Next Step** reasoning 是否仍然可恢复；
- 是否有本来可以回答的问题被过早扔进 Discussion；
- 是否遗漏关键 control、competing explanation、counterexample 或异常结果；
- **Early figures 及其 captions：** 不应强制要求 Figure 1 本身概括全文。有些 method paper 中，Figure 1 更适合先介绍**问题、representation 或 motivation**，再在后续的 early figure 中给出方法 overview；AlphaDev 就是一个典型例子。真正需要检查的是：是否存在一个**较早出现的 overview figure——通常可以是 Figure 1，但不必强制是 Figure 1——**使 reader 在尚未阅读详细 Results 之前，就能掌握全文的 central idea、主要 components 和方法的 high-level operation。应检查 early figures 所承担的 reasoning function，而不是固定 figure number。
- **Figure caption 既要说明 evidence，也可以给出 immediate takeaway：** 对于 Results figure，caption 不应只是机械地列出各 panel 或重复坐标轴信息。应以图中直接展示的 **Fact** 为主体，并可以加入一个 **restrained 1-hop Opinion**——即由该图直接支持的 immediate take-home message。不要在 caption 中写需要综合多个 findings 才成立的 2-hop interpretation、broad abstraction 或 general principle；这些通常应留在 Results 正文或 Discussion。一个简单检查是：**图里展示了什么？→ 这张图立即告诉我们什么？** 对于 overview / conceptual figure，caption 则可以重点解释 idea、workflow 和 components，不必强行加入结果性的 opinion。
- **数学公式 / 计算机算法方法的自然语言解释与 concrete walkthrough：** 如果论文的核心方法主要由数学公式或计算机算法描述，不应只依赖 formal notation 或 pseudocode。应首先用**自然语言解释其 basic idea**：该公式或算法试图解决什么问题，关键项或关键步骤分别意味着什么，以及为什么要这样设计。然后再提供一个尽可能简单的 concrete example：给出公式中关键变量或关键项的具体数值，逐步展示计算过程；或者在一个很小的输入上，逐步展示算法中的重要步骤。优先选择**能够暴露核心 mechanism 的最小例子**。其目标是让 reader 先在概念上理解方法，再能够在头脑中**“执行”一次这个方法**。AlphaDev 是一个很典型的例子：用三个数的排序，就能够非常直观地展示算法的运行过程。
- **方法类 paper 的 worked case study：** Results 中是否提供了一个简洁、representative 的 case，使 reader 可以从 input 出发，沿着关键 intermediate steps 一直看到 output？这个 case 应说明：**本文方法如何运行、为什么能够 succeed、为什么 existing methods 在同一个 case 上 failed 或变得 unreliable，以及究竟是哪一个 mechanism / design choice 造成了这种差异。** 优先选择**能够隔离方法本质差异的最简单 case**。Case study 的作用是解释 mechanism，而不是替代 benchmark-level evidence。
- **Difference-focused benchmark analysis：** accuracy、precision、recall、AUC、correlation、success rate 等 aggregate metrics 可以说明方法总体上是否更好、好多少，却通常不能解释 why。应检查作者是否从 benchmark 中找出 proposed method 与 existing methods 表现差异最大或具有系统性差异的 cases / subsets，并进一步分析：**performance gap 来自哪里？existing methods 为什么在这些 cases 上失败？本文方法为什么能够成功？** 应优先寻找 systematic pattern of differential performance，而不是只挑选少数漂亮的 cherry-picked examples。

对于 method paper，这几类 evidence / explanation 的功能彼此互补：

> **Early figures 负责给 reader 定向：Figure 1 可以先介绍问题，而后续较早出现的 overview figure 再解释 central idea 和 high-level operation；自然语言解释加 minimal concrete walkthrough 让数学或算法方法真正变得 operationally understandable；benchmark statistics 说明方法是否有效、提高多少；worked case 解释为什么本文方法 succeed、为什么 existing methods fail；difference-focused analysis 解释 improvement 从哪里来，以及这个 mechanism 是否具有系统性。**

原则：

> **Results should expose the logical progression of the scientific story, not obey a single title format.**

---

#### 模式 D：检查 Discussion

输入：

> 按 WIT 检查 Discussion。

先检查 **core functions**：

- 是否把多个局部 findings / 1-hop Opinions 综合成 integrated interpretation；
- 是否超越逐条重复 Results；
- 是否进一步说明 broader meaning，必要时上升到 General Principle。

再检查 **optional extensions**（仅在研究需要时）：

- 是否值得从 findings 再打开新的 question space；
- 是否存在真正需要明确写出的 boundary / limitation；
- Future Studies 是否能够针对 unresolved questions，而不是例行公事。

原则：

> **Discussion 的核心功能是 interpretation and abstraction；New Questions、Limitations 和 Future Studies 是有价值的扩展，但不是每篇论文都必须显式出现的固定段落。**

---

#### 模式 E：寻找下一步实验

输入：

> 按 WIT 判断下一步最值得做什么实验。

优先考虑：

（1）会改变 central claim 的问题；
（2）reviewer 最可能提出的关键挑战；
（3）competing explanations；
（4）boundary conditions；
（5）低成本、高信息量的实验。

---

#### 模式 F：Deadline Mode

输入：

> Deadline 很近，按 WIT 帮我收束。

输出：

- 必须做；
- 最好做；
- 可以不做；
- 应写入 Limitation；
- 应留给 Future Study；
- central claim 是否需要收缩。

WIT 的日常使用可以压缩成一句话：

> **支持 Skill Discovery 时，让 agent 从 `SKILL.md` 进入 WIT；不支持时，直接加载完整 workflow。然后从问题开始，每得到一个 finding 再产生问题；能回答的继续做，不能回答的先判断是否重要，再决定是否进入 Discussion、Limitations 或 Future Studies。**

## 4. REWRITE：核心研究循环

WIT 内部通过 **REWRITE** 循环推进研究：

> **Research Question → Examine Literature → Work / Experiment → Read Finding → Interrogate Finding → Test Answerability → Extend / Exit**

七个步骤不是彼此独立的模块，而是一个连续循环。

### 4.1 R — Research Question：研究问题

“开题”不只是确定一个题目，而是：

> **把一个单点问题展开成一个 scientific question space。**

这里不应只是机械地罗列疑问词。更本质的做法，是把问题展开成六类彼此尽量正交的科学维度。

#### 4.1.1 Whether → Existence：现象是否存在？

首先问：

> **这个现象真的存在吗？**

这是最基础的 existence question。

例如：

> MSFold 是否真的比标准 decoding 更容易恢复 alternative conformations？

这一层的目标是确认：

- 现象是否稳定存在；
- 是否具有统计显著性；
- 是否可重复；
- 是否只是偶然结果。

#### 4.1.2 What → Determinants：哪些因素决定它？

当现象存在后，进一步问：

> **哪些变量、因素或属性决定这个现象的强弱与出现？**

例如：

> 哪些 protein properties 决定 MSFold 是否能够恢复 alternative conformations？

可能的 determinants 包括 protein size、conformational change type、sequence identity、token-space diversity、sampling budget 等。

这一层关注：

> **What determines the outcome?**

#### 4.1.3 Why → Cause：为什么会发生？

Why 问的不是“具体过程怎么发生”，而是：

> **什么原因导致了这个现象？**

即寻找 causal driver。

例如：

> 为什么标准 decoding 难以恢复 alternative conformations？

可能原因包括：

- representation 中根本没有编码这些 states；
- search 被限制在局部 mode；
- decoding objective 偏好 dominant state。

因此：

> **Why asks what causes the phenomenon.**

#### 4.1.4 How → Mechanism：原因通过什么机制产生结果？

How 与 Why 不同。

Why 已经回答：

> **是什么原因导致了现象？**

How 则继续问：

> **这个原因通过什么过程、路径或机制产生结果？**

例如：

> 如果原因是标准 decoding 容易陷入局部 mode，那么 parallel tempering 是如何帮助跨越 token-space barrier、进入 alternative states 的？

因此：

> **Cause → Mechanism → Outcome**

以及：

> **Why asks what causes it; How asks through what mechanism the cause produces the effect.**

#### 4.1.5 When → Boundary Conditions：什么条件下成立或失效？

这里的 When 不应只理解为时间。

它代表更一般的：

> **Under what conditions does the conclusion hold or fail?**

例如：

- 在哪些 protein classes 上成立？
- 在哪些 conformational change types 上失效？
- 在 low-data regime 还是 high-data regime 更明显？
- 在什么 sequence identity 范围内成立？
- 在哪些组织、细胞类型、空间区域中成立？

原先可以归入 “Where” 的很多问题，本质上也属于这一维度，因此不再单独设置 Where。

这一层关注：

> **Boundary conditions**

#### 4.1.6 To what extent → Magnitude：效应有多大？

最后问：

> **这个效应到底有多强？范围有多宽？**

例如：

- success rate 提高多少？
- improvement 是否只在少数 samples 中出现？
- 能恢复多大幅度的 conformational change？
- effect size 是否具有实际意义，而不只是统计显著？

这一层关注：

> **Magnitude / effect size / range**

因此，“把问题打开”可以压缩为六个科学维度：

> **Existence → Determinants → Cause → Mechanism → Boundary Conditions → Magnitude**

对应：

> **Whether → What → Why → How → When → To what extent**

这六维并不要求每个 project 都全部回答，而是用于系统检查：

> **当前研究的问题空间中，还有哪些重要维度没有被打开？**


#### 4.1.7 一个更大众化的例子：用 AlphaGo 把六维 question space 打开

MSFold 的例子适合蛋白质结构研究，但对非本领域读者不够直观。下面用 AlphaGo 的经典 Nature 论文 *Mastering the game of Go with deep neural networks and tree search* 说明六个维度。

AlphaGo 面对的核心困难很清楚：围棋的搜索空间极大，论文估计围棋平均 branching factor 约为 250、典型 game depth 约为 150，因此 exhaustive search 不可行。AlphaGo 的核心思想是同时压缩搜索树的**宽度**和**深度**：policy network 用来优先选择有希望的落子，value network 用来评估局面，再与 Monte Carlo tree search (MCTS) 结合。

这里最重要的不是把六个疑问词硬套在 AlphaGo 上，而是看：

> **同一个研究成果，可以沿六种不同的 scientific dimensions 被继续打开。**

##### Whether → Existence：AlphaGo 真的能达到专业围棋水平吗？

这是最直接的 existence question：

> **深度神经网络 + tree search 的组合，是否真的能够解决此前计算机围棋长期无法突破的问题？**

论文给出了非常直接的证据：

- AlphaGo 对其他 Go programs 的胜率达到 **99.8%**；
- 对欧洲围棋冠军 Fan Hui 的正式比赛结果为 **5:0**。

因此这一层回答的是：

> **The phenomenon exists：这种方法确实能够达到此前计算机围棋没有达到的水平。**

注意，Whether 不是问“为什么成功”，只是先确认：

> **它到底成功了没有？**

##### What → Determinants：哪些因素决定 AlphaGo 的棋力？

确认 AlphaGo 很强之后，下一步自然不是立刻问机制，而是先问：

> **什么因素决定它有多强？**

论文实际上分析了多个 determinants。

例如：

- supervised policy network 对 expert moves 的预测准确率达到 **57.0%**，高于当时其他研究的 **44.4%**；
- policy prediction accuracy 的小幅提高会带来明显的 playing-strength 提高；
- reinforcement learning 后的 policy network 在 head-to-head 中对 supervised policy network 的胜率超过 **80%**；
- 不使用 search 时，RL policy network 对 Pachi 的胜率达到 **85%**；
- value network、rollout policy、policy network 以及 search budget 都会影响最终棋力。

因此 What 问的是：

> **Which components or variables determine performance?**

而不是：

> **这些因素为什么有效？**

##### Why → Cause：为什么传统方法难以解决围棋，而 AlphaGo 能突破？

Why 关注 causal explanation。

论文一开始就指出两个核心困难：

- **search breadth 太大**：每个局面有大量可能落子；
- **search depth 太深**：一盘棋需要搜索很长的未来序列。

因此 exhaustive search 在围棋上不可行。

AlphaGo 能够突破，一个核心 causal explanation 是：

> **它不再平等地搜索所有可能性，而是利用学习到的 policy 和 value，把有效搜索空间大幅压缩。**

更具体地说：

- policy network 降低有效 **breadth**；
- value network 降低有效 **depth**。

所以：

> **Why = Cause：成功的原因是什么？**

这里得到的是一个比“用了 deep learning”更本质的解释：

> **AlphaGo succeeds because learning makes an otherwise intractable search problem tractable enough to search.**

##### How → Mechanism：policy/value network 如何真正改变 MCTS？

知道“原因是缩小有效搜索空间”之后，How 才继续问：

> **这个原因具体通过什么算法过程产生效果？**

AlphaGo 的 mechanism 可以进一步拆开：

（1）**Policy network guides selection and expansion**

在搜索树中，不再平均探索所有合法动作，而是优先探索 policy network 认为更可能的 moves。

（2）**Value network evaluates leaf positions**

搜索到 leaf node 后，不必每次都完整模拟到终局；value network 可以直接估计该局面的 winning probability。

（3）**Rollout provides another evaluation**

fast rollout policy 继续模拟到游戏结束，得到另一种局面估值。

（4）**MCTS backs the information up**

value-network evaluation 和 rollout result 被组合，并沿搜索路径向上 backup，更新 action values 和 visit counts。

因此：

> **Cause：学习缩小了有效搜索空间。**  
> **Mechanism：policy-guided search + value evaluation + rollout + MCTS backup 具体实现了这种压缩。**

这正好体现：

> **Why asks what causes the success; How asks through what computational mechanism that cause produces stronger play.**

##### To what extent → Magnitude：AlphaGo 到底强了多少？

Magnitude question 不满足于：

> “AlphaGo 很强。”

而要问：

> **强多少？计算效率提高多少？各个组件带来多大提升？**

AlphaGo 论文给出了多个量化尺度：

- 对其他 Go programs：**99.8% win rate**；
- 对 Fan Hui：**5–0**；
- RL policy 对 SL policy：**>80% win rate**；
- RL policy 在没有 search 的情况下对 Pachi：**85% win rate**；
- 单次 value-network evaluation 的准确度接近使用 RL policy 的 Monte Carlo rollouts，但计算量约少 **15,000 倍**。

这些数字回答的不是“有没有作用”，而是：

> **How large is the effect?**

因此，Whether 与 To what extent 的区别也非常清楚：

> **Whether：有没有？**  
> **To what extent：有多大？**

##### When → Boundary Conditions：AlphaGo 在什么条件下成立、什么时候会失效？

这是一个特别值得注意的例子。

AlphaGo 论文已经证明：

- 方法在 full-sized Go 上有效；
- 对多种计算机程序有效；
- 对一位职业级人类棋手有效。

这些给出了部分 boundary evidence。

但论文并没有系统画出完整的 boundary map。

沿 WIT 继续追问，可以产生：

- 当 search budget 大幅降低时，优势是否仍然存在？
- policy network 较弱时，MCTS 还能否补偿？
- value estimate 出现系统性偏差时，search 会在什么时候失效？
- 对不同风格、不同水平的人类棋手，效果是否一致？
- 这种 **learning + search** 的原则能否迁移到围棋之外的其他大规模决策问题？

这些问题不是原论文都已经回答了，而是由 AlphaGo 的 finding 自然生成的：

> **Under what conditions does the conclusion hold or fail?**

这正是 Boundary Conditions 的意义。

---

用 AlphaGo 可以非常直观地看到六维之间的区别：

| Dimension | AlphaGo 中的问题 |
|---|---|
| **Whether → Existence** | 深度网络 + search 是否真的能达到专业围棋水平？ |
| **What → Determinants** | policy accuracy、RL、value network、search 等哪些因素决定棋力？ |
| **Why → Cause** | 为什么这种方法能够突破传统计算机围棋？ |
| **How → Mechanism** | policy/value network 如何嵌入 MCTS 并改变搜索过程？ |
| **When → Boundary Conditions** | 在什么 search budget、opponent、模型质量和任务条件下仍成立或失效？ |
| **To what extent → Magnitude** | 胜率、棋力和计算效率到底提高了多少？ |

因此，一个 finding：

> **AlphaGo defeated a professional Go player.**

并不是研究的终点。  
沿六维 scientific question space 展开后，它立刻变成：

> **有没有 → 由什么决定 → 为什么 → 如何实现 → 在什么条件下成立 → 到底强多少**

这就是 WIT 所说的：

> **把问题打开。**

**Reference:** Silver, D. et al. *Mastering the game of Go with deep neural networks and tree search*. Nature 529, 484–489 (2016), doi:10.1038/nature16961.


### 4.2 E — Examine the Literature：审视文献

文献不是 Introduction 的装饰，而是科研推理的坐标系。

WIT 设置两个文献检查点。

#### 4.2.1 Literature Checkpoint 1：研究开始之前

在确定核心 scientific question 后，检查：

（1）这个问题是否已经被回答？
（2）已有工作提供了哪些解释？
（3）存在哪些 competing hypotheses？
（4）已知的 boundary conditions 是什么？
（5）当前工作相对于已有研究究竟新增什么？

这里的目标不是“找够引用”，而是判断：

> **Novelty 在哪里？**

以及：

> **当前研究真正需要区分哪些已有解释？**

#### 4.2.2 Literature Checkpoint 2：得到重要 Finding 之后

每得到一个重要 finding，再回到文献，问：

> **这个 finding 与已有认识是什么关系？**

可以分成：

- **Confirm**：验证已有结论；
- **Contradict**：与已有结论冲突；
- **Refine**：对已有结论增加边界、条件或更精细解释；
- **Extend**：把已有结论推广到新的任务、体系或场景；
- **Reframe**：改变问题本身的理解方式。

这一检查点直接决定 Discussion 的深度。

真正值得讨论的通常不是：

> “我们的结果与某文一致。”

而是：

> **我们的发现改变、修正或扩展了什么认识？**

---

### 4.3 W — Work / Experiment：开展研究与实验

每个实验都应当对应一个明确问题。

不要因为“论文通常需要 ablation”就做 ablation；也不要因为“别人画 t-SNE”就画 t-SNE。

先问：

> **这个实验究竟要回答什么问题？**

理想结构是：

> **Question → Experiment → Data → Finding**

实验是回答问题的工具，不是论文 Results 的组织单位。

---

### 4.4 R — Read the Finding：读懂 Finding

得到结果以后，不要立刻跳到下一项实验。首先区分三个层级。

#### 4.4.1 Data：数据

原始观察或定量结果。

#### 4.4.2 Finding：发现

数据直接支持的定性陈述。

#### 4.4.3 1-hop Opinion：一步推论

在不远离数据的前提下，向前走一步。

因此，一个 Results subsection 可以压缩成非常实用的 **Fact–Opinion** 结构：

> **Question → Experiment → Fact → 1-hop Opinion**

其中：

#### 4.4.4 Fact

实验或分析直接得到的事实，包括数据、比较、观察到的现象和统计结果。

例如：

> Method A 在 distribution shift 下显著优于 Method B。

#### 4.4.5 1-hop Opinion

对 Fact 做出的**一步解释**。它可以包含作者判断，但必须紧贴当前结果，不能直接跨越到更一般的理论层面。

例如：

> 这些结果提示，X 可能提高了模型在 distribution shift 下的稳健性。

因此：

> **Results = Fact + 1-hop Opinion**

Results subsection 的结尾应当回答：

> **这个具体 Fact 意味着什么？**

但这个 Opinion 只能离 Fact 一步远。

核心原则：

> **Results 可以有 opinion，但只能是离 fact 一步远的 opinion。**

不要在这里直接跳到领域级 general principle。

---

#### 4.4.6 异常结果与偶然发现：Anomaly Branch

真实科研不是完全线性的。实验经常会出现与假设相反的结果、异常样本、unexpected subgroup、看似失败但可重复的现象，或与已有理论不一致的结果。

因此每个重要实验之后，都应检查：

> **结果是否符合原先预期？**

如果符合，进入正常 WIT / REWRITE 流程。

如果不符合，进入异常结果分支：

##### （1）是技术错误吗？

检查数据处理错误、实现 bug、测量误差、数据泄漏、batch effect、样本污染、统计假象等。

如果是：

> 修正后重新实验。

##### （2）是随机噪声吗？

问：

> 是否可重复？

如果不可重复：

> 暂不作为主要 finding。

##### （3）是稳定、可重复的异常现象吗？

如果是，不要强行把它塞回原 hypothesis。

应当问：

> **这个异常是否意味着原来的 scientific question 不完整，甚至问错了？**

此时允许：

> **Unexpected Finding → Rewrite the Question**

也就是说，REWRITE 不仅“整理已有成果”，还允许研究问题被新发现重新定义。

---

### 4.5 I — Interrogate the Finding：追问 Finding

每个重要 finding 都应该继续产生问题。

系统追问：

- **Why？**
- **How？**
- **What？**
- **Whether？**
- **When？**
- **Where？**
- **To what extent？**

一个好的 finding 应该能够打开新的 question space。

---


#### 4.5.1 Competing Hypotheses：不要过早接受单一解释

当一个 finding 出现后，不要只问：

> **“为什么会这样？”**

还应强制提出多个可能解释：

> **Finding → Hypothesis A / Hypothesis B / Hypothesis C**

例如：

> Finding：MSFold 在未见蛋白上仍然优于 baseline。

可能解释包括：

- **H1：** ESM3 的 token space 确实编码了可泛化的 alternative conformations；
- **H2：** improvement 主要来自更大的 sampling budget；
- **H3：** benchmark 中某些结构类型更容易被 parallel tempering 恢复。

真正有价值的下一步不是选择“最顺眼”的解释，而是问：

> **什么实验能够区分这些 competing hypotheses？**

因此，机制研究应优先寻找 **discriminating experiment**，而不是仅仅继续积累支持性证据。

---

#### 4.5.2 Falsification / Counterexample Check：主动攻击自己的结论

对每个重要 conclusion，再反过来问：

> **什么结果会推翻这个 conclusion？**

以及：

> **最可能的 counterexample 是什么？**

例如：

> Claim：结构信息提高了模型的 OOD robustness。

不要只继续找支持这个 claim 的数据，还应问：

- 是否存在加入结构信息后性能下降的数据集？
- 在 sequence diversity 已经很高时，这个优势是否消失？
- improvement 是否其实来自额外参数量，而不是结构信息本身？

这一检查的目的不是“证明自己错”，而是确定：

> **这个 claim 的证据边界在哪里？**

如果一个 conclusion 没有明确的潜在反证条件，它往往还没有被定义得足够科学。

---


##### 如果找到了 counterexample，怎么办？

不要立刻宣布“结论错了”。先判断反例属于哪一类：

- **技术或数据问题**：如 bug、measurement error、data leakage、sample contamination。  
  → 修正后重新实验。
- **偶然噪声**：结果不可重复。  
  → 暂不推翻 conclusion，但应降低 confidence。
- **稳定、可重复的 counterexample**：  
  → 这通常意味着原 claim 需要被修正，而不是简单丢弃。

稳定反例通常有三种价值：

（1）**收缩 claim**

例如：

> “X always improves Y”

收缩为：

> “X improves Y under conditions A and B.”

（2）**发现 boundary condition**

反例可能告诉我们：

> **这个结论什么时候不成立？**

这往往比继续堆支持性结果更有科学价值。

（3）**重写 hypothesis / principle**

如果反例击中了核心机制，就需要重新检查 central claim，甚至重写 research storyline。

因此：

> **Counterexample → Boundary Condition → Better Claim**

一个好的反例未必削弱论文，反而可能让结论更精确、更可信。

##### 如果找不到 counterexample，怎么办？

也不能因此说：

> **“Conclusion 已被证明。”**

应继续检查两个问题：

（1）**我们是否真的进行了足够强的 falsification？**

是否主动测试了：

- 最不利条件；
- extreme cases；
- OOD data；
- negative controls；
- alternative explanations；
- 可能失败的 subgroups。

（2）**这个 claim 是否具有可证伪性？**

如果无论出现什么结果，都可以通过改写措辞让 claim 保持成立，那么这个 claim 可能定义得过于含糊。

应明确写出：

> **什么结果出现时，我会承认这个 claim 不成立？**

因此完整流程是：

> **Claim → Potential Falsifier → Test → Counterexample?**

如果找到稳定反例：

> **Revise Claim / Identify Boundary / Rewrite Hypothesis**

如果没有找到：

> **Claim gains support, but is not “proven.”**

如果当前无法检验潜在 falsifier：

> **记录为 unresolved question → Limitation / Future Study**

可以把这一原则压缩成：

> **A failed falsification strengthens a claim; a successful falsification sharpens it.**


### 4.6 T — Test Answerability：检验可回答性

这是 WIT 中 REWRITE loop 最关键的决策点。

对于每个新问题，问：

> **当前研究能不能通过额外分析或实验回答这个问题？**

#### 4.6.1 如果答案是 YES

不要把它过早写进 Discussion。

应该继续做：

> **New Question → New Experiment / Analysis → New Finding → New Results**

例如，若发现 A 在 OOD 上优于 B，接着问“这种优势是否在不同 protein family 中一致？”而现有数据已包含多个 family，就应该立即分析，并把结果做成新的 Results subsection。

同样，如果“哪个模块带来主要提升？”可以通过 ablation 回答，就不应该写成 Future Work。

#### 4.6.2 如果答案是 NO

问题才进入 Discussion：

> **New Question → Why current study cannot answer → Limitation → Future Study**

---


#### 4.6.3 Information Gain：下一实验不是“最容易做”，而是“最能改变判断”

当多个问题都可以继续实验时，不应只按方便程度选择。

更好的原则是：

> **优先选择 information gain 最大、最能区分 competing hypotheses 的实验。**

可以问：

- 如果实验结果为 A，我的判断会改变多少？
- 如果结果为 B，我是否会修改 central claim？
- 这个实验能否区分两个目前都合理的解释？
- 它只是增加更多 supporting data，还是会真正减少 uncertainty？

例如：

- 再增加一个相似 benchmark，可能只让 confidence 从 0.85 变成 0.88；
- 一个针对 competing hypotheses 的 control experiment，可能直接决定机制解释 A 还是 B。

通常后者更值得优先做。

因此：

> **Next experiment ≠ easiest experiment**  
> **Next experiment = highest-value information test**

---

### 4.7 E — Extend / Exit：拓展或收束

如果新问题当前可回答：

> **New Question → New Experiment / Analysis → New Results**

如果当前不可回答或超出研究范围：

> **New Question → Discussion → Limitation → Future Study**

## 5. Results：呈现 scientific story 的逻辑推进

Results 的强规则不是：

> **每个 subsection 必须按 scientific question 命名。**

更本质的要求是：

> **Results should expose the logical progression of the scientific story.**

也就是说，读者应能够看出：

> **为什么做这一部分 → 得到了什么 evidence → evidence 支持什么局部结论 → 为什么下一部分自然出现。**

### 5.1 两种都合理的 Results 组织方式

#### （1）Question / Finding-driven

更适合 discovery、mechanism、hypothesis-testing 型研究。

例如标题可以直接写主要 answer：

- “模块 X 是性能提升的主要来源”
- “性能优势在 distribution shift 下仍然保持”
- “学到的 representation 更好地区分不同功能状态”

这种写法的优点是：

> **标题直接告诉读者学到了什么。**

#### （2）Component / Pipeline-driven

对于 method、system、engineering 型论文，按组件或 pipeline stage 组织完全可以成立。

AlphaGo 的 Nature 论文就是一个重要 counterexample。其主要研究段落依次是：

- Supervised learning of policy networks
- Reinforcement learning of policy networks
- Reinforcement learning of value networks
- Searching with policy and value networks
- Evaluating the playing strength of AlphaGo

这些标题明显是 **component / pipeline-driven**，而不是把每个标题写成一个 scientific answer。

但它们连起来形成了很清楚的 storyline：

> **learn a policy → improve the policy by self-play → learn a value function → integrate policy and value into search → evaluate the complete system**

因此：

> **Pipeline-driven ≠ technique list。**

真正的问题是：

> **这些组件是否形成一个有逻辑因果关系的 progression？**

而不是标题里有没有出现 question / finding。

### 5.2 Reasoning structure 与 surface prose 要分开

一个 Results subsection 背后的 reasoning，通常可以还原为：

> **Motivation / Question → Experiment / Analysis → Fact → 1-hop Opinion → Next Question / Next Step**

但这不意味着正文必须机械地逐项写出这些句子。

AlphaGo 的一些段落直接用类似：

> “The second stage of the training pipeline aims at ...”

来推进，而没有显式写：

> “We next asked whether ...”

这种 surface prose 完全没有问题，只要背后的 reasoning chain 是清楚的。

因此：

> **WIT 要求 reasoning 可恢复，不要求 prose 模板化。**

### 5.3 Fact + restrained 1-hop Opinion：这条仍然是强规则

Results 可以解释，但解释要紧贴 evidence。

原则：

> **Results：Fact → restrained 1-hop Opinion**

例如 AlphaGo 的 tournament results 给出非常强的 Fact：系统几乎击败了所有比较的 Go programs，并在正式比赛中击败职业棋手。

作者由此做的是局部、直接的能力解释，而没有立刻跳到：

> “This reveals a universal principle of intelligence.”

又例如，在 position evaluation 的比较中，value network 与 rollout 的组合效果优于单独使用任一者，于是作者得到一个很近的解释：

> **the two position-evaluation mechanisms are complementary.**

这正是：

> **Fact → 1-hop Opinion**

一个判断标准是：

> **如果删掉当前 subsection 的数据，这个 opinion 是否还站得住？**

如果不能，通常说明它仍然是 Results 允许的局部解释；  
如果需要整篇论文多个 findings 才能支持，就更可能属于 Discussion。

### 5.4 Results titles 的真正检查方法：能否组成一篇“小 essay”？

把 Results subsection titles 全部抽取出来，按顺序读一遍。

问：

> **它们能否独立讲出 scientific story 是怎样推进的？**

这个 story 可以是：

> **Question → Finding → Mechanism → Boundary**

也可以像 AlphaGo：

> **Component A → Component B → Integration → System Evaluation**

因此，小 essay test 检查的是：

> **logical progression**

而不是：

> **标题形式是否统一。**

### 5.5 初学者模板：Results Subsection

对于经验较少的研究者，可以先用 reasoning template 思考，再决定最终 prose 怎么写。

#### （1）Motivation / Scientific Question

> 为什么需要这一部分？我们想知道：________________________。

#### （2）Experiment / Analysis

> 为了回答或推进这个问题，我们：________________________。

#### （3）Fact

> 数据直接显示：________________________。

#### （4）1-hop Opinion

> 这些结果局部地提示：________________________。

#### （5）Next Question / Next Step

> 因此下一步自然需要：________________________。

如果是 method / system paper，还可以问：

> **这个 subsection 在整个 pipeline 中承担什么不可替代的逻辑功能？**

模板是用于暴露 reasoning，不是要求最终文章照着五句话写。

---

## 6. Discussion：Core Functions + Optional Extensions

AlphaGo 对 WIT 的一个重要修正是：

> **好的 Discussion 不一定显式包含 New Questions、Limitations 和 Future Studies。**

因此，Discussion 应区分：

> **Core Functions（强规则）**  
> 与  
> **Optional Extensions（按研究需要展开）**

### 6.1 Core Function 1：Integrated Interpretation

Discussion 首先不能只是逐条重复 Results。

它需要把多个局部 findings / 1-hop Opinions 综合起来，回答：

> **Taken together，这些结果整体意味着什么？**

可以写成：

> **Multiple local findings → Integrated Interpretation**

如果多个 findings 的综合需要比单个 subsection 多走一步，也可以理解为：

> **multiple 1-hop Opinions → 2-hop Interpretation**

但这里的“2-hop”是 reasoning depth 的描述，不是要求第一段必须机械使用某种句式。

### 6.2 Core Function 2：Broader Meaning / General Principle

在 integrated interpretation 之后，Discussion 通常还需要回答：

> **为什么这些结果值得超越当前实验本身去理解？**

可能的上升方式包括：

- deeper causal interpretation；
- 与已有 paradigm / baseline 的概念性比较；
- transferable mechanism；
- broader implication；
- General Principle。

例如 MSFold 中可以上升为：

> **Model capability is jointly determined by representation and search.**

但并非每篇论文都必须提出一个宏大的“general principle”。证据只支持到哪里，就上升到哪里。

### 6.3 AlphaGo 的反向验证：Discussion 不需要固定六段式

AlphaGo 的 Discussion 很短，但逻辑非常完整。

它大致完成了三件事：

#### （1）Integrated Interpretation

把 policy network、value network、reinforcement learning 和 tree search 合起来解释为一个完整 system，而不是再逐条汇报胜率。

#### （2）Deeper Meaning

通过与传统高强度 search system 的比较，强调 AlphaGo 的关键不是“看更多 positions”，而是：

> **learn where to search and how to evaluate.**

这已经从组件结果上升到更深的 computational interpretation。

#### （3）Beyond This Study

最后把 Go 看成大规模 decision/search problem 的代表，并讨论这种 learning + search 思路对其他难解 AI problems 的启发。

这已经完成：

> **this study → broader meaning / abstraction**

但 AlphaGo 并没有显式写：

> New Questions → Limitations → Future Studies

因此，AlphaGo 是一个很重要的 counterexample：

> **Discussion 的 reasoning functions 可以完整，而 surface structure 不必包含固定的 limitations/future-work 段落。**

### 6.4 Optional Extension 1：Raise New Questions

当新的 scientific questions 对理解研究边界或开启下一研究阶段有价值时，可以继续：

> **Integrated Interpretation / General Principle → New Question Space**

此时优先使用六个 scientific dimensions：

> **Existence → Determinants → Cause → Mechanism → Boundary Conditions → Magnitude**

也就是：

> **Whether → What → Why → How → When → To what extent**

但这一步是为了**继续研究**，不意味着这些问题都必须写进当前论文 Discussion。

### 6.5 Optional Extension 2：Limitations

当一个重要 unresolved question 的确受到当前 study design / data / scope 限制时，Limitation 很有价值。

真正的 limitation 仍然是：

> **一个限制，使当前研究无法回答由自身 findings 引出的重要问题。**

不是：

> **随便列出一些“我们没做的事情”。**

但如果论文并不需要一个独立 limitation 段落才能诚实界定 claim，也不应为了模板完整而强行添加。

### 6.6 Optional Extension 3：Future Studies

Future Study 最有价值的情况是：

> **它明确回答一个当前无法回答、但由本研究自然产生的 unresolved question。**

因此：

> **Finding → New Question → Limitation → Future Study**

仍然是一条很好的科研推理链。

但它是：

> **research-planning logic**

不一定必须变成：

> **paper-surface paragraph**

### 6.7 Discussion 的判断标准

比“有没有写 limitations/future work”更重要的是：

- 是否超越 Results repetition？
- 是否形成 integrated interpretation？
- 是否给出了与 evidence 强度匹配的 broader meaning？
- abstraction 是否过度？
- 如果提出 general principle，是否有多个 findings 共同支撑？
- 如果存在重要 boundary / unresolved question，是否诚实处理？
- Discussion 的结束是否留下清楚的 take-home message？

因此：

> **Discussion 的核心：Interpretation → Broader Meaning**

必要时再扩展：

> **→ New Questions → Boundary / Limitations → Future Studies**

### 6.8 初学者模板：Discussion

先完成 core，再决定是否需要 optional extension。

#### Core A：Integrated Interpretation

> 本研究多个 findings 共同表明：________________________。

#### Core B：Broader Meaning

> 更深一层，这些 findings 意味着：________________________。

> 在 evidence 允许的范围内，更一般地可以理解为：________________________。

#### Optional C：New Question Space

> 如果继续打开问题，最重要的 unresolved question 是：________________________。

#### Optional D：Limitation

> 当前研究不能回答它，是因为：________________________。

#### Optional E：Future Study

> 若要回答它，需要：________________________。

原则：

> **不需要为了填满模板而写 Optional C–E。**

---

## 7. Claim–Evidence Mapping：投稿前检查“每个结论凭什么成立”

在进入 reviewer stress test 之前，先把论文中的 major claims 全部抽取出来，并为每个 claim 建立 evidence map：

> **Claim → Figure / Table → Evidence → Strength → Remaining Uncertainty**

例如：

| Claim | Supporting evidence | 仍存在的问题 |
|---|---|---|
| MSFold improves alternative-conformation recovery | Fig. 2 benchmark | 是否受 sampling budget 影响？ |
| Improvement is not due to memorization | unseen-protein test | 是否对所有 protein classes 都成立？ |
| Parallel tempering enables broader exploration | sampling analysis / ablation | 是否真正对应物理 energy barrier？ |

重点检查：

- 有没有 **claim 没有直接 evidence**？
- 有没有一个 figure 被用来支持过多不同结论？
- Discussion 中有没有出现 Results 从未支持过的 claim？
- claim 的强度是否超过 evidence 的强度？
- 是否应该把 “demonstrates” 收缩成 “suggests”？

这一步本质上是在建立：

> **Claim–Evidence alignment**

如果一个 claim 找不到明确 supporting evidence，应当：

> **补证据、收缩 claim，或删除 claim。**

---

## 8. Reviewer Stress Test

在准备投稿前，主动切换到 reviewer perspective。

问：

> **如果我是最挑剔、最专业的 reviewer，这篇文章最可能受到哪三个挑战？**

生成：

> **Top 3 Reviewer Challenges**

然后逐一分类：

### 8.1 当前可以补实验解决

→ 回到 Results。

### 8.2 可以通过已有数据分析或解释解决

→ 补充 Results / Discussion。

### 8.3 当前研究确实无法解决

→ 写入 Limitation，并设计对应 Future Study。

### 8.4 Fatal Flaw

例如 central comparison 不公平、claim 与实验设计不匹配、关键变量严重混杂、核心结论无法由现有证据支持。

此时不能简单放进 limitations。

应当：

> **重新设计研究或收缩 central claim。**

因此：

> **Reviewer challenge ≠ limitation**

Reviewer perspective 是一个 **stress test**，而 limitation 只是其可能输出之一。

---

## 9. Deadline Mode：有限时间下如何收束研究

WIT / REWRITE 容易产生一个问题：每个 finding 都能继续生成问题，因此研究可以无限延伸。

真实科研存在投稿 deadline、学生毕业、计算资源限制、湿实验成本和项目周期限制。

因此必须加入：

> **Stop Rule / Minimum Sufficient Story**

### 9.1 Deadline 临近时，优先回答三类问题

#### （1）会改变 central claim 的问题

如果这个问题答案不同，会导致论文主结论不成立或需要明显收缩，必须优先处理。

#### （2）Reviewer 极可能提出的致命问题

例如 data leakage、memorization、unfair baseline、缺少关键 control、alternative explanation。

优先处理。

#### （3）低成本但能显著提高解释力的问题

例如简单 ablation、subgroup analysis、error analysis、关键 negative control。

如果成本低、收益高，应优先补。

### 9.2 可以暂时停止的问题

如果一个问题：

- 不改变 central claim；
- 不影响主要证据链；
- 需要大量新实验；
- 更适合作为独立研究；

则进入：

> Discussion → Limitation → Future Study


### 9.3 Research Storyline Freeze：防止 project 越做越散

研究进行到一定阶段后，先暂时“冻结”一次主线，写下：

> **Central Question**  
> **Central Claim**  
> **3–5 Key Findings**  
> **General Principle**

然后对每一个新实验问：

> **它会改变或显著加强这条主线吗？**

如果答案是：

- **会改变 central claim** → 值得优先做；
- **能排除重要 competing hypothesis** → 值得做；
- **能明确重要 boundary condition** → 可能值得做；
- **只是再增加一个相似结果** → 谨慎继续。

Storyline Freeze 不是不允许研究变化。  
如果出现强的 unexpected finding，当然可以重新打开并重写 storyline。

它的作用是防止：

> **项目因为不断追加“也可以做”的实验而失去中心。**

---

### 9.4 Stop Rule


当满足以下条件时，可以停止继续扩展 Results：

（1）Central scientific question 已被可信地回答；
（2）关键 competing explanations 已排除到合理程度；
（3）主要 reviewer challenge 已处理；
（4）最重要的 boundary conditions 已有基本证据；
（5）剩余问题需要明显超出当前研究范围的新实验。

原则：

> **目标不是回答所有问题，而是形成一个最小但完整、可信、可辩护的 scientific story。**

---

## 10. 句子应该放在哪里：决策图

```text
这句话在说什么？
│
├─ 直接报告数据、比较或观察？
│      └─ Results
│
├─ 解释某一个具体结果的一步意义？
│      └─ Results subsection ending：1-hop opinion
│
├─ 综合多个 findings，解释本研究整体说明什么？
│      └─ Discussion opening：2-hop interpretation
│
├─ 提出超越本研究的一般机制或原则？
│      └─ Discussion middle：general principle
│
├─ 由 findings / principle 引出新的未解问题，而且对界定当前工作或开启下一阶段很重要？
│      └─ 可放入 Discussion；也可以只作为后续 research question
│
├─ 说明一个重要 unresolved question 为什么当前无法回答？
│      └─ 如有必要，可写成 Limitation
│
└─ 说明下一步用什么实验或分析回答该 unresolved question？
       └─ 如有必要，可写成 Future Study
```

---

## 11. REWRITE loop 的两个循环

### 11.1 Inner Loop：研究推进循环

> **Finding → Question → Answerability → Experiment → Finding**

作用：

> 推动当前 project 继续生长。

### 11.2 Outer Loop：理解与抽象循环

> **Finding → Literature → Interpretation → Principle → New Question**

作用：

> 把一个具体结果提升为更深的 scientific understanding。

两个循环共同决定：

> 做哪些新实验，以及 Results / Discussion 应该如何组织。

---

## 12. Research Depth Diagnostic：科研深度诊断

### 12.1 Level 0 — Observation

> A > B。

只报告现象。

### 12.2 Level 1 — Implication

> X improves Y。

知道结果意味着什么。

### 12.3 Level 2 — Interpretation

> X improves Y because it changes Z。

开始解释机制。

### 12.4 Level 3 — General Principle

> 更一般地，Z 可能决定这一类问题。

形成可迁移的抽象。

### 12.5 Level 4 — Boundary / Mechanism Questions

开始追问：

- 什么时候成立？
- 什么决定效应大小？
- 为什么有些情况失效？
- 是否存在反例？

### 12.6 Level 5 — New Research Program

进一步形成：

- 哪些实验能够区分 competing hypotheses？
- 如何系统确定这个 principle 的作用范围？
- 什么新的研究问题由此产生？

强研究不应长期停留在：

> **A > B**

或：

> **我们的模型比 baseline 高了几个百分点。**

---

## 13. WIT 的核心原则

> **推进研究，成长研究者。**  
> **Advance the research. Grow the researcher.**

> **Automate labor; augment judgment.**  
> **自动化劳动，增强判断。**

> **不要把研究者本应掌握的 reasoning 自动化掉。**

> **WIT 用来生成问题，而不是用来完成清单。**

> **WIT specifies reasoning functions, not rigid prose forms.**


> **Do not settle on one explanation too early; compare competing hypotheses.**

> **Every important claim should survive a falsification / counterexample check.**

> **Every major claim should map to explicit evidence.**

> **Choose the next experiment by information gain, not convenience alone.**

> **Freeze the storyline periodically to prevent uncontrolled project expansion.**



> **Results should expose how evidence advances the scientific story; question-driven and pipeline-driven forms can both work.**

Results 的本质是让 evidence 推动 scientific story 前进；它可以显式回答 scientific questions，也可以通过 coherent pipeline 逐步构建答案。

> **Good findings generate better questions.**

好的发现会产生更好的问题。

> **Questions answerable now should become new Results.**

当前能够回答的问题，不应过早留给 Discussion。

> **Questions not answerable now may motivate Discussion, Limitations, or Future Studies when they are important to the story.**

当前无法回答的重要问题，在对 story 重要时，可以推动 Discussion、Limitations 或 Future Studies。

> **Unexpected findings may rewrite the original question.**

异常结果不仅需要解释，也可能迫使我们重写原来的研究问题。

> **Literature defines the coordinates of novelty and interpretation.**

文献决定一个 finding 在现有知识体系中的位置。

> **Reviewer criticism is a stress test, not automatically a limitation.**

审稿人的挑战应先判断能否解决，而不是直接写进 limitations。

> **A good project is not the project that answers every possible question.**

成熟研究不是回答所有问题。

> **A good project answers enough of the right questions to support a coherent and defensible scientific story.**

好的研究是在有限资源下，回答足够关键的问题，形成完整、可信、可辩护的 scientific story。

最终：

> **Writing is thinking.**

更具体地说：

> **Discussion writing is research thinking.**

而 WIT 的核心研究循环可以压缩为：

> **Finding → Question → Test → Finding**

研究不断通过新的 finding 重写问题，论文写作则把这一思考过程显性化。

这就是 **WIT：Writing Is Thinking**。

## 14. 如何检验一篇文章的逻辑链？

WIT 可以反过来用于审计论文，但审计的是 **reasoning functions**，不是检查论文是否套用了某个固定模板。

### 14.1 Introduction：段首句能否组成完整的问题链？

抽取 Introduction 每一段的第一句，问：

> **只看这些段首句，能否理解这个领域走到哪里、还缺什么、以及本研究为什么必要？**

一个常见的强逻辑是：

> **Final Goal → Necessary Components → Established Components → Missing Component → Why It Matters → This Study**

这仍然是逻辑审计，不要求每篇 Introduction 都机械地写成六段。

### 14.2 Results titles：能否组成一篇“小 essay”？

把所有 Results subsection titles 连起来，问：

> **它们能否说明 scientific story 是怎样推进的？**

可能是：

> **Question → Finding → Mechanism → Boundary**

也可能像 AlphaGo：

> **Component A → Component B → Integration → System Evaluation**

因此检查的是：

> **logical progression**

而不是：

> **是否全部用 finding-style 标题。**

### 14.3 Results subsection：reasoning chain 是否可恢复？

逐个 subsection 检查：

> **Motivation / Question → Experiment / Analysis → Fact → restrained 1-hop Opinion → Next Question / Next Step**

注意：

> **这条 chain 不必在 prose 中逐项显式出现。**

真正要问的是：

- 为什么这一 subsection 必须存在？
- Fact 是否支持 subsection 的局部 claim？
- Opinion 是否紧贴 Fact，而没有过早 generalize？
- 下一 subsection 为什么自然出现？

### 14.4 Discussion：是否完成 core functions？

首先检查强规则：

> **Integrated Interpretation → Broader Meaning / justified abstraction**

具体问：

- 是否只是重复 Results？
- 是否把多个局部 findings 综合起来？
- 是否解释了这些 findings 为什么重要？
- abstraction 是否与 evidence 强度匹配？

然后再按需要检查 optional extensions：

> **New Questions → Boundary / Limitations → Future Studies**

这些内容如果对诚实界定 claim 或开启下一研究阶段有价值，就应该写；如果没有必要，不应为了模板完整而强行出现。

AlphaGo 就说明：

> **一个 Discussion 可以不显式写 Limitations / Future Studies，但仍然完成完整而有力的 scientific interpretation。**

### 14.5 简化检查图

```text
Paper-level storyline
│
├─ Introduction
│      └─ Why is this study necessary?
│
├─ Results titles
│      └─ Do they reveal a coherent logical progression?
│
├─ Each Results subsection
│      └─ Motivation / Question
│          → Fact
│          → restrained 1-hop Opinion
│          → Next Question / Next Step
│          (reasoning recoverable; prose need not be formulaic)
│
└─ Discussion
       ├─ Core:
       │    Integrated Interpretation
       │       → Broader Meaning / justified abstraction
       │
       └─ Optional when useful:
            New Questions
              → Boundary / Limitations
              → Future Studies
```

整个检查可以压缩成四个问题：

> **（1）Introduction 是否清楚说明“为什么必须做这项研究”？**

> **（2）Results titles 是否形成 coherent progression，而不论它是 question-driven 还是 pipeline-driven？**

> **（3）每个 Results subsection 背后的 Motivation → Evidence → 1-hop Interpretation → Next Step 是否可恢复？**

> **（4）Discussion 是否完成 integrated interpretation 和 broader meaning；若存在重要 unresolved questions，是否诚实处理其 boundary / limitation？**

核心原则：

> **Audit the reasoning, not the template.**
