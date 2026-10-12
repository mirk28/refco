import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card renderer (1200×630), used by the home page and every exchange page. */
export function renderOg({
  kicker,
  title,
  subtitle,
  badge,
  badgeColor = "#1D4ED8",
  badgeInk = "#FFFFFF",
}: {
  kicker: string;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
  badgeInk?: string;
}) {
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
                  fontSize: 26,
                  fontWeight: 800,
                  padding: "8px 18px",
                  borderRadius: 12,
                }}
              >
                {badge}
              </div>
            ) : null}
            <div style={{ display: "flex", fontSize: 26, color: "#6EE7B7", fontWeight: 700 }}>{kicker}</div>
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#C4CFE0", maxWidth: 980 }}>{subtitle}</div>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#9FB0CC" }}>
          <span>Verified links</span>
          <span>·</span>
          <span>Fees and facts</span>
          <span>·</span>
          <span>No tracking</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
