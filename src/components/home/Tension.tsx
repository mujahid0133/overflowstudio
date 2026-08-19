"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { tension } from "@/content/home";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

/**
 * Roadmap items stack up while capacity is missing — per the animation map
 * (spec section 23: "PROBLEM: Roadmap items stack up"). Below `lg:` this is
 * a plain Reveal-stagger list (the site's mobile mandate: complete,
 * non-broken content, never a pinned/cramped mobile viewport). At `lg:`+,
 * the section pins and each statement piles onto the one before it —
 * compounding upward offset, deepening shadow, rising z-index — as the
 * user scrolls through, so the sense is "these are piling up," not a
 * generic reveal. The big mono index numeral introduced here is a
 * deliberate motif reused elsewhere in the redesign (e.g. WhoItsFor).
 */
export function Tension() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollTrigger(sectionRef, (container) => {
    const rows = Array.from(container.querySelectorAll<HTMLElement>("[data-tension-row]"));
    if (rows.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top+=72",
        end: `+=${rows.length * 340}`,
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    rows.forEach((row, i) => {
      const at = i * 0.22;
      tl.set(row, { zIndex: i + 1 }, at).fromTo(
        row,
        { y: 0, boxShadow: "0 0px 0px rgba(15, 15, 15, 0)" },
        {
          y: -(i * 12),
          boxShadow: `0 ${10 + i * 6}px ${24 + i * 8}px -12px rgba(15, 15, 15, ${0.14 + i * 0.05})`,
          duration: 0.6,
          ease: "none",
        },
        at,
      );
    });
  });

  return (
    <Section ref={sectionRef}>
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium md:text-5xl">
          {tension.headline}
        </h2>
      </Reveal>

      <div className="mt-16 divide-y divide-line border-t border-line">
        {tension.statements.map((statement, i) => (
          <div key={statement.title} data-tension-row className="relative bg-paper">
            <Reveal
              index={i}
              className="grid gap-2 py-7 md:grid-cols-[auto_2fr_3fr] md:items-start md:gap-8"
            >
              <span className="font-mono text-3xl leading-none font-bold text-ink-faint tabular-nums md:text-5xl lg:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase md:pt-2">
                {statement.title}
              </p>
              <p className="font-display text-xl text-ink-soft md:pt-2 md:text-2xl">{statement.body}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
