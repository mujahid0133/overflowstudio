import type { Metadata } from "next";
import { Hero } from "@/components/outcomes/Hero";
import { OutcomeLibrary } from "@/components/outcomes/OutcomeLibrary";
import { BeforeAfter } from "@/components/outcomes/BeforeAfter";

export const metadata: Metadata = {
  title: "Outcomes",
  description:
    "What changes when the work starts moving — speed, founder capacity, team leverage, hiring independence and execution ownership.",
  alternates: { canonical: "/outcomes" },
  openGraph: {
    title: "Outcomes — Overflow Studio",
    description: "The measure of an engagement isn't how much activity happened. It's what changed afterward.",
    url: "/outcomes",
  },
};

export default function OutcomesPage() {
  return (
    <>
      <Hero />
      <OutcomeLibrary />
      <BeforeAfter />
    </>
  );
}
