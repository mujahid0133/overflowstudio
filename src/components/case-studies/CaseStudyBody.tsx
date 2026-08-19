import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import type { CaseStudy } from "@/content/case-studies";
import { sectionLabels } from "@/content/case-studies";

/**
 * The 8-part case study structure from spec section 15. Read as a business
 * story, not a "challenge / solution / results" agency template — each part
 * gets a numbered heading and its own paragraph, in order.
 */
export function CaseStudyBody({ caseStudy }: { caseStudy: CaseStudy }) {
  const parts: { label: string; body: string | undefined }[] = [
    { label: sectionLabels.situation, body: caseStudy.situation },
    { label: sectionLabels.bottleneck, body: caseStudy.bottleneck },
    { label: sectionLabels.whyNotHiring, body: caseStudy.whyNotHiring },
    { label: sectionLabels.whatOverflowOwned, body: caseStudy.whatOverflowOwned },
    { label: sectionLabels.howExecutionChanged, body: caseStudy.howExecutionChanged },
    { label: sectionLabels.measuredOutcome, body: caseStudy.measuredOutcome },
    { label: sectionLabels.founderPerspective, body: caseStudy.founderPerspective },
    { label: sectionLabels.whatThisMeans, body: caseStudy.whatThisMeans },
  ];

  return (
    <Section>
      <div className="flex max-w-2xl flex-col gap-14">
        {parts.map((part, i) =>
          part.body ? (
            <Reveal key={part.label} index={i}>
              <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
                {String(i + 1).padStart(2, "0")} — {part.label}
              </p>
              <p className="mt-4 text-lg text-ink-soft">{part.body}</p>
            </Reveal>
          ) : null,
        )}
      </div>
    </Section>
  );
}
