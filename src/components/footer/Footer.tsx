import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";

const explore = [
  { href: "/plug-in-departments", label: "The model" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/case-studies", label: "Case studies" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-20">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-ink-soft">
            Plug-in Departments — execution capacity for the work that
            shouldn&apos;t wait for hiring.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-sm text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink"
          >
            {contactEmail}
          </a>
        </div>

        <FooterColumn heading="Explore" links={explore} />
        <FooterColumn heading="Company" links={company} />

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
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
    <div className="flex flex-col gap-3">
      <span className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
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
