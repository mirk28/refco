import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { exchangePath } from "@/data/exchanges";
import { exchangesFor } from "@/data/i18n";
import { alternativesPath } from "@/data/alternatives";
import { comparePath, comparePathFor, opponentsOf, versusLabel, versusPairsFor, versusPath } from "@/data/versus";
import { getDictionary } from "@/i18n";
import { homeAnchor, homePath, languageAlternates, localeInfo } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { versusText } from "@/i18n/versus";
import type { HubFacts } from "@/i18n/versus";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { Breadcrumbs, ComparisonTable, FaqList } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Icons";
import {
  absoluteUrl,
  breadcrumbLd,
  faqLd,
  graph,
  monthYearFor,
  pageListLd,
  prettyDate,
  shareImages,
  shortMonthYearFor,
  translationOfLd,
} from "@/lib/seo";
import { altInfo, highestLeverage, largestOpenInterest, lowestFutures, lowestSpot, withMica } from "@/lib/compare";

/*
 * Hub of all head-to-head comparisons, in every language. The words come from `hub` in `versusText(locale)`
 * (src/i18n/versus/), the exchange entries from `exchangesFor(locale)`.
 * English is at `/compare`, Spanish at `/es/comparar`.
 */

const titleOf = (locale: Locale) => versusText(locale).hub.title(shortMonthYearFor(locale), versusPairsFor(locale).length);
const descriptionOf = (locale: Locale) =>
  versusText(locale).hub.description(
    getDictionary(locale).list(exchangesFor(locale).map((e) => e.name)),
    versusPairsFor(locale).length,
    monthYearFor(locale),
  );

export function compareHubMetadata(locale: Locale): Metadata {
  const title = titleOf(locale);
  const description = descriptionOf(locale);
  const path = comparePathFor(locale);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, languages: languageAlternates(comparePathFor) },
    openGraph:
      locale === "en"
        ? { type: "website", title, description, url: path, images: shareImages() }
        : { type: "website", title, description, url: path, locale: localeInfo[locale].ogLocale },
    twitter: locale === "en" ? { card: "summary_large_image", title, description, images: shareImages() } : { card: "summary_large_image", title, description },
  };
}

export function CompareHubPage({ locale }: { locale: Locale }) {
  const t = versusText(locale).hub;
  const exchanges = exchangesFor(locale);
  const pairs = versusPairsFor(locale);
  const path = comparePathFor(locale);
  const title = titleOf(locale);
  const description = descriptionOf(locale);
  const monthYear = monthYearFor(locale);
  const ranked = [...exchanges].sort((a, b) => a.market.rank - b.market.rank);
  const date = prettyDate(site.lastReviewed, locale);
  const marketDate = prettyDate(site.marketDataDate, locale);
  const crumbs = [
    { name: t.crumbHome, path: homePath(locale) },
    { name: t.crumbPage, path },
  ];
  const facts: HubFacts = {
    all: exchanges,
    ranked,
    lowF: lowestFutures(exchanges),
    lowS: lowestSpot(exchanges),
    hi: highestLeverage(exchanges),
    oi: largestOpenInterest(exchanges),
    mica: withMica(exchanges),
    date,
    marketDate,
  };
  const answer = t.answer(facts);
  const faqs = t.faqs(facts);

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "CollectionPage",
            "@id": `${absoluteUrl(path)}#webpage`,
            url: absoluteUrl(path),
            name: title,
            description,
            inLanguage: localeInfo[locale].htmlLang,
            ...translationOfLd(locale, comparePath),
            isPartOf: { "@id": absoluteUrl("/#website") },
            dateModified: site.lastReviewed,
            mainEntity: { "@id": absoluteUrl(`${path}#comparisons`) },
          },
          breadcrumbLd(crumbs),
          pageListLd(
            `${path}#comparisons`,
            t.listName,
            pairs.map((p) => ({ name: versusLabel(p.a, p.b), path: versusPath(p.a, p.b, locale) })),
          ),
          faqLd(faqs),
        )}
      />

      <section className="lp-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} locale={locale} />
          <div style={{ padding: "18px 0 48px", maxWidth: 860 }}>
            <span className="updated">
              <span className="dot" aria-hidden="true" /> {t.updated(date)}
            </span>
            <h1 style={{ margin: "14px 0", fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)" }}>
              {t.h1(pairs.length)} <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
            </h1>
            <p className="lead" style={{ maxWidth: 820 }}>
              {t.lead(exchanges.length)}
            </p>
            <div className="answer">
              <strong>{t.quickAnswer}</strong>
              <p>{answer}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <article className="prose prose-wide">
            <section id="comparisons" aria-labelledby="h-comparisons">
              <h2 id="h-comparisons">{t.pickTitle}</h2>
              <p>{t.pickText(exchanges.length - 1)}</p>
              <div className="grid grid-3">
                {ranked.map((e) => (
                  <article key={e.slug} className="card hub-card" id={e.slug}>
                    <div className="x-card-head">
                      <ExchangeLogo exchange={e} size={44} />
                      <div>
                        <h3>{e.name}</h3>
                        <p>{altInfo(e, locale).role}</p>
                      </div>
                    </div>
                    <ul className="hub-links">
                      {opponentsOf(e, locale).map((o) => (
                        <li key={o.slug}>
                          <Link href={versusPath(e, o, locale)}>{versusLabel(e, o)}</Link>
                        </li>
                      ))}
                    </ul>
                    <p className="small" style={{ margin: 0 }}>
                      <Link href={alternativesPath(e.slug, locale)}>{t.alternativesOf(e)}</Link> ·{" "}
                      <Link href={exchangePath(e.slug, locale)}>{t.referralCodeOf(e)}</Link>
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="table" aria-labelledby="h-table">
              <h2 id="h-table">{t.tableTitle(exchanges.length)}</h2>
              <p>{t.tableText}</p>
              <ComparisonTable list={ranked} locale={locale} />
              <p className="small muted" style={{ marginTop: 12 }}>
                {t.tableNote(date, marketDate)}
              </p>
            </section>

            <section id="alternatives" aria-labelledby="h-alternatives">
              <h2 id="h-alternatives">{t.alternativesTitle}</h2>
              <p>{t.alternativesText(exchanges.length - 1)}</p>
              <ul className="chips">
                {ranked.map((e) => (
                  <li key={e.slug}>
                    <Link href={alternativesPath(e.slug, locale)}>{t.alternativesOf(e)}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">{t.faqTitle}</h2>
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
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText(exchanges.length)}</p>
            </div>
            <Link href={homeAnchor(locale, "exchanges")} className="btn btn-primary btn-lg">
              {t.ctaButton} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
