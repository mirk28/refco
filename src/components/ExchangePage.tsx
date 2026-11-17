import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { exchangePath, hasAffiliate, qrUrl } from "@/data/exchanges";
import type { Exchange } from "@/data/exchanges";
import { exchangeFor } from "@/data/i18n";
import { alternativesPath } from "@/data/alternatives";
import { comparePathFor, versusLabel, versusPath } from "@/data/versus";
import { getDictionary } from "@/i18n";
import type { PageLinks } from "@/i18n";
import { dashFor, homeAnchor, homePath, languageAlternates, localeInfo, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { QrCode } from "@/components/QrCode";
import { ExchangeLogo } from "@/components/ExchangeLogo";
import { Breadcrumbs, CtaLink, ExchangeCard, FaqList } from "@/components/Blocks";
import { CopyCode } from "@/components/CopyCode";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon, MinusIcon } from "@/components/Icons";
import { breadcrumbLd, exchangePageLd, faqLd, graph, howToLd, monthYearFor, prettyDate, shareImages, shortMonthYearFor } from "@/lib/seo";
import { buildFaqs, groupFaqs } from "@/lib/faqs";
import { alternativesTo, altInfo } from "@/lib/compare";
import { compareText } from "@/i18n/compare";

/*
 * Referral-code page of one exchange, in every language. The words come from `exchange` in the dictionary
 * (src/i18n/), the facts from the exchange entry – pass the entry in the language of the page
 * (`exchangeFor(slug, locale)`). English is at `/<slug>-referral-code`, Spanish at `/es/codigo-de-referido-<slug>`.
 *
 * The alternatives and head-to-head pages exist in English only. The English page links to them in the text;
 * other languages link to the pages of the other exchanges and name the English comparisons once.
 */

const mainBenefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const titleFor = (e: Exchange, locale: Locale) => getDictionary(locale).exchange.title(e, shortMonthYearFor(locale));
const descFor = (e: Exchange, locale: Locale) => getDictionary(locale).exchange.description(e, monthYearFor(locale));

export function exchangeMetadata(e: Exchange, locale: Locale): Metadata {
  const title = titleFor(e, locale);
  const description = descFor(e, locale);
  const path = exchangePath(e.slug, locale);
  return {
    title: { absolute: title },
    description,
    keywords: getDictionary(locale).exchange.keywords(e),
    alternates: { canonical: path, languages: languageAlternates((l) => exchangePath(e.slug, l)) },
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

const tocOrder = [
  "code-facts",
  "benefits",
  "use-code",
  "how-to",
  "verification",
  "key-facts",
  "fees",
  "about",
  "pros-cons",
  "best-for",
  "safety",
  "faq",
  "sources",
  "alternatives",
] as const;

export function ExchangePage({ exchange: e, locale = "en" }: { exchange: Exchange; locale?: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.exchange;
  const list = dict.list;
  const monthYear = monthYearFor(locale);
  const reviewed = prettyDate(site.lastReviewed, locale);

  const title = titleFor(e, locale);
  const description = descFor(e, locale);
  const path = exchangePath(e.slug, locale);
  const altPath = alternativesPath(e.slug, locale);
  const alts = alternativesTo(e, locale);
  const pairLink = (x: Exchange) => ({ href: versusPath(e, x, locale), label: versusLabel(e, x) });
  const links: PageLinks = {
    home: homePath(locale),
    compareTable: homeAnchor(locale, "compare"),
    alternatives: altPath,
    compareHub: comparePathFor(locale),
    referral: (slug) => exchangePath(slug, locale),
  };
  const crumbs = [
    { name: t.crumbHome, path: homePath(locale) },
    { name: t.crumbCodes, path: homeAnchor(locale, "exchanges") },
    { name: t.crumbPage(e), path },
  ];
  const domain = new URL(e.homepage).hostname.replace(/^www\./, "");
  const affiliate = hasAffiliate(e);
  const faqs = [...buildFaqs(e, locale), compareText(locale).alternativesTeaserFaq(e)];
  const faqGroups = groupFaqs(e, faqs, locale);
  const guides = e.guides;
  // The guides block is optional; when present it sits between the FAQ and the sources.
  const tocItems = tocOrder.flatMap((id): (readonly [string, string])[] =>
    guides && id === "sources" ? [["guides", guides.heading], [id, t.toc[id]]] : [[id, t.toc[id]]],
  );
  const codeFacts = t.codeFacts(e, reviewed);
  const interfaceNote = t.interfaceNote(e);
  const feesCompare = t.feesCompare(
    e,
    alts.map((a) => a.name),
    links,
  );
  const closedWhereYouLive = t.closedWhereYouLive(e, links);

  return (
    <>
      <JsonLd data={graph(exchangePageLd(e, title, description, locale), breadcrumbLd(crumbs), howToLd(e, locale), faqLd(faqs))} />

      {/* ---------------- Hero ---------------- */}
      <section className="lp-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} locale={locale} />
          <div className="lp-hero-inner">
            <div>
              <span className="updated">
                <span className="dot" aria-hidden="true" /> {t.updated(reviewed)}
              </span>
              <div className="lp-title-row">
                <ExchangeLogo exchange={e} size={60} />
                <h1>
                  {t.h1(e)} <span className="muted" style={{ fontWeight: 650 }}>({monthYear})</span>
                </h1>
              </div>
              <p className="lead">{t.lead(e)}</p>
              <div className="answer">
                <strong>{t.quickAnswer}</strong>
                <p>{e.quickAnswer}</p>
              </div>
              <ul className="chips" style={{ marginTop: 18 }} aria-label={t.highlights}>
                {t.chips(e).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <aside className="code-card" aria-labelledby="signup-box">
              {e.feeDiscount ? <span className="discount-badge">{e.feeDiscount}</span> : null}
              <h2 id="signup-box">{t.yourSignup(e)}</h2>
              <p className="small muted" style={{ margin: 0 }}>
                {affiliate ? t.appliedByLink : t.goesToOfficial(domain)}
              </p>
              <div className="code-box">
                {e.referralCode ? (
                  <>
                    <span className="code-value" aria-label={t.codeLabel}>
                      {e.referralCode}
                    </span>
                    <CopyCode code={e.referralCode} label={dict.blocks.copy} copiedLabel={dict.blocks.copied} />
                  </>
                ) : (
                  <span className="code-auto">{affiliate ? t.noCodeToType : t.officialSite(domain)}</span>
                )}
              </div>
              <CtaLink exchange={e} className="btn btn-primary btn-lg btn-block" locale={locale} />
              <ul className="code-list" aria-label={t.yourBenefits}>
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
                  <CheckIcon /> <span>{t.freeNeverRaises}</span>
                </li>
              </ul>
              {qrUrl(e) ? (
                <div className="qr-box">
                  <QrCode value={qrUrl(e)} size={112} label={t.qrLabel(e)} />
                  <div>
                    <strong>{t.preferApp}</strong>
                    <p className="small muted" style={{ margin: "4px 0 0" }}>
                      {t.scan(e)}
                    </p>
                  </div>
                </div>
              ) : null}
              <p className="small muted" style={{ margin: "14px 0 0" }}>
                {t.riskLine(e, links)}
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
              <h2 id="h-code-facts">{t.codeFactsTitle(e)}</h2>
              <p>{t.codeFactsIntro(e, monthYear, reviewed)}</p>
              <div className="table-wrap">
                <table className="kv">
                  <caption className="sr-only">{t.codeFactsCaption(e)}</caption>
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
              <h2 id="h-benefits">{t.benefitsTitle(e)}</h2>
              <p>{t.benefitsIntro(e)}</p>
              <div className="benefit-box">
                <div className="benefit-head">
                  <span className="eyebrow" style={{ margin: 0 }}>
                    {t.offerChecked(reviewed)}
                  </span>
                  <strong className="benefit-headline">{mainBenefit(e)}</strong>
                </div>
                <ul className="benefit-list">
                  {e.feeDiscount ? (
                    <li>
                      <CheckIcon />{" "}
                      <span>
                        <strong>{e.feeDiscount}</strong>{dashFor(locale)}{t.appliedWhenRegistering}
                      </span>
                    </li>
                  ) : null}
                  {e.benefits.map((b) => (
                    <li key={b}>
                      <CheckIcon /> <span>{b}</span>
                    </li>
                  ))}
                  <li>
                    <CheckIcon /> <span>{t.noExtraCost}</span>
                  </li>
                </ul>
                <div className="covers">
                  <span className="small muted">{t.oneReferralCovers}</span>
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
                  {t.claimOffer(e)}
                </CtaLink>
              </div>
              {e.welcomeTasks.length ? (
                <>
                  <h3 style={{ marginTop: 28 }}>{t.tasksTitle(e)}</h3>
                  <div className="table-wrap">
                    <table className="kv">
                      <caption className="sr-only">{t.tasksCaption(e)}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{t.task}</th>
                          <th scope="col">{t.reward}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {e.welcomeTasks.map((task) => (
                          <tr key={task.task}>
                            <th scope="row">{task.task}</th>
                            <td>{task.reward}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="small muted" style={{ marginTop: 10 }}>
                    {t.tasksNote(e, reviewed)}
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
              <h2 id="h-use-code">{t.useCodeTitle(e)}</h2>
              {e.referral.guide.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h3>{t.whereToEnter(e)}</h3>
              <p>{e.referral.whereToEnter}</p>
              <h3>{t.forgotCode}</h3>
              <p>{e.referral.afterSignup}</p>
              <h3>{t.asInvited}</h3>
              <p>{e.referral.inviteeReward}</p>
              {interfaceNote ? <p className="small muted">{interfaceNote}</p> : null}
            </section>

            <section id="how-to" aria-labelledby="h-how">
              <h2 id="h-how">{t.howToTitle(e)}</h2>
              <p>{t.howToIntro(e)}</p>
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
                <CtaLink exchange={e}>{t.startRegistration(e)}</CtaLink>
              </p>
            </section>

            <section id="verification" aria-labelledby="h-kyc">
              <h2 id="h-kyc">{t.kycTitle(e)}</h2>
              <p>{e.signup.kyc}</p>
              <dl className="facts">
                <div>
                  <dt>{t.verification}</dt>
                  <dd>{e.signup.kycShort}</dd>
                </div>
                <div>
                  <dt>{t.minAge}</dt>
                  <dd>{e.signup.minAge}</dd>
                </div>
              </dl>
              <h3 style={{ marginTop: 22 }}>{t.documents}</h3>
              <p>{e.signup.documents}</p>
            </section>

            <section id="key-facts" aria-labelledby="h-facts">
              <h2 id="h-facts">{t.factsTitle(e)}</h2>
              <dl className="facts">
                <div>
                  <dt>{t.founded}</dt>
                  <dd>{e.founded}</dd>
                </div>
                <div>
                  <dt>{t.headquarters}</dt>
                  <dd>{e.headquarters}</dd>
                </div>
                <div>
                  <dt>{t.futuresFees}</dt>
                  <dd className="num">
                    {e.futuresFees.maker} / {e.futuresFees.taker}
                  </dd>
                </div>
                <div>
                  <dt>{t.spotFees}</dt>
                  <dd className="num">
                    {e.spotFees.maker} / {e.spotFees.taker}
                  </dd>
                </div>
                <div>
                  <dt>{t.maxLeverage}</dt>
                  <dd>{e.maxLeverage}</dd>
                </div>
                <div>
                  <dt>{t.assets}</dt>
                  <dd>{e.assets}</dd>
                </div>
                <div>
                  <dt>{t.openInterest}</dt>
                  <dd className="num">{dict.format.billions(e.market.openInterestBn)}</dd>
                </div>
                <div>
                  <dt>{t.volume24h}</dt>
                  <dd className="num">{dict.format.billions(e.market.volume24hBn)}</dd>
                </div>
                <div>
                  <dt>{t.users}</dt>
                  <dd>{e.users}</dd>
                </div>
                <div>
                  <dt>{t.regulation}</dt>
                  <dd>{e.regulation}</dd>
                </div>
              </dl>
              <p className="small muted" style={{ marginTop: 10 }}>
                {t.factsNote(prettyDate(site.marketDataDate, locale))}
              </p>
            </section>

            <section id="fees" aria-labelledby="h-fees">
              <h2 id="h-fees">{t.feesTitle(e)}</h2>
              <p>{t.feesIntro(e)}</p>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">{t.market}</th>
                      <th scope="col">{t.maker}</th>
                      <th scope="col">{t.taker}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{t.futuresRow}</th>
                      <td className="num">{e.futuresFees.maker}</td>
                      <td className="num">{e.futuresFees.taker}</td>
                    </tr>
                    <tr>
                      <th scope="row">{t.spotRow}</th>
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
                {t.feesNote(e, reviewed)}
              </p>
              {e.tokenDiscount ? <p style={{ marginTop: 14 }}>{e.tokenDiscount}</p> : null}
              <p style={{ marginTop: 14 }}>
                {e.feeNote} {t.funding}{" "}
                <a href={e.feesUrl} target="_blank" rel="noopener nofollow">
                  {t.liveSchedule(e)}
                </a>
                {localeInfo[locale].fullStop ?? "."}
              </p>
              {feesCompare ? <p>{feesCompare}</p> : null}
            </section>

            <section id="about" aria-labelledby="h-about">
              <h2 id="h-about">{t.aboutTitle(e)}</h2>
              {e.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h3>{t.products}</h3>
              <ul className="chips">
                {e.products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>

            <section id="pros-cons" aria-labelledby="h-pc">
              <h2 id="h-pc">{t.prosConsTitle(e)}</h2>
              <div className="pc">
                <div className="card">
                  <h3>
                    <CheckIcon /> {t.pros}
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
                    <MinusIcon /> {t.cons}
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
              <h2 id="h-best">{t.bestForTitle(e)}</h2>
              <ul>
                {e.bestFor.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p style={{ marginTop: 18 }}>
                <CtaLink exchange={e}>{t.openAccount(e)}</CtaLink>
              </p>
              <p>{t.notAMatch(e, alts.length, links, [pairLink(alts[0]), pairLink(alts[1])])}</p>
            </section>

            <section id="safety" aria-labelledby="h-safety">
              <h2 id="h-safety">{t.safetyTitle(e)}</h2>
              <p>{e.safety}</p>
              <div className="notice">
                <strong>{t.availability}</strong> {e.restricted}
              </div>
              {closedWhereYouLive ? <p style={{ marginTop: 14 }}>{closedWhereYouLive}</p> : null}
            </section>

            <section id="faq" aria-labelledby="h-faq">
              <h2 id="h-faq">{t.faqTitle(e)}</h2>
              <p>{t.faqIntro(e, faqs.length)}</p>
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
                        {t.guideLink(guides.linkLabel, g.name, <bdi lang={g.hreflang}>{g.language}</bdi>)}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section id="sources" aria-labelledby="h-sources">
              <h2 id="h-sources">{t.sourcesTitle}</h2>
              <p>{t.sourcesIntro(e, reviewed)}</p>
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
              <h2 id="h-alt">{t.alternativesTitle(e)}</h2>
              <p>{t.alternativesIntro(e, alts.length, links)}</p>
              <ul className="alt-links">
                {alts.map((x) => (
                  <li key={x.slug}>
                    <Link href={`${altPath}#${x.slug}`}>{x.name}</Link>{dashFor(locale)}{altInfo(x, locale).role}
                  </li>
                ))}
              </ul>
              <div className="grid grid-2">
                {alts.slice(0, 4).map((x) => (
                  <ExchangeCard key={x.slug} exchange={x} locale={locale} />
                ))}
              </div>
              <h3 style={{ marginTop: 28 }}>{t.headToHeadTitle(e)}</h3>
              <p>{t.headToHeadIntro(e)}</p>
              <ul className="chips">
                {alts.map((x) => (
                  <li key={x.slug}>
                    <Link href={pairLink(x).href}>{pairLink(x).label}</Link>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 16 }}>
                <Link href={altPath} className="btn btn-secondary btn-sm">
                  {t.compareAll(e, alts.length)}
                </Link>{" "}
                <Link href={comparePathFor(locale)} style={{ marginInlineStart: 12 }}>
                  {t.allComparisons}
                </Link>
              </p>
            </section>

            <div className="notice" style={{ marginTop: 48 }}>
              {t.riskNotice(pagePath("affiliateDisclosure", locale))}
            </div>
          </article>

          <aside className="toc" aria-label={t.onThisPage}>
            <strong>{t.onThisPage}</strong>
            <ol>
              {tocItems.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
            <CtaLink exchange={e} className="btn btn-primary btn-block" locale={locale} />
          </aside>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>{t.joinTitle(e)}</h2>
              <p>{t.joinText(e)}</p>
            </div>
            <CtaLink exchange={e} className="btn btn-primary btn-lg" locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
