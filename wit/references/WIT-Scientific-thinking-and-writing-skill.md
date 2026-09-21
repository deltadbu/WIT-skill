# WIT: A Scientific Thinking and Writing Skill

By Dongbo Bu  
Institute of Computing Technology,  
Chinese Academy of Sciences  
Email: dbu@ict.ac.cn  
2026/08/27

> **Running examples:** This document mainly uses **MSFold** and **AlphaGo** as recurring examples. MSFold represents protein-structure / bioinformatics research, whereas AlphaGo represents a classic AI method/system study. The two examples are used to explain, stress-test, and refine WIT across different research styles, not to imply that all papers should follow the same surface form.

## 1. What WIT Means

**WIT = Writing Is Thinking.**

WIT is a workflow for **using writing to drive scientific thinking**. It connects problem formulation, experimental results, Discussion, Limitations, and Future Studies into one continuous process of scientific reasoning.

Its core idea is simple:

> **Writing is not merely the expression of completed thinking; it is part of scientific thinking itself.**

WIT uses the **REWRITE loop** as its execution cycle:

> **Research Question → Examine Literature → Work → Read Finding → Interrogate → Test Answerability → Extend / Exit**

WIT is the overarching framework; REWRITE is its operational mechanism.

> **Usage principle:** WIT is not merely a checklist. For important rules, it should explain *why*, provide a representative example, and give an actionable decision criterion.

> **Meta-principle: WIT specifies the logical functions of scientific reasoning, not a rigid surface template for scientific prose.**
>
> The same reasoning function can be expressed through different prose forms. WIT should require the author to know why a section exists, what its evidence supports, and how it advances the story, but it should not require every paper to use the same subsection titles, paragraph order, or ritualized Limitations / Future Studies structure.
>
> **Reasoning structure ≠ Surface prose structure.**

> **WIT is a question generator, not a checklist completer.**

Its role is to expose overlooked scientific dimensions, competing explanations, and unresolved questions. It does not require every project to answer every generated question, nor every paper to explicitly contain every WIT module.

> **Human–LLM collaboration principle: Advance the research. Grow the researcher.**

WIT is designed not only to improve the scientific work, but also to strengthen the researcher's ability to ask questions, interpret evidence, compare explanations, design experiments, calibrate claims, and make scientific judgments. A human–LLM collaboration is not successful if the paper improves while the researcher becomes a passive supervisor of AI output.

> **Automate labor; augment judgment.**

The LLM should freely reduce low-learning-value labor when useful, but it should not automate away the reasoning that the researcher should learn to perform. The researcher should remain actively involved at the high-value judgment points: choosing what question matters, interpreting an important finding, proposing and comparing competing hypotheses, selecting discriminating experiments, deciding how strongly the evidence supports a claim, identifying boundaries, and deciding when the study is sufficient.

The LLM therefore acts as a **scaffold, challenger, generator, and auditor of reasoning**: it can ask for an initial human judgment, expose overlooked alternatives, stress-test that judgment, and help refine it. This does not mean withholding useful answers or forcing a Socratic dialogue every time; when the user asks for a direct answer or faces a deadline, WIT should answer directly while still making the key assumptions, alternatives, and decision logic visible.

## 2. What Problems Does WIT Address?

WIT is designed to address several common difficulties in scientific research and paper writing:

1. **At the beginning of a project, there is only a vague idea, and it is unclear how to truly “open up” the problem.**  
   How can a single initial question be expanded into a researchable **question space** through **Whether / What / Why / How / When / To what extent**?

2. **Results and Discussion are often mixed together.**  
   How far should a Results subsection go? When should it remain a Fact, and when can it include a 1-hop Opinion? Why should Discussion not simply repeat the Results?

3. **A finding generates many new questions, but it is unclear which ones should be answered now and which should be left for later.**  
   Which questions can be answered with the current data or additional experiments and should become new Results? Which questions truly belong in Discussion, Limitations, and Future Studies?

4. **Discussion is often either too shallow or overly speculative.**  
   How can multiple 1-hop Opinions be integrated into a 2-hop Interpretation, and then abstracted into a General Principle beyond this study while remaining within the evidence boundary?

5. **Introduction often becomes a literature list of “many previous studies exist, but a gap remains.”**  
   How can we start from the final scientific goal, identify the necessary components already established by previous studies, and clarify which **missing component** is provided by the present study?

6. **Limitations and Future Studies often become ritualized sections.**  
   How can limitations arise from important questions that the current study cannot answer, and how can future studies naturally follow from these unresolved questions?

7. **Real research includes unexpected results, reviewer challenges, and deadlines.**  
   How should unexpected findings be handled? How can the work be stress-tested from a reviewer’s perspective? How can a minimal but complete, credible, and defensible scientific story be formed under limited time and resources?

8. **AI can improve research output while weakening the researcher's own scientific ability if too much reasoning is outsourced.**  
   How can human–LLM collaboration advance the project while also training the researcher's ability to formulate questions, interpret findings, compare hypotheses, choose experiments, and make independent scientific judgments?

## 3. How to Use WIT

WIT has two main ways of use:

(1) **Agent Skill mode**: if the agent / IDE supports Agent Skills or can read skill files in a project, it is recommended to use [`SKILL.md`](../SKILL.md) as the entry point. The agent can then follow its rules to select the appropriate WIT mode, load the full workflow, and arrange appropriate **control transfer** between the researcher and the LLM.

(2) **Directly load the WIT workflow**: if the current environment does not support skill discovery, or if WIT is only needed in a single conversation, provide the full WIT workflow file directly to the AI and explicitly ask it to work according to WIT.

The relationship between the two is:

> **The full WIT file defines the method; `SKILL.md` defines how an agent invokes and executes that method.**

In other words, the full WIT file serves as a **reference / specification**, whereas [`SKILL.md`](../SKILL.md) serves as an **agent-facing executable collaboration protocol**. It specifies when WIT should be used, which mode should be invoked, what supporting material should be loaded, which steps may be automated by the AI, which key judgments should keep the researcher actively involved, and when the process should stop.

### 3.1 File Entry Points and Downloads

WIT GitHub repository:

> [https://github.com/deltadbu/WIT-skill](https://github.com/deltadbu/WIT-skill)

Main files:

- [`SKILL.md`](../SKILL.md) — agent execution entry point and human–LLM collaboration protocol; [direct download](https://github.com/deltadbu/WIT-skill/raw/refs/heads/main/wit/SKILL.md)
- [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md) — English full workflow; [direct download](https://github.com/deltadbu/WIT-skill/raw/refs/heads/main/wit/references/WIT-Scientific-thinking-and-writing-skill.md)
- [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md) — Chinese full workflow; [direct download](https://github.com/deltadbu/WIT-skill/raw/refs/heads/main/wit/references/WIT-%E7%A7%91%E5%AD%A6%E6%80%9D%E8%80%83%E5%8F%8A%E5%86%99%E4%BD%9Cskill.md)

For long-term use, it is recommended to clone the entire repository rather than downloading only one file:

```bash
git clone https://github.com/deltadbu/WIT-skill.git
```

The installable skill package is the repository's [`wit/`](../) directory. Keeping that directory intact preserves the relative paths among `SKILL.md`, `references/`, `tests/`, and `case-studies/`.

---

### 3.2 Using `SKILL.md`: Let an Agent Coordinate WIT Automatically

If the agent supports Agent Skills, place or install the repository's [`wit/`](../) directory—the installable WIT skill package—in a skill directory that the agent can discover. Different platforms may use different skill locations or installation mechanisms; WIT does not assume one fixed directory.

Once the agent discovers [`SKILL.md`](../SKILL.md), it first reads its metadata and execution rules. It should treat `SKILL.md` as a **dispatcher + workflow controller + collaboration protocol**, mainly responsible for:

(1) deciding whether the current task should use WIT;

(2) identifying the appropriate mode, such as **Open a question, Advance from a finding, Choose the next experiment, Review Results, Review Discussion, Stress-test a study, or Deadline Mode**;

(3) loading either the full [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md) or [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md), depending on the language and task;

(4) loading supporting material from `tests/` or `case-studies/` inside the skill package (repository paths: [`wit/tests/`](../tests/) and [`wit/case-studies/`](../case-studies/)) only when needed, rather than placing all material into context by default;

(5) executing WIT's REWRITE decision loop, reasoning invariants, and stop rule;

(6) arranging **control transfer** in human–LLM collaboration: low-learning-value labor may be automated by the AI, while high-learning-value judgment nodes should keep the researcher substantively involved.

Therefore, when using [`SKILL.md`](../SKILL.md), the user does not need to manually specify the entire WIT procedure at every step. For example, one can simply say:

> Use WIT to analyze this finding and decide the next experiment.

or:

> Use WIT to review the Results and Discussion of this paper.

If the agent has correctly discovered and loaded WIT, it should use [`SKILL.md`](../SKILL.md) to select the appropriate mode automatically, rather than asking the user to restate the full WIT workflow.

If the current tool **cannot automatically discover skills** but can read files in the repository, the user can explicitly instruct:

> Read [SKILL.md](../SKILL.md) first, then use WIT according to its routing, human–LLM collaboration rules, and stop rule. When the full English workflow is needed, read [WIT-Scientific-thinking-and-writing-skill.md](WIT-Scientific-thinking-and-writing-skill.md).

Core principle:

> **`SKILL.md` is not a replacement for the full WIT framework; it is the entry point and control program for an agent to execute WIT.**

---

### 3.3 When Skill Discovery Is Not Supported: Load the Full WIT Workflow Directly

If WIT is being used in an ordinary ChatGPT conversation, or the current agent does not support automatic discovery of [`SKILL.md`](../SKILL.md), the simplest approach is to load the full WIT workflow directly.

#### In ChatGPT

Download and upload the English [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md), or the Chinese [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md), and then say:

> Please read this WIT workflow and follow it throughout this conversation.

After that, you can directly say:

> Use WIT to expand this finding: ...

or:

> Use WIT to review the Results and Discussion of this paper.

If you also want agent-level routing, human–LLM control transfer, and the stop rule, provide [`SKILL.md`](../SKILL.md) together with the full workflow.

If you start a new conversation and these files are not automatically available, provide the files or GitHub links again.

#### In ChatGPT Work / Project Spaces

Place [`SKILL.md`](../SKILL.md) together with the English [`WIT-Scientific-thinking-and-writing-skill.md`](WIT-Scientific-thinking-and-writing-skill.md) or Chinese [`WIT-科学思考及写作skill.md`](WIT-科学思考及写作skill.md) in the relevant project materials, then say at the beginning of the project:

> Please read WIT's `SKILL.md` and full workflow, and use them as the human–LLM collaborative rules for scientific thinking and writing in this project.

This allows WIT to be used together with manuscript drafts, experimental results, and project documents over the long term.

#### In VSCode / Codex / Copilot

It is recommended to clone the [WIT GitHub repository](https://github.com/deltadbu/WIT-skill). If the tool supports Agent Skills, make the repository's [`wit/`](../) directory discoverable as the skill package and let it execute WIT from [`wit/SKILL.md`](../SKILL.md). If it does not, explicitly instruct it in the chat or project instructions:

> Read [SKILL.md](../SKILL.md) first, then load the appropriate full WIT workflow and follow its routing, reasoning, human–LLM collaboration, and stop rules.

Core principle:

> **If Skill Discovery is supported: enter WIT through `SKILL.md`.**  
> **If Skill Discovery is not supported: load the full WIT workflow directly; if more stable routing and collaboration control are needed, load `SKILL.md` as well.**

---

### 3.4 How to Invoke WIT After Loading

#### Mode A: Open Up a Research Question

Input:

> Use WIT to open up this question: XXX.

Expand it mainly from:

> **Whether / What / Why / How / When / To what extent**

The goal is to turn a vague question into a researchable **question space**.

---

#### Mode B: Advance Research from a Finding

Input:

> This is a finding: XXX. Use WIT to expand it.

Expected output:

1. Fact;
2. 1-hop Opinion;
3. Literature positioning;
4. New Why / How / What / When / Whether / To what extent questions;
5. Which questions are answerable now;
6. The most valuable additional experiments or analyses;
7. Which questions are not answerable now;
8. 2-hop Interpretation;
9. General Principle;
10. Potential Limitation, if relevant to the current story;
11. Potential Future Study, if worth making explicit.

This is the most important day-to-day use of WIT:

> **Every time an important finding appears, open up the problem again.**

---

#### Mode C: Review Results

Input:

> Use WIT to review the Results.

Check whether:

- the subsection titles form a clear and progressive scientific story;
- each subsection has a logical function rather than merely adding another experiment;
- the evidence supports a clear **Fact → restrained 1-hop Opinion**;
- a **Question / Finding-driven** organization is appropriate, or whether a **Component / Pipeline-driven** organization is more natural for a method or system paper;
- even when the surface structure follows a pipeline, the underlying **Question → Test → Finding → Next Step** reasoning remains recoverable;
- questions answerable now have been prematurely pushed into Discussion;
- key controls, competing explanations, counterexamples, or unexpected results have been overlooked;
- **Early figures and their captions:** do not require Figure 1 itself to summarize the entire paper. In some method papers, Figure 1 is more useful for introducing the **problem, representation, or motivation** before presenting the solution; AlphaDev is a representative example. What matters is that an **early overview figure—often, but not necessarily, Figure 1—** allows the reader to understand the paper's central idea, major components, and high-level operation before reading the detailed Results. Audit the function of the early figures, not a fixed figure number.
- **Figure captions should communicate both evidence and the immediate takeaway:** for a Results figure, the caption should not merely list panels or restate axes. It should primarily describe the **Fact** shown by the figure and may add a **restrained 1-hop Opinion**—the immediate take-home message directly supported by that figure. Avoid 2-hop interpretation, broad abstraction, or general principles that require integrating multiple findings; those usually belong in the Results text or Discussion. A useful test is: **What is shown? → What does this figure immediately tell us?** For overview or conceptual figures, the caption may instead explain the idea, workflow, and components without forcing a result-level opinion.
- **Natural-language explanation and concrete walkthrough for mathematical or algorithmic methods:** if the core method is expressed mainly through mathematical formulas or computer algorithms, do not rely on formal notation or pseudocode alone. First explain the **basic idea in natural language**: what problem the formula or algorithm is trying to solve, what the key terms or steps mean, and why the procedure is designed this way. Then provide a minimal concrete example that instantiates the key terms in the formulas with actual values, or walks through the important steps of the algorithm on a small input. Prefer the **smallest example that exposes the essential mechanism**. The goal is to let the reader first grasp the idea conceptually and then **mentally execute the method**. A representative example is AlphaDev, where sorting only three numbers provides a compact and intuitive illustration of how the discovered algorithm operates.
- **Worked case study for a method paper:** does the Results section contain a compact, representative case that lets the reader trace the method from input through the key intermediate steps to output? The case should explain **how the proposed method operates, why it succeeds, why existing methods fail or become unreliable on the same case, and what mechanism or design choice creates the difference.** Prefer the **simplest case that isolates the essential difference** between methods. The purpose is to explain mechanism, not to replace benchmark-level evidence.
- **Difference-focused benchmark analysis:** aggregate metrics such as accuracy, precision, recall, AUC, correlation, or success rate establish whether and by how much a method performs better overall, but they rarely explain why. Check whether the authors identify the cases or subsets on which the proposed and existing methods exhibit the largest or most systematic differences, then analyze **where the performance gap comes from, why existing methods fail there, and why the proposed method succeeds.** Prefer a systematic pattern of differential performance over isolated cherry-picked examples.

For method papers, these checks serve complementary functions:

> **Early figures orient the reader: Figure 1 may introduce the problem, while an early overview figure explains the central idea and high-level operation; natural-language explanation plus a minimal concrete walkthrough makes a mathematical or algorithmic method operationally understandable; benchmark statistics establish whether and by how much the method works; a worked case explains why it succeeds and why existing methods fail; difference-focused analysis explains where the gain comes from and whether the mechanism is systematic.**

Principle:

> **Results should expose the logical progression of the scientific story, not obey a single title format.**

---

#### Mode D: Review Discussion

Input:

> Use WIT to review the Discussion.

First check the **core functions**:

- does it integrate local findings / 1-hop Opinions into an overall interpretation?
- does it go beyond repeating the Results?
- does it explain the broader meaning and, when justified, abstract toward a General Principle?

Then check the **optional extensions**, when scientifically useful:

- should the findings reopen a new question space?
- is there a meaningful boundary or limitation that should be stated?
- do Future Studies address genuine unresolved questions rather than appear as ritual prose?

Principle:

> **The core function of Discussion is interpretation and abstraction. New Questions, Limitations, and Future Studies are valuable extensions when needed, not mandatory surface sections in every paper.**

---

#### Mode E: Identify the Next Experiment

Input:

> Use WIT to determine the most valuable next experiment.

Prioritize:

1. questions that could change the central claim;
2. major challenges a reviewer is likely to raise;
3. competing explanations;
4. boundary conditions;
5. low-cost, high-information experiments.

---

#### Mode F: Deadline Mode

Input:

> The deadline is close. Use WIT to help me close the project.

Output:

- Must do;
- Should do;
- Can omit;
- Should be written as a Limitation;
- Should be left for Future Study;
- Whether the central claim should be narrowed.

WIT's day-to-day use can be summarized in one sentence:

> **If Skill Discovery is supported, let the agent enter WIT through `SKILL.md`; otherwise, load the full workflow directly. Then start from a question; every important finding should generate new questions; answerable questions can extend the current Results, while unanswerable ones should first be judged for importance before being developed into Discussion, Limitations, or Future Studies.**

## 4. REWRITE: The Core Research Loop

WIT advances research through the **REWRITE** loop:

> **Research Question → Examine Literature → Work / Experiment → Read Finding → Interrogate Finding → Test Answerability → Extend / Exit**

These are not seven independent modules, but one continuous cycle.

### 4.1 R — Research Question

Problem formulation is not merely choosing a topic. It means:

> **expanding a single question into a scientific question space.**

The goal is not to mechanically list interrogative words, but to map the problem into six relatively orthogonal scientific dimensions.

#### 4.1.1 Whether → Existence

First ask:

> **Does the phenomenon really exist?**

This is the basic existence question.

For example:

> Does MSFold truly recover alternative conformations more effectively than standard decoding?

This dimension asks whether the phenomenon is stable, statistically supported, reproducible, and more than an accidental observation.

#### 4.1.2 What → Determinants

Once the phenomenon is established, ask:

> **What variables or factors determine whether it occurs and how strongly?**

For example:

> What protein properties determine whether MSFold successfully recovers alternative conformations?

Possible determinants may include protein size, conformational-change type, sequence identity, token-space diversity, and sampling budget.

This dimension asks:

> **What determines the outcome?**

#### 4.1.3 Why → Cause

Why does not ask for the detailed process. It asks:

> **What causes the phenomenon?**

That is, identify the causal driver.

For example:

> Why does standard decoding fail to recover alternative conformations?

Possible causes include:

- the states are not encoded in the representation;
- search is trapped in a local mode;
- the decoding objective favors the dominant state.

Thus:

> **Why asks what causes the phenomenon.**

#### 4.1.4 How → Mechanism

How is different from Why.

Why asks:

> **What causes the phenomenon?**

How asks:

> **Through what process or mechanism does that cause produce the outcome?**

For example:

> If standard decoding fails because it becomes trapped in local modes, how does parallel tempering help cross token-space barriers and reach alternative states?

Thus:

> **Cause → Mechanism → Outcome**

and:

> **Why asks what causes it; How asks through what mechanism the cause produces the effect.**

#### 4.1.5 When → Boundary Conditions

When should not be interpreted only as time.

It represents the more general question:

> **Under what conditions does the conclusion hold or fail?**

For example:

- For which protein classes does it hold?
- For which conformational-change types does it fail?
- Is the effect stronger in low-data or high-data regimes?
- Over what sequence-identity range does it generalize?
- In which tissues, cell types, or spatial regions does it hold?

Many questions that might previously have been phrased as “Where” are actually boundary-condition questions, so Where does not need to be a separate dimension.

This dimension asks:

> **What are the boundary conditions?**

#### 4.1.6 To what extent → Magnitude

Finally ask:

> **How large is the effect, and over what range does it hold?**

For example:

- How much does the success rate improve?
- Is the gain concentrated in only a few samples?
- How large a conformational change can be recovered?
- Is the effect practically meaningful, not merely statistically significant?

This dimension concerns:

> **Magnitude / effect size / range**

Thus, opening up a research question can be represented as six scientific dimensions:

> **Existence → Determinants → Cause → Mechanism → Boundary Conditions → Magnitude**

corresponding to:

> **Whether → What → Why → How → When → To what extent**

Not every project must answer all six. Their purpose is to systematically ask:

> **Which important dimensions of the question space have not yet been opened?**


#### 4.1.7 A More Familiar Example: Opening the Six-Dimensional Question Space with AlphaGo

The MSFold example is useful for protein-structure research, but it may be unfamiliar to readers outside the field. AlphaGo provides a more widely understood example.

The classic Nature paper *Mastering the game of Go with deep neural networks and tree search* begins from a clear difficulty: Go has an enormous search space. The paper describes an approximate branching factor of 250 and a typical game depth of 150, making exhaustive search infeasible. AlphaGo addresses this by reducing both the effective **breadth** and **depth** of search: a policy network prioritizes promising moves, a value network evaluates positions, and both are integrated with Monte Carlo tree search (MCTS).

The purpose of this example is not to mechanically attach six interrogative words to AlphaGo. It is to show that:

> **the same scientific result can be opened along six distinct scientific dimensions.**

##### Whether → Existence: Can AlphaGo Actually Reach Professional-Level Go?

The first question is simply:

> **Can deep neural networks combined with tree search actually solve the long-standing computer-Go problem at professional level?**

The paper provides direct evidence:

- AlphaGo achieved a **99.8% win rate** against other Go programs;
- it defeated European Go champion Fan Hui **5–0** in the formal match.

This establishes:

> **The phenomenon exists: the approach reaches a level previously unattained by computer Go.**

Whether does not ask *why* the system succeeds. It first asks:

> **Does it succeed at all?**

##### What → Determinants: What Determines AlphaGo's Playing Strength?

Once the phenomenon is established, the next question is:

> **What variables or components determine how strong AlphaGo becomes?**

The paper analyzes several determinants.

For example:

- the supervised policy network predicted expert moves with **57.0% accuracy**, compared with **44.4%** for the previous state of the art reported by the authors;
- small improvements in policy prediction accuracy produced substantial improvements in playing strength;
- after reinforcement learning, the RL policy network won **more than 80%** of games against the supervised policy network;
- without search, the RL policy network won **85%** of games against Pachi;
- policy quality, value estimation, rollout policy, and search all affect final playing strength.

Thus What asks:

> **Which components or variables determine performance?**

It does not yet ask why those components work.

##### Why → Cause: Why Could AlphaGo Break Through Where Traditional Go Programs Struggled?

Why asks for the causal explanation.

The paper identifies two central obstacles:

- enormous **search breadth**;
- enormous **search depth**.

Exhaustive search is therefore infeasible.

A central causal explanation for AlphaGo's success is:

> **it does not search all possibilities equally; learned policy and value functions drastically reduce the effective search space.**

More specifically:

- the policy network reduces effective **breadth**;
- the value network reduces effective **depth**.

Thus:

> **Why = What caused the breakthrough?**

This is deeper than simply saying “because it used deep learning.”

A more informative statement is:

> **AlphaGo succeeds because learning makes an otherwise intractable search problem tractable enough to search.**

##### How → Mechanism: How Do the Policy and Value Networks Actually Change MCTS?

Once the cause has been identified, How asks:

> **Through what computational process does that cause produce stronger play?**

The mechanism can be decomposed as follows.

1. **Policy network guides selection and expansion**

The search does not explore all legal moves equally. The policy network gives higher priority to promising moves.

2. **Value network evaluates leaf positions**

At a leaf node, the value network can directly estimate the probability of winning rather than always playing the game to completion.

3. **Rollout provides an additional evaluation**

A fast rollout policy simulates the game to the end and provides another estimate.

4. **MCTS backs the information up**

The value-network estimate and rollout outcome are combined and propagated back through the search path to update action values and visit counts.

Thus:

> **Cause:** learning reduces the effective search space.  
> **Mechanism:** policy-guided search + value evaluation + rollout + MCTS backup implement that reduction.

This illustrates the distinction:

> **Why asks what causes the success; How asks through what computational mechanism that cause produces stronger play.**

##### To What Extent → Magnitude: How Much Stronger Is AlphaGo?

A magnitude question is not satisfied with:

> “AlphaGo is strong.”

It asks:

> **How large is the improvement, and how large are the component effects?**

The paper provides several quantitative scales:

- **99.8% win rate** against other Go programs;
- **5–0** against Fan Hui;
- RL policy versus SL policy: **>80% win rate**;
- RL policy without search versus Pachi: **85% win rate**;
- a single value-network evaluation approached the accuracy of Monte Carlo rollouts using the RL policy while using about **15,000 times less computation**.

These answer:

> **How large is the effect?**

The difference between Whether and To what extent is therefore clear:

> **Whether: Is there an effect?**  
> **To what extent: How large is it?**

##### When → Boundary Conditions: Under What Conditions Does AlphaGo's Advantage Hold or Fail?

This dimension is especially instructive.

The AlphaGo paper already shows that the approach works:

- on full-sized Go;
- against multiple computer Go programs;
- against a professional-level human opponent.

These provide partial evidence about the boundary.

However, the paper does not systematically map all boundary conditions.

WIT would therefore continue by asking:

- Does the advantage persist when the search budget is greatly reduced?
- Can MCTS compensate when the policy network is weak?
- When does systematic error in the value estimate cause search to fail?
- Does the advantage hold across opponents with very different styles and strengths?
- Can the broader **learning + search** principle transfer beyond Go to other large decision problems?

These are not all claims already answered by the original paper. They are new questions naturally generated from its findings:

> **Under what conditions does the conclusion hold or fail?**

That is the essence of Boundary Conditions.

---

AlphaGo makes the six dimensions easy to distinguish:

| Dimension | Question in the AlphaGo example |
|---|---|
| **Whether → Existence** | Can deep networks + search really achieve professional-level Go? |
| **What → Determinants** | Which factors—policy accuracy, RL, value estimation, search—determine playing strength? |
| **Why → Cause** | Why can this approach break through the traditional computer-Go bottleneck? |
| **How → Mechanism** | How do policy/value networks interact with MCTS to change the search process? |
| **When → Boundary Conditions** | Under what search budgets, opponent types, model qualities, and task conditions does the advantage hold or fail? |
| **To what extent → Magnitude** | How large are the gains in win rate, playing strength, and computational efficiency? |

Thus a finding such as:

> **AlphaGo defeated a professional Go player.**

is not the end of the research process. Once opened along the six dimensions, it becomes:

> **Does it exist? → What determines it? → Why does it happen? → How does it happen? → Under what conditions? → How large is the effect?**

That is what WIT means by:

> **opening up the problem.**

**Reference:** Silver, D. et al. *Mastering the game of Go with deep neural networks and tree search*. Nature 529, 484–489 (2016), doi:10.1038/nature16961.


### 4.2 E — Examine the Literature

The literature is not decoration for the Introduction; it is the coordinate system for scientific reasoning.

WIT uses two literature checkpoints.

#### 4.2.1 Literature Checkpoint 1: Before the Study

After defining the core scientific question, ask:

1. Has this question already been answered?
2. What explanations have previous studies proposed?
3. What competing hypotheses exist?
4. What boundary conditions are already known?
5. What exactly does the present study add?

The purpose is not to “collect enough references,” but to determine:

> **Where is the novelty?**

and:

> **Which existing explanations must the current study distinguish among?**

#### 4.2.2 Literature Checkpoint 2: After an Important Finding

After every important finding, return to the literature and ask:

> **How does this finding relate to existing knowledge?**

Possible relationships include:

- **Confirm**: supports an existing conclusion;
- **Contradict**: conflicts with an existing conclusion;
- **Refine**: adds boundaries, conditions, or a more precise interpretation;
- **Extend**: generalizes an existing conclusion to new tasks, systems, or settings;
- **Reframe**: changes how the original problem should be understood.

This checkpoint directly determines the depth of the Discussion.

What matters is usually not:

> “Our result is consistent with a previous study.”

but:

> **What does our finding change, refine, or extend in the existing understanding?**

---

### 4.3 W — Work / Experiment

Every experiment should correspond to a clear question.

Do not perform an ablation simply because “papers usually need ablation.” Do not draw a t-SNE plot simply because others do.

First ask:

> **What question is this experiment intended to answer?**

The ideal structure is:

> **Question → Experiment → Data → Finding**

Experiments are tools for answering questions, not the organizing units of Results.

---

### 4.4 R — Read the Finding

After obtaining a result, do not immediately move on to the next experiment. First distinguish three levels.

#### 4.4.1 Data

Raw observations or quantitative results.

#### 4.4.2 Finding

A qualitative statement directly supported by the data.

#### 4.4.3 1-hop Opinion

A one-step interpretation that remains close to the data.

A Results subsection can therefore be compressed into a practical **Fact–Opinion** structure:

> **Question → Experiment → Fact → 1-hop Opinion**

#### 4.4.4 Fact

A fact directly obtained from experiments or analyses, including data, comparisons, observed phenomena, and statistical results.

Example:

> Method A significantly outperforms Method B under distribution shift.

#### 4.4.5 1-hop Opinion

A **one-step interpretation** of the Fact. It may contain author judgment, but it must remain close to the current result and should not jump directly to a broader theoretical claim.

Example:

> These results suggest that X may improve robustness under distribution shift.

Therefore:

> **Results = Fact + 1-hop Opinion**

The end of a Results subsection should answer:

> **What does this specific Fact mean?**

But the Opinion should remain only one step away from the Fact.

Core rule:

> **Results may contain opinion, but only opinion that is one hop away from the fact.**

Do not jump directly to a field-level general principle.

---

#### 4.4.6 Unexpected Results and Serendipitous Findings: The Anomaly Branch

Real research is not perfectly linear. Experiments often produce results opposite to the hypothesis, anomalous samples, unexpected subgroups, apparently failed but reproducible phenomena, or observations inconsistent with existing theory.

After every important experiment, ask:

> **Did the result match the original expectation?**

If yes, continue with the normal WIT / REWRITE process.

If no, enter the **Anomaly Branch**.

##### (1) Is it a technical error?

Check for:

- data-processing errors;
- implementation bugs;
- measurement errors;
- data leakage;
- batch effects;
- sample contamination;
- statistical artifacts.

If yes:

> Fix the problem and rerun the experiment.

##### (2) Is it random noise?

Ask:

> Is it reproducible?

If not:

> Do not treat it as a major finding yet.

##### (3) Is it a stable, reproducible anomaly?

If yes, do not force it back into the original hypothesis.

Ask:

> **Does this anomaly imply that the original scientific question was incomplete—or even wrong?**

At this point, allow:

> **Unexpected Finding → Rewrite the Question**

REWRITE is therefore not merely a way to organize completed results; it also allows new findings to redefine the research question itself.

---

### 4.5 I — Interrogate the Finding

Every important finding should generate new questions.

Systematically ask:

- **Why?**
- **How?**
- **What?**
- **Whether?**
- **When?**
- **Where?**
- **To what extent?**

A good finding should open up a new question space.

---


#### 4.5.1 Competing Hypotheses: Do Not Settle on a Single Explanation Too Early

After a finding appears, do not ask only:

> **Why did this happen?**

Force yourself to construct multiple plausible explanations:

> **Finding → Hypothesis A / Hypothesis B / Hypothesis C**

For example:

> Finding: MSFold still outperforms baselines on unseen proteins.

Possible explanations include:

- **H1:** the ESM3 token space contains generalizable alternative conformations;
- **H2:** the gain mainly comes from a larger sampling budget;
- **H3:** some structural-transition classes in the benchmark are intrinsically easier for parallel tempering.

The next step should not be to choose the most appealing explanation, but to ask:

> **What experiment can distinguish these competing hypotheses?**

Mechanistic research should prioritize **discriminating experiments**, not merely accumulate supportive evidence.

---

#### 4.5.2 Falsification / Counterexample Check: Attack Your Own Conclusion

For every important conclusion, ask:

> **What result would falsify this conclusion?**

and:

> **What is the most plausible counterexample?**

For example:

> Claim: structural information improves OOD robustness.

Do not only search for more supporting datasets. Also ask:

- Is there a dataset where adding structural information hurts performance?
- Does the advantage disappear when sequence diversity is already high?
- Is the gain actually caused by additional model capacity rather than structural information itself?

The purpose is to determine:

> **Where is the evidence boundary of the claim?**

If a conclusion has no clear potential falsifier, it is often not yet scientifically defined tightly enough.

---


##### What if a counterexample is found?

Do not immediately conclude that the original conclusion is simply “wrong.” First classify the counterexample.

- **Technical or data problem**: bug, measurement error, data leakage, sample contamination.  
  → Fix the issue and rerun the experiment.
- **Random noise**: the result is not reproducible.  
  → Do not overturn the conclusion yet, but reduce confidence.
- **Stable, reproducible counterexample**:  
  → The claim should usually be revised rather than discarded outright.

A stable counterexample can have three major scientific consequences:

1. **Narrow the claim**

For example:

> “X always improves Y”

may become:

> “X improves Y under conditions A and B.”

2. **Reveal a boundary condition**

The counterexample may answer:

> **When does this conclusion fail?**

This can be more informative than accumulating additional supportive examples.

3. **Rewrite the hypothesis or principle**

If the counterexample strikes at the proposed mechanism, revisit the central claim and possibly the entire research storyline.

Thus:

> **Counterexample → Boundary Condition → Better Claim**

A good counterexample does not necessarily weaken a paper; it can make the conclusion more precise and credible.

##### What if no counterexample is found?

Do not conclude that the claim has been “proven.”

Instead, ask two further questions.

1. **Was the falsification attempt strong enough?**

Did we actively test:

- adverse conditions;
- extreme cases;
- OOD data;
- negative controls;
- alternative explanations;
- subgroups where failure is plausible?

2. **Is the claim genuinely falsifiable?**

If every possible result can be accommodated by rephrasing the claim, the claim may be too vague.

State explicitly:

> **What observation would make me accept that this claim is false?**

The full logic is:

> **Claim → Potential Falsifier → Test → Counterexample?**

If a stable counterexample is found:

> **Revise Claim / Identify Boundary / Rewrite Hypothesis**

If none is found:

> **The claim gains support, but is not “proven.”**

If the potential falsifier cannot yet be tested:

> **Record it as an unresolved question → Limitation / Future Study**

A useful summary is:

> **A failed falsification strengthens a claim; a successful falsification sharpens it.**


### 4.6 T — Test Answerability

This is the key decision point in the REWRITE loop.

For every new question, ask:

> **Can the current study answer this question through additional analysis or experiments?**

#### 4.6.1 If YES

Do not move it prematurely into Discussion.

Instead:

> **New Question → New Experiment / Analysis → New Finding → New Results**

For example, if A outperforms B on OOD data and the next question is whether the advantage is consistent across protein families, and the existing dataset already contains multiple families, analyze it now and turn it into a new Results subsection.

Likewise, if “Which component drives the improvement?” can be answered through ablation, it should not be left as Future Work.

#### 4.6.2 If NO

Only then should the question move into Discussion:

> **New Question → Why the Current Study Cannot Answer It → Limitation → Future Study**

---


#### 4.6.3 Information Gain: Choose the Experiment That Most Changes Your Belief

When several questions are answerable, do not choose only by convenience.

A better rule is:

> **Prioritize experiments with the highest information gain and discrimination power.**

Ask:

- If the result is A, how much would my interpretation change?
- If the result is B, would I revise the central claim?
- Can the experiment distinguish two currently plausible explanations?
- Does it merely add another supporting example, or substantially reduce uncertainty?

For example:

- one more similar benchmark may increase confidence only slightly;
- a control experiment that separates two competing mechanisms may change the interpretation entirely.

Thus:

> **Next experiment ≠ easiest experiment**  
> **Next experiment = highest-value information test**

---

### 4.7 E — Extend / Exit

If a new question is answerable now:

> **New Question → New Experiment / Analysis → New Results**

If it is not answerable now or lies beyond scope:

> **New Question → Discussion → Limitation → Future Study**

## 5. Results: Expose the Logical Progression of the Scientific Story

The strong rule is not:

> **Every Results subsection must be titled as a scientific question or answer.**

The deeper requirement is:

> **Results should expose the logical progression of the scientific story.**

The reader should be able to recover:

> **why this part is needed → what evidence was obtained → what local conclusion the evidence supports → why the next part follows.**

### 5.1 Two Valid Modes of Results Organization

#### (1) Question / Finding-driven

This is often natural for discovery, mechanism, and hypothesis-testing studies.

Subsection titles may state the answer directly, for example:

- “Module X is the primary contributor to the performance gain”
- “The performance advantage persists under distribution shift”
- “The learned representation better separates functional states”

The advantage is:

> **the title directly tells the reader what was learned.**

#### (2) Component / Pipeline-driven

For method, system, and engineering papers, component- or pipeline-driven organization can be equally effective.

The AlphaGo Nature paper is an important counterexample to an overly rigid WIT rule. Its major research sections proceed through:

- Supervised learning of policy networks
- Reinforcement learning of policy networks
- Reinforcement learning of value networks
- Searching with policy and value networks
- Evaluating the playing strength of AlphaGo

These headings are clearly **component / pipeline-driven**.

Yet together they form a coherent storyline:

> **learn a policy → improve it by self-play → learn a value function → integrate policy and value into search → evaluate the complete system**

Thus:

> **Pipeline-driven ≠ a mere list of techniques.**

The key question is whether the components form a meaningful logical progression.

### 5.2 Separate Reasoning Structure from Surface Prose

The reasoning behind a Results subsection can often be reconstructed as:

> **Motivation / Question → Experiment / Analysis → Fact → 1-hop Opinion → Next Question / Next Step**

But the prose does not need to mechanically state each element.

AlphaGo sometimes advances with pipeline language such as “the second stage of the training pipeline ...” rather than repeatedly writing “we next asked whether ...”.

That is perfectly acceptable when the underlying reasoning remains clear.

Therefore:

> **WIT requires recoverable reasoning, not formulaic prose.**

### 5.3 Fact + Restrained 1-hop Opinion Remains a Strong Rule

Results may interpret evidence, but the interpretation should stay close to that evidence.

Principle:

> **Results: Fact → restrained 1-hop Opinion**

For example, AlphaGo's tournament results provide strong facts about playing strength. The paper draws local conclusions about system strength rather than immediately jumping to a universal theory of intelligence.

Likewise, when combined value-network and rollout evaluation outperformed either mechanism alone, the authors inferred that the two position-evaluation mechanisms were complementary.

That is a clean example of:

> **Fact → 1-hop Opinion**

A useful test is:

> **If the data in this subsection were removed, would the opinion still stand?**

If not, it is probably a local Results-level interpretation.  
If the claim requires multiple findings across the paper, it more likely belongs in Discussion.

### 5.4 The Real Test for Results Titles: Can They Form a Small Essay?

Extract all Results subsection titles and read them in order.

Ask:

> **Do they independently reveal how the scientific story progresses?**

The story may be:

> **Question → Finding → Mechanism → Boundary**

or, as in AlphaGo:

> **Component A → Component B → Integration → System Evaluation**

The small-essay test therefore evaluates:

> **logical progression**

not a single required title style.

### 5.5 Guided Template: Results Subsection

For less experienced researchers, use the reasoning template first, then choose the final prose form.

#### (1) Motivation / Scientific Question

> Why is this part needed? We want to know: ________________________.

#### (2) Experiment / Analysis

> To answer or advance this question, we: ________________________.

#### (3) Fact

> The data directly show: ________________________.

#### (4) 1-hop Opinion

> These results locally suggest: ________________________.

#### (5) Next Question / Next Step

> Therefore, the next logical step is: ________________________.

For a method or system paper, also ask:

> **What indispensable logical function does this subsection serve in the overall pipeline?**

The template is meant to expose reasoning, not force the final paper into five formulaic sentences.

---

## 6. Discussion: Core Functions + Optional Extensions

AlphaGo provides an important correction to WIT:

> **A strong Discussion does not have to explicitly contain New Questions, Limitations, and Future Studies.**

Discussion should therefore distinguish between:

> **Core Functions (strong rules)**  
> and  
> **Optional Extensions (used when scientifically helpful)**

### 6.1 Core Function 1: Integrated Interpretation

Discussion should first move beyond line-by-line repetition of Results.

It should integrate local findings / 1-hop Opinions and ask:

> **Taken together, what do these results mean?**

This can be represented as:

> **Multiple local findings → Integrated Interpretation**

When the synthesis moves one level beyond individual Results subsections, it can also be described as:

> **multiple 1-hop Opinions → 2-hop Interpretation**

But “2-hop” describes reasoning depth; it is not a required sentence pattern.

### 6.2 Core Function 2: Broader Meaning / General Principle

After integration, Discussion often asks:

> **Why do these results matter beyond the immediate experiments?**

Possible forms include:

- deeper causal interpretation;
- conceptual comparison with an existing paradigm or baseline;
- transferable mechanism;
- broader implication;
- a General Principle.

For MSFold, one possible abstraction is:

> **Model capability is jointly determined by representation and search.**

But not every paper needs a grand General Principle. Abstraction should stop where the evidence stops.

### 6.3 AlphaGo as a Reverse Validation: No Fixed Six-Part Discussion Is Required

AlphaGo's Discussion is short, yet logically strong.

It performs roughly three functions:

#### (1) Integrated Interpretation

It brings policy networks, value networks, reinforcement learning, and tree search together as one system rather than repeating individual performance numbers.

#### (2) Deeper Meaning

Through comparison with conventional high-intensity search systems, it highlights a deeper computational idea: the system does not merely examine more positions; it learns **where to search and how to evaluate**.

This moves beyond component-level Results toward a deeper interpretation.

#### (3) Beyond This Study

The final part treats Go as an instance of a broader class of difficult decision/search problems and points toward implications of the learning + search idea beyond Go.

Thus AlphaGo completes:

> **this study → broader meaning / abstraction**

without explicitly writing:

> New Questions → Limitations → Future Studies

AlphaGo is therefore an important counterexample:

> **The reasoning functions of Discussion can be complete even when the surface structure does not contain ritualized limitations or future-work paragraphs.**

### 6.4 Optional Extension 1: Raise New Questions

When new questions are important for defining boundaries or opening the next research stage, continue with:

> **Integrated Interpretation / General Principle → New Question Space**

Use the six scientific dimensions:

> **Existence → Determinants → Cause → Mechanism → Boundary Conditions → Magnitude**

corresponding to:

> **Whether → What → Why → How → When → To what extent**

These questions are tools for continuing research. They do not all have to appear in the current paper.

### 6.5 Optional Extension 2: Limitations

A Limitation is valuable when an important unresolved question is genuinely constrained by the current study design, data, or scope.

A meaningful limitation remains:

> **A constraint that prevents the current study from answering an important question raised by its own findings.**

It is not:

> **a generic list of things the authors did not do.**

But if the claim boundaries are already clear and an explicit limitation paragraph adds little, WIT should not require one merely for template completeness.

### 6.6 Optional Extension 3: Future Studies

Future Study is most useful when it directly addresses an unresolved question generated by the current work:

> **Finding → New Question → Limitation → Future Study**

This remains a powerful:

> **research-planning logic**

but it does not always need to become a:

> **paper-surface paragraph**

### 6.7 How to Judge a Discussion

More important than asking whether it contains a Limitations or Future Work section is asking:

- does it move beyond repeating Results?
- does it provide an integrated interpretation?
- does it explain broader meaning at a level justified by the evidence?
- is the abstraction too strong?
- if it proposes a General Principle, do multiple findings support it?
- if important boundaries or unresolved questions exist, are they handled honestly?
- does the ending leave a clear take-home message?

Thus:

> **Core Discussion: Interpretation → Broader Meaning**

When useful, extend to:

> **→ New Questions → Boundary / Limitations → Future Studies**

### 6.8 Guided Template: Discussion

Complete the core first, then decide whether optional extensions are needed.

#### Core A: Integrated Interpretation

> Taken together, the findings show: ________________________.

#### Core B: Broader Meaning

> At a deeper level, these findings mean: ________________________.

> Within the evidence boundary, a broader interpretation is: ________________________.

#### Optional C: New Question Space

> The most important unresolved question is: ________________________.

#### Optional D: Limitation

> The current study cannot answer it because: ________________________.

#### Optional E: Future Study

> Answering it would require: ________________________.

Principle:

> **Do not write Optional C–E merely to complete a template.**

---

## 7. Claim–Evidence Mapping: What Exactly Supports Each Major Claim?

Before the reviewer stress test, extract all major claims and map each one to its evidence:

> **Claim → Figure / Table → Evidence → Strength → Remaining Uncertainty**

Example:

| Claim | Supporting evidence | Remaining uncertainty |
|---|---|---|
| MSFold improves alternative-conformation recovery | Fig. 2 benchmark | Could sampling budget explain part of the gain? |
| The improvement is not due to memorization | unseen-protein test | Does this hold across all protein classes? |
| Parallel tempering enables broader exploration | sampling analysis / ablation | Does it correspond to physical energy barriers? |

Check:

- Is there any major claim without direct evidence?
- Is one figure being asked to support too many conclusions?
- Does Discussion contain claims never supported in Results?
- Is the strength of the claim greater than the strength of the evidence?
- Should “demonstrates” be narrowed to “suggests”?

This step establishes:

> **Claim–Evidence alignment**

If a claim cannot be mapped to explicit evidence:

> **add evidence, narrow the claim, or remove it.**

---

## 8. Reviewer Stress Test

Before submission, actively switch to a reviewer’s perspective.

Ask:

> **If I were the most demanding and knowledgeable reviewer, what would be the top three challenges to this paper?**

Generate:

> **Top 3 Reviewer Challenges**

Then classify them.

### 8.1 Can be resolved with additional experiments now

→ Return to Results.

### 8.2 Can be resolved through existing data analysis or interpretation

→ Strengthen Results / Discussion.

### 8.3 Cannot genuinely be resolved within the current study

→ Write as a Limitation and design a corresponding Future Study.

### 8.4 Fatal Flaw

Examples include an unfair central comparison, mismatch between claim and experimental design, severe confounding, or a central conclusion unsupported by the available evidence.

Do not simply place these in Limitations.

Instead:

> **Redesign the study or narrow the central claim.**

Therefore:

> **Reviewer challenge ≠ limitation**

The reviewer perspective is a **stress test**; a limitation is only one possible outcome.

---

## 9. Deadline Mode: How to Close a Study Under Limited Time

WIT / REWRITE can create a problem: every finding can generate more questions, so research can continue indefinitely.

Real research is constrained by submission deadlines, graduation timelines, computational resources, wet-lab costs, and project duration.

Therefore, WIT includes a:

> **Stop Rule / Minimum Sufficient Story**

### 9.1 Near a Deadline: prioritize three types of questions

#### (1) Questions that could change the central claim

If a different answer would invalidate or substantially narrow the main conclusion, address it first.

#### (2) Fatal questions a reviewer is highly likely to raise

Examples include:

- data leakage;
- memorization;
- unfair baselines;
- missing key controls;
- alternative explanations.

Address these first.

#### (3) Low-cost questions that substantially improve interpretation

Examples:

- a simple ablation;
- subgroup analysis;
- error analysis;
- a key negative control.

If the cost is low and the information gain is high, prioritize them.

### 9.2 Questions that can be deferred

If a question:

- does not change the central claim;
- does not affect the main evidence chain;
- requires substantial new experiments;
- is better suited to a separate study;

then move it to:

> **Discussion → Limitation → Future Study**


### 9.3 Research Storyline Freeze: Prevent the Project from Expanding Without Focus

At a mature stage of the project, temporarily freeze the storyline by writing down:

> **Central Question**  
> **Central Claim**  
> **3–5 Key Findings**  
> **General Principle**

Then ask for every proposed new experiment:

> **Will it change or substantially strengthen this storyline?**

If it:

- changes the central claim → high priority;
- rules out an important competing hypothesis → high priority;
- establishes an important boundary condition → potentially valuable;
- merely adds another similar result → proceed cautiously.

Storyline Freeze does not mean the story can never change. A strong unexpected finding may justify rewriting it.

Its purpose is to prevent:

> **the project from losing its center because too many “also possible” experiments are added.**

---

### 9.4 Stop Rule


Stop expanding Results when:

1. the central scientific question has been answered credibly;
2. major competing explanations have been ruled out to a reasonable extent;
3. major reviewer challenges have been addressed;
4. the most important boundary conditions have basic supporting evidence;
5. the remaining questions clearly require experiments beyond the scope of the current study.

Principle:

> **The goal is not to answer every possible question, but to build a minimal yet complete, credible, and defensible scientific story.**

---

## 10. Where Should This Sentence Go? A Decision Tree

```text
What is this sentence doing?
│
├─ Reporting data, comparison, or direct observation?
│      └─ Results
│
├─ Giving a one-step interpretation of one specific result?
│      └─ End of Results subsection: 1-hop Opinion
│
├─ Integrating multiple findings into an interpretation of the study as a whole?
│      └─ Discussion opening: 2-hop Interpretation
│
├─ Proposing a broader mechanism or principle beyond this study?
│      └─ Discussion middle: General Principle
│
├─ Raising a new unresolved question that is important for defining the current work or opening the next stage?
│      └─ It may appear in Discussion, or remain a research-planning question
│
├─ Explaining why an important unresolved question cannot be answered now?
│      └─ When useful, state it as a Limitation
│
└─ Explaining what experiment or analysis could answer that unresolved question next?
       └─ When useful, state it as a Future Study
```

---

## 11. The Two Loops Inside REWRITE

### 11.1 Inner Loop: Research Progression

> **Finding → Question → Answerability → Experiment → Finding**

Purpose:

> Drive the current project forward.

### 11.2 Outer Loop: Interpretation and Abstraction

> **Finding → Literature → Interpretation → Principle → New Question**

Purpose:

> Turn a specific result into deeper scientific understanding.

Together, the two loops determine:

> which new experiments to perform, and how Results / Discussion should be organized.

---

## 12. Research Depth Diagnostic

### 12.1 Level 0 — Observation

> A > B.

Only reports a phenomenon.

### 12.2 Level 1 — Implication

> X improves Y.

Identifies what the result means.

### 12.3 Level 2 — Interpretation

> X improves Y because it changes Z.

Begins to explain mechanism.

### 12.4 Level 3 — General Principle

> More generally, Z may govern this class of problems.

Forms a transferable abstraction.

### 12.5 Level 4 — Boundary / Mechanism Questions

Ask:

- When does it hold?
- What determines the effect size?
- Why does it fail in some cases?
- Are there counterexamples?

### 12.6 Level 5 — New Research Program

Develop:

- What experiments can distinguish competing hypotheses?
- How can the scope of the principle be systematically established?
- What new research questions follow from it?

Strong research should not remain at:

> **A > B**

or:

> **Our model improves the baseline by a few percentage points.**

---

## 13. Core Principles of WIT

> **Advance the research. Grow the researcher.**

> **Automate labor; augment judgment.**

> **Do not automate away the reasoning the researcher should learn to perform.**

> **WIT is a question generator, not a checklist completer.**

> **WIT specifies reasoning functions, not rigid prose forms.**


> **Do not settle on one explanation too early; compare competing hypotheses.**

> **Every important claim should survive a falsification / counterexample check.**

> **Every major claim should map to explicit evidence.**

> **Choose the next experiment by information gain, not convenience alone.**

> **Freeze the storyline periodically to prevent uncontrolled project expansion.**



> **Results should expose how evidence advances the scientific story; both question-driven and pipeline-driven forms can work.**

> **Good findings generate better questions.**

> **Questions answerable now should become new Results.**

> **Questions not answerable now may motivate Discussion, Limitations, or Future Studies when they are important to the story.**

> **Unexpected findings may rewrite the original question.**

> **Literature defines the coordinates of novelty and interpretation.**

> **Reviewer criticism is a stress test, not automatically a limitation.**

> **A good project is not the project that answers every possible question.**

> **A good project answers enough of the right questions to support a coherent and defensible scientific story.**

Ultimately:

> **Writing is thinking.**

More specifically:

> **Discussion writing is research thinking.**

The core research loop of WIT can be compressed into:

> **Finding → Question → Test → Finding**

Research keeps rewriting the question through new findings, while paper writing makes this thinking process explicit.

That is **WIT: Writing Is Thinking**.

---

## 14. How to Audit the Logical Chain of a Paper

WIT can also be used to audit a manuscript, but the audit should evaluate **reasoning functions**, not whether the paper follows a fixed template.

### 14.1 Introduction: Do the Paragraph Openings Form a Coherent Problem Chain?

Extract the first sentence of each Introduction paragraph and ask:

> **Can the reader understand where the field stands, what is missing, and why this study is necessary?**

A common strong logic is:

> **Final Goal → Necessary Components → Established Components → Missing Component → Why It Matters → This Study**

This is a logic audit, not a requirement that every Introduction contain exactly six paragraphs.

### 14.2 Results Titles: Can They Form a Small Essay?

Read all Results subsection titles in order and ask:

> **Do they reveal how the scientific story progresses?**

The progression may be:

> **Question → Finding → Mechanism → Boundary**

or, as in AlphaGo:

> **Component A → Component B → Integration → System Evaluation**

The audit therefore tests:

> **logical progression**

not whether every title is finding-driven.

### 14.3 Results Subsections: Is the Reasoning Chain Recoverable?

For each subsection, ask whether the underlying logic can be reconstructed as:

> **Motivation / Question → Experiment / Analysis → Fact → restrained 1-hop Opinion → Next Question / Next Step**

The prose does not need to state every element explicitly.

Ask:

- Why does this subsection need to exist?
- Does the Fact support the local claim?
- Does the Opinion stay close to the Fact rather than over-generalize?
- Why does the next subsection follow?

### 14.4 Discussion: Does It Complete the Core Functions?

First audit the strong requirements:

> **Integrated Interpretation → Broader Meaning / justified abstraction**

Ask:

- Does it move beyond repeating Results?
- Does it integrate multiple local findings?
- Does it explain why the findings matter?
- Is the abstraction proportional to the evidence?

Then, when useful, audit optional extensions:

> **New Questions → Boundary / Limitations → Future Studies**

These should appear when they help define the claim honestly or open the next research stage. They should not be added merely to satisfy a template.

AlphaGo demonstrates that:

> **A Discussion can omit explicit Limitations / Future Studies and still provide a complete and powerful scientific interpretation.**

### 14.5 Simplified Audit Diagram

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

The audit can be compressed into four questions:

> **(1) Does the Introduction explain why the study is necessary?**

> **(2) Do the Results titles form a coherent progression, whether question-driven or pipeline-driven?**

> **(3) Is the underlying Motivation → Evidence → 1-hop Interpretation → Next Step chain recoverable in each Results subsection?**

> **(4) Does Discussion complete integrated interpretation and broader meaning, and handle important boundaries or unresolved questions honestly when needed?**

Core principle:

> **Audit the reasoning, not the template.**
