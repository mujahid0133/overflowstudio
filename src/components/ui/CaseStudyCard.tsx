import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

/**
 * Index card for a published case study. Spec section 15: not a generic
 * portfolio card — the problem/outcome should be understandable before the
 * visitor clicks, so the summary line carries that weight.
 */
export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block rounded-3xl border border-line bg-paper-dim p-10 transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:border-ink md:p-12"
    >
      <p className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">Case study</p>
      <h3 className="mt-4 max-w-xl font-display text-2xl leading-tight font-medium text-ink md:text-3xl">
        {caseStudy.title}
      </h3>
      <p className="mt-4 max-w-lg text-base text-ink-soft">{caseStudy.summary}</p>
      <span className="mt-8 inline-block text-sm text-ink underline underline-offset-4 decoration-line-strong group-hover:decoration-ink">
        Read the case study →
      </span>
    </Link>
  );
}
