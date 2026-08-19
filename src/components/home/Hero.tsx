"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SystemLine } from "@/components/home/hero/SystemLine";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { hero } from "@/content/home";

/**
 * "The Interruption" — docs/creative-direction.md §11. A near-empty
 * near-black field rather than the old two-column headline+diagram split:
 * one asymmetric headline, then the roadmap axis (`SystemLine`) underneath
 * it running from the real company/gap nodes in `hero.flow` into a pause
 * beat ("the work is ready, capacity is missing"). `Overflow` and `Outcome`
 * — the other two `hero.flow` nodes — are deliberately not shown here; they
 * belong to the later plug-in reveal (CategoryCreation), not this beat.
 *
 * `bg-void` is painted as its own layer rather than overriding `Section`'s
 * `invert` background classes directly — `cx` doesn't dedupe/merge classes,
 * so two `bg-*` utilities racing for the same property is unreliable with
 * Tailwind's generated-order stylesheet. `invert` still sets the paper-on-
 * ink text tokens and gives non-JS/no-CSS agents a correct dark background.
 *
 * The scroll timeline only ever adds motion on top of markup that's already
 * complete and legible at rest (`gsap.set` establishes the hidden start
 * state inside the effect itself, which is skipped under reduced motion and
 * below `lg`) — see useScrollTrigger's doc comment.
 *
 * `!py-0` strips `Section`'s own `py-24 md:py-32` (same class-order hazard
 * as the background, `!` forces it regardless of source order) so the only
 * vertical sizing is the inner wrapper's `min-h-screen` — everything the
 * pinned timeline animates has to actually fit on one screen, since pin
 * freezes native scroll and content below the fold never becomes visible
 * mid-scrub, only after the pin releases.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger(sectionRef, (container) => {
    const headline = container.querySelector<HTMLElement>("[data-hero-headline]");
    const axisLine = container.querySelector<HTMLElement>("[data-axis-line]");
    const constraintNode = container.querySelector<HTMLElement>('[data-node="constraint"]');
    const stallLabels = Array.from(container.querySelectorAll<HTMLElement>("[data-stall-label]"));
    const pause = container.querySelector<HTMLElement>("[data-pause]");
    if (!headline || !axisLine || !constraintNode || !pause || stallLabels.length === 0) return;

    gsap.set(stallLabels, { opacity: 0, y: 6 });
    gsap.set(pause, { opacity: 0, y: 16 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top+=72",
        end: "+=1500",
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(headline, { y: -24, opacity: 0.55, duration: 0.4, ease: "none" }, 0);

    stallLabels.forEach((label, i) => {
      tl.to(label, { opacity: 1, y: 0, duration: 0.25, ease: "none" }, 0.35 + i * 0.2);
    });

    tl.to(axisLine, { opacity: 0.35, duration: 0.3, ease: "none" }, 0.55)
      .to(constraintNode, { scale: 1.3, duration: 0.2, ease: "none" }, 0.95)
      .to(constraintNode, { scale: 1, duration: 0.2, ease: "none" }, 1.15)
      .to(pause, { opacity: 1, y: 0, duration: 0.35, ease: "none" }, 1.1);
  });

  return (
    <Section ref={sectionRef} invert className="relative !py-0 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-void" />

      {/*
        `min-h-screen` + `justify-between` rather than large top/bottom
        margins: everything the pinned timeline animates (headline, system
        line, pause statement) has to stay on-screen for the whole pin
        duration, since pin freezes native scroll — content living below
        the fold never becomes visible mid-scrub, only after the pin
        releases. Distributing headline-group/system-group across one
        screen's height keeps the whole choreography actually watchable.
      */}
      <div className="relative flex min-h-screen flex-col justify-between py-8">
        <div data-hero-headline>
          {/*
            Asymmetric, not centered — the type ramp reserves the two most
            dramatic steps (7xl/8xl) for this headline per the breakpoint
            convention in globals.css. `max-w-4xl` keeps it left-set rather
            than spanning full-bleed at wide viewports.
          */}
          <Reveal>
            <Eyebrow invert>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <SplitText
            as="h1"
            mode="lines"
            trigger="mount"
            className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] font-medium text-balance text-paper-on-ink md:text-6xl xl:text-7xl"
          >
            {hero.headline}
          </SplitText>
          <Reveal index={2}>
            <p className="mt-6 max-w-md text-lg text-paper-on-ink-soft">{hero.supporting}</p>
          </Reveal>
          <Reveal index={3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Button href={hero.primaryCta.href} variant="primary" data-cursor>
                  {hero.primaryCta.label}
                </Button>
              </MagneticButton>
              <Button href={hero.secondaryCta.href} variant="secondary" invert>
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <div>
          <SystemLine
            axisLabel={hero.system.axisLabel}
            origin={hero.flow[0]}
            constraint={hero.flow[1]}
            stallLabels={hero.system.stallLabels}
          />

          <div data-pause className="mt-10 max-w-xl">
            <p className="font-display text-2xl font-medium text-paper-on-ink md:text-3xl">
              {hero.system.pauseHeadline}
            </p>
            <p className="mt-2 font-mono text-xs tracking-[0.14em] text-accent uppercase">
              {hero.system.pauseSubhead}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
