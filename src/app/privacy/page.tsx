import type { Metadata } from "next";
import Link from "next/link";
import { legal, site } from "@/config/site";
import { LegalLayout } from "@/components/LegalLayout";
import { prettyDate } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.domain} handles personal data under the EU General Data Protection Regulation (GDPR). No cookies, no tracking, no analytics.`,
  alternates: { canonical: "/privacy" },
};

const toc: [string, string][] = [
  ["controller", "Controller"],
  ["hosting", "Hosting and log files"],
  ["cookies", "No cookies, no tracking"],
  ["affiliate-links", "Links to exchanges"],
  ["email", "Contact by email"],
  ["recipients", "Recipients of data"],
  ["rights", "Your rights"],
  ["children", "Children"],
  ["security", "Data security"],
  ["changes", "Changes"],
];

export default function PrivacyPage() {
  return (
    <LegalLayout toc={toc}>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {prettyDate(site.lastReviewed)}</p>

        <div className="info">
          <strong>In short:</strong> {site.domain} does not use cookies, analytics, advertising pixels, social-media plugins or external fonts. We only process
          the technical data that is necessary to deliver the website securely. If you click a link to an exchange, you leave our website and the exchange&apos;s
          own privacy policy applies.
        </div>

        <h2 id="controller">1. Controller</h2>
        <p>
          The controller responsible for data processing on this website within the meaning of Art. 4(7) of the EU General Data Protection Regulation
          (GDPR) is the operator of the website, a private individual:
        </p>
        <p>
          {legal.operator}
          <br />
          {legal.street}, {legal.zipCity}, {legal.country}
          <br />
          Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </p>
        <p>
          The controller is established in Poland. The GDPR and the Polish Act of 10 May 2018 on the Protection of Personal Data apply. If you visit the
          website from Switzerland, the Swiss Federal Act on Data Protection (FADP) may apply in addition; the rights described below are open to you in
          the same way.
        </p>

        <h2 id="hosting">2. Hosting and server log files</h2>
        <p>
          This website is hosted by {legal.hostingProvider} (&quot;Vercel&quot;), which acts as our processor (Art. 28 GDPR). When you visit the website,
          Vercel automatically processes technical data that your browser transmits: IP address, date and time of the request, requested URL, referrer
          URL, browser type and version, operating system and the HTTP status code. This data is required to deliver the website and to ensure its
          stability and security (for example to defend against attacks). It is not merged with other data sources and is not used to identify you.
        </p>
        <p>
          Legal basis: Art. 6(1)(f) GDPR – our legitimate interest in a secure and functional website. Log data is stored by Vercel for a limited period
          and then deleted. Vercel may process data in the United States. Vercel is certified under the EU-U.S. Data Privacy Framework, for which the
          European Commission has adopted an adequacy decision (Art. 45 GDPR), and Vercel&apos;s data processing agreement, which includes the EU
          Standard Contractual Clauses, applies.
        </p>

        <h2 id="cookies">3. No cookies, no tracking, no profiling</h2>
        <p>
          We do not set cookies and do not store or read any other information on your device. We do not use tracking or analytics tools, advertising
          networks, fingerprinting or social-media plugins, and all fonts and images are served from our own domain. A cookie consent banner is therefore
          not required. We do not carry out automated decision-making or profiling (Art. 22 GDPR). If any of this changes, we will update this policy
          and ask for your consent where the law requires it, before any non-essential processing takes place.
        </p>

        <h2 id="affiliate-links">4. Links to exchanges (affiliate links)</h2>
        <p>
          Our website contains links to third-party crypto exchanges. Some of them are referral links that let the exchange recognise that you came from
          our website. We do not transmit any personal data to the exchange; the referral identifier is part of the link itself and identifies us, not
          you. Once you click, you are on the exchange&apos;s website and its privacy policy applies. The exchange may then set cookies and process your
          data as a separate controller. The exchange reports to us which commissions arose from accounts opened through our links. Such a report can
          contain a pseudonymous account identifier (for example a user ID) and fee figures; we use it only to account for commissions (Art. 6(1)(f)
          GDPR) and do not try to identify you from it. More about these links: <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
        </p>

        <h2 id="email">5. Contact by email</h2>
        <p>
          If you contact us by email, we process the data you provide (email address, name, content of your message) to answer your request. Legal basis:
          Art. 6(1)(f) GDPR – our legitimate interest in answering enquiries. Your message is stored in our mailbox, which is run by an email service
          provider acting as our processor. We delete the correspondence once your request has been dealt with, unless the law requires us to keep it
          longer. You are not obliged to provide any personal data; without an email address we simply cannot reply.
        </p>

        <h2 id="recipients">6. Recipients of data</h2>
        <p>
          We do not sell personal data and do not pass it on to third parties for their own purposes. Data is processed only by the service providers
          named above – the hosting provider and the email provider – and is disclosed to authorities only where the law obliges us to do so.
        </p>

        <h2 id="rights">7. Your rights</h2>
        <p>Subject to the legal requirements, you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you (Art. 15 GDPR),</li>
          <li>rectification of inaccurate data (Art. 16 GDPR),</li>
          <li>erasure (Art. 17 GDPR) and restriction of processing (Art. 18 GDPR),</li>
          <li>data portability (Art. 20 GDPR),</li>
          <li>object, on grounds relating to your particular situation, to processing based on legitimate interests (Art. 21 GDPR),</li>
          <li>
            lodge a complaint with a supervisory authority (Art. 77 GDPR) – in Poland the President of the Personal Data Protection Office (Prezes Urzędu
            Ochrony Danych Osobowych, UODO, uodo.gov.pl), or the authority of the EU country in which you live or work; in Switzerland the Federal Data
            Protection and Information Commissioner (FDPIC).
          </li>
        </ul>
        <p>
          To exercise your rights, email <a href={`mailto:${legal.email}`}>{legal.email}</a>. We answer without undue delay and within one month at the
          latest.
        </p>

        <h2 id="children">8. Children</h2>
        <p>
          This website is intended for adults. We do not knowingly process personal data of persons under 18.
        </p>

        <h2 id="security">9. Data security</h2>
        <p>
          This website is delivered exclusively over an encrypted HTTPS connection (TLS) with strict security headers. We take appropriate technical and
          organisational measures to protect your data.
        </p>

        <h2 id="changes">10. Changes to this policy</h2>
        <p>
          We may update this privacy policy when the website or legal requirements change. The current version is always available on this page. The
          operator is named in the <Link href="/imprint">imprint</Link>.
        </p>
      </LegalLayout>
  );
}
