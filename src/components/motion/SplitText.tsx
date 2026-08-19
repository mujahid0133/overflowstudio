"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { duration, ease, stagger } from "@/lib/motion-tokens";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SplitTextProps = {
  children: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  mode?: "words" | "lines";
  trigger?: "mount" | "inView";
};

const components = {
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
} as const;

const plain = {
  h1: "h1",
  h2: "h2",
  p: "p",
  span: "span",
} as const;

/**
 * Kinetic headline reveal: masks each word behind an overflow-hidden
 * wrapper and rises it in with a stagger. In "lines" mode, words on the
 * same rendered line share one stagger step instead of each word getting
 * its own — grouping is measured via offsetTop (GSAP's paid SplitText
 * plugin isn't installed) rather than changing DOM structure between
 * states, so there's no flash while measurement resolves. Reserve this for
 * a page's single flagship headline — using it on every heading would
 * recreate the "same treatment everywhere" problem with a different
 * technique.
 */
export function SplitText({
  children,
  as = "h1",
  className,
  mode = "words",
  trigger = "mount",
}: SplitTextProps) {
  const reducedMotion = useReducedMotion();
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [lineStarts, setLineStarts] = useState<number[] | null>(null);

  const words = children.split(" ");

  useLayoutEffect(() => {
    if (mode !== "lines") return;

    function measure() {
      const spans = wordRefs.current;
      const starts: number[] = [];
      let lastTop: number | null = null;
      spans.forEach((span, i) => {
        if (!span) return;
        const top = span.offsetTop;
        if (top !== lastTop) {
          starts.push(i);
          lastTop = top;
        }
      });
      setLineStarts(starts);
    }

    measure();
    const container = wordRefs.current[0]?.closest("[data-split-text]");
    if (!container) return;
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, [mode, children]);

  const Component = components[as];

  if (reducedMotion) {
    const Plain = plain[as];
    return <Plain className={className}>{children}</Plain>;
  }

  const ready = mode === "words" || lineStarts !== null;

  function delayFor(wordIndex: number) {
    if (mode === "words") return wordIndex * stagger.tight;
    const lineIndex = lineStarts
      ? lineStarts.filter((start) => start <= wordIndex).length - 1
      : 0;
    return Math.max(lineIndex, 0) * stagger.base;
  }

  return (
    <Component data-split-text className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
          <motion.span
            ref={(el) => {
              wordRefs.current[i] = el;
            }}
            className="inline-block"
            initial={{ y: "110%" }}
            animate={ready && trigger === "mount" ? { y: "0%" } : undefined}
            whileInView={ready && trigger === "inView" ? { y: "0%" } : undefined}
            viewport={trigger === "inView" ? { once: true, margin: "-10% 0px" } : undefined}
            transition={{
              duration: duration.slow,
              delay: delayFor(i),
              ease: ease.signature,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
