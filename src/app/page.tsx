import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { ComparisonTable, CtaLink, ExchangeCard, FaqList } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon, BoltIcon, CheckIcon, EyeOffIcon, LockIcon, RefreshIcon, ScaleIcon, ShieldIcon } from "@/components/Icons";
import { absoluteUrl, faqLd, graph, monthYear, organizationLd, prettyDate, websiteLd } from "@/lib/seo";

const title = `Crypto Exchange Referral Codes (${monthYear}): Bonuses for Spot & Futures`;
const description =
  "Verified referral codes for Binance, OKX, Bybit, Bitget, Gate, KuCoin and MEXC. Unlock new-user bonuses and fee rebates for spot and futures with one link – updated " +
  monthYear +
  ".";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: site.url },
  twitter: { title, description },
};

const picks: { label: string; slug: string; why: string }[] = [
  { label: "Deepest liquidity", slug: "binance", why: "Largest open interest and futures volume worldwide." },
  { label: "Options & unified margin", slug: "okx", why: "Liquid options book and one account for all products." },
  { label: "Active futures on mobile", slug: "bybit", why: "Fast engine and one of the best trading apps." },
  { label: "Copy trading", slug: "bitget", why: "Mirror experienced futures traders automatically." },
  { label: "Most altcoins", slug: "gate", why: "5,000+ assets and futures on niche tokens." },
  { label: "Trading bots", slug: "kucoin", why: "Grid, DCA and futures bots in a few clicks." },
  { label: "Lowest fees", slug: "mexc", why: "0% maker fees on the standard tier." },
];

const faqs = [
  {
    q: "What is a crypto exchange referral code?",
    a: "A referral code (also called invite code or referral ID) is a short identifier that links a new exchange account to the person or website that recommended it. Exchanges use it to reward both sides – new users typically receive welcome rewards or a trading-fee discount, and the referrer earns a share of the fees.",
  },
  {
    q: "What are the benefits of using a referral code?",
    a: "New users who sign up with a referral get access to the exchange's welcome offer – for example up to 100 USDT in fee rebate vouchers on Binance or welcome gifts of up to 10,000 USDT on MEXC – and, where the referrer shares commission, a lasting discount on trading fees. It costs nothing extra.",
  },
  {
    q: "Does one referral code work for both spot and futures trading?",
    a: "Yes. On Binance, OKX, Bybit, Bitget, Gate, KuCoin and MEXC the referral is linked to your account, not to a single product. One sign-up covers spot and futures trading – plus margin, options or copy trading where the exchange offers them.",
  },
  {
    q: "Do I pay more if I sign up with a referral code?",
    a: "No. Signing up through a referral link never increases your fees. Depending on the exchange and your region you may even receive a fee discount or welcome bonus that you would not get without one.",
  },
  {
    q: "Can I add a referral code after creating my account?",
    a: "Almost never. Binance, OKX, Bybit, Bitget, Gate, KuCoin and MEXC all attach referrals only during registration. Use the link before you create your account.",
  },
  {
    q: "Which crypto exchange has the lowest futures fees?",
    a: `At our last review (${prettyDate(site.lastReviewed)}) MEXC had the lowest standard futures fees with 0.00% maker and about 0.01% taker. Among the largest venues, Binance and OKX charge 0.02% maker / 0.05% taker on the standard tier.`,
  },
  {
    q: "Which exchange is best for crypto derivatives?",
    a: "It depends on what you trade. Binance offers the deepest liquidity, OKX is strongest for options and portfolio margin, Bybit for fast perpetual trading, Bitget for copy trading, Gate for altcoin futures, KuCoin for bots and MEXC for the lowest fees.",
  },
  {
    q: "Are these exchanges available in the US?",
    a: "No. None of the seven exchanges listed here offer crypto derivatives to US residents on their global platforms. Availability also varies in the UK, Canada, Singapore and other regions – always check during sign-up.",
  },
  {
    q: "How often is this information updated?",
    a: `We re-check fees, leverage, licences and market data regularly. Every page shows the date of its last review; the current data was checked on ${prettyDate(site.lastReviewed)}.`,
  },
];

export default function HomePage() {
  const totalOi = exchanges.reduce((s, e) => s + e.market.openInterestBn, 0);
  const totalMarkets = exchanges.reduce((s, e) => s + e.market.markets, 0);
  const ranked = [...exchanges].sort((a, b) => a.market.rank - b.market.rank);

  const itemList = {
    "@type": "ItemList",
    name: "Crypto exchange referral codes for spot and futures",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: ranked.length,
    itemListElement: ranked.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${e.name} referral code`,
      url: absoluteUrl(exchangePath(e.slug)),
    })),
  };

  return (
    <>
      <JsonLd data={graph(organizationLd(), websiteLd(), itemList, faqLd(faqs))} />

      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" /> Updated {monthYear}
            </span>
            <h1>
              Crypto exchange referral codes, <span className="hl">verified</span> and explained.
            </h1>
            <p className="lead">
              Unlock welcome bonuses and fee rebates on the world&apos;s largest crypto exchanges – one referral for spot <em>and</em> futures. Plus the
              facts you need to choose: fees, leverage, licences and honest pros &amp; cons.
            </p>
            <div className="hero-cta">
              <Link href="#exchanges" className="btn btn-primary btn-lg">
                Browse referral codes <ArrowIcon />
              </Link>
              <Link href="#benefits" className="btn btn-secondary btn-lg">
                See your benefits
              </Link>
            </div>
            <ul className="trust-row">
              <li>
                <CheckIcon /> Checked {prettyDate(site.lastReviewed)}
              </li>
              <li>
                <CheckIcon /> Official links only
              </li>
              <li>
                <CheckIcon /> No cookies, no tracking
              </li>
            </ul>
          </div>
          <div className="ticket-stack" aria-label="Featured exchanges">
            {ranked.slice(0, 4).map((e) => (
              <Link key={e.slug} href={exchangePath(e.slug)} className="ticket">
                <ExchangeLogo exchange={e} size={44} />
                <span className="ticket-body">
                  <span className="ticket-name">{e.name} referral code</span>
                  <br />
                  <span className="ticket-meta">{e.feeDiscount || e.bonusHeadline}</span>
                </span>
                <span className="ticket-tag">SPOT + FUTURES</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="section-tight">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="stat-value">{exchanges.length}</div>
              <div className="stat-label">Top spot &amp; futures exchanges</div>
            </div>
            <div className="stat">
              <div className="stat-value">${Math.floor(totalOi)}B+</div>
              <div className="stat-label">Combined open interest</div>
            </div>
            <div className="stat">
              <div className="stat-value">{totalMarkets.toLocaleString("en-US")}</div>
              <div className="stat-label">Derivatives markets covered</div>
            </div>
            <div className="stat">
              <div className="stat-value">0.00%</div>
              <div className="stat-label">Lowest maker fee (MEXC)</div>
            </div>
          </div>
          <p className="small muted" style={{ marginTop: 10 }}>
            Market data: CoinMarketCap derivatives ranking, snapshot {prettyDate(site.marketDataDate)}.
          </p>
        </div>
      </section>


      {/* ---------------- Benefits ---------------- */}
      <section id="benefits" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Your benefits</span>
            <h2>Why sign up with a {site.name} referral code?</h2>
            <p className="lead">Same exchange, same fees – but with the new-user perks you would miss by signing up directly.</p>
          </div>
          <div className="grid grid-3">
            <div className="card feature">
              <div className="feature-icon green">
                <BoltIcon />
              </div>
              <h3>Welcome bonuses</h3>
              <p className="muted">Unlock the exchange&apos;s new-user offer – fee rebate vouchers, futures bonuses and task rewards worth up to thousands of USDT.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon">
                <ScaleIcon />
              </div>
              <h3>Lower trading fees</h3>
              <p className="muted">Where the exchange allows it, part of the referral commission flows back to you as a rebate on every trade.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon green">
                <RefreshIcon />
              </div>
              <h3>Spot and futures, one link</h3>
              <p className="muted">The referral is tied to your account – it covers spot, futures, margin and options. No second code needed.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon">
                <CheckIcon size={22} />
              </div>
              <h3>Zero extra cost</h3>
              <p className="muted">A referral never makes your fees higher. You only gain – the exchange pays for the programme.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon green">
                <ShieldIcon />
              </div>
              <h3>Official sign-up pages</h3>
              <p className="muted">Every link opens the exchange&apos;s own website. No middlemen, no data shared with us.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon">
                <LockIcon />
              </div>
              <h3>Can&apos;t be added later</h3>
              <p className="muted">Referrals only work at registration. Use the link before you create your account – afterwards the perks are gone.</p>
            </div>
          </div>

          <div className="table-wrap" style={{ marginTop: 32 }}>
            <table>
              <caption className="sr-only">New-user offers per exchange</caption>
              <thead>
                <tr>
                  <th scope="col">Exchange</th>
                  <th scope="col">New-user offer with referral</th>
                  <th scope="col">One link covers</th>
                  <th scope="col">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((e) => (
                  <tr key={e.slug}>
                    <th scope="row">
                      <span className="cell-x">
                        <ExchangeLogo exchange={e} size={32} />
                        <Link href={exchangePath(e.slug)}>{e.name}</Link>
                      </span>
                    </th>
                    <td className="offer-cell">{e.feeDiscount || e.bonusHeadline}</td>
                    <td style={{ whiteSpace: "normal" }}>{e.referralCovers.join(" · ")}</td>
                    <td>
                      <CtaLink exchange={e} className="btn btn-primary btn-sm">
                        Claim
                      </CtaLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small muted" style={{ marginTop: 12 }}>
            Offers checked {prettyDate(site.lastReviewed)}. Welcome rewards are task-based, require identity verification and vary by region – the live
            terms are shown on each exchange&apos;s sign-up page.
          </p>
        </div>
      </section>

      {/* ---------------- Exchanges ---------------- */}
      <section id="exchanges" className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Referral codes</span>
            <h2>Choose your exchange</h2>
            <p className="lead">Each page explains the referral, the fees and who the exchange is best for – so you sign up once, on the right platform.</p>
          </div>
          <div className="grid grid-3">
            {ranked.map((e) => (
              <ExchangeCard key={e.slug} exchange={e} />
            ))}
            <div className="card x-card x-card-more">
              <span className="eyebrow" style={{ margin: 0 }}>
                Side by side
              </span>
              <h3 style={{ margin: 0 }}>Not sure which one?</h3>
              <p className="muted" style={{ margin: 0 }}>
                Compare fees, leverage and open interest of all {exchanges.length} exchanges in one table.
              </p>
              <Link href="#compare" className="btn btn-secondary btn-sm">
                Compare exchanges <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Compare ---------------- */}
      <section id="compare" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Side by side</span>
            <h2>Crypto exchanges compared: spot &amp; futures</h2>
            <p className="lead">New-user offers, standard (non-VIP) spot and futures fees, leverage and market depth at a glance.</p>
          </div>
          <ComparisonTable list={ranked} />
          <p className="small muted" style={{ marginTop: 12 }}>
            Fees: standard tier as published by each exchange, checked {prettyDate(site.lastReviewed)}. Open interest and markets: CoinMarketCap,{" "}
            {prettyDate(site.marketDataDate)}. Fees change – confirm on the exchange before trading.
          </p>
        </div>
      </section>

      {/* ---------------- Picks ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Quick answer</span>
            <h2>Which exchange is best for you?</h2>
          </div>
          <div className="grid grid-3">
            {picks.map((p) => {
              const e = exchanges.find((x) => x.slug === p.slug)!;
              return (
                <Link key={p.slug} href={exchangePath(e.slug)} className="card x-card" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="x-card-head">
                    <ExchangeLogo exchange={e} size={40} />
                    <div>
                      <p style={{ fontWeight: 700, color: "var(--brand)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {p.label}
                      </p>
                      <h3>{e.name}</h3>
                    </div>
                  </div>
                  <p className="muted" style={{ margin: 0 }}>
                    {p.why}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section id="how-it-works" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Use a referral code in three steps</h2>
          </div>
          <ol className="steps">
            <li>
              <h3>Pick an exchange</h3>
              <p>Compare fees, leverage and features above and open the page of the exchange that fits your trading style.</p>
            </li>
            <li>
              <h3>Sign up through our link</h3>
              <p>The referral is attached automatically. Register with your email or phone before you create an account anywhere else.</p>
            </li>
            <li>
              <h3>Verify &amp; claim rewards</h3>
              <p>Complete identity verification (KYC), secure your account with 2FA and check the welcome rewards shown in your dashboard.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------------- Trust ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head center center">
            <span className="eyebrow">Why {site.name}</span>
            <h2>Built for trust, not clicks</h2>
          </div>
          <div className="grid grid-3">
            <div className="card feature">
              <div className="feature-icon green">
                <ShieldIcon />
              </div>
              <h3>Verified offers</h3>
              <p className="muted">We check each exchange&apos;s new-user offer and only list what you can actually claim.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon">
                <RefreshIcon />
              </div>
              <h3>Fresh, dated facts</h3>
              <p className="muted">Fees, leverage and licences are re-checked regularly and every page shows its review date.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon">
                <EyeOffIcon />
              </div>
              <h3>No cookies, no tracking</h3>
              <p className="muted">We don&apos;t use analytics, ad pixels or cookies. Your visit stays private.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon green">
                <BoltIcon />
              </div>
              <h3>Fast &amp; clear</h3>
              <p className="muted">Lightweight pages that load instantly on any phone – the answer first, details after.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon">
                <CheckIcon size={22} />
              </div>
              <h3>Honest pros &amp; cons</h3>
              <p className="muted">We list weaknesses, incidents and regional restrictions – not just the marketing.</p>
            </div>
            <div className="card feature">
              <div className="feature-icon green">
                <ShieldIcon />
              </div>
              <h3>Risk first</h3>
              <p className="muted">Leverage can wipe out a deposit fast. We say so clearly on every page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="section section-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Referral codes – frequently asked questions</h2>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Claim your welcome bonus</h2>
              <p>Pick an exchange, sign up with a verified referral and trade spot and futures with one account.</p>
            </div>
            <Link href="#exchanges" className="btn btn-primary btn-lg">
              See all referral codes <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
