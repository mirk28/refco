import type { Metadata } from "next";
import Link from "next/link";
import { legal, site } from "@/config/site";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Imprint (Legal Notice)",
  description: `Legal notice for ${site.domain}: operator, contact details, what the website is and is not, liability and applicable law.`,
  alternates: { canonical: "/imprint" },
  robots: { index: true, follow: true },
};

const toc: [string, string][] = [
  ["operator", "Operator"],
  ["contact", "Contact"],
  ["legal-form", "Legal form"],
  ["responsible", "Responsible for content"],
  ["scope", "What this website is"],
  ["no-advice", "No advice, risk warning"],
  ["availability", "Availability"],
  ["liability", "Liability"],
  ["links", "External links"],
  ["trademarks", "Trademarks and copyright"],
  ["disputes", "Dispute resolution"],
  ["law", "Applicable law"],
];

export default function ImprintPage() {
  const isPrivate = legal.operatorType === "private";
  return (
    <LegalLayout toc={toc}>
        <h1>Imprint (Legal Notice)</h1>
        <p className="muted">
          Information about the service provider in accordance with Art. 5 of Directive 2000/31/EC (E-Commerce Directive) and Art. 5 of the Polish Act of
          18 July 2002 on the Provision of Services by Electronic Means.
        </p>

        <h2 id="operator">Operator of this website</h2>
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

        {legal.representative ? (
          <>
            <h2 id="represented-by">Represented by</h2>
            <p>{legal.representative}</p>
          </>
        ) : null}

        <h2 id="contact">Contact</h2>
        <p>
          Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
          {legal.phone ? (
            <>
              <br />
              Phone: {legal.phone}
            </>
          ) : null}
        </p>

        {isPrivate ? (
          <>
            <h2 id="legal-form">Legal form</h2>
            <p>This website is operated by a private individual. There is no entry in a commercial register.</p>
          </>
        ) : (
          <>
            <h2 id="register">Register entry and VAT</h2>
            <p>
              {legal.registerEntry}
              <br />
              {legal.vatId}
            </p>
          </>
        )}

        <h2 id="responsible">Responsible for content</h2>
        <p>{legal.representative || legal.operator}, address as above.</p>

        <h2 id="scope">What this website is – and what it is not</h2>
        <p>
          {site.name} is an information and comparison website about crypto exchanges and their referral programmes. It is not an exchange, a broker or
          a provider of crypto-asset services: it does not accept, hold or transfer money or crypto-assets, does not execute orders and does not conclude
          any contract with visitors. If you open an account, you do so directly with the exchange, under the exchange&apos;s own terms and through the
          exchange&apos;s own verification process.
        </p>

        <h2 id="no-advice">No advice, risk warning</h2>
        <p>
          Nothing on this website is investment, financial, legal or tax advice, a personal recommendation, or an offer or invitation to buy or sell any
          crypto-asset or financial instrument. The comparisons state facts published by the exchanges and do not take your personal circumstances into
          account. Trading crypto-assets, especially with leverage, involves a high risk of loss – up to the loss of your entire deposit. Decide for
          yourself and, if in doubt, consult a licensed adviser.
        </p>

        <h2 id="availability">Availability and restricted countries</h2>
        <p>
          The exchanges do not offer their services in every country, and some products are restricted for residents of certain countries. This website is
          not directed at persons for whom using the exchange in question, or receiving information about it, is prohibited where they live. Before you
          register, check the exchange&apos;s terms and the rules of your country of residence. The website is intended for adults only.
        </p>

        <h2 id="liability">Liability for content</h2>
        <p>
          The content of this website has been prepared with care and is checked regularly; every exchange page shows the date of its last review and the
          sources it was checked against. However, fees, leverage limits, bonuses, verification rules and availability are set by the exchanges and may
          change at any time, so we cannot guarantee that the information is accurate, complete or up to date. The terms shown by the exchange at the
          moment you register are the ones that apply. To the extent permitted by law, we accept no liability for damage arising from the use of this
          information; liability for intent and gross negligence and any liability that cannot be excluded by law remain unaffected.
        </p>

        <h2 id="links">Links to other websites</h2>
        <p>
          This website contains links to external websites over which we have no control. The respective provider is solely responsible for their content.
          Some outbound links are affiliate (referral) links, for which we may receive a commission – see our{" "}
          <Link href="/affiliate-disclosure">affiliate disclosure</Link>. If you believe a link leads to unlawful content, tell us at{" "}
          <a href={`mailto:${legal.email}`}>{legal.email}</a> and we will check it without delay.
        </p>

        <h2 id="trademarks">Trademarks and copyright</h2>
        <p>
          Exchange names and logos are trademarks of their respective owners and are used for identification purposes only. {site.name} is not affiliated
          with, endorsed by or sponsored by any of the exchanges featured. All original texts and graphics on this website are protected by copyright.
        </p>

        <h2 id="disputes">Consumer dispute resolution</h2>
        <p>
          We do not sell goods or services to visitors, so no consumer contract arises from using this website. We do not take part in dispute resolution
          proceedings before a consumer arbitration body. Complaints about an exchange have to be addressed to that exchange.
        </p>

        <h2 id="law">Applicable law</h2>
        <p>
          Polish law applies to this website and its use. If you are a consumer, the mandatory consumer-protection provisions of the country in which you
          habitually reside remain unaffected.
        </p>

        <p className="muted">
          See also our <Link href="/privacy">privacy policy</Link> and <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
        </p>
      </LegalLayout>
  );
}
