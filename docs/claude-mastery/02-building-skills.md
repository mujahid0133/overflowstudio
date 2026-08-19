# Building your own Skill

## The file

A skill lives at `.claude/skills/<skill-name>/SKILL.md` (project-local — this
repo only) or `~/.claude/skills/<skill-name>/SKILL.md` (global — every
project on your machine, including Dhulai Khata and Mujahid-OS). Minimum
viable skill:

```markdown
---
name: skill-name
description: One sentence Claude uses to decide when this applies. Be
  specific about trigger words/situations — this is the only part of the
  skill that's "always loaded"; the body only loads once it fires.
---

Step-by-step instructions for the actual task, written the way you'd explain
it to a competent new hire. Reference other files in this same folder
(`references/`, `templates/`) if the instructions need supporting material.
```

That's it. No build step, no registration command — drop the folder in and
it's live next session.

## The one rule that matters: the description is doing all the work

Claude scans every installed skill's `description` field on every message,
cheaply, to decide relevance. A vague description ("helps with reviews")
either never fires or fires on everything. A good one names concrete
triggers: "Use when the user asks to deploy, release, or ship this project"
— specific verbs, specific nouns.

Look at `.claude/skills/prelaunch-review/SKILL.md` in this repo for a
project-local example that only fires on `/prelaunch-review`.

## A real one you can install today

[`examples/weekly-claude-digest/SKILL.md`](examples/weekly-claude-digest/SKILL.md)
in this folder is a working skill: point it at Claude Code's changelog, and
it summarizes what's new into a note in your vault. This is the direct
answer to "I always feel behind" — instead of remembering to check anything,
you type `/weekly-claude-digest` (or just ask "what's new") once a week and
it does the reading for you. See
[05-staying-updated.md](05-staying-updated.md) for the full workflow.

To install it globally so it's available in Dhulai Khata and Mujahid-OS too:

```bash
mkdir -p ~/.claude/skills
cp -r docs/claude-mastery/examples/weekly-claude-digest ~/.claude/skills/
```

## When to reach for a skill vs. a subagent

Skill: the task is "follow these steps," doesn't need to be hidden from your
main context, and you (or Claude, automatically) will trigger it by name or
description match. Instructions, not a separate worker.

Subagent: the task would produce a lot of noise you don't want cluttering
your conversation, or benefits from a narrower tool permission set (e.g.
"can read but never edit"). A worker, not just instructions.

You can combine them — a skill's instructions can say "now dispatch the
performance-reviewer subagent," exactly like `prelaunch-review` chains five
checks together in this repo.
