# Content checklist — before this goes live

The site is built and structurally complete, but the spec (rules 6–9, section
20/21) bans fabricated proof, logos, addresses and credentials. Everything
below is a deliberate placeholder or omission, not an oversight. Nothing here
blocks development — only launch.

## Brand assets
- [ ] Real logo/symbol — currently a text placeholder (`src/components/brand/Logo.tsx`)
- [ ] Confirm or replace the color palette — currently a designed placeholder
      (warm paper `#F7F5F0` / ink `#15140F` / accent `#FF5A1F`), see
      `src/app/globals.css`. Swap the token values there once you have real
      brand colors; nothing else needs to change.
- [ ] Favicon / OG image

## Company / trust layer (`src/components/footer/Footer.tsx`)
- [ ] Real contact email (placeholder: `hello@overflowstudio.co`)
- [ ] Real LinkedIn URL (placeholder: `linkedin.com/company/overflow-studio`)
- [ ] Registered company name/details if different from "Overflow Studio"
- [ ] Physical address — **only add one if it's real**; spec explicitly bans
      fake office locations, so omit the line rather than invent one

## First case study — your friend's project
Using a real project with his consent is legitimate proof, not fabrication
(spec rule 6 bans *inventing* clients/metrics — a real one you're allowed to
publish is fine). Before it goes on the site:
- [ ] His explicit sign-off on what's shown (named vs. anonymized — spec
      section 15 offers an "anonymous founder, shared with permission" pattern)
- [ ] Only real, checkable numbers — if there's no clean "8 weeks → 3 weeks"
      style figure, describe the outcome qualitatively instead of estimating
- [ ] The 8-part case study structure from spec section 15 (situation,
      bottleneck, why not hiring, what Overflow owned, how execution changed,
      measured outcome, founder perspective, what this means for another company)

Once you have this, it plugs into `/case-studies` and replaces the
"publishing soon" teaser on the homepage (`src/content/home.ts` →
`caseStudyTeaser`).

## Founder Experience section (homepage, spec section 11 §6)
Currently **not rendered** — it requires real, approved screenshots of an
actual conversation. Spec explicitly forbids recreating it as fake text. Add
it back in `src/app/page.tsx` once you have that material.

## About page
- [ ] Real founder names, photos, bios (spec section 16 — no stock photos,
      no fabricated credentials)

## FAQ — security/confidentiality answers
Spec section 17 explicitly bans inventing security certifications or
procedures. Answer "How do you handle confidential work?" with what you
actually do contractually, not a generic SOC2-style claim.

## Contact form (`src/components/contact/ContactForm.tsx`)
- [ ] Wire the form to a real submission endpoint (e.g. Resend, Formspree, a
      DB) before launch — see the `TODO(infra)` comment in that file.
      Right now submitting only flips local state to show the "Got it."
      confirmation; nothing is sent or stored anywhere.

## Case studies (`src/content/case-studies.ts`)
- [ ] `caseStudies` is an empty array — see "First case study" above. The
      array's shape and an example (commented out) are in that file; the
      index page and `/case-studies/[slug]` both already handle zero
      published entries gracefully.

## About page (`src/components/about/Founders.tsx`)
- [ ] `founders` array in `src/content/about.ts` is empty — add real
      name/role/photo/bio entries once available. The section renders
      nothing until then (same honest-omission approach as the homepage's
      Founder Experience section).

## Before deploying
- [ ] Real domain — currently `https://overflowstudio.co` is used as a
      placeholder for `metadataBase` (`src/app/layout.tsx`), `sitemap.ts`
      and `robots.ts`, and every page's Open Graph `url`. Swap all of these
      once the real domain is confirmed.
- [ ] Analytics provider decision (spec section 27 — nothing wired up yet).
      `src/content/privacy.ts` explicitly states no analytics/tracking is
      in use today — update that copy the moment analytics is added.
- [ ] Legal review of `/privacy` and `/terms` — both are template language
      with a visible draft notice, not lawyer-reviewed copy.
