/** @type {import('next').NextConfig} */

// Strict security headers. No third-party scripts, fonts or trackers are loaded,
// which keeps the site fast and GDPR/revDSG-friendly (no cookie banner needed).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    // Every browser feature the site does not use is switched off. `clipboard-write` is left at its
    // default because the "Copy" button for referral codes needs it.
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=()",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "payment=()",
      "picture-in-picture=()",
      "publickey-credentials-get=()",
      "screen-wake-lock=()",
      "usb=()",
      "xr-spatial-tracking=()",
      "browsing-topics=()",
    ].join(", "),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Isolation from other origins: no other site can open this one in a shared browsing context,
  // embed its files or be embedded without opting in.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "Origin-Agent-Cluster", value: "?1" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // The legacy XSS filter of old browsers is switched off on purpose (it created holes of its own);
  // the Content-Security-Policy below is the protection.
  { key: "X-XSS-Protection", value: "0" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "media-src 'self'",
      "manifest-src 'self'",
      "worker-src 'self'",
      "object-src 'none'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

// Images that other sites and apps show in link previews must be loadable from elsewhere.
const shareableImage = [{ key: "Cross-Origin-Resource-Policy", value: "cross-origin" }];

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
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }, ...shareableImage],
      },
      { source: "/opengraph-image", headers: shareableImage },
      { source: "/:slug/opengraph-image", headers: shareableImage },
      { source: "/icon.svg", headers: shareableImage },
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
