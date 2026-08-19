# Staying updated without living on Twitter

"I always feel behind" is a sourcing problem, not a discipline problem. The
fix isn't "read more" — it's picking a small number of high-signal sources
and checking them on a fixed cadence, instead of an open-ended feed that
never resolves to "done for today."

## The three sources worth your attention

1. **The official Claude Code changelog** — ships roughly weekly. This is
   ground truth for what actually changed, not someone's hot take on it.
2. **[ClaudeLog](https://claudelog.com/)** — written by people using Claude
   Code daily, so it catches practical technique shifts (a better prompting
   pattern, a workflow change) that a changelog entry wouldn't mention.
3. **[Simon Willison's blog](https://simonwillison.net/)** — consistently
   the best signal-to-noise account covering this whole space. If something
   in AI coding tools actually matters, he's usually written the clearest
   explanation of it within a day or two.

## What to deliberately skip

**Twitter/X as a primary source.** It's where noise goes to multiply — for
every genuinely useful post there are fifty reactions to it. If something
important happened there, it'll surface in one of the three sources above
within a day or two anyway. Following a handful of specific accounts for
flavor is fine; treating the timeline as a news source is the thing to stop.

## The actual fix: make Claude check for you

You don't have to remember to do this. See
[`examples/weekly-claude-digest/SKILL.md`](examples/weekly-claude-digest/SKILL.md)
— install it once (globally, so it works from any project), and "staying
updated" becomes typing `/weekly-claude-digest` once a week instead of a
standing background anxiety. It fetches all three sources, filters for
relevance to your actual work, and appends the result to a note instead of
making you re-read it from scratch every time.

## A cadence, not a stream

Once a week is enough. AI tooling moves fast, but not "you'll miss something
irreversible if you check on Tuesday instead of Monday" fast. The goal is a
five-minute glance that closes the loop, not a habit of checking constantly.
