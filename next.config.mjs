/** @type {import('next').NextConfig} */

// Strict security headers. No third-party scripts, fonts or trackers are loaded,
// which keeps the site fast and GDPR/revDSG-friendly (no cookie banner needed).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

// Head-to-head pages exist once per pair, in the order of `exchanges` in src/data/exchanges.ts
// (`/binance-vs-okx`). The reverse spelling (`/okx-vs-binance`) is redirected to it.
// Keep this list in the same order as that array.
const exchangeSlugs = ["binance", "okx", "bybit", "bitget", "gate", "kucoin", "mexc"];
const reverseVersus = exchangeSlugs.flatMap((a, i) =>
  exchangeSlugs.slice(i + 1).map((b) => ({ source: `/${b}-vs-${a}`, destination: `/${a}-vs-${b}`, permanent: true })),
);

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/logos/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      { source: "/go/:slug*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
  async redirects() {
    return [
      { source: "/impressum", destination: "/imprint", permanent: true },
      { source: "/datenschutz", destination: "/privacy", permanent: true },
      { source: "/comparisons", destination: "/compare", permanent: true },
      ...reverseVersus,
    ];
  },
};

export default nextConfig;
