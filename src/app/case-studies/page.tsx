import type { Metadata } from "next";
import { Hero } from "@/components/case-studies/Hero";
import { CaseStudyList } from "@/components/case-studies/CaseStudyList";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real Plug-in Department engagements — the problem, the outcome, the time it took and what it meant for the founder running it.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Overflow Studio",
    description: "Proof, not a portfolio.",
    url: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero />
      <CaseStudyList />
    </>
  );
}
