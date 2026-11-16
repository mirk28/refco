import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: `How ${site.name} earns money, which links are advertising and why this does not influence the facts we publish about crypto exchanges.`,
  alternates: { canonical: "/affiliate-disclosure" },
};

const toc: [string, string][] = [
  ["earn", "How we earn money"],
  ["advertising", "Which links are advertising"],
  ["independence", "What this does not affect"],
  ["who", "Who you deal with"],
  ["no-advice", "No financial advice"],
];

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout toc={toc}>
        <h1>Affiliate Disclosure</h1>
        <p className="lead">Transparency is the basis of trust. Here is exactly how {site.name} is financed.</p>

        <h2 id="earn">How we earn money</h2>
        <p>
          {site.name} takes part in the referral and affiliate programmes of the exchanges featured on this website. When you open an account through one
          of our links, the exchange may pay the operator of this website a commission – usually a share of the trading fees your account generates. You
          never pay more because of this: a referral does not raise your fees, and referral sign-ups often come with a fee discount or welcome reward for
          you. The commission is paid by the exchange, not by you.
        </p>

        <h2 id="advertising">Which links are advertising</h2>
        <p>
          Every link and button that leads to an exchange – for example &quot;Sign up on …&quot;, &quot;Sign up&quot; or &quot;Claim&quot; – and every
          referral code shown on this website is advertising: a commercial communication for that exchange, for which we may be paid. These links are
          marked with <code>rel=&quot;sponsored&quot;</code> in line with search-engine guidelines, and this disclosure is linked from every page.
        </p>

        <h2 id="independence">What this does not affect</h2>
        <ul>
          <li>Fees, leverage, licences, verification rules and country restrictions are taken from the exchanges&apos; own pages, market data from
            CoinMarketCap – not from marketing agreements. Every exchange page lists its sources.</li>
          <li>We publish weaknesses, security incidents and regional restrictions for every exchange.</li>
          <li>The order of exchanges follows their position in CoinMarketCap&apos;s derivatives ranking. No exchange can pay for a better position.</li>
          <li>Which exchange is &quot;ahead&quot; in a comparison is calculated from the published figures. It cannot be bought.</li>
        </ul>

        <h2 id="who">Who you deal with</h2>
        <p>
          {site.name} is an information website, not an exchange or a broker. It never receives or holds your money or crypto-assets. If you register,
          your contract is with the exchange alone, under the exchange&apos;s terms. Whether you may use an exchange depends on the country you live in –
          check its terms before you sign up.
        </p>

        <h2 id="no-advice">No financial advice</h2>
        <p>
          Nothing on this website is a recommendation to buy, sell or trade any asset, and it does not replace advice that takes your personal situation
          into account. Crypto derivatives are high-risk products: leverage multiplies gains and losses, and you can lose your entire deposit.
        </p>

        <p className="muted">
          The operator of this website is named in the <Link href="/imprint">imprint</Link>; how personal data is handled is explained in the{" "}
          <Link href="/privacy">privacy policy</Link>.
        </p>
      </LegalLayout>
  );
}
