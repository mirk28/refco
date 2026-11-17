import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchangePath, outboundUrl } from "@/data/exchanges";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { ExchangeLogo } from "./ExchangeLogo";
import { ArrowIcon, CheckIcon, ExternalIcon } from "./Icons";

/*
 * Every block takes an optional `locale` (default: English). Pass exchange entries in the same language
 * (`exchangesFor(locale)`), because taglines, offers and leverage notes are part of the entry.
 */

/** Outbound CTA. Affiliate links are marked rel="sponsored" as Google requires. */
export function CtaLink({
  exchange,
  children,
  className = "btn btn-primary",
  locale = "en",
}: {
  exchange: Exchange;
  children?: React.ReactNode;
  className?: string;
  locale?: Locale;
}) {
  return (
    <a href={outboundUrl(exchange)} className={className} target="_blank" rel="sponsored nofollow noopener" data-exchange={exchange.slug}>
      {children ?? getDictionary(locale).blocks.signUpOn(exchange.name)}
      <ExternalIcon />
    </a>
  );
}

export function FaqList({ faqs, openFirst = true }: { faqs: Faq[]; openFirst?: boolean }) {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0}>
          <summary>{f.q}</summary>
          <div className="faq-a">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items, locale = "en" }: { items: { name: string; path: string }[]; locale?: Locale }) {
  return (
    <nav className="crumbs" aria-label={getDictionary(locale).blocks.breadcrumb}>
      <ol>
        {items.map((it, i) => (
          <li key={it.path}>{i < items.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function ExchangeCard({ exchange: e, locale = "en" }: { exchange: Exchange; locale?: Locale }) {
  const t = getDictionary(locale).blocks;
  return (
    <article className="card x-card">
      <div className="x-card-head">
        <ExchangeLogo exchange={e} size={48} />
        <div>
          <h3>
            <Link href={exchangePath(e.slug, locale)} style={{ color: "inherit", textDecoration: "none" }}>
              {e.name}
            </Link>
          </h3>
          <p>{e.tagline}</p>
        </div>
      </div>
      <p className="x-card-bonus">
        <CheckIcon /> <span>{e.feeDiscount || e.bonusHeadline}</span>
      </p>
      <dl>
        <div>
          <dt>{t.spotMakerTaker}</dt>
          <dd className="num">
            {e.spotFees.maker} / {e.spotFees.taker}
          </dd>
        </div>
        <div>
          <dt>{t.futuresMakerTaker}</dt>
          <dd className="num">
            {e.futuresFees.maker} / {e.futuresFees.taker}
          </dd>
        </div>
        <div>
          <dt>{t.maxLeverage}</dt>
          <dd>{e.maxLeverage.replace(/\s*\(.*\)/, "")}</dd>
        </div>
        <div>
          <dt>{t.since}</dt>
          <dd>{e.founded}</dd>
        </div>
      </dl>
      <div className="x-card-actions">
        <Link href={exchangePath(e.slug, locale)} className="btn btn-secondary btn-sm">
          {t.details} <ArrowIcon size={16} />
        </Link>
        <CtaLink exchange={e} className="btn btn-primary btn-sm">
          {t.signUp}
        </CtaLink>
      </div>
    </article>
  );
}

export function ComparisonTable({ list, locale = "en" }: { list: Exchange[]; locale?: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.blocks;
  return (
    <div className="table-wrap">
      <table>
        <caption className="sr-only">{t.tableCaption}</caption>
        <thead>
          <tr>
            <th scope="col">{t.exchange}</th>
            <th scope="col">{t.newUserOffer}</th>
            <th scope="col">{t.futuresFees}</th>
            <th scope="col">{t.spotFees}</th>
            <th scope="col">{t.maxLeverage}</th>
            <th scope="col">{t.openInterest}</th>
            <th scope="col">{t.markets}</th>
            <th scope="col">{t.since}</th>
            <th scope="col">
              <span className="sr-only">{t.action}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr key={e.slug}>
              <th scope="row">
                <span className="cell-x">
                  <ExchangeLogo exchange={e} size={32} />
                  <Link href={exchangePath(e.slug, locale)}>{e.name}</Link>
                </span>
              </th>
              <td className="offer-cell">{e.feeDiscount || e.bonusHeadline}</td>
              <td className="num">
                {e.futuresFees.maker} / {e.futuresFees.taker}
              </td>
              <td className="num">
                {e.spotFees.maker} / {e.spotFees.taker}
              </td>
              <td>{e.maxLeverage.replace(/\s*\(.*\)/, "")}</td>
              <td className="num">{dict.format.billionsExact(e.market.openInterestBn)}</td>
              <td className="num">{e.market.markets}</td>
              <td>{e.founded}</td>
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
  );
}
