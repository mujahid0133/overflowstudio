# What actually makes those sites fast AND animated

The "brutally fast but mind-blowing" sites you've been admiring aren't one
magic library, and they're not a Claude-specific trick — they're four
well-chosen tools used for the jobs they're each actually good at, plus a
discipline about *not* animating things that don't need it. This repo's
`src/` is a working example of the same stack; the file references below are
real, not illustrative.

## The four pieces

**[Lenis](https://lenis.dev/)** — smooth scroll, ~3KB. Intercepts native
scroll and interpolates it, so every other scroll-linked effect on the page
reads as buttery instead of janky. Wired up once, globally, in
[`src/components/motion/SmoothScrollProvider.tsx`](../../src/components/motion/SmoothScrollProvider.tsx)
— everything downstream just works because this one provider exists at the
root of the app.

**GSAP + ScrollTrigger** — the tool for genuinely *scroll-scrubbed*
sequences: an animation whose progress is tied directly to scroll position,
not just "fade in when visible." This repo uses it exactly once, in
[`src/components/home/OldVsNew.tsx`](../../src/components/home/OldVsNew.tsx),
where the old-hiring-process timeline visibly stretches out as you scroll
through it. That's the only place on the homepage that needed true
scroll-scrubbing — everything else uses the lighter tool below. Reach for
GSAP when the animation's *progress* is the point; reach for Motion when the
animation's *entrance* is the point.

**Motion** (the current name for what was Framer Motion) — component-level
transitions: something fades/rises into view once, on scroll or on
interaction. This repo's entire "things appear as you scroll" language is
one component:
[`src/components/motion/Reveal.tsx`](../../src/components/motion/Reveal.tsx).
Every section on the homepage reuses it with different `index` (stagger
delay) and `from` (direction) props instead of each section inventing its
own animation from scratch — that's what "standardized motion tokens"
(spec section 8) looks like in actual code, see
[`src/lib/motion-tokens.ts`](../../src/lib/motion-tokens.ts).

**Three.js / React Three Fiber** — installed in this repo's
`package.json` but *not yet used anywhere*. That's deliberate, not an
oversight: the spec's own rule is "add Three.js only where a 3D moment earns
its weight" (section 4 explicitly bans "meaningless 3D objects"). A 3D scene
costs real bundle size and GPU budget — don't reach for it until a specific
moment on the site genuinely needs a third dimension to explain something a
2D animation can't.

## The discipline that matters more than the libraries

Every animation on this site answers "what does this movement explain?"
(spec section 8) — the hero visual explains the plug-in-departments concept,
the old-vs-new comparison explains a timeline compressing, the reveal
stagger explains reading order. None of it is decorative. That constraint is
*why* these sites feel fast despite being animated: nothing is animating
just to look cool, so there's no wasted JavaScript running for effects that
don't earn their cost.

Concretely, this repo respects `prefers-reduced-motion` globally
(`MotionConfig reducedMotion="user"` in
[`src/app/layout.tsx`](../../src/app/layout.tsx), plus
[`src/hooks/useReducedMotion.ts`](../../src/hooks/useReducedMotion.ts) for
the raw-GSAP case) and targets the same Core Web Vitals numbers the spec
sets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 — spec section 9,
[web.dev/articles/vitals](https://web.dev/articles/vitals)). Performance
isn't a separate pass done after the animation — it's a constraint the
animation system was built inside of from the start.

## Where to find more of this as a Claude Code skill

`claudemarketplaces.com` has a packaged version of this exact pattern —
`eng0ai/eng0-template-skills` → `gsap-awwwards-website` — worth a look for
comparison, though at this point you already have a working reference
implementation sitting in this repo's `src/`.
