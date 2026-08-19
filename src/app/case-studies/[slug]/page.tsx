import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyBody } from "@/components/case-studies/CaseStudyBody";
import { caseStudies } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.filter((cs) => cs.published).map((cs) => ({ slug: cs.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug && cs.published);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
    openGraph: {
      title: `${caseStudy.title} — Overflow Studio`,
      description: caseStudy.summary,
      url: `/case-studies/${caseStudy.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return (
    <>
      <Section invert className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow invert>
              {caseStudy.confidentiality === "anonymous" ? "Anonymous founder" : "Case study"}
            </Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-medium text-balance text-paper-on-ink md:text-6xl">
              {caseStudy.title}
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-8 max-w-xl text-lg text-paper-on-ink-soft">{caseStudy.summary}</p>
          </Reveal>
          {caseStudy.confidentiality === "anonymous" && (
            <Reveal index={3}>
              <p className="mt-4 text-sm text-paper-on-ink-soft">
                Shared with permission under confidentiality obligations.
              </p>
            </Reveal>
          )}
        </div>
      </Section>
      <CaseStudyBody caseStudy={caseStudy} />
    </>
  );
}
