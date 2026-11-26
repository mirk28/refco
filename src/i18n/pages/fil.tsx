import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Filipino. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: measured Taglish – "exchange", "account", "fees", "referral code" in English, the frame in Filipino. The
 * reader is "ka / mo", the site is "kami / namin". About page "puwede", "lang"; the three legal pages "maaari",
 * "lamang". The person who runs the website is the "operator"; under the GDPR the "controller" and the "processor"
 * keep their English names. Data is "datos", personal data "personal na datos".
 *
 * Fixed form for the regulation: "General Data Protection Regulation ng EU (GDPR)" at its first mention in the page
 * text, then "GDPR" (the short meta description says "GDPR ng EU"); articles are cited as "Artikulo 6(1)(f) ng GDPR".
 * Laws, offices and frameworks keep their English names (E-Commerce Directive, EU-U.S. Data Privacy Framework, FADP, FDPIC); the two Polish acts are described in
 * Filipino with their date. Page names as in the footer: “Legal na impormasyon”, “Patakaran sa privacy”,
 * “Pagsisiwalat ng affiliate”, “Tungkol sa amin at metodolohiya”. Our own buttons and labels are quoted in “…”.
 * Names, addresses and email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Paalala:</strong> Bersyon sa Filipino ang pahinang ito na inihanda namin para sa kaginhawahan mo. Ang{" "}
    <a href={englishHref} hrefLang="en">
      bersyon sa Ingles
    </a>{" "}
    ang may legal na bisa.
  </p>
);

export const fil: PageTexts = {
  layout: {
    aside: "Sa pahinang ito at iba pa",
    onThisPage: "Sa pahinang ito",
    referralCodes: "Mga referral code",
    compare: "Paghahambing ng mga exchange",
    alternativesOf: (name) => <>{name} alternatives</>,
    allComparisons: "Lahat ng paghahambing ng mga exchange →",
  },

  home: "Home",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Tungkol sa ${site.name} at sa Aming Metodolohiya`,
    description: `Sino ang nagpapatakbo ng ${site.domain}, saan galing ang datos namin at paano namin sinusuri ang mga crypto exchange – ang metodolohiya ng ${site.name}.`,
    ldName: `Tungkol sa ${site.name}`,
    crumb: "Tungkol sa amin",
    intro: () => (
      <>
        <span className="eyebrow">Tungkol sa amin</span>
        <h1>Tungkol sa {site.name}</h1>
        <p className="lead">
          Tinutulungan ng {site.name} ({site.domain}) ang mga trader na mag-sign up sa tamang crypto derivatives exchange – gamit ang referral na gumagana
          at ang mga detalyeng dapat mong malaman bago ka mag-deposit.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Ano ang ginagawa namin",
        heading: "Ano ang ginagawa namin",
        body: () => (
          <p>
            Nakatuon kami sa pinakamalalaking exchange sa derivatives ranking ng CoinMarketCap. Para sa bawat exchange, naglalathala kami ng isang pahina na
            iisa ang ayos: mabilis na sagot, mahahalagang datos, fees, tapat na paglalarawan, kalamangan at kahinaan, mga paalala sa kaligtasan,
            availability at FAQ. Dahil dito, madaling ikumpara ang mga exchange.
          </p>
        ),
      }),
      methodology: section({
        nav: "Ang aming metodolohiya",
        heading: "Ang aming metodolohiya",
        body: (c) => (
          <ul>
            <li>
              Galing sa derivatives ranking ng CoinMarketCap ang <strong>market data</strong> (open interest, 24h volume, bilang ng market), at nakasaad ang
              petsa nito sa bawat pahina.
            </li>
            <li>
              <strong>Mga referral code, registration at verification</strong> – kung saan ilalagay ang code, kung puwede itong idagdag pagkatapos, ang mga
              hakbang sa pag-sign up at ang mga tuntunin sa KYC: binabasa namin ang lahat ng ito sa sariling website at help center ng bawat exchange.
              Nakalista sa bawat pahina ng exchange ang mga opisyal na pahinang pinagbatayan ng pagsusuri.
            </li>
            <li>
              Kinukuha namin ang <strong>fees at leverage</strong> sa opisyal na fee schedule ng bawat exchange, para sa standard tier (hindi VIP).
            </li>
            <li>
              Isinusulat namin ang <strong>mga welcome offer</strong> ayon sa pagkakalahad ng exchange, kasama ang mga kondisyon nito. Iba-iba ang mga ito
              depende sa bansa at madalas magbago.
            </li>
            <li>
              Galing sa sariling mga pahina ng lisensya at mga opisyal na pahayag ng exchange ang <strong>mga lisensya at insidente</strong>.
            </li>
            <li>
              Ginagamit ng <strong>mga paghahambing ng exchange</strong> – ang mga pahina ng mga alternatibo at ang mga{" "}
              <Link href={c.links.compare}>head-to-head na paghahambing</Link> – ang parehong mga numero ng mga pahina ng exchange. Minamarkahan lang naming
              inaalok ang isang produkto kapag ipinapakita ito mismo ng exchange sa sarili nitong website, at ang availability sa bawat bansa ay mula sa
              sariling mga tuntunin, listahan ng mga restricted na bansa at mga regional site ng bawat exchange. Kung aling exchange ang “Angat” sa isang
              punto, ang mga numerong iyon ang nagsasabi – hindi kami ang nagra-ranggo.
            </li>
            <li>
              <strong>Siklo ng pagsusuri:</strong> regular naming sinusuring muli ang datos; ang kasalukuyang petsa ng pagsusuri ay {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Kalayaan",
        heading: "Kalayaan",
        body: (c) => (
          <p>
            Kumikita kami ng komisyon sa referral mula sa mga exchange na nakalista rito – nasa{" "}
            <Link href={c.links.affiliateDisclosure}>Pagsisiwalat ng affiliate</Link> ang mga detalye. Hindi nito kailanman binabago ang mga datos na
            inilalathala namin, at lagi naming binabanggit ang mga kahinaan at restriction.
          </p>
        ),
      }),
      operator: section({
        nav: `Sino ang nagpapatakbo ng ${site.name}`,
        heading: <>Sino ang nagpapatakbo ng {site.name}</>,
        body: (c) => (
          <p>
            Pribadong website ang {site.name}, hindi kumpanya. Nakasaad sa <Link href={c.links.imprint}>Legal na impormasyon</Link> ang pangalan ng operator.
            Hindi exchange ang {site.name} at hindi nito kailanman tinatanggap o hinahawakan ang pera mo – direkta sa exchange binubuksan ang account.
          </p>
        ),
      }),
      contact: section({
        nav: "Makipag-ugnayan",
        heading: "Makipag-ugnayan",
        body: () => (
          <p>
            May nakita kang lumang impormasyon? Padalhan kami ng email sa <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – mabilis naming
            itinatama ang mga mali.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Pagsisiwalat ng Affiliate",
    description: `Paano kumikita ang ${site.name}, aling mga link ang patalastas at bakit hindi nito naaapektuhan ang datos na inilalathala namin tungkol sa mga exchange.`,
    intro: (c) => (
      <>
        <h1>Pagsisiwalat ng Affiliate</h1>
        <p className="lead">Pundasyon ng tiwala ang pagiging bukas. Narito nang eksakto kung paano pinopondohan ang {site.name}.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Paano kami kumikita",
        heading: "Paano kami kumikita",
        body: () => (
          <p>
            Kasali ang {site.name} sa mga referral at affiliate program ng mga exchange na itinatampok sa website na ito. Kapag nagbukas ka ng account gamit
            ang isa sa mga link namin, maaaring magbayad ang exchange ng komisyon sa operator ng website na ito – kadalasan, bahagi ng trading fees na
            nagmumula sa account mo. Hindi ka kailanman magbabayad nang mas malaki dahil dito: hindi tumataas ang fees mo dahil sa referral, at madalas pang
            may kasamang diskwento sa fees o welcome reward para sa iyo ang pag-sign up gamit ang referral. Ang exchange ang nagbabayad ng komisyon, hindi
            ikaw.
          </p>
        ),
      }),
      advertising: section({
        nav: "Aling mga link ang patalastas",
        heading: "Aling mga link ang patalastas",
        body: () => (
          <p>
            Patalastas ang bawat link at button na papunta sa isang exchange – halimbawa “Mag-sign up sa …”, “Mag-sign up” o “I-claim” – at ang bawat
            referral code na ipinapakita sa website na ito: isang komersyal na komunikasyon para sa exchange na iyon, at maaaring may bayad kami para rito.
            May marka ang mga link na ito na <code>rel=&quot;sponsored&quot;</code> alinsunod sa mga alituntunin ng mga search engine, at may link sa
            pagsisiwalat na ito ang bawat pahina.
          </p>
        ),
      }),
      independence: section({
        nav: "Ano ang hindi naaapektuhan nito",
        heading: "Ano ang hindi naaapektuhan nito",
        body: () => (
          <ul>
            <li>
              Kinukuha ang fees, leverage, mga lisensya, mga tuntunin sa verification at mga restriction sa bawat bansa sa sariling mga pahina ng mga
              exchange, at ang market data sa CoinMarketCap – hindi sa mga kasunduan sa marketing. Nakalista sa bawat pahina ng exchange ang mga sanggunian
              nito.
            </li>
            <li>Inilalathala namin ang mga kahinaan, mga insidente sa seguridad at mga restriction sa rehiyon ng bawat exchange.</li>
            <li>
              Sinusunod ng pagkakasunod-sunod ng mga exchange ang puwesto ng mga ito sa derivatives ranking ng CoinMarketCap. Walang exchange na maaaring
              magbayad para sa mas mataas na puwesto.
            </li>
            <li>
              Kinukuwenta mula sa mga inilathalang numero kung aling exchange ang “Angat” sa isang paghahambing. Hindi ito nabibili.
            </li>
          </ul>
        ),
      }),
      who: section({
        nav: "Kanino ka nakikipagtransaksyon",
        heading: "Kanino ka nakikipagtransaksyon",
        body: () => (
          <p>
            Website ng impormasyon ang {site.name}, hindi exchange o broker. Hindi nito kailanman tinatanggap o hinahawakan ang pera o mga crypto-asset mo.
            Kapag nag-sign up ka, sa exchange lamang ang kontrata mo, sa ilalim ng mga tuntunin ng exchange. Nakadepende sa bansang tinitirhan mo kung
            maaari kang gumamit ng isang exchange – suriin ang mga tuntunin nito bago ka mag-sign up.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Hindi payong pinansyal",
        heading: "Hindi payong pinansyal",
        body: () => (
          <p>
            Walang anuman sa website na ito ang rekomendasyon na bumili, magbenta o mag-trade ng anumang asset, at hindi nito pinapalitan ang payong
            isinasaalang-alang ang personal mong sitwasyon. Mga produktong mataas ang panganib ang crypto derivatives: pinalalaki ng leverage ang kita at
            ang lugi, at maaaring mawala ang buong deposit mo.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Nakasaad sa <Link href={c.links.imprint}>Legal na impormasyon</Link> ang operator ng website na ito; ipinapaliwanag naman sa{" "}
        <Link href={c.links.privacy}>Patakaran sa privacy</Link> kung paano pinangangasiwaan ang personal na datos.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Legal na Impormasyon (Imprint)",
    description: `Legal na impormasyon ng ${site.domain}: ang operator, paano makikipag-ugnayan, ano ang website at ano ang hindi, pananagutan at ang batas na umiiral.`,
    intro: (c) => (
      <>
        <h1>Legal na Impormasyon (Imprint)</h1>
        <p className="muted">
          Impormasyon tungkol sa tagapagbigay ng serbisyo alinsunod sa Artikulo 5 ng Directive 2000/31/EC (E-Commerce Directive) at sa Artikulo 5 ng batas
          ng Poland na may petsang Hulyo 18, 2002 tungkol sa pagbibigay ng mga serbisyo sa elektronikong paraan.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Operator",
        heading: "Operator ng website na ito",
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
              Ang “{site.name}”, “kami” at “namin” sa website na ito ay tumutukoy sa operator na nakasaad sa itaas. Pangalan ng website ang {site.name},
              hindi ng isang kumpanya.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Kinatawan",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Makipag-ugnayan",
        heading: "Makipag-ugnayan",
        body: () => (
          <p>
            Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Telepono: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Legal na anyo",
        heading: "Legal na anyo",
        body: () => <p>Isang pribadong indibidwal ang nagpapatakbo ng website na ito. Hindi ito nakatala sa anumang commercial register.</p>,
      }),
      register: section({
        heading: "Pagkakatala sa register at VAT",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Responsable sa nilalaman",
        heading: "Responsable sa nilalaman",
        body: () => <p>{legal.representative || legal.operator}, sa address na nakasaad sa itaas.</p>,
      }),
      scope: section({
        nav: "Ano ang website na ito",
        heading: "Ano ang website na ito – at ano ang hindi",
        body: () => (
          <p>
            Website ng impormasyon at paghahambing ang {site.name} tungkol sa mga crypto exchange at sa mga referral program ng mga ito. Hindi ito exchange,
            broker o tagapagbigay ng mga serbisyo sa crypto-asset: hindi ito tumatanggap, humahawak o naglilipat ng pera o crypto-asset, hindi ito
            nagsasagawa ng mga order at hindi ito pumapasok sa anumang kontrata sa mga bisita. Kung magbubukas ka ng account, direkta mo itong gagawin sa
            exchange, sa ilalim ng sariling mga tuntunin ng exchange at sa sarili nitong proseso ng verification.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Hindi payo, babala sa panganib",
        heading: "Hindi payo, babala sa panganib",
        body: () => (
          <p>
            Walang anuman sa website na ito ang payo sa pamumuhunan, pananalapi, batas o buwis, personal na rekomendasyon, o alok o paanyaya na bumili o
            magbenta ng anumang crypto-asset o instrumentong pinansyal. Inilalahad ng mga paghahambing ang mga datos na inilathala ng mga exchange, at hindi
            isinasaalang-alang ang personal mong kalagayan. Mataas ang panganib ng pagkalugi sa trading ng crypto-asset, lalo na kung may leverage –
            hanggang sa mawala ang buong deposit mo. Ikaw ang magpasya, at kung may alinlangan ka, kumonsulta sa isang lisensyadong tagapayo.
          </p>
        ),
      }),
      availability: section({
        nav: "Availability",
        heading: "Availability at mga restricted na bansa",
        body: () => (
          <p>
            Hindi inaalok ng mga exchange ang mga serbisyo nila sa bawat bansa, at restricted ang ilang produkto para sa mga residente ng ilang bansa. Hindi
            nakalaan ang website na ito sa mga taong, sa lugar na tinitirhan nila, ipinagbabawal ang paggamit ng exchange na tinutukoy o ang pagtanggap ng
            impormasyon tungkol dito. Bago ka mag-sign up, suriin ang mga tuntunin ng exchange at ang mga patakaran ng bansang tinitirhan mo. Para lamang sa
            mga nasa hustong gulang ang website na ito.
          </p>
        ),
      }),
      liability: section({
        nav: "Pananagutan",
        heading: "Pananagutan sa nilalaman",
        body: () => (
          <p>
            Maingat na inihanda ang nilalaman ng website na ito at regular itong sinusuri; ipinapakita ng bawat pahina ng exchange ang petsa ng huling
            pagsusuri nito at ang mga sangguniang pinagbatayan nito. Gayunman, ang mga exchange ang nagtatakda ng fees, mga limitasyon sa leverage, mga
            bonus, mga tuntunin sa verification at availability, at maaaring magbago ang mga ito anumang oras, kaya hindi namin magagarantiya na tama,
            kumpleto o napapanahon ang impormasyon. Ang mga tuntuning ipinapakita ng exchange sa sandaling mag-sign up ka ang siyang umiiral. Sa abot ng
            pinapayagan ng batas, hindi kami mananagot sa anumang pinsalang magmumula sa paggamit ng impormasyong ito; hindi apektado nito ang pananagutan sa
            sinadyang gawa at malubhang kapabayaan, gayundin ang anumang pananagutang hindi maaaring alisin ayon sa batas.
          </p>
        ),
      }),
      links: section({
        nav: "Mga panlabas na link",
        heading: "Mga link sa ibang website",
        body: (c) => (
          <p>
            May mga link ang website na ito papunta sa mga panlabas na website na hindi namin kontrolado. Ang kani-kaniyang provider lamang ang may
            pananagutan sa nilalaman ng mga ito. Affiliate (referral) link ang ilan sa mga palabas na link, at maaari kaming tumanggap ng komisyon para sa
            mga ito – tingnan ang <Link href={c.links.affiliateDisclosure}>Pagsisiwalat ng affiliate</Link>. Kung sa tingin mo ay papunta sa ilegal na
            nilalaman ang isang link, ipaalam sa amin sa <a href={`mailto:${legal.email}`}>{legal.email}</a> at susuriin namin ito nang walang pagkaantala.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Mga trademark at copyright",
        heading: "Mga trademark at copyright",
        body: () => (
          <p>
            Mga trademark ng kani-kanilang may-ari ang mga pangalan at logo ng mga exchange, at ginagamit lamang ang mga ito para matukoy kung aling exchange
            ang tinutukoy. Walang kaugnayan ang {site.name} sa alinman sa mga itinatampok na exchange, at hindi ito sinusuportahan o pinopondohan ng alinman
            sa mga ito. Protektado ng copyright ang lahat ng orihinal na teksto at grapiko sa website na ito.
          </p>
        ),
      }),
      disputes: section({
        nav: "Paglutas ng hindi pagkakasundo",
        heading: "Paglutas ng hindi pagkakasundo ng mamimili",
        body: () => (
          <p>
            Hindi kami nagbebenta ng produkto o serbisyo sa mga bisita, kaya walang kontrata ng mamimili na nabubuo sa paggamit ng website na ito. Hindi kami
            lumalahok sa mga proseso ng paglutas ng hindi pagkakasundo sa harap ng isang lupon ng arbitrasyon para sa mga mamimili. Sa exchange mismo dapat
            ipadala ang mga reklamo tungkol sa isang exchange.
          </p>
        ),
      }),
      law: section({
        nav: "Batas na umiiral",
        heading: "Batas na umiiral",
        body: () => (
          <p>
            Ang batas ng Poland ang umiiral sa website na ito at sa paggamit nito. Kung mamimili ka, hindi apektado ang mga mandatoryong probisyon sa
            proteksyon ng mamimili ng bansang karaniwan mong tinitirhan.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Tingnan din ang aming <Link href={c.links.privacy}>Patakaran sa privacy</Link> at{" "}
        <Link href={c.links.affiliateDisclosure}>Pagsisiwalat ng affiliate</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Patakaran sa Privacy",
    description: `Paano pinangangasiwaan ng ${site.domain} ang personal na datos sa ilalim ng GDPR: Google Analytics lamang kung papayag ka, walang advertising cookie.`,
    intro: (c) => (
      <>
        <h1>Patakaran sa Privacy</h1>
        <p className="muted">Huling na-update: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Sa madaling salita:</strong> Hindi gumagamit ang {site.domain} ng advertising pixel, social-media plugin o panlabas na font. Tumatakbo
          lamang ang Google Analytics kung papayagan mo ito sa banner ng pahintulot; kung wala ang pahintulot mo, walang cookie na inilalagay at walang
          ipinapadala sa Google. Bukod dito, ang tanging pinoproseso namin ay ang teknikal na datos na kailangan para maihatid nang ligtas ang website.
          Kapag pinindot mo ang link papunta sa isang exchange, aalis ka sa website namin at ang sariling patakaran sa privacy ng exchange ang iiral.
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
              Ang controller na may pananagutan sa pagproseso ng datos sa website na ito, ayon sa kahulugan ng Artikulo 4(7) ng General Data Protection
              Regulation ng EU (GDPR), ay ang operator ng website, isang pribadong indibidwal:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Nakabase sa Poland ang controller. Umiiral ang GDPR at ang batas ng Poland na may petsang Mayo 10, 2018 tungkol sa proteksyon ng personal na
              datos. Kung binibisita mo ang website mula sa Switzerland, maaaring umiral din ang Federal Act on Data Protection (FADP) ng Switzerland; bukas
              din sa iyo sa parehong paraan ang mga karapatang inilalarawan sa ibaba.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Hosting at log file",
        heading: "2. Hosting at mga server log file",
        body: () => (
          <>
            <p>
              Naka-host ang website na ito sa {legal.hostingProvider} (“Vercel”), na nagsisilbing processor namin (Artikulo 28 ng GDPR). Kapag binisita mo
              ang website, awtomatikong pinoproseso ng Vercel ang teknikal na datos na ipinapadala ng browser mo: IP address, petsa at oras ng request,
              hiniling na URL, referrer URL, uri at bersyon ng browser, operating system at HTTP status code. Kailangan ang datos na ito para maihatid ang
              website at matiyak na matatag at ligtas ito (halimbawa, para maipagtanggol ito laban sa mga atake). Hindi ito pinagsasama sa ibang
              pinagmumulan ng datos at hindi ginagamit para makilala ka.
            </p>
            <p>
              Legal na batayan: Artikulo 6(1)(f) ng GDPR – ang lehitimong interes namin sa isang ligtas at maayos na gumaganang website. Iniimbak ng Vercel
              ang log data sa limitadong panahon, saka ito binubura. Maaaring iproseso ng Vercel ang datos sa United States. Sertipikado ang Vercel sa
              ilalim ng EU-U.S. Data Privacy Framework, kung saan naglabas ang European Commission ng adequacy decision (Artikulo 45 ng GDPR), at umiiral
              ang data processing agreement ng Vercel, na kasama ang EU Standard Contractual Clauses.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Mga cookie at analytics",
        heading: "3. Mga cookie at analytics",
        body: () => (
          <>
            <p>
              Kung wala ang pahintulot mo, wala kaming inilalagay na cookie at hindi kami gumagamit ng analytics. Hindi kami gumagamit ng advertising
              network, fingerprinting o social-media plugin, at mula sa sarili naming domain inihahatid ang lahat ng font at larawan. Hindi kami gumagawa ng
              automated na pagpapasya o profiling (Artikulo 22 ng GDPR).
            </p>
            <p>
              Iniimbak ang pinili mo sa banner ng pahintulot sa local storage ng browser mo (entry na <code>refco-analytics-consent</code>, value na
              “granted” o “denied”), para hindi na namin kailangang magtanong ulit sa bawat pahina. Kailangan ang entry na ito para igalang ang pinili mo,
              at hindi ito ipinapadala kaninuman.
            </p>
            <h3 id="analytics">Google Analytics – kung may pahintulot mo lamang</h3>
            <p>
              Kung pipiliin mo ang “Payagan ang analytics”, gagamitin ng website na ito ang Google Analytics 4, isang serbisyo ng Google Ireland Limited,
              Gordon House, Barrow Street, Dublin 4, Ireland (“Google”). Naglalagay ang Google Analytics ng mga cookie na <code>_ga</code> at{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (bilang default, iniimbak nang hanggang dalawang taon) para mapag-iba ang mga bisita.
              Itinatala nito kung aling mga pahina ang tinitingnan, paano narating ng mga bisita ang website, ang tinatayang rehiyon batay sa IP address, at
              datos ng browser at device. Ayon sa Google, hindi nagtatala o nag-iimbak ng IP address ang Analytics 4. Ginagamit lamang namin ang mga report
              sa pinagsama-samang anyo, para makita kung aling mga pahina ang binabasa. Naka-off ang mga advertising feature: walang advertising cookie at
              walang personalisasyon ng ad.
            </p>
            <p>
              Legal na batayan: ang pahintulot mo (Artikulo 6(1)(a) ng GDPR). Nagsisilbing processor namin ang Google. Maaaring mailipat ang datos sa Google
              LLC sa United States, na sertipikado sa ilalim ng EU-U.S. Data Privacy Framework. Binubura ng Google ang datos sa antas ng user pagkatapos ng
              retention period na nakatakda sa Analytics, na hindi hihigit sa 14 buwan. Maaari mong bawiin ang pahintulot mo anumang oras, na may bisa para
              sa hinaharap, sa “Mga setting ng cookie” sa ibaba ng bawat pahina; pagkatapos nito, aalisin sa browser mo ang mga Analytics cookie at hindi na
              gagamitin ang Analytics. Higit pang impormasyon mula sa Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Mga link sa mga exchange",
        heading: "4. Mga link sa mga exchange (affiliate link)",
        body: (c) => (
          <p>
            May mga link ang website namin papunta sa mga crypto exchange ng ikatlong partido. Referral link ang ilan sa mga ito, para malaman ng exchange na
            galing ka sa website namin. Wala kaming ipinapadalang personal na datos sa exchange; bahagi ng link mismo ang referral identifier, at kami ang
            tinutukoy nito, hindi ikaw. Pagkapindot mo, nasa website ka na ng exchange at ang patakaran nito sa privacy ang umiiral. Maaari nang maglagay ang
            exchange ng mga cookie at iproseso ang datos mo bilang hiwalay na controller. Iniuulat sa amin ng exchange kung aling mga komisyon ang nagmula sa
            mga account na binuksan gamit ang mga link namin. Maaaring may pseudonymous na account identifier (halimbawa, user ID) at mga numero ng fees ang
            ganitong report; ginagamit lamang namin ito sa pagtutuos ng mga komisyon (Artikulo 6(1)(f) ng GDPR) at hindi namin sinusubukang kilalanin ka
            mula rito. Higit pa tungkol sa mga link na ito: <Link href={c.links.affiliateDisclosure}>Pagsisiwalat ng affiliate</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Pakikipag-ugnayan sa email",
        heading: "5. Pakikipag-ugnayan sa email",
        body: () => (
          <p>
            Kung makikipag-ugnayan ka sa amin sa email, pinoproseso namin ang datos na ibinibigay mo (email address, pangalan, nilalaman ng mensahe mo) para
            masagot ang kahilingan mo. Legal na batayan: Artikulo 6(1)(f) ng GDPR – ang lehitimong interes namin na sagutin ang mga tanong. Iniimbak ang
            mensahe mo sa mailbox namin, na pinapatakbo ng isang email service provider na nagsisilbing processor namin. Binubura namin ang palitan ng
            mensahe kapag naasikaso na ang kahilingan mo, maliban kung hinihingi ng batas na itago namin ito nang mas matagal. Hindi ka obligadong magbigay
            ng anumang personal na datos; kung wala lang ang email address mo, hindi ka namin masasagot.
          </p>
        ),
      }),
      recipients: section({
        nav: "Mga tumatanggap ng datos",
        heading: "6. Mga tumatanggap ng datos",
        body: () => (
          <p>
            Hindi kami nagbebenta ng personal na datos at hindi namin ito ipinapasa sa ikatlong partido para sa sarili nilang layunin. Ang mga service
            provider lamang na binanggit sa itaas ang nagpoproseso ng datos – ang hosting provider, ang email provider at, kung pinayagan mo ang analytics,
            ang Google – at ibinubunyag lamang ito sa mga awtoridad kapag inoobliga kami ng batas.
          </p>
        ),
      }),
      rights: section({
        nav: "Mga karapatan mo",
        heading: "7. Mga karapatan mo",
        body: () => (
          <>
            <p>Alinsunod sa mga kinakailangan ng batas, may karapatan ka sa:</p>
            <ul>
              <li>pag-access sa personal na datos na hawak namin tungkol sa iyo (Artikulo 15 ng GDPR),</li>
              <li>pagwawasto ng maling datos (Artikulo 16 ng GDPR),</li>
              <li>pagbura (Artikulo 17 ng GDPR) at paghihigpit sa pagproseso (Artikulo 18 ng GDPR),</li>
              <li>data portability (Artikulo 20 ng GDPR),</li>
              <li>
                pagtutol, batay sa mga dahilang may kinalaman sa partikular mong sitwasyon, sa pagprosesong nakabatay sa lehitimong interes (Artikulo 21 ng
                GDPR),
              </li>
              <li>pagbawi anumang oras ng pahintulot na ibinigay mo, na may bisa para sa hinaharap (Artikulo 7(3) ng GDPR),</li>
              <li>
                pagsasampa ng reklamo sa isang supervisory authority (Artikulo 77 ng GDPR) – sa Poland, ang President of the Personal Data Protection Office
                (Prezes Urzędu Ochrony Danych Osobowych, UODO, uodo.gov.pl), o ang awtoridad ng bansa sa EU kung saan ka nakatira o nagtatrabaho; sa
                Switzerland, ang Federal Data Protection and Information Commissioner (FDPIC).
              </li>
            </ul>
            <p>
              Para magamit ang mga karapatan mo, padalhan kami ng email sa <a href={`mailto:${legal.email}`}>{legal.email}</a>. Sumasagot kami nang walang
              hindi makatwirang pagkaantala, at hindi lalampas sa isang buwan.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Mga bata",
        heading: "8. Mga bata",
        body: () => (
          <p>
            Para sa mga nasa hustong gulang ang website na ito. Hindi kami sadyang nagpoproseso ng personal na datos ng sinumang wala pang 18 taong gulang.
          </p>
        ),
      }),
      security: section({
        nav: "Seguridad ng datos",
        heading: "9. Seguridad ng datos",
        body: () => (
          <p>
            Inihahatid lamang ang website na ito sa naka-encrypt na HTTPS connection (TLS) na may mahigpit na security header. Gumagawa kami ng angkop na
            teknikal at pang-organisasyong hakbang para protektahan ang datos mo.
          </p>
        ),
      }),
      changes: section({
        nav: "Mga pagbabago",
        heading: "10. Mga pagbabago sa patakarang ito",
        body: (c) => (
          <p>
            Maaari naming baguhin ang patakaran sa privacy na ito kapag nagbago ang website o ang mga legal na kinakailangan. Laging makikita sa pahinang
            ito ang kasalukuyang bersyon. Nakasaad ang operator sa <Link href={c.links.imprint}>Legal na impormasyon</Link>.
          </p>
        ),
      }),
    },
  },
};
