import { renderOg, ogSize } from "@/lib/og";
import { exchanges } from "@/data/exchanges";
import { exchangeFor, exchangesFor } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { exchangeSlugFromPage, referralPageSlug } from "@/i18n/config";
import { monthYearFor } from "@/lib/seo";

const locale = "es";
const t = getDictionary(locale).og;

export const alt = t.exchangeAlt;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return exchanges.map((e) => ({ page: referralPageSlug(e.slug, locale) }));
}

export default async function Image({ params }: { params: Promise<{ page: string }> | { page: string } }) {
  const { page } = await params;
  const e = exchangeFor(exchangeSlugFromPage(page, locale) ?? "", locale) ?? exchangesFor(locale)[0];
  return renderOg({
    badge: e.name,
    badgeColor: e.brandColor,
    badgeInk: e.brandInk,
    kicker: t.exchangeKicker(monthYearFor(locale)),
    title: t.exchangeTitle(e),
    subtitle: t.exchangeSubtitle(e),
    footer: t.footer,
  });
}
