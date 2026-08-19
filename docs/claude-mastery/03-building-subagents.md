# Building your own subagent

## The file

`.claude/agents/<agent-name>.md` (project-local) or `~/.claude/agents/` for
global. Format:

```markdown
---
name: agent-name
description: One or two sentences. This is what Claude's main session reads
  to decide whether to auto-delegate to this agent — be specific about when
  it applies and what it returns.
tools: Read, Grep, Glob, Bash   # omit to inherit everything; narrow this for read-only reviewers
model: inherit                  # or a specific model
---

The system prompt for this subagent — who it is, what it checks, what it
returns. Write it like a job description, not a casual note: this is the
entire brief the subagent gets, with no memory of your main conversation.
```

Look at `.claude/agents/performance-reviewer.md` in this repo — real,
already working. Notice it's told explicitly what targets to check against
and to report *numbers*, not impressions. Vague briefs produce vague reports;
the same discipline that makes a good delegation to a human contractor makes
a good subagent brief.

## Two ways they get used

**Automatic** — Claude's main session reads every subagent's `description`
and decides on its own when a task matches. Ask "review the homepage copy
for brand fit" in this repo and Claude reaches for `brand-reviewer` without
you naming it.

**Explicit** — you name it directly: "use the performance-reviewer subagent
on the case studies page," or run several in parallel: "run brand-reviewer,
ux-reviewer, and accessibility-reviewer on the new page, in parallel, give me
one combined list."

## Why this actually matters, not just "AI can do more steps now"

The value isn't "more automation." It's **context protection**. Your main
conversation is where you think and decide; a subagent is where the mess
happens. Reading 40 CocoaPods log files, grepping a huge changelog, running a
build with 200 lines of warnings — none of that needs to sit in your main
context polluting every future response with irrelevant noise. The subagent
eats the mess and hands back a verdict.

## Real subagents for your other two projects

These aren't hypothetical — they're built from problems you've actually
described.

**Dhulai Khata** — you said the GSD (get-stuff-done) failure there came from
a monolithic spec with no verification checkpoints, and that the two-sided
possession ledger rule got silently dropped somewhere along the way. Two
subagents fix exactly that failure mode:

- [`examples/flutter-build-doctor.md`](examples/flutter-build-doctor.md) —
  hand it the raw Xcode/CocoaPods build output so your main session isn't
  drowning in pod-install noise; it comes back with a diagnosis, not a wall
  of logs.
- [`examples/ledger-invariant-checker.md`](examples/ledger-invariant-checker.md)
  — reviews any new code slice's diff against the two-sided ledger rule
  *before* you call the slice done, instead of finding out it broke three
  features later.

**Mujahid-OS** — a small subagent that keeps your Dataview dashboard and
Recurring Mistakes ledger in sync whenever you close out a project, instead
of doing that bookkeeping by hand:
[`examples/vault-sync.md`](examples/vault-sync.md).

**Overflow Studio** — already done. The 8 reviewers in `.claude/agents/`
*are* section 36 of your spec doc turned into files — that section was
written with subagents in mind, whether or not that was conscious.

## Don't over-build this

The spec doc's own instruction to itself applies to you too: "do not create
50 bespoke components." Same principle for subagents — a handful of
sharply-scoped ones beats twenty overlapping ones. Start with the one that
fixes your most recent actual failure, not a speculative full roster.
