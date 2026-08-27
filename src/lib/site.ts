/**
 * Where this site lives, in one place.
 *
 * Three things need to agree: Next's `basePath`/`assetPrefix` (next.config.ts),
 * the `metadataBase` every Open Graph URL resolves against (app/layout.tsx),
 * and the absolute URLs in sitemap.xml and robots.txt. They used to be three
 * separate hardcoded strings, which is exactly how a site ends up serving
 * OG tags pointing at a domain it doesn't live on.
 *
 * Both values come from the environment so the deploy target isn't baked
 * into the app:
 *
 *   GitHub Pages project site — the workflow sets
 *     NEXT_PUBLIC_BASE_PATH=/overflowstudio
 *     NEXT_PUBLIC_SITE_URL=https://mujahid0133.github.io/overflowstudio
 *
 *   A real domain later — set NEXT_PUBLIC_SITE_URL to it and leave
 *     NEXT_PUBLIC_BASE_PATH unset. A site at the root of its own domain has
 *     no base path, and nothing else in the codebase needs to change.
 *
 *   Local dev — both unset: no base path, localhost.
 */

/** Sub-path the site is served from. "" when it owns the domain root. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Absolute origin + base path, no trailing slash. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:3000${basePath}`
).replace(/\/$/, "");
