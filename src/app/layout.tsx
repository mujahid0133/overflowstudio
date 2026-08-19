import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { Navigation } from "@/components/nav/Navigation";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// TODO(content): swap for the real production domain before launch — see
// docs/CONTENT-TODO.md. Everything below (metadataBase, sitemap, OG urls)
// resolves against this placeholder until then.
const siteUrl = "https://overflowstudio.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Overflow Studio — Plug-in Departments",
    template: "%s — Overflow Studio",
  },
  description:
    "Add the execution capacity needed to get important work shipped while your internal team takes shape.",
  openGraph: {
    siteName: "Overflow Studio",
    type: "website",
    locale: "en_US",
    title: "Overflow Studio — Plug-in Departments",
    description:
      "Add the execution capacity needed to get important work shipped while your internal team takes shape.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overflow Studio — Plug-in Departments",
    description:
      "Add the execution capacity needed to get important work shipped while your internal team takes shape.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <CustomCursor />
          <SmoothScrollProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
