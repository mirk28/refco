import type { Exchange, Faq, FaqTopic } from "@/data/exchanges";

/** Order and headings of the FAQ groups on an exchange page. */
export const faqTopics: { id: FaqTopic; title: (name: string) => string }[] = [
  { id: "referral", title: (n) => `${n} referral code` },
  { id: "signup", title: (n) => `Registering and verifying on ${n}` },
  { id: "bonus", title: (n) => `${n} welcome bonus and rewards` },
  { id: "fees", title: (n) => `${n} fees and trading` },
  { id: "safety", title: () => "Safety and availability" },
];

/** "A, B and C" */
export const joinList = (items: string[]) =>
  items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/**
 * Questions every exchange page answers. The answers are assembled from the verified
 * structured fields, so they can never drift from the facts shown elsewhere on the page.
 * Exchange-specific questions live in `exchange.faqs`.
 */
export function buildFaqs(e: Exchange): Faq[] {
  const r = e.referral;
  const s = e.signup;
  const common: Faq[] = [
    {
      topic: "referral",
      q: `What is the ${e.name} referral code?`,
      a: `The ${e.name} referral code is ${e.referralCode}. ${r.apply} ${e.name} itself calls it the ${r.codeName}.`,
    },
    {
      topic: "referral",
      q: `Where do I enter the ${e.name} referral code?`,
      a: r.whereToEnter,
    },
    {
      topic: "referral",
      q: `Can I add the ${e.name} referral code after I have registered?`,
      a: r.afterSignup,
    },
    {
      topic: "referral",
      q: `What do I get with the ${e.name} referral code ${e.referralCode}?`,
      a: r.inviteeReward,
    },
    {
      topic: "referral",
      q: `Does the ${e.name} referral code work for both spot and futures?`,
      a: `Yes. The referral is tied to your ${e.name} account, not to one product, so a single sign-up with ${e.referralCode} covers ${joinList(e.referralCovers)}.`,
    },
    {
      topic: "referral",
      q: `Does using the ${e.name} referral code cost anything?`,
      a: `No. Entering ${e.referralCode} is free and does not raise your trading fees. ${e.name} pays its referral programme out of its own fee income.`,
    },
    {
      topic: "signup",
      q: `How do I sign up on ${e.name}?`,
      a: `${s.steps.map((st, i) => `${i + 1}. ${st.title}`).join(" ")} You can register with ${joinList(s.methods)}.`,
    },
    {
      topic: "signup",
      q: `Do I need identity verification (KYC) on ${e.name}?`,
      a: s.kyc,
    },
    {
      topic: "signup",
      q: `Which documents does ${e.name} accept for verification?`,
      a: s.documents,
    },
    {
      topic: "signup",
      q: `How old do I have to be to open a ${e.name} account?`,
      a: s.minAge,
    },
    {
      topic: "fees",
      q: `What are the trading fees on ${e.name}?`,
      a: `On the standard tier ${e.name} charges ${e.spotFees.maker} maker / ${e.spotFees.taker} taker on spot and ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker on perpetual futures.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
    },
    {
      topic: "safety",
      q: `In which countries is ${e.name} not available?`,
      a: e.restricted,
    },
  ];
  return [...common, ...e.faqs];
}

/** Splits a FAQ list into the ordered topic groups used on the page (empty groups are dropped). */
export function groupFaqs(e: Exchange, faqs: Faq[]) {
  return faqTopics
    .map((t) => ({ id: t.id, title: t.title(e.name), faqs: faqs.filter((f) => (f.topic ?? "referral") === t.id) }))
    .filter((g) => g.faqs.length > 0);
}
