import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies, emptyState } from "@/content/case-studies";

/**
 * Honest empty state when there are zero published case studies — matches
 * the homepage's evidence framing ("first engagement is in
 * progress") rather than showing fake cards. Spec sections 6–9 and 21 ban
 * manufactured proof; an honest "not yet" is the correct state here, not a
 * placeholder grid.
 */
export function CaseStudyList() {
  const published = caseStudies.filter((cs) => cs.published);

  if (published.length === 0) {
    return (
      <Section>
        <Reveal className="rounded-3xl border border-line bg-paper-dim p-10 md:p-16">
          <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
            {emptyState.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight font-medium md:text-4xl">
            {emptyState.headline}
          </h2>
          <p className="mt-4 max-w-lg text-base text-ink-soft">{emptyState.body}</p>
          <div className="mt-8">
            <Button href={emptyState.cta.href} variant="secondary">
              {emptyState.cta.label}
            </Button>
          </div>
        </Reveal>
      </Section>
    );
  }

  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2">
        {published.map((caseStudy, i) => (
          <Reveal key={caseStudy.slug} index={i}>
            <CaseStudyCard caseStudy={caseStudy} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
