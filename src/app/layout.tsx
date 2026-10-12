import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { Footer, Header } from "@/components/Layout";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Verified Crypto Exchange Referral Codes | ${site.domain}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "finance",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: `${site.name} – ${site.domain}`,
    title: `${site.name} – Verified Crypto Exchange Referral Codes`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Verified Crypto Exchange Referral Codes`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
