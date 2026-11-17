import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Spanish. Same pages and sections as `./en.tsx`.
 *
 * Wording as in `../es.tsx`: "exchange", "comisiones", "código de referido", informal "tú". The operator of
 * the website is "el titular"; a controller under the GDPR is "responsable del tratamiento", a processor
 * "encargado del tratamiento". Articles of law are cited as "art. 6, apdo. 1, letra f) del RGPD".
 * Names, addresses and email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Nota:</strong> esta página es una traducción de cortesía. La versión vinculante es la{" "}
    <a href={englishHref} hrefLang="en">
      versión en inglés
    </a>
    .
  </p>
);

export const es: PageTexts = {
  layout: {
    aside: "En esta página y más",
    onThisPage: "En esta página",
    referralCodes: "Códigos de referido",
    compare: "Comparar exchanges",
    alternativesOf: (name) => <>Alternativas a {name}</>,
    allComparisons: "Todas las comparaciones de exchanges →",
  },

  home: "Inicio",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Acerca de ${site.name} y nuestra metodología`,
    description: `Quién gestiona ${site.domain}, de dónde proceden nuestros datos y cómo revisamos los exchanges de criptomonedas.`,
    ldName: `Acerca de ${site.name}`,
    crumb: "Quiénes somos",
    intro: () => (
      <>
        <span className="eyebrow">Quiénes somos</span>
        <h1>Acerca de {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) ayuda a los traders a registrarse en el exchange de derivados de criptomonedas adecuado – con un referido que
          funciona y los datos que importan antes de depositar.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Qué hacemos",
        heading: "Qué hacemos",
        body: () => (
          <p>
            Nos centramos en los mayores exchanges del ranking de derivados de CoinMarketCap y publicamos una página por exchange con la misma
            estructura: una respuesta rápida, datos clave, comisiones, una descripción honesta, ventajas e inconvenientes, notas de seguridad,
            disponibilidad y preguntas frecuentes. Así los exchanges son fáciles de comparar.
          </p>
        ),
      }),
      methodology: section({
        nav: "Nuestra metodología",
        heading: "Nuestra metodología",
        body: (c) => (
          <ul>
            <li>
              <strong>Los datos de mercado</strong> (interés abierto, volumen en 24 h, número de mercados) proceden del ranking de derivados de
              CoinMarketCap y llevan fecha en cada página.
            </li>
            <li>
              <strong>Los códigos de referido, el registro y la verificación</strong> – dónde va el código, si se puede añadir más tarde, los pasos de
              registro y las reglas de KYC – se leen en el sitio web y en el centro de ayuda de cada exchange. Cada página de exchange enumera las
              páginas oficiales con las que se contrastó.
            </li>
            <li>
              <strong>Las comisiones y el apalancamiento</strong> se toman de la tabla oficial de comisiones de cada exchange para el nivel estándar
              (no VIP).
            </li>
            <li>
              <strong>Las ofertas de bienvenida</strong> se citan tal como las indica el exchange, con sus condiciones. Varían según el país y
              cambian a menudo.
            </li>
            <li>
              <strong>Las licencias y los incidentes</strong> se toman de las páginas de licencias y de los comunicados oficiales del propio exchange.
            </li>
            <li>
              <strong>Las comparaciones de exchanges</strong> – las páginas de alternativas y las{" "}
              <Link href={c.links.compare}>comparaciones directas</Link> – usan las mismas cifras que las páginas de los exchanges. Los productos solo
              se marcan como ofrecidos cuando el exchange los muestra en su propio sitio, y la disponibilidad por país se toma de los términos, las
              listas de países restringidos y los sitios regionales de cada exchange. Qué exchange va “por delante” en un punto se deduce de esas
              cifras; no lo clasificamos nosotros.
            </li>
            <li>
              <strong>Ciclo de revisión:</strong> los datos se vuelven a comprobar con regularidad; la fecha de revisión actual es el {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Independencia",
        heading: "Independencia",
        body: (c) => (
          <p>
            Recibimos comisiones de referido de los exchanges que listamos – los detalles están en nuestra{" "}
            <Link href={c.links.affiliateDisclosure}>divulgación de afiliación</Link>. Eso nunca cambia los datos que publicamos, y siempre mencionamos
            las debilidades y las restricciones.
          </p>
        ),
      }),
      operator: section({
        nav: `Quién gestiona ${site.name}`,
        heading: <>Quién gestiona {site.name}</>,
        body: (c) => (
          <p>
            {site.name} es un sitio web privado, no una empresa. El titular figura en el <Link href={c.links.imprint}>aviso legal</Link>. {site.name} no
            es un exchange y nunca recibe ni custodia tu dinero – las cuentas se abren directamente en el exchange.
          </p>
        ),
      }),
      contact: section({
        nav: "Contacto",
        heading: "Contacto",
        body: () => (
          <p>
            ¿Has visto información desactualizada? Escríbenos a <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – corregimos los errores
            rápidamente.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Divulgación de afiliación",
    description: `Cómo gana dinero ${site.name}, qué enlaces son publicidad y por qué esto no influye en los datos que publicamos sobre los exchanges de criptomonedas.`,
    intro: (c) => (
      <>
        <h1>Divulgación de afiliación</h1>
        <p className="lead">La transparencia es la base de la confianza. Aquí tienes exactamente cómo se financia {site.name}.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Cómo ganamos dinero",
        heading: "Cómo ganamos dinero",
        body: () => (
          <p>
            {site.name} participa en los programas de referidos y de afiliados de los exchanges que aparecen en este sitio web. Cuando abres una cuenta
            a través de uno de nuestros enlaces, el exchange puede pagar una comisión al titular de este sitio web – normalmente una parte de las
            comisiones de trading que genera tu cuenta. Nunca pagas más por ello: un referido no aumenta tus comisiones, y los registros con referido
            suelen incluir un descuento en comisiones o una recompensa de bienvenida para ti. La comisión la paga el exchange, no tú.
          </p>
        ),
      }),
      advertising: section({
        nav: "Qué enlaces son publicidad",
        heading: "Qué enlaces son publicidad",
        body: () => (
          <p>
            Todos los enlaces y botones que llevan a un exchange – por ejemplo “Regístrate en …”, “Registrarse” o “Conseguir” – y todos los códigos de
            referido que se muestran en este sitio web son publicidad: una comunicación comercial de ese exchange por la que podemos recibir un pago.
            Estos enlaces están marcados con <code>rel=&quot;sponsored&quot;</code> conforme a las directrices de los buscadores, y esta divulgación
            está enlazada desde todas las páginas.
          </p>
        ),
      }),
      independence: section({
        nav: "A qué no afecta esto",
        heading: "A qué no afecta esto",
        body: () => (
          <ul>
            <li>
              Las comisiones, el apalancamiento, las licencias, las reglas de verificación y las restricciones por país se toman de las páginas de los
              propios exchanges, y los datos de mercado, de CoinMarketCap – no de acuerdos de marketing. Cada página de exchange enumera sus fuentes.
            </li>
            <li>Publicamos las debilidades, los incidentes de seguridad y las restricciones regionales de cada exchange.</li>
            <li>
              El orden de los exchanges sigue su posición en el ranking de derivados de CoinMarketCap. Ningún exchange puede pagar por una posición
              mejor.
            </li>
            <li>Qué exchange va “por delante” en una comparación se calcula a partir de las cifras publicadas. No se puede comprar.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Con quién tratas",
        heading: "Con quién tratas",
        body: () => (
          <p>
            {site.name} es un sitio web informativo, no un exchange ni un bróker. Nunca recibe ni custodia tu dinero ni tus criptoactivos. Si te
            registras, tu contrato es únicamente con el exchange, conforme a los términos del exchange. Que puedas usar un exchange depende del país en
            el que vivas – consulta sus términos antes de registrarte.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Sin asesoramiento financiero",
        heading: "Sin asesoramiento financiero",
        body: () => (
          <p>
            Nada de lo publicado en este sitio web es una recomendación para comprar, vender u operar con ningún activo, ni sustituye a un asesoramiento
            que tenga en cuenta tu situación personal. Los derivados de criptomonedas son productos de alto riesgo: el apalancamiento multiplica las
            ganancias y las pérdidas, y puedes perder todo tu depósito.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        El titular de este sitio web figura en el <Link href={c.links.imprint}>aviso legal</Link>; cómo se tratan los datos personales se explica en la{" "}
        <Link href={c.links.privacy}>política de privacidad</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Aviso legal",
    description: `Aviso legal de ${site.domain}: titular, datos de contacto, qué es y qué no es el sitio web, responsabilidad y legislación aplicable.`,
    intro: (c) => (
      <>
        <h1>Aviso legal</h1>
        <p className="muted">
          Información sobre el prestador de servicios conforme al art. 5 de la Directiva 2000/31/CE (Directiva sobre el comercio electrónico) y al
          art. 5 de la Ley polaca de 18 de julio de 2002 sobre la prestación de servicios por vía electrónica.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Titular",
        heading: "Titular de este sitio web",
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
              “{site.name}”, “nosotros” y “nos” en este sitio web se refieren al titular indicado arriba. {site.name} es el nombre del sitio web, no el
              de una empresa.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Representado por",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Contacto",
        heading: "Contacto",
        body: () => (
          <p>
            Correo electrónico: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Teléfono: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Forma jurídica",
        heading: "Forma jurídica",
        body: () => <p>Este sitio web lo gestiona un particular. No existe inscripción en ningún registro mercantil.</p>,
      }),
      register: section({
        heading: "Inscripción registral e IVA",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Responsable del contenido",
        heading: "Responsable del contenido",
        body: () => <p>{legal.representative || legal.operator}, dirección indicada arriba.</p>,
      }),
      scope: section({
        nav: "Qué es este sitio web",
        heading: "Qué es este sitio web – y qué no es",
        body: () => (
          <p>
            {site.name} es un sitio web de información y comparación sobre exchanges de criptomonedas y sus programas de referidos. No es un exchange,
            un bróker ni un proveedor de servicios de criptoactivos: no acepta, custodia ni transfiere dinero ni criptoactivos, no ejecuta órdenes y no
            celebra ningún contrato con los visitantes. Si abres una cuenta, lo haces directamente con el exchange, conforme a los términos del propio
            exchange y mediante el proceso de verificación del propio exchange.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Sin asesoramiento, advertencia de riesgo",
        heading: "Sin asesoramiento, advertencia de riesgo",
        body: () => (
          <p>
            Nada de lo publicado en este sitio web constituye asesoramiento de inversión, financiero, jurídico o fiscal, una recomendación personal, ni
            una oferta o invitación para comprar o vender ningún criptoactivo o instrumento financiero. Las comparaciones recogen datos publicados por
            los exchanges y no tienen en cuenta tus circunstancias personales. Operar con criptoactivos, especialmente con apalancamiento, conlleva un
            alto riesgo de pérdida – hasta la pérdida de todo tu depósito. Decide por ti mismo y, en caso de duda, consulta a un asesor autorizado.
          </p>
        ),
      }),
      availability: section({
        nav: "Disponibilidad",
        heading: "Disponibilidad y países restringidos",
        body: () => (
          <p>
            Los exchanges no ofrecen sus servicios en todos los países, y algunos productos están restringidos para los residentes de determinados
            países. Este sitio web no se dirige a personas para las que usar el exchange en cuestión, o recibir información sobre él, esté prohibido en
            el lugar donde viven. Antes de registrarte, consulta los términos del exchange y las normas de tu país de residencia. El sitio web está
            destinado únicamente a personas adultas.
          </p>
        ),
      }),
      liability: section({
        nav: "Responsabilidad",
        heading: "Responsabilidad por el contenido",
        body: () => (
          <p>
            El contenido de este sitio web se ha elaborado con cuidado y se comprueba con regularidad; cada página de exchange muestra la fecha de su
            última revisión y las fuentes con las que se contrastó. No obstante, las comisiones, los límites de apalancamiento, los bonos, las reglas
            de verificación y la disponibilidad los fijan los exchanges y pueden cambiar en cualquier momento, por lo que no podemos garantizar que la
            información sea exacta, completa o esté actualizada. Los términos que muestra el exchange en el momento en que te registras son los que se
            aplican. En la medida en que la ley lo permita, no asumimos ninguna responsabilidad por los daños derivados del uso de esta información; la
            responsabilidad por dolo y negligencia grave y cualquier responsabilidad que no pueda excluirse por ley no se ven afectadas.
          </p>
        ),
      }),
      links: section({
        nav: "Enlaces externos",
        heading: "Enlaces a otros sitios web",
        body: (c) => (
          <p>
            Este sitio web contiene enlaces a sitios web externos sobre los que no tenemos ningún control. El proveedor correspondiente es el único
            responsable de su contenido. Algunos enlaces salientes son enlaces de afiliado (de referido), por los que podemos recibir una comisión –
            consulta nuestra <Link href={c.links.affiliateDisclosure}>divulgación de afiliación</Link>. Si crees que un enlace lleva a contenido
            ilícito, comunícanoslo en <a href={`mailto:${legal.email}`}>{legal.email}</a> y lo comprobaremos sin demora.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Marcas y derechos de autor",
        heading: "Marcas y derechos de autor",
        body: () => (
          <p>
            Los nombres y logotipos de los exchanges son marcas de sus respectivos titulares y se usan únicamente con fines de identificación.{" "}
            {site.name} no está afiliado a ninguno de los exchanges que aparecen, ni cuenta con su respaldo o patrocinio. Todos los textos y gráficos
            originales de este sitio web están protegidos por derechos de autor.
          </p>
        ),
      }),
      disputes: section({
        nav: "Resolución de litigios",
        heading: "Resolución de litigios de consumo",
        body: () => (
          <p>
            No vendemos bienes ni servicios a los visitantes, por lo que del uso de este sitio web no surge ningún contrato de consumo. No participamos
            en procedimientos de resolución de litigios ante un órgano de arbitraje de consumo. Las reclamaciones sobre un exchange deben dirigirse a
            ese exchange.
          </p>
        ),
      }),
      law: section({
        nav: "Legislación aplicable",
        heading: "Legislación aplicable",
        body: () => (
          <p>
            A este sitio web y a su uso se les aplica la legislación polaca. Si eres consumidor, las disposiciones imperativas de protección de los
            consumidores del país en el que tienes tu residencia habitual no se ven afectadas.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Consulta también nuestra <Link href={c.links.privacy}>política de privacidad</Link> y nuestra{" "}
        <Link href={c.links.affiliateDisclosure}>divulgación de afiliación</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Política de privacidad",
    description: `Cómo trata ${site.domain} los datos personales conforme al Reglamento General de Protección de Datos (RGPD) de la UE. Google Analytics solo con tu consentimiento, sin cookies publicitarias.`,
    intro: (c) => (
      <>
        <h1>Política de privacidad</h1>
        <p className="muted">Última actualización: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>En resumen:</strong> {site.domain} no usa píxeles publicitarios, plugins de redes sociales ni fuentes externas. Google Analytics solo
          se ejecuta si lo permites en el banner de consentimiento; sin tu consentimiento no se instala ninguna cookie y no se envía nada a Google.
          Aparte de eso, solo tratamos los datos técnicos necesarios para servir el sitio web de forma segura. Si haces clic en un enlace a un
          exchange, abandonas nuestro sitio web y se aplica la política de privacidad del propio exchange.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Responsable del tratamiento",
        heading: "1. Responsable del tratamiento",
        body: () => (
          <>
            <p>
              El responsable del tratamiento de datos en este sitio web en el sentido del art. 4, punto 7 del RGPD (Reglamento General de Protección
              de Datos de la UE) es el titular del sitio web, un particular:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              Correo electrónico: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              El responsable del tratamiento está establecido en Polonia. Se aplican el RGPD y la Ley polaca de 10 de mayo de 2018 de protección de
              datos personales. Si visitas el sitio web desde Suiza, puede aplicarse además la Ley Federal suiza de Protección de Datos (FADP); los
              derechos descritos a continuación te asisten de la misma manera.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Alojamiento y archivos de registro",
        heading: "2. Alojamiento y archivos de registro del servidor",
        body: () => (
          <>
            <p>
              Este sitio web está alojado por {legal.hostingProvider} (“Vercel”), que actúa como nuestro encargado del tratamiento (art. 28 del RGPD).
              Cuando visitas el sitio web, Vercel trata automáticamente los datos técnicos que transmite tu navegador: dirección IP, fecha y hora de
              la solicitud, URL solicitada, URL de referencia, tipo y versión del navegador, sistema operativo y el código de estado HTTP. Estos datos
              son necesarios para servir el sitio web y para garantizar su estabilidad y seguridad (por ejemplo, para defenderse de ataques). No se
              combinan con otras fuentes de datos ni se usan para identificarte.
            </p>
            <p>
              Base jurídica: art. 6, apdo. 1, letra f) del RGPD – nuestro interés legítimo en un sitio web seguro y funcional. Vercel conserva los
              datos de registro durante un periodo limitado y después los elimina. Vercel puede tratar datos en Estados Unidos. Vercel está
              certificada conforme al Marco de Privacidad de Datos UE-EE. UU. (EU-U.S. Data Privacy Framework), para el que la Comisión Europea ha
              adoptado una decisión de adecuación (art. 45 del RGPD), y se aplica el acuerdo de tratamiento de datos de Vercel, que incluye las
              cláusulas contractuales tipo de la UE.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Cookies y analítica",
        heading: "3. Cookies y analítica",
        body: () => (
          <>
            <p>
              Sin tu consentimiento no instalamos cookies ni usamos analítica. No usamos redes publicitarias, fingerprinting ni plugins de redes
              sociales, y todas las fuentes e imágenes se sirven desde nuestro propio dominio. No llevamos a cabo decisiones automatizadas ni
              elaboración de perfiles (art. 22 del RGPD).
            </p>
            <p>
              Tu elección en el banner de consentimiento se guarda en el almacenamiento local de tu navegador (entrada{" "}
              <code>refco-analytics-consent</code>, valor “granted” o “denied”), para que no tengamos que volver a preguntar en cada página. Esta
              entrada es necesaria para respetar tu elección y no se envía a nadie.
            </p>
            <h3 id="analytics">Google Analytics – solo con tu consentimiento</h3>
            <p>
              Si eliges “Permitir analítica”, este sitio web carga Google Analytics 4, un servicio de Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland (“Google”). Google Analytics instala las cookies <code>_ga</code> y{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (que por defecto se conservan hasta dos años) para distinguir a los visitantes.
              Registra qué páginas se ven, cómo llegaron los visitantes al sitio web, la región aproximada derivada de la dirección IP y datos del
              navegador y del dispositivo. Según Google, Analytics 4 no registra ni almacena direcciones IP. Usamos los informes solo de forma
              agregada, para ver qué páginas se leen. Las funciones publicitarias están desactivadas: sin cookies publicitarias y sin personalización
              de anuncios.
            </p>
            <p>
              Base jurídica: tu consentimiento (art. 6, apdo. 1, letra a) del RGPD). Google actúa como nuestro encargado del tratamiento. Los datos
              pueden transferirse a Google LLC en Estados Unidos, que está certificada conforme al Marco de Privacidad de Datos UE-EE. UU. Google
              elimina los datos a nivel de usuario una vez transcurrido el periodo de conservación configurado en Analytics, 14 meses como máximo.
              Puedes retirar tu consentimiento en cualquier momento, con efecto para el futuro, mediante “Configuración de cookies” al pie de cada
              página; las cookies de Analytics se eliminan entonces de tu navegador y Analytics deja de cargarse. Más información de Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Enlaces a exchanges",
        heading: "4. Enlaces a exchanges (enlaces de afiliado)",
        body: (c) => (
          <p>
            Nuestro sitio web contiene enlaces a exchanges de criptomonedas de terceros. Algunos son enlaces de referido que permiten al exchange
            reconocer que llegaste desde nuestro sitio web. No transmitimos ningún dato personal al exchange; el identificador de referido forma parte
            del propio enlace y nos identifica a nosotros, no a ti. Una vez que haces clic, estás en el sitio web del exchange y se aplica su política
            de privacidad. El exchange puede entonces instalar cookies y tratar tus datos como responsable del tratamiento independiente. El exchange
            nos comunica qué comisiones se generaron por las cuentas abiertas a través de nuestros enlaces. Ese informe puede contener un
            identificador de cuenta seudónimo (por ejemplo, un ID de usuario) y cifras de comisiones; lo usamos únicamente para contabilizar las
            comisiones (art. 6, apdo. 1, letra f) del RGPD) y no intentamos identificarte a partir de él. Más información sobre estos enlaces:{" "}
            <Link href={c.links.affiliateDisclosure}>divulgación de afiliación</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Contacto por correo electrónico",
        heading: "5. Contacto por correo electrónico",
        body: () => (
          <p>
            Si te pones en contacto con nosotros por correo electrónico, tratamos los datos que nos facilitas (dirección de correo electrónico, nombre,
            contenido de tu mensaje) para responder a tu solicitud. Base jurídica: art. 6, apdo. 1, letra f) del RGPD – nuestro interés legítimo en
            responder a las consultas. Tu mensaje se guarda en nuestro buzón, gestionado por un proveedor de servicios de correo electrónico que actúa
            como nuestro encargado del tratamiento. Eliminamos la correspondencia una vez atendida tu solicitud, salvo que la ley nos obligue a
            conservarla más tiempo. No estás obligado a facilitar ningún dato personal; sin una dirección de correo electrónico, sencillamente no
            podemos responder.
          </p>
        ),
      }),
      recipients: section({
        nav: "Destinatarios de los datos",
        heading: "6. Destinatarios de los datos",
        body: () => (
          <p>
            No vendemos datos personales ni los cedemos a terceros para sus propios fines. Los datos solo los tratan los proveedores de servicios
            mencionados arriba – el proveedor de alojamiento, el proveedor de correo electrónico y, si has permitido la analítica, Google – y solo se
            comunican a las autoridades cuando la ley nos obliga a ello.
          </p>
        ),
      }),
      rights: section({
        nav: "Tus derechos",
        heading: "7. Tus derechos",
        body: () => (
          <>
            <p>Con sujeción a los requisitos legales, tienes derecho a:</p>
            <ul>
              <li>acceder a los datos personales que conservamos sobre ti (art. 15 del RGPD),</li>
              <li>la rectificación de los datos inexactos (art. 16 del RGPD),</li>
              <li>la supresión (art. 17 del RGPD) y la limitación del tratamiento (art. 18 del RGPD),</li>
              <li>la portabilidad de los datos (art. 20 del RGPD),</li>
              <li>oponerte, por motivos relacionados con tu situación particular, al tratamiento basado en intereses legítimos (art. 21 del RGPD),</li>
              <li>retirar en cualquier momento un consentimiento que hayas dado, con efecto para el futuro (art. 7, apdo. 3 del RGPD),</li>
              <li>
                presentar una reclamación ante una autoridad de control (art. 77 del RGPD) – en Polonia, el Presidente de la Oficina de Protección de
                Datos Personales (Prezes Urzędu Ochrony Danych Osobowych, UODO, uodo.gov.pl), o la autoridad del país de la UE en el que vives o
                trabajas; en Suiza, el Comisionado Federal de Protección de Datos e Información (FDPIC).
              </li>
            </ul>
            <p>
              Para ejercer tus derechos, escribe a <a href={`mailto:${legal.email}`}>{legal.email}</a>. Respondemos sin dilación indebida y, a más
              tardar, en el plazo de un mes.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Menores",
        heading: "8. Menores",
        body: () => <p>Este sitio web está destinado a personas adultas. No tratamos a sabiendas datos personales de menores de 18 años.</p>,
      }),
      security: section({
        nav: "Seguridad de los datos",
        heading: "9. Seguridad de los datos",
        body: () => (
          <p>
            Este sitio web se sirve exclusivamente a través de una conexión HTTPS cifrada (TLS) con cabeceras de seguridad estrictas. Adoptamos medidas
            técnicas y organizativas apropiadas para proteger tus datos.
          </p>
        ),
      }),
      changes: section({
        nav: "Cambios",
        heading: "10. Cambios en esta política",
        body: (c) => (
          <p>
            Podemos actualizar esta política de privacidad cuando cambien el sitio web o los requisitos legales. La versión vigente está siempre
            disponible en esta página. El titular figura en el <Link href={c.links.imprint}>aviso legal</Link>.
          </p>
        ),
      }),
    },
  },
};
