import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePathFor } from "@/data/versus";
import { getDictionary } from "@/i18n";
import { homeAnchor, homePath, localeInfo, locales, pagePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { ConsentSettingsButton } from "./Analytics";
import { LangMenu } from "./LangMenu";

/** `unknownPage`: the address is not a page of the site (404), so the language menu leads to the home pages. */
export function Header({ locale = "en", unknownPage = false }: { locale?: Locale; unknownPage?: boolean }) {
  const t = getDictionary(locale).layout;
  // The same links in every language; only the labels come from the dictionary.
  const nav = [
    { href: homeAnchor(locale, "exchanges"), label: t.nav.exchanges },
    { href: homeAnchor(locale, "benefits"), label: t.nav.benefits },
    { href: comparePathFor(locale), label: t.nav.compare },
    { href: homeAnchor(locale, "how-it-works"), label: t.nav.howItWorks },
    { href: pagePath("about", locale), label: t.nav.about },
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo locale={locale} />
        <nav className="main-nav" aria-label={t.mainNav}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link">
              {n.label}
            </Link>
          ))}
          <LangMenu locale={locale} label={t.language} homeOnly={unknownPage} />
          <Link href={homeAnchor(locale, "exchanges")} className="btn btn-primary btn-sm">
            {t.getCodes}
          </Link>
        </nav>
      </div>
    </header>
  );
}

/** The same footer in every language; its links lead to the pages of that language. */
export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale).layout;
  const year = new Date(`${site.lastReviewed}T00:00:00Z`).getUTCFullYear();
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
          <div>
            <h3>{t.alternatives}</h3>
            <ul>
              {exchanges.map((e) => (
                <li key={e.slug}>
                  <Link href={alternativesPath(e.slug, locale)}>{t.alternativesOf(e.name)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t.guides}</h3>
            <ul>
              <li><Link href={comparePathFor(locale)}>{t.comparisons}</Link></li>
              <li><Link href={homeAnchor(locale, "how-it-works")}>{t.howCodesWork}</Link></li>
              <li><Link href={homeAnchor(locale, "faq")}>{t.faq}</Link></li>
              <li><Link href={pagePath("about", locale)}>{t.about}</Link></li>
            </ul>
          </div>
          <div>
            <h3>{t.legal}</h3>
            <ul>
              <li><Link href={pagePath("imprint", locale)}>{t.imprint}</Link></li>
              <li><Link href={pagePath("privacy", locale)}>{t.privacy}</Link></li>
              <li><Link href={pagePath("affiliateDisclosure", locale)}>{t.disclosure}</Link></li>
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
