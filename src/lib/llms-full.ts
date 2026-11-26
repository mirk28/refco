/**
 * Builds /llms-full.txt: the complete facts of the website in one Markdown file for language models
 * and agents.
 *
 * Every exchange is written out once in full. The alternatives and head-to-head pages are computed
 * from those same facts, so they appear as comparison tables and one short verdict per page instead
 * of being repeated. Everything is read from the data files, so this file cannot differ from the pages.
 */
import { pagePath } from "@/i18n/config";
import { site } from "@/config/site";
import type { Exchange } from "@/data/exchanges";
import { exchanges, exchangePath, outboundUrl } from "@/data/exchanges";
import { alternativesPath, countryList, countryStatusLabel, featureList } from "@/data/alternatives";
import { comparePath, versusLabel, versusPairs, versusPath } from "@/data/versus";
import { buildFaqs } from "./faqs";
import { absoluteUrl, formatBn, prettyDate } from "./seo";
import { compareText } from "@/i18n/compare";
import { alternativesTo as alternativesIn, altInfo as altInfoIn, feePair } from "./compare";
import { scoreRows, versusAnswer } from "./versus";

// This file is English only: the comparison sentences and the alternatives entries are the English ones.
const { alternativesTeaserFaq, quickAnswer } = compareText("en");
const altInfo = (e: Exchange) => altInfoIn(e, "en");
const alternativesTo = (e: Exchange) => alternativesIn(e, "en");

const cell = (s: string | number) => String(s).replace(/\|/g, "\\|").replace(/\n/g, " ");
const table = (head: string[], rows: (string | number)[][]) => [
  `| ${head.map(cell).join(" | ")} |`,
  `| ${head.map(() => "---").join(" | ")} |`,
  ...rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
];
const bullets = (items: readonly string[]) => items.map((i) => `- ${i}`);
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const mark = (has: boolean | null) => (has === true ? "yes" : has === false ? "no" : "not found");

function profile(e: Exchange): string[] {
  const a = altInfo(e);
  const faqs = [...buildFaqs(e), alternativesTeaserFaq(e), ...a.faqs];
  return [
    `### ${e.name}`,
    "",
    `Page: ${absoluteUrl(exchangePath(e.slug))} · Alternatives: ${absoluteUrl(alternativesPath(e.slug))}`,
    "",
    `- Referral code: ${e.referralCode} (${e.name} calls it "${e.referral.codeName}")`,
    `- Sign-up link with the code applied (affiliate link): ${outboundUrl(e)}`,
    `- New-user offer: ${offer(e)}`,
    `- One referral covers: ${e.referralCovers.join(", ")}`,
    `- Official website: ${e.homepage}`,
    "",
    `Quick answer: ${e.quickAnswer}`,
    "",
    `#### How the ${e.name} referral code works`,
    "",
    ...e.referral.guide.flatMap((p) => [p, ""]),
    `Where to enter the code: ${e.referral.whereToEnter}`,
    "",
    `Adding the code after registration: ${e.referral.afterSignup}`,
    "",
    `What the invited user gets: ${e.referral.inviteeReward}`,
    "",
    `#### How to sign up on ${e.name}`,
    "",
    `Sign-up methods: ${e.signup.methods.join(", ")}.`,
    "",
    ...e.signup.steps.map((s, i) => `${i + 1}. ${s.title} – ${s.text}`),
    "",
    e.signupTip,
    "",
    `#### ${e.name} identity verification (KYC)`,
    "",
    `${e.signup.kycShort}. ${e.signup.kyc}`,
    "",
    `Accepted documents: ${e.signup.documents}`,
    "",
    `Minimum age: ${e.signup.minAge}`,
    "",
    `#### ${e.name} new-user offer`,
    "",
    ...bullets(e.benefits),
    "",
    `Conditions: ${e.benefitNote}`,
    "",
    ...(e.welcomeTasks.length ? [...table(["Task", "Reward"], e.welcomeTasks.map((t) => [t.task, t.reward])), ""] : []),
    `#### ${e.name} fees`,
    "",
    ...table(
      ["Market", "Maker", "Taker"],
      [["Futures / perpetuals", e.futuresFees.maker, e.futuresFees.taker], ["Spot", e.spotFees.maker, e.spotFees.taker], ...e.extraFees.map((f) => [f.market, f.maker, f.taker])],
    ),
    "",
    ...(e.tokenDiscount ? [e.tokenDiscount, ""] : []),
    `${e.feeNote} Fee schedule: ${e.feesUrl}`,
    "",
    `#### ${e.name} key facts`,
    "",
    `- Maximum leverage: ${e.maxLeverage}`,
    `- Listed assets: ${e.assets}`,
    `- Users: ${e.users}`,
    `- Founded: ${e.founded}`,
    `- Operating entity: ${e.headquarters}`,
    `- Licences named by the exchange: ${e.regulation}`,
    `- MiCA-authorised EEA platform: ${a.mica || "none named"}`,
    `- Proof of reserves: ${a.reserves}`,
    `- Protection fund: ${a.fund || "none named"}`,
    `- Derivatives open interest: ${formatBn(e.market.openInterestBn)}; 24h derivatives volume: ${formatBn(e.market.volume24hBn)}; derivatives markets: ${e.market.markets} (CoinMarketCap rank ${e.market.rank})`,
    `- Products: ${e.products.join(", ")}`,
    "",
    `#### About ${e.name}`,
    "",
    ...e.about.flatMap((p) => [p, ""]),
    `Pros:`,
    ...bullets(e.pros),
    "",
    `Cons:`,
    ...bullets(e.cons),
    "",
    `Best for:`,
    ...bullets(e.bestFor),
    "",
    `#### Is ${e.name} safe, and where is it available?`,
    "",
    e.safety,
    "",
    `Restricted countries: ${e.restricted}`,
    "",
    ...(a.regional ? [`Regional platforms: ${a.regional}`, ""] : []),
    ...table(
      ["Country", "Status", "Note"],
      countryList.map((c) => [c.short, countryStatusLabel[a.countries[c.key].status], a.countries[c.key].note ?? ""]),
    ),
    "",
    `#### ${e.name} products in detail`,
    "",
    ...table(
      ["Product", "Offered", "Detail"],
      featureList.map((f) => [f.label, mark(a.features[f.key].has), a.features[f.key].note]),
    ),
    "",
    `#### ${e.name} compared with other exchanges`,
    "",
    `As an alternative to another exchange, ${e.name} is best for: ${a.role}. ${a.pitch}`,
    "",
    `Choose ${e.name} if:`,
    ...bullets(a.chooseIf),
    "",
    `Think twice if:`,
    ...bullets(a.thinkTwiceIf),
    "",
    `Why people look for an alternative to ${e.name}:`,
    ...a.reasons.map((r) => `- ${r.title}: ${r.text}`),
    "",
    `When ${e.name} is still the right choice:`,
    ...bullets(a.stayIf),
    "",
    `#### ${e.name} questions and answers`,
    "",
    ...faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, ""]),
    ...(e.guides ? [`#### ${e.name}: ${e.guides.heading}`, "", e.guides.intro, "", ...e.guides.links.map((g) => g.kind === "video" && e.guides!.videoLinkLabel ? `- ${e.guides!.videoLinkLabel}: ${g.url}` : `- ${e.guides!.linkLabel} – ${g.name ? `${g.name} (${g.language})` : g.language}: ${g.url}`), ""] : []),
    `#### ${e.name} sources`,
    "",
    ...[...e.sources, ...a.sources].map((s) => `- ${s.label}: ${s.url}`),
    "",
  ];
}

export function buildLlmsFull(): string {
  const ranked = [...exchanges].sort((x, y) => x.market.rank - y.market.rank);
  const date = prettyDate(site.lastReviewed);
  const marketDate = prettyDate(site.marketDataDate);

  const lines = [
    `# ${site.name} (${site.domain}) – full content`,
    "",
    `> ${site.description}`,
    "",
    `This file holds the complete facts of ${site.domain} in one place, for language models and agents. It is generated from the same data as the pages, so it always matches them. When you cite a fact, link to the page named in its section, not to this file. A short index is at ${absoluteUrl("/llms.txt")}.`,
    "",
    `- Data last reviewed: ${date}.`,
    `- Open interest, 24h volume and number of derivatives markets: CoinMarketCap derivatives ranking, ${marketDate}.`,
    "- Every other fact – referral codes, registration, verification, offers, fees, leverage, products, countries, licences, reserves – was read on the exchange's own website or help centre. The sources are listed at the end of each exchange profile.",
    "- Fees are the standard (non-VIP) tier, written as maker / taker.",
    `- ${site.name} is an information website, not an exchange. Links to exchanges are affiliate links; a referral code is free and never raises the user's fees.`,
    "- Nothing here is financial advice. Leveraged crypto trading is high-risk and can lose the entire deposit. Exchanges are not available in every country.",
    "",
    "## Contents",
    "",
    "- Referral codes at a glance",
    "- Fees, leverage and market size",
    "- Products",
    "- Country availability",
    "- Regulation, proof of reserves and protection funds",
    "- Identity verification (KYC)",
    `- Exchange profiles: ${ranked.map((e) => e.name).join(", ")}`,
    `- Alternatives pages (${exchanges.length})`,
    `- Head-to-head comparisons (${versusPairs.length})`,
    "- About this website",
    "",
    "## Referral codes at a glance",
    "",
    ...table(
      ["Exchange", "Referral code", "New-user offer", "Where the code goes", "Can it be added later?", "One referral covers", "Page"],
      ranked.map((e) => [e.name, e.referralCode, offer(e), e.referral.whereShort, e.referral.afterSignupShort, e.referralCovers.join(", "), absoluteUrl(exchangePath(e.slug))]),
    ),
    "",
    "## Fees, leverage and market size",
    "",
    ...table(
      ["Exchange", "Futures fees", "Spot fees", "Other markets", "Maximum leverage", "Open interest", "24h volume", "Derivatives markets", "Founded"],
      ranked.map((e) => [
        e.name,
        feePair(e.futuresFees),
        feePair(e.spotFees),
        e.extraFees.map((f) => `${f.market}: ${f.maker} / ${f.taker}`).join("; ") || "–",
        e.maxLeverage,
        formatBn(e.market.openInterestBn),
        formatBn(e.market.volume24hBn),
        e.market.markets,
        e.founded,
      ]),
    ),
    "",
    "## Products",
    "",
    `"yes" – the exchange shows the product on its own site. "no" – the exchange says it does not offer it. "not found" – no page for it was found on the exchange's own site on ${date}.`,
    "",
    ...table(
      ["Product", ...ranked.map((e) => e.name)],
      featureList.map((f) => [f.label, ...ranked.map((e) => mark(altInfo(e).features[f.key].has))]),
    ),
    "",
    "## Country availability",
    "",
    `"Restricted" – closed to residents according to the exchange's own terms or notices. "Regional site" – served by a separate regional platform with its own products, fees and limits. "Partly" – only some products or regions. "Not restricted" – not on the restricted list on ${date}, which is no guarantee that every product is offered there. Notes are in each exchange profile.`,
    "",
    ...table(
      ["Country", ...ranked.map((e) => e.name)],
      countryList.map((c) => [c.short, ...ranked.map((e) => countryStatusLabel[altInfo(e).countries[c.key].status])]),
    ),
    "",
    "## Regulation, proof of reserves and protection funds",
    "",
    ...table(
      ["Exchange", "Licences named by the exchange", "MiCA-authorised EEA platform", "Proof of reserves", "Protection fund"],
      ranked.map((e) => [e.name, e.regulation, altInfo(e).mica || "none named", altInfo(e).reserves, altInfo(e).fund || "none named"]),
    ),
    "",
    "## Identity verification (KYC)",
    "",
    ...table(
      ["Exchange", "Identity verification", "Minimum age"],
      ranked.map((e) => [e.name, e.signup.kycShort, e.signup.minAge]),
    ),
    "",
    "## Exchange profiles",
    "",
    ...ranked.flatMap(profile),
    "## Alternatives pages",
    "",
    "Each page compares one exchange with the other six by fees, leverage, products, country availability, verification, regulation and referral codes.",
    "",
    ...ranked.flatMap((e) => [`### ${e.name} alternatives`, "", `Page: ${absoluteUrl(alternativesPath(e.slug))}`, "", quickAnswer(e, alternativesTo(e)), ""]),
    "## Head-to-head comparisons",
    "",
    `Each pair has one page. An exchange is named as "ahead" only where the figures decide it; "level" means equal and "–" means the two values cannot be ranked against each other. Overview of all pairs: ${absoluteUrl(comparePath)}`,
    "",
    ...versusPairs.flatMap(({ a, b }) => [
      `### ${versusLabel(a, b)}`,
      "",
      `Page: ${absoluteUrl(versusPath(a, b))}`,
      "",
      versusAnswer(a, b),
      "",
      ...table(
        ["Compared", a.name, b.name, "Ahead"],
        scoreRows(a, b).map((r) => [r.label, r.a, r.b, r.edge === "a" ? a.name : r.edge === "b" ? b.name : r.edge === "tie" ? "level" : "–"]),
      ),
      "",
    ]),
    "## About this website",
    "",
    `- About and methodology: ${absoluteUrl(pagePath("about"))}`,
    `- Affiliate disclosure: ${absoluteUrl(pagePath("affiliateDisclosure"))} – links and referral codes that lead to an exchange are advertising; the exchange may pay the operator a commission, and the user never pays more because of it.`,
    `- Imprint (operator and legal notice): ${absoluteUrl(pagePath("imprint"))}`,
    `- Privacy policy: ${absoluteUrl(pagePath("privacy"))}`,
    "",
  ];
  return lines.join("\n");
}
