import type { Metadata } from "next";
import { Hero } from "@/components/faq/Hero";
import { FaqGroups } from "@/components/faq/FaqGroups";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on the model, engagement, control, teams, hiring, security and confidentiality — no black box.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Overflow Studio",
    description: "Questions worth answering before a call.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <Hero />
      <FaqGroups />
    </>
  );
}
