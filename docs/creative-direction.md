# Overflow Studio — Creative Direction

This is the visual/experiential layer that sits **on top of** `docs/overflow-studio-spec.md`. It does not replace that spec — business positioning, messaging, page architecture, content requirements, proof rules, accessibility, performance, and content integrity all still come from there and from `CLAUDE.md`. This document answers a different question: **what should the communication in that spec actually look and feel like?**

It was produced through a creative-direction session (outside this repo) diagnosing why an early build of this site — technically correct, GSAP-animated, accessible — still read as a generic B2B template. The conclusion: the site had a product specification but no art direction. This doc is that art direction, locked to one direction out of three explored (see "Why Direction 1" below).

Treat this as a durable creative reference, the same way `overflow-studio-spec.md` is the durable business reference. Update it if the direction evolves; don't silently drift from it section by section.

---

## 1. Creative north star

The website should feel like **an execution system coming online** — not a stack of marketing sections. The visitor should experience a system moving through a sequence: tension → pressure → recognition → capacity → acceleration → outcome → trust → action.

Central visual metaphor: **Overflow is an execution layer that enters an organization's existing system and lets important work move.** The visual language should continuously reinforce one chain:

```
COMPANY DIRECTION → EXECUTION CAPACITY (missing) → OVERFLOW → EXECUTION → OUTCOME → SHIPPED
```

## 2. Target emotional response

First-time-visitor reaction, roughly: *"Holy shit. This company is what I am looking for."* Emotional blend: trust + power + cinematic + precision + control + memorability. Aim for **~8.5/10** on visual experimentation — expressive enough to be memorable, restrained enough that a founder still trusts the company with important work. The feeling should be "these people operate at a very high level," not "look how many effects we know."

Expense should come from composition, typography, hierarchy, rhythm, spatial relationships, restraint, motion, interaction, consistency, and real evidence — not from decorative effects.

## 3. Creative references

High-end creative-development work (the general quality bar of Cuberto/Awwwards-tier sites) is a reference for *craft level and originality*, never a template to copy layouts, animations, motifs, or transitions from. The goal is equivalent authorship quality with a visual identity that belongs specifically to Overflow.

## 4. Why Direction 1 — "The Execution Engine"

Three directions were explored: (1) **The Execution Engine** — operating-system/architectural, typography-as-structure, orange as a rare activation signal; (2) **The Cinematic Command Center** — darker, more emotional/documentary, higher beauty but weaker at making the business model immediately legible; (3) **The Breach** — typography and layout physically break the page grid as a metaphor for capacity exceeding boundaries, the most memorable but the highest risk to founder-trust seriousness. Direction 1 was locked because it scores highest on trust and clarity while still being distinctive — the metaphor (execution layer plugging into a company's system) maps directly onto the actual product model, so originality doesn't have to be manufactured separately from the message.

## 5. Visual world

**Background — primary (dark):** near-black, not pure black. Starting point `#0B0B0A`. Should feel like a sophisticated cinematic charcoal/ink environment, not "tech startup black."

**Background — secondary (light):** warm ivory. Starting point `#F3F0E8`.

**Signal color:** the existing accent orange (`#FF5A1F`) — kept, but re-scoped. It is not a theme color; it is an **event**. It should mean "something is active / moving / connected / happening" — a single line, a moving point, a number, a state change. Not every button/bullet/divider. Rare enough that the visitor starts assigning it meaning.

**Palette weighting:** roughly 85% neutral dark/light surfaces, 10% supporting neutrals/gray, 5% signal orange.

## 6. Typography as architecture

Typography is a primary visual asset, not text dropped into UI components. Two families: a strong contemporary grotesk for display (powerful, editorial, excellent at large scale — exact typeface chosen during implementation, evaluated on composition not popularity) and a restrained mono for technical labels, coordinates, metadata, status, section numbering, process labels (used sparingly — never long paragraphs).

Large display typography may approach or cross viewport/container boundaries, move through the viewport on scroll, compress, expand, split, or align with system lines — it can behave like a spatial object. Avoid the reflexive `headline + paragraph + button`, repeated section after section — that pattern alone is one of the fastest ways to read as generic.

## 7. Geometry and the no-card default

Primary visual primitives: lines, planes, typography, points, boundaries, grids, axes, labels, spacing, relationships. Avoid decorative blobs, floating cards, circles, glass panels, particles, gradients, random 3D shapes — every object on the page should have a conceptual reason to exist.

**Cards are not the default composition.** Three-column cards, four-column cards, bento grids, floating/glass tiles are all fine only when the content genuinely benefits from being a bounded object — not the reflexive way to lay out "four things." Default language is an open composition: text, lines, planes, space, geometry, movement, relationships.

## 8. Motion philosophy

Every animation should explain something: progression, transformation, cause and effect, state change, hierarchy, capacity, compression, connection, separation, acceleration, or resolution. Never animate because "it looks cool." Avoid infinite decorative loops, excessive parallax, meaningless hover effects, motion on every element simultaneously.

Rhythm matters more than density: quiet → tension → build → pause → reveal → acceleration → relief → quiet. Keep most of the site controlled, then let a few carefully-chosen moments become genuinely dynamic — the contrast is what reads as cinematic, not constant motion.

**Shared transition vocabulary** (reuse these across the whole page rather than inventing a new transition per section): a line that continues between sections, typography that moves through the viewport, color resolving from dark to ivory (or back), density collapsing into empty space, and the orange signal marking activation. Consistency here is what makes the page feel like one system instead of eleven unrelated sections.

## 9. Performance and 3D

Performance is part of the creative direction, not a constraint fighting it. Default toolkit: CSS transforms, SVG, DOM animation, `clip-path`, canvas only where genuinely justified, GSAP (or equivalent) only where it materially improves the experience over lighter techniques.

**3D/WebGL is optional, never required.** Add it only when a visual idea can't be achieved convincingly with lighter techniques, the interaction materially improves the experience, it stays performant, and it doesn't compromise mobile, accessibility, or the initial-load experience. Never add 3D because "Awwwards sites use 3D."

## 10. Photography

The homepage does not require stock photography, and shouldn't get any — no generic businessman/laptop/office imagery. Real photography earns a place later, specifically for founder/about content and authorized case-study evidence, treated editorially and intentionally, never as space-filler.

## 11. Homepage narrative (screenplay reference)

The homepage is one continuous narrative, not a stack of unrelated sections. High-level sequence: **The Interruption** (hero) → **The Weight** (tension accumulates) → **The Reveal** (contrast/relief, the plug-in-department concept lands) → **The Plug-In** (Overflow enters the company's system) → **Capabilities** (Product/Design/Engineering/AI orbit a fixed outcome, not four separate services) → **The Compression** (old hiring timeline stretches vs. the new four-step process compresses) → **Proof** → **Human evidence** (real, approved testimonial material only) → **Control** (strategic ownership stays with the client) → **The Machine** (Define → Plug in → Execute → Ship as one continuous mechanism) → **Who it's for** → **Selectivity** → **Case study** → **Resolution/CTA**.

Each of these corresponds to an existing homepage section (see `src/components/home/`) and existing approved copy (see `src/content/home.ts`) — this document changes how each is *staged visually*, not what it says. Do not invent new copy, labels, or numbers to fill out a beat; if a beat from this screenplay has no real content behind it yet, stage it with what's actually approved or leave it for a later pass.

**Hero specifically:** the viewport should not open as a two-column headline-plus-diagram split. It should read as a large, mostly-empty spatial field with a tiny technical label, an oversized asymmetric headline, and a thin horizontal "roadmap" system line running underneath/behind it with a few nodes on it. As the visitor scrolls, the headline recedes, the nodes on the line begin stalling (small labels like `CAPACITY`, `CONSTRAINT`, `WAITING` may appear progressively, not all at once), density builds, then everything pauses on a single clear statement (the work is ready; execution capacity is what's missing) before the page moves on to the next section. This uses the real four nodes already defined in `hero.flow` (`Your company` → `The gap` → `Overflow` → `Outcome`), staged as a system line instead of a static diagram.

## 12. Banned patterns

Do not reach for these as the default solution: generic SaaS hero; centered headline + paragraph + button repeated section after section; three/four-column feature or service cards as a reflex; bento grids; glassmorphism; gradient blobs; floating translucent panels; random 3D spheres; decorative particles; fake dashboard mockups; generic line-icon grids; excessive rounded rectangles or giant soft shadows; meaningless marquees or infinite logo scrolls; fake testimonial cards, client logos, or metrics; stock business photography; generic "modern agency" layouts; animating every element simultaneously; parallax used purely for decoration; WebGL added without a specific conceptual reason.

If a design instinct feels like "the obvious solution for a generic agency site," stop and reconsider it against the execution-engine metaphor instead.

## 13. Content integrity (unchanged from the base spec — reiterated because it matters here)

Never invent metrics, clients, testimonials, logos, awards, credentials, partnerships, or case-study outcomes to make a section feel more finished. Where real content doesn't exist yet, use the qualitative language already in `src/content/home.ts` and the placeholders documented in `docs/CONTENT-TODO.md` — do not fill the gap with something that merely *looks* like real proof. A more visually ambitious site must not become a less honest one.

## 14. Mobile

Don't shrink the desktop composition — preserve the narrative (problem → pressure → solution → proof → trust → CTA) and convert the *geometry*: horizontal concepts become vertical, lateral entrances become vertical/lateral slides, typography stays large, complexity reduces but meaning doesn't. Never pin/scrub a cramped mobile viewport — this repo's existing convention (see `useScrollTrigger`'s `minWidth` gate) is that below the gate, sections render their complete plain markup, not a degraded animated version.

## 15. Workflow discipline

This is the most important operating rule: **don't build the whole homepage in one pass.** Establish design tokens first, then get the hero right on its own and review it before touching anything downstream of it — a wrong visual language is expensive to discover after eleven sections are already built on top of it. Once the hero holds up, extend the same visual language outward one beat at a time (tension/reveal/plug-in as one connected unit, then compression, then proof/trust, etc.), and only expand past the homepage to other pages once the homepage's visual language is validated. Judge every pass against the rendered result (screenshots at real breakpoints, reduced-motion checked), not against the code.

**The recurring test for any section:** does this composition belong specifically to Overflow, or could another B2B agency reuse the same layout with different copy? If the latter, it needs a different answer than the reflexive one.
