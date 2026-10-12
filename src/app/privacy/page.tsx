import type { Metadata } from "next";
import { legal, site } from "@/config/site";
import { prettyDate } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.domain} handles personal data under the EU GDPR and the Swiss Federal Act on Data Protection (revFADP). No cookies, no tracking.`,
  alternates: { canonical: "/privacy" },
};

const V = ({ v }: { v: string }) => (v.startsWith("[") ? <span className="placeholder">{v}</span> : <>{v}</>);

export default function PrivacyPage() {
  return (
    <div className="container">
      <article className="legal">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {prettyDate(site.lastReviewed)}</p>

        <div className="info">
          <strong>In short:</strong> {site.domain} does not use cookies, analytics, advertising pixels, social-media plugins or external fonts. We only process
          the technical data that is necessary to deliver the website securely. If you click a link to an exchange, you leave our website and the exchange&apos;s
          own privacy policy applies.
        </div>

        <h2>1. Controller</h2>
        <p>
          The controller responsible for data processing on this website within the meaning of the EU General Data Protection Regulation (GDPR) and the
          Swiss Federal Act on Data Protection (revFADP / revDSG) is:
        </p>
        <p>
          <V v={legal.operator} />
          <br />
          <V v={legal.street} />, <V v={legal.zipCity} />, <V v={legal.country} />
          <br />
          Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </p>
        <p>
          If the controller is established outside the EU and the GDPR applies, the EU representative pursuant to Art. 27 GDPR is:{" "}
          <span className="placeholder">[EU REPRESENTATIVE – only required in certain cases]</span>.
        </p>

        <h2>2. Hosting and server log files</h2>
        <p>
          This website is hosted by {legal.hostingProvider} (&quot;Vercel&quot;). When you visit the website, Vercel automatically processes technical data
          that your browser transmits: IP address, date and time of the request, requested URL, referrer URL, browser type and version, operating system and
          the HTTP status code. This data is required to deliver the website, to ensure its stability and security (e.g. to defend against attacks) and is
          not merged with other data sources.
        </p>
        <p>
          Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a secure and functional website); in Switzerland Art. 31 revFADP. Log data is stored by
          Vercel for a limited period and then deleted. Vercel may process data in the USA. Vercel is certified under the EU-U.S. Data Privacy Framework
          (and its Swiss-U.S. extension) and we have concluded a data processing agreement including the EU Standard Contractual Clauses.
        </p>

        <h2>3. No cookies, no tracking</h2>
        <p>
          We do not set cookies and do not use tracking or analytics tools, advertising networks, fingerprinting or social-media plugins. All fonts and
          images are served from our own domain. A cookie consent banner is therefore not required. If this changes, we will update this policy and ask for
          your consent where legally necessary before any non-essential processing takes place.
        </p>

        <h2>4. Links to exchanges (affiliate links)</h2>
        <p>
          Our website contains links to third-party crypto exchanges. Some of them are referral links that let the exchange recognise that you came from
          our website. We do not transmit any personal data to the exchange; the referral identifier is part of the link itself. Once you click, you are on
          the exchange&apos;s website and its privacy policy applies. Exchanges may then set cookies and process your data as their own controller.
        </p>

        <h2>5. Contact by email</h2>
        <p>
          If you contact us by email, we process the data you provide (email address, name, content of your message) to answer your request. Legal basis:
          Art. 6(1)(b) or (f) GDPR. We delete the data once your request has been dealt with, unless statutory retention obligations apply.
        </p>

        <h2>6. Your rights</h2>
        <p>Subject to the legal requirements, you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you (Art. 15 GDPR, Art. 25 revFADP),</li>
          <li>rectification of inaccurate data (Art. 16 GDPR),</li>
          <li>erasure (Art. 17 GDPR) and restriction of processing (Art. 18 GDPR),</li>
          <li>data portability (Art. 20 GDPR, Art. 28 revFADP),</li>
          <li>object to processing based on legitimate interests (Art. 21 GDPR),</li>
          <li>
            lodge a complaint with a supervisory authority – in Switzerland the Federal Data Protection and Information Commissioner (FDPIC/EDÖB), in the EU
            the authority of your place of residence.
          </li>
        </ul>
        <p>
          To exercise your rights, email <a href={`mailto:${legal.email}`}>{legal.email}</a>.
        </p>

        <h2>7. Data security</h2>
        <p>
          This website is delivered exclusively over an encrypted HTTPS connection (TLS) with strict security headers. We take appropriate technical and
          organisational measures to protect your data.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this privacy policy when the website or legal requirements change. The current version is always available on this page.
        </p>
      </article>
    </div>
  );
}
