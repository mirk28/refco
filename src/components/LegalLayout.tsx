import Link from "next/link";
import { exchanges, exchangePath } from "@/data/exchanges";
import { alternativesPath } from "@/data/alternatives";
import { comparePath, versusLabel, versusPath } from "@/data/versus";
import { ExchangeLogo } from "./ExchangeLogo";

/**
 * Two-column layout for the text pages (imprint, privacy policy, affiliate disclosure, about):
 * the text on the left, and on the right a table of contents plus the referral codes and the
 * most-used comparisons. On narrow screens the sidebar moves below the text and the table of
 * contents is hidden.
 *
 * `toc` lists the ids of the `<h2>` elements of the page with their labels.
 */
export function LegalLayout({ toc, children }: { toc: [string, string][]; children: React.ReactNode }) {
  const ranked = [...exchanges].sort((a, b) => a.market.rank - b.market.rank);
  const [first, second, third] = ranked;
  return (
    <div className="container layout-2 legal-layout">
      <article className="legal">{children}</article>
      <aside className="side" aria-label="On this page and more">
        <nav className="toc side-toc" aria-label="On this page">
          <strong>On this page</strong>
          <ol>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="toc side-sticky">
          <strong>Referral codes</strong>
          <ul className="side-codes">
            {ranked.map((e) => (
              <li key={e.slug}>
                <Link href={exchangePath(e.slug)}>
                  <ExchangeLogo exchange={e} size={24} />
                  <span>{e.name}</span>
                  <code>{e.referralCode}</code>
                </Link>
              </li>
            ))}
          </ul>
          <strong style={{ display: "block", marginTop: 18 }}>Compare exchanges</strong>
          <ul className="side-links">
            <li>
              <Link href={versusPath(first, second)}>{versusLabel(first, second)}</Link>
            </li>
            <li>
              <Link href={versusPath(first, third)}>{versusLabel(first, third)}</Link>
            </li>
            <li>
              <Link href={alternativesPath(first.slug)}>{first.name} alternatives</Link>
            </li>
            <li>
              <Link href={comparePath}>All exchange comparisons →</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
