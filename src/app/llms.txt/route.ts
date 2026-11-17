import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { alternativesTo, altInfo, feePair, leverageOf } from "@/lib/compare";
import { comparePath, versusLabel, versusPairs, versusPath } from "@/data/versus";
import { scoreSummary } from "@/lib/versus";
import { absoluteUrl, prettyDate } from "@/lib/seo";
import { getDictionary } from "@/i18n";
import { homePath, localeInfo, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

/** English names of the languages, for the section headings of this (English) file. */
const englishName: Record<Locale, string> = { en: "English", es: "Spanish" };

/** llms.txt – a concise, machine-readable summary for AI answer engines (GEO). */
export function GET() {
  const lines = [
    `# ${site.name} (${site.domain})`,
    "",
    `> ${site.description}`,
    "",
    `Data last reviewed: ${prettyDate(site.lastReviewed)}. Market data: CoinMarketCap derivatives ranking, ${prettyDate(site.marketDataDate)}.`,
    "",
    "## Full content",
    `- [All facts in one file](${absoluteUrl("/llms-full.txt")}): every exchange profile with referral code, sign-up steps, verification, fees, products, country availability, questions and answers and sources, plus the comparison tables and a verdict for each of the ${versusPairs.length} pairs.`,
    "",
    "## Exchange referral code pages",
    ...exchanges.map(
      (e) =>
        `- [${e.name} referral code](${absoluteUrl(exchangePath(e.slug))}): The ${e.name} referral code is ${e.referralCode}. New-user offer: ${e.feeDiscount || e.bonusHeadline}. Where the code goes: ${e.referral.whereShort}. Can it be added after sign-up: ${e.referral.afterSignupShort}. One referral covers ${e.referralCovers.join(", ")}. Identity verification: ${e.signup.kycShort}. Spot fees ${e.spotFees.maker} maker / ${e.spotFees.taker} taker, futures fees ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker (standard tier). Max leverage: ${e.maxLeverage}. Founded ${e.founded}.`,
    ),
    "",
    "## Exchange alternatives pages",
    ...exchanges.map((e) => {
      const alts = alternativesTo(e);
      return `- [${e.name} alternatives](${absoluteUrl(alternativesPath(e.slug))}): ${alts.length} alternatives to ${e.name} compared by fees, leverage, products, country availability, identity verification, regulation and referral codes. ${alts.map((a) => altInfo(a).pick).join(". ")}.`;
    }),
    "",
    "## Head-to-head comparison pages",
    `- [All exchange comparisons](${absoluteUrl(comparePath)}): overview of the ${versusPairs.length} head-to-head pages and the ${exchanges.length} alternatives pages.`,
    ...versusPairs.map(({ a, b }) => {
      const s = scoreSummary(a, b);
      return `- [${versusLabel(a, b)}](${absoluteUrl(versusPath(a, b))}): ${a.name} charges ${feePair(a.futuresFees)} on futures and ${feePair(a.spotFees)} on spot (maker / taker), ${b.name} ${feePair(b.futuresFees)} and ${feePair(b.spotFees)}. Maximum leverage: ${leverageOf(a)}x against ${leverageOf(b)}x. Of ${s.measurable} measurable points ${a.name} is ahead on ${s.a.length}, ${b.name} on ${s.b.length} and ${s.tie.length} are level. Also compared: products, country availability, identity verification, regulation, proof of reserves and referral codes.`;
    }),
    "",
    ...exchanges.flatMap(({ name, guides }) =>
      guides
        ? [`## ${name}: ${guides.heading}`, ...guides.links.map((g) => `- [${guides.linkLabel} – ${g.name ? `${g.name} (${g.language})` : g.language}](${g.url})`), ""]
        : [],
    ),
    ...locales
      .filter((l) => l !== "en")
      .flatMap((l) => [
        `## Pages in ${englishName[l]} (${localeInfo[l].name})`,
        `- [${getDictionary(l).layout.referralCodes}](${absoluteUrl(homePath(l))}): the home page in ${englishName[l]} – the same facts as the English pages, translated.`,
        ...exchanges.map((e) => `- [${getDictionary(l).layout.referralCodeOf(e.name)}](${absoluteUrl(exchangePath(e.slug, l))}): ${englishName[l]} version of the ${e.name} referral code page (code ${e.referralCode}).`),
        "",
      ]),
    "## Key facts",
    "- Every fact about referral codes, registration, verification, welcome offers and fees was read on the exchange's own website or help centre; each exchange page lists its sources.",
    "- Whether a referral code can be added after registration differs by exchange: Binance and MEXC allow it within 30 days under conditions, KuCoin by request, Bybit, OKX and Bitget only at sign-up, and Gate documents no way.",
    "- Using a referral code never increases trading fees for the user.",
    "- On every listed exchange, one referral covers both spot and futures trading.",
    "- Binance, Bybit, Bitget, Gate, KuCoin and MEXC list the United States as a restricted or prohibited country; OKX restricts certain US jurisdictions.",
    "- Referral programmes are restricted for EEA residents on several exchanges (e.g. Binance since 1 July 2026, Bybit) – see the individual pages.",
    "",
    "## About",
    `- [About & methodology](${absoluteUrl("/about")})`,
    `- [Affiliate disclosure](${absoluteUrl("/affiliate-disclosure")})`,
    `- [Privacy policy](${absoluteUrl("/privacy")})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
