import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/config/site";
import { exchanges, exchangePath } from "@/data/exchanges";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link">
              {n.label}
            </Link>
          ))}
          <Link href="/#exchanges" className="btn btn-primary btn-sm">
            Get codes
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const year = new Date(`${site.lastReviewed}T00:00:00Z`).getUTCFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 16, maxWidth: 320 }}>
              Verified referral codes for the largest crypto exchanges – welcome bonuses and fee rebates for spot and futures. Clear facts, no tracking.
            </p>
          </div>
          <div>
            <h3>Referral codes</h3>
            <ul>
              {exchanges.map((e) => (
                <li key={e.slug}>
                  <Link href={exchangePath(e.slug)}>{e.name} referral code</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Guides</h3>
            <ul>
              <li><Link href="/#compare">Exchange comparison</Link></li>
              <li><Link href="/#how-it-works">How referral codes work</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/about">About &amp; methodology</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/imprint">Imprint (Impressum)</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/affiliate-disclosure">Affiliate disclosure</Link></li>
              <li><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-risk">
          <p>
            <strong>Risk warning:</strong> Trading crypto derivatives with leverage is highly risky and can result in the loss of your entire
            deposit. Only trade with money you can afford to lose. Nothing on this website is financial, investment or tax advice.
          </p>
          <p>
            <strong>Affiliate disclosure:</strong> Some links are referral links. If you sign up through them we may earn a commission at no extra
            cost to you. This never affects the facts we publish. Exchange names and logos are trademarks of their respective owners; {site.name} is
            not affiliated with or endorsed by them.
          </p>
          <p>
            © {year} {site.name} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
