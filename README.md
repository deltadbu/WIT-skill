# WIT

**WIT (Writing Is Thinking)** is a **human–LLM collaborative skill for scientific thinking and writing**.

> **Advance the research. Grow the researcher.**

WIT is designed not only to improve scientific work, but also to strengthen the researcher's ability to ask questions, interpret evidence, design experiments, and make scientific judgments.

> **Automate labor; augment judgment.**

WIT uses the LLM to extend, challenge, scaffold, and audit the researcher's thinking—not simply to replace it.
Core principle:

> **WIT specifies scientific reasoning functions, not a rigid surface template for papers.**

It helps researchers:
- open vague ideas into a testable scientific question space;
- organize Results around evidence and restrained interpretation;
- distinguish local Results-level interpretation from integrated Discussion-level interpretation;
- move from findings toward broader meaning or general principles;
- generate competing hypotheses and choose high-information next experiments;
- decide which new questions deserve further experiments and which belong to boundaries, limitations, or future studies;
- audit the logical chain and claim–evidence alignment of a paper;
- keep the researcher actively involved in the scientific judgments that matter most.

## Use

If your agent supports Agent Skills / `SKILL.md`, install or expose the [`wit/`](wit/) directory as the skill package and let the agent load [`wit/SKILL.md`](wit/SKILL.md).

Otherwise, ask the AI to read:

[`wit/references/WIT-Scientific-thinking-and-writing-skill.md`](wit/references/WIT-Scientific-thinking-and-writing-skill.md)

Then invoke it directly:

> Use WIT to open up this question: XXX.

> This is a finding: XXX. Use WIT to expand it.

> Use WIT to review the Results and Discussion.

> Use WIT to audit the logical chain of this paper.

> Use WIT in human–LLM collaboration mode: help me think, not just finish the task for me.

## Paper Logic Audit
- **Introduction:** does it explain why the study is necessary?
- **Results titles:** do they form a coherent progression? Question-driven and pipeline-driven forms can both work.
- **Results subsection:** is the underlying Motivation / Question → Fact → restrained 1-hop Opinion → Next Step chain recoverable?
- **Discussion core:** Integrated Interpretation → Broader Meaning / justified abstraction
- **Discussion optional:** New Questions → Boundary / Limitations → Future Studies, when scientifically useful

> **Audit the reasoning, not the template.**

Three ideas summarize WIT:

> **Writing is thinking.**  
> **WIT is a question generator, not a checklist completer.**  
> **Advance the research. Grow the researcher.**

For details, see [WIT-Scientific-thinking-and-writing-skill.md](wit/references/WIT-Scientific-thinking-and-writing-skill.md).

中文说明见 [README-cn.md](README-cn.md).

## License

WIT uses **split licensing**:

- The executable Agent Skill and software components — especially [`wit/SKILL.md`](wit/SKILL.md) and executable code/scripts — are licensed under the **Apache License 2.0** (`Apache-2.0`).
- The WIT framework and human-readable content — including the README files, [`wit/references/`](https://github.com/deltadbu/WIT-skill/tree/main/wit/references), [`wit/tests/`](wit/tests/), and [`wit/case-studies/`](wit/case-studies/) — are licensed under the **Creative Commons Attribution 4.0 International License** (`CC-BY-4.0`).

See [LICENSE](LICENSE) for the exact scope and attribution guidance. Full license texts are provided in [LICENSE-APACHE-2.0](LICENSE-APACHE-2.0) and [LICENSE-CC-BY-4.0](LICENSE-CC-BY-4.0).
