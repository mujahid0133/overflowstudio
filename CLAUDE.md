# Overflow Studio Website

## Positioning
Overflow Studio creates Plug-in Departments.

## Core proposition
Add the execution capacity needed to get important work shipped while the internal team takes shape.

## Brand principles
Premium. Precise. Confident. Established. Editorial. Outcome-driven.

## Never position Overflow as
A generic software agency. A freelancer marketplace. A staffing company. A collection of disconnected services.

## Messaging principles
Lead with outcomes. Avoid generic agency language. Avoid unsupported claims.
Never invent clients, metrics, testimonials, or logos. Never expose confidential client information.

## UX principles
Clarity before decoration. Motion must communicate. Proof before persuasion.
Strategic control remains with the client. Every CTA should have a clear reason.

## Technical principles
Fast. Accessible. Responsive. SEO-ready. Maintainable. Data-driven case studies.

## Design personality
Precise, quietly powerful, premium, technical, editorial, established, confident, intentional.
Premium comes from composition, typography, whitespace, hierarchy, interaction, evidence, and restraint —
not gradients, glassmorphism, giant shadows, decorative particles, or generic SaaS visual tropes.

## Stack
Next.js + Tailwind. Animation: Lenis (smooth scroll) + GSAP/ScrollTrigger (scroll-driven sequences)
+ Motion (mount and component transitions). No 3D: the modular-capacity metaphor is drawn with
planes, lines and typography, which is lighter and clearer than WebGL would be. Don't add
Three.js back without a visual idea that genuinely can't be built any other way.

## Design tokens
The site is dark-first, on the palette fixed in the build spec: `#0B0B0B` base, `#F4F1EA` text,
`#A7A39B` secondary text, `#242424` structure, `#FF6A00` signal, `#FFF3DC` warm highlight.
Tokens live in `src/app/globals.css` under the existing semantic names (`paper` = the near-black
surface, `ink` = the off-white type on it), so components read slots, not hex values.
Orange is an EVENT, not a theme color — it marks activation, progress and the primary action,
and nothing else. Target roughly 85% neutral surfaces / 10% supporting neutrals / 5% orange.
If orange stops being surprising, it has stopped meaning "capacity is active".

## Full spec
`docs/build-specification.md` is the definitive 51-section build specification and the
source of truth — positioning, homepage architecture, exact hero/CTA copy, palette,
motion rules, claim discipline, quality test.

`docs/overflow-studio-spec.md` is the earlier 41-section spec. It is superseded wherever
the two disagree (it still describes the old hero copy, the old navigation and the old
`Talk to Overflow` CTA), but it remains useful for detail the newer doc doesn't cover:
the non-homepage pages, analytics, SEO and QA. Check the newer doc first, always.

This file is the always-loaded summary of both.

## Creative direction
`docs/creative-direction.md` is the visual/experiential layer on top of the spec above —
"The Execution Engine": near-black cinematic system, typography and a recurring
capacity-gap motif as the primary visual objects, orange used only as a rare activation
signal, no default card grids.

The homepage is now built end to end in this language, and the dark palette applies
site-wide. The homepage is one continuous argument in a fixed order — see the comment at
the top of `src/app/page.tsx`; each section answers the next question in the visitor's
mind, so don't reorder sections for visual variety or insert one that doesn't answer a
question. The other pages (`/how-it-works`, `/outcomes`, `/case-studies`, `/about`,
`/faq`, `/contact`) inherit the palette but still use their earlier compositions; rebuild
them one at a time against this direction rather than all at once.

## The recurring visual sentence
Every diagram on the homepage is built from `src/components/home/system/Plate.tsx`, whose
four states mean the same thing everywhere: `solid` = capacity that exists, `gap` = capacity
that does not (outlined and hatched, never filled), `module` = Overflow at rest, `active` =
Overflow locked into the gap, and the only state that earns orange. Reuse those states rather
than inventing a new visual vocabulary per section.

## Deployment
Published to GitHub Pages as a static export via `.github/workflows/deploy.yml`:
`https://mujahid0133.github.io/overflowstudio/`. Because it is a *project* site it
is served from `/overflowstudio/`, so `next.config.ts` sets `basePath` from
`NEXT_PUBLIC_BASE_PATH` and `src/lib/site.ts` is the single source of truth for the
site URL that `metadataBase`, `sitemap.xml` and `robots.txt` all resolve against.
Never hardcode the domain in a component — read it from `src/lib/site.ts`.

`next build` now emits `out/` rather than a server bundle. `next start` no longer
applies; use `npm run preview` to serve a production build locally, or `npm run dev`
as usual. Anything that needs a server at runtime (API routes, server actions,
`next/image` optimization, ISR) will not work under this setup — the contact form is
already client-only, see docs/CONTENT-TODO.md.

## Content status
See `docs/CONTENT-TODO.md` for exactly what real content (logo, contact details,
the first case study, founder bios) is still needed before launch. Never fill any
of it in with invented data — leave the documented placeholder/omission in place
until the real thing exists.

## Learning this system
`docs/claude-mastery/` explains how the skills/subagents/CLAUDE.md setup in this
repo works and how to extend it — start at `docs/claude-mastery/00-start-here.md`.
