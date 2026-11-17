import { renderOg, ogSize } from "@/lib/og";
import { getDictionary } from "@/i18n";
import { monthYearFor } from "@/lib/seo";

const locale = "ko";
const t = getDictionary(locale).og;

export const alt = t.homeAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: t.homeKicker(monthYearFor(locale)),
    title: t.homeTitle,
    subtitle: "Binance · OKX · Bybit · Bitget · Gate · KuCoin · MEXC",
    footer: t.footer,
  });
}
