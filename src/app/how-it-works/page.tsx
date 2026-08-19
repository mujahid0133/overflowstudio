import type { Metadata } from "next";
import { Hero } from "@/components/how-it-works/Hero";
import { EngagementTimeline } from "@/components/how-it-works/EngagementTimeline";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Eight stages from first conversation to shipped outcome — Discovery, Definition, Assembly, Kickoff, Execution, Review, Delivery, Transition.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works — Overflow Studio",
    description: "Clear ownership. Defined outcomes. No black box.",
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero />
      <EngagementTimeline />
    </>
  );
}
