import type { Exchange } from "@/data/exchanges";

/**
 * Shows the official logo from /public/logos when `exchange.logo` is set,
 * otherwise a monogram tile in the exchange's brand colour.
 * Drop official brand-kit SVGs into /public/logos and set `logo` in exchanges.ts.
 */
export function ExchangeLogo({ exchange, size = 44 }: { exchange: Exchange; size?: number }) {
  const style = { width: size, height: size, borderRadius: Math.round(size * 0.24) };
  if (exchange.logo) {
    return (
      <span className="xlogo" style={style}>
        <img src={exchange.logo} alt={`${exchange.name} logo`} width={size} height={size} loading="lazy" decoding="async" />
      </span>
    );
  }
  const overrides: Record<string, string> = { bitget: "BG", bybit: "BY" };
  const clean = exchange.name.replace(/[^A-Za-z]/g, "");
  const initials = overrides[exchange.slug] ?? (clean.length <= 4 ? clean : clean.slice(0, 2)).toUpperCase();
  return (
    <span
      className="xlogo"
      role="img"
      aria-label={`${exchange.name} logo`}
      style={{ ...style, background: exchange.brandColor, color: exchange.brandInk, fontSize: size * (initials.length > 2 ? 0.3 : 0.4) }}
    >
      {initials}
    </span>
  );
}
