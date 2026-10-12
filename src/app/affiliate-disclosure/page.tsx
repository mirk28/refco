import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: `How ${site.name} earns money and why it does not influence the facts we publish about crypto exchanges.`,
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="container">
      <article className="legal">
        <h1>Affiliate Disclosure</h1>
        <p className="lead">Transparency is the basis of trust. Here is exactly how {site.name} is financed.</p>

        <h2>How we earn money</h2>
        <p>
          {site.name} participates in the referral and affiliate programmes of the exchanges featured on this website. When you open an account through one
          of our links, the exchange may pay us a share of the trading fees your account generates. You never pay more because of this – referral sign-ups
          often come with a fee discount or welcome reward for you.
        </p>

        <h2>What this does not affect</h2>
        <ul>
          <li>Fees, leverage, licences and market data are taken from the exchanges and independent sources such as CoinMarketCap – not from marketing deals.</li>
          <li>We publish weaknesses, security incidents and regional restrictions for every exchange.</li>
          <li>The order of exchanges on the home page follows their position in CoinMarketCap&apos;s derivatives ranking.</li>
        </ul>

        <h2>Link labelling</h2>
        <p>
          Outbound links to exchanges are marked with <code>rel=&quot;sponsored&quot;</code> in line with search-engine guidelines.
        </p>

        <h2>No financial advice</h2>
        <p>
          Nothing on this website is a recommendation to buy, sell or trade any asset. Crypto derivatives are high-risk products. Please read our{" "}
          <Link href="/imprint">imprint</Link> and <Link href="/privacy">privacy policy</Link>.
        </p>
      </article>
    </div>
  );
}
