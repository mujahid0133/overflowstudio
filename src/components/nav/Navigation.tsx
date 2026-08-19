"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cx } from "@/lib/cx";
import { duration, ease, stagger } from "@/lib/motion-tokens";

const links = [
  { href: "/plug-in-departments", label: "Model" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
];

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrolledSnapshot() {
  return window.scrollY > 24;
}

function getScrolledServerSnapshot() {
  return false;
}

/**
 * Transparent over the hero, compact + subtly backdropped after scroll.
 * Not a shrinking navbar — same height throughout, just a background/border
 * transition, per spec section 7.
 */
export function Navigation() {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolledSnapshot,
    getScrolledServerSnapshot,
  );
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Every page's hero is an inverted (dark) Section, so while the header is
  // still transparent over it, its own content needs the light-on-dark
  // treatment too — not just the background transition.
  const dark = !scrolled && !open;

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-(--duration-standard) ease-(--ease-standard)",
        scrolled || open ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-(--container-max) items-center justify-between px-(--gutter)">
        <Link href="/" aria-label="Overflow Studio — home">
          <Logo invert={dark} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredHref(link.href)}
              onMouseLeave={() => setHoveredHref(null)}
              className={cx(
                "relative text-sm transition-colors",
                dark
                  ? "text-paper-on-ink-soft hover:text-paper-on-ink"
                  : "text-ink-soft hover:text-ink",
                pathname === link.href && (dark ? "text-paper-on-ink font-medium" : "text-ink font-medium"),
              )}
            >
              {link.label}
              <AnimatePresence>
                {hoveredHref === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className={cx(
                      "pointer-events-none absolute inset-x-0 -bottom-1.5 h-px",
                      dark ? "bg-paper-on-ink" : "bg-ink",
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: duration.fast, ease: ease.standard }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton>
            <Button href="/contact" variant="primary" className="px-5 py-2.5">
              Talk to Overflow
            </Button>
          </MagneticButton>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={cx(
                "absolute inset-x-0 top-0 h-[1.5px] transition-[transform,background-color] duration-(--duration-fast)",
                dark ? "bg-paper-on-ink" : "bg-ink",
                open && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span
              className={cx(
                "absolute inset-x-0 bottom-0 h-[1.5px] transition-[transform,background-color] duration-(--duration-fast)",
                dark ? "bg-paper-on-ink" : "bg-ink",
                open && "-translate-y-[6.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-line bg-paper px-(--gutter) py-6 md:hidden"
            aria-label="Primary mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: duration.standard, ease: ease.signature }}
          >
            <ul className="flex flex-col gap-5">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: duration.standard,
                    delay: index * stagger.base,
                    ease: ease.signature,
                  }}
                >
                  <Link href={link.href} className="text-base text-ink">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: duration.standard,
                  delay: links.length * stagger.base,
                  ease: ease.signature,
                }}
              >
                <Button href="/contact" variant="primary" className="mt-2 w-full">
                  Talk to Overflow
                </Button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
