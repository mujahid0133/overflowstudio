import { forwardRef, type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cx } from "@/lib/cx";

export const Section = forwardRef<
  HTMLElement,
  {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    /** Dark ink background / paper text — reserve for moments that need weight. */
    invert?: boolean;
    id?: string;
  }
>(function Section({ children, className, containerClassName, invert = false, id }, ref) {
  return (
    <section
      ref={ref}
      id={id}
      data-invert={invert || undefined}
      className={cx(
        "py-24 md:py-32",
        invert
          ? "bg-ink-900 text-paper-on-ink"
          : "bg-paper text-ink",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
});
