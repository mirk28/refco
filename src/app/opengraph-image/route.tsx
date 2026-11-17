import { renderOg } from "@/lib/og";
import { monthYear } from "@/lib/seo";

/*
 * Share card of the English home page and of every English page without a card of its own, at `/opengraph-image`.
 * A route handler instead of the `opengraph-image.tsx` file convention: the English pages live in the route group
 * `src/app/(en)/`, where that convention would add a hash to the URL. The pages name this image in their metadata
 * (`shareImages` in src/lib/seo.ts).
 */
export const dynamic = "force-static";

export function GET() {
  return renderOg({
    kicker: `Updated ${monthYear}`,
    title: "Crypto exchange referral codes, verified.",
    subtitle: "Binance · OKX · Bybit · Bitget · Gate · KuCoin · MEXC",
  });
}
