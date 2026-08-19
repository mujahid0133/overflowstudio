import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";

// TODO(content): swap for the real production domain before launch — see
// docs/CONTENT-TODO.md.
const siteUrl = "https://overflowstudio.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/plug-in-departments`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/outcomes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/how-it-works`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies
    .filter((cs) => cs.published)
    .map((cs) => ({
      url: `${siteUrl}/case-studies/${cs.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...caseStudyRoutes];
}
