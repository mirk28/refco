import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange, Source } from "@/data/exchanges";
import { exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePathFor, opponentsOf, versusLabel, versusPath } from "@/data/versus";
import type { Pair } from "@/data/versus";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { homePath, languageAlternates, localeInfo, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { versusText } from "@/i18n/versus";
import { ExchangeLogo } from "./ExchangeLogo";
import { Breadcrumbs, CtaLink, FaqList } from "./Blocks";
import { CopyCode } from "./CopyCode";
import { JsonLd } from "./JsonLd";
import { ArrowIcon, CheckIcon, MinusIcon } from "./Icons";
import { Mark, StatusPill } from "./AlternativesPage";
import { breadcrumbLd, faqLd, formatBn, graph, monthYearFor, prettyDate, shareImages, shortMonthYearFor, versusPageLd } from "@/lib/seo";
import { altInfo } from "@/lib/compare";
import { buildVersusFaqs, countryDifferences, scoreRows, scoreSummary, versusAnswer } from "@/lib/versus";

/*
 * Head-to-head page of two exchanges, in every language. The words come from `versusText(locale)`
 * (src/i18n/versus/) and `compareText(locale)` (src/i18n/compare/), the facts from the two exchange entries –
 * pass the pair in the language of the page (`getPairByPathSlug(slug, locale)`).
 * English is at `/<a>-vs-<b>`, Spanish at `/es/<a>-vs-<b>`.
 */

const titleFor = (a: Exchange, b: Exchange, locale: Locale) => versusText(locale).page.title(a, b, shortMonthYearFor(locale));
const descFor = (a: Exchange, b: Exchange, locale: Locale) => versusText(locale).page.description(a, b, monthYearFor(locale));

export function versusMetadata({ a, b }: Pair, locale: Locale): Metadata {
  const title = titleFor(a, b, locale);
  const description = descFor(a, b, locale);
  const path = versusPath(a, b, locale);
  const former = [a, b].flatMap((e) => (altInfo(e, locale).formerName ? [[altInfo(e, locale).formerName!, e === a ? b.name : a.name]] : []));
  return {
    title: { absolute: title },
    description,
    keywords: versusText(locale).page.keywords(a, b, former),
    alternates: { canonical: path, languages: languageAlternates((l) => versusPath(a, b, l)) },
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

export function VersusPage({ pair, locale }: { pair: Pair; locale: Locale }) {
  const { a, b } = pair;
  const vt = versusText(locale);
  const t = vt.page;
  const ct = compareText(locale);
  const blocks = getDictionary(locale).blocks;
  const info = (e: Exchange) => altInfo(e, locale);
  const both = [a, b];
  const ia = info(a);
  const ib = info(b);
  const path = versusPath(a, b, locale);
  const hubPath = comparePathFor(locale);
  const title = titleFor(a, b, locale);
  const description = descFor(a, b, locale);
  const monthYear = monthYearFor(locale);
  const date = prettyDate(site.lastReviewed, locale);
  const marketDate = prettyDate(site.marketDataDate, locale);
  const crumbs = [
    { name: t.crumbHome, path: homePath(locale) },
    { name: t.crumbHub, path: hubPath },
    { name: t.crumbPage(a, b), path },
  ];

  const rows = scoreRows(a, b, locale);
  const score = scoreSummary(a, b, locale);
  const answer = versusAnswer(a, b, locale);
  const faqGroups = buildVersusFaqs(a, b, locale);
  const faqs = faqGroups.flatMap((g) => g.faqs);
  // The countries in which the two differ, with their names in the language of the page.
  const differingKeys = countryDifferences(a, b).map((c) => c.key);
  const differing = ct.countries.filter((c) => differingKeys.includes(c.key));
  const formerNote = both
    .filter((e) => info(e).formerName)
    .map((e) => t.formerNote(e, info(e).formerName!))
    .join(" ");
  const lead = t.lead(a, b, ia.pick, ib.pick, formerNote, date);

  const sourceGroups: { e: Exchange; list: Source[] }[] = both.map((e) => {
    const seen = new Set<string>();
    return { e, list: [...info(e).sources, ...e.sources].filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true))) };
  });

  const toc = Object.entries(t.toc);

  const edgeLabel = (edge: (typeof rows)[number]["edge"]) => (edge === "a" ? a.name : edge === "b" ? b.name : edge === "tie" ? t.level : "–");
  const only = [vt.onlyOnSentence(a, b), vt.onlyOnSentence(b, a)].filter(Boolean).join(" ");

  return (
    <>
      <JsonLd
        data={graph(
          versusPageLd(
            a,
            b,
            path,
            title,
            description,
            sourceGroups.flatMap((g) => g.list),
            locale,
            versusPath(a, b),
          ),
          breadcrumbLd(crumbs),
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
                <span className="vs-logos">
                  <ExchangeLogo exchange={a} size={52} />
                  <ExchangeLogo exchange={b} size={52} />
                </span>
                <h1>
                  {t.h1(a, b)} <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">{lead}</p>
              <div className="answer">
                <strong>{t.quickAnswer}</strong>
                <p>{answer}</p>
              </div>
              <ul className="chips" style={{ marginTop: 18 }} aria-label={t.keyFigures}>
                {t.chips(a, b, formatBn(a.market.openInterestBn, locale), formatBn(b.market.openInterestBn, locale)).map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>

            <aside className="code-card" aria-labelledby="duel-box">
              <h2 id="duel-box">{t.boxTitle}</h2>
              <p className="small muted" style={{ margin: 0 }}>
                {t.boxNote}
              </p>
              {both.map((e) => (
                <div key={e.slug} className="duel">
                  <div className="duel-head">
                    <ExchangeLogo exchange={e} size={40} />
                    <div>
                      <strong>{e.name}</strong>
                      <span className="small muted">{info(e).role}</span>
                    </div>
                  </div>
                  <div className="code-box">
                    <span className="code-value" aria-label={t.codeLabel(e)}>
                      {e.referralCode}
                    </span>
                    <CopyCode code={e.referralCode} label={blocks.copy} copiedLabel={blocks.copied} />
                  </div>
                  <CtaLink exchange={e} className="btn btn-primary btn-block">
                    {blocks.signUpOn(e.name)}
                  </CtaLink>
                </div>
              ))}
              <p className="small muted" style={{ margin: "14px 0 0" }}>
                {t.boxRisk()}
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
              <h2 id="h-glance">{t.glanceTitle(a, b)}</h2>
              <p>{t.glanceText(a, b, score)}</p>
              <div className="table-wrap">
                <table className="kv score">
                  <caption className="sr-only">{t.glanceCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.compared}</th>
                      <th scope="col">
                        <Link href={exchangePath(a.slug, locale)}>{a.name}</Link>
                      </th>
                      <th scope="col">
                        <Link href={exchangePath(b.slug, locale)}>{b.name}</Link>
                      </th>
                      <th scope="col">{t.ahead}</th>
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
                {t.glanceNote(marketDate, date)}
              </p>
            </section>

            <section id="verdict" aria-labelledby="h-verdict">
              <h2 id="h-verdict">{t.verdictTitle(a, b)}</h2>
              <p>{t.verdictText}</p>
              <div className="grid grid-2">
                {both.map((e) => {
                  const other = e === a ? b : a;
                  const ahead = ct.advantages(e, other);
                  return (
                    <article key={e.slug} className="card alt-card" style={{ marginTop: 0 }}>
                      <div className="alt-head">
                        <ExchangeLogo exchange={e} size={48} />
                        <div>
                          <span className="role-tag">{t.bestFor(info(e).role)}</span>
                          <h3>{t.chooseIf(e)}</h3>
                        </div>
                      </div>
                      <ul className="ticks">
                        {info(e).chooseIf.map((c) => (
                          <li key={c}>
                            <CheckIcon /> <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <h4>{t.aheadOf(e, other)}</h4>
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
                      <h4>{t.thinkTwice}</h4>
                      <ul className="ticks">
                        {info(e).thinkTwiceIf.map((c) => (
                          <li key={c}>
                            <MinusIcon /> <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="alt-cta">
                        <CtaLink exchange={e} className="btn btn-primary">
                          {blocks.signUpOn(e.name)}
                        </CtaLink>
                        <Link href={exchangePath(e.slug, locale)} className="btn btn-secondary">
                          {t.codeButton(e)}
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="fees" aria-labelledby="h-fees">
              <h2 id="h-fees">{t.feesTitle(a, b)}</h2>
              <p>
                {ct.feeSentence(a, b, "futures")} {ct.feeSentence(a, b, "spot")} {t.feesModel}
              </p>
              <div className="table-wrap">
                <table>
                  <caption className="sr-only">{t.feesCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.exchange}</th>
                      <th scope="col">{t.futuresMaker}</th>
                      <th scope="col">{t.futuresTaker}</th>
                      <th scope="col">{t.spotMaker}</th>
                      <th scope="col">{t.spotTaker}</th>
                      <th scope="col">{t.otherMarkets}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {both.map((e) => (
                      <tr key={e.slug}>
                        <th scope="row">
                          <span className="cell-x">
                            <ExchangeLogo exchange={e} size={28} />
                            <Link href={`${exchangePath(e.slug, locale)}#fees`}>{e.name}</Link>
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
              <h3 style={{ marginTop: 26 }}>{t.tokenTitle}</h3>
              <ul className="deflist">
                {both.map((e) => (
                  <li key={e.slug}>
                    <strong>{e.name}:</strong> {e.tokenDiscount || t.noTokenDiscount} {e.feeNote}
                  </li>
                ))}
              </ul>
            </section>

            <section id="leverage" aria-labelledby="h-leverage">
              <h2 id="h-leverage">{t.leverageTitle}</h2>
              <p>
                {vt.leverageSentence(a, b)} {t.leverageRisk}
              </p>
              <p>{vt.depthSentence(a, b)}</p>
              <div className="table-wrap">
                <table className="kv">
                  <caption className="sr-only">{t.leverageCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.compared}</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{t.maxLeverage}</th>
                      <td>{a.maxLeverage}</td>
                      <td>{b.maxLeverage}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.openInterest}</th>
                      <td className="num">{formatBn(a.market.openInterestBn, locale)}</td>
                      <td className="num">{formatBn(b.market.openInterestBn, locale)}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.volume24h}</th>
                      <td className="num">{formatBn(a.market.volume24hBn, locale)}</td>
                      <td className="num">{formatBn(b.market.volume24hBn, locale)}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.derivativesMarkets}</th>
                      <td className="num">{a.market.markets}</td>
                      <td className="num">{b.market.markets}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.listedAssets}</th>
                      <td>{a.assets}</td>
                      <td>{b.assets}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                {t.leverageNote(marketDate)}
              </p>
            </section>

            <section id="products" aria-labelledby="h-products">
              <h2 id="h-products">{t.productsTitle(a, b)}</h2>
              <p>
                {only || t.productsSame(ct.features.length)} {t.productsLegend(date)}
              </p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">{t.productsCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.product}</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ct.features.map((f) => (
                      <tr key={f.key}>
                        <th scope="row">{f.label}</th>
                        {both.map((e) => {
                          const fi = info(e).features[f.key];
                          return (
                            <td key={e.slug}>
                              <span className="mark-note">
                                <Mark has={fi.has} locale={locale} />
                                <span>{fi.note || (fi.has === true ? t.offered : fi.has === false ? t.notOffered : t.noPage)}</span>
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
              <h2 id="h-countries">{t.countriesTitle(a, b)}</h2>
              <p>{t.countriesText(ct.countries.length, differing.length)}</p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">{t.countriesCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.country}</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ct.countries.map((c) => (
                      <tr key={c.key}>
                        <th scope="row">{c.short}</th>
                        {both.map((e) => {
                          const ci = info(e).countries[c.key];
                          return (
                            <td key={e.slug}>
                              <StatusPill status={ci.status} locale={locale} />
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
                {t.countriesNote(date)}
              </p>
              {differing.length ? (
                <>
                  <h3 style={{ marginTop: 26 }}>{t.differTitle}</h3>
                  <div className="faq src-group">
                    {differing.map((c) => (
                      <details key={c.key}>
                        <summary>{t.differQuestion(a, b, c.name)}</summary>
                        <div className="faq-a">
                          <p>{vt.countryPairAnswer(a, b, c)}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </>
              ) : null}
              <p style={{ marginTop: 18 }}>
                {t.neither(a, b, `${alternativesPath(a.slug, locale)}#countries`, `${alternativesPath(b.slug, locale)}#countries`)}
              </p>
              <h3 style={{ marginTop: 26 }}>{t.restrictedTitle}</h3>
              <div className="faq src-group">
                {both.map((e) => (
                  <details key={e.slug}>
                    <summary>{t.whereNot(e)}</summary>
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
              <h2 id="h-kyc">{t.kycTitle(a, b)}</h2>
              <p>{t.kycText}</p>
              <div className="grid grid-2">
                {both.map((e) => (
                  <div key={e.slug} className="card" style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1.02rem" }}>
                      {e.name}: {e.signup.kycShort}
                    </h3>
                    <p className="small">{e.signup.kyc}</p>
                    <p className="small">
                      <strong>{t.documents}</strong> {e.signup.documents} <strong>{t.minAge}</strong> {e.signup.minAge}.
                    </p>
                    <p className="small" style={{ margin: 0 }}>
                      <Link href={`${exchangePath(e.slug, locale)}#how-to`}>{t.howToRegister(e)}</Link>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">{t.safetyTitle(a, b)}</h2>
              <p>{t.safetyText}</p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">{t.safetyCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.compared}</th>
                      <th scope="col">{a.name}</th>
                      <th scope="col">{b.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{t.licences}</th>
                      <td>{a.regulation}</td>
                      <td>{b.regulation}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.entity}</th>
                      <td>{a.headquarters}</td>
                      <td>{b.headquarters}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.reserves}</th>
                      <td>{ia.reserves}</td>
                      <td>{ib.reserves}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.fund}</th>
                      <td>{ia.fund || vt.noFund}</td>
                      <td>{ib.fund || vt.noFund}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.founded}</th>
                      <td>{a.founded}</td>
                      <td>{b.founded}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-2" style={{ marginTop: 18 }}>
                {both.map((e) => (
                  <div key={e.slug} className="card" style={{ padding: 20 }}>
                    <h3 style={{ fontSize: "1.02rem" }}>{t.isSafe(e)}</h3>
                    <p className="small">{e.safety}</p>
                    <p className="small" style={{ margin: 0 }}>
                      <Link href={`${exchangePath(e.slug, locale)}#safety`}>{t.safetyDetail(e)}</Link>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="referral" aria-labelledby="h-referral">
              <h2 id="h-referral">{t.referralTitle(a, b)}</h2>
              <p>{t.referralText}</p>
              <div className="table-wrap">
                <table className="kv wide">
                  <caption className="sr-only">{t.referralCaption(a, b)}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{t.compared}</th>
                      <th scope="col">
                        <Link href={exchangePath(a.slug, locale)}>{t.referralCodeOf(a)}</Link>
                      </th>
                      <th scope="col">
                        <Link href={exchangePath(b.slug, locale)}>{t.referralCodeOf(b)}</Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{t.referralCode}</th>
                      <td>
                        <strong>{a.referralCode}</strong>
                      </td>
                      <td>
                        <strong>{b.referralCode}</strong>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">{t.newUserOffer}</th>
                      <td>{a.feeDiscount || a.bonusHeadline}</td>
                      <td>{b.feeDiscount || b.bonusHeadline}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.inviteeReward}</th>
                      <td>{a.referral.inviteeReward}</td>
                      <td>{b.referral.inviteeReward}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.covers}</th>
                      <td>{a.referralCovers.join(", ")}</td>
                      <td>{b.referralCovers.join(", ")}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.whereCode}</th>
                      <td>{a.referral.whereShort}</td>
                      <td>{b.referral.whereShort}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.addLater}</th>
                      <td>{a.referral.afterSignupShort}</td>
                      <td>{b.referral.afterSignupShort}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small muted" style={{ marginTop: 10 }}>
                {t.referralNote(date)}
              </p>
            </section>

            <section id="pros-cons" aria-labelledby="h-pc">
              <h2 id="h-pc">{t.prosConsTitle(a, b)}</h2>
              {both.map((e) => (
                <div key={e.slug} className="pc-block">
                  <h3>
                    <Link href={`${exchangePath(e.slug, locale)}#pros-cons`}>{e.name}</Link>
                  </h3>
                  <div className="pc">
                    <div className="card">
                      <h4>
                        <CheckIcon /> {t.pros}
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
                        <MinusIcon /> {t.cons}
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
              <h2 id="h-faq">{t.faqTitle(a, b)}</h2>
              <p>{t.faqText(faqs.length, a, b)}</p>
              {faqGroups.map((g, gi) => (
                <div key={g.id} className="faq-group">
                  <h3>{g.title}</h3>
                  <FaqList faqs={g.faqs} openFirst={gi === 0} />
                </div>
              ))}
            </section>

            <section id="sources" aria-labelledby="h-sources">
              <h2 id="h-sources">{t.sourcesTitle}</h2>
              <p>{t.sourcesText(date, marketDate)}</p>
              <div className="faq src-group">
                {sourceGroups.map(({ e, list }) => (
                  <details key={e.slug}>
                    <summary>{t.officialPages(e, list.length)}</summary>
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
              <h2 id="h-more">{t.moreTitle}</h2>
              {both.map((e) => {
                const other = e === a ? b : a;
                return (
                  <div key={e.slug}>
                    <h3>{t.against(e)}</h3>
                    <ul className="chips">
                      {opponentsOf(e, locale)
                        .filter((o) => o.slug !== other.slug)
                        .map((o) => (
                          <li key={o.slug}>
                            <Link href={versusPath(e, o, locale)}>{versusLabel(e, o)}</Link>
                          </li>
                        ))}
                      <li>
                        <Link href={alternativesPath(e.slug, locale)}>{t.allAlternatives(e)}</Link>
                      </li>
                    </ul>
                  </div>
                );
              })}
              <p>
                <Link href={hubPath}>{t.allComparisons}</Link> · <Link href={exchangePath(a.slug, locale)}>{t.referralCodeOf(a)}</Link> ·{" "}
                <Link href={exchangePath(b.slug, locale)}>{t.referralCodeOf(b)}</Link>
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
              <h2>{t.ctaTitle(a, b)}</h2>
              <p>{t.ctaText}</p>
            </div>
            <Link href={hubPath} className="btn btn-primary btn-lg">
              {t.ctaButton} <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
