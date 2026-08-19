import { cx } from "@/lib/cx";

export function Eyebrow({
  children,
  className,
  invert = false,
}: {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <p
      className={cx(
        "flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase",
        invert ? "text-paper-on-ink-soft" : "text-ink-faint",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}
