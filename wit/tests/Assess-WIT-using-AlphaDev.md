# Assessing WIT using AlphaDev

## Scope

This assessment uses:

- Mankowitz, D. J. et al. *Faster sorting algorithms discovered using deep reinforcement learning*. Nature 618, 257–263 (2023). DOI: 10.1038/s41586-023-06004-9.
- Current WIT Agent Skill: [SKILL.md](../SKILL.md)
- Current full WIT workflow: [WIT-Scientific-thinking-and-writing-skill.md](../references/WIT-Scientific-thinking-and-writing-skill.md)

AlphaDev predates WIT and is therefore useful as an external stress test for most of WIT. However, one recently added WIT rule—natural-language explanation followed by a minimal concrete walkthrough—was explicitly motivated by AlphaDev. AlphaDev therefore illustrates that rule but cannot independently validate it.

## Overall conclusion

AlphaDev strongly supports the main architecture of WIT: flexible Results organization, evidence-to-interpretation distance, mechanism-revealing cases, competing alternatives, boundary analysis, and evidence-proportional Discussion.

At the same time, AlphaDev exposes one important over-specification in the current WIT skill:

> WIT should not require Figure 1 itself to summarize the entire paper.

In AlphaDev, Figure 1 explains the relationship between C++ and assembly, whereas Figure 2 provides the central conceptual view of AssemblyGame. A better WIT rule is:

> **An early overview figure—often, but not necessarily, Figure 1—should allow the reader to grasp the central idea and high-level operation of a method paper.**

This correction is consistent with WIT's own meta-principle: reasoning function should be required, not a fixed surface form.

## 1. Introduction / missing component

AlphaDev clearly motivates a missing capability. Earlier program-synthesis approaches can generate or optimize programs, but the paper emphasizes the difficulty of efficiently searching for programs that are both correct and fast, especially when optimizing actual CPU-level latency. AlphaDev formulates this search as AssemblyGame and uses reinforcement learning plus search to address it.

This is compatible with WIT's Introduction logic:

`Final Goal → Existing Components → Missing Capability → Why It Matters → This Study`

The paper does not literally follow that template, which supports WIT's principle that the logical function matters more than prose form.

## 2. Results organization

AlphaDev's Results are not organized as explicit questions. They progress through:

- fixed sorting algorithms;
- variable sorting algorithms;
- new algorithmic discoveries;
- swap and copy moves;
- variable-sort mechanisms;
- comparison with stochastic search;
- additional domains;
- the libc++ patch.

This is a strong external example of a component/finding-driven Results structure whose underlying scientific progression remains recoverable.

Therefore AlphaDev supports the WIT revision:

> **Results should expose the logical progression of the scientific story, not obey a single title format.**

## 3. Natural-language explanation and minimal walkthrough

AlphaDev first explains the basic idea of AssemblyGame in ordinary language: the agent constructs a program by selecting low-level instructions, and it is rewarded for correctness and latency. It then makes the process concrete with a small sorting example.

The paper also uses a three-element sorting network to explain the AlphaDev swap move. The reader can see why a previous comparison becomes redundant and how one instruction can be removed.

This is an excellent illustration of the WIT rule:

> Explain the idea in words, then make it executable with a minimal example.

But this is a **positive example, not independent validation**, because AlphaDev explicitly motivated the addition of this rule to WIT.

## 4. Worked comparative cases: why ours succeeds and existing methods fail

AlphaDev contains unusually strong comparative cases.

For the swap/copy moves, the paper shows the conventional sorting-network logic and the shortened logic discovered by AlphaDev, making the source of the improvement understandable.

For VarSort4, the human benchmark dispatches to a separate sorting network according to sequence length, whereas AlphaDev reuses a partially sorted prefix and then applies a simplified routine. This explains not merely that AlphaDev is faster, but how the algorithmic structure produces the latency gain.

This strongly supports WIT's distinction:

> **Benchmark evidence establishes that a method works; a worked comparative case explains how and why it works.**

## 5. Difference-focused benchmark analysis

AlphaDev does more than report aggregate superiority. It separates regimes in which the methods behave differently:

- fixed versus variable sorts;
- branchless versus branching programs;
- algorithm length as a useful latency proxy versus regimes in which length and latency decouple;
- cold-start versus warm-start stochastic search.

This is exactly the type of analysis WIT is trying to encourage. It shows that "where the gain comes from" may be expressed not only through individual cases or subsets, but also through **conditions or regimes**.

Suggested refinement to WIT:

> replace "cases/subsets" with **"cases, subsets, conditions, or regimes"**.

## 6. Competing alternatives, falsification, and boundaries

The paper directly compares AlphaDev with a stochastic superoptimization baseline under matched or favorable conditions, including cold-start and warm-start variants. It also notes cases in which warm-start stochastic search is computationally more efficient, rather than claiming universal superiority.

This is consistent with WIT's preference for discriminating comparisons and boundary-aware claims.

A post-publication discussion on the Nature article page also illustrates why claim boundaries matter. The paper states that brute force established a 17-instruction lower bound for sort 3; an author later clarified that this lower bound is within the restricted branchless instruction set considered in the work. This is a concrete example of the WIT principle:

> **Claim strength and scope must match the evidence and tested boundary.**

## 7. Discussion

AlphaDev's Discussion is short. It summarizes the main achievement, notes complementary strengths of RL and stochastic search, and discusses possible generalization. It does not contain a ritualized sequence of "limitations → future work → conclusion."

This supports WIT's current formulation:

> **Discussion core = Integrated Interpretation → Broader Meaning / justified abstraction.**

New questions, boundaries, limitations, and future studies are useful when scientifically needed, not mandatory surface sections.

## 8. Six-dimensional question space

AlphaDev can be naturally interrogated through the WIT question space:

- **Existence / Whether:** Can an RL-based system discover sorting routines better than highly optimized human baselines?
- **Determinants / What:** Representation, reward definition, search method, branching structure, and initialization regime affect performance.
- **Cause / Why:** Learned search can explore program space differently from stochastic optimization.
- **Mechanism / How:** AssemblyGame + neural representation + MCTS-guided RL + correctness/latency reward.
- **Boundary / When:** Branchless versus branching routines, cold versus warm start, instruction-set restrictions, and hardware regimes.
- **Magnitude / To what extent:** Instruction savings, latency improvements, and downstream libc++ impact.

The dimensions are useful as an attention map without needing to appear as six explicit paper sections.

## Verdict

AlphaDev does not falsify WIT's core reasoning architecture. Instead, it:

1. supports WIT's flexible Results and Discussion principles;
2. strongly illustrates the value of mechanism-revealing worked examples;
3. supports systematic analysis of where performance differences arise;
4. supports boundary-aware and competing-method comparisons;
5. **falsifies an overly rigid surface rule about Figure 1.**

Therefore the appropriate conclusion is not "AlphaDev validates WIT." It is:

> **AlphaDev provides a strong external stress test for most of WIT and sharpens one of its rules.**

The most important revision is:

> **An early overview figure—often, but not necessarily, Figure 1—should convey the central idea and high-level operation of a method paper.**

This outcome is itself consistent with WIT:

`Rule → Counterexample → Boundary → Better Rule`
