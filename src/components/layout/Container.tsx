import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * Deliberately a narrow union of wrapper tags rather than React's
 * `ElementType`. Naming the handful of tags Container is actually meant to
 * render keeps the prop honest and keeps `children` well-typed — a
 * container that can be any intrinsic element is a container with no
 * meaning.
 */
type ContainerElement =
  | "div"
  | "main"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "nav"
  | "aside";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ContainerElement;
}) {
  return (
    <As className={cx("mx-auto w-full max-w-(--container-max) px-(--gutter)", className)}>
      {children}
    </As>
  );
}
