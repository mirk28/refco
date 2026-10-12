import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchangePath, outboundUrl } from "@/data/exchanges";
import { ExchangeLogo } from "./ExchangeLogo";
import { ArrowIcon, CheckIcon, ExternalIcon } from "./Icons";

/** Outbound CTA. Affiliate links are marked rel="sponsored" as Google requires. */
export function CtaLink({
  exchange,
  children,
  className = "btn btn-primary",
}: {
  exchange: Exchange;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={outboundUrl(exchange)} className={className} target="_blank" rel="sponsored nofollow noopener" data-exchange={exchange.slug}>
      {children ?? <>Sign up on {exchange.name}</>}
      <ExternalIcon />
    </a>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>{f.q}</summary>
          <div className="faq-a">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={it.path}>{i < items.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function ExchangeCard({ exchange: e }: { exchange: Exchange }) {
  return (
    <article className="card x-card">
      <div className="x-card-head">
        <ExchangeLogo exchange={e} size={48} />
        <div>
          <h3>
            <Link href={exchangePath(e.slug)} style={{ color: "inherit", textDecoration: "none" }}>
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
          <dt>Spot maker / taker</dt>
          <dd className="num">
            {e.spotFees.maker} / {e.spotFees.taker}
          </dd>
        </div>
        <div>
          <dt>Futures maker / taker</dt>
          <dd className="num">
            {e.futuresFees.maker} / {e.futuresFees.taker}
          </dd>
        </div>
        <div>
          <dt>Max leverage</dt>
          <dd>{e.maxLeverage.replace(/\s*\(.*\)/, "")}</dd>
        </div>
        <div>
          <dt>Since</dt>
          <dd>{e.founded}</dd>
        </div>
      </dl>
      <div className="x-card-actions">
        <Link href={exchangePath(e.slug)} className="btn btn-secondary btn-sm">
          Details <ArrowIcon size={16} />
        </Link>
        <CtaLink exchange={e} className="btn btn-primary btn-sm">
          Sign up
        </CtaLink>
      </div>
    </article>
  );
}

export function ComparisonTable({ list }: { list: Exchange[] }) {
  return (
    <div className="table-wrap">
      <table>
        <caption className="sr-only">
          Comparison of crypto exchanges by new-user offer, spot and futures fees, leverage and market data
        </caption>
        <thead>
          <tr>
            <th scope="col">Exchange</th>
            <th scope="col">New-user offer</th>
            <th scope="col">Futures fees (maker / taker)</th>
            <th scope="col">Spot fees</th>
            <th scope="col">Max leverage</th>
            <th scope="col">Open interest</th>
            <th scope="col">Markets</th>
            <th scope="col">Since</th>
            <th scope="col">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr key={e.slug}>
              <th scope="row">
                <span className="cell-x">
                  <ExchangeLogo exchange={e} size={32} />
                  <Link href={exchangePath(e.slug)}>{e.name}</Link>
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
              <td className="num">${e.market.openInterestBn.toFixed(2)}B</td>
              <td className="num">{e.market.markets}</td>
              <td>{e.founded}</td>
              <td>
                <CtaLink exchange={e} className="btn btn-primary btn-sm">
                  Sign up
                </CtaLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
