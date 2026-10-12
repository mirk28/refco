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
            <strong>Fees and leverage</strong> are taken from each exchange&apos;s official fee schedule for the standard (non-VIP) tier.
          </li>
          <li>
            <strong>Licences and incidents</strong> are based on official announcements and reputable news coverage.
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
