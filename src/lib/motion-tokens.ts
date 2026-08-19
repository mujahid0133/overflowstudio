/**
 * JS-side mirror of the CSS motion tokens in globals.css.
 * Keep these two in sync — see docs/overflow-studio-spec.md section 8.
 */

export const duration = {
  micro: 0.12,
  fast: 0.22,
  standard: 0.42,
  slow: 0.72,
  dramatic: 1.1,
} as const;

export const ease = {
  signature: [0.16, 1, 0.3, 1] as const, // confident, decelerated — reveals
  standard: [0.65, 0, 0.35, 1] as const, // symmetric — state changes
};

export const gsapEase = {
  signature: "expo.out",
  standard: "power2.inOut",
};

/** Stagger step (seconds) between sibling items in a sequenced reveal. */
export const stagger = {
  tight: 0.04,
  base: 0.06,
  loose: 0.09,
} as const;

/** MagneticButton pull: translate factor and activation radius (px). */
export const magnetic = {
  strength: 0.35,
  radius: 80,
} as const;
