import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePath } from "@/data/versus";
import { getDictionary } from "@/i18n";
import { homeAnchor, homePath, localeInfo, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { ConsentSettingsButton } from "./Analytics";
import { LangMenu } from "./LangMenu";

export function Header({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).layout;
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo locale={locale} />
        <nav className="main-nav" aria-label={t.mainNav}>
          {t.nav.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link">
              {n.label}
            </Link>
          ))}
          <LangMenu locale={locale} label={t.language} />
          <Link href={homeAnchor(locale, "exchanges")} className="btn btn-primary btn-sm">
            {t.getCodes}
          </Link>
        </nav>
      </div>
    </header>
  );
}

/**
 * The comparison, about and legal pages exist in English only. The footer of another language links to
 * them in a column of its own and marks them as English.
 */
export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).layout;
  const english = locale === "en";
  const year = new Date(`${site.lastReviewed}T00:00:00Z`).getUTCFullYear();
  const mark = english ? null : <> {t.englishOnly}</>;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo locale={locale} />
            <p style={{ marginTop: 16, maxWidth: 320 }}>{t.footerAbout}</p>
          </div>
          <div>
            <h3>{t.referralCodes}</h3>
            <ul>
              {exchanges.map((e) => (
                <li key={e.slug}>
                  <Link href={exchangePath(e.slug, locale)}>{t.referralCodeOf(e.name)}</Link>
                </li>
              ))}
            </ul>
          </div>
          {english ? (
            <div>
              <h3>{t.alternatives}</h3>
              <ul>
                {exchanges.map((e) => (
                  <li key={e.slug}>
                    <Link href={alternativesPath(e.slug)}>{t.alternativesOf(e.name)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h3>{t.guides}</h3>
            <ul>
              {english ? (
                <li><Link href={comparePath}>{t.comparisons}</Link></li>
              ) : (
                <li><Link href={homeAnchor(locale, "compare")}>{t.comparisons}</Link></li>
              )}
              <li><Link href={homeAnchor(locale, "how-it-works")}>{t.howCodesWork}</Link></li>
              <li><Link href={homeAnchor(locale, "faq")}>{t.faq}</Link></li>
              {english ? <li><Link href="/about">{t.about}</Link></li> : null}
            </ul>
          </div>
          {english ? null : (
            <div>
              <h3>{t.inEnglish}</h3>
              <ul>
                <li><a href={comparePath} hrefLang="en">Exchange comparisons</a></li>
                {exchanges.slice(0, 3).map((e) => (
                  <li key={e.slug}>
                    <a href={alternativesPath(e.slug)} hrefLang="en">{e.name} alternatives</a>
                  </li>
                ))}
                <li><a href="/about" hrefLang="en">About &amp; methodology</a></li>
              </ul>
            </div>
          )}
          <div>
            <h3>{t.legal}</h3>
            <ul>
              <li><Link href="/imprint" hrefLang={english ? undefined : "en"}>{t.imprint}</Link>{mark}</li>
              <li><Link href="/privacy" hrefLang={english ? undefined : "en"}>{t.privacy}</Link>{mark}</li>
              <li><Link href="/affiliate-disclosure" hrefLang={english ? undefined : "en"}>{t.disclosure}</Link>{mark}</li>
              <li><ConsentSettingsButton label={t.cookieSettings} /></li>
              <li><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-risk">
          <p>{t.risk}</p>
          <p>{t.affiliate}</p>
          <p className="footer-lang">
            {t.language}:{" "}
            {locales.map((l, i) => (
              <span key={l}>
                {i > 0 ? " · " : null}
                {l === locale ? (
                  <strong>{localeInfo[l].name}</strong>
                ) : (
                  <a href={homePath(l)} hrefLang={localeInfo[l].htmlLang} lang={localeInfo[l].htmlLang}>
                    {localeInfo[l].name}
                  </a>
                )}
              </span>
            ))}
          </p>
          <p>
            © {year} {site.name} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
