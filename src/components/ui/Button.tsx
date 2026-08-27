import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost";

/*
  Square, not pill: the whole visual system is built from architectural
  planes, and a rounded-full button is the single fastest way to make a page
  read as a generic SaaS template (build spec §27, creative-direction §7).
*/
const base =
  "group/button inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-[transform,background-color,color,border-color] duration-(--duration-fast) ease-(--ease-standard) will-change-transform active:scale-[0.99]";

const variants: Record<Variant, string> = {
  // Near-black type on signal orange — 8.9:1, and it keeps orange reading
  // as an activated surface rather than as a colored label.
  primary:
    "bg-accent text-accent-ink hover:bg-[color-mix(in_oklab,var(--color-accent)_86%,white)]",
  secondary:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper data-[invert]:border-line-on-ink data-[invert]:text-paper-on-ink data-[invert]:hover:bg-paper-on-ink data-[invert]:hover:text-ink-900",
  ghost:
    "text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink px-0 py-0",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  invert?: boolean;
  onClick?: MouseEventHandler;
  "aria-label"?: string;
  /** Present → renders as a Next.js Link. Absent → renders as a <button>. */
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  className,
  invert,
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cx(base, variants[variant], className);

  /*
    §33: the arrow moves slightly on hover — that is the entire interaction.
    It is rendered at rest rather than revealed on hover so the button never
    changes width, and it is aria-hidden because it carries no information
    the label doesn't already carry.
  */
  const content = (
    <>
      {children}
      {variant !== "ghost" && (
        <span
          aria-hidden="true"
          className="transition-transform duration-(--duration-fast) ease-(--ease-standard) group-hover/button:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        data-invert={invert || undefined}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      data-invert={invert || undefined}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}
