# Building a fast, award-winning website with Claude skills

**Created:** 8/19/2026 3:30:47  
**Updated:** 8/19/2026 3:41:57  
**Exported:** 8/19/2026 4:12:53  
**Link:** [https://claude.ai/chat/c933f31e-b7aa-47bf-9497-a3a4afb44b8f](https://claude.ai/chat/c933f31e-b7aa-47bf-9497-a3a4afb44b8f)  

## User:

> 8/19/2026 3:30:48

> File: Untitled document.md

teach me some of the things
i have been seeing some cool stuff some animated yet fast loading website with some skill or plugin opensource on github that give claude much power and make awesome awwwards style but brutally fast mind blowing things

teach me bro

also teach me how to stay updated on new cool things i always feel like i live under a stone where i dont have much new knowledge i dont even know how to use claude skills how to create your own subagents give me tons of examples how it can solve my problems 

so see i want to create this website for my overflow studio venture

and i want it cool asf 

for that you are going to clear vagueness if you feel any by interviewing me one question at a time until it resolves and then you incresing my exposure on above

## Assistant:

> 8/19/2026 3:32:15

> Untangled ambiguities around Claude tooling and Overflow Studio's technical foundation.
>
> - Reading uploaded document for context
> - Scanning document structure for section headers and agent/skill references
> - Search for agent/skill mentions in the doc
> - List numbered section headers
> - Interrogated user intent to prioritize learning versus building the website.
> - Check if tech stack is already specified in the doc
> - Untangled ambiguities around Claude tooling and Overflow Studio's technical foundation.
> - **Done**

This doc's a great spec — it already nails the positioning and psychology. The gap is on the *build* side: how to actually get an awwwards-caliber, fast site out of Claude Code using skills/subagents/plugins, and how to stop feeling behind on this stuff in general. Let's sort the build question first, since that shapes everything else I show you.

## User:

> 8/19/2026 3:32:54

Q: Where's the Overflow Studio site right now, code-wise?
A: old site exists but it really like nothing is built lol

## Assistant:

> 8/19/2026 3:33:06

> Assessed greenfield project scope and developer experience.
>
> - Assessed greenfield project scope and developer experience.
> - **Done**

## User:

> 8/19/2026 3:33:19

Q: Got it, so basically greenfield. Do you have a stack preference for the new build, or want me to recommend one suited for animated-but-fast?
A: No strong preference — recommend what fits best

## Assistant:

> 8/19/2026 3:33:41

> Weighed teaching versus building, calibrated depth for subagent newcomer.
>
> - Weighed teaching versus building, calibrated depth for subagent newcomer.
> - **Done**

## User:

> 8/19/2026 3:36:05

Q: Last one — what do you want to walk away with from this chat?
A: Both — teach me, then set up the real thing

## Assistant:

> 8/19/2026 3:41:57

> Architected comprehensive subagent system with educational framework and deliverables.
>
> - Architecting comprehensive response bridging theory and practical application.
> - Checking Anthropic product-self-knowledge skill before discussing Claude Code specifics
> - [https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md](https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md)
> - Claude Code docs map claude_code_docs_map.md
> - [https://code.claude.com/docs/en/claude_code_docs_map.md (claude.com)](https://code.claude.com/docs/en/claude_code_docs_map.md)
> - [https://code.claude.com/docs/en/sub-agents.md (claude.com)](https://code.claude.com/docs/en/sub-agents.md)
> - [https://code.claude.com/docs/en/skills.md (claude.com)](https://code.claude.com/docs/en/skills.md)
> - awesome-claude-code github subagents collection frontend design
> - Checking frontend-design skill for relevant guidance
> - awwwards style website 2026 GSAP Lenis smooth scroll performant animation stack
> - best newsletters twitter accounts follow to stay updated Claude Code AI coding tools 2026
> - Synthesized resources, architected response structure, and devised executable subagent templates.
> - Reading the Claude Code workflow and reviewer sections of the spec doc
> - Reading remaining reviewer sections
> - Architected comprehensive subagent system with educational framework and deliverables.
> - **Done**

Good — that's enough ambiguity resolved. Here's the real picture, then the setup.

## The four Lego pieces Claude Code gives you

Everything you've seen in those slick awwwards clones traces back to four primitives. Quick map before anything else:

> Architected visual diagram mapping Claude Code system components.
>
> - Architected visual diagram mapping Claude Code system components.
> - **Done**

> [Interactive Widget: claude_code_skills_subagents_plugins_mcp]

> Orchestrated educational framework then architected functional subagents.
>
> - Orchestrated educational framework then architected functional subagents.
> - **Done**

That's the mental model. Quick definitions to pin it down:

- **CLAUDE.md** — standing facts about a project. Loads on every single message, so keep it short (positioning, rules, never-do's).
- **Skills** — a `SKILL.md` file with instructions for a specific job. Only loads into context when it's actually relevant, so you can have hundreds of them sitting quietly.
- **Subagents** — a separate AI worker with its own context window, own tool permissions, sometimes its own model. You hand it a task, it does the messy work (reading 40 files, running a build, taking screenshots), and only the summary comes back to your main conversation.
- **MCP servers** — the wiring that lets Claude reach outside itself (your GitHub, a database, Figma, etc).
- **Plugins** — a zip file of skills + subagents + MCP servers + hooks that someone else built, installable in one command.

## What this actually solves for you

Concretely, for the stuff you're already building:

**Dhulai Khata** — you told me the GSD failure came from a monolithic spec with no verification checkpoints. That's exactly what subagents fix: a `flutter-build-doctor` subagent you send the raw Xcode/CocoaPods noise to (so your main session isn't drowning in pod install logs), and a `ledger-invariant-checker` subagent that reviews any new slice's diff against the two-sided possession ledger rule before you call it done — the thing that got silently dropped last time.

**Mujahid-OS** — a small subagent that keeps your Dataview dashboard and Recurring Mistakes ledger in sync whenever you close out a project, instead of you doing it by hand.

**Overflow Studio** — your spec doc, section 36, literally already lists 8 review-agent roles (brand, conversion, credibility, UX, visual, performance, accessibility, security). That's not a coincidence — someone wrote that spec with subagents in mind. I'm going to turn those into real subagent files below.

## Where the open-source power actually comes from

The "brutally fast but mind-blowing" awwwards sites you're seeing aren't one library — they're a stack. As of 2026 the standard production combo is: **Lenis** (3KB smooth-scroll, syncs everything else), **GSAP + ScrollTrigger** (hero/marketing timeline sequences — this is what does the staggered reveals), **Motion/Framer Motion** (React component transitions, modals, page changes), and **Three.js/R3F** only where a 3D moment actually earns its weight. None of that is Claude-specific — it's just good frontend engineering that Claude Code is very good at wiring up when you tell it which pieces to use.

For finding more of these as Claude Code skills/plugins specifically:

> Used tool
>
> - Places to find real Claude Code plugins/subagents and stay current
> - **Done**

**On not feeling behind:** the honest fix isn't "read everything" — it's picking 2-3 sources and checking them on a cadence. My actual suggestion: the `whats-new` changelog above ships weekly, ClaudeLog is written by people testing this stuff daily, and Simon Willison's blog is the single best signal-to-noise account of anyone covering this space. Skip Twitter as a primary source — it's where noise goes to multiply.

Here's the fun part: you can make Claude Code do this checking *for* you. A one-line skill in your Mujahid-OS setup — "fetch this week's whats-new page, summarize what's relevant to a Flutter/Firebase + web dev, append to my vault" — turns "staying updated" into a five-second weekly glance instead of a background anxiety.

## Now let's build the real thing

Your spec doc already contains 8 subagent definitions in prose form (section 36) — you just haven't turned them into files yet. I'm doing that now, plus a starter `CLAUDE.md` from your own section 31, plus one pre-launch skill that chains the "trust tests" from sections 37-41. These are Claude Code project files — you'll drop the whole folder into your Overflow repo.

> Ran 2 commands, created 11 files
>
> - Create the .claude project scaffold (subagents, CLAUDE.md, skill) for Overflow Studio
> - Root CLAUDE.md — persistent Overflow Studio context, from spec section 31
> - brand-reviewer subagent
> - conversion-reviewer subagent
> - credibility-reviewer subagent
> - ux-reviewer subagent
> - visual-reviewer subagent
> - performance-reviewer subagent
> - accessibility-reviewer subagent
> - security-reviewer subagent
> - prelaunch-review skill chaining the 5 trust tests from spec sections 37-41
> - README explaining how to install and use the kit
> - Zip the kit and copy to outputs
> - **Done**

All 11 files, zipped and ready.

> Balanced educational guidance with actionable next steps.
>
> - Presenting file(s)...
> - Balanced educational guidance with actionable next steps.
> - **Done**

Unzip that into your Overflow repo root — `CLAUDE.md` merges into your project root, `.claude/` sits alongside it. The README inside walks through first use.

One thing worth flagging honestly: this kit gives Claude Code the *review* layer your spec asked for. It doesn't scaffold the actual Next.js/Lenis/GSAP project yet — that's the natural next step once you're in Claude Code with this kit installed, starting from your own Phase 1 prompt (repo audit) in section 31. If you want, next time I can also build the animation boilerplate itself — a working Lenis + GSAP ScrollTrigger setup file so Claude Code isn't inventing scroll-sync code from scratch on turn one.

> File: [/mnt/user-data/outputs/overflow-claude-kit.zip](https://claude.ai/api/organizations/46b8ab50-30cf-4a0b-9b41-8a8780ac5980/conversations/c933f31e-b7aa-47bf-9497-a3a4afb44b8f/wiggle/download-file?path=%2Fmnt%2Fuser-data%2Foutputs%2Foverflow-claude-kit.zip)

---

**Sources:**

- [claude_code_docs_map.md](https://simonwillison.net/2025/Oct/24/claude-code-docs-map/)
- [Claude code docs map - Claude Code Docs](https://code.claude.com/docs/en/claude_code_docs_map)
- [claude-code-starter/DOCS_MAP.md at main · Redemptions7/claude-code-starter](https://github.com/Redemptions7/claude-code-starter/blob/main/DOCS_MAP.md)
- [claudekit/docs/guides/codebase-map.md at main · carlrannaberg/claudekit](https://github.com/carlrannaberg/claudekit/blob/main/docs/guides/codebase-map.md)
- [AI-friendly APIs have Markdown documentation available - Software - TMPDIR](https://community.tmpdir.org/t/ai-friendly-apis-have-markdown-documentation-available/1616)
- [GitHub - ericbuess/claude-code-docs · GitHub](https://github.com/ericbuess/claude-code-docs)
- [How Claude Code answers question about Claude Code](https://aiengineerguide.com/blog/claude-code-docs-map/)
- [> Documentation Index](https://code.claude.com/docs/en/claude_code_docs_map.md)
- [ClaudeLog - Claude Code Docs, Guides, Tutorials & Best Practices](https://claudelog.com/)
- [Documentation - Claude Platform Docs](https://platform.claude.com/docs/en/home)
- [You can now give Claude Code a visual map of your entire ...](https://www.facebook.com/groups/techtitansgroup/posts/1612620600065252/)
- [codemap: Map your codebase into a 7-doc blueprint | skills.rest](https://skills.rest/skill/codemap)
- [docs.anthropic.com](https://docs.anthropic.com/zh-CN/docs/claude-code/overview)
- [# CLAUDE.md](https://glama.ai/mcp/servers/@cti1650/ovice-mcp-server/blob/202281ae930486aaba710705499ea5cc56333633/CLAUDE.md)
- [github.com](https://github.com/codegen-sh/codegen/pull/1245)
- [Claude Code Router - Claude Code 요청을 다양한 모델로 라우팅하는 오픈소스](https://news.hada.io/topic?id=22288)
- [Claude Code Memory Files: Global vs Project Level.md files](https://raythanni.substack.com/p/claude-code-memory-files-global-vs)
- [glama.ai](https://glama.ai/mcp/servers/@florinel-chis/voiceflow-doc-mcp/blob/dd1eccac05536155da291f9fb61c82caa8b32f16/data/claude_code_docs/docs.md)
- [docs en quickstart](https://glama.ai/mcp/servers/@florinel-chis/voiceflow-doc-mcp/blob/dd1eccac05536155da291f9fb61c82caa8b32f16/data/claude_code_docs/docs-en-quickstart.md)
- [what is claude md file permanent instruction manual](https://www.mindstudio.ai/blog/what-is-claude-md-file-permanent-instruction-manual)
- [GitHub - rahulvrane/awesome-claude-agents: collection of awesome claude code subagents! · GitHub](https://github.com/rahulvrane/awesome-claude-agents)
- [GitHub - navin4078/awesome-claude-code-agents: A curated list of awesome Claude Code Sub-Agents · GitHub](https://github.com/navin4078/awesome-claude-code-agents)
- [claude-subagents · GitHub Topics · GitHub](https://github.com/topics/claude-subagents)
- [GitHub - jqueryscript/awesome-claude-code: A curated list of awesome tools, IDE integrations, frameworks, and other resources for developers working with Anthropic's Claude Code. · GitHub](https://github.com/jqueryscript/awesome-claude-code)
- [awesome-claude-code-subagents/categories/01-core-development at main · VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents/tree/main/categories/01-core-development)
- [GitHub - supatest-ai/awesome-claude-code-sub-agents: Collection of specialised Claude Code agents · GitHub](https://github.com/supatest-ai/awesome-claude-code-sub-agents)
- [awesome-claude-code-subagents/categories/01-core-development/backend-developer.md at main · VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/01-core-development/backend-developer.md)
- [GitHub - VoltAgent/awesome-claude-code-subagents: A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases · GitHub](https://github.com/VoltAgent/awesome-claude-code-subagents)
- [awesome-claude-code-subagents/CLAUDE.md at main · VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/CLAUDE.md)
- [awesome-claude-code-subagents/categories/01-core-development/frontend-developer.md at main · VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/01-core-development/frontend-developer.md)
- [GitHub - chusri/claude-code-agents: A collection of production-ready subagents for Claude Code · GitHub](https://github.com/chusri/claude-code-agents)
- [GitHub - Yakumo127/claude-code-agents: A collection of production-ready subagents for Claude Code · GitHub](https://github.com/Yakumo127/claude-code-agents)
- [awesome-claude-code-subagents/categories/01-core-development/ui-designer.md at main · VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/01-core-development/ui-designer.md)
- [GitHub - 0xfurai/claude-code-subagents: A comprehensive collection of 100+ production-ready development subagents for Claude Code · GitHub](https://github.com/0xfurai/claude-code-subagents)
- [GitHub - lst97/claude-code-sub-agents: Collection of specialized AI subagents for Claude Code for personal use (full-stack development). · GitHub](https://github.com/lst97/claude-code-sub-agents)
- [GitHub - hesreallyhim/a-list-of-claude-code-agents: A list of Claude Code Sub-Agents submitted by the community. · GitHub](https://github.com/hesreallyhim/a-list-of-claude-code-agents)
- [claude-code-sub-agents/agents/development/frontend-developer.md at main · lst97/claude-code-sub-agents](https://github.com/lst97/claude-code-sub-agents/blob/main/agents/development/frontend-developer.md)
- [agents - A collection of production-ready subagents for Claude Code](https://openaitx.github.io/projects/wshobson/agents/README-en.html)
- [github.com](https://github.com/algra/agents)
- [100 claude code subagent collection 1eb0](https://dev.to/voltagent/100-claude-code-subagent-collection-1eb0)
- [Awwward-winning animation techniques for websites | by Arjun Kumar | Bootcamp | Medium](https://medium.com/design-bootcamp/awwward-winning-animation-techniques-for-websites-cb7c6b5a86ff)
- [awwwards-animations | Skills Marketplace · LobeHub](https://lobehub.com/skills/neversight-skills_feed-awwwards-animations)
- [gsap-scrolltrigger · GitHub Topics · GitHub](https://github.com/topics/gsap-scrolltrigger)
- [Scrollytelling Trends 2026 — Svilenković](https://svilenkovic.com/3d/scrollytelling-trends-2026)
- [🚀 I Recreated an Awwwards-Style Website Using GSAP – Looking for Contributors! - DEV Community](https://dev.to/thakuma07/i-recreated-an-awwwards-style-website-using-gsap-looking-for-contributors-4eff)
- [Lenis Smooth Scroll & GSAP Page | JavaScript](https://freefrontend.com/code/lenis-smooth-scroll-gsap-page-2026-03-17/)
- [Building Smooth Scroll in 2025 with Lenis | Edoardo Lunardi](https://www.edoardolunardi.dev/blog/building-smooth-scroll-in-2025-with-lenis)
- [AWWWARDS style portfolio website for showcasing your project | GSAP Lenis ScrollTrigger - YouTube](https://www.youtube.com/watch?v=OODKLwP6LpA)
- [Best Animated Website Libraries for Next.js and React in 2026](https://snigdhachandrapaik.vercel.app/blogs/animated-website-libraries-nextjs-react)
- [Scroll-Based Portfolio SHOWCASE Animation With Elementor + GSAP + Lenis For FREE - YouTube](https://www.youtube.com/watch?v=B2MXDbcMCbQ)
- [Smooth Scrolling & Type - Awwwards](https://www.awwwards.com/inspiration/smooth-scrolling-type-gsap)
- [Sticky Grid Scroll: Building a Scroll-Driven Animated Grid | Codrops](https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/)
- [Gsap Awwwards Website - Skills - Claude Code Marketplaces](https://claudemarketplaces.com/skills/eng0ai/eng0-template-skills/gsap-awwwards-website)
- [GitHub - darkroomengineering/lenis: Smooth scroll as it should be · GitHub](https://github.com/darkroomengineering/lenis)
- [The Never Ending Story: Building a Seamless Infinite Scroll Experience with GSAP & Lenis | Codrops](https://tympanus.net/codrops/2026/05/28/the-never-ending-story-building-a-seamless-infinite-scroll-experience-with-gsap-lenis/)
- [Lenis – Smooth Scroll](https://lenis.dev/)
- [lenis/README.md at main · darkroomengineering/lenis](https://github.com/darkroomengineering/lenis/blob/main/README.md)
- [Smooth Scrolling & Animations with GSAP + Lenis - YouTube](https://www.youtube.com/playlist?list=PLzKme01IAXkLKd-Onp0S7CeTrJ1S-yJH6)
- [Best GSAP Animation Websites | Web Design Inspiration](https://www.awwwards.com/websites/gsap/)
- [1. Diego - portfolio 2025 animation gsap portfolio scroll animation ui webflow](https://dribbble.com/diegoliv/shots)
- [36 X (Twitter) AI Accounts to Follow in 2026: The Verified List from Anthropic, OpenAI, Google, Cursor and xAI](https://pasqualepillitteri.it/en/news/3633/ai-x-twitter-accounts-to-follow-2026)
- [Live blog: Code w/ Claude 2026](https://simonwillison.net/2026/May/6/code-w-claude-2026/)
- [I test AI coding tools all day — here are 9 hidden Claude Code features you’re probably missing | Tom's Guide](https://www.tomsguide.com/ai/i-test-ai-coding-tools-all-day-here-are-9-hidden-claude-code-features-youre-probably-missing)
- [The Complete Guide to Every Claude Update in Q1 2026 (Tested by Two AI Builders)](https://aimaker.substack.com/p/anthropic-claude-updates-q1-2026-guide)
- [Claude Code is the best AI coding tool I've used, and I’m not entirely sure if I can recommend it](https://www.xda-developers.com/claude-code-best-ai-coding-tool-not-sure-if-i-can-recommend-it/)
- [A Guide to Claude Code 2.0 and getting better at using coding agents – sankalp's blog](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)
- [GitHub - ComposioHQ/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows · GitHub](https://github.com/ComposioHQ/awesome-claude-skills)
- [Who to Follow If You’re Serious About Claude Code | AI @ Sulat.com](https://ai.sulat.com/who-to-follow-if-youre-serious-about-claude-code-0d49abe2d521)
- [Claude AI | Anthropic News (@claude_news) / Posts / X](https://x.com/claude_news)
- [Best AI Newsletters to Subscribe To in 2026: 16 Picks Ranked | Blog | Readless](https://www.readless.app/blog/best-ai-newsletters-to-subscribe)
- [AI Coding Workflow in 2026: Claude Code + Cursor](https://www.kunalganglani.com/blog/ai-coding-workflow-2026)
- [How I Run My Entire Newsletter Inside Claude Code](https://aimaker.substack.com/p/claude-code-newsletter-agentic-system)
- [What 4 Gen Marketers Are Building with Claude Code | MKT1 Newsletter](https://newsletter.mkt1.co/p/real-marketers-claude-code-builds)
- [Claude Code and AI Studio get major updates](https://codenewsletter.ai/p/claude-code-and-ai-studio-get-major-updates)
- [Code with Claude: The 5 biggest updates explained](https://www.lennysnewsletter.com/p/code-with-claude-the-5-biggest-updates)
- [Claude Skills for Twitter/X Growth: Build a Creator System That Runs Overnight | Claude Code Playbooks Blog](https://www.claudecodehq.com/blog/claude-skills-twitter-growth)
- [The Code Newsletter (@CodeNewsletter) / Posts / X](https://x.com/CodeNewsletter)
- [Claude Code Tips and "Wild" 2026 Predictions](https://aicodingdaily.substack.com/p/claude-code-tips-and-wild-2026-predictions)
- [I Tried 20+ Claude Code Courses on Udemy: Here are My Top 6 Recommendations for 2026](https://reactjava.substack.com/p/i-tried-20-claude-code-courses-on)
- [GPT-5.1-Codex MAX and "Weird" Claude Code](https://aicodingdaily.substack.com/p/gpt-51-codex-max-and-weird-claude)

Powered by Claude Exporter (https://www.ai-chat-exporter.net)
