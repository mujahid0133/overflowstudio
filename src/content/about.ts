/**
 * /about copy. Spec section 16 — human trust. Hero copy is verbatim from
 * the spec. There is no real founder photo/bio content yet (see
 * docs/CONTENT-TODO.md); `founders` stays empty until real names, photos
 * and bios exist. Never invent a name, a role or a credential to fill it.
 */

export type Founder = {
  name: string;
  role: string;
  /** Path under /public, e.g. "/founders/jane.jpg". Real photos only — no stock. */
  photo?: string;
  bio: string;
};

export const hero = {
  eyebrow: "About",
  headline: "Overflow exists because hiring and execution don't always move at the same speed.",
  paragraphs: [
    "Companies build permanent teams because they need durable capability.",
    "But important work doesn't always arrive on the same timeline.",
    "Overflow exists in the gap.",
    "We create execution capacity around defined outcomes so companies can keep moving while their internal organization takes shape.",
  ],
};

// TODO(content): add real founder names, photos and bios once available.
// Spec section 16 explicitly bans stock photos and fabricated credentials —
// do not fill this in with placeholder people. Shape once real:
//
// {
//   name: "...",
//   role: "...",
//   photo: "/founders/....jpg",
//   bio: "...",
// },
export const founders: Founder[] = [];
