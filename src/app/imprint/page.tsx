import type { Metadata } from "next";
import { legal, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Imprint (Impressum)",
  description: `Legal notice and contact details of the operator of ${site.domain}.`,
  alternates: { canonical: "/imprint" },
  robots: { index: true, follow: true },
};

const V = ({ v }: { v: string }) => (v.startsWith("[") ? <span className="placeholder">{v}</span> : <>{v}</>);

export default function ImprintPage() {
  return (
    <div className="container">
      <article className="legal">
        <h1>Imprint (Impressum)</h1>
        <p className="muted">Information pursuant to Art. 3 para. 1 lit. s of the Swiss Unfair Competition Act (UWG) and § 5 of the German Digital Services Act (DDG).</p>

        <h2>Operator of this website</h2>
        <p>
          <V v={legal.operator} />
          <br />
          <V v={legal.street} />
          <br />
          <V v={legal.zipCity} />
          <br />
          <V v={legal.country} />
        </p>

        <h2>Represented by</h2>
        <p>
          <V v={legal.representative} />
        </p>

        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
          <br />
          Phone: <V v={legal.phone} />
        </p>

        <h2>Register entry and VAT</h2>
        <p>
          <V v={legal.registerEntry} />
          <br />
          <V v={legal.vatId} />
        </p>

        <h2>Responsible for content</h2>
        <p>
          <V v={legal.representative} />, address as above.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The content of this website has been prepared with care. However, we cannot guarantee that it is accurate, complete or up to date. Fees,
          leverage limits, bonuses and availability are set by the exchanges and may change at any time. Information on this website is not financial,
          investment, legal or tax advice. Trading cryptocurrencies and derivatives involves a high risk of loss.
        </p>

        <h2>Links to other websites</h2>
        <p>
          This website contains links to external websites over which we have no control. The respective provider is solely responsible for their content.
          Some outbound links are affiliate (referral) links – see our <a href="/affiliate-disclosure">affiliate disclosure</a>.
        </p>

        <h2>Trademarks and copyright</h2>
        <p>
          Exchange names and logos are trademarks of their respective owners and are used for identification purposes only. {site.name} is not affiliated
          with, endorsed by or sponsored by any of the exchanges featured. All original texts and graphics on this website are protected by copyright.
        </p>

        <h2>Online dispute resolution</h2>
        <p>
          We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      </article>
    </div>
  );
}
