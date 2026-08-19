import type { MetadataRoute } from "next";

// TODO(content): swap for the real production domain before launch — see
// docs/CONTENT-TODO.md.
const siteUrl = "https://overflowstudio.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
