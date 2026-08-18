# Overflow Studio — Claude Code starter kit

Drop this into the root of your Overflow Studio repo (the folder containing `.git`).

```
overflow-website/
├── CLAUDE.md              ← copy or merge into your project root
└── .claude/
    ├── agents/             ← 8 review subagents
    └── skills/
        └── prelaunch-review/
```

## What's in here

**`CLAUDE.md`** — the always-loaded positioning/brand/technical summary from your spec, section 31.
Claude Code reads this on every message in this project. Keep it this short on purpose — the full
2,688-line spec doc should live somewhere Claude reads once during planning, not something reloaded
every turn.

**8 subagents in `.claude/agents/`** — brand, conversion, credibility, ux, visual, performance,
accessibility, security. These are your spec's section 36 turned into real files. Each one is
read-only (can't edit code) and returns a report, not a fix — that matches your doc's own instruction
not to change anything until the audit is reviewed.

**`prelaunch-review` skill** — chains your spec's five "trust tests" (sections 37-41) into one
`/prelaunch-review` command. It only runs when you type it; Claude won't trigger it on its own.

## How to use it once installed

Ask normally and Claude auto-delegates:
```
Review the homepage copy for brand fit
→ Claude reaches for brand-reviewer on its own
```

Or name one explicitly:
```
Use the performance-reviewer subagent on the Case Studies page
```

Run all 8 in parallel after a big page build:
```
Run brand-reviewer, ux-reviewer, visual-reviewer, and accessibility-reviewer on the new homepage,
in parallel, and give me one combined findings list
```

Before launch:
```
/prelaunch-review
```

## Suggested first Claude Code session

1. `claude` in your repo root
2. Paste your Phase 1 prompt from spec section 31 ("Do not modify the repository. Audit the entire
   Overflow Studio codebase...") — let it produce the architecture report first
3. Merge this kit in
4. Work page by page per section 33's build order, running the relevant subagents after each one
