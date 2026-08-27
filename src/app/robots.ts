import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/*
  Required by `output: "export"` (next.config.ts): metadata routes are route
  handlers, and the exporter needs them explicitly marked static so it emits
  a real file at build time instead of expecting a server to generate one.
*/
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
