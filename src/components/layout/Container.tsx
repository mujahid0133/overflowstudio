import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/**
 * Deliberately a narrow union of wrapper tags rather than React's
 * `ElementType`: @react-three/fiber (see components/home/hero/HeroScene.tsx)
 * augments JSX.IntrinsicElements with the whole three.js namespace, which
 * collapses `ElementType`'s intersected `children` type to `never`. Naming
 * the tags Container is actually meant to render keeps the prop usable.
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
