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
Next.js + Tailwind. Animation: Lenis (smooth scroll) + GSAP/ScrollTrigger (hero and marketing sequences)
+ Motion (component transitions). Add Three.js only where a 3D moment earns its weight.

## Full spec
The complete 41-section build specification lives at `docs/overflow-studio-spec.md` —
reference it for section-level detail (page architecture, copy rules, motion tokens,
acceptance criteria). This file is the always-loaded summary; the full doc is the
source of truth for anything not covered here.

## Creative direction
`docs/creative-direction.md` is the visual/experiential layer on top of the spec above —
"The Execution Engine": near-black/ivory cinematic system, typography and a recurring
system-line motif as the primary visual objects, orange used only as a rare activation
signal, no default card grids. It is being rolled out one homepage beat at a time
(hero first) per its own workflow-discipline rule — don't extend it to a new section or
another page without checking it first, and don't assume every section already matches
it. Its cinematic tokens are homepage-scoped; the rest of the site still uses the
paper/ink tokens below until a section is explicitly rebuilt.

## Content status
See `docs/CONTENT-TODO.md` for exactly what real content (logo, contact details,
the first case study, founder bios) is still needed before launch. Never fill any
of it in with invented data — leave the documented placeholder/omission in place
until the real thing exists.

## Learning this system
`docs/claude-mastery/` explains how the skills/subagents/CLAUDE.md setup in this
repo works and how to extend it — start at `docs/claude-mastery/00-start-here.md`.
