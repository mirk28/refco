import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in French. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording as in `../fr.tsx`: "plateforme" for an exchange, "code de parrainage", "frais", the reader is "vous".
 * The operator of the website is "l'exploitant"; a controller under the GDPR is "responsable du traitement", a
 * processor "sous-traitant". The regulation is "règlement général sur la protection des données (RGPD)", articles
 * are cited as "article 6, paragraphe 1, point f), du RGPD". Page names as in the footer: « Mentions légales »,
 * « Politique de confidentialité », « Divulgation d'affiliation », « À propos et méthodologie ». Names, addresses
 * and email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Remarque :</strong> cette page est une version française proposée à titre de courtoisie. Seule la{" "}
    <a href={englishHref} hrefLang="en">
      version anglaise
    </a>{" "}
    fait foi.
  </p>
);

export const fr: PageTexts = {
  layout: {
    aside: "Sur cette page et plus encore",
    onThisPage: "Sur cette page",
    referralCodes: "Codes de parrainage",
    compare: "Comparer les plateformes",
    alternativesOf: (name) => <>Alternatives à {name}</>,
    allComparisons: "Tous les comparatifs de plateformes →",
  },

  home: "Accueil",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `À propos de ${site.name} et de notre méthodologie`,
    description: `Qui gère ${site.domain}, d'où viennent nos données et comment nous évaluons les plateformes crypto.`,
    ldName: `À propos de ${site.name}`,
    crumb: "À propos",
    intro: () => (
      <>
        <span className="eyebrow">À propos</span>
        <h1>À propos de {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) aide les traders à s'inscrire sur la plateforme de produits dérivés crypto qui leur convient, avec un
          parrainage qui fonctionne et les faits à connaître avant tout dépôt.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Ce que nous faisons",
        heading: "Ce que nous faisons",
        body: () => (
          <p>
            Nous nous concentrons sur les plus grandes plateformes du classement des produits dérivés de CoinMarketCap et publions une page par
            plateforme, toujours avec la même structure : une réponse rapide, les chiffres clés, les frais, une description honnête, les points forts et
            les points faibles, des remarques sur la sécurité, la disponibilité et une FAQ. Les plateformes sont ainsi faciles à comparer.
          </p>
        ),
      }),
      methodology: section({
        nav: "Notre méthodologie",
        heading: "Notre méthodologie",
        body: (c) => (
          <ul>
            <li>
              <strong>Les données de marché</strong> (open interest ou intérêt ouvert, volume sur 24 h, nombre de marchés) proviennent du classement
              des produits dérivés de CoinMarketCap et sont datées sur chaque page.
            </li>
            <li>
              <strong>Les codes de parrainage, l'inscription et la vérification</strong> (où saisir le code, s'il peut être ajouté plus tard, les étapes
              d'inscription et les règles KYC) sont relevés sur le site et dans le centre d'aide de chaque plateforme. Chaque page de plateforme liste
              les pages officielles qui ont servi à la vérification.
            </li>
            <li>
              <strong>Les frais et l'effet de levier</strong> proviennent de la grille tarifaire officielle de chaque plateforme, au niveau standard
              (hors VIP).
            </li>
            <li>
              <strong>Les offres de bienvenue</strong> sont reprises telles que la plateforme les présente, avec leurs conditions. Elles varient selon le
              pays et changent souvent.
            </li>
            <li>
              <strong>Les licences et les incidents</strong> proviennent des pages de licences et des communiqués officiels de la plateforme elle-même.
            </li>
            <li>
              <strong>Les comparatifs de plateformes</strong>, c'est-à-dire les pages d'alternatives et les{" "}
              <Link href={c.links.compare}>face-à-face</Link>, reprennent les mêmes chiffres que les pages des plateformes. Un produit n'est indiqué
              comme proposé que si la plateforme le présente sur son propre site, et la disponibilité par pays provient des conditions d'utilisation,
              des listes de pays restreints et des sites régionaux de chaque plateforme. La plateforme marquée « Avantage » sur un point est déterminée
              par ces chiffres, et non par un classement de notre part.
            </li>
            <li>
              <strong>Cycle de vérification :</strong> les données sont revérifiées régulièrement ; la dernière vérification date du {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Indépendance",
        heading: "Indépendance",
        body: (c) => (
          <p>
            Nous percevons des commissions de parrainage de la part des plateformes que nous présentons ; les détails figurent dans notre{" "}
            <Link href={c.links.affiliateDisclosure}>divulgation d'affiliation</Link>. Cela ne change jamais les faits que nous publions, et nous
            mentionnons toujours les points faibles et les restrictions.
          </p>
        ),
      }),
      operator: section({
        nav: `Qui gère ${site.name}`,
        heading: <>Qui gère {site.name}</>,
        body: (c) => (
          <p>
            {site.name} est un site privé, pas une entreprise. Son exploitant est indiqué dans les <Link href={c.links.imprint}>mentions légales</Link>.{" "}
            {site.name} n'est pas une plateforme d'échange et ne reçoit ni ne détient jamais votre argent : les comptes s'ouvrent directement auprès de la
            plateforme.
          </p>
        ),
      }),
      contact: section({
        nav: "Contact",
        heading: "Contact",
        body: () => (
          <p>
            Vous avez repéré une information obsolète ? Écrivez-nous à <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> : nous
            corrigeons rapidement les erreurs.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Divulgation d'affiliation",
    description: `Comment ${site.name} gagne de l'argent, quels liens sont publicitaires et pourquoi cela n'influence pas les faits que nous publions sur les plateformes crypto.`,
    intro: (c) => (
      <>
        <h1>Divulgation d'affiliation</h1>
        <p className="lead">La transparence est la base de la confiance. Voici précisément comment {site.name} est financé.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Comment nous gagnons de l'argent",
        heading: "Comment nous gagnons de l'argent",
        body: () => (
          <p>
            {site.name} participe aux programmes de parrainage et d'affiliation des plateformes présentées sur ce site. Lorsque vous ouvrez un compte via
            l'un de nos liens, la plateforme peut verser une commission à l'exploitant de ce site, en général une part des frais de trading générés par
            votre compte. Vous ne payez jamais plus pour autant : un parrainage n'augmente pas vos frais, et une inscription avec parrainage
            s'accompagne souvent d'une réduction des frais ou d'une récompense de bienvenue pour vous. C'est la plateforme qui verse la commission, pas
            vous.
          </p>
        ),
      }),
      advertising: section({
        nav: "Quels liens sont publicitaires",
        heading: "Quels liens sont publicitaires",
        body: () => (
          <p>
            Tout lien ou bouton qui mène à une plateforme (par exemple « S'inscrire sur … », « S'inscrire » ou « En profiter »), ainsi que tout code de
            parrainage affiché sur ce site, constitue de la publicité : une communication commerciale en faveur de cette plateforme, pour laquelle nous
            pouvons être rémunérés. Ces liens portent l'attribut <code>rel=&quot;sponsored&quot;</code>, conformément aux consignes des moteurs de
            recherche, et cette divulgation est accessible depuis chaque page.
          </p>
        ),
      }),
      independence: section({
        nav: "Ce que cela n'influence pas",
        heading: "Ce que cela n'influence pas",
        body: () => (
          <ul>
            <li>
              Les frais, l'effet de levier, les licences, les règles de vérification et les restrictions par pays proviennent des pages des plateformes
              elles-mêmes, et les données de marché proviennent de CoinMarketCap, pas d'accords marketing. Chaque page de plateforme indique ses sources.
            </li>
            <li>Nous publions les points faibles, les incidents de sécurité et les restrictions régionales de chaque plateforme.</li>
            <li>
              L'ordre des plateformes suit leur position dans le classement des produits dérivés de CoinMarketCap. Aucune plateforme ne peut payer pour
              être mieux placée.
            </li>
            <li>La plateforme marquée « Avantage » dans un comparatif est déterminée à partir des chiffres publiés. Cette mention ne s'achète pas.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "À qui vous avez affaire",
        heading: "À qui vous avez affaire",
        body: () => (
          <p>
            {site.name} est un site d'information, pas une plateforme d'échange ni un courtier. Il ne reçoit ni ne détient jamais votre argent ou vos
            crypto-actifs. Si vous vous inscrivez, votre contrat est conclu avec la plateforme seule, selon ses conditions d'utilisation. Votre droit
            d'utiliser une plateforme dépend de votre pays de résidence : consultez ses conditions d'utilisation avant de vous inscrire.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Absence de conseil financier",
        heading: "Absence de conseil financier",
        body: () => (
          <p>
            Rien sur ce site ne constitue une recommandation d'acheter, de vendre ou de trader un actif, ni ne remplace un conseil adapté à votre
            situation personnelle. Les dérivés crypto sont des produits à haut risque : l'effet de levier multiplie les gains comme les pertes, et vous
            pouvez perdre la totalité de votre dépôt.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        L'exploitant de ce site est indiqué dans les <Link href={c.links.imprint}>mentions légales</Link> ; la manière dont les données personnelles sont
        traitées est expliquée dans la <Link href={c.links.privacy}>politique de confidentialité</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Mentions légales",
    description: `Mentions légales de ${site.domain} : exploitant, coordonnées, ce qu'est le site et ce qu'il n'est pas, responsabilité et droit applicable.`,
    intro: (c) => (
      <>
        <h1>Mentions légales</h1>
        <p className="muted">
          Informations sur le prestataire de services conformément à l'article 5 de la directive 2000/31/CE (directive sur le commerce électronique) et
          à l'article 5 de la loi polonaise du 18 juillet 2002 relative à la fourniture de services par voie électronique.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Exploitant",
        heading: "Exploitant du site",
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
              Sur ce site, « {site.name} » et « nous » désignent l'exploitant indiqué ci-dessus. {site.name} est le nom du site, et non celui d'une
              entreprise.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Représenté par",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Contact",
        heading: "Contact",
        body: () => (
          <p>
            E-mail : <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Téléphone : {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Forme juridique",
        heading: "Forme juridique",
        body: () => <p>Ce site est exploité par un particulier. Il n'existe aucune inscription au registre du commerce.</p>,
      }),
      register: section({
        heading: "Immatriculation et TVA",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Responsable du contenu",
        heading: "Responsable du contenu",
        body: () => <p>{legal.representative || legal.operator}, adresse indiquée ci-dessus.</p>,
      }),
      scope: section({
        nav: "Ce qu'est ce site",
        heading: "Ce qu'est ce site, et ce qu'il n'est pas",
        body: () => (
          <p>
            {site.name} est un site d'information et de comparaison consacré aux plateformes crypto et à leurs programmes de parrainage. Ce n'est ni une
            plateforme d'échange, ni un courtier, ni un prestataire de services sur crypto-actifs : il n'accepte, ne détient ni ne transfère aucune somme
            d'argent ni aucun crypto-actif, n'exécute aucun ordre et ne conclut aucun contrat avec les visiteurs. Si vous ouvrez un compte, vous le
            faites directement auprès de la plateforme, selon ses propres conditions d'utilisation et via sa propre procédure de vérification.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Absence de conseil, avertissement sur les risques",
        heading: "Absence de conseil, avertissement sur les risques",
        body: () => (
          <p>
            Aucun contenu de ce site ne constitue un conseil en investissement, un conseil financier, juridique ou fiscal, une recommandation
            personnalisée, ni une offre ou une sollicitation en vue d'acheter ou de vendre un crypto-actif ou un instrument financier. Les comparatifs
            présentent des faits publiés par les plateformes et ne tiennent pas compte de votre situation personnelle. Le trading de crypto-actifs, en
            particulier avec effet de levier, comporte un risque de perte élevé, pouvant aller jusqu'à la perte de la totalité de votre dépôt. Décidez
            par vous-même et, en cas de doute, consultez un conseiller agréé.
          </p>
        ),
      }),
      availability: section({
        nav: "Disponibilité",
        heading: "Disponibilité et pays restreints",
        body: () => (
          <p>
            Les plateformes ne proposent pas leurs services dans tous les pays, et certains produits font l'objet de restrictions pour les résidents de
            pays déterminés. Ce site ne s'adresse pas aux personnes à qui l'utilisation de la plateforme concernée, ou la réception d'informations à son
            sujet, est interdite là où elles vivent. Avant de vous inscrire, consultez les conditions d'utilisation de la plateforme et la
            réglementation de votre pays de résidence. Le site est destiné exclusivement aux personnes majeures.
          </p>
        ),
      }),
      liability: section({
        nav: "Responsabilité",
        heading: "Responsabilité quant au contenu",
        body: () => (
          <p>
            Le contenu de ce site est rédigé avec soin et vérifié régulièrement ; chaque page de plateforme indique la date de sa dernière vérification et
            les sources consultées. Toutefois, les frais, les limites de levier, les bonus, les règles de vérification et la disponibilité sont fixés
            par les plateformes et peuvent changer à tout moment ; nous ne pouvons donc pas garantir que les informations soient exactes, complètes ou à
            jour. Ce sont les conditions affichées par la plateforme au moment de votre inscription qui s'appliquent. Dans les limites autorisées par la
            loi, nous déclinons toute responsabilité pour les dommages résultant de l'utilisation de ces informations ; la responsabilité en cas de faute
            intentionnelle et de négligence grave, ainsi que toute responsabilité qui ne peut être exclue par la loi, n'en sont pas affectées.
          </p>
        ),
      }),
      links: section({
        nav: "Liens externes",
        heading: "Liens vers d'autres sites",
        body: (c) => (
          <p>
            Ce site contient des liens vers des sites externes sur lesquels nous n'avons aucun contrôle. Leur contenu relève de la seule responsabilité
            de leurs exploitants respectifs. Certains liens sortants sont des liens d'affiliation (de parrainage), pour lesquels nous pouvons percevoir
            une commission : voir notre <Link href={c.links.affiliateDisclosure}>divulgation d'affiliation</Link>. Si vous pensez qu'un lien mène à un
            contenu illicite, signalez-le-nous à <a href={`mailto:${legal.email}`}>{legal.email}</a> et nous le vérifierons sans délai.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Marques et droits d'auteur",
        heading: "Marques et droits d'auteur",
        body: () => (
          <p>
            Les noms et logos des plateformes sont des marques appartenant à leurs titulaires respectifs et ne sont utilisés qu'à des fins
            d'identification. {site.name} n'a aucun lien officiel avec les plateformes présentées, et aucune d'elles ne l'approuve ni ne le sponsorise.
            Tous les textes et graphismes originaux de ce site sont protégés par le droit d'auteur.
          </p>
        ),
      }),
      disputes: section({
        nav: "Règlement des litiges",
        heading: "Règlement des litiges de consommation",
        body: () => (
          <p>
            Nous ne vendons ni biens ni services aux visiteurs : l'utilisation de ce site ne donne donc lieu à aucun contrat de consommation. Nous ne
            participons à aucune procédure de règlement des litiges devant un organisme d'arbitrage de la consommation. Les réclamations concernant une
            plateforme doivent être adressées à cette plateforme.
          </p>
        ),
      }),
      law: section({
        nav: "Droit applicable",
        heading: "Droit applicable",
        body: () => (
          <p>
            Le droit polonais s'applique à ce site et à son utilisation. Si vous êtes un consommateur, les dispositions impératives de protection des
            consommateurs du pays de votre résidence habituelle restent applicables.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Consultez également notre <Link href={c.links.privacy}>politique de confidentialité</Link> et notre{" "}
        <Link href={c.links.affiliateDisclosure}>divulgation d'affiliation</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Politique de confidentialité",
    description: `Comment ${site.domain} traite les données personnelles selon le RGPD : Google Analytics uniquement avec votre consentement, aucun cookie publicitaire.`,
    intro: (c) => (
      <>
        <h1>Politique de confidentialité</h1>
        <p className="muted">Dernière mise à jour : {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>En bref :</strong> {site.domain} n'utilise ni pixels publicitaires, ni plugins de réseaux sociaux, ni polices externes. Google
          Analytics n'est activé que si vous l'autorisez dans le bandeau de consentement ; sans votre consentement, aucun cookie n'est déposé et rien
          n'est envoyé à Google. Pour le reste, nous traitons uniquement les données techniques nécessaires pour fournir le site de manière sécurisée.
          Si vous cliquez sur un lien vers une plateforme, vous quittez notre site, et c'est la politique de confidentialité de cette plateforme qui
          s'applique.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Responsable du traitement",
        heading: "1. Responsable du traitement",
        body: () => (
          <>
            <p>
              Le responsable du traitement des données sur ce site, au sens de l'article 4, point 7), du règlement général sur la protection des
              données (RGPD) de l'Union européenne, est l'exploitant du site, un particulier :
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              E-mail : <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Le responsable du traitement est établi en Pologne. Le RGPD et la loi polonaise du 10 mai 2018 sur la protection des données personnelles
              s'appliquent. Si vous consultez le site depuis la Suisse, la loi fédérale suisse sur la protection des données (LPD) peut également
              s'appliquer ; les droits décrits ci-dessous vous sont ouverts de la même manière.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Hébergement et fichiers journaux",
        heading: "2. Hébergement et fichiers journaux du serveur",
        body: () => (
          <>
            <p>
              Ce site est hébergé par {legal.hostingProvider} (« Vercel »), qui agit en qualité de sous-traitant pour notre compte (article 28 du RGPD). Lorsque
              vous consultez le site, Vercel traite automatiquement les données techniques transmises par votre navigateur : adresse IP, date et heure
              de la requête, URL demandée, URL de provenance (referrer), type et version du navigateur, système d'exploitation et code de statut HTTP.
              Ces données sont nécessaires pour fournir le site et en garantir la stabilité et la sécurité (par exemple pour se défendre contre des
              attaques). Elles ne sont pas croisées avec d'autres sources de données et ne servent pas à vous identifier.
            </p>
            <p>
              Base légale : article 6, paragraphe 1, point f), du RGPD, à savoir notre intérêt légitime à disposer d'un site sûr et fonctionnel.
              Vercel conserve les données de journalisation pendant une durée limitée, puis les supprime. Vercel peut traiter des données aux
              États-Unis. Vercel dispose d'une certification au titre du cadre de protection des données UE-États-Unis (EU-U.S. Data Privacy
              Framework), pour lequel la Commission européenne a adopté une décision d'adéquation (article 45 du RGPD), et l'accord de traitement des
              données de Vercel, qui intègre les clauses contractuelles types de l'UE, s'applique.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Cookies et mesure d'audience",
        heading: "3. Cookies et mesure d'audience",
        body: () => (
          <>
            <p>
              Sans votre consentement, nous ne déposons aucun cookie et n'utilisons aucun outil de mesure d'audience. Nous n'utilisons ni régies
              publicitaires, ni fingerprinting (empreinte numérique), ni plugins de réseaux sociaux, et toutes les polices et images sont chargées depuis
              notre propre domaine. Nous ne procédons à aucune prise de décision automatisée ni à aucun profilage (article 22 du RGPD).
            </p>
            <p>
              Votre choix dans le bandeau de consentement est enregistré dans le stockage local (local storage) de votre navigateur (entrée{" "}
              <code>refco-analytics-consent</code>, valeur « granted » ou « denied »), afin que nous n'ayons pas à vous redemander votre choix sur
              chaque page. Cette entrée est nécessaire pour respecter votre choix et n'est transmise à personne.
            </p>
            <h3 id="analytics">Google Analytics : uniquement avec votre consentement</h3>
            <p>
              Si vous choisissez « Autoriser la mesure d'audience », ce site charge Google Analytics 4, un service de Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irlande (« Google »). Google Analytics dépose les cookies <code>_ga</code> et{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (conservés par défaut jusqu'à deux ans) afin de distinguer les visiteurs. Il
              enregistre les pages consultées, la manière dont les visiteurs sont arrivés sur le site, la région approximative déduite de l'adresse IP
              ainsi que des données sur le navigateur et l'appareil. Selon Google, Analytics 4 n'enregistre ni ne conserve les adresses IP. Nous
              n'utilisons les rapports que sous forme agrégée, pour savoir quelles pages sont lues. Les fonctions publicitaires sont désactivées :
              aucun cookie publicitaire et aucune personnalisation des annonces.
            </p>
            <p>
              Base légale : votre consentement (article 6, paragraphe 1, point a), du RGPD). Google agit en qualité de sous-traitant pour notre compte. Des données
              peuvent être transférées à Google LLC, aux États-Unis, qui dispose d'une certification au titre du cadre de protection des données
              UE-États-Unis. Google supprime les données au niveau de l'utilisateur à l'issue de la durée de conservation définie dans Analytics, soit
              14 mois au maximum. Vous pouvez retirer votre consentement à tout moment, pour l'avenir, via « Paramètres des cookies » en bas de chaque
              page ; les cookies Analytics sont alors supprimés de votre navigateur et Analytics n'est plus chargé. Informations complémentaires de
              Google :{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Liens vers les plateformes",
        heading: "4. Liens vers les plateformes (liens d'affiliation)",
        body: (c) => (
          <p>
            Notre site contient des liens vers des plateformes crypto tierces. Certains sont des liens de parrainage qui permettent à la plateforme de
            savoir que vous venez de notre site. Nous ne transmettons aucune donnée personnelle à la plateforme : l'identifiant de parrainage fait
            partie du lien lui-même et nous identifie, nous, et non vous. Dès que vous cliquez, vous êtes sur le site de la plateforme, et sa politique de
            confidentialité s'applique. La plateforme peut alors déposer des cookies et traiter vos données en tant que responsable du traitement
            distinct. La plateforme nous indique quelles commissions proviennent des comptes ouverts via nos liens. Ce relevé peut contenir un
            identifiant de compte pseudonyme (par exemple un identifiant utilisateur) et des montants de frais ; nous l'utilisons uniquement pour le
            décompte des commissions (article 6, paragraphe 1, point f), du RGPD) et ne cherchons pas à vous identifier à partir de celui-ci. En savoir
            plus sur ces liens : <Link href={c.links.affiliateDisclosure}>divulgation d'affiliation</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Contact par e-mail",
        heading: "5. Contact par e-mail",
        body: () => (
          <p>
            Si vous nous contactez par e-mail, nous traitons les données que vous nous communiquez (adresse e-mail, nom, contenu de votre message) afin
            de répondre à votre demande. Base légale : article 6, paragraphe 1, point f), du RGPD, à savoir notre intérêt légitime à répondre aux
            demandes. Votre message est conservé dans notre boîte de messagerie, gérée par un prestataire de messagerie électronique qui agit en
            qualité de sous-traitant pour notre compte. Nous supprimons la correspondance une fois votre demande traitée, sauf si la loi nous impose de la conserver plus
            longtemps. Vous n'êtes pas tenu de fournir des données personnelles ; sans adresse e-mail, nous ne pouvons simplement pas vous répondre.
          </p>
        ),
      }),
      recipients: section({
        nav: "Destinataires des données",
        heading: "6. Destinataires des données",
        body: () => (
          <p>
            Nous ne vendons pas de données personnelles et ne les transmettons pas à des tiers pour leurs propres finalités. Les données sont traitées
            uniquement par les prestataires mentionnés ci-dessus (l'hébergeur, le prestataire de messagerie et, si vous avez autorisé la mesure
            d'audience, Google) et ne sont communiquées aux autorités que lorsque la loi nous y oblige.
          </p>
        ),
      }),
      rights: section({
        nav: "Vos droits",
        heading: "7. Vos droits",
        body: () => (
          <>
            <p>Dans les conditions prévues par la loi, vous disposez des droits suivants :</p>
            <ul>
              <li>le droit d'accès aux données personnelles que nous détenons à votre sujet (article 15 du RGPD),</li>
              <li>le droit de rectification des données inexactes (article 16 du RGPD),</li>
              <li>le droit à l'effacement (article 17 du RGPD) et à la limitation du traitement (article 18 du RGPD),</li>
              <li>le droit à la portabilité des données (article 20 du RGPD),</li>
              <li>
                le droit de vous opposer, pour des raisons tenant à votre situation particulière, à un traitement fondé sur des intérêts légitimes
                (article 21 du RGPD),
              </li>
              <li>le droit de retirer à tout moment un consentement donné, avec effet pour l'avenir (article 7, paragraphe 3, du RGPD),</li>
              <li>
                le droit d'introduire une réclamation auprès d'une autorité de contrôle (article 77 du RGPD), à savoir en Pologne le Président de
                l'Office de protection des données personnelles (Prezes Urzędu Ochrony Danych Osobowych, UODO, uodo.gov.pl), ou l'autorité du pays de
                l'UE dans lequel vous vivez ou travaillez ; en Suisse, le Préposé fédéral à la protection des données et à la transparence (PFPDT).
              </li>
            </ul>
            <p>
              Pour exercer vos droits, écrivez à <a href={`mailto:${legal.email}`}>{legal.email}</a>. Nous vous répondons dans les meilleurs délais, et
              au plus tard dans un délai d'un mois.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Mineurs",
        heading: "8. Mineurs",
        body: () => (
          <p>Ce site est destiné aux personnes majeures. Nous ne traitons pas sciemment de données personnelles de personnes de moins de 18 ans.</p>
        ),
      }),
      security: section({
        nav: "Sécurité des données",
        heading: "9. Sécurité des données",
        body: () => (
          <p>
            Ce site est diffusé exclusivement via une connexion HTTPS chiffrée (TLS), avec des en-têtes de sécurité stricts. Nous prenons les mesures
            techniques et organisationnelles appropriées pour protéger vos données.
          </p>
        ),
      }),
      changes: section({
        nav: "Modifications",
        heading: "10. Modifications de cette politique",
        body: (c) => (
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité en cas d'évolution du site ou des exigences légales. La version en vigueur est
            toujours disponible sur cette page. L'exploitant est indiqué dans les <Link href={c.links.imprint}>mentions légales</Link>.
          </p>
        ),
      }),
    },
  },
};
