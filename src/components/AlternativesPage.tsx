import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange, Source } from "@/data/exchanges";
import { exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePathFor, versusLabel, versusPath } from "@/data/versus";
import type { CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { alternativesTexts } from "@/i18n/alternatives";
import { compareText } from "@/i18n/compare";
import { homeAnchor, homePath, languageAlternates, listComma, localeInfo, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
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
  monthYearFor,
  prettyDate,
  shareImages,
  shortMonthYearFor,
  switchHowToLd,
} from "@/lib/seo";
import {
  addLater,
  alternativesTo,
  altInfo,
  feePair,
  highestLeverage,
  largestOpenInterest,
  lowestFutures,
  lowestSpot,
  mostMarkets,
  shortLeverage,
  withFeature,
  withMica,
} from "@/lib/compare";

/*
 * The "[Exchange] alternatives" page in any language. Pass the exchange entry of that language
 * (`exchangeFor(slug, locale)`). Interface texts: `src/i18n/alternatives/`; the sentences built from the
 * data: `src/i18n/compare/`.
 */

const titleFor = (x: Exchange, n: number, locale: Locale) => alternativesTexts(locale).title(x, n, shortMonthYearFor(locale));
const descFor = (x: Exchange, alts: Exchange[], locale: Locale) =>
  alternativesTexts(locale).description(x, getDictionary(locale).list(alts.map((a) => a.name)), alts.length, altInfo(x, locale).formerName, monthYearFor(locale));

export function alternativesMetadata(x: Exchange, locale: Locale): Metadata {
  const alts = alternativesTo(x, locale);
  const title = titleFor(x, alts.length, locale);
  const description = descFor(x, alts, locale);
  const path = alternativesPath(x.slug, locale);
  return {
    title: { absolute: title },
    description,
    keywords: alternativesTexts(locale).keywords(x, alts, altInfo(x, locale).formerName),
    alternates: { canonical: path, languages: languageAlternates((l) => alternativesPath(x.slug, l)) },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      modifiedTime: site.lastReviewed,
      ...(locale === "en" ? { images: shareImages(path, title) } : { locale: localeInfo[locale].ogLocale }),
    },
    twitter: { card: "summary_large_image", title, description, ...(locale === "en" ? { images: shareImages(path, title) } : {}) },
  };
}

/** Tick, dash or empty cell of the product table. Shared with the head-to-head pages. */
export function Mark({ has, locale = "en" }: { has: boolean | null; locale?: Locale }) {
  const t = compareText(locale).mark;
  if (has === true)
    return (
      <span className="mark">
        <CheckIcon /> <span className="sr-only">{t.yes}</span>
      </span>
    );
  if (has === false)
    return (
      <span className="mark">
        <MinusIcon /> <span className="sr-only">{t.no}</span>
      </span>
    );
  return (
    <span className="mark mark-none">
      <span aria-hidden="true">–</span> <span className="sr-only">{t.notFound}</span>
    </span>
  );
}

/** Status of a country as a coloured pill. Shared with the head-to-head pages. */
export const StatusPill = ({ status, locale = "en" }: { status: CountryStatus; locale?: Locale }) => (
  <span className={`pill pill-${status}`}>{compareText(locale).statusLabel[status]}</span>
);

/** Column header of a matrix table: logo above the exchange name. */
const ColHead = ({ e, focus }: { e: Exchange; focus?: boolean }) => (
  <th scope="col" className={focus ? "is-focus-col" : undefined}>
    <span className="col-x">
      <ExchangeLogo exchange={e} size={30} />
      {e.name}
    </span>
  </th>
);

const AnchorList = ({ list, locale }: { list: Exchange[]; locale: Locale }) =>
  list.length ? (
    <>
      {list.map((a, i) => (
        <span key={a.slug}>
          {i > 0 ? (i === list.length - 1 ? alternativesTexts(locale).and(a.name) : listComma(locale)) : null}
          <a href={`#${a.slug}`}>{a.name}</a>
        </span>
      ))}
    </>
  ) : (
    <span className="muted">{alternativesTexts(locale).noneOfThem}</span>
  );

export function AlternativesPage({ exchange: x, locale }: { exchange: Exchange; locale: Locale }) {
  const t = alternativesTexts(locale);
  const ct = compareText(locale);
  const dict = getDictionary(locale);
  const info = (e: Exchange) => altInfo(e, locale);
  const alts = alternativesTo(x, locale);
  const n = alts.length;
  const all = [x, ...alts];
  const own = info(x);
  const path = alternativesPath(x.slug, locale);
  const title = titleFor(x, n, locale);
  const description = descFor(x, alts, locale);
  const date = prettyDate(site.lastReviewed, locale);
  const marketDate = prettyDate(site.marketDataDate, locale);
  const monthYear = monthYearFor(locale);
  const bn = (value: number) => formatBn(value, locale);
  const referralHref = (e: Exchange) => exchangePath(e.slug, locale);
  const crumbs = [
    { name: t.crumbHome, path: homePath(locale) },
    { name: t.crumbReferral(x.name), path: referralHref(x) },
    { name: t.crumbAlternatives(x.name), path },
  ];

  const answer = ct.quickAnswer(x, alts);
  const steps = ct.switchSteps(x, alts);
  const faqGroups = ct.buildAlternativesFaqs(x, alts);
  const faqs = faqGroups.flatMap((g) => g.faqs);

  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const mm = mostMarkets(alts);
  const mica = withMica(alts);
  const later = alts.filter((a) => addLater(a) !== "no");
  const featureNeed = (key: FeatureKey) => ({ need: ct.features.find((f) => f.key === key)!.label, who: withFeature(alts, key), why: t.whyFeature });
  const needs: { need: string; who: Exchange[]; why: string }[] = [
    { need: t.needLowestFutures, who: lowF, why: t.whyStandardTier(feePair(lowF[0].futuresFees)) },
    { need: t.needLowestSpot, who: lowS, why: t.whyStandardTier(feePair(lowS[0].spotFees)) },
    { need: t.needHighestLeverage, who: hi, why: hi[0].maxLeverage },
    { need: t.needDeepest, who: oi, why: t.whyOpenInterest(bn(oi[0].market.openInterestBn), marketDate) },
    { need: t.needMostMarkets, who: mm, why: t.whyMarkets(mm[0].market.markets, marketDate) },
    featureNeed("copyTrading"),
    featureNeed("tradingBots"),
    featureNeed("options"),
    featureNeed("demoTrading"),
    { need: t.needMica, who: mica, why: mica.map((a) => `${a.name}: ${info(a).mica}`).join(" · ") },
    { need: t.needAddLater, who: later, why: later.map((a) => `${a.name}: ${a.referral.afterSignupShort}`).join(" · ") },
  ];

  const restrictedAtHome = ct.countries.filter((c) => own.countries[c.key].status === "restricted" || own.countries[c.key].status === "partial");

  // Full list for the exchange the page is about; for the others the pages checked for this comparison,
  // with a link to the complete list on their own referral-code page.
  const sourceGroups: { e: Exchange; list: Source[] }[] = all.map((e) => {
    const seen = new Set<string>();
    const list = e === x ? [...info(e).sources, ...e.sources] : info(e).sources;
    return { e, list: list.filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true))) };
  });
  const citations = sourceGroups.flatMap((g) => g.list);

  const toc = t.toc(x.name, n);

  return (
    <>
      <JsonLd
        data={graph(
          alternativesPageLd(x, alts, path, title, description, citations, locale, alternativesPath(x.slug)),
          breadcrumbLd(crumbs),
          alternativesListLd(x, alts, path, Object.fromEntries(alts.map((a) => [a.slug, info(a).pitch])), {
            name: t.listLdName(x.name),
            description: t.listLdDescription(x.name),
          }),
          switchHowToLd(x, path, steps, { name: t.howToLdName(x.name), description: t.howToLdDescription(x.name) }, locale),
          faqLd(faqs),
        )}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="lp-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} locale={locale} />
          <div className="lp-hero-inner">
            <div>
              <span className="updated">
                <span className="dot" aria-hidden="true" /> {t.updated(date)}
              </span>
              <div className="lp-title-row">
                <ExchangeLogo exchange={x} size={60} />
                <h1>
                  {t.h1(x.name, n)} <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">{own.intro}</p>
              <div className="answer">
                <strong>{t.quickAnswer}</strong>
                <p>{answer}</p>
              </div>
              <ul className="chips" style={{ marginTop: 18 }} aria-label={t.chipsLabel}>
                {t.chips(n, ct.features.length, ct.countries.length).map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>

            <aside className="code-card" aria-labelledby="top-list">
              <h2 id="top-list">{t.glanceTitle(x.name)}</h2>
              <p className="small muted" style={{ margin: 0 }}>
                {t.glanceIntro}
              </p>
              <ol className="rank-list">
                {alts.map((a) => (
                  <li key={a.slug}>
                    <a href={`#${a.slug}`}>
                      <ExchangeLogo exchange={a} size={36} />
                      <span className="rank-name">
                        <strong>{a.name}</strong>
                        <span>{info(a).role}</span>
                      </span>
                      <span className="rank-fee num">{feePair(a.futuresFees)}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="small muted" style={{ margin: "14px 0 0" }}>
                {t.glanceOrder(marketDate)}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------------- Body ---------------- */}
      <div className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <nav className="toc-inline" aria-label={t.onThisPage}>
            <strong>{t.onThisPage}</strong>
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
              <h2 id="h-glance">{t.comparedTitle(x.name, monthYear)}</h2>
              <p>{t.comparedIntro(x.name, n, date)}</p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">{t.comparedCaption(x.name, n)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colExchange}</th>
                      <th scope="col">{t.colBestFor}</th>
                      <th scope="col">{t.colFuturesFees}</th>
                      <th scope="col">{t.colSpotFees}</th>
                      <th scope="col">{t.colMaxLeverage}</th>
                      <th scope="col">{t.colReferralCode}</th>
                      <th scope="col">
                        <span className="sr-only">{t.colAction}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">
                          <span className="cell-x">
                            <ExchangeLogo exchange={e} size={32} />
                            {e === x ? <Link href={referralHref(e)}>{e.name}</Link> : <a href={`#${e.slug}`}>{e.name}</a>}
                            {e === x ? <span className="tag">{t.forComparison}</span> : null}
                          </span>
                        </th>
                        <td className="wrap">{info(e).role}</td>
                        <td className="num">{feePair(e.futuresFees)}</td>
                        <td className="num">{feePair(e.spotFees)}</td>
                        <td>{shortLeverage(e)}</td>
                        <td>
                          <Link href={referralHref(e)} className="code-link">
                            {e.referralCode}
                          </Link>
                        </td>
                        <td>
                          <CtaLink exchange={e} className="btn btn-primary btn-sm">
                            {t.signUp}
                          </CtaLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                {t.comparedOrder(marketDate)}
              </p>
            </section>

            <section id="why" aria-labelledby="h-why">
              <h2 id="h-why">{t.whyTitle(x.name)}</h2>
              <p>{t.whyIntro(x.name, `${referralHref(x)}#sources`)}</p>
              <div className="grid grid-2">
                {own.reasons.map((r) => (
                  <div key={r.title} className="card" style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1.02rem" }}>{r.title}</h3>
                    <p className="small" style={{ margin: 0 }}>
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
              <h3 style={{ marginTop: 28 }}>{t.stayTitle(x.name)}</h3>
              <ul className="ticks">
                {own.stayIf.map((s) => (
                  <li key={s}>
                    <CheckIcon /> <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p>{t.stayOutro(x.name, x.referralCode, referralHref(x))}</p>
            </section>

            <section id="alternatives" aria-labelledby="h-alts">
              <h2 id="h-alts">{t.detailTitle(x.name, n)}</h2>
              <p>{t.detailIntro(x.name)}</p>
              {alts.map((a, i) => {
                const ai = info(a);
                const ahead = ct.advantages(a, x);
                const behind = ct.advantages(x, a);
                const rows: [string, React.ReactNode, React.ReactNode][] = [
                  [t.rowFuturesFees, feePair(a.futuresFees), feePair(x.futuresFees)],
                  [t.rowSpotFees, feePair(a.spotFees), feePair(x.spotFees)],
                  [t.rowMaxLeverage, a.maxLeverage, x.maxLeverage],
                  [t.rowAssets, a.assets, x.assets],
                  [t.rowOpenInterest, bn(a.market.openInterestBn), bn(x.market.openInterestBn)],
                  [t.rowUsers, a.users, x.users],
                  [t.rowFounded, a.founded, x.founded],
                  [t.rowKyc, a.signup.kycShort, x.signup.kycShort],
                  [t.rowAddLater, a.referral.afterSignupShort, x.referral.afterSignupShort],
                  [t.rowOffer, a.feeDiscount || a.bonusHeadline, x.feeDiscount || x.bonusHeadline],
                ];
                return (
                  <article key={a.slug} id={a.slug} className="card alt-card" aria-labelledby={`h-${a.slug}`}>
                    <div className="alt-head">
                      <ExchangeLogo exchange={a} size={52} />
                      <div>
                        <span className="role-tag">{t.bestFor(ai.role)}</span>
                        <h3 id={`h-${a.slug}`}>
                          {i + 1}. {a.name} <span className="muted">{t.asAlternative(x.name)}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="alt-body">
                      <div>
                        <p>{ai.pitch}</p>
                        <p>
                          {ct.feeSentence(a, x, "futures")} {ct.feeSentence(a, x, "spot")}
                        </p>
                        <h4>{t.chooseIf(a.name, x.name)}</h4>
                        <ul className="ticks">
                          {ai.chooseIf.map((c) => (
                            <li key={c}>
                              <CheckIcon /> <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                        <h4>{t.thinkTwiceIf}</h4>
                        <ul className="ticks">
                          {ai.thinkTwiceIf.map((c) => (
                            <li key={c}>
                              <MinusIcon /> <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>{t.whereAhead(a.name, x.name)}</h4>
                        {ahead.length ? (
                          <ul className="ticks">
                            {ahead.map((c) => (
                              <li key={c}>
                                <CheckIcon /> <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="small muted">{t.noAdvantage}</p>
                        )}
                        <h4>{t.whereBehind(x.name)}</h4>
                        {behind.length ? (
                          <ul className="ticks">
                            {behind.map((c) => (
                              <li key={c}>
                                <MinusIcon /> <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="small muted">{t.noAdvantage}</p>
                        )}
                        <div className="alt-cta">
                          <div className="code-box">
                            <span className="code-value" aria-label={t.codeLabel(a.name)}>
                              {a.referralCode}
                            </span>
                            <CopyCode code={a.referralCode} label={dict.blocks.copy} copiedLabel={dict.blocks.copied} />
                          </div>
                          <CtaLink exchange={a} className="btn btn-primary">
                            {t.signUpOn(a.name)}
                          </CtaLink>
                        </div>
                        <p className="small" style={{ margin: "14px 0 0" }}>
                          <Link href={referralHref(a)}>{t.linkReferral(a.name, a.referralCode)}</Link> ·{" "}
                          <Link href={versusPath(a, x, locale)}>{t.linkVersus(a.name, x.name)}</Link> ·{" "}
                          <Link href={alternativesPath(a.slug, locale)}>{t.linkAlternatives(a.name)}</Link>
                        </p>
                      </div>
                    </div>
                    <details className="vs-details">
                      <summary>{t.sideBySide(a.name, x.name)}</summary>
                      <div className="table-wrap">
                        <table className="kv vs">
                          <caption className="sr-only">{t.sideBySideCaption(a.name, x.name)}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{t.versusHead(a.name, x.name)}</th>
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
              <h2 id="h-need">{t.needTitle(x.name)}</h2>
              <p>{t.needIntro(n)}</p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">{t.needCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.needColWant}</th>
                      <th scope="col">{t.needColLook}</th>
                      <th scope="col">{t.needColWhy}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {needs.map((r) => (
                      <tr key={r.need}>
                        <th scope="row">{r.need}</th>
                        <td>
                          <AnchorList list={r.who} locale={locale} />
                        </td>
                        <td>{r.who.length ? r.why : t.needNotFound(n)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="fees" aria-labelledby="h-fees">
              <h2 id="h-fees">{t.feesTitle(x.name)}</h2>
              <p>{t.feesIntro}</p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">{t.feesCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colExchange}</th>
                      <th scope="col">{t.colFuturesMaker}</th>
                      <th scope="col">{t.colFuturesTaker}</th>
                      <th scope="col">{t.colSpotMaker}</th>
                      <th scope="col">{t.colSpotTaker}</th>
                      <th scope="col">{t.colOtherMarkets}</th>
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
                {t.feesNote(date)}
              </p>
              <h3 style={{ marginTop: 26 }}>{t.cheaperTitle(x.name)}</h3>
              <p>{ct.feeSummary(x, alts, "futures")}</p>
              <p>{ct.feeSummary(x, alts, "spot")}</p>
              <h3>{t.tokenTitle}</h3>
              <ul className="deflist">
                {all.map((e) => (
                  <li key={e.slug}>
                    <strong>{e.name}:</strong> {e.tokenDiscount || t.noTokenDiscount} {e.feeNote}
                  </li>
                ))}
              </ul>
            </section>

            <section id="products" aria-labelledby="h-products">
              <h2 id="h-products">{t.productsTitle}</h2>
              <p>{t.productsIntro(date)}</p>
              <div className="table-wrap">
                <table className="matrix">
                  <caption className="sr-only">{t.productsCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colProduct}</th>
                      {all.map((e) => (
                        <ColHead key={e.slug} e={e} focus={e === x} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ct.features.map((f) => (
                      <tr key={f.key}>
                        <th scope="row">{f.label}</th>
                        {all.map((e) => (
                          <td key={e.slug} className={e === x ? "is-focus-col" : undefined}>
                            <Mark has={info(e).features[f.key].has} locale={locale} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 style={{ marginTop: 26 }}>{t.productDetailsTitle}</h3>
              <div className="faq src-group">
                {all.map((e) => (
                  <details key={e.slug}>
                    <summary>{t.productDetails(e.name)}</summary>
                    <div className="faq-a">
                      <ul>
                        {ct.features.map((f) => {
                          const fi = info(e).features[f.key];
                          return (
                            <li key={f.key}>
                              <strong>{f.label}:</strong>{" "}
                              {fi.note || (fi.has === true ? t.offered : fi.has === false ? t.notOffered : t.noPageFound)}
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
              <h2 id="h-countries">{t.countriesTitle(x.name)}</h2>
              <p>{t.countriesIntro(ct.countries.length)}</p>
              <div className="table-wrap">
                <table className="matrix">
                  <caption className="sr-only">{t.countriesCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colCountry}</th>
                      {all.map((e) => (
                        <ColHead key={e.slug} e={e} focus={e === x} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ct.countries.map((c) => (
                      <tr key={c.key}>
                        <th scope="row">{c.short}</th>
                        {all.map((e) => (
                          <td key={e.slug} className={e === x ? "is-focus-col" : undefined}>
                            <StatusPill status={info(e).countries[c.key].status} locale={locale} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="legend">
                <li>
                  <StatusPill status="restricted" locale={locale} /> {t.legendRestricted}
                </li>
                <li>
                  <StatusPill status="regional" locale={locale} /> {t.legendRegional}
                </li>
                <li>
                  <StatusPill status="partial" locale={locale} /> {t.legendPartial}
                </li>
                <li>
                  <StatusPill status="open" locale={locale} /> {t.legendOpen(date)}
                </li>
              </ul>
              <p className="small muted" style={{ marginTop: 10 }}>
                {t.countriesNote}
              </p>

              {restrictedAtHome.map((c) => (
                <div key={c.key}>
                  <h3 style={{ marginTop: 26 }}>{t.countryHeading(x.name, c.name)}</h3>
                  <p>{ct.countryAnswer(x, alts, c)}</p>
                </div>
              ))}

              <h3 style={{ marginTop: 26 }}>{t.restrictedTitle}</h3>
              <div className="faq src-group">
                {all.map((e) => (
                  <details key={e.slug}>
                    <summary>{t.whereNotAvailable(e.name)}</summary>
                    <div className="faq-a">
                      <p>{e.restricted}</p>
                      {info(e).regional ? (
                        <p style={{ marginTop: 10 }}>
                          <strong>{t.regionalPlatforms}</strong> {info(e).regional}
                        </p>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="kyc" aria-labelledby="h-kyc">
              <h2 id="h-kyc">{t.kycTitle(x.name)}</h2>
              <p>{t.kycIntro(n)}</p>
              <div className="table-wrap">
                <table className="kv">
                  <caption className="sr-only">{t.kycCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colExchange}</th>
                      <th scope="col">{t.colKyc}</th>
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
              <h3 style={{ marginTop: 26 }}>{t.kycDetailsTitle}</h3>
              <div className="faq src-group">
                {all.map((e) => (
                  <details key={e.slug}>
                    <summary>{t.kycQuestion(e.name)}</summary>
                    <div className="faq-a">
                      <p>{e.signup.kyc}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">{t.safetyTitle}</h2>
              <p>{t.safetyIntro}</p>
              <div className="table-wrap">
                <table className="kv wide wider">
                  <caption className="sr-only">{t.safetyCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colExchange}</th>
                      <th scope="col">{t.colLicences}</th>
                      <th scope="col">{t.colReserves}</th>
                      <th scope="col">{t.colFund}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">{e.name}</th>
                        <td>{e.regulation}</td>
                        <td>{info(e).reserves}</td>
                        <td>{info(e).fund || t.noneNamed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                {t.safetyNote}
              </p>
            </section>

            <section id="referral-codes" aria-labelledby="h-codes">
              <h2 id="h-codes">{t.codesTitle(x.name)}</h2>
              <p>{t.codesIntro}</p>
              <div className="table-wrap">
                <table className="kv wide wider">
                  <caption className="sr-only">{t.codesCaption(x.name)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.colExchange}</th>
                      <th scope="col">{t.colReferralCode}</th>
                      <th scope="col">{t.colOffer}</th>
                      <th scope="col">{t.colWhere}</th>
                      <th scope="col">{t.colLater}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {all.map((e) => (
                      <tr key={e.slug} className={e === x ? "is-focus" : undefined}>
                        <th scope="row">
                          <Link href={referralHref(e)}>{t.codesRow(e.name)}</Link>
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
                {t.codesNote(date)}
              </p>
            </section>

            <section id="switch" aria-labelledby="h-switch">
              <h2 id="h-switch">{t.switchTitle(x.name)}</h2>
              <p>{t.switchIntro}</p>
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
              <h2 id="h-faq">{t.faqTitle(x.name)}</h2>
              <p>{t.faqIntro(x.name, faqs.length)}</p>
              {faqGroups.map((g, gi) => (
                <div key={g.id} className="faq-group">
                  <h3>{g.title}</h3>
                  <FaqList faqs={g.faqs} openFirst={gi === 0} />
                </div>
              ))}
            </section>

            <section id="sources" aria-labelledby="h-sources">
              <h2 id="h-sources">{t.sourcesTitle}</h2>
              <p>{t.sourcesIntro(date, marketDate)}</p>
              <div className="faq src-group">
                {sourceGroups.map(({ e, list }) => (
                  <details key={e.slug}>
                    <summary>{t.sourcesSummary(e.name, list.length, e === x)}</summary>
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
                        <p style={{ marginTop: 12 }}>{t.sourcesMore(e.name, e.sources.length, `${referralHref(e)}#sources`)}</p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="more" aria-labelledby="h-more">
              <h2 id="h-more">{t.moreTitle}</h2>
              <h3>{t.headToHeadTitle(x.name)}</h3>
              <p>{t.headToHeadIntro}</p>
              <ul className="chips">
                {alts.map((a) => (
                  <li key={a.slug}>
                    <Link href={versusPath(x, a, locale)}>{versusLabel(x, a)}</Link>
                  </li>
                ))}
              </ul>
              <h3>{t.otherAlternativesTitle}</h3>
              <p>{t.otherAlternativesIntro}</p>
              <ul className="chips">
                {alts.map((a) => (
                  <li key={a.slug}>
                    <Link href={alternativesPath(a.slug, locale)}>{t.linkAlternatives(a.name)}</Link>
                  </li>
                ))}
              </ul>
              <p>
                <Link href={referralHref(x)}>{t.referralLink(x.name, x.referralCode)}</Link> ·{" "}
                <Link href={comparePathFor(locale)}>{t.allComparisons}</Link>
              </p>
            </section>

            <div className="notice" style={{ marginTop: 48 }}>
              {t.risk(pagePath("affiliateDisclosure", locale))}
            </div>
          </article>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>{t.ctaTitle(x.name)}</h2>
              <p>{t.ctaText}</p>
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
