import Link from "next/link";
import { exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { exchangesFor } from "@/data/i18n";
import { comparePathFor, versusLabel, versusPath } from "@/data/versus";
import type { Locale } from "@/i18n/config";
import { pageTexts } from "@/i18n/pages";
import { ExchangeLogo } from "./ExchangeLogo";

/**
 * Two-column layout for the text pages (imprint, privacy policy, affiliate disclosure, about):
 * the text on the left, and on the right a table of contents plus the referral codes and the
 * most-used comparisons. On narrow screens the sidebar moves below the text and the table of
 * contents is hidden.
 *
 * `toc` lists the ids of the `<h2>` elements of the page with their labels. The sidebar labels come
 * from `src/i18n/pages/`, and every link leads to the page in the language of `locale`.
 */
export function LegalLayout({ toc, locale, children }: { toc: [string, string][]; locale: Locale; children: React.ReactNode }) {
  const t = pageTexts(locale).layout;
  const ranked = [...exchangesFor(locale)].sort((a, b) => a.market.rank - b.market.rank);
  const [first, second, third] = ranked;
  return (
    <div className="container layout-2 legal-layout">
      <article className="legal">{children}</article>
      <aside className="side" aria-label={t.aside}>
        <nav className="toc side-toc" aria-label={t.onThisPage}>
          <strong>{t.onThisPage}</strong>
          <ol>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="toc side-sticky">
          <strong>{t.referralCodes}</strong>
          <ul className="side-codes">
            {ranked.map((e) => (
              <li key={e.slug}>
                <Link href={exchangePath(e.slug, locale)}>
                  <ExchangeLogo exchange={e} size={24} />
                  <span>{e.name}</span>
                  <code>{e.referralCode}</code>
                </Link>
              </li>
            ))}
          </ul>
          <strong style={{ display: "block", marginTop: 18 }}>{t.compare}</strong>
          <ul className="side-links">
            <li>
              <Link href={versusPath(first, second, locale)}>{versusLabel(first, second)}</Link>
            </li>
            <li>
              <Link href={versusPath(first, third, locale)}>{versusLabel(first, third)}</Link>
            </li>
            <li>
              <Link href={alternativesPath(first.slug, locale)}>{t.alternativesOf(first.name)}</Link>
            </li>
            <li>
              <Link href={comparePathFor(locale)}>{t.allComparisons}</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
