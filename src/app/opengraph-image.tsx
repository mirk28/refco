import { renderOg, ogSize } from "@/lib/og";
import { monthYear } from "@/lib/seo";

export const alt = "RefCo – verified crypto exchange referral codes";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: `Updated ${monthYear}`,
    title: "Crypto exchange referral codes, verified.",
    subtitle: "Binance · OKX · Bybit · Bitget · Gate · KuCoin · MEXC",
  });
}
