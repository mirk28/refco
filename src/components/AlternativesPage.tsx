import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange, Source } from "@/data/exchanges";
import { exchangePath } from "@/data/exchanges";
import { alternativesPath, countryList, countryStatusLabel, featureList } from "@/data/alternatives";
import { comparePath, versusLabel, versusPath } from "@/data/versus";
import type { CountryStatus } from "@/data/alternatives";
import { ExchangeLogo } from "./ExchangeLogo";
import { Breadcrumbs, CtaLink, FaqList } from "./Blocks";
import { CopyCode } from "./CopyCode";
import { JsonLd } from "./JsonLd";
import { ArrowIcon, CheckIcon, MinusIcon } from "./Icons";
import {
  alternativesListLd,
  alternativesPageLd,
  breadcrumbLd,
  faqLd,
  formatBn,
  graph,
  monthYear,
  prettyDate,
  shortMonthYear,
  switchHowToLd,
} from "@/lib/seo";
import { joinList } from "@/lib/faqs";
import {
  addLater,
  advantages,
  alternativesTo,
  altInfo,
  buildAlternativesFaqs,
  countryAnswer,
  feePair,
  feeSentence,
  feeSummary,
  highestLeverage,
  largestOpenInterest,
  lowestFutures,
  lowestSpot,
  mostMarkets,
  quickAnswer,
  shortLeverage,
  switchSteps,
  withFeature,
  withMica,
} from "@/lib/compare";

const titleFor = (x: Exchange, n: number) => `${x.name} Alternatives (${shortMonthYear}): ${n} Exchanges Compared`;
const descFor = (x: Exchange, alts: Exchange[]) =>
  `${joinList(alts.map((a) => a.name))}: ${alts.length} ${x.name}${altInfo(x).formerName ? ` (${altInfo(x).formerName})` : ""} alternatives compared by fees, leverage, KYC, countries and referral codes – official data, checked ${monthYear}.`;

export function alternativesMetadata(x: Exchange): Metadata {
  const alts = alternativesTo(x);
  const title = titleFor(x, alts.length);
  const description = descFor(x, alts);
  const path = alternativesPath(x.slug);
  const former = altInfo(x).formerName;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `${x.name} alternatives`,
      `${x.name} alternative`,
      `exchanges like ${x.name}`,
      `best ${x.name} alternatives`,
      `${x.name} competitors`,
      `${x.name} alternative lower fees`,
      `${x.name} alternative without KYC`,
      ...(former ? [`${former} alternatives`, `${former} alternative`] : []),
      ...alts.map((a) => `${a.name} vs ${x.name}`),
    ],
    alternates: { canonical: path },
    openGraph: { type: "article", title, description, url: path, modifiedTime: site.lastReviewed },
    twitter: { title, description },
  };
}

export function Mark({ has }: { has: boolean | null }) {
  if (has === true)
    return (
      <span className="mark">
        <CheckIcon /> <span className="sr-only">Yes</span>
      </span>
    );
  if (has === false)
    return (
      <span className="mark">
        <MinusIcon /> <span className="sr-only">No</span>
      </span>
    );
  return (
    <span className="mark mark-none">
      <span aria-hidden="true">–</span> <span className="sr-only">Not found on its site</span>
    </span>
  );
}

export const StatusPill = ({ status }: { status: CountryStatus }) => <span className={`pill pill-${status}`}>{countryStatusLabel[status]}</span>;

/** Column header of a matrix table: logo above the exchange name. */
const ColHead = ({ e, focus }: { e: Exchange; focus?: boolean }) => (
  <th scope="col" className={focus ? "is-focus-col" : undefined}>
    <span className="col-x">
      <ExchangeLogo exchange={e} size={30} />
      {e.name}
    </span>
  </th>
);

const AnchorList = ({ list }: { list: Exchange[] }) =>
  list.length ? (
    <>
      {list.map((a, i) => (
        <span key={a.slug}>
          {i > 0 ? (i === list.length - 1 ? " and " : ", ") : null}
          <a href={`#${a.slug}`}>{a.name}</a>
        </span>
      ))}
    </>
  ) : (
    <span className="muted">None of them</span>
  );

export function AlternativesPage({ exchange: x }: { exchange: Exchange }) {
  const alts = alternativesTo(x);
  const n = alts.length;
  const all = [x, ...alts];
  const info = altInfo(x);
  const path = alternativesPath(x.slug);
  const title = titleFor(x, n);
  const description = descFor(x, alts);
  const date = prettyDate(site.lastReviewed);
  const marketDate = prettyDate(site.marketDataDate);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `${x.name} referral code`, path: exchangePath(x.slug) },
    { name: `${x.name} alternatives`, path },
  ];

  const answer = quickAnswer(x, alts);
  const steps = switchSteps(x, alts);
  const faqGroups = buildAlternativesFaqs(x, alts);
  const faqs = faqGroups.flatMap((g) => g.faqs);

  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const mm = mostMarkets(alts);
  const mica = withMica(alts);
  const later = alts.filter((a) => addLater(a) !== "no");
  const featureNeed = (key: Parameters<typeof withFeature>[1], need: string) => {
    const who = withFeature(alts, key);
    return { need, who, why: "Shown on the exchange's own site – what exactly is offered is listed under Products" };
  };
  const needs: { need: string; who: Exchange[]; why: string }[] = [
    { need: "Lowest futures fees", who: lowF, why: `${feePair(lowF[0].futuresFees)} maker / taker on the standard tier` },
    { need: "Lowest spot fees", who: lowS, why: `${feePair(lowS[0].spotFees)} maker / taker on the standard tier` },
    { need: "Highest leverage", who: hi, why: hi[0].maxLeverage },
    { need: "Deepest derivatives market", who: oi, why: `${formatBn(oi[0].market.openInterestBn)} open interest (CoinMarketCap, ${marketDate})` },
    { need: "Most derivatives markets", who: mm, why: `${mm[0].market.markets} markets (CoinMarketCap, ${marketDate})` },
    featureNeed("copyTrading", "Copy trading"),
    featureNeed("tradingBots", "Trading bots"),
    featureNeed("options", "Options"),
    featureNeed("demoTrading", "Demo trading"),
    { need: "MiCA-authorised platform for the EEA", who: mica, why: mica.map((a) => `${a.name}: ${altInfo(a).mica}`).join(" · ") },
    { need: "Referral code can be added after sign-up", who: later, why: later.map((a) => `${a.name}: ${a.referral.afterSignupShort}`).join(" · ") },
  ];

  const restrictedAtHome = countryList.filter((c) => info.countries[c.key].status === "restricted" || info.countries[c.key].status === "partial");

  // Full list for the exchange the page is about; for the others the pages checked for this comparison,
  // with a link to the complete list on their own referral-code page.
  const sourceGroups: { e: Exchange; list: Source[] }[] = all.map((e) => {
    const seen = new Set<string>();
    const list = e === x ? [...altInfo(e).sources, ...e.sources] : altInfo(e).sources;
    return { e, list: list.filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true))) };
  });
  const citations = sourceGroups.flatMap((g) => g.list);

  const toc: [string, string][] = [
    ["at-a-glance", "At a glance"],
    ["why", `Why switch from ${x.name}?`],
    ["alternatives", `The ${n} alternatives`],
    ["by-need", "Best for each need"],
    ["fees", "Fees"],
    ["products", "Products"],
    ["countries", "Countries"],
    ["kyc", "Verification (KYC)"],
    ["safety", "Regulation & reserves"],
    ["referral-codes", "Referral codes"],
    ["switch", "How to switch"],
    ["faq", "FAQ"],
    ["sources", "Sources"],
  ];

  return (
    <>
      <JsonLd
        data={graph(
          alternativesPageLd(x, alts, path, title, description, citations),
          breadcrumbLd(crumbs),
          alternativesListLd(x, alts, path, Object.fromEntries(alts.map((a) => [a.slug, altInfo(a).pitch]))),
          switchHowToLd(x, path, steps),
          faqLd(faqs),
        )}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="lp-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="lp-hero-inner">
            <div>
              <span className="updated">
                <span className="dot" aria-hidden="true" /> Checked and updated {date}
              </span>
              <div className="lp-title-row">
                <ExchangeLogo exchange={x} size={60} />
                <h1>
                  {x.name} Alternatives: {n} Exchanges Compared <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">{info.intro}</p>
              <div className="answer">
                <strong>Quick answer</strong>
                <p>{answer}</p>
              </div>
              <ul className="chips" style={{ marginTop: 18 }} aria-label="What is compared">
                <li>{n} exchanges</li>
                <li>Fees &amp; leverage</li>
                <li>{featureList.length} products</li>
                <li>{countryList.length} countries</li>
                <li>KYC &amp; regulation</li>
                <li>Referral codes</li>
              </ul>
            </div>

            <aside className="code-card" aria-labelledby="top-list">
              <h2 id="top-list">{x.name} alternatives at a glance</h2>
              <p className="small muted" style={{ margin: 0 }}>
                What each one is best for, with its standard futures fees (maker / taker).
              </p>
              <ol className="rank-list">
                {alts.map((a) => (
                  <li key={a.slug}>
                    <a href={`#${a.slug}`}>
                      <ExchangeLogo exchange={a} size={36} />
                      <span className="rank-name">
                        <strong>{a.name}</strong>
                        <span>{altInfo(a).role}</span>
                      </span>
                      <span className="rank-fee num">{feePair(a.futuresFees)}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="small muted" style={{ margin: "14px 0 0" }}>
                Order: CoinMarketCap derivatives ranking, {marketDate}. Leveraged trading is high-risk.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- Body ---------------- */}
      <div className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <nav className="toc-inline" aria-label="On this page">
            <strong>On this page</strong>
            <ol>
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="prose prose-wide">
            <section id="at-a-glance" aria-labelledby="h-glance">
              <h2 id="h-glance">
                {x.name} alternatives compared ({monthYear})
              </h2>
              <p>
                The {n} alternatives next to {x.name} itself. Fees are the standard (non-VIP) rates each exchange publishes, shown as maker / taker;
                leverage is the maximum it documents; the referral code is the one you can use to sign up. Every figure was read on the
                exchange&apos;s own site on {date}.
              </p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">
                    {x.name} and {n} alternatives: what each is best for, fees, leverage and referral code
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Exchange</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Futures fees</th>
                      <th scope="col">Spot fees</th>
                      <th scope="col">Max leverage</th>
                      <th scope="col">Referral code</th>
                      <th scope="col">
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">
                          <span className="cell-x">
                            <ExchangeLogo exchange={e} size={32} />
                            {e === x ? <Link href={exchangePath(e.slug)}>{e.name}</Link> : <a href={`#${e.slug}`}>{e.name}</a>}
                            {e === x ? <span className="tag">for comparison</span> : null}
                          </span>
                        </th>
                        <td className="wrap">{altInfo(e).role}</td>
                        <td className="num">{feePair(e.futuresFees)}</td>
                        <td className="num">{feePair(e.spotFees)}</td>
                        <td>{shortLeverage(e)}</td>
                        <td>
                          <Link href={exchangePath(e.slug)} className="code-link">
                            {e.referralCode}
                          </Link>
                        </td>
                        <td>
                          <CtaLink exchange={e} className="btn btn-primary btn-sm">
                            Sign up
                          </CtaLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Order of the alternatives: CoinMarketCap derivatives ranking, {marketDate}.
              </p>
            </section>

            <section id="why" aria-labelledby="h-why">
              <h2 id="h-why">Why look for an alternative to {x.name}?</h2>
              <p>
                These are the points on which {x.name} itself sets limits – each taken from {x.name}&apos;s own pages (see the{" "}
                <Link href={`${exchangePath(x.slug)}#sources`}>source list on our {x.name} page</Link>). If none of them affects you, staying is a perfectly
                good choice.
              </p>
              <div className="grid grid-2">
                {info.reasons.map((r) => (
                  <div key={r.title} className="card" style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1.02rem" }}>{r.title}</h3>
                    <p className="small" style={{ margin: 0 }}>
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
              <h3 style={{ marginTop: 28 }}>When {x.name} is still the right choice</h3>
              <ul className="ticks">
                {info.stayIf.map((s) => (
                  <li key={s}>
                    <CheckIcon /> <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p>
                Decided to stay? Our <Link href={exchangePath(x.slug)}>{x.name} referral code page</Link> has the code {x.referralCode}, the sign-up steps
                and the current new-user offer.
              </p>
            </section>

            <section id="alternatives" aria-labelledby="h-alts">
              <h2 id="h-alts">
                The {n} best {x.name} alternatives in detail
              </h2>
              <p>
                Each alternative is measured against {x.name} on the same points: fees, leverage, market size, verification, referral rules, products
                and the countries it accepts. &quot;Ahead&quot; only lists differences that can be read off the exchanges&apos; own figures.
              </p>
              {alts.map((a, i) => {
                const ai = altInfo(a);
                const ahead = advantages(a, x);
                const behind = advantages(x, a);
                const rows: [string, React.ReactNode, React.ReactNode][] = [
                  ["Futures fees (maker / taker)", feePair(a.futuresFees), feePair(x.futuresFees)],
                  ["Spot fees (maker / taker)", feePair(a.spotFees), feePair(x.spotFees)],
                  ["Max leverage", a.maxLeverage, x.maxLeverage],
                  ["Listed assets", a.assets, x.assets],
                  ["Derivatives open interest", formatBn(a.market.openInterestBn), formatBn(x.market.openInterestBn)],
                  ["Users", a.users, x.users],
                  ["Founded", a.founded, x.founded],
                  ["Identity verification", a.signup.kycShort, x.signup.kycShort],
                  ["Add referral code later?", a.referral.afterSignupShort, x.referral.afterSignupShort],
                  ["New-user offer", a.feeDiscount || a.bonusHeadline, x.feeDiscount || x.bonusHeadline],
                ];
                return (
                  <article key={a.slug} id={a.slug} className="card alt-card" aria-labelledby={`h-${a.slug}`}>
                    <div className="alt-head">
                      <ExchangeLogo exchange={a} size={52} />
                      <div>
                        <span className="role-tag">Best for: {ai.role}</span>
                        <h3 id={`h-${a.slug}`}>
                          {i + 1}. {a.name} <span className="muted">as a {x.name} alternative</span>
                        </h3>
                      </div>
                    </div>
                    <div className="alt-body">
                      <div>
                        <p>{ai.pitch}</p>
                        <p>
                          {feeSentence(a, x, "futures")} {feeSentence(a, x, "spot")}
                        </p>
                        <h4>
                          Choose {a.name} instead of {x.name} if …
                        </h4>
                        <ul className="ticks">
                          {ai.chooseIf.map((c) => (
                            <li key={c}>
                              <CheckIcon /> <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                        <h4>Think twice if …</h4>
                        <ul className="ticks">
                          {ai.thinkTwiceIf.map((c) => (
                            <li key={c}>
                              <MinusIcon /> <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>
                          Where {a.name} is ahead of {x.name}
                        </h4>
                        {ahead.length ? (
                          <ul className="ticks">
                            {ahead.map((c) => (
                              <li key={c}>
                                <CheckIcon /> <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="small muted">No measurable advantage on the points we compare.</p>
                        )}
                        <h4>Where {x.name} is ahead</h4>
                        {behind.length ? (
                          <ul className="ticks">
                            {behind.map((c) => (
                              <li key={c}>
                                <MinusIcon /> <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="small muted">No measurable advantage on the points we compare.</p>
                        )}
                        <div className="alt-cta">
                          <div className="code-box">
                            <span className="code-value" aria-label={`${a.name} referral code`}>
                              {a.referralCode}
                            </span>
                            <CopyCode code={a.referralCode} />
                          </div>
                          <CtaLink exchange={a} className="btn btn-primary">
                            Sign up on {a.name}
                          </CtaLink>
                        </div>
                        <p className="small" style={{ margin: "14px 0 0" }}>
                          <Link href={exchangePath(a.slug)}>
                            {a.name} referral code {a.referralCode}: offer, sign-up steps and KYC
                          </Link>{" "}
                          ·{" "}
                          <Link href={versusPath(a, x)}>
                            {a.name} vs {x.name}: full head-to-head comparison
                          </Link>{" "}
                          ·{" "}
                          <Link href={alternativesPath(a.slug)}>{a.name} alternatives</Link>
                        </p>
                      </div>
                    </div>
                    <details className="vs-details">
                      <summary>
                        {a.name} vs {x.name}: all figures side by side
                      </summary>
                      <div className="table-wrap">
                        <table className="kv vs">
                          <caption className="sr-only">
                            {a.name} vs {x.name}: fees, leverage, assets, verification and referral rules
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                {a.name} vs {x.name}
                              </th>
                              <th scope="col">{a.name}</th>
                              <th scope="col">{x.name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map(([k, va, vx]) => (
                              <tr key={k}>
                                <th scope="row">{k}</th>
                                <td>{va}</td>
                                <td>{vx}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </details>
                  </article>
                );
              })}
            </section>

            <section id="by-need" aria-labelledby="h-need">
              <h2 id="h-need">The best {x.name} alternative for each need</h2>
              <p>
                Which of the {n} comes out on top depends on what you are looking for. The table answers it per need – from the numbers, without a
                ranking of our own.
              </p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">Best {x.name} alternative by need</caption>
                  <thead>
                    <tr>
                      <th scope="col">If you want …</th>
                      <th scope="col">Look at</th>
                      <th scope="col">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {needs.map((r) => (
                      <tr key={r.need}>
                        <th scope="row">{r.need}</th>
                        <td>
                          <AnchorList list={r.who} />
                        </td>
                        <td>{r.who.length ? r.why : `Not found on the sites of the ${n} alternatives at our check.`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="fees" aria-labelledby="h-fees">
              <h2 id="h-fees">Fees: {x.name} vs. its alternatives</h2>
              <p>
                All seven exchanges use a maker/taker model: limit orders that add liquidity pay the maker fee, orders that take liquidity pay the
                taker fee. The table shows the standard tier – the rates a new account pays before any VIP level or token discount.
              </p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">Standard spot and futures fees of {x.name} and its alternatives</caption>
                  <thead>
                    <tr>
                      <th scope="col">Exchange</th>
                      <th scope="col">Futures maker</th>
                      <th scope="col">Futures taker</th>
                      <th scope="col">Spot maker</th>
                      <th scope="col">Spot taker</th>
                      <th scope="col">Other markets (maker / taker)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">
                          <span className="cell-x">
                            <ExchangeLogo exchange={e} size={28} />
                            {e.name}
                          </span>
                        </th>
                        <td className="num">{e.futuresFees.maker}</td>
                        <td className="num">{e.futuresFees.taker}</td>
                        <td className="num">{e.spotFees.maker}</td>
                        <td className="num">{e.spotFees.taker}</td>
                        <td className="wrap small">{e.extraFees.map((f) => `${f.market}: ${f.maker} / ${f.taker}`).join(" · ") || "–"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Standard (non-VIP) rates as published by each exchange, checked {date}. Fees change – confirm on the exchange before trading.
              </p>
              <h3 style={{ marginTop: 26 }}>Who is cheaper than {x.name}?</h3>
              <p>{feeSummary(x, alts, "futures")}</p>
              <p>{feeSummary(x, alts, "spot")}</p>
              <h3>Token discounts and fine print</h3>
              <ul className="deflist">
                {all.map((e) => (
                  <li key={e.slug}>
                    <strong>{e.name}:</strong> {e.tokenDiscount || "No discount for paying fees with an exchange token is published."} {e.feeNote}
                  </li>
                ))}
              </ul>
            </section>

            <section id="products" aria-labelledby="h-products">
              <h2 id="h-products">Products: what each exchange offers</h2>
              <p>
                A tick means the exchange shows the product on its own site. A dash means we found no page for it there on {date} – it does not prove
                that the product does not exist. What is offered can differ by country, especially on regional platforms.
              </p>
              <div className="table-wrap">
                <table className="matrix">
                  <caption className="sr-only">Products offered by {x.name} and its alternatives</caption>
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      {all.map((e) => (
                        <ColHead key={e.slug} e={e} focus={e === x} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureList.map((f) => (
                      <tr key={f.key}>
                        <th scope="row">{f.label}</th>
                        {all.map((e) => (
                          <td key={e.slug} className={e === x ? "is-focus-col" : undefined}>
                            <Mark has={altInfo(e).features[f.key].has} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 style={{ marginTop: 26 }}>Product details per exchange</h3>
              <div className="faq src-group">
                {all.map((e) => (
                  <details key={e.slug}>
                    <summary>{e.name}: products in detail</summary>
                    <div className="faq-a">
                      <ul>
                        {featureList.map((f) => {
                          const fi = altInfo(e).features[f.key];
                          return (
                            <li key={f.key}>
                              <strong>{f.label}:</strong>{" "}
                              {fi.note || (fi.has === true ? "Offered" : fi.has === false ? "Not offered" : "No page found on the exchange's own site")}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="countries" aria-labelledby="h-countries">
              <h2 id="h-countries">Availability: {x.name} and its alternatives by country</h2>
              <p>
                Where you live is the most common reason to need an alternative. The table shows, for {countryList.length} countries, what each
                exchange&apos;s own terms say. &quot;Regional site&quot; means the exchange serves the country through a separate platform with its own
                products, fees and limits.
              </p>
              <div className="table-wrap">
                <table className="matrix">
                  <caption className="sr-only">Country availability of {x.name} and its alternatives</caption>
                  <thead>
                    <tr>
                      <th scope="col">Country</th>
                      {all.map((e) => (
                        <ColHead key={e.slug} e={e} focus={e === x} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {countryList.map((c) => (
                      <tr key={c.key}>
                        <th scope="row">{c.short}</th>
                        {all.map((e) => (
                          <td key={e.slug} className={e === x ? "is-focus-col" : undefined}>
                            <StatusPill status={altInfo(e).countries[c.key].status} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="legend">
                <li>
                  <StatusPill status="restricted" /> closed to residents according to the exchange&apos;s own terms or notices
                </li>
                <li>
                  <StatusPill status="regional" /> served by a separate regional platform
                </li>
                <li>
                  <StatusPill status="partial" /> only some products or regions
                </li>
                <li>
                  <StatusPill status="open" /> not on the restricted list on {date}
                </li>
              </ul>
              <p className="small muted" style={{ marginTop: 10 }}>
                &quot;Not restricted&quot; is no guarantee that every product is offered in that country. The exchange&apos;s terms at the moment you
                register are the ones that apply, and all of these exchanges forbid getting around a restriction with a VPN or false details.
              </p>

              {restrictedAtHome.map((c) => (
                <div key={c.key}>
                  <h3 style={{ marginTop: 26 }}>
                    {x.name} alternatives in {c.name}
                  </h3>
                  <p>{countryAnswer(x, alts, c)}</p>
                </div>
              ))}

              <h3 style={{ marginTop: 26 }}>Restricted countries and regional platforms per exchange</h3>
              <div className="faq src-group">
                {all.map((e) => (
                  <details key={e.slug}>
                    <summary>Where is {e.name} not available?</summary>
                    <div className="faq-a">
                      <p>{e.restricted}</p>
                      {altInfo(e).regional ? (
                        <p style={{ marginTop: 10 }}>
                          <strong>Regional platforms:</strong> {altInfo(e).regional}
                        </p>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="kyc" aria-labelledby="h-kyc">
              <h2 id="h-kyc">Verification: is there a {x.name} alternative without KYC?</h2>
              <p>
                Not among these {n}. Every exchange in this comparison asks new users for identity verification, and on most of them deposits or
                trading stay locked until it is done. The differences are in what an unverified account can still do.
              </p>
              <div className="table-wrap">
                <table className="kv">
                  <caption className="sr-only">Identity verification on {x.name} and its alternatives</caption>
                  <thead>
                    <tr>
                      <th scope="col">Exchange</th>
                      <th scope="col">Identity verification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">{e.name}</th>
                        <td>{e.signup.kycShort}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 style={{ marginTop: 26 }}>What each exchange says about verification</h3>
              <div className="faq src-group">
                {all.map((e) => (
                  <details key={e.slug}>
                    <summary>Do I need identity verification (KYC) on {e.name}?</summary>
                    <div className="faq-a">
                      <p>{e.signup.kyc}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">Regulation, proof of reserves and protection funds</h2>
              <p>
                No centralised exchange is risk-free. What can be compared is what each one publishes about itself: where it is licensed, whether it
                proves its reserves and whether it keeps a fund for emergencies.
              </p>
              <div className="table-wrap">
                <table className="kv wide wider">
                  <caption className="sr-only">Regulation, proof of reserves and protection funds of {x.name} and its alternatives</caption>
                  <thead>
                    <tr>
                      <th scope="col">Exchange</th>
                      <th scope="col">Licences named by the exchange</th>
                      <th scope="col">Proof of reserves</th>
                      <th scope="col">Protection fund</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">{e.name}</th>
                        <td>{e.regulation}</td>
                        <td>{altInfo(e).reserves}</td>
                        <td>{altInfo(e).fund || "None named"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Reserve ratios are the exchanges&apos; own figures from the snapshot dates given. Only keep funds on an exchange that you actively trade
                with.
              </p>
            </section>

            <section id="referral-codes" aria-labelledby="h-codes">
              <h2 id="h-codes">Referral codes for the {x.name} alternatives</h2>
              <p>
                If you open an account on one of the alternatives, do it with a referral code: it costs nothing, never raises your fees and unlocks the
                exchange&apos;s new-user offer. The last column matters most – on several exchanges a forgotten code cannot be added afterwards.
              </p>
              <div className="table-wrap">
                <table className="kv wide wider">
                  <caption className="sr-only">Referral codes of {x.name} and its alternatives</caption>
                  <thead>
                    <tr>
                      <th scope="col">Exchange</th>
                      <th scope="col">Referral code</th>
                      <th scope="col">New-user offer</th>
                      <th scope="col">Where the code goes</th>
                      <th scope="col">Can it be added later?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">
                          <Link href={exchangePath(e.slug)}>{e.name} referral code</Link>
                        </th>
                        <td>
                          <strong>{e.referralCode}</strong>
                        </td>
                        <td>{e.feeDiscount || e.bonusHeadline}</td>
                        <td>{e.referral.whereShort}</td>
                        <td>{e.referral.afterSignupShort}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Offers checked {date}. Welcome rewards are task-based, require identity verification and differ by country.
              </p>
            </section>

            <section id="switch" aria-labelledby="h-switch">
              <h2 id="h-switch">How to switch from {x.name} to another exchange</h2>
              <p>
                Moving is less work than it sounds, as long as you keep the order: account first, verification second, funds last.
              </p>
              <ol className="how">
                {steps.map((s) => (
                  <li key={s.title}>
                    <div>
                      <strong>{s.title}</strong>
                      {s.text}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">{x.name} alternatives – FAQ</h2>
              <p>
                {faqs.length} questions about replacing {x.name}: which exchange fits which need, fees, countries, verification and how to move.
              </p>
              {faqGroups.map((g, gi) => (
                <div key={g.id} className="faq-group">
                  <h3>{g.title}</h3>
                  <FaqList faqs={g.faqs} openFirst={gi === 0} />
                </div>
              ))}
            </section>

            <section id="sources" aria-labelledby="h-sources">
              <h2 id="h-sources">Sources: where these figures come from</h2>
              <p>
                Everything on this page about fees, leverage, products, verification, countries, licences, reserves and referral rules was read on the
                exchanges&apos; own websites and help centres on {date}. Open interest and the number of derivatives markets come from CoinMarketCap&apos;s
                derivatives ranking ({marketDate}). Exchanges change terms without notice, so the pages below are the final word.
              </p>
              <div className="faq src-group">
                {sourceGroups.map(({ e, list }) => (
                  <details key={e.slug}>
                    <summary>
                      {e.name}: {list.length} official pages{e === x ? "" : " checked for this comparison"}
                    </summary>
                    <div className="faq-a">
                      <ul className="sources">
                        {list.map((s) => (
                          <li key={s.url}>
                            <a href={s.url} target="_blank" rel="noopener nofollow">
                              {s.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {e === x ? null : (
                        <p style={{ marginTop: 12 }}>
                          Fees, leverage, verification, referral rules and the restricted list of {e.name}:{" "}
                          <Link href={`${exchangePath(e.slug)}#sources`}>all {e.sources.length} sources on our {e.name} page</Link>.
                        </p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="more" aria-labelledby="h-more">
              <h2 id="h-more">More exchange comparisons</h2>
              <h3>{x.name} head to head</h3>
              <p>One alternative on your shortlist? The pair pages go deeper on fees, products, countries and referral offers:</p>
              <ul className="chips">
                {alts.map((a) => (
                  <li key={a.slug}>
                    <Link href={versusPath(x, a)}>{versusLabel(x, a)}</Link>
                  </li>
                ))}
              </ul>
              <h3>Alternatives to the other exchanges</h3>
              <p>The same comparison from the point of view of each of the other exchanges:</p>
              <ul className="chips">
                {alts.map((a) => (
                  <li key={a.slug}>
                    <Link href={alternativesPath(a.slug)}>{a.name} alternatives</Link>
                  </li>
                ))}
              </ul>
              <p>
                <Link href={exchangePath(x.slug)}>
                  {x.name} referral code {x.referralCode}
                </Link>{" "}
                · <Link href={comparePath}>All exchange comparisons</Link>
              </p>
            </section>

            <div className="notice" style={{ marginTop: 48 }}>
              <strong>Risk warning:</strong> Crypto derivatives are complex instruments. Leverage multiplies gains and losses, and you can lose your entire
              margin within minutes. This page is for information only and is not financial advice. We may earn a commission if you sign up through our
              links – see our <Link href="/affiliate-disclosure">affiliate disclosure</Link>. That does not change the figures: they are the exchanges&apos;
              own.
            </div>
          </article>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Found your {x.name} alternative?</h2>
              <p>Sign up with a verified referral code – one account for spot and futures, at no extra cost.</p>
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
