import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Brazilian Portuguese. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: "corretora" for an exchange (feminine: "a Binance", "à Bitget"), "código de indicação", "taxas", the
 * reader is "você". The operator of the website is "o responsável pelo site"; a controller under the GDPR is
 * "controlador", a processor "operador". The regulation is "RGPD (Regulamento Geral sobre a Proteção de Dados
 * da UE)", articles are cited as "art. 6º, item 1, alínea f, do RGPD" (ordinal "º" up to 9). Names, addresses
 * and email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Observação:</strong> esta página é uma versão de cortesia em português. O texto vinculante é a{" "}
    <a href={englishHref} hrefLang="en">
      versão em inglês
    </a>
    .
  </p>
);

export const pt: PageTexts = {
  layout: {
    aside: "Nesta página e mais",
    onThisPage: "Nesta página",
    referralCodes: "Códigos de indicação",
    compare: "Comparar corretoras",
    alternativesOf: (name) => <>Alternativas à {name}</>,
    allComparisons: "Todas as comparações de corretoras →",
  },

  home: "Início",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Sobre o ${site.name} e nossa metodologia`,
    description: `Quem administra o ${site.domain}, de onde vêm os nossos dados, como avaliamos as corretoras de cripto e com que frequência revisamos taxas e ofertas.`,
    ldName: `Sobre o ${site.name}`,
    crumb: "Sobre",
    intro: () => (
      <>
        <span className="eyebrow">Sobre</span>
        <h1>Sobre o {site.name}</h1>
        <p className="lead">
          O {site.name} ({site.domain}) ajuda traders a se cadastrar na corretora de derivativos de criptomoedas certa – com uma indicação que funciona e
          os fatos que importam antes de você depositar.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "O que fazemos",
        heading: "O que fazemos",
        body: () => (
          <p>
            Nosso foco são as maiores corretoras do ranking de derivativos do CoinMarketCap. Para cada uma publicamos uma página com a mesma estrutura:
            resposta rápida, dados principais, taxas, uma descrição honesta, prós e contras, observações de segurança, disponibilidade e perguntas
            frequentes. Assim fica fácil comparar as corretoras.
          </p>
        ),
      }),
      methodology: section({
        nav: "Nossa metodologia",
        heading: "Nossa metodologia",
        body: (c) => (
          <ul>
            <li>
              <strong>Os dados de mercado</strong> – open interest (contratos em aberto), volume em 24h e número de mercados – vêm do ranking de
              derivativos do CoinMarketCap e aparecem com data em todas as páginas.
            </li>
            <li>
              <strong>Códigos de indicação, cadastro e verificação</strong> – onde inserir o código, se ele pode ser adicionado depois, as etapas do cadastro
              e as regras de KYC – são conferidos no próprio site e na central de ajuda de cada corretora. Cada página de corretora lista as páginas
              oficiais usadas na checagem.
            </li>
            <li>
              <strong>Taxas e alavancagem</strong> saem da tabela oficial de taxas de cada corretora, sempre no nível padrão (sem VIP).
            </li>
            <li>
              <strong>Os bônus de boas-vindas</strong> são reproduzidos como a corretora os apresenta, com as respectivas condições. Eles variam de país
              para país e mudam com frequência.
            </li>
            <li>
              <strong>Licenças e incidentes</strong> vêm das páginas de licenças e dos comunicados oficiais da própria corretora.
            </li>
            <li>
              <strong>As comparações entre corretoras</strong> – as páginas de alternativas e os <Link href={c.links.compare}>comparativos diretos</Link> –
              usam os mesmos números das páginas das corretoras. Um produto só aparece como oferecido quando a corretora o mostra no próprio site, e a
              disponibilidade por país vem dos termos de uso, das listas de países restritos e dos sites regionais de cada corretora. Qual corretora sai
              “na frente” em cada ponto é lido diretamente desses números – não é uma classificação feita por nós.
            </li>
            <li>
              <strong>Ciclo de revisão:</strong> os dados são conferidos novamente com regularidade; a revisão atual é de {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Independência",
        heading: "Independência",
        body: (c) => (
          <p>
            Recebemos comissões de indicação das corretoras que apresentamos – os detalhes estão na nossa{" "}
            <Link href={c.links.affiliateDisclosure}>divulgação de afiliados</Link>. Isso nunca altera os fatos que publicamos, e sempre apontamos pontos
            fracos e restrições.
          </p>
        ),
      }),
      operator: section({
        nav: `Quem administra o ${site.name}`,
        heading: <>Quem administra o {site.name}</>,
        body: (c) => (
          <p>
            O {site.name} é um site particular, não uma empresa. O responsável pelo site está identificado no <Link href={c.links.imprint}>aviso legal</Link>.
            O {site.name} não é uma corretora e nunca recebe nem guarda o seu dinheiro – as contas são abertas diretamente na corretora.
          </p>
        ),
      }),
      contact: section({
        nav: "Contato",
        heading: "Contato",
        body: () => (
          <p>
            Encontrou alguma informação desatualizada? Escreva para <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – corrigimos erros
            rapidamente.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Divulgação de afiliados",
    description: `Como o ${site.name} ganha dinheiro, quais links são publicidade e por que isso não influencia os fatos que publicamos sobre corretoras de criptomoedas.`,
    intro: (c) => (
      <>
        <h1>Divulgação de afiliados</h1>
        <p className="lead">Transparência é a base da confiança. Veja exatamente como o {site.name} se financia.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Como ganhamos dinheiro",
        heading: "Como ganhamos dinheiro",
        body: () => (
          <p>
            O {site.name} participa dos programas de indicação e de afiliados das corretoras apresentadas neste site. Quando você abre uma conta por um dos
            nossos links, a corretora pode pagar uma comissão ao responsável por este site – normalmente uma parte das taxas de negociação geradas pela sua
            conta. Você nunca paga mais por isso: a indicação não aumenta as suas taxas, e o cadastro com indicação muitas vezes vem com desconto nas taxas
            ou uma recompensa de boas-vindas para você. Quem paga a comissão é a corretora, não você.
          </p>
        ),
      }),
      advertising: section({
        nav: "Quais links são publicidade",
        heading: "Quais links são publicidade",
        body: () => (
          <p>
            Todos os links e botões que levam a uma corretora – por exemplo “Cadastre-se na …”, “Cadastre-se” ou “Resgatar” – e todos os códigos de
            indicação exibidos neste site são publicidade: uma comunicação comercial da corretora em questão, pela qual podemos ser remunerados. Esses links
            são marcados com <code>rel=&quot;sponsored&quot;</code>, conforme as diretrizes dos mecanismos de busca, e todas as páginas trazem um link para
            esta divulgação.
          </p>
        ),
      }),
      independence: section({
        nav: "O que isso não afeta",
        heading: "O que isso não afeta",
        body: () => (
          <ul>
            <li>
              Taxas, alavancagem, licenças, regras de verificação e restrições por país vêm das páginas das próprias corretoras, e os dados de mercado, do
              CoinMarketCap – não de acordos de marketing. Cada página de corretora lista as suas fontes.
            </li>
            <li>Publicamos os pontos fracos, os incidentes de segurança e as restrições regionais de todas as corretoras.</li>
            <li>
              A ordem das corretoras segue a posição delas no ranking de derivativos do CoinMarketCap. Nenhuma corretora pode pagar por uma posição melhor.
            </li>
            <li>Qual corretora fica “na frente” em uma comparação é calculado a partir dos números publicados. Isso não se compra.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "Com quem você está lidando",
        heading: "Com quem você está lidando",
        body: () => (
          <p>
            O {site.name} é um site informativo, não uma corretora (exchange) nem um broker. Ele nunca recebe nem guarda o seu dinheiro ou os seus
            criptoativos. Se você se cadastrar, o seu contrato é exclusivamente com a corretora, nos termos dela. Poder ou não usar uma corretora depende do
            país onde você mora – confira os termos dela antes de se cadastrar.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Não é consultoria financeira",
        heading: "Não é consultoria financeira",
        body: () => (
          <p>
            Nada neste site é uma recomendação para comprar, vender ou negociar qualquer ativo, nem substitui uma orientação que leve em conta a sua
            situação pessoal. Derivativos de criptomoedas são produtos de alto risco: a alavancagem multiplica ganhos e perdas, e você pode perder todo o
            valor depositado.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        O responsável por este site está identificado no <Link href={c.links.imprint}>aviso legal</Link>; o tratamento de dados pessoais é explicado na{" "}
        <Link href={c.links.privacy}>política de privacidade</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Aviso legal",
    description: `Aviso legal do ${site.domain}: responsável, dados de contato, o que o site é e o que não é, responsabilidade e lei aplicável.`,
    intro: (c) => (
      <>
        <h1>Aviso legal</h1>
        <p className="muted">
          Informações sobre o prestador de serviços nos termos do art. 5º da Diretiva 2000/31/CE (Diretiva sobre Comércio Eletrônico) e do art. 5º da Lei
          polonesa de 18 de julho de 2002 sobre a prestação de serviços por meios eletrônicos.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Responsável pelo site",
        heading: "Responsável por este site",
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
              “{site.name}”, “nós” e “nosso” neste site se referem ao responsável indicado acima. {site.name} é o nome do site, não de uma empresa.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Representado por",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Contato",
        heading: "Contato",
        body: () => (
          <p>
            E-mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Telefone: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Forma jurídica",
        heading: "Forma jurídica",
        body: () => <p>Este site é mantido por uma pessoa física. Não há inscrição em nenhum registro comercial.</p>,
      }),
      register: section({
        heading: "Inscrição no registro e IVA",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Responsável pelo conteúdo",
        heading: "Responsável pelo conteúdo",
        body: () => <p>{legal.representative || legal.operator}, endereço indicado acima.</p>,
      }),
      scope: section({
        nav: "O que este site é",
        heading: "O que este site é – e o que não é",
        body: () => (
          <p>
            O {site.name} é um site de informação e comparação sobre corretoras de criptomoedas e seus programas de indicação. Não é uma corretora
            (exchange), um broker nem um prestador de serviços de criptoativos: não aceita, não guarda e não transfere dinheiro nem criptoativos, não executa
            ordens e não celebra nenhum contrato com os visitantes. Se você abrir uma conta, fará isso diretamente com a corretora, nos termos da própria
            corretora e pelo processo de verificação dela.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Não é consultoria; aviso de risco",
        heading: "Não é consultoria; aviso de risco",
        body: () => (
          <p>
            Nada neste site constitui consultoria de investimentos, financeira, jurídica ou tributária, recomendação personalizada, nem oferta ou convite
            para comprar ou vender qualquer criptoativo ou instrumento financeiro. As comparações apresentam fatos publicados pelas corretoras e não levam em
            conta as suas circunstâncias pessoais. Negociar criptoativos, principalmente com alavancagem, envolve alto risco de perda – inclusive a perda de
            todo o valor depositado. Tome as suas próprias decisões e, em caso de dúvida, consulte um profissional habilitado.
          </p>
        ),
      }),
      availability: section({
        nav: "Disponibilidade",
        heading: "Disponibilidade e países restritos",
        body: () => (
          <p>
            As corretoras não oferecem seus serviços em todos os países, e alguns produtos são restritos para residentes de determinados países. Este site
            não se destina a pessoas para as quais o uso da corretora em questão, ou o recebimento de informações sobre ela, é proibido no lugar onde
            residem. Antes de se cadastrar, confira os termos da corretora e as regras do seu país de residência. O site se destina exclusivamente a adultos.
          </p>
        ),
      }),
      liability: section({
        nav: "Responsabilidade",
        heading: "Responsabilidade pelo conteúdo",
        body: () => (
          <p>
            O conteúdo deste site foi elaborado com cuidado e é verificado regularmente; cada página de corretora mostra a data da última revisão e as fontes
            usadas na verificação. No entanto, taxas, limites de alavancagem, bônus, regras de verificação e disponibilidade são definidos pelas corretoras e
            podem mudar a qualquer momento, por isso não podemos garantir que as informações estejam corretas, completas ou atualizadas. Valem as condições
            exibidas pela corretora no momento do seu cadastro. Na medida permitida por lei, não assumimos responsabilidade por danos decorrentes do uso
            destas informações; ficam ressalvadas a responsabilidade por dolo e culpa grave e qualquer responsabilidade que não possa ser excluída por lei.
          </p>
        ),
      }),
      links: section({
        nav: "Links externos",
        heading: "Links para outros sites",
        body: (c) => (
          <p>
            Este site contém links para sites externos sobre os quais não temos nenhum controle. O conteúdo deles é de responsabilidade exclusiva do
            respectivo provedor. Alguns links externos são links de afiliado (de indicação), pelos quais podemos receber uma comissão – veja a nossa{" "}
            <Link href={c.links.affiliateDisclosure}>divulgação de afiliados</Link>. Se você acredita que algum link leva a conteúdo ilícito, avise-nos pelo
            e-mail <a href={`mailto:${legal.email}`}>{legal.email}</a> e verificaremos sem demora.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Marcas e direitos autorais",
        heading: "Marcas e direitos autorais",
        body: () => (
          <p>
            Os nomes e logotipos das corretoras são marcas de seus respectivos titulares e são usados apenas para fins de identificação. O {site.name} não tem
            vínculo com nenhuma das corretoras apresentadas, nem é endossado ou patrocinado por elas. Todos os textos e gráficos originais deste site são
            protegidos por direitos autorais.
          </p>
        ),
      }),
      disputes: section({
        nav: "Resolução de conflitos",
        heading: "Resolução de conflitos de consumo",
        body: () => (
          <p>
            Não vendemos produtos nem serviços aos visitantes; por isso, o uso deste site não gera nenhum contrato de consumo. Não participamos de
            procedimentos de resolução de conflitos perante órgãos de arbitragem de consumo. Reclamações sobre uma corretora devem ser dirigidas à própria
            corretora.
          </p>
        ),
      }),
      law: section({
        nav: "Lei aplicável",
        heading: "Lei aplicável",
        body: () => (
          <p>
            Este site e o seu uso são regidos pela lei polonesa. Se você for consumidor, ficam ressalvadas as normas imperativas de proteção ao consumidor do
            país onde você tem residência habitual.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Veja também a nossa <Link href={c.links.privacy}>política de privacidade</Link> e a nossa{" "}
        <Link href={c.links.affiliateDisclosure}>divulgação de afiliados</Link>.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Política de privacidade",
    description: `Como o ${site.domain} trata dados pessoais segundo o RGPD: Google Analytics só com o seu consentimento, sem cookies de publicidade e sem venda de dados.`,
    intro: (c) => (
      <>
        <h1>Política de privacidade</h1>
        <p className="muted">Última atualização: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Em resumo:</strong> o {site.domain} não usa pixels de publicidade, plugins de redes sociais nem fontes externas. O Google Analytics só é
          ativado se você permitir no banner de consentimento; sem o seu consentimento, nenhum cookie é gravado e nada é enviado ao Google. Fora isso,
          tratamos apenas os dados técnicos necessários para entregar o site com segurança. Ao clicar em um link para uma corretora, você sai do nosso site e
          passa a valer a política de privacidade da própria corretora.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Controlador",
        heading: "1. Controlador",
        body: () => (
          <>
            <p>
              O controlador dos dados tratados neste site, na acepção do art. 4º, item 7, do RGPD (Regulamento Geral sobre a Proteção de Dados da UE), é a
              pessoa física que mantém o site:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              E-mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              O controlador está estabelecido na Polônia. Aplicam-se o RGPD e a Lei polonesa de 10 de maio de 2018 sobre a proteção de dados pessoais. Se
              você acessar o site a partir da Suíça, pode se aplicar também a Lei Federal suíça de Proteção de Dados (FADP); os direitos descritos abaixo
              valem para você da mesma forma.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Hospedagem e arquivos de log",
        heading: "2. Hospedagem e arquivos de log do servidor",
        body: () => (
          <>
            <p>
              Este site é hospedado pela {legal.hostingProvider} (“Vercel”), que atua como nosso operador (art. 28 do RGPD). Quando você acessa o site, a
              Vercel trata automaticamente os dados técnicos que o seu navegador transmite: endereço IP, data e hora da requisição, URL solicitada, URL de
              origem (referrer), tipo e versão do navegador, sistema operacional e o código de status HTTP. Esses dados são necessários para entregar o site
              e garantir a sua estabilidade e segurança (por exemplo, na defesa contra ataques). Eles não são cruzados com outras fontes de dados nem usados
              para identificar você.
            </p>
            <p>
              Base legal: art. 6º, item 1, alínea f, do RGPD – nosso legítimo interesse em um site seguro e funcional. A Vercel armazena os dados de log
              por um período limitado e depois os exclui. A Vercel pode tratar dados nos Estados Unidos. A Vercel é certificada no EU-U.S. Data Privacy
              Framework (Quadro de Privacidade de Dados UE-EUA), para o qual a Comissão Europeia adotou uma decisão de adequação (art. 45 do RGPD), e
              aplica-se o contrato de tratamento de dados da Vercel, que inclui as Cláusulas Contratuais Padrão da UE.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Cookies e análise",
        heading: "3. Cookies e ferramentas de análise",
        body: () => (
          <>
            <p>
              Sem o seu consentimento, não gravamos cookies nem usamos ferramentas de análise. Não usamos redes de publicidade, fingerprinting nem plugins de
              redes sociais, e todas as fontes e imagens são servidas pelo nosso próprio domínio. Não tomamos decisões automatizadas nem fazemos perfilamento
              (art. 22 do RGPD).
            </p>
            <p>
              A sua escolha no banner de consentimento fica salva no armazenamento local (local storage) do seu navegador (entrada{" "}
              <code>refco-analytics-consent</code>, valor “granted” ou “denied”), para que não precisemos perguntar de novo em cada página. Essa entrada é
              necessária para respeitar a sua escolha e não é enviada a ninguém.
            </p>
            <h3 id="analytics">Google Analytics – só com o seu consentimento</h3>
            <p>
              Se você escolher “Permitir estatísticas”, este site carrega o Google Analytics 4, um serviço da Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland (“Google”). O Google Analytics grava os cookies <code>_ga</code> e{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (armazenados, por padrão, por até dois anos) para distinguir os visitantes. Ele
              registra quais páginas são visualizadas, como os visitantes chegaram ao site, a região aproximada derivada do endereço IP e dados do navegador
              e do dispositivo. Segundo o Google, o Analytics 4 não registra nem armazena endereços IP. Usamos os relatórios apenas de forma agregada, para
              ver quais páginas são lidas. Os recursos de publicidade estão desativados: sem cookies de publicidade e sem personalização de anúncios.
            </p>
            <p>
              Base legal: o seu consentimento (art. 6º, item 1, alínea a, do RGPD). O Google atua como nosso operador. Os dados podem ser transferidos para
              a Google LLC nos Estados Unidos, que é certificada no EU-U.S. Data Privacy Framework. O Google exclui os dados no nível do usuário ao fim do
              período de retenção definido no Analytics, de no máximo 14 meses. Você pode revogar o seu consentimento a qualquer momento, com efeito para o
              futuro, em “Configurações de cookies”, no rodapé de todas as páginas; os cookies do Analytics são então removidos do seu navegador e o
              Analytics deixa de ser carregado. Mais informações do Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Links para corretoras",
        heading: "4. Links para corretoras (links de afiliado)",
        body: (c) => (
          <p>
            O nosso site contém links para corretoras de criptomoedas, que são empresas terceiras. Alguns são links de indicação, que permitem à corretora
            reconhecer que você veio do nosso site. Não transmitimos nenhum dado pessoal à corretora; o identificador de indicação faz parte do próprio link e
            identifica a nós, não a você. Depois do clique, você está no site da corretora, e vale a política de privacidade dela. A corretora pode então
            gravar cookies e tratar os seus dados como controladora independente. A corretora nos informa quais comissões foram geradas por contas abertas
            pelos nossos links. Esse relatório pode conter um identificador de conta pseudonimizado (por exemplo, um ID de usuário) e valores de taxas; nós o
            usamos apenas para a apuração das comissões (art. 6º, item 1, alínea f, do RGPD) e não tentamos identificar você a partir dele. Mais sobre esses
            links: <Link href={c.links.affiliateDisclosure}>divulgação de afiliados</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Contato por e-mail",
        heading: "5. Contato por e-mail",
        body: () => (
          <p>
            Se você entrar em contato conosco por e-mail, tratamos os dados que você informar (endereço de e-mail, nome, conteúdo da mensagem) para responder
            à sua solicitação. Base legal: art. 6º, item 1, alínea f, do RGPD – nosso legítimo interesse em responder às solicitações recebidas. A sua
            mensagem fica armazenada na nossa caixa de e-mail, mantida por um provedor de e-mail que atua como nosso operador. Excluímos a correspondência
            quando a sua solicitação for resolvida, salvo se a lei exigir que a guardemos por mais tempo. Você não é obrigado a fornecer nenhum dado pessoal;
            sem um endereço de e-mail, simplesmente não conseguimos responder.
          </p>
        ),
      }),
      recipients: section({
        nav: "Destinatários dos dados",
        heading: "6. Destinatários dos dados",
        body: () => (
          <p>
            Não vendemos dados pessoais nem os repassamos a terceiros para fins próprios deles. Os dados são tratados apenas pelos prestadores de serviços
            citados acima – o provedor de hospedagem, o provedor de e-mail e, se você tiver permitido a análise, o Google – e só são divulgados a
            autoridades quando a lei nos obriga a isso.
          </p>
        ),
      }),
      rights: section({
        nav: "Seus direitos",
        heading: "7. Seus direitos",
        body: () => (
          <>
            <p>Observados os requisitos legais, você tem o direito de:</p>
            <ul>
              <li>acessar os dados pessoais que mantemos sobre você (art. 15 do RGPD),</li>
              <li>obter a retificação de dados inexatos (art. 16 do RGPD),</li>
              <li>obter a eliminação (art. 17 do RGPD) e a limitação do tratamento (art. 18 do RGPD),</li>
              <li>solicitar a portabilidade dos dados (art. 20 do RGPD),</li>
              <li>opor-se, por motivos relacionados à sua situação particular, ao tratamento baseado em legítimo interesse (art. 21 do RGPD),</li>
              <li>revogar a qualquer momento um consentimento dado, com efeito para o futuro (art. 7º, item 3, do RGPD),</li>
              <li>
                apresentar reclamação a uma autoridade de controle (art. 77 do RGPD) – na Polônia, o Presidente do Escritório de Proteção de Dados Pessoais
                (Prezes Urzędu Ochrony Danych Osobowych, UODO, uodo.gov.pl), ou a autoridade do país da UE em que você mora ou trabalha; na Suíça, o
                Comissário Federal de Proteção de Dados e Informação (FDPIC).
              </li>
            </ul>
            <p>
              Para exercer os seus direitos, escreva para <a href={`mailto:${legal.email}`}>{legal.email}</a>. Respondemos sem demora injustificada e, no
              máximo, em um mês.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Menores de idade",
        heading: "8. Menores de idade",
        body: () => <p>Este site é destinado a adultos. Não tratamos, de forma consciente, dados pessoais de menores de 18 anos.</p>,
      }),
      security: section({
        nav: "Segurança dos dados",
        heading: "9. Segurança dos dados",
        body: () => (
          <p>
            Este site é entregue exclusivamente por conexão HTTPS criptografada (TLS), com cabeçalhos de segurança rigorosos. Adotamos medidas técnicas e
            organizacionais adequadas para proteger os seus dados.
          </p>
        ),
      }),
      changes: section({
        nav: "Alterações",
        heading: "10. Alterações nesta política",
        body: (c) => (
          <p>
            Podemos atualizar esta política de privacidade quando o site ou os requisitos legais mudarem. A versão em vigor está sempre disponível nesta
            página. O responsável pelo site está identificado no <Link href={c.links.imprint}>aviso legal</Link>.
          </p>
        ),
      }),
    },
  },
};
