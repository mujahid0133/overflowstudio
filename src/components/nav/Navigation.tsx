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

/**
 * §07 — the navigation itself has to reinforce that Overflow is a model,
 * not an agency catalog. Four items, no "Services", no "Solutions", no
 * "Capabilities", no "Industries".
 *
 * Model / Product / Proof are anchors into the homepage argument rather
 * than separate pages: the argument is the site, and sending someone to a
 * detached "Model" page would break the sequence that makes it land. About
 * is a real page. The deeper pages (how it works, outcomes, case studies,
 * FAQ) stay reachable from the footer without competing for attention up
 * here.
 */
const links = [
  { href: "/#model", label: "Model" },
  { href: "/#product", label: "Product" },
  { href: "/#proof", label: "Proof" },
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
 * Transparent over the hero, then a near-black backdrop with a hairline
 * once the page moves. Same height throughout — not a shrinking navbar.
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

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-(--duration-standard) ease-(--ease-standard)",
        scrolled || open ? "border-b border-line bg-paper/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-(--container-max) items-center justify-between px-(--gutter)">
        <Link href="/" aria-label="Overflow Studio — home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredHref(link.href)}
              onMouseLeave={() => setHoveredHref(null)}
              className={cx(
                "relative font-mono text-[11px] tracking-[0.18em] uppercase transition-colors",
                pathname === link.href ? "text-ink" : "text-ink-soft hover:text-ink",
              )}
            >
              {link.label}
              <AnimatePresence>
                {hoveredHref === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-px bg-accent"
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
            <Button href="/contact" variant="primary" className="px-5 py-3">
              Activate capacity
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
                "absolute inset-x-0 top-0 h-[1.5px] bg-ink transition-transform duration-(--duration-fast)",
                open && "translate-y-[6.5px] rotate-45",
              )}
            />
            <span
              className={cx(
                "absolute inset-x-0 bottom-0 h-[1.5px] bg-ink transition-transform duration-(--duration-fast)",
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
                  <Link
                    href={link.href}
                    className="font-mono text-sm tracking-[0.16em] text-ink uppercase"
                  >
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
                  Activate capacity
                </Button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
