# The four primitives (five, counting plugins)

Everything you've seen in slick "Claude built my whole app" demos traces back
to a small set of building blocks. Once these click, the rest of this folder
is just applying them.

## CLAUDE.md — standing facts

A file at your project root. Claude Code reads it on **every single message**
in that project, automatically, with no trigger needed. That's the whole
point and the whole cost: it's always in context, so it must stay short.

Put in it: positioning, brand rules, tech stack, non-negotiables, things that
would be expensive to re-explain every session. Look at this repo's
[`CLAUDE.md`](../../CLAUDE.md) — nine lines of "never position Overflow as a
generic agency," and every page built after it inherited that constraint
without being told again.

Don't put in it: anything that's only relevant sometimes. That's a Skill.

## Skills — instructions for a specific job

A `SKILL.md` file (plus optional supporting files) describing how to do one
kind of task. Unlike CLAUDE.md, a skill only loads into context when it's
actually relevant — Claude reads a one-line description of every installed
skill, decides "this one applies," and only then pulls in the full
instructions. That means you can have hundreds of skills sitting quietly and
it costs you nothing until one fires.

You already have one installed: `.claude/skills/prelaunch-review/SKILL.md`
in this repo, which chains five "trust test" checks into a single
`/prelaunch-review` command.

Use a skill when: you do the same multi-step task repeatedly and want it
consistent — a release checklist, a specific review process, "how our team
writes commit messages," "how to deploy this specific project."

## Subagents — a separate worker with its own context

A subagent is a full Claude instance with its own context window, its own
tool permissions, sometimes its own model. You hand it a task; it goes off,
does the messy work (reads 40 files, runs a build, greps a huge log), and
only the *summary* comes back to your main conversation. Your main context
stays clean.

This repo has eight of them in `.claude/agents/` (brand-reviewer,
performance-reviewer, security-reviewer, etc.) — read-only reviewers that
report findings without touching code, exactly matching the spec's own rule
"don't change anything until the audit is reviewed."

Use a subagent when: the task would flood your main conversation with noise
you don't need to see (build logs, file-by-file diffs), or when you want a
specialized "persona" with narrower tool access than your main session.

## MCP servers — reaching outside Claude

MCP (Model Context Protocol) is the wiring that lets Claude talk to things
outside itself — your GitHub account, a database, Figma, Slack. You configure
a server once; after that, Claude can call it like any other tool. Not
covered in depth here because none of your three projects need one yet, but
worth knowing the name so "add a Figma MCP server" makes sense when you hit
that need.

## Plugins — someone else's bundle, installed in one command

A plugin is skills + subagents + MCP servers + hooks, packaged by someone
else and installable in one command (`/plugin install`). It's how you get
"someone already solved this" power without hand-rolling it. See
[04-finding-open-source-power.md](04-finding-open-source-power.md).

## How they compose

A real project layers all of these: CLAUDE.md sets the constraints every
message inherits, skills encode your repeatable processes, subagents handle
anything that would otherwise flood your context, and plugins give you a
head start on categories you don't want to build from scratch. Overflow
Studio's `.claude/` folder right now has CLAUDE.md + 8 subagents + 1 skill —
that's the whole system, just four pieces, doing real work.
