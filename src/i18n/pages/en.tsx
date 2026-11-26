import type { ReactNode } from "react";
import Link from "next/link";
import { legal, site } from "@/config/site";

/**
 * The text pages in English: about, affiliate disclosure, imprint and privacy policy, plus the labels of
 * their sidebar. This file defines the shape (`PageTexts` below); every other language in this folder has
 * to provide the same pages with the same sections.
 *
 * A page is an intro, a list of sections and an optional closing paragraph. The component
 * (`src/components/TextPages.tsx`) renders every section as `<h2 id="…">` plus its body and builds the table
 * of contents from the `nav` labels, so headings, anchors and their order are the same in every language.
 * The order of the sections is the order in this file.
 *
 * Names, addresses and email addresses come from `src/config/site.ts` and are the same in every language.
 */

/** What a text needs from outside: paths in the language of the page and dates written out in it. */
export type TextContext = {
  links: {
    /** Hub of all comparisons. */
    compare: string;
    affiliateDisclosure: string;
    imprint: string;
    privacy: string;
    /** The same page in English – translations link to it as the binding version. */
    english: string;
  };
  /** Date of the last review (`site.lastReviewed`). */
  reviewed: string;
};

export type TextSection = {
  /** Label in the table of contents. Leave out for a section that is not listed there. */
  nav?: string;
  heading: ReactNode;
  body: (c: TextContext) => ReactNode;
};

const section = (s: TextSection) => s;

export const en = {
  /** Sidebar of the text pages. */
  layout: {
    aside: "On this page and more",
    onThisPage: "On this page",
    referralCodes: "Referral codes",
    compare: "Compare exchanges",
    alternativesOf: (name: string): ReactNode => <>{name} alternatives</>,
    allComparisons: "All exchange comparisons →",
  },

  /** Name of the home page in breadcrumbs. */
  home: "Home",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: "About RefCo & Our Methodology",
    description: `Who runs ${site.domain}, where our exchange data comes from, how we review crypto exchanges and how often fees and offers are re-checked.`,
    /** Name of the page in its structured data and in the breadcrumb. */
    ldName: "About RefCo",
    crumb: "About",
    intro: (_c: TextContext): ReactNode => (
      <>
        <span className="eyebrow">About</span>
        <h1>About {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) helps traders sign up on the right crypto derivatives exchange – with a working referral and the facts that matter
          before you deposit.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "What we do",
        heading: "What we do",
        body: () => (
          <p>
            We focus on the largest exchanges in CoinMarketCap&apos;s derivatives ranking and publish one page per exchange with the same structure: a quick
            answer, key facts, fees, an honest description, pros and cons, safety notes, availability and a FAQ. That makes exchanges easy to compare.
          </p>
        ),
      }),
      methodology: section({
        nav: "Our methodology",
        heading: "Our methodology",
        body: (c) => (
          <ul>
            <li>
              <strong>Market data</strong> (open interest, 24h volume, number of markets) comes from CoinMarketCap&apos;s derivatives ranking and is dated on every
              page.
            </li>
            <li>
              <strong>Referral codes, registration and verification</strong> – where the code goes, whether it can be added later, the sign-up steps and
              the KYC rules – are read on each exchange&apos;s own website and help centre. Every exchange page lists the official pages it was checked
              against.
            </li>
            <li>
              <strong>Fees and leverage</strong> are taken from each exchange&apos;s official fee schedule for the standard (non-VIP) tier.
            </li>
            <li>
              <strong>Welcome offers</strong> are quoted as the exchange states them, with their conditions. They differ by country and change often.
            </li>
            <li>
              <strong>Licences and incidents</strong> are taken from the exchange&apos;s own licence pages and official statements.
            </li>
            <li>
              <strong>Exchange comparisons</strong> – the alternatives pages and the <Link href={c.links.compare}>head-to-head comparisons</Link> – use the
              same figures as the exchange pages. Products are
              marked as offered only when the exchange shows them on its own site, and country availability is taken from each exchange&apos;s own
              terms, restricted-country lists and regional sites. Which exchange is &quot;ahead&quot; on a point is read off those figures, not
              ranked by us.
            </li>
            <li>
              <strong>Review cycle:</strong> data is re-checked regularly; the current review date is {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Independence",
        heading: "Independence",
        body: (c) => (
          <p>
            We earn referral commissions from the exchanges we list – details in our <Link href={c.links.affiliateDisclosure}>affiliate disclosure</Link>. That
            never changes the facts we publish, and we always mention weaknesses and restrictions.
          </p>
        ),
      }),
      operator: section({
        nav: `Who runs ${site.name}`,
        heading: <>Who runs {site.name}</>,
        body: (c) => (
          <p>
            {site.name} is a private website, not a company. The operator is named in the <Link href={c.links.imprint}>imprint</Link>. {site.name} is not an
            exchange and never receives or holds your money – accounts are opened directly with the exchange.
          </p>
        ),
      }),
      contact: section({
        nav: "Contact",
        heading: "Contact",
        body: () => (
          <p>
            Spotted outdated information? Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – we correct errors quickly.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Affiliate Disclosure",
    description: `How ${site.name} earns money, which links are advertising and why this does not influence the facts we publish about crypto exchanges.`,
    intro: (_c: TextContext): ReactNode => (
      <>
        <h1>Affiliate Disclosure</h1>
        <p className="lead">Transparency is the basis of trust. Here is exactly how {site.name} is financed.</p>
      </>
    ),
    sections: {
      earn: section({
        nav: "How we earn money",
        heading: "How we earn money",
        body: () => (
          <p>
            {site.name} takes part in the referral and affiliate programmes of the exchanges featured on this website. When you open an account through one
            of our links, the exchange may pay the operator of this website a commission – usually a share of the trading fees your account generates. You
            never pay more because of this: a referral does not raise your fees, and referral sign-ups often come with a fee discount or welcome reward for
            you. The commission is paid by the exchange, not by you.
          </p>
        ),
      }),
      advertising: section({
        nav: "Which links are advertising",
        heading: "Which links are advertising",
        body: () => (
          <p>
            Every link and button that leads to an exchange – for example &quot;Sign up on …&quot;, &quot;Sign up&quot; or &quot;Claim&quot; – and every
            referral code shown on this website is advertising: a commercial communication for that exchange, for which we may be paid. These links are
            marked with <code>rel=&quot;sponsored&quot;</code> in line with search-engine guidelines, and this disclosure is linked from every page.
          </p>
        ),
      }),
      independence: section({
        nav: "What this does not affect",
        heading: "What this does not affect",
        body: () => (
          <ul>
            <li>Fees, leverage, licences, verification rules and country restrictions are taken from the exchanges&apos; own pages, market data from
              CoinMarketCap – not from marketing agreements. Every exchange page lists its sources.</li>
            <li>We publish weaknesses, security incidents and regional restrictions for every exchange.</li>
            <li>The order of exchanges follows their position in CoinMarketCap&apos;s derivatives ranking. No exchange can pay for a better position.</li>
            <li>Which exchange is &quot;ahead&quot; in a comparison is calculated from the published figures. It cannot be bought.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Who you deal with",
        heading: "Who you deal with",
        body: () => (
          <p>
            {site.name} is an information website, not an exchange or a broker. It never receives or holds your money or crypto-assets. If you register,
            your contract is with the exchange alone, under the exchange&apos;s terms. Whether you may use an exchange depends on the country you live in –
            check its terms before you sign up.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "No financial advice",
        heading: "No financial advice",
        body: () => (
          <p>
            Nothing on this website is a recommendation to buy, sell or trade any asset, and it does not replace advice that takes your personal situation
            into account. Crypto derivatives are high-risk products: leverage multiplies gains and losses, and you can lose your entire deposit.
          </p>
        ),
      }),
    },
    outro: (c: TextContext): ReactNode => (
      <p className="muted">
        The operator of this website is named in the <Link href={c.links.imprint}>imprint</Link>; how personal data is handled is explained in the{" "}
        <Link href={c.links.privacy}>privacy policy</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Imprint (Legal Notice)",
    description: `Legal notice for ${site.domain}: operator, contact details, what the website is and is not, liability and applicable law.`,
    intro: (_c: TextContext): ReactNode => (
      <>
        <h1>Imprint (Legal Notice)</h1>
        <p className="muted">
          Information about the service provider in accordance with Art. 5 of Directive 2000/31/EC (E-Commerce Directive) and Art. 5 of the Polish Act of
          18 July 2002 on the Provision of Services by Electronic Means.
        </p>
      </>
    ),
    /** `represented-by`, `legal-form` and `register` are shown depending on `legal` in `src/config/site.ts`. */
    sections: {
      operator: section({
        nav: "Operator",
        heading: "Operator of this website",
        body: () => (
          <>
            <p>
              {legal.operator}
              <br />
              {legal.street}
              <br />
              {legal.zipCity}
              <br />
              {legal.country}
            </p>
            <p>
              &quot;{site.name}&quot;, &quot;we&quot; and &quot;us&quot; on this website refer to the operator named above. {site.name} is the name of the
              website, not of a company.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Represented by",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Contact",
        heading: "Contact",
        body: () => (
          <p>
            Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Phone: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Legal form",
        heading: "Legal form",
        body: () => <p>This website is operated by a private individual. There is no entry in a commercial register.</p>,
      }),
      register: section({
        heading: "Register entry and VAT",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Responsible for content",
        heading: "Responsible for content",
        body: () => <p>{legal.representative || legal.operator}, address as above.</p>,
      }),
      scope: section({
        nav: "What this website is",
        heading: "What this website is – and what it is not",
        body: () => (
          <p>
            {site.name} is an information and comparison website about crypto exchanges and their referral programmes. It is not an exchange, a broker or
            a provider of crypto-asset services: it does not accept, hold or transfer money or crypto-assets, does not execute orders and does not conclude
            any contract with visitors. If you open an account, you do so directly with the exchange, under the exchange&apos;s own terms and through the
            exchange&apos;s own verification process.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "No advice, risk warning",
        heading: "No advice, risk warning",
        body: () => (
          <p>
            Nothing on this website is investment, financial, legal or tax advice, a personal recommendation, or an offer or invitation to buy or sell any
            crypto-asset or financial instrument. The comparisons state facts published by the exchanges and do not take your personal circumstances into
            account. Trading crypto-assets, especially with leverage, involves a high risk of loss – up to the loss of your entire deposit. Decide for
            yourself and, if in doubt, consult a licensed adviser.
          </p>
        ),
      }),
      availability: section({
        nav: "Availability",
        heading: "Availability and restricted countries",
        body: () => (
          <p>
            The exchanges do not offer their services in every country, and some products are restricted for residents of certain countries. This website is
            not directed at persons for whom using the exchange in question, or receiving information about it, is prohibited where they live. Before you
            register, check the exchange&apos;s terms and the rules of your country of residence. The website is intended for adults only.
          </p>
        ),
      }),
      liability: section({
        nav: "Liability",
        heading: "Liability for content",
        body: () => (
          <p>
            The content of this website has been prepared with care and is checked regularly; every exchange page shows the date of its last review and the
            sources it was checked against. However, fees, leverage limits, bonuses, verification rules and availability are set by the exchanges and may
            change at any time, so we cannot guarantee that the information is accurate, complete or up to date. The terms shown by the exchange at the
            moment you register are the ones that apply. To the extent permitted by law, we accept no liability for damage arising from the use of this
            information; liability for intent and gross negligence and any liability that cannot be excluded by law remain unaffected.
          </p>
        ),
      }),
      links: section({
        nav: "External links",
        heading: "Links to other websites",
        body: (c) => (
          <p>
            This website contains links to external websites over which we have no control. The respective provider is solely responsible for their content.
            Some outbound links are affiliate (referral) links, for which we may receive a commission – see our{" "}
            <Link href={c.links.affiliateDisclosure}>affiliate disclosure</Link>. If you believe a link leads to unlawful content, tell us at{" "}
            <a href={`mailto:${legal.email}`}>{legal.email}</a> and we will check it without delay.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Trademarks and copyright",
        heading: "Trademarks and copyright",
        body: () => (
          <p>
            Exchange names and logos are trademarks of their respective owners and are used for identification purposes only. {site.name} is not affiliated
            with, endorsed by or sponsored by any of the exchanges featured. All original texts and graphics on this website are protected by copyright.
          </p>
        ),
      }),
      disputes: section({
        nav: "Dispute resolution",
        heading: "Consumer dispute resolution",
        body: () => (
          <p>
            We do not sell goods or services to visitors, so no consumer contract arises from using this website. We do not take part in dispute resolution
            proceedings before a consumer arbitration body. Complaints about an exchange have to be addressed to that exchange.
          </p>
        ),
      }),
      law: section({
        nav: "Applicable law",
        heading: "Applicable law",
        body: () => (
          <p>
            Polish law applies to this website and its use. If you are a consumer, the mandatory consumer-protection provisions of the country in which you
            habitually reside remain unaffected.
          </p>
        ),
      }),
    },
    outro: (c: TextContext): ReactNode => (
      <p className="muted">
        See also our <Link href={c.links.privacy}>privacy policy</Link> and <Link href={c.links.affiliateDisclosure}>affiliate disclosure</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Privacy Policy",
    description: `How ${site.domain} handles personal data under the EU GDPR: Google Analytics only with your consent, no advertising cookies, no data sold.`,
    intro: (c: TextContext): ReactNode => (
      <>
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {c.reviewed}</p>

        <div className="info">
          <strong>In short:</strong> {site.domain} uses no advertising pixels, social-media plugins or external fonts. Google Analytics runs only if you
          allow it in the consent banner; without your consent no cookie is set and nothing is sent to Google. Apart from that we only process the
          technical data that is necessary to deliver the website securely. If you click a link to an exchange, you leave our website and the
          exchange&apos;s own privacy policy applies.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Controller",
        heading: "1. Controller",
        body: () => (
          <>
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
          </>
        ),
      }),
      hosting: section({
        nav: "Hosting and log files",
        heading: "2. Hosting and server log files",
        body: () => (
          <>
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
          </>
        ),
      }),
      cookies: section({
        nav: "Cookies and analytics",
        heading: "3. Cookies and analytics",
        body: () => (
          <>
            <p>
              Without your consent we set no cookies and use no analytics. We use no advertising networks, fingerprinting or social-media plugins, and all
              fonts and images are served from our own domain. We do not carry out automated decision-making or profiling (Art. 22 GDPR).
            </p>
            <p>
              Your choice in the consent banner is stored in your browser&apos;s local storage (entry <code>refco-analytics-consent</code>, value
              &quot;granted&quot; or &quot;denied&quot;), so that we do not have to ask again on every page. This entry is necessary to respect your choice and
              is not sent to anyone.
            </p>
            <h3 id="analytics">Google Analytics – only with your consent</h3>
            <p>
              If you choose &quot;Allow analytics&quot;, this website loads Google Analytics 4, a service of Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland (&quot;Google&quot;). Google Analytics sets the cookies <code>_ga</code> and{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (by default stored for up to two years) to tell visitors apart. It records which pages
              are viewed, how visitors reached the website, the approximate region derived from the IP address, and browser and device data. According to
              Google, Analytics 4 does not log or store IP addresses. We use the reports only in aggregated form, to see which pages are read. Advertising
              features are switched off: no advertising cookies and no ad personalisation.
            </p>
            <p>
              Legal basis: your consent (Art. 6(1)(a) GDPR). Google acts as our processor. Data can be transferred to Google LLC in the United States,
              which is certified under the EU-U.S. Data Privacy Framework. Google deletes user-level data after the retention period set in Analytics, 14
              months at most. You can withdraw your consent at any time with effect for the future through &quot;Cookie settings&quot; at the bottom of
              every page; the Analytics cookies are then removed from your browser and Analytics is no longer loaded. More information from Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Links to exchanges",
        heading: "4. Links to exchanges (affiliate links)",
        body: (c) => (
          <p>
            Our website contains links to third-party crypto exchanges. Some of them are referral links that let the exchange recognise that you came from
            our website. We do not transmit any personal data to the exchange; the referral identifier is part of the link itself and identifies us, not
            you. Once you click, you are on the exchange&apos;s website and its privacy policy applies. The exchange may then set cookies and process your
            data as a separate controller. The exchange reports to us which commissions arose from accounts opened through our links. Such a report can
            contain a pseudonymous account identifier (for example a user ID) and fee figures; we use it only to account for commissions (Art. 6(1)(f)
            GDPR) and do not try to identify you from it. More about these links: <Link href={c.links.affiliateDisclosure}>affiliate disclosure</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Contact by email",
        heading: "5. Contact by email",
        body: () => (
          <p>
            If you contact us by email, we process the data you provide (email address, name, content of your message) to answer your request. Legal basis:
            Art. 6(1)(f) GDPR – our legitimate interest in answering enquiries. Your message is stored in our mailbox, which is run by an email service
            provider acting as our processor. We delete the correspondence once your request has been dealt with, unless the law requires us to keep it
            longer. You are not obliged to provide any personal data; without an email address we simply cannot reply.
          </p>
        ),
      }),
      recipients: section({
        nav: "Recipients of data",
        heading: "6. Recipients of data",
        body: () => (
          <p>
            We do not sell personal data and do not pass it on to third parties for their own purposes. Data is processed only by the service providers
            named above – the hosting provider, the email provider and, if you have allowed analytics, Google – and is disclosed to authorities only
            where the law obliges us to do so.
          </p>
        ),
      }),
      rights: section({
        nav: "Your rights",
        heading: "7. Your rights",
        body: () => (
          <>
            <p>Subject to the legal requirements, you have the right to:</p>
            <ul>
              <li>access the personal data we hold about you (Art. 15 GDPR),</li>
              <li>rectification of inaccurate data (Art. 16 GDPR),</li>
              <li>erasure (Art. 17 GDPR) and restriction of processing (Art. 18 GDPR),</li>
              <li>data portability (Art. 20 GDPR),</li>
              <li>object, on grounds relating to your particular situation, to processing based on legitimate interests (Art. 21 GDPR),</li>
              <li>withdraw a consent you have given at any time, with effect for the future (Art. 7(3) GDPR),</li>
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
          </>
        ),
      }),
      children: section({
        nav: "Children",
        heading: "8. Children",
        body: () => (
          <p>
            This website is intended for adults. We do not knowingly process personal data of persons under 18.
          </p>
        ),
      }),
      security: section({
        nav: "Data security",
        heading: "9. Data security",
        body: () => (
          <p>
            This website is delivered exclusively over an encrypted HTTPS connection (TLS) with strict security headers. We take appropriate technical and
            organisational measures to protect your data.
          </p>
        ),
      }),
      changes: section({
        nav: "Changes",
        heading: "10. Changes to this policy",
        body: (c) => (
          <p>
            We may update this privacy policy when the website or legal requirements change. The current version is always available on this page. The
            operator is named in the <Link href={c.links.imprint}>imprint</Link>.
          </p>
        ),
      }),
    },
  },
};

export type PageTexts = typeof en;
