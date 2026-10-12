import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { absoluteUrl, prettyDate } from "@/lib/seo";

export const dynamic = "force-static";

/** llms.txt – a concise, machine-readable summary for AI answer engines (GEO). */
export function GET() {
  const lines = [
    `# ${site.name} (${site.domain})`,
    "",
    `> ${site.description}`,
    "",
    `Data last reviewed: ${prettyDate(site.lastReviewed)}. Market data: CoinMarketCap derivatives ranking, ${prettyDate(site.marketDataDate)}.`,
    "",
    "## Exchange referral code pages",
    ...exchanges.map(
      (e) =>
        `- [${e.name} referral code](${absoluteUrl(exchangePath(e.slug))}): New-user offer: ${e.feeDiscount || e.bonusHeadline}. One referral covers ${e.referralCovers.join(", ")}. ${e.tagline}. Founded ${e.founded}. Futures fees ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker (standard tier). Max leverage: ${e.maxLeverage}. ${e.market.markets} derivatives markets.`,
    ),
    "",
    "## Key facts",
    "- Referral codes on all listed exchanges can only be applied during registration, not afterwards.",
    "- Using a referral link never increases trading fees for the user.",
    "- On every listed exchange, one referral link covers both spot and futures trading (plus margin/options where offered).",
    "- None of the listed exchanges offer crypto derivatives to US residents on their global platforms.",
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
