import type { NextConfig } from "next";

/*
  Static export, for GitHub Pages.

  The whole site is already static or SSG — no API routes, no server
  actions, no `next/image` — so exporting costs nothing and loses nothing.
  `next dev` is unaffected; `next build` now emits `out/` instead of a
  server bundle, so use `npm run preview` rather than `next start` to check
  a production build locally.

  `basePath` is required because a GitHub Pages *project* site is served
  from `/<repo>/`, not from the domain root — without it every asset and
  link resolves one level too high. It comes from the environment (see
  src/lib/site.ts) so moving to a real domain later means unsetting a
  variable, not editing config.

  `trailingSlash` makes the export emit `about/index.html` instead of
  `about.html`, which every static host resolves correctly.
*/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
