"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { duration, ease, stagger } from "@/lib/motion-tokens";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index — each step delays by 60ms. Use for sequential reveals. */
  index?: number;
  /** Direction the content travels in from. */
  from?: "below" | "left" | "right" | "none";
  as?: "div" | "li";
};

const offsets: Record<NonNullable<RevealProps["from"]>, { x?: number; y?: number }> = {
  below: { y: 24 },
  left: { x: -24 },
  right: { x: 24 },
  none: {},
};

/**
 * Scroll-triggered fade/rise. This is the default "something entered the
 * viewport with intent" motion used across the site — one signature curve,
 * reused everywhere, per section 8's "standardized motion tokens" rule.
 */
export function Reveal({
  children,
  className,
  index = 0,
  from = "below",
  as = "div",
}: RevealProps) {
  const offset = offsets[from];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration.slow,
        delay: index * stagger.base,
        ease: ease.signature,
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
