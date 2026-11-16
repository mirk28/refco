import { renderOg, ogSize } from "@/lib/og";
import { exchanges, getExchangeByPathSlug } from "@/data/exchanges";
import { getExchangeByAlternativesSlug } from "@/data/alternatives";
import { alternativesTo } from "@/lib/compare";
import { monthYear } from "@/lib/seo";

export const alt = "Exchange referral code and alternatives – RefCo";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return exchanges.flatMap((e) => [{ slug: `${e.slug}-referral-code` }, { slug: `${e.slug}-alternatives` }]);
}

export default async function Image({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = await params;
  const focus = getExchangeByAlternativesSlug(slug);
  if (focus) {
    const alts = alternativesTo(focus);
    return renderOg({
      badge: focus.name,
      badgeColor: focus.brandColor,
      badgeInk: focus.brandInk,
      kicker: `Checked ${monthYear}`,
      title: `${focus.name} Alternatives`,
      subtitle: `${alts.map((a) => a.name).join(" · ")} – fees, leverage, KYC and countries compared`,
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
