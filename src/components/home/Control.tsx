"use client";

import { useRef } from "react";
import gsap from "gsap";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { control } from "@/content/home";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

/**
 * Strategy and execution paths visibly separate: the dividing line
 * scrub-draws down the middle as the section scrolls into view, and each
 * list item — "yours" on the left, "ours" on the right — reveals at the
 * moment the line passes its vertical position, so the two lists visibly
 * diverge outward from the shared line rather than animating on their
 * own. Spec section 23: "CONTROL: Strategy and execution paths separate."
 */
export function Control() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const yoursRefs = useRef<HTMLLIElement[]>([]);
  const oursRefs = useRef<HTMLLIElement[]>([]);

  useScrollTrigger(sectionRef, (container) => {
    const line = lineRef.current;
    const yoursItems = yoursRefs.current;
    const oursItems = oursRefs.current;
    if (!line || yoursItems.length === 0) return;

    gsap.set(line, { scaleY: 0 });
    gsap.set(yoursItems, { opacity: 0, x: -20 });
    gsap.set(oursItems, { opacity: 0, x: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        end: "bottom 55%",
        scrub: 0.6,
      },
    });

    tl.to(line, { scaleY: 1, ease: "none", duration: 1 }, 0);

    const count = Math.max(yoursItems.length, oursItems.length);
    for (let i = 0; i < count; i++) {
      const pos = (i + 0.5) / count;
      if (yoursItems[i]) {
        tl.to(yoursItems[i], { opacity: 1, x: 0, duration: 0.1, ease: "none" }, pos);
      }
      if (oursItems[i]) {
        tl.to(oursItems[i], { opacity: 1, x: 0, duration: 0.1, ease: "none" }, pos);
      }
    }
  });

  return (
    <Section ref={sectionRef} invert>
      <Reveal>
        <h2 className="max-w-2xl font-display text-3xl leading-tight font-medium text-paper-on-ink md:text-5xl">
          {control.headline}
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-12 md:grid-cols-2 md:gap-0">
        <div
          ref={lineRef}
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 hidden w-px origin-top bg-line-on-ink md:block"
        />
        <Reveal from="left" className="md:pr-16">
          <p className="font-mono text-xs tracking-[0.14em] text-paper-on-ink-soft uppercase">
            {control.yours.label}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {control.yours.items.map((item, i) => (
              <li
                key={item}
                ref={(el) => {
                  if (el) yoursRefs.current[i] = el;
                }}
                className="font-display text-xl text-paper-on-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal from="right" index={1} className="md:pl-16">
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
            {control.ours.label}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {control.ours.items.map((item, i) => (
              <li
                key={item}
                ref={(el) => {
                  if (el) oursRefs.current[i] = el;
                }}
                className="font-display text-xl text-paper-on-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
