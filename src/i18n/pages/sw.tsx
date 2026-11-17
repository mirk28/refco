import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Swahili. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: an exchange is "jukwaa" (plural "majukwaa"), the reader is addressed in the singular ("unaweza"), the
 * site speaks as "sisi". The operator of the website is "mwendeshaji". Under the GDPR a controller is "mdhibiti wa
 * data", a processor "mchakataji wa data", processing "uchakataji", personal data "data binafsi", a consumer "mlaji".
 * Fixed form of the regulation: "Kanuni ya Jumla ya Ulinzi wa Data (GDPR) ya Umoja wa Ulaya (EU)" at its first
 * mention in the privacy policy, afterwards "GDPR"; articles are cited as "Ibara ya 6(1)(f) ya GDPR", also for
 * the Directive and the Polish acts ("Ibara ya 5 ya …"). Page names and buttons of this site are the fixed labels
 * of the language sheet; quoted ones stand in ‘…’. Names, addresses and email addresses stay as they are in
 * `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Kumbuka:</strong> Ukurasa huu ni toleo la Kiswahili tunalokupa kwa urahisi wako. Toleo lenye nguvu ya kisheria ni{" "}
    <a href={englishHref} hrefLang="en">
      toleo la Kiingereza
    </a>
    .
  </p>
);

export const sw: PageTexts = {
  layout: {
    aside: "Kwenye ukurasa huu na zaidi",
    onThisPage: "Kwenye ukurasa huu",
    referralCodes: "Misimbo ya rufaa",
    compare: "Linganisha majukwaa",
    alternativesOf: (name) => <>Mbadala wa {name}</>,
    allComparisons: "Ulinganisho wote wa majukwaa →",
  },

  home: "Mwanzo",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Kuhusu sisi na jinsi tunavyokagua – ${site.name}`,
    description: `Nani anaendesha ${site.domain}, data yetu kuhusu ada, misimbo ya rufaa na ofa inatoka wapi, pamoja na jinsi tunavyokagua majukwaa ya crypto.`,
    ldName: `Kuhusu ${site.name}`,
    crumb: "Kuhusu",
    intro: () => (
      <>
        <span className="eyebrow">Kuhusu</span>
        <h1>Kuhusu {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) inawasaidia wafanyabiashara kujisajili kwenye jukwaa sahihi la derivatives za crypto (exchange) – kwa rufaa
          inayofanya kazi na taarifa muhimu za kujua kabla ya kuweka pesa.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Tunachofanya",
        heading: "Tunachofanya",
        body: () => (
          <p>
            Tunaangazia majukwaa makubwa zaidi kwenye viwango vya CoinMarketCap vya majukwaa ya derivatives. Kwa kila jukwaa tunachapisha ukurasa mmoja
            wenye muundo uleule: jibu la haraka, taarifa kuu, ada, maelezo ya kweli, faida na hasara, maelezo kuhusu usalama, upatikanaji kwa nchi na
            maswali yanayoulizwa mara kwa mara (FAQ). Hivyo ni rahisi kulinganisha majukwaa.
          </p>
        ),
      }),
      methodology: section({
        nav: "Mbinu yetu",
        heading: "Mbinu yetu",
        body: (c) => (
          <ul>
            <li>
              <strong>Data ya soko</strong> – open interest (jumla ya mikataba iliyo wazi), kiasi cha biashara cha saa 24 na idadi ya masoko – inatoka
              kwenye viwango vya CoinMarketCap vya majukwaa ya derivatives. Kila ukurasa unaonyesha tarehe ya data hiyo.
            </li>
            <li>
              <strong>Misimbo ya rufaa, usajili na uthibitishaji</strong> – msimbo unawekwa wapi, kama unaweza kuongezwa baadaye, hatua za kujisajili
              na kanuni za KYC – tunavisoma kwenye tovuti na kituo cha msaada cha kila jukwaa lenyewe. Kila ukurasa wa jukwaa unaorodhesha kurasa rasmi
              tulizotumia kuhakiki.
            </li>
            <li>
              <strong>Ada na leverage</strong> huchukuliwa kutoka kwenye jedwali rasmi la ada ambalo kila jukwaa huchapisha, kwa kiwango cha kawaida
              (bila VIP).
            </li>
            <li>
              <strong>Ofa za ukaribisho</strong> tunazinukuu jinsi jukwaa linavyozitaja, pamoja na masharti yake. Hutofautiana kati ya nchi na nchi na
              hubadilika mara kwa mara.
            </li>
            <li>
              <strong>Leseni na matukio</strong> huchukuliwa kutoka kwenye kurasa za leseni za jukwaa lenyewe na kwenye taarifa zake rasmi.
            </li>
            <li>
              <strong>Ulinganisho wa majukwaa</strong> – kurasa za mbadala na <Link href={c.links.compare}>ulinganisho wa ana kwa ana</Link> – unatumia
              takwimu zilezile zilizo kwenye kurasa za majukwaa. Bidhaa huonyeshwa kuwa inatolewa pale tu jukwaa lenyewe linapoionyesha kwenye tovuti
              yake. Upatikanaji kwa nchi huchukuliwa kutoka kwenye masharti ya kila jukwaa, orodha zake za nchi zilizozuiwa na tovuti zake za kikanda.
              Jukwaa lipi liko ‘Mbele’ katika kipengele fulani husomwa kutoka kwenye takwimu hizo; si sisi tunaopanga viwango.
            </li>
            <li>
              <strong>Mzunguko wa ukaguzi:</strong> data hukaguliwa upya mara kwa mara; ukaguzi wa sasa ni wa {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Uhuru wetu",
        heading: "Uhuru wetu",
        body: (c) => (
          <p>
            Tunapata kamisheni za rufaa kutoka kwa majukwaa tunayoorodhesha – maelezo kamili yako kwenye ukurasa wa{" "}
            <Link href={c.links.affiliateDisclosure}>Ufichuzi wa ushirika</Link>. Hilo halibadilishi kamwe ukweli tunaouchapisha. Kila mara tunataja
            udhaifu wa majukwaa na vizuizi vyake.
          </p>
        ),
      }),
      operator: section({
        nav: `Anayeendesha ${site.name}`,
        heading: <>Anayeendesha {site.name}</>,
        body: (c) => (
          <p>
            {site.name} ni tovuti ya mtu binafsi, si kampuni. Mwendeshaji wake ametajwa kwenye ukurasa wa{" "}
            <Link href={c.links.imprint}>Taarifa za kisheria</Link>. {site.name} si jukwaa la biashara na kamwe haipokei wala haishikilii pesa zako –
            akaunti hufunguliwa moja kwa moja kwenye jukwaa husika.
          </p>
        ),
      }),
      contact: section({
        nav: "Mawasiliano",
        heading: "Mawasiliano",
        body: () => (
          <p>
            Umeona taarifa iliyopitwa na wakati? Tuandikie barua pepe kwa <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – tunarekebisha
            makosa haraka.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Ufichuzi wa ushirika",
    description: `Jinsi ${site.name} inavyopata mapato, viungo vipi ni matangazo na kwa nini hilo haliathiri ukweli tunaouchapisha kuhusu majukwaa ya biashara ya crypto.`,
    intro: (c) => (
      <>
        <h1>Ufichuzi wa ushirika</h1>
        <p className="lead">Uwazi ndio msingi wa kuaminiana. Hivi ndivyo hasa {site.name} inavyopata fedha zake.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Jinsi tunavyopata mapato",
        heading: "Jinsi tunavyopata mapato",
        body: () => (
          <p>
            {site.name} inashiriki katika mipango ya rufaa na ya ushirika ya majukwaa ya crypto (exchanges) yanayoonyeshwa kwenye tovuti hii. Ukifungua
            akaunti kupitia mojawapo ya viungo vyetu, jukwaa linaweza kumlipa mwendeshaji wa tovuti hii kamisheni – kwa kawaida sehemu ya ada za biashara
            zinazotokana na akaunti yako. Hulipi zaidi kwa sababu hiyo: rufaa haiongezi ada zako. Mara nyingi usajili kupitia rufaa hukupa punguzo la ada
            au zawadi ya ukaribisho. Jukwaa ndilo hulipa kamisheni, si wewe.
          </p>
        ),
      }),
      advertising: section({
        nav: "Viungo vipi ni matangazo",
        heading: "Viungo vipi ni matangazo",
        body: () => (
          <p>
            Kila kiungo na kila kitufe kinachoelekea kwenye jukwaa – kwa mfano ‘Jisajili kwenye …’, ‘Jisajili’ au ‘Pata ofa’ – pamoja na kila msimbo wa
            rufaa unaoonyeshwa kwenye tovuti hii ni tangazo: mawasiliano ya kibiashara kwa ajili ya jukwaa hilo ambayo tunaweza kulipwa kwayo. Viungo hivi
            vimewekewa alama <code>rel=&quot;sponsored&quot;</code> kwa mujibu wa miongozo ya injini za utafutaji. Kila ukurasa una kiungo cha ufichuzi
            huu.
          </p>
        ),
      }),
      independence: section({
        nav: "Mambo yasiyoathiriwa",
        heading: "Mambo ambayo hili haliathiri",
        body: () => (
          <ul>
            <li>
              Ada, leverage, leseni, kanuni za uthibitishaji na vizuizi vya nchi huchukuliwa kutoka kwenye kurasa za majukwaa yenyewe na data ya soko
              kutoka CoinMarketCap – si kutoka kwenye makubaliano ya matangazo. Kila ukurasa wa jukwaa unaorodhesha vyanzo vyake.
            </li>
            <li>Kwa kila jukwaa tunachapisha udhaifu, matukio ya usalama na vizuizi vya kikanda.</li>
            <li>
              Mpangilio wa majukwaa unafuata nafasi yao kwenye viwango vya CoinMarketCap vya majukwaa ya derivatives. Hakuna jukwaa linaloweza kulipa ili
              kupata nafasi bora zaidi.
            </li>
            <li>Jukwaa lipi liko ‘Mbele’ katika ulinganisho hukokotolewa kutoka kwenye takwimu zilizochapishwa. Nafasi hiyo haiwezi kununuliwa.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Unashughulika na nani",
        heading: "Unashughulika na nani",
        body: () => (
          <p>
            {site.name} ni tovuti ya taarifa, si jukwaa la biashara wala dalali (broker). Kamwe haipokei wala haishikilii pesa zako au mali zako za
            crypto (crypto-assets). Ukijisajili, mkataba wako ni kati yako na jukwaa pekee, chini ya masharti ya jukwaa hilo. Ruhusa ya kutumia jukwaa
            fulani inategemea nchi unayoishi – angalia masharti yake kabla ya kujisajili.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Si ushauri wa kifedha",
        heading: "Si ushauri wa kifedha",
        body: () => (
          <p>
            Hakuna chochote kwenye tovuti hii kilicho pendekezo la kununua, kuuza au kufanya biashara ya mali yoyote. Pia hakichukui nafasi ya ushauri
            unaozingatia hali yako binafsi. Derivatives za crypto ni bidhaa zenye hatari kubwa: leverage huzidisha faida na hasara; unaweza kupoteza
            amana yako yote.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Mwendeshaji wa tovuti hii ametajwa kwenye ukurasa wa <Link href={c.links.imprint}>Taarifa za kisheria</Link>; jinsi data binafsi inavyoshughulikiwa
        imeelezwa kwenye ukurasa wa <Link href={c.links.privacy}>Sera ya faragha</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Taarifa za kisheria",
    description: `Taarifa za kisheria za ${site.domain}: mwendeshaji wa tovuti, njia za mawasiliano, tovuti hii ni nini na si nini, dhima na sheria inayotumika.`,
    intro: (c) => (
      <>
        <h1>Taarifa za kisheria</h1>
        <p className="muted">
          Taarifa kuhusu mtoa huduma kwa mujibu wa Ibara ya 5 ya Agizo 2000/31/EC (Agizo la Biashara ya Kielektroniki) na Ibara ya 5 ya Sheria ya Poland
          ya 18 Julai 2002 kuhusu Utoaji wa Huduma kwa Njia za Kielektroniki.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Mwendeshaji",
        heading: "Mwendeshaji wa tovuti hii",
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
              Kwenye tovuti hii, ‘{site.name}’ na ‘sisi’ humaanisha mwendeshaji aliyetajwa hapo juu. {site.name} ni jina la tovuti, si jina la kampuni.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Mwakilishi",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Mawasiliano",
        heading: "Mawasiliano",
        body: () => (
          <p>
            Barua pepe: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Simu: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Muundo wa kisheria",
        heading: "Muundo wa kisheria",
        body: () => <p>Mwendeshaji wa tovuti hii ni mtu binafsi. Hakuna usajili wowote kwenye daftari la biashara.</p>,
      }),
      register: section({
        heading: "Usajili wa biashara na VAT",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Anayewajibika kwa maudhui",
        heading: "Anayewajibika kwa maudhui",
        body: () => <p>{legal.representative || legal.operator}, anwani kama ilivyo hapo juu.</p>,
      }),
      scope: section({
        nav: "Tovuti hii ni nini",
        heading: "Tovuti hii ni nini – na si nini",
        body: () => (
          <p>
            {site.name} ni tovuti ya taarifa na ulinganisho kuhusu majukwaa ya crypto (exchanges) na mipango yao ya rufaa. Si jukwaa la biashara, dalali
            (broker) wala mtoa huduma za mali za crypto (crypto-assets): haipokei, haishikilii wala haihamishi pesa au mali za crypto, haitekelezi oda
            na haiingii mkataba wowote na wanaotembelea tovuti. Ukifungua akaunti, unaifungua moja kwa moja kwenye jukwaa, chini ya masharti ya jukwaa
            lenyewe na kupitia mchakato wa uthibitishaji wa jukwaa lenyewe.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Si ushauri, tahadhari ya hatari",
        heading: "Si ushauri, tahadhari ya hatari",
        body: () => (
          <p>
            Hakuna chochote kwenye tovuti hii kilicho ushauri wa uwekezaji, wa kifedha, wa kisheria au wa kodi, pendekezo binafsi, wala ofa au mwaliko
            wa kununua au kuuza mali yoyote ya crypto au chombo chochote cha kifedha. Ulinganisho wetu unaeleza ukweli ambao majukwaa yenyewe
            yamechapisha na hauzingatii hali yako binafsi. Biashara ya mali za crypto, hasa kwa leverage, ina hatari kubwa ya hasara – hadi kupoteza
            amana yako yote. Fanya uamuzi wako mwenyewe; ukiwa na shaka, wasiliana na mshauri mwenye leseni.
          </p>
        ),
      }),
      availability: section({
        nav: "Upatikanaji",
        heading: "Upatikanaji na nchi zilizozuiwa",
        body: () => (
          <p>
            Majukwaa hayatoi huduma zao katika kila nchi. Baadhi ya bidhaa zimezuiwa kwa wakazi wa nchi fulani. Tovuti hii haiwalengi watu ambao,
            mahali wanapoishi, ni marufuku kutumia jukwaa husika au kupokea taarifa kulihusu. Kabla ya kujisajili, angalia masharti ya jukwaa na sheria
            za nchi unayoishi. Tovuti hii ni kwa ajili ya watu wazima pekee.
          </p>
        ),
      }),
      liability: section({
        nav: "Dhima",
        heading: "Dhima kuhusu maudhui",
        body: () => (
          <p>
            Maudhui ya tovuti hii yameandaliwa kwa uangalifu na hukaguliwa mara kwa mara; kila ukurasa wa jukwaa unaonyesha tarehe ya ukaguzi wake wa
            mwisho na vyanzo vilivyotumika kuhakiki. Hata hivyo, majukwaa ndiyo yanayoamua ada, vikomo vya leverage, bonasi, kanuni za uthibitishaji na
            upatikanaji; yote haya yanaweza kubadilika wakati wowote. Kwa hiyo hatuwezi kuhakikisha kwamba taarifa hizi ni sahihi, kamili au za hivi
            karibuni. Masharti yanayotumika ni yale ambayo jukwaa linaonyesha wakati unapojisajili. Kwa kadiri sheria inavyoruhusu, hatubebi dhima
            yoyote kwa madhara yanayotokana na matumizi ya taarifa hizi; dhima kwa makusudi na kwa uzembe mkubwa, pamoja na dhima yoyote ambayo
            sheria hairuhusu kuiondoa, inabaki bila kuathiriwa.
          </p>
        ),
      }),
      links: section({
        nav: "Viungo vya nje",
        heading: "Viungo vya tovuti nyingine",
        body: (c) => (
          <p>
            Tovuti hii ina viungo vya tovuti za nje ambazo hatuna udhibiti juu yake. Mtoa huduma wa kila tovuti hiyo ndiye pekee anayewajibika kwa
            maudhui yake. Baadhi ya viungo vinavyoelekea nje ni viungo vya ushirika (viungo vya rufaa) ambavyo tunaweza kupata kamisheni kupitia kwavyo
            – tazama ukurasa wa <Link href={c.links.affiliateDisclosure}>Ufichuzi wa ushirika</Link>. Ukiamini kwamba kiungo fulani kinaelekea kwenye
            maudhui yaliyo kinyume cha sheria, tuarifu kupitia <a href={`mailto:${legal.email}`}>{legal.email}</a> na tutakikagua bila kuchelewa.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Alama za biashara na hakimiliki",
        heading: "Alama za biashara na hakimiliki",
        body: () => (
          <p>
            Majina na nembo za majukwaa ni alama za biashara za wamiliki wake husika na zinatumika kwa ajili ya utambulisho tu. {site.name} haina uhusiano
            na jukwaa lolote kati ya yanayoonyeshwa hapa; hakuna jukwaa lolote linaloiidhinisha wala kuifadhili. Maandishi na michoro yote asilia ya
            tovuti hii inalindwa kwa hakimiliki.
          </p>
        ),
      }),
      disputes: section({
        nav: "Utatuzi wa migogoro",
        heading: "Utatuzi wa migogoro ya walaji",
        body: () => (
          <p>
            Hatuuzi bidhaa wala huduma kwa wanaotembelea tovuti, kwa hiyo matumizi ya tovuti hii hayaanzishi mkataba wowote wa mlaji. Hatushiriki katika
            taratibu za utatuzi wa migogoro mbele ya chombo cha usuluhishi wa migogoro ya walaji. Malalamiko kuhusu jukwaa fulani yanapaswa kupelekwa kwa
            jukwaa hilo lenyewe.
          </p>
        ),
      }),
      law: section({
        nav: "Sheria inayotumika",
        heading: "Sheria inayotumika",
        body: () => (
          <p>
            Sheria ya Poland inatumika kwa tovuti hii na kwa matumizi yake. Ikiwa wewe ni mlaji, hili haliathiri masharti ya lazima yanayomlinda mlaji
            katika nchi ambayo ndiyo makazi yako ya kawaida.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Tazama pia ukurasa wetu wa <Link href={c.links.privacy}>Sera ya faragha</Link> na ule wa{" "}
        <Link href={c.links.affiliateDisclosure}>Ufichuzi wa ushirika</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Sera ya faragha",
    description: `Jinsi ${site.domain} inavyoshughulikia data binafsi chini ya GDPR ya Umoja wa Ulaya. Google Analytics kwa idhini yako tu, bila vidakuzi vya matangazo.`,
    intro: (c) => (
      <>
        <h1>Sera ya faragha</h1>
        <p className="muted">Imesasishwa mara ya mwisho: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Kwa ufupi:</strong> {site.domain} haitumii pikseli za matangazo, programu-jalizi za mitandao ya kijamii wala fonti za nje. Google
          Analytics hufanya kazi tu ukiiruhusu kwenye bango la idhini; bila idhini yako hakuna kidakuzi (cookie) kinachowekwa na hakuna chochote
          kinachotumwa kwa Google. Mbali na hayo, tunachakata tu data ya kiufundi inayohitajika ili kuwasilisha tovuti kwa usalama. Ukibofya kiungo cha
          jukwaa la crypto (exchange), unaondoka kwenye tovuti yetu na sera ya faragha ya jukwaa hilo ndiyo inayotumika.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Mdhibiti wa data",
        heading: "1. Mdhibiti wa data",
        body: () => (
          <>
            <p>
              Mdhibiti anayewajibika kwa uchakataji wa data kwenye tovuti hii, kwa maana ya Ibara ya 4(7) ya Kanuni ya Jumla ya Ulinzi wa Data (GDPR) ya
              Umoja wa Ulaya (EU), ni mwendeshaji wa tovuti, ambaye ni mtu binafsi:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              Barua pepe: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Mdhibiti ana makao yake nchini Poland. GDPR na Sheria ya Poland ya 10 Mei 2018 kuhusu Ulinzi wa Data Binafsi zinatumika. Ukitembelea tovuti
              hii ukiwa Uswisi, Sheria ya Shirikisho ya Uswisi kuhusu Ulinzi wa Data (FADP) inaweza kutumika pia; haki zilizoelezwa hapa chini ni zako kwa
              namna ileile.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Uhifadhi wa tovuti na faili za kumbukumbu",
        heading: "2. Uhifadhi wa tovuti (hosting) na faili za kumbukumbu za seva",
        body: () => (
          <>
            <p>
              Tovuti hii imehifadhiwa kwenye seva za {legal.hostingProvider} (‘Vercel’). Vercel ni mchakataji wa data kwa niaba yetu (Ibara ya 28 ya
              GDPR). Unapotembelea tovuti, Vercel huchakata kiotomatiki data ya kiufundi ambayo kivinjari chako hutuma: anwani ya IP, tarehe na saa ya
              ombi, URL iliyoombwa, URL ya ukurasa uliokuleta (referrer), aina na toleo la kivinjari, mfumo wa uendeshaji na msimbo wa hali wa HTTP. Data
              hii inahitajika ili kuwasilisha tovuti na kuhakikisha uthabiti na usalama wake (kwa mfano kujikinga dhidi ya mashambulizi). Haiunganishwi na
              vyanzo vingine vya data na haitumiwi kukutambua.
            </p>
            <p>
              Msingi wa kisheria: Ibara ya 6(1)(f) ya GDPR – maslahi yetu halali katika tovuti iliyo salama na inayofanya kazi vizuri. Vercel huhifadhi
              data ya kumbukumbu kwa muda wenye kikomo kisha huifuta. Vercel inaweza kuchakata data nchini Marekani. Vercel imethibitishwa chini ya Mfumo
              wa Faragha ya Data kati ya EU na Marekani (EU-U.S. Data Privacy Framework), ambao Tume ya Ulaya imetoa uamuzi wa utoshelevu (adequacy
              decision) kuuhusu (Ibara ya 45 ya GDPR). Aidha, mkataba wa Vercel kuhusu uchakataji wa data, unaojumuisha Vifungu vya Kawaida vya Mikataba
              vya EU (Standard Contractual Clauses), unatumika.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Vidakuzi na takwimu",
        heading: "3. Vidakuzi na takwimu za matumizi",
        body: () => (
          <>
            <p>
              Bila idhini yako hatuweki vidakuzi wala hatutumii zana za takwimu za matumizi. Hatutumii mitandao ya matangazo, fingerprinting (kutambua
              kivinjari kwa sifa zake) wala programu-jalizi za mitandao ya kijamii. Fonti na picha zote zinatoka kwenye kikoa (domain) chetu wenyewe.
              Hatufanyi maamuzi ya kiotomatiki wala hatuchambui wasifu wa watumiaji (profiling, Ibara ya 22 ya GDPR).
            </p>
            <p>
              Chaguo lako kwenye bango la idhini huhifadhiwa kwenye hifadhi ya ndani (local storage) ya kivinjari chako (ingizo{" "}
              <code>refco-analytics-consent</code>, thamani ‘granted’ au ‘denied’) ili tusilazimike kukuuliza tena kwenye kila ukurasa. Ingizo hili
              linahitajika ili kuheshimu chaguo lako na halitumwi kwa mtu yeyote.
            </p>
            <h3 id="analytics">Google Analytics – kwa idhini yako tu</h3>
            <p>
              Ukichagua ‘Ruhusu takwimu’, tovuti hii hupakia Google Analytics 4, huduma ya Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Ireland (‘Google’). Google Analytics huweka vidakuzi <code>_ga</code> na <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (kwa
              chaguo-msingi huhifadhiwa hadi miaka miwili) ili kutofautisha wageni. Hurekodi kurasa zinazotazamwa, jinsi wageni walivyofika kwenye
              tovuti, eneo la takriban linalokadiriwa kutokana na anwani ya IP, pamoja na data ya kivinjari na kifaa. Kwa mujibu wa Google, Analytics 4
              hairekodi wala haihifadhi anwani za IP. Tunatumia ripoti hizi kwa jumla tu (aggregated), ili kuona kurasa zipi zinasomwa. Vipengele vya
              matangazo vimezimwa: hakuna vidakuzi vya matangazo wala matangazo yanayobinafsishwa.
            </p>
            <p>
              Msingi wa kisheria: idhini yako (Ibara ya 6(1)(a) ya GDPR). Google ni mchakataji wa data kwa niaba yetu. Data inaweza kuhamishiwa kwa
              Google LLC nchini Marekani, ambayo imethibitishwa chini ya EU-U.S. Data Privacy Framework. Google hufuta data inayomhusu mtumiaji mmoja
              mmoja baada ya muda wa kuhifadhi uliowekwa kwenye Analytics, usiozidi miezi 14. Unaweza kuondoa idhini yako wakati wowote, kuanzia wakati
              huo kwenda mbele, kupitia ‘Mipangilio ya vidakuzi’ chini ya kila ukurasa; kisha vidakuzi vya Analytics huondolewa kwenye kivinjari chako na
              Analytics haipakiwi tena. Maelezo zaidi kutoka Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Viungo vya majukwaa",
        heading: "4. Viungo vya majukwaa (viungo vya ushirika)",
        body: (c) => (
          <p>
            Tovuti yetu ina viungo vya majukwaa ya crypto yanayoendeshwa na wahusika wengine. Baadhi yake ni viungo vya rufaa vinavyoliwezesha jukwaa
            kutambua kwamba umetoka kwenye tovuti yetu. Hatutumi data binafsi yoyote kwa jukwaa; kitambulisho cha rufaa ni sehemu ya kiungo chenyewe na
            kinatutambulisha sisi, si wewe. Ukishabofya, uko kwenye tovuti ya jukwaa na sera yake ya faragha ndiyo inayotumika. Kisha jukwaa linaweza
            kuweka vidakuzi na kuchakata data yako kama mdhibiti wa data anayejitegemea. Jukwaa hutuarifu kamisheni zipi zimetokana na akaunti
            zilizofunguliwa kupitia viungo vyetu. Ripoti ya aina hiyo inaweza kuwa na kitambulisho bandia cha akaunti (pseudonymous, kwa mfano user ID)
            na takwimu za ada; tunaitumia tu kwa hesabu za kamisheni (Ibara ya 6(1)(f) ya GDPR) na hatujaribu kukutambua kutokana nayo. Zaidi kuhusu
            viungo hivi: <Link href={c.links.affiliateDisclosure}>Ufichuzi wa ushirika</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Mawasiliano kwa barua pepe",
        heading: "5. Mawasiliano kwa barua pepe",
        body: () => (
          <p>
            Ukiwasiliana nasi kwa barua pepe, tunachakata data unayotupa (anwani ya barua pepe, jina, maudhui ya ujumbe wako) ili kujibu ombi lako.
            Msingi wa kisheria: Ibara ya 6(1)(f) ya GDPR – maslahi yetu halali katika kujibu maswali tunayoulizwa. Ujumbe wako huhifadhiwa kwenye sanduku
            letu la barua pepe; mtoa huduma za barua pepe anayeliendesha ni mchakataji wa data kwa niaba yetu. Tunafuta mawasiliano hayo mara ombi lako
            linaposhughulikiwa, isipokuwa sheria inatulazimu kuyahifadhi kwa muda mrefu zaidi. Huna wajibu wa kutoa data binafsi yoyote; ila bila anwani
            ya barua pepe hatuna njia ya kukujibu.
          </p>
        ),
      }),
      recipients: section({
        nav: "Wapokeaji wa data",
        heading: "6. Wapokeaji wa data",
        body: () => (
          <p>
            Hatuuzi data binafsi na hatuipitishi kwa wahusika wengine kwa madhumuni yao wenyewe. Ni watoa huduma waliotajwa hapo juu pekee wanaochakata
            data – mtoa huduma za hosting, mtoa huduma za barua pepe na, ikiwa umeruhusu takwimu za matumizi, Google. Tunaifichua data kwa mamlaka pale
            tu sheria inapotulazimu kufanya hivyo.
          </p>
        ),
      }),
      rights: section({
        nav: "Haki zako",
        heading: "7. Haki zako",
        body: () => (
          <>
            <p>Kwa kuzingatia masharti ya kisheria, una haki ya:</p>
            <ul>
              <li>kufikia data binafsi tuliyo nayo kukuhusu (Ibara ya 15 ya GDPR),</li>
              <li>kutaka data isiyo sahihi irekebishwe (Ibara ya 16 ya GDPR),</li>
              <li>kutaka data ifutwe (Ibara ya 17 ya GDPR) na uchakataji wake uwekewe mipaka (Ibara ya 18 ya GDPR),</li>
              <li>kupokea data yako na kuihamisha kwingine (Ibara ya 20 ya GDPR),</li>
              <li>kupinga, kwa sababu zinazohusiana na hali yako mahususi, uchakataji unaotegemea maslahi halali (Ibara ya 21 ya GDPR),</li>
              <li>kuondoa wakati wowote idhini uliyotoa, kuanzia wakati huo kwenda mbele (Ibara ya 7(3) ya GDPR),</li>
              <li>
                kuwasilisha malalamiko kwa mamlaka ya usimamizi (Ibara ya 77 ya GDPR) – nchini Poland kwa Rais wa Ofisi ya Ulinzi wa Data Binafsi (Prezes
                Urzędu Ochrony Danych Osobowych, UODO, uodo.gov.pl) au kwa mamlaka ya nchi ya EU unamoishi au unamofanya kazi; nchini Uswisi kwa
                Kamishna wa Shirikisho wa Ulinzi wa Data na Taarifa (FDPIC).
              </li>
            </ul>
            <p>
              Ili kutumia haki zako, tuandikie kwa <a href={`mailto:${legal.email}`}>{legal.email}</a>. Tunajibu bila ucheleweshaji usio wa lazima – ndani ya
              mwezi mmoja kwa vyovyote vile.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Watoto",
        heading: "8. Watoto",
        body: () => (
          <p>Tovuti hii ni kwa ajili ya watu wazima. Hatuchakati kwa kujua data binafsi ya watu walio chini ya umri wa miaka 18.</p>
        ),
      }),
      security: section({
        nav: "Usalama wa data",
        heading: "9. Usalama wa data",
        body: () => (
          <p>
            Tovuti hii inawasilishwa kupitia muunganisho wa HTTPS uliosimbwa kwa njia fiche (TLS) pekee, pamoja na vichwa vikali vya usalama (security
            headers). Tunachukua hatua stahiki za kiufundi na za kiutawala ili kulinda data yako.
          </p>
        ),
      }),
      changes: section({
        nav: "Mabadiliko",
        heading: "10. Mabadiliko ya sera hii",
        body: (c) => (
          <p>
            Tunaweza kusasisha sera hii ya faragha pale tovuti au masharti ya kisheria yanapobadilika. Toleo la sasa linapatikana kwenye ukurasa huu
            wakati wote. Mwendeshaji ametajwa kwenye ukurasa wa <Link href={c.links.imprint}>Taarifa za kisheria</Link>.
          </p>
        ),
      }),
    },
  },
};
