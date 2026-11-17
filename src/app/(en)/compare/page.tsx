import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePath, opponentsOf, versusLabel, versusPairs, versusPath } from "@/data/versus";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { Breadcrumbs, ComparisonTable, FaqList } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Icons";
import { absoluteUrl, breadcrumbLd, faqLd, formatBn, graph, monthYear, pageListLd, prettyDate, shareImages, shortMonthYear } from "@/lib/seo";
import { joinList } from "@/lib/faqs";
import {
  addLater,
  altInfo,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  names,
  verb,
  withMica,
} from "@/lib/compare";

const title = `Crypto Exchange Comparisons (${shortMonthYear}): ${versusPairs.length} Head-to-Head Matchups`;
const description = `${joinList(exchanges.map((e) => e.name))} in pairs: ${versusPairs.length} head-to-head comparisons of fees, leverage, countries, KYC and referral codes – official data, checked ${monthYear}.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: comparePath },
  openGraph: { type: "website", title, description, url: comparePath, images: shareImages() },
  twitter: { card: "summary_large_image", title, description, images: shareImages() },
};

export default function ComparePage() {
  const ranked = [...exchanges].sort((a, b) => a.market.rank - b.market.rank);
  const date = prettyDate(site.lastReviewed);
  const marketDate = prettyDate(site.marketDataDate);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Exchange comparisons", path: comparePath },
  ];
  const lowF = lowestFutures(exchanges);
  const lowS = lowestSpot(exchanges);
  const hi = highestLeverage(exchanges);
  const oi = largestOpenInterest(exchanges);
  const mica = withMica(exchanges);
  const later = exchanges.filter((e) => addLater(e) !== "no");

  const answer = `${names(lowF)} ${verb(lowF, "has", "have")} the lowest standard futures fees (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} the highest leverage (${leverageOf(hi[0])}x) and ${names(oi)} the deepest derivatives market (${formatBn(oi[0].market.openInterestBn)} open interest). ${names(mica)} ${verb(mica, "names", "name")} a MiCA-authorised platform for EEA residents. Which exchange is better for you depends on the pair you are deciding between – pick it below.`;

  const faqs = [
    {
      q: "Which crypto exchange has the lowest fees?",
      a: `On the standard tier ${names(lowF)} ${verb(lowF, "has", "have")} the lowest futures fees with ${feePair(lowF[0].futuresFees)} (maker / taker), and ${names(lowS)} the lowest spot fees with ${feePair(lowS[0].spotFees)}. The other exchanges: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} on futures and ${feePair(e.spotFees)} on spot`)
        .join("; ")}. VIP levels and exchange tokens lower these rates further.`,
    },
    {
      q: "Which crypto exchange offers the highest leverage?",
      a: `${names(hi)}: ${hi[0].maxLeverage.replace(/^Up to/, "up to")}. The others: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. High leverage sharply increases the risk of liquidation.`,
    },
    {
      q: "Which crypto exchange has the deepest futures market?",
      a: `Measured by open interest on CoinMarketCap's derivatives ranking (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. A deeper market usually means tighter spreads on large orders.`,
    },
    {
      q: "Which exchanges have a MiCA-authorised platform for the EEA?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(exchanges.filter((e) => !altInfo(e).mica))} name no MiCA-authorised entity on their own pages. A regional platform usually has its own product range, fees and limits.`,
    },
    {
      q: "Which exchanges let me add a referral code after signing up?",
      a: `${later.map((e) => `${e.name}: ${e.referral.afterSignupShort.charAt(0).toLowerCase()}${e.referral.afterSignupShort.slice(1)}`).join(". ")}. On ${names(exchanges.filter((e) => addLater(e) === "no"))} the code only counts at registration or no way to add it later is documented – the safe way everywhere is to register through the referral link.`,
    },
    {
      q: "How are these comparisons made?",
      a: `Every figure is read on the exchange's own website or help centre – fee schedules, terms, restricted-country lists, product pages – and each page lists its sources. Open interest, volume and the number of derivatives markets come from CoinMarketCap's derivatives ranking. Which exchange is ahead on a point is read off those figures; there is no ranking of our own. The current review date is ${date}.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "CollectionPage",
            "@id": `${absoluteUrl(comparePath)}#webpage`,
            url: absoluteUrl(comparePath),
            name: title,
            description,
            inLanguage: site.language,
            isPartOf: { "@id": absoluteUrl("/#website") },
            dateModified: site.lastReviewed,
            mainEntity: { "@id": absoluteUrl(`${comparePath}#comparisons`) },
          },
          breadcrumbLd(crumbs),
          pageListLd(
            `${comparePath}#comparisons`,
            "Crypto exchange head-to-head comparisons",
            versusPairs.map((p) => ({ name: versusLabel(p.a, p.b), path: versusPath(p.a, p.b) })),
          ),
          faqLd(faqs),
        )}
      />

      <section className="lp-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div style={{ padding: "18px 0 48px", maxWidth: 860 }}>
            <span className="updated">
              <span className="dot" aria-hidden="true" /> Checked and updated {date}
            </span>
            <h1 style={{ margin: "14px 0", fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)" }}>
              Crypto exchange comparisons: {versusPairs.length} head-to-head matchups <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
            </h1>
            <p className="lead" style={{ maxWidth: 820 }}>
              {exchanges.length} exchanges, every pair compared on the same points: fees, leverage, market depth, products, country availability,
              identity verification, regulation and referral offers. Each comparison uses the figures from the exchanges&apos; own sites.
            </p>
            <div className="answer">
              <strong>Quick answer</strong>
              <p>{answer}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <article className="prose prose-wide">
            <section id="comparisons" aria-labelledby="h-comparisons">
              <h2 id="h-comparisons">Pick two exchanges to compare</h2>
              <p>
                Each box lists one exchange against the other {exchanges.length - 1}. Every pair has one page, so &quot;Binance vs OKX&quot; and &quot;OKX
                vs Binance&quot; lead to the same comparison.
              </p>
              <div className="grid grid-3">
                {ranked.map((e) => (
                  <article key={e.slug} className="card hub-card" id={e.slug}>
                    <div className="x-card-head">
                      <ExchangeLogo exchange={e} size={44} />
                      <div>
                        <h3>{e.name}</h3>
                        <p>{altInfo(e).role}</p>
                      </div>
                    </div>
                    <ul className="hub-links">
                      {opponentsOf(e).map((o) => (
                        <li key={o.slug}>
                          <Link href={versusPath(e, o)}>{versusLabel(e, o)}</Link>
                        </li>
                      ))}
                    </ul>
                    <p className="small" style={{ margin: 0 }}>
                      <Link href={alternativesPath(e.slug)}>{e.name} alternatives</Link> · <Link href={exchangePath(e.slug)}>{e.name} referral code</Link>
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="table" aria-labelledby="h-table">
              <h2 id="h-table">All {exchanges.length} exchanges side by side</h2>
              <p>New-user offers, standard (non-VIP) fees, leverage and market depth of every exchange in one table.</p>
              <ComparisonTable list={ranked} />
              <p className="small muted" style={{ marginTop: 12 }}>
                Fees: standard tier as published by each exchange, checked {date}. Open interest and markets: CoinMarketCap, {marketDate}.
              </p>
            </section>

            <section id="alternatives" aria-labelledby="h-alternatives">
              <h2 id="h-alternatives">One exchange against all others</h2>
              <p>
                Not deciding between two, but looking for a replacement? The alternatives pages measure one exchange against the other{" "}
                {exchanges.length - 1} at once and show which of them accept your country.
              </p>
              <ul className="chips">
                {ranked.map((e) => (
                  <li key={e.slug}>
                    <Link href={alternativesPath(e.slug)}>{e.name} alternatives</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">Exchange comparisons – FAQ</h2>
              <div className="faq-group">
                <FaqList faqs={faqs} />
              </div>
            </section>
          </article>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Decided? Sign up with a referral code</h2>
              <p>Verified codes for all {exchanges.length} exchanges – one account for spot and futures, at no extra cost.</p>
            </div>
            <Link href="/#exchanges" className="btn btn-primary btn-lg">
              See all referral codes <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
