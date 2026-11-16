import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbLd, graph, organizationLd, prettyDate } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About RefCo & Our Methodology",
  description: `Who runs ${site.domain}, where our data comes from and how we review crypto exchanges.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container">
      <JsonLd
        data={graph(
          { "@type": "AboutPage", url: absoluteUrl("/about"), name: "About RefCo", about: { "@id": absoluteUrl("/#organization") } },
          organizationLd(),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <article className="legal">
        <span className="eyebrow">About</span>
        <h1>About {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) helps traders sign up on the right crypto derivatives exchange – with a working referral and the facts that matter
          before you deposit.
        </p>

        <h2>What we do</h2>
        <p>
          We focus on the largest exchanges in CoinMarketCap&apos;s derivatives ranking and publish one page per exchange with the same structure: a quick
          answer, key facts, fees, an honest description, pros and cons, safety notes, availability and a FAQ. That makes exchanges easy to compare.
        </p>

        <h2>Our methodology</h2>
        <ul>
          <li>
            <strong>Market data</strong> (open interest, 24h volume, number of markets) comes from CoinMarketCap&apos;s derivatives ranking and is dated on every
            page.
          </li>
          <li>
            <strong>Referral codes, registration and verification</strong> – where the code goes, whether it can be added later, the sign-up steps and
            the KYC rules – are read on each exchange&apos;s own website and help centre. Every exchange page lists the official pages it was checked
            against.
          </li>
          <li>
            <strong>Fees and leverage</strong> are taken from each exchange&apos;s official fee schedule for the standard (non-VIP) tier.
          </li>
          <li>
            <strong>Welcome offers</strong> are quoted as the exchange states them, with their conditions. They differ by country and change often.
          </li>
          <li>
            <strong>Licences and incidents</strong> are taken from the exchange&apos;s own licence pages and official statements.
          </li>
          <li>
            <strong>Exchange comparisons</strong> – the &quot;alternatives&quot; pages – use the same figures as the exchange pages. Products are
            marked as offered only when the exchange shows them on its own site, and country availability is taken from each exchange&apos;s own
            terms, restricted-country lists and regional sites. Which exchange is &quot;ahead&quot; on a point is read off those figures, not
            ranked by us.
          </li>
          <li>
            <strong>Review cycle:</strong> data is re-checked regularly; the current review date is {prettyDate(site.lastReviewed)}.
          </li>
        </ul>

        <h2>Independence</h2>
        <p>
          We earn referral commissions from the exchanges we list – details in our <Link href="/affiliate-disclosure">affiliate disclosure</Link>. That
          never changes the facts we publish, and we always mention weaknesses and restrictions.
        </p>

        <h2>Contact</h2>
        <p>
          Spotted outdated information? Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – we correct errors quickly.
        </p>
      </article>
    </div>
  );
}
