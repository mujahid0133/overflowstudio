# Finding the open-source power

The "someone already built this" instinct is correct — a lot of what makes
Claude Code look magical in demos is a well-written subagent or skill
someone published, not a secret model capability. Here's where that lives
and how to vet it before installing.

## Subagent collections

- **[VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)**
  — 100+ subagents organized by category (core development, frontend,
  backend, etc.). The largest, best-organized collection as of this writing.
  Check `categories/01-core-development/frontend-developer.md` for a sense
  of the quality bar.
- **[0xfurai/claude-code-subagents](https://github.com/0xfurai/claude-code-subagents)**
  — another large, production-oriented collection.
- **[hesreallyhim/a-list-of-claude-code-agents](https://github.com/hesreallyhim/a-list-of-claude-code-agents)**
  — community-submitted, wider variety, more uneven quality — good for
  browsing ideas even when you end up writing your own version.
- **[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)**
  — the equivalent curated list for Skills specifically.

## Marketplaces (one-command install)

Plugins bundle skills + subagents + MCP servers together. Browse, then
install with `/plugin install <name>`:

- **[claudemarketplaces.com](https://claudemarketplaces.com)** — searchable
  plugin marketplace; this is where the GSAP/Awwwards-style animation skill
  referenced in your original spec research came from
  (`eng0ai/eng0-template-skills` → `gsap-awwwards-website`).
- Run `/plugin marketplace` inside Claude Code itself to browse without
  leaving the terminal.

## How to vet one before trusting it in a real project

A subagent or skill you install runs with real tool access in your
repo — treat it like adding a dependency, not like reading a blog post.

1. **Read the file before installing, not after.** It's usually under 100
   lines — actually read what it tells Claude to do, especially the `tools:`
   line in a subagent's frontmatter (does it grant `Bash`/`Edit` when it only
   needs `Read`?).
2. **Check the repo, not just the file.** Stars/recency aren't proof of
   quality, but a repo with one commit and no other content is a different
   trust level than one with an active issue tracker and multiple
   contributors.
3. **Start it read-only where you can.** If you're unsure, install it, but
   ask it to review something low-stakes first before letting it touch code
   you care about.
4. **Prefer editing a copy over using it as-is.** Most of these are
   templates, not finished products — the Overflow Studio review kit in this
   repo started from your own spec doc's section 36, not from a random
   GitHub file, and that's usually the right ratio: borrow the *pattern*,
   write the specifics yourself.

## Where this repo's own animation stack came from

Not a Claude plugin at all — just good frontend engineering Claude Code is
good at wiring up once you tell it which pieces to use. See
[06-the-awwwards-stack.md](06-the-awwwards-stack.md).
