import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { sections, updated } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Overflow Studio collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-2xl">
        <p className="rounded-lg border border-line-strong bg-paper-dim px-4 py-3 text-xs text-ink-soft">
          DRAFT — this page uses template legal language and hasn&apos;t been reviewed by a
          lawyer yet. Don&apos;t treat it as final before launch.
        </p>
        <h1 className="mt-8 font-display text-4xl leading-[1.08] font-medium md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
          {updated}
        </p>

        <div className="mt-14 flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-medium text-ink">{section.heading}</h2>
              <p className="mt-3 text-base text-ink-soft">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
