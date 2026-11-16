import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { exchanges, exchangePath, getExchangeByPathSlug, hasAffiliate, qrUrl } from "@/data/exchanges";
import { QrCode } from "@/components/QrCode";
import type { Exchange } from "@/data/exchanges";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { Breadcrumbs, CtaLink, ExchangeCard, FaqList } from "@/components/Blocks";
import { CopyCode } from "@/components/CopyCode";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, MinusIcon } from "@/components/Icons";
import { breadcrumbLd, exchangePageLd, faqLd, formatBn, graph, howToLd, monthYear, prettyDate, shortMonthYear } from "@/lib/seo";
import { buildFaqs, groupFaqs, joinList } from "@/lib/faqs";
import { alternativesPath, getExchangeByAlternativesSlug } from "@/data/alternatives";
import { alternativesTeaserFaq, alternativesTo, altInfo } from "@/lib/compare";
import { AlternativesPage, alternativesMetadata } from "@/components/AlternativesPage";
import { comparePath, getPairByPathSlug, versusLabel, versusPairs, versusPath, versusSlug } from "@/data/versus";
import { VersusPage, versusMetadata } from "@/components/VersusPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

/**
 * Three page types share this segment, because Next.js cannot match a suffix inside a folder name:
 * `/<slug>-referral-code` (below), `/<slug>-alternatives` (`AlternativesPage`) and `/<a>-vs-<b>` (`VersusPage`).
 */
export function generateStaticParams() {
  return [
    ...exchanges.flatMap((e) => [{ slug: `${e.slug}-referral-code` }, { slug: `${e.slug}-alternatives` }]),
    ...versusPairs.map((p) => ({ slug: versusSlug(p) })),
  ];
}

const mainBenefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const titleFor = (e: Exchange) => `${e.name} Referral Code ${e.referralCode} (${shortMonthYear}): ${mainBenefit(e)}`;
const descFor = (e: Exchange) =>
  `${e.name} referral code: ${e.referralCode}. ${mainBenefit(e)} – where to enter it, sign-up steps, KYC and fees, checked ${monthYear}.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const focus = getExchangeByAlternativesSlug(slug);
  if (focus) return alternativesMetadata(focus);
  const pair = getPairByPathSlug(slug);
  if (pair) return versusMetadata(pair);
  const e = getExchangeByPathSlug(slug);
  if (!e) return {};
  const title = titleFor(e);
  const description = descFor(e);
  const path = exchangePath(e.slug);
  return {
    title: { absolute: title },
    description,
    keywords: [
      `${e.name} referral code`,
      `${e.name} referral code ${e.referralCode}`,
      `${e.name} ${e.referral.codeName.toLowerCase()}`,
      `${e.name} referral link`,
      `${e.name} invite code`,
      `${e.name} sign up bonus`,
      `how to register on ${e.name}`,
      `${e.name} KYC`,
      `${e.name} futures fees`,
    ],
    alternates: { canonical: path },
    openGraph: { type: "article", title, description, url: path, modifiedTime: site.lastReviewed },
    twitter: { title, description },
  };
}

const toc = [
  ["code-facts", "Code at a glance"],
  ["benefits", "Your benefits"],
  ["use-code", "How to use the code"],
  ["how-to", "How to sign up"],
  ["verification", "Verification (KYC)"],
  ["key-facts", "Key facts"],
  ["fees", "Fees"],
  ["about", "About the exchange"],
  ["pros-cons", "Pros & cons"],
  ["best-for", "Who it's for"],
  ["safety", "Safety & availability"],
  ["faq", "FAQ"],
  ["sources", "Sources"],
  ["alternatives", "Alternatives & comparisons"],
] as const;

export default async function ExchangePage({ params }: Props) {
  const { slug } = await params;
  const focus = getExchangeByAlternativesSlug(slug);
  if (focus) return <AlternativesPage exchange={focus} />;
  const pair = getPairByPathSlug(slug);
  if (pair) return <VersusPage pair={pair} />;
  const e = getExchangeByPathSlug(slug);
  if (!e) notFound();

  const title = titleFor(e);
  const description = descFor(e);
  const path = exchangePath(e.slug);
  const altPath = alternativesPath(e.slug);
  const alts = alternativesTo(e);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Referral codes", path: "/#exchanges" },
    { name: `${e.name} referral code`, path },
  ];
  const domain = new URL(e.homepage).hostname.replace(/^www\./, "");
  const affiliate = hasAffiliate(e);
  const faqs = [...buildFaqs(e), alternativesTeaserFaq(e)];
  const faqGroups = groupFaqs(e, faqs);
  const guides = e.guides;
  // The guides block is optional; when present it sits between the FAQ and the sources.
  const tocItems = toc.flatMap((item): (readonly [string, string])[] =>
    guides && item[0] === "sources" ? [["guides", guides.heading], item] : [item],
  );
  const codeFacts: [string, React.ReactNode][] = [
    [`${e.name} referral code`, <strong key="code">{e.referralCode}</strong>],
    [`What ${e.name} calls it`, e.referral.codeName],
    ["New-user benefit", mainBenefit(e)],
    ["Where it goes", e.referral.whereShort],
    ["Can it be added after sign-up?", e.referral.afterSignupShort],
    ["Valid for", e.referralCovers.join(", ")],
    ["Identity verification (KYC)", e.signup.kycShort],
    ["Cost", "Free – it does not raise your fees"],
    ["Last checked", prettyDate(site.lastReviewed)],
  ];

  return (
    <>
      <JsonLd data={graph(exchangePageLd(e, title, description), breadcrumbLd(crumbs), howToLd(e), faqLd(faqs))} />

      {/* ---------------- Hero ---------------- */}
      <section className="lp-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="lp-hero-inner">
            <div>
              <span className="updated">
                <span className="dot" aria-hidden="true" /> Checked and updated {prettyDate(site.lastReviewed)}
              </span>
              <div className="lp-title-row">
                <ExchangeLogo exchange={e} size={60} />
                <h1>
                  {e.name} Referral Code: {e.referralCode} <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">
                <strong>{mainBenefit(e)}</strong> – plus one referral for {joinList(e.referralCovers)}. Here is what you get, what it
                costs to trade and whether {e.name} is the right exchange for you.
              </p>
              <div className="answer">
                <strong>Quick answer</strong>
                <p>{e.quickAnswer}</p>
              </div>
              <ul className="chips" style={{ marginTop: 18 }} aria-label="Highlights">
                <li>Spot {e.spotFees.maker} / {e.spotFees.taker}</li>
                <li>Futures {e.futuresFees.maker} / {e.futuresFees.taker}</li>
                <li>{e.maxLeverage.replace(/\s*\(.*\)/, "")} leverage</li>
                <li>{e.market.markets} derivatives markets</li>
                <li>Since {e.founded}</li>
              </ul>
            </div>

            <aside className="code-card" aria-labelledby="signup-box">
              {e.feeDiscount ? <span className="discount-badge">{e.feeDiscount}</span> : null}
              <h2 id="signup-box">Your {e.name} sign-up</h2>
              <p className="small muted" style={{ margin: 0 }}>
                {affiliate ? "Referral is applied automatically through this link." : `Goes directly to the official ${domain} website.`}
              </p>
              <div className="code-box">
                {e.referralCode ? (
                  <>
                    <span className="code-value" aria-label="Referral code">
                      {e.referralCode}
                    </span>
                    <CopyCode code={e.referralCode} />
                  </>
                ) : (
                  <span className="code-auto">{affiliate ? "No code to type – applied via link" : `Official site: ${domain}`}</span>
                )}
              </div>
              <CtaLink exchange={e} className="btn btn-primary btn-lg btn-block">
                Sign up on {e.name}
              </CtaLink>
              <ul className="code-list" aria-label="Your benefits">
                {e.feeDiscount ? (
                  <li>
                    <CheckIcon /> <strong>{e.feeDiscount}</strong>
                  </li>
                ) : null}
                {e.benefits.slice(0, 3).map((b) => (
                  <li key={b}>
                    <CheckIcon /> <span>{b}</span>
                  </li>
                ))}
                <li>
                  <CheckIcon /> <span>Free – using a referral never raises your fees</span>
                </li>
              </ul>
              {qrUrl(e) ? (
                <div className="qr-box">
                  <QrCode value={qrUrl(e)} size={112} label={`QR code: sign up on the ${e.name} app with referral ${e.referralCode}`} />
                  <div>
                    <strong>Prefer the app?</strong>
                    <p className="small muted" style={{ margin: "4px 0 0" }}>
                      Scan with your phone camera to open {e.name}
                      {e.referralCode ? (
                        <>
                          {" "}
                          – referral <strong>{e.referralCode}</strong> included
                        </>
                      ) : null}
                      . Works for iOS and Android.
                    </p>
                  </div>
                </div>
              ) : null}
              <p className="small muted" style={{ margin: "14px 0 0" }}>
                Leveraged trading is high-risk. Not available in every country – see <a href="#safety">availability</a> or the{" "}
                <Link href={altPath}>{e.name} alternatives</Link>.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- Body ---------------- */}
      <div className="section" style={{ paddingTop: 56 }}>
        <div className="container layout-2">
          <article className="prose">
            <section id="code-facts" aria-labelledby="h-code-facts">
              <h2 id="h-code-facts">
                {e.name} referral code {e.referralCode} at a glance
              </h2>
              <p>
                The {e.name} referral code for {monthYear} is <strong>{e.referralCode}</strong>. The table sums up what it does, where it goes and what{" "}
                {e.name} requires from a new account – each line checked against {e.name}&apos;s own pages on {prettyDate(site.lastReviewed)}.
              </p>
              <div className="table-wrap">
                <table className="kv">
                  <caption className="sr-only">
                    {e.name} referral code {e.referralCode}: key facts
                  </caption>
                  <tbody>
                    {codeFacts.map(([k, v]) => (
                      <tr key={k}>
                        <th scope="row">{k}</th>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="benefits" aria-labelledby="h-benefits">
              <h2 id="h-benefits">Your benefits with the {e.name} referral</h2>
              <p>
                Signing up with the {e.name} referral code <strong>{e.referralCode}</strong> costs you nothing extra. This is what {e.name} offers new
                accounts at the moment. The same code works for <strong>{joinList(e.referralCovers)}</strong> – you don&apos;t need a separate one for
                spot and futures.
              </p>
              <div className="benefit-box">
                <div className="benefit-head">
                  <span className="eyebrow" style={{ margin: 0 }}>
                    New-user offer · checked {prettyDate(site.lastReviewed)}
                  </span>
                  <strong className="benefit-headline">{mainBenefit(e)}</strong>
                </div>
                <ul className="benefit-list">
                  {e.feeDiscount ? (
                    <li>
                      <CheckIcon /> <span>
                        <strong>{e.feeDiscount}</strong> – applied when you register through this referral
                      </span>
                    </li>
                  ) : null}
                  {e.benefits.map((b) => (
                    <li key={b}>
                      <CheckIcon /> <span>{b}</span>
                    </li>
                  ))}
                  <li>
                    <CheckIcon /> <span>No extra cost – your trading fees are never higher because of a referral</span>
                  </li>
                </ul>
                <div className="covers">
                  <span className="small muted">One referral covers:</span>
                  <ul className="chips" style={{ margin: 0 }}>
                    {e.referralCovers.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <p className="small muted" style={{ margin: "14px 0 0" }}>
                  {e.benefitNote}
                </p>
                <CtaLink exchange={e} className="btn btn-primary benefit-cta">
                  Claim your {e.name} welcome offer
                </CtaLink>
              </div>
              {e.welcomeTasks.length ? (
                <>
                  <h3 style={{ marginTop: 28 }}>{e.name} welcome offer: tasks and rewards</h3>
                  <div className="table-wrap">
                    <table className="kv">
                      <caption className="sr-only">{e.name} new-user tasks and the reward for each</caption>
                      <thead>
                        <tr>
                          <th scope="col">Task</th>
                          <th scope="col">Reward</th>
                        </tr>
                      </thead>
                      <tbody>
                        {e.welcomeTasks.map((t) => (
                          <tr key={t.task}>
                            <th scope="row">{t.task}</th>
                            <td>{t.reward}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="small muted" style={{ marginTop: 10 }}>
                    As listed by {e.name} on {prettyDate(site.lastReviewed)}. Offers differ by country and change often – the terms shown in your account
                    after sign-up are the ones that apply.
                  </p>
                </>
              ) : null}
              <div className="grid grid-3" style={{ marginTop: 18 }}>
                {e.highlights.map((h) => (
                  <div key={h.title} className="card" style={{ padding: 18 }}>
                    <h3 style={{ fontSize: "1rem" }}>{h.title}</h3>
                    <p className="small muted" style={{ margin: 0 }}>
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="use-code" aria-labelledby="h-use-code">
              <h2 id="h-use-code">How to use the {e.name} referral code {e.referralCode}</h2>
              {e.referral.guide.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h3>Where to enter the {e.name} referral code</h3>
              <p>{e.referral.whereToEnter}</p>
              <h3>Forgot the code? Adding it after registration</h3>
              <p>{e.referral.afterSignup}</p>
              <h3>What you get as an invited user</h3>
              <p>{e.referral.inviteeReward}</p>
            </section>

            <section id="how-to" aria-labelledby="h-how">
              <h2 id="h-how">How to register on {e.name} step by step</h2>
              <p>
                {e.name} lets you create an account with {joinList(e.signup.methods)}. These are the steps as {e.name} documents them, with the point
                where the referral code <strong>{e.referralCode}</strong> comes in.
              </p>
              <ol className="how">
                {e.signup.steps.map((s) => (
                  <li key={s.title}>
                    <div>
                      <strong>{s.title}</strong>
                      {s.text}
                    </div>
                  </li>
                ))}
              </ol>
              <p style={{ marginTop: 14 }}>{e.signupTip}</p>
              <p>
                <CtaLink exchange={e}>Start your {e.name} registration</CtaLink>
              </p>
            </section>

            <section id="verification" aria-labelledby="h-kyc">
              <h2 id="h-kyc">{e.name} identity verification (KYC)</h2>
              <p>{e.signup.kyc}</p>
              <dl className="facts">
                <div>
                  <dt>Verification</dt>
                  <dd>{e.signup.kycShort}</dd>
                </div>
                <div>
                  <dt>Minimum age</dt>
                  <dd>{e.signup.minAge}</dd>
                </div>
              </dl>
              <h3 style={{ marginTop: 22 }}>Accepted documents</h3>
              <p>{e.signup.documents}</p>
            </section>

            <section id="key-facts" aria-labelledby="h-facts">
              <h2 id="h-facts">{e.name} at a glance</h2>
              <dl className="facts">
                <div>
                  <dt>Founded</dt>
                  <dd>{e.founded}</dd>
                </div>
                <div>
                  <dt>Headquarters</dt>
                  <dd>{e.headquarters}</dd>
                </div>
                <div>
                  <dt>Futures fees (maker / taker)</dt>
                  <dd className="num">
                    {e.futuresFees.maker} / {e.futuresFees.taker}
                  </dd>
                </div>
                <div>
                  <dt>Spot fees (maker / taker)</dt>
                  <dd className="num">
                    {e.spotFees.maker} / {e.spotFees.taker}
                  </dd>
                </div>
                <div>
                  <dt>Max leverage</dt>
                  <dd>{e.maxLeverage}</dd>
                </div>
                <div>
                  <dt>Assets</dt>
                  <dd>{e.assets}</dd>
                </div>
                <div>
                  <dt>Open interest</dt>
                  <dd className="num">{formatBn(e.market.openInterestBn)}</dd>
                </div>
                <div>
                  <dt>24h derivatives volume</dt>
                  <dd className="num">{formatBn(e.market.volume24hBn)}</dd>
                </div>
                <div>
                  <dt>Users</dt>
                  <dd>{e.users}</dd>
                </div>
                <div>
                  <dt>Regulation</dt>
                  <dd>{e.regulation}</dd>
                </div>
              </dl>
              <p className="small muted" style={{ marginTop: 10 }}>
                Open interest, volume and market count: CoinMarketCap derivatives ranking, {prettyDate(site.marketDataDate)}. Fees: standard tier at review
                date.
              </p>
            </section>

            <section id="fees" aria-labelledby="h-fees">
              <h2 id="h-fees">{e.name} fees explained</h2>
              <p>
                {e.name} uses a maker/taker model: orders that add liquidity to the order book (limit orders) pay the maker fee, orders that remove liquidity
                (market orders) pay the taker fee. Rates fall as your 30-day volume or holdings increase.
              </p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Market</th>
                      <th scope="col">Maker</th>
                      <th scope="col">Taker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Futures / perpetuals</th>
                      <td className="num">{e.futuresFees.maker}</td>
                      <td className="num">{e.futuresFees.taker}</td>
                    </tr>
                    <tr>
                      <th scope="row">Spot</th>
                      <td className="num">{e.spotFees.maker}</td>
                      <td className="num">{e.spotFees.taker}</td>
                    </tr>
                    {e.extraFees.map((f) => (
                      <tr key={f.market}>
                        <th scope="row">{f.market}</th>
                        <td className="num">{f.maker}</td>
                        <td className="num">{f.taker}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                Standard (non-VIP) rates as published by {e.name}, checked {prettyDate(site.lastReviewed)}.
              </p>
              {e.tokenDiscount ? <p style={{ marginTop: 14 }}>{e.tokenDiscount}</p> : null}
              <p style={{ marginTop: 14 }}>
                {e.feeNote} Funding rates on perpetual contracts are paid between traders, not to the exchange.{" "}
                <a href={e.feesUrl} target="_blank" rel="noopener nofollow">
                  See the live {e.name} fee schedule
                </a>
                .
              </p>
              <p>
                How do these rates compare? Our <Link href={`${altPath}#fees`}>{e.name} alternatives comparison</Link> puts {e.name}&apos;s fees next to
                those of {joinList(alts.map((a) => a.name))}.
              </p>
            </section>

            <section id="about" aria-labelledby="h-about">
              <h2 id="h-about">About {e.name}</h2>
              {e.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h3>Products</h3>
              <ul className="chips">
                {e.products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>

            <section id="pros-cons" aria-labelledby="h-pc">
              <h2 id="h-pc">{e.name} pros and cons</h2>
              <div className="pc">
                <div className="card">
                  <h3>
                    <CheckIcon /> Pros
                  </h3>
                  <ul>
                    {e.pros.map((p) => (
                      <li key={p}>
                        <CheckIcon /> <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>
                    <MinusIcon /> Cons
                  </h3>
                  <ul>
                    {e.cons.map((p) => (
                      <li key={p}>
                        <MinusIcon /> <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="best-for" aria-labelledby="h-best">
              <h2 id="h-best">Who is {e.name} best for?</h2>
              <ul>
                {e.bestFor.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p style={{ marginTop: 18 }}>
                <CtaLink exchange={e}>Open your {e.name} account</CtaLink>
              </p>
              <p>
                Not a match? See <Link href={altPath}>the {alts.length} best {e.name} alternatives</Link> and what each of them is best for, or
                compare {e.name} head to head: <Link href={versusPath(e, alts[0])}>{versusLabel(e, alts[0])}</Link> and{" "}
                <Link href={versusPath(e, alts[1])}>{versusLabel(e, alts[1])}</Link>.
              </p>
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">Is {e.name} safe?</h2>
              <p>{e.safety}</p>
              <div className="notice">
                <strong>Availability:</strong> {e.restricted}
              </div>
              <p style={{ marginTop: 14 }}>
                Is {e.name} closed where you live? The <Link href={`${altPath}#countries`}>country table on our {e.name} alternatives page</Link> shows
                which of the other exchanges accept your country.
              </p>
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">{e.name} referral code and registration – FAQ</h2>
              <p>
                {faqs.length} questions about the {e.name} referral code {e.referralCode}, creating and verifying an account, the welcome offer and fees.
              </p>
              {faqGroups.map((g, gi) => (
                <div key={g.id} className="faq-group">
                  <h3>{g.title}</h3>
                  <FaqList faqs={g.faqs} openFirst={gi === 0} />
                </div>
              ))}
            </section>

            {guides ? (
              <section id="guides" aria-labelledby="h-guides">
                <h2 id="h-guides">{guides.heading}</h2>
                <p>{guides.intro}</p>
                <ul className="sources guides-list">
                  {guides.links.map((g) => (
                    <li key={g.url}>
                      <a href={g.url} hrefLang={g.hreflang} target="_blank" rel="noopener">
                        {guides.linkLabel} – {g.name ? `${g.name} (` : null}
                        <bdi lang={g.hreflang}>{g.language}</bdi>
                        {g.name ? ")" : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section id="sources" aria-labelledby="h-sources">
              <h2 id="h-sources">Sources: where these facts come from</h2>
              <p>
                Everything on this page about the referral code, registration, verification, the welcome offer and fees was read on {e.name}&apos;s own
                website and help centre on {prettyDate(site.lastReviewed)}. Exchanges change offers and fees without notice and show different terms in
                different countries, so the pages below are the final word.
              </p>
              <ul className="sources">
                {e.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener nofollow">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="alternatives" aria-labelledby="h-alt">
              <h2 id="h-alt">Alternatives to {e.name}</h2>
              <p>
                Not sure {e.name} is the right fit? These are the closest alternatives, each with its own referral sign-up. The{" "}
                <Link href={altPath}>full {e.name} alternatives comparison</Link> measures all {alts.length} against {e.name} by fees, leverage,
                products, verification and country availability.
              </p>
              <ul className="alt-links">
                {alts.map((x) => (
                  <li key={x.slug}>
                    <Link href={`${altPath}#${x.slug}`}>{x.name}</Link> – {altInfo(x).role}
                  </li>
                ))}
              </ul>
              <div className="grid grid-2">
                {alts.slice(0, 4).map((x) => (
                  <ExchangeCard key={x.slug} exchange={x} />
                ))}
              </div>
              <h3 style={{ marginTop: 28 }}>{e.name} head to head</h3>
              <p>
                Deciding between {e.name} and one other exchange? Each pair has its own comparison of fees, leverage, products, countries and referral
                offers:
              </p>
              <ul className="chips">
                {alts.map((x) => (
                  <li key={x.slug}>
                    <Link href={versusPath(e, x)}>{versusLabel(e, x)}</Link>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 16 }}>
                <Link href={altPath} className="btn btn-secondary btn-sm">
                  Compare all {alts.length} {e.name} alternatives
                </Link>{" "}
                <Link href={comparePath} style={{ marginLeft: 12 }}>
                  All exchange comparisons →
                </Link>
              </p>
            </section>

            <div className="notice" style={{ marginTop: 48 }}>
              <strong>Risk warning:</strong> Crypto derivatives are complex instruments. Leverage multiplies gains and losses, and you can lose your entire
              margin within minutes. This page is for information only and is not financial advice. We may earn a commission if you sign up through our
              links – see our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
            </div>
          </article>

          <aside className="toc" aria-label="On this page">
            <strong>On this page</strong>
            <ol>
              {tocItems.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
            <CtaLink exchange={e} className="btn btn-primary btn-block">
              Sign up on {e.name}
            </CtaLink>
          </aside>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Join {e.name} in 3 minutes</h2>
              <p>
                {mainBenefit(e)}. One referral for spot and futures.
              </p>
            </div>
            <CtaLink exchange={e} className="btn btn-primary btn-lg">
              Sign up on {e.name}
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
