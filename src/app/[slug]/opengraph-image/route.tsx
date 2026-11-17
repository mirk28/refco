import { renderOg } from "@/lib/og";
import { exchanges, getExchangeByPathSlug } from "@/data/exchanges";
import { getExchangeByAlternativesSlug } from "@/data/alternatives";
import { getPairByPathSlug, versusPairs, versusSlug } from "@/data/versus";
import { alternativesTo, feePair, leverageOf } from "@/lib/compare";
import { monthYear } from "@/lib/seo";

/*
 * Share cards of the English referral-code, alternatives and head-to-head pages, at `/<page>/opengraph-image`.
 * A route handler outside the route group `(en)` so that the URL carries no hash (see ../../opengraph-image/route.tsx).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...exchanges.flatMap((e) => [{ slug: `${e.slug}-referral-code` }, { slug: `${e.slug}-alternatives` }]),
    ...versusPairs.map((p) => ({ slug: versusSlug(p) })),
  ];
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const focus = getExchangeByAlternativesSlug(slug);
  if (focus) {
    const alts = alternativesTo(focus, "en");
    return renderOg({
      badge: focus.name,
      badgeColor: focus.brandColor,
      badgeInk: focus.brandInk,
      kicker: `Checked ${monthYear}`,
      title: `${focus.name} Alternatives`,
      subtitle: `${alts.map((a) => a.name).join(" · ")} – fees, leverage, KYC and countries compared`,
    });
  }
  const pair = getPairByPathSlug(slug);
  if (pair) {
    const { a, b } = pair;
    return renderOg({
      badge: "Head to head",
      kicker: `Checked ${monthYear}`,
      title: `${a.name} vs ${b.name}`,
      subtitle: `Futures fees ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)} · ${leverageOf(a)}x vs ${leverageOf(b)}x leverage · KYC, countries, bonus`,
    });
  }
  const e = getExchangeByPathSlug(slug) ?? exchanges[0];
  return renderOg({
    badge: e.name,
    badgeColor: e.brandColor,
    badgeInk: e.brandInk,
    kicker: `Checked ${monthYear}`,
    title: `${e.name} Referral Code`,
    subtitle: `${e.feeDiscount || e.bonusHeadline} · Spot & futures with one link`,
  });
}
