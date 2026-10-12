import { renderOg, ogSize } from "@/lib/og";
import { exchanges, getExchangeByPathSlug } from "@/data/exchanges";
import { monthYear } from "@/lib/seo";

export const alt = "Exchange referral code – RefCo";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return exchanges.map((e) => ({ slug: `${e.slug}-referral-code` }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = await params;
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
