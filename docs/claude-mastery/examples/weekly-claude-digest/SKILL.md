---
name: weekly-claude-digest
description: Use when the user asks "what's new in Claude/Claude Code", wants a weekly AI-tooling update, or runs /weekly-claude-digest. Fetches the official changelog and recent posts from the two highest-signal sources and produces a short, relevance-filtered summary.
---

# Weekly Claude digest

Goal: five minutes of reading, not an hour of scrolling Twitter. Filter
everything through "would this change how I build Overflow Studio, Dhulai
Khata (Flutter/Firebase), or Mujahid-OS (Obsidian/personal systems)?" — skip
anything that doesn't.

## Steps

1. Fetch the official Claude Code changelog:
   `https://code.claude.com/docs/en/claude_code_docs_map.md` (this is the
   docs map — follow it to the changelog/release-notes page it points to).
2. Fetch Simon Willison's blog index (`https://simonwillison.net/`) and note
   any post from the last 7 days tagged `claude` or `ai-assisted-programming`
   — he's consistently the best signal-to-noise account in this space, worth
   checking even when the official changelog is quiet.
3. Fetch ClaudeLog (`https://claudelog.com/`) for anything new in the last 7
   days — it's written by people testing Claude Code daily, so it catches
   practical technique changes the changelog doesn't mention.
4. For each item found, apply the filter: does this affect Flutter/Firebase
   mobile dev, Obsidian/personal-knowledge-system workflows, or
   animated-website-in-Next.js work? If not, drop it — don't pad the summary
   with irrelevant items just to look thorough.
5. Write the surviving items as a dated section, newest findings first:
   `## YYYY-MM-DD` then 3–6 bullets, each one line, each ending with the
   source link.
6. If the user has a notes vault (ask if unknown, or check for an
   Obsidian-style folder), append the section to a running
   `Claude Updates.md` note there instead of just printing it in chat — that
   turns this into a permanent, searchable log instead of something that
   scrolls away.

## Explicitly skip as a source

Twitter/X as a primary source — high volume, low signal, easy to lose an
hour to. If something genuinely important happened, it'll be in the official
changelog or on Simon Willison's blog within a day or two anyway.
