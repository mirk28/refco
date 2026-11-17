import type { ReactNode } from "react";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { localeInfo } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { shapeText } from "./og-shape";
import type { TextStyle } from "./og-shape";

export const ogSize = { width: 1200, height: 630 };

/** Size, weight and colour of the card texts – the same for Geist text and for shaped text (`renderCard`). */
const text = {
  badge: { size: 26, weight: 800 },
  kicker: { size: 26, weight: 700, color: "#6EE7B7" },
  title: { size: 68, weight: 800, color: "#FFFFFF", maxWidth: 1000 },
  subtitle: { size: 30, color: "#C4CFE0", maxWidth: 980 },
  footer: { size: 22, color: "#9FB0CC" },
} as const;

type CardTexts<T> = {
  kicker: T;
  title: T;
  subtitle: T;
  badge?: T;
  badgeColor?: string;
  badgeInk?: string;
  /** The three words at the bottom of the card (`og.footer` in src/i18n/ for other languages). */
  footer?: T[];
};

/** Shared Open Graph card renderer (1200×630), used by the home page and every exchange page. */
export function renderOg({
  kicker,
  title,
  subtitle,
  badge,
  badgeColor = "#1D4ED8",
  badgeInk = "#FFFFFF",
  footer = ["Verified links", "Fees and facts", "Official sources"],
}: CardTexts<ReactNode>) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0B1B33 0%, #13284A 55%, #0E3B3A 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="13" fill="#1D4ED8" />
            <path
              d="M11 15.5a2.5 2.5 0 012.5-2.5h21a2.5 2.5 0 012.5 2.5v4.2a4.3 4.3 0 000 8.6v4.2a2.5 2.5 0 01-2.5 2.5h-21a2.5 2.5 0 01-2.5-2.5v-4.2a4.3 4.3 0 000-8.6z"
              fill="#fff"
            />
            <path d="M18 24.2l3.6 3.6 7.6-7.6" fill="none" stroke="#059669" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
              Ref<span style={{ color: "#7AA2FF" }}>Co</span>
            </div>
            <div style={{ fontSize: 20, color: "#9FB0CC" }}>{site.domain}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {badge ? (
              <div
                style={{
                  display: "flex",
                  background: badgeColor,
                  color: badgeInk,
                  fontSize: text.badge.size,
                  fontWeight: text.badge.weight,
                  padding: "8px 18px",
                  borderRadius: 12,
                }}
              >
                {badge}
              </div>
            ) : null}
            <div style={{ display: "flex", fontSize: text.kicker.size, color: text.kicker.color, fontWeight: text.kicker.weight }}>{kicker}</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: text.title.size,
              fontWeight: text.title.weight,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: text.title.maxWidth,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: text.subtitle.size, color: text.subtitle.color, maxWidth: text.subtitle.maxWidth }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: text.footer.size, color: text.footer.color }}>
          <span>{footer[0]}</span>
          <span>·</span>
          <span>{footer[1]}</span>
          <span>·</span>
          <span>{footer[2]}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}

/**
 * The card of a page in `locale`. Languages with a `cardFont` (scripts whose letters must be joined) get their texts
 * shaped by sharp and placed as images in the same layout; all others are drawn by `renderOg` directly.
 */
export async function renderCard(locale: Locale, card: CardTexts<string>) {
  const font = localeInfo[locale].cardFont;
  if (!font) return renderOg(card);
  const shaped = async (value: string, style: TextStyle) => {
    const s = await shapeText(value, font, style);
    return <img src={s.src} width={s.width} height={s.height} alt="" />;
  };
  const [badge, kicker, title, subtitle, ...footer] = await Promise.all([
    card.badge ? shaped(card.badge, { ...text.badge, color: card.badgeInk ?? "#FFFFFF" }) : undefined,
    shaped(card.kicker, text.kicker),
    shaped(card.title, text.title),
    shaped(card.subtitle, text.subtitle),
    ...(card.footer ?? []).map((f) => shaped(f, text.footer)),
  ]);
  return renderOg({ ...card, badge, kicker, title, subtitle, footer: footer.length ? footer : undefined });
}
