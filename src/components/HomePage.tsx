import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { exchangesFor } from "@/data/i18n";
import { alternativesData, alternativesPath } from "@/data/alternatives";
import { comparePathFor, versusLabel, versusPairs, versusPath } from "@/data/versus";
import { getDictionary } from "@/i18n";
import type { PageLinks } from "@/i18n";
import { homeAnchor, homePath, languageAlternates, localeInfo } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { ComparisonTable, CtaLink, ExchangeCard, FaqList } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon, BoltIcon, CheckIcon, EyeOffIcon, LockIcon, RefreshIcon, ScaleIcon, ShieldIcon } from "@/components/Icons";
import { absoluteUrl, faqLd, graph, homePageLd, monthYearFor, organizationLd, prettyDate, shareImages, websiteLd } from "@/lib/seo";

/*
 * Home page of every language. The words come from `home` in the dictionary (src/i18n/), the exchange
 * entries from `exchangesFor(locale)`. English is at `/`, other languages at `/<locale>`.
 */

const titleOf = (locale: Locale) => getDictionary(locale).home.title(monthYearFor(locale));
const descriptionOf = (locale: Locale) => getDictionary(locale).home.description(monthYearFor(locale));

export function homeMetadata(locale: Locale): Metadata {
  const title = titleOf(locale);
  const description = descriptionOf(locale);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: homePath(locale), languages: languageAlternates(homePath) },
    openGraph:
      locale === "en"
        ? { title, description, url: site.url, images: shareImages() }
        : { title, description, url: absoluteUrl(homePath(locale)), locale: localeInfo[locale].ogLocale },
    twitter: locale === "en" ? { card: "summary_large_image", title, description, images: shareImages() } : { card: "summary_large_image", title, description },
  };
}

const benefitIcons = [
  <BoltIcon key="1" />,
  <ScaleIcon key="2" />,
  <RefreshIcon key="3" />,
  <CheckIcon key="4" size={22} />,
  <ShieldIcon key="5" />,
  <LockIcon key="6" />,
];
const trustIcons = [
  <ShieldIcon key="1" />,
  <RefreshIcon key="2" />,
  <EyeOffIcon key="3" />,
  <BoltIcon key="4" />,
  <CheckIcon key="5" size={22} />,
  <ShieldIcon key="6" />,
];
/** Which of the six cards carry the green icon tile. */
const benefitGreen = [true, false, true, false, true, false];
const trustGreen = [true, false, false, true, false, true];

export function HomePage({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const english = locale === "en";
  const list = exchangesFor(locale);
  const reviewed = prettyDate(site.lastReviewed, locale);
  const marketDate = prettyDate(site.marketDataDate, locale);
  const monthYear = monthYearFor(locale);
  const links: PageLinks = {
    home: homePath(locale),
    compareTable: homeAnchor(locale, "compare"),
    alternatives: comparePathFor(locale),
    compareHub: comparePathFor(locale),
    referral: (slug) => exchangePath(slug, locale),
  };

  const totalOi = list.reduce((s, e) => s + e.market.openInterestBn, 0);
  const totalMarkets = list.reduce((s, e) => s + e.market.markets, 0);
  const ranked = [...list].sort((a, b) => a.market.rank - b.market.rank);

  // A language may add a question about its main country. Its answer is written by hand from the researched
  // country data, so the build stops when that data no longer matches what the answer says.
  const countryFaq = t.countryFaq;
  if (countryFaq) {
    const changed = Object.entries(countryFaq.expected).filter(([slug, status]) => alternativesData[slug]?.countries[countryFaq.country].status !== status);
    if (changed.length) {
      throw new Error(
        `Home page (${locale}): the answer about "${countryFaq.country}" is out of date for ${changed.map(([slug]) => slug).join(", ")} – rewrite home.countryFaq in src/i18n/${locale}.tsx`,
      );
    }
  }
  const baseFaqs = t.faqs(reviewed);
  const faqs = countryFaq ? [...baseFaqs.slice(0, -1), countryFaq.faq(reviewed), baseFaqs[baseFaqs.length - 1]] : baseFaqs;

  const itemList = {
    "@type": "ItemList",
    name: t.listName,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: ranked.length,
    itemListElement: ranked.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.ticketName(e.name),
      url: absoluteUrl(exchangePath(e.slug, locale)),
    })),
  };
  const pageNode = english ? websiteLd() : homePageLd(locale, titleOf(locale), descriptionOf(locale));
  const [trustChecked, trustOfficial, trustAnalytics] = t.trust(reviewed);

  return (
    <>
      <JsonLd data={graph(organizationLd(), pageNode, itemList, faqLd(faqs))} />

      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" /> {t.updated(monthYear)}
            </span>
            <h1>{t.h1}</h1>
            <p className="lead">{t.lead}</p>
            <div className="hero-cta">
              <Link href="#exchanges" className="btn btn-primary btn-lg">
                {t.browse} <ArrowIcon />
              </Link>
              <Link href="#benefits" className="btn btn-secondary btn-lg">
                {t.seeBenefits}
              </Link>
            </div>
            <ul className="trust-row">
              <li>
                <CheckIcon /> {trustChecked}
              </li>
              <li>
                <CheckIcon /> {trustOfficial}
              </li>
              <li>
                <CheckIcon /> {trustAnalytics}
              </li>
            </ul>
          </div>
          <div className="ticket-stack" aria-label={t.featured}>
            {ranked.slice(0, 4).map((e) => (
              <Link key={e.slug} href={exchangePath(e.slug, locale)} className="ticket">
                <ExchangeLogo exchange={e} size={44} />
                <span className="ticket-body">
                  <span className="ticket-name">{t.ticketName(e.name)}</span>
                  <br />
                  <span className="ticket-meta">{e.feeDiscount || e.bonusHeadline}</span>
                </span>
                <span className="ticket-tag">{t.ticketTag}</span>
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
              <div className="stat-value">{list.length}</div>
              <div className="stat-label">{t.stats[0]}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{dict.format.billionsFloor(totalOi)}</div>
              <div className="stat-label">{t.stats[1]}</div>
            </div>
            <div className="stat">
              <div className="stat-value">{totalMarkets.toLocaleString("en-US")}</div>
              <div className="stat-label">{t.stats[2]}</div>
            </div>
            <div className="stat">
              <div className="stat-value">0.00%</div>
              <div className="stat-label">{t.stats[3]}</div>
            </div>
          </div>
          <p className="small muted" style={{ marginTop: 10 }}>
            {t.marketData(marketDate)}
          </p>
        </div>
      </section>

      {/* ---------------- Benefits ---------------- */}
      <section id="benefits" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.benefitsEyebrow}</span>
            <h2>{t.benefitsTitle}</h2>
            <p className="lead">{t.benefitsLead}</p>
          </div>
          <div className="grid grid-3">
            {t.benefits.map((b, i) => (
              <div key={b.title} className="card feature">
                <div className={benefitGreen[i] ? "feature-icon green" : "feature-icon"}>{benefitIcons[i]}</div>
                <h3>{b.title}</h3>
                <p className="muted">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="table-wrap" style={{ marginTop: 32 }}>
            <table>
              <caption className="sr-only">{t.offersCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{t.offersHead[0]}</th>
                  <th scope="col">{t.offersHead[1]}</th>
                  <th scope="col">{t.offersHead[2]}</th>
                  <th scope="col">
                    <span className="sr-only">{dict.blocks.action}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((e) => (
                  <tr key={e.slug}>
                    <th scope="row">
                      <span className="cell-x">
                        <ExchangeLogo exchange={e} size={32} />
                        <Link href={exchangePath(e.slug, locale)}>{e.name}</Link>
                      </span>
                    </th>
                    <td className="offer-cell">{e.feeDiscount || e.bonusHeadline}</td>
                    <td style={{ whiteSpace: "normal" }}>{e.referralCovers.join(" · ")}</td>
                    <td>
                      <CtaLink exchange={e} className="btn btn-primary btn-sm">
                        {t.claim}
                      </CtaLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small muted" style={{ marginTop: 12 }}>
            {t.offersNote(reviewed)}
          </p>
        </div>
      </section>

      {/* ---------------- Exchanges ---------------- */}
      <section id="exchanges" className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.exchangesEyebrow}</span>
            <h2>{t.exchangesTitle}</h2>
            <p className="lead">{t.exchangesLead}</p>
          </div>
          <div className="grid grid-3">
            {ranked.map((e) => (
              <ExchangeCard key={e.slug} exchange={e} locale={locale} />
            ))}
            <div className="card x-card x-card-more">
              <span className="eyebrow" style={{ margin: 0 }}>
                {t.sideBySide}
              </span>
              <h3 style={{ margin: 0 }}>{t.notSure}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {t.notSureText(list.length)}
              </p>
              <Link href="#compare" className="btn btn-secondary btn-sm">
                {t.compareExchanges} <ArrowIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Compare ---------------- */}
      <section id="compare" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.sideBySide}</span>
            <h2>{t.compareTitle}</h2>
            <p className="lead">{t.compareLead}</p>
          </div>
          <ComparisonTable list={ranked} locale={locale} />
          <p className="small muted" style={{ marginTop: 12 }}>
            {t.compareNote(reviewed, marketDate)}
          </p>
          <div className="alt-strip">
            <h3>{t.versusStrip.title}</h3>
            <p className="muted">{t.versusStrip.text(versusPairs.length, comparePathFor(locale))}</p>
            <ul className="chips" style={{ margin: 0 }}>
              {versusPairs.map((p) => (
                <li key={versusPath(p.a, p.b)}>
                  <Link href={versusPath(p.a, p.b, locale)}>{versusLabel(p.a, p.b)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Picks ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.picksEyebrow}</span>
            <h2>{t.picksTitle}</h2>
          </div>
          <div className="grid grid-3">
            {t.picks.map((p) => {
              const e = list.find((x) => x.slug === p.slug)!;
              return (
                <Link key={p.slug} href={exchangePath(e.slug, locale)} className="card x-card" style={{ textDecoration: "none", color: "inherit" }}>
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
          <div className="alt-strip">
            <h3>{t.alternativesStrip.title}</h3>
            <p className="muted">{t.alternativesStrip.text(exchanges.length - 1)}</p>
            <ul className="chips" style={{ margin: 0 }}>
              {ranked.map((e) => (
                <li key={e.slug}>
                  <Link href={alternativesPath(e.slug, locale)}>{dict.layout.alternativesOf(e.name)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section id="how-it-works" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.howEyebrow}</span>
            <h2>{t.howTitle}</h2>
          </div>
          <ol className="steps">
            {t.steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Trust ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head center center">
            <span className="eyebrow">{t.trustEyebrow}</span>
            <h2>{t.trustTitle}</h2>
          </div>
          <div className="grid grid-3">
            {t.trustCards.map((c, i) => (
              <div key={c.title} className="card feature">
                <div className={trustGreen[i] ? "feature-icon green" : "feature-icon"}>{trustIcons[i]}</div>
                <h3>{c.title}</h3>
                <p className="muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="section section-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-head">
            <span className="eyebrow">{t.faqEyebrow}</span>
            <h2>{t.faqTitle}</h2>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
            </div>
            <Link href="#exchanges" className="btn btn-primary btn-lg">
              {t.ctaButton} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
