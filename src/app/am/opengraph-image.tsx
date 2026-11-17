import { renderCard, ogSize } from "@/lib/og";
import { getDictionary } from "@/i18n";
import { monthYearFor } from "@/lib/seo";

const locale = "am";
const t = getDictionary(locale).og;

export const alt = t.homeAlt;
export const size = ogSize;
export const contentType = "image/png";

// Amharic card texts are shaped (`cardFont` in src/i18n/config.ts), so the card goes through `renderCard`.
export default function Image() {
  return renderCard(locale, {
    kicker: t.homeKicker(monthYearFor(locale)),
    title: t.homeTitle,
    subtitle: "Binance · OKX · Bybit · Bitget · Gate · KuCoin · MEXC",
    footer: t.footer,
  });
}
