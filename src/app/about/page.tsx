import type { Metadata } from "next";
import { Hero } from "@/components/about/Hero";
import { Founders } from "@/components/about/Founders";

export const metadata: Metadata = {
  title: "About",
  description:
    "Overflow exists because hiring and execution don't always move at the same speed — we create execution capacity around defined outcomes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Overflow Studio",
    description:
      "Overflow exists because hiring and execution don't always move at the same speed.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Founders />
    </>
  );
}
