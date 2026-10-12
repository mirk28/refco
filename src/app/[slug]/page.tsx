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
import { breadcrumbLd, exchangePageLd, faqLd, formatBn, graph, monthYear, prettyDate, shortMonthYear } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return exchanges.map((e) => ({ slug: `${e.slug}-referral-code` }));
}

const mainBenefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const titleFor = (e: Exchange) => `${e.name} Referral Code (${shortMonthYear}): ${mainBenefit(e)}`;
const descFor = (e: Exchange) =>
  `${mainBenefit(e)} with the verified ${e.name} referral link – one sign-up for spot & futures. Fees, pros & cons and FAQ, checked ${monthYear}.`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = getExchangeByPathSlug(slug);
  if (!e) return {};
  const title = titleFor(e);
  const description = descFor(e);
  const path = exchangePath(e.slug);
  return {
    title: { absolute: title },
    description,
    keywords: [`${e.name} referral code`, `${e.name} referral link`, `${e.name} invite code`, `${e.name} sign up bonus`, `${e.name} spot trading`, `${e.name} futures fees`],
    alternates: { canonical: path },
    openGraph: { type: "article", title, description, url: path, modifiedTime: site.lastReviewed },
    twitter: { title, description },
  };
}

const toc = [
  ["benefits", "Your benefits"],
  ["key-facts", "Key facts"],
  ["how-to", "How to sign up"],
  ["fees", "Fees"],
  ["about", "About the exchange"],
  ["pros-cons", "Pros & cons"],
  ["best-for", "Who it's for"],
  ["safety", "Safety & availability"],
  ["faq", "FAQ"],
  ["alternatives", "Alternatives"],
] as const;

export default async function ExchangePage({ params }: Props) {
  const { slug } = await params;
  const e = getExchangeByPathSlug(slug);
  if (!e) notFound();

  const title = titleFor(e);
  const description = descFor(e);
  const path = exchangePath(e.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Referral codes", path: "/#exchanges" },
    { name: `${e.name} referral code`, path },
  ];
  const others = exchanges.filter((x) => x.slug !== e.slug);
  const domain = new URL(e.homepage).hostname.replace(/^www\./, "");
  const affiliate = hasAffiliate(e);
  const faqs = [
    {
      q: `Does the ${e.name} referral code also work for spot trading?`,
      a: `Yes. One ${e.name} referral covers ${e.referralCovers.join(", ")}. You sign up once and the referral – including any fee rebate or welcome reward – applies to every product you trade on that account.`,
    },
    {
      q: `What do I get with the ${e.name} referral code?`,
      a: `${e.feeDiscount ? e.feeDiscount + ". " : ""}${e.benefits.join(". ")}. ${e.benefitNote}`,
    },
    ...e.faqs,
  ];

  return (
    <>
      <JsonLd data={graph(exchangePageLd(e, title, description), breadcrumbLd(crumbs), faqLd(faqs))} />

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
                  {e.name} Referral Code <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">
                <strong>{mainBenefit(e)}</strong> – plus one referral for {e.referralCovers.join(", ")}. Here is what you get, what it
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
                Leveraged trading is high-risk. Not available in every country – see <a href="#safety">availability</a>.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- Body ---------------- */}
      <div className="section" style={{ paddingTop: 56 }}>
        <div className="container layout-2">
          <article className="prose">
            <section id="benefits" aria-labelledby="h-benefits">
              <h2 id="h-benefits">Your benefits with the {e.name} referral</h2>
              <p>
                Signing up through our {e.name} referral costs you nothing extra and unlocks the welcome offer for new users. The same link works for{" "}
                <strong>{e.referralCovers.join(", ")}</strong> – you don&apos;t need a separate code for spot and futures.
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
                        <strong>{e.feeDiscount}</strong> – exclusive to sign-ups through {site.name}
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

            <section id="how-to" aria-labelledby="h-how">
              <h2 id="h-how">How to sign up on {e.name} with the referral</h2>
              <ol className="how">
                <li>
                  <div>
                    <strong>Open the {e.name} sign-up page</strong>
                    Click “Sign up on {e.name}” on this page. It opens the official {domain} website in a new tab.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>{e.referralCode ? "Check the referral code" : "Create your account"}</strong>
                    {e.referralCode
                      ? `Make sure the referral field shows ${e.referralCode}. If it is empty, paste the code before submitting.`
                      : "Register with your email address or phone number and choose a strong, unique password."}
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Verify your identity (KYC)</strong>
                    Upload an ID document and take a selfie. Verification is required for derivatives trading and withdrawals.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Secure your account</strong>
                    Turn on two-factor authentication, an anti-phishing code and a withdrawal whitelist before you deposit.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Deposit and claim new-user rewards</strong>
                    {e.signupTip}
                  </div>
                </li>
              </ol>
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
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: 14 }}>
                {e.feeNote} Funding rates on perpetual contracts are paid between traders, not to the exchange.{" "}
                <a href={e.feesUrl} target="_blank" rel="noopener nofollow">
                  See the live {e.name} fee schedule
                </a>
                .
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
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">Is {e.name} safe?</h2>
              <p>{e.safety}</p>
              <div className="notice">
                <strong>Availability:</strong> {e.restricted}
              </div>
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">{e.name} referral code – FAQ</h2>
              <FaqList faqs={faqs} />
            </section>

            <section id="alternatives" aria-labelledby="h-alt">
              <h2 id="h-alt">Alternatives to {e.name}</h2>
              <p>Not sure {e.name} is the right fit? These exchanges offer referral sign-ups too:</p>
              <div className="grid grid-2">
                {others.slice(0, 4).map((x) => (
                  <ExchangeCard key={x.slug} exchange={x} />
                ))}
              </div>
              <p style={{ marginTop: 16 }}>
                <Link href="/#compare">Compare all {exchanges.length} exchanges →</Link>
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
              {toc.map(([id, label]) => (
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
