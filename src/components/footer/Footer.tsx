import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

/**
 * §26. The footer restates the model in one line, repeats the four primary
 * destinations, and offers the same single action the rest of the site
 * offers. The deeper pages sit under "More" — reachable, but not competing
 * with the argument.
 */
const primary = [
  { href: "/#product", label: "Product" },
  { href: "/#model", label: "Model" },
  { href: "/#proof", label: "Proof" },
  { href: "/about", label: "About" },
];

const more = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/plug-in-departments", label: "Plug-in Departments" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/faq", label: "FAQ" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

// TODO(content): replace with the real contact address, LinkedIn URL and
// registered company details before launch — see docs/CONTENT-TODO.md.
// Never fabricate an office address; omit the line instead if none exists.
const contactEmail = "hello@overflowstudio.co";
const linkedInUrl = "https://www.linkedin.com/company/overflow-studio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="max-w-xs font-display text-lg leading-snug font-medium text-ink">
              Plug-in Departments for important work.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm text-ink-soft underline decoration-line-strong underline-offset-4 hover:text-ink hover:decoration-ink"
            >
              {contactEmail}
            </a>
            <Button href="/contact" variant="primary" className="mt-2">
              Activate capacity
            </Button>
          </div>

          <FooterColumn heading="The model" links={primary} />

          <div className="flex flex-col gap-10">
            <FooterColumn heading="More" links={more} />
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-ink-faint uppercase">
                Elsewhere
              </span>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-soft hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* The closing statement (§26) — the last thing on the page, and the
            single sentence the whole site exists to make true. */}
        <p className="mt-20 max-w-3xl border-t border-line pt-10 font-display text-xl leading-snug font-medium text-balance md:text-3xl">
          Important work shouldn&apos;t have to wait for organizational capacity to
          catch up.
        </p>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col-reverse items-start justify-between gap-4 py-6 text-xs text-ink-faint md:flex-row md:items-center">
          <p>© {year} Overflow Studio. All rights reserved.</p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink-soft">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-[11px] tracking-[0.18em] text-ink-faint uppercase">
        {heading}
      </span>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink-soft hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
