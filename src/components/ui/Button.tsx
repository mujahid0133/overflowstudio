import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background-color,color,border-color] duration-(--duration-fast) ease-(--ease-standard) will-change-transform active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-[color-mix(in_oklab,var(--color-accent)_88%,black)]",
  secondary:
    "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-paper data-[invert]:border-line-on-ink data-[invert]:text-paper-on-ink data-[invert]:hover:bg-paper-on-ink data-[invert]:hover:text-ink-900",
  ghost:
    "text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink px-0 py-0 rounded-none",
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
        {children}
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
      {children}
    </button>
  );
}
