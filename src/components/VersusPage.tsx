import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange, Source } from "@/data/exchanges";
import { exchangePath } from "@/data/exchanges";
import { alternativesPath, countryList, featureList } from "@/data/alternatives";
import { comparePath, opponentsOf, versusLabel, versusPath } from "@/data/versus";
import type { Pair } from "@/data/versus";
import { ExchangeLogo } from "./ExchangeLogo";
import { Breadcrumbs, CtaLink, FaqList } from "./Blocks";
import { CopyCode } from "./CopyCode";
import { JsonLd } from "./JsonLd";
import { ArrowIcon, CheckIcon, MinusIcon } from "./Icons";
import { Mark, StatusPill } from "./AlternativesPage";
import { breadcrumbLd, faqLd, formatBn, graph, monthYear, prettyDate, shortMonthYear, versusPageLd } from "@/lib/seo";
import { advantages, altInfo, feePair, feeSentence, leverageOf } from "@/lib/compare";
import {
  buildVersusFaqs,
  countryDifferences,
  countryPairAnswer,
  depthSentence,
  leverageSentence,
  onlyOnSentence,
  scoreRows,
  scoreSummary,
  versusAnswer,
} from "@/lib/versus";

const titleFor = (a: Exchange, b: Exchange) => `${a.name} vs ${b.name} (${shortMonthYear}): Fees, Leverage, KYC & Bonus Compared`;
const descFor = (a: Exchange, b: Exchange) =>
  `${a.name} vs ${b.name}: futures fees ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, plus products, countries, KYC and referral codes – official data, checked ${monthYear}.`;

export function versusMetadata({ a, b }: Pair): Metadata {
  const title = titleFor(a, b);
  const description = descFor(a, b);
  const path = versusPath(a, b);
  const former = [a, b].flatMap((e) => (altInfo(e).formerName ? [[altInfo(e).formerName!, e === a ? b.name : a.name]] : []));
  return {
    title: { absolute: title },
    description,
    keywords: [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} or ${b.name}`,
      `${a.name} vs ${b.name} fees`,
      `${a.name} vs ${b.name} futures`,
      `${a.name} ${b.name} comparison`,
      `is ${a.name} better than ${b.name}`,
      `is ${b.name} better than ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],
    alternates: { canonical: path },
    openGraph: { type: "article", title, description, url: path, modifiedTime: site.lastReviewed },
    twitter: { title, description },
  };
}

export function VersusPage({ pair }: { pair: Pair }) {
  const { a, b } = pair;
  const both = [a, b];
  const ia = altInfo(a);
  const ib = altInfo(b);
  const path = versusPath(a, b);
  const title = titleFor(a, b);
  const description = descFor(a, b);
  const date = prettyDate(site.lastReviewed);
  const marketDate = prettyDate(site.marketDataDate);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Exchange comparisons", path: comparePath },
    { name: `${a.name} vs ${b.name}`, path },
  ];

  const rows = scoreRows(a, b);
  const score = scoreSummary(a, b);
  const answer = versusAnswer(a, b);
  const faqGroups = buildVersusFaqs(a, b);
  const faqs = faqGroups.flatMap((g) => g.faqs);
  const differing = countryDifferences(a, b);
  const formerNote = both
    .filter((e) => altInfo(e).formerName)
    .map((e) => `${e.name} is the exchange formerly known as ${altInfo(e).formerName}.`)
    .join(" ");
  const lead = `${a.name} and ${b.name} are both centralised exchanges for spot and leveraged futures trading, and both run a referral programme for new users. ${ia.pick}. ${ib.pick}.${formerNote ? ` ${formerNote}` : ""} This page puts their fees, leverage, products, country availability, verification rules and referral offers side by side – every figure read on the exchanges' own sites on ${date}.`;

  const sourceGroups: { e: Exchange; list: Source[] }[] = both.map((e) => {
    const seen = new Set<string>();
    return { e, list: [...altInfo(e).sources, ...e.sources].filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true))) };
  });

  const toc: [string, string][] = [
    ["at-a-glance", "At a glance"],
    ["verdict", "Which one to choose"],
    ["fees", "Fees"],
    ["leverage", "Leverage & depth"],
    ["products", "Products"],
    ["countries", "Countries"],
    ["kyc", "Verification (KYC)"],
    ["safety", "Safety & regulation"],
    ["referral", "Referral codes"],
    ["pros-cons", "Pros & cons"],
    ["faq", "FAQ"],
    ["sources", "Sources"],
  ];

  const edgeLabel = (edge: (typeof rows)[number]["edge"]) => (edge === "a" ? a.name : edge === "b" ? b.name : edge === "tie" ? "Level" : "–");

  return (
    <>
      <JsonLd data={graph(versusPageLd(a, b, path, title, description, sourceGroups.flatMap((g) => g.list)), breadcrumbLd(crumbs), faqLd(faqs))} />

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
                <span className="vs-logos">
                  <ExchangeLogo exchange={a} size={52} />
                  <ExchangeLogo exchange={b} size={52} />
                </span>
                <h1>
                  {a.name} vs {b.name}: Fees, Leverage and Safety Compared <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">{lead}</p>
              <div className="answer">
                <strong>Quick answer</strong>
                <p>{answer}</p>
              </div>
              <ul className="chips" style={{ marginTop: 18 }} aria-label="Key figures">
                <li>
                  Futures {feePair(a.futuresFees)} vs {feePair(b.futuresFees)}
                </li>
                <li>
                  Spot {feePair(a.spotFees)} vs {feePair(b.spotFees)}
                </li>
                <li>
                  {leverageOf(a)}x vs {leverageOf(b)}x leverage
                </li>
                <li>
                  {formatBn(a.market.openInterestBn)} vs {formatBn(b.market.openInterestBn)} open interest
                </li>
              </ul>
            </div>

            <aside className="code-card" aria-labelledby="duel-box">
              <h2 id="duel-box">Sign up with a referral code</h2>
              <p className="small muted" style={{ margin: 0 }}>
                Both codes are free and never raise your fees.
              </p>
              {both.map((e) => (
                <div key={e.slug} className="duel">
                  <div className="duel-head">
                    <ExchangeLogo exchange={e} size={40} />
                    <div>
                      <strong>{e.name}</strong>
                      <span className="small muted">{altInfo(e).role}</span>
                    </div>
                  </div>
                  <div className="code-box">
                    <span className="code-value" aria-label={`${e.name} referral code`}>
                      {e.referralCode}
                    </span>
                    <CopyCode code={e.referralCode} />
                  </div>
                  <CtaLink exchange={e} className="btn btn-primary btn-block">
                    Sign up on {e.name}
                  </CtaLink>
                </div>
              ))}
              <p className="small muted" style={{ margin: "14px 0 0" }}>
                Leveraged trading is high-risk. Neither exchange is available in every country – see <a href="#countries">countries</a>.
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
                {a.name} vs {b.name} at a glance
              </h2>
              <p>
                Whether you search for {a.name} vs {b.name} or {b.name} vs {a.name}, the comparison is the same. Of the {score.measurable} points that
                can be decided by the figures, {a.name} is ahead on {score.a.length} and {b.name} on {score.b.length}
                {score.tie.length ? `; ${score.tie.length} ${score.tie.length === 1 ? "is" : "are"} level` : ""}. The points are not equally important –
                lower fees matter more to an active trader than a longer coin list – so read the column that fits how you trade.
              </p>
              <div className="table-wrap">
                <table className="kv score">
                  <caption className="sr-only">
                    {a.name} vs {b.name}: fees, leverage, market size, products, countries, verification and referral rules
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Compared</th>
                      <th scope="col">
                        <Link href={exchangePath(a.slug)}>{a.name}</Link>
                      </th>
                      <th scope="col">
                        <Link href={exchangePath(b.slug)}>{b.name}</Link>
                      </th>
                      <th scope="col">Ahead</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.label}>
                        <th scope="row">{r.label}</th>
                        <td className={r.edge === "a" ? "win" : undefined}>{r.a}</td>
                        <td className={r.edge === "b" ? "win" : undefined}>{r.b}</td>
                        <td>
                          <span className={`edge${r.edge === "a" || r.edge === "b" ? " edge-win" : ""}`}>{edgeLabel(r.edge)}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Fees: standard (non-VIP) tier. Open interest, volume and markets: CoinMarketCap derivatives ranking, {marketDate}. &quot;–&quot; means the
                two values cannot be ranked against each other. Everything else was read on the exchanges&apos; own sites on {date}.
              </p>
            </section>

            <section id="verdict" aria-labelledby="h-verdict">
              <h2 id="h-verdict">
                {a.name} or {b.name}: which one should you choose?
              </h2>
              <p>
                There is no overall winner – each exchange is built for a different kind of trader. The two boxes show who each one suits and where it
                is measurably ahead of the other.
              </p>
              <div className="grid grid-2">
                {both.map((e) => {
                  const other = e === a ? b : a;
                  const ahead = advantages(e, other);
                  return (
                    <article key={e.slug} className="card alt-card" style={{ marginTop: 0 }}>
                      <div className="alt-head">
                        <ExchangeLogo exchange={e} size={48} />
                        <div>
                          <span className="role-tag">Best for: {altInfo(e).role}</span>
                          <h3>Choose {e.name} if …</h3>
                        </div>
                      </div>
                      <ul className="ticks">
                        {altInfo(e).chooseIf.map((c) => (
                          <li key={c}>
                            <CheckIcon /> <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <h4>
                        Where {e.name} is ahead of {other.name}
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
                      <h4>Think twice if …</h4>
                      <ul className="ticks">
                        {altInfo(e).thinkTwiceIf.map((c) => (
                          <li key={c}>
                            <MinusIcon /> <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="alt-cta">
                        <CtaLink exchange={e} className="btn btn-primary">
                          Sign up on {e.name}
                        </CtaLink>
                        <Link href={exchangePath(e.slug)} className="btn btn-secondary">
                          {e.name} referral code {e.referralCode}
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="fees" aria-labelledby="h-fees">
              <h2 id="h-fees">
                Fees: {a.name} vs {b.name}
              </h2>
              <p>
                {feeSentence(a, b, "futures")} {feeSentence(a, b, "spot")} Both use a maker/taker model: limit orders that add liquidity pay the maker
                fee, orders that take liquidity pay the taker fee.
              </p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">
                    Standard spot and futures fees of {a.name} and {b.name}
                  </caption>
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
                    {both.map((e) => (
                      <tr key={e.slug}>
                        <th scope="row">
                          <span className="cell-x">
                            <ExchangeLogo exchange={e} size={28} />
                            <Link href={`${exchangePath(e.slug)}#fees`}>{e.name}</Link>
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
              <h3 style={{ marginTop: 26 }}>Token discounts and fine print</h3>
              <ul className="deflist">
                {both.map((e) => (
                  <li key={e.slug}>
                    <strong>{e.name}:</strong> {e.tokenDiscount || "No discount for paying fees with an exchange token is published."} {e.feeNote}
                  </li>
                ))}
              </ul>
            </section>

            <section id="leverage" aria-labelledby="h-leverage">
              <h2 id="h-leverage">Leverage and market depth</h2>
              <p>
                {leverageSentence(a, b)} High leverage sharply increases the risk of liquidation – the maximum is a limit, not a recommendation.
              </p>
              <p>{depthSentence(a, b)}</p>
              <div className="table-wrap">
                <table className="kv">
                  <caption className="sr-only">
                    Leverage and derivatives market data of {a.name} and {b.name}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Compared</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Maximum leverage</th>
                      <td>{a.maxLeverage}</td>
                      <td>{b.maxLeverage}</td>
                    </tr>
                    <tr>
                      <th scope="row">Open interest</th>
                      <td className="num">{formatBn(a.market.openInterestBn)}</td>
                      <td className="num">{formatBn(b.market.openInterestBn)}</td>
                    </tr>
                    <tr>
                      <th scope="row">24h derivatives volume</th>
                      <td className="num">{formatBn(a.market.volume24hBn)}</td>
                      <td className="num">{formatBn(b.market.volume24hBn)}</td>
                    </tr>
                    <tr>
                      <th scope="row">Derivatives markets</th>
                      <td className="num">{a.market.markets}</td>
                      <td className="num">{b.market.markets}</td>
                    </tr>
                    <tr>
                      <th scope="row">Listed assets (own figures)</th>
                      <td>{a.assets}</td>
                      <td>{b.assets}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Market data: CoinMarketCap derivatives ranking, {marketDate}. The exchanges count listed assets differently – some count coins, others
                trading pairs.
              </p>
            </section>

            <section id="products" aria-labelledby="h-products">
              <h2 id="h-products">
                Products: what {a.name} and {b.name} offer
              </h2>
              <p>
                {[onlyOnSentence(a, b), onlyOnSentence(b, a)].filter(Boolean).join(" ") ||
                  `Both exchanges show all ${featureList.length} products we compare on their own sites; the differences are in the details.`}{" "}
                A tick means the exchange shows the product on its own site; a dash means we found no page for it there on {date}.
              </p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">
                    Products offered by {a.name} and {b.name}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureList.map((f) => (
                      <tr key={f.key}>
                        <th scope="row">{f.label}</th>
                        {both.map((e) => {
                          const fi = altInfo(e).features[f.key];
                          return (
                            <td key={e.slug}>
                              <span className="mark-note">
                                <Mark has={fi.has} />
                                <span>{fi.note || (fi.has === true ? "Offered" : fi.has === false ? "Not offered" : "No page found on its own site")}</span>
                              </span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="countries" aria-labelledby="h-countries">
              <h2 id="h-countries">
                Countries: where {a.name} and {b.name} are available
              </h2>
              <p>
                For {countryList.length} countries, this is what each exchange&apos;s own terms say. The two differ in {differing.length} of them.
                &quot;Regional site&quot; means the exchange serves the country through a separate platform with its own products, fees and limits.
              </p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">
                    Country availability of {a.name} and {b.name}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Country</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryList.map((c) => (
                      <tr key={c.key}>
                        <th scope="row">{c.short}</th>
                        {both.map((e) => {
                          const ci = altInfo(e).countries[c.key];
                          return (
                            <td key={e.slug}>
                              <StatusPill status={ci.status} />
                              {ci.note ? <span className="small muted"> {ci.note}</span> : null}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                &quot;Not restricted&quot; means not on the exchange&apos;s restricted list on {date} – no guarantee that every product is offered there. Both
                exchanges forbid getting around a restriction with a VPN or false details.
              </p>
              {differing.length ? (
                <>
                  <h3 style={{ marginTop: 26 }}>Where the two differ</h3>
                  <div className="faq src-group">
                    {differing.map((c) => (
                      <details key={c.key}>
                        <summary>
                          {a.name} or {b.name} in {c.name}?
                        </summary>
                        <div className="faq-a">
                          <p>{countryPairAnswer(a, b, c)}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </>
              ) : null}
              <p style={{ marginTop: 18 }}>
                Is neither open where you live? The country tables of the alternatives pages show which other exchanges accept your country:{" "}
                <Link href={`${alternativesPath(a.slug)}#countries`}>{a.name} alternatives by country</Link> ·{" "}
                <Link href={`${alternativesPath(b.slug)}#countries`}>{b.name} alternatives by country</Link>.
              </p>
              <h3 style={{ marginTop: 26 }}>Restricted countries and regional platforms</h3>
              <div className="faq src-group">
                {both.map((e) => (
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
              <h2 id="h-kyc">
                Verification: {a.name} vs {b.name}
              </h2>
              <p>
                Both ask new users for identity verification, so neither is an option for trading without KYC. The difference is in what an unverified
                account can still do and how the check works.
              </p>
              <div className="grid grid-2">
                {both.map((e) => (
                  <div key={e.slug} className="card" style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1.02rem" }}>
                      {e.name}: {e.signup.kycShort}
                    </h3>
                    <p className="small">{e.signup.kyc}</p>
                    <p className="small">
                      <strong>Documents:</strong> {e.signup.documents} <strong>Minimum age:</strong> {e.signup.minAge}.
                    </p>
                    <p className="small" style={{ margin: 0 }}>
                      <Link href={`${exchangePath(e.slug)}#how-to`}>How to register and verify on {e.name}, step by step</Link>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">
                Safety and regulation: {a.name} vs {b.name}
              </h2>
              <p>
                No centralised exchange is risk-free. What can be compared is what each one publishes about itself: where it is licensed, whether it
                proves its reserves and whether it keeps a fund for emergencies.
              </p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">
                    Regulation, proof of reserves and protection funds of {a.name} and {b.name}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Compared</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Licences named by the exchange</th>
                      <td>{a.regulation}</td>
                      <td>{b.regulation}</td>
                    </tr>
                    <tr>
                      <th scope="row">Operating entity</th>
                      <td>{a.headquarters}</td>
                      <td>{b.headquarters}</td>
                    </tr>
                    <tr>
                      <th scope="row">Proof of reserves</th>
                      <td>{ia.reserves}</td>
                      <td>{ib.reserves}</td>
                    </tr>
                    <tr>
                      <th scope="row">Protection fund</th>
                      <td>{ia.fund || "None named"}</td>
                      <td>{ib.fund || "None named"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Founded</th>
                      <td>{a.founded}</td>
                      <td>{b.founded}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-2" style={{ marginTop: 18 }}>
                {both.map((e) => (
                  <div key={e.slug} className="card" style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1.02rem" }}>Is {e.name} safe?</h3>
                    <p className="small">{e.safety}</p>
                    <p className="small" style={{ margin: 0 }}>
                      <Link href={`${exchangePath(e.slug)}#safety`}>{e.name} safety and availability in detail</Link>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="referral" aria-labelledby="h-referral">
              <h2 id="h-referral">
                Referral codes and new-user offers: {a.name} vs {b.name}
              </h2>
              <p>
                Whichever you choose, register with a referral code: it costs nothing, never raises your fees and unlocks the exchange&apos;s new-user
                offer. Mind the last row – a forgotten code cannot always be added afterwards.
              </p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">
                    Referral codes and new-user offers of {a.name} and {b.name}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Compared</th>
                      <th scope="col">
                        <Link href={exchangePath(a.slug)}>{a.name} referral code</Link>
                      </th>
                      <th scope="col">
                        <Link href={exchangePath(b.slug)}>{b.name} referral code</Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Referral code</th>
                      <td>
                        <strong>{a.referralCode}</strong>
                      </td>
                      <td>
                        <strong>{b.referralCode}</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">New-user offer</th>
                      <td>{a.feeDiscount || a.bonusHeadline}</td>
                      <td>{b.feeDiscount || b.bonusHeadline}</td>
                    </tr>
                    <tr>
                      <th scope="row">What you get as an invited user</th>
                      <td>{a.referral.inviteeReward}</td>
                      <td>{b.referral.inviteeReward}</td>
                    </tr>
                    <tr>
                      <th scope="row">One referral covers</th>
                      <td>{a.referralCovers.join(", ")}</td>
                      <td>{b.referralCovers.join(", ")}</td>
                    </tr>
                    <tr>
                      <th scope="row">Where the code goes</th>
                      <td>{a.referral.whereShort}</td>
                      <td>{b.referral.whereShort}</td>
                    </tr>
                    <tr>
                      <th scope="row">Can it be added later?</th>
                      <td>{a.referral.afterSignupShort}</td>
                      <td>{b.referral.afterSignupShort}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Offers checked {date}. Welcome rewards are task-based, require identity verification and differ by country.
              </p>
            </section>

            <section id="pros-cons" aria-labelledby="h-pc">
              <h2 id="h-pc">
                Pros and cons of {a.name} and {b.name}
              </h2>
              {both.map((e) => (
                <div key={e.slug} className="pc-block">
                  <h3>
                    <Link href={`${exchangePath(e.slug)}#pros-cons`}>{e.name}</Link>
                  </h3>
                  <div className="pc">
                    <div className="card">
                      <h4>
                        <CheckIcon /> Pros
                      </h4>
                      <ul>
                        {e.pros.map((p) => (
                          <li key={p}>
                            <CheckIcon /> <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card">
                      <h4>
                        <MinusIcon /> Cons
                      </h4>
                      <ul>
                        {e.cons.map((p) => (
                          <li key={p}>
                            <MinusIcon /> <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">
                {a.name} vs {b.name} – FAQ
              </h2>
              <p>
                {faqs.length} questions about choosing between {a.name} and {b.name}: fees, leverage, countries, verification, products and referral
                codes.
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
                two exchanges&apos; own websites and help centres on {date}. Open interest, volume and the number of derivatives markets come from
                CoinMarketCap&apos;s derivatives ranking ({marketDate}). Exchanges change terms without notice, so the pages below are the final word.
              </p>
              <div className="faq src-group">
                {sourceGroups.map(({ e, list }) => (
                  <details key={e.slug}>
                    <summary>
                      {e.name}: {list.length} official pages
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
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="more" aria-labelledby="h-more">
              <h2 id="h-more">More comparisons</h2>
              {both.map((e) => {
                const other = e === a ? b : a;
                return (
                  <div key={e.slug}>
                    <h3>{e.name} against the other exchanges</h3>
                    <ul className="chips">
                      {opponentsOf(e)
                        .filter((o) => o !== other)
                        .map((o) => (
                          <li key={o.slug}>
                            <Link href={versusPath(e, o)}>{versusLabel(e, o)}</Link>
                          </li>
                        ))}
                      <li>
                        <Link href={alternativesPath(e.slug)}>All {e.name} alternatives</Link>
                      </li>
                    </ul>
                  </div>
                );
              })}
              <p>
                <Link href={comparePath}>All exchange comparisons</Link> · <Link href={exchangePath(a.slug)}>{a.name} referral code</Link> ·{" "}
                <Link href={exchangePath(b.slug)}>{b.name} referral code</Link>
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
              <h2>
                {a.name} or {b.name}? Start with a referral code
              </h2>
              <p>One account for spot and futures on either exchange, at no extra cost.</p>
            </div>
            <Link href={comparePath} className="btn btn-primary btn-lg">
              Compare more exchanges <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
