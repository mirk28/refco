import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in Brazilian Portuguese. Same keys as `en.tsx`.
 *
 * Wording: "código de indicação" for referral code (main keyword), "corretora" for the platform (all exchange
 * names are feminine: a Binance, na OKX, da Bybit), "taxas" for fees, "Spot" and "Futuros" for the markets,
 * address with "você". Numbers in Brazilian notation (0,02%, 10.000 USDT, US$ 34,1 bi).
 * Field and button names of the exchanges stay in English, because only the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B e C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`);
const lcFirst = (s: string) => s.charAt(0).toLocaleLowerCase("pt-BR") + s.slice(1);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** A number in Brazilian notation: 1234.5 → "1.234,5". */
const ptNumber = (n: number, digits: number) => {
  const [int, dec] = n.toFixed(digits).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dec ? `${grouped},${dec}` : grouped;
};
/** Billions of US dollars: 34.1 → "US$ 34,1 bi". */
const bi = (n: number, digits: number) => `US$ ${ptNumber(n, digits)} bi`;

export const pt: Dictionary = {
  list,

  format: {
    billions: (n) => bi(n, n >= 10 ? 1 : 2),
    billionsExact: (n) => bi(n, 2),
    billionsFloor: (n) => `${bi(Math.floor(n), 0)}+`,
  },

  meta: {
    siteTitle: `${site.name} – Códigos de indicação verificados para corretoras cripto`,
    siteDescription:
      "Códigos de indicação verificados para Binance, OKX, Bybit, Bitget, Gate, KuCoin e MEXC – desbloqueie bônus para novos usuários e reembolso de taxas em Spot e Futuros com um único link de cadastro. Taxas, dados e prós e contras honestos.",
  },

  layout: {
    skip: "Pular para o conteúdo",
    mainNav: "Principal",
    nav: { exchanges: "Corretoras", benefits: "Vantagens", compare: "Comparar", howItWorks: "Como funciona", about: "Sobre" },
    getCodes: "Ver códigos",
    homeLabel: `${site.name} – ${site.domain}, página inicial`,
    language: "Idioma",
    footerAbout:
      "Códigos de indicação verificados das maiores corretoras de criptomoedas – bônus de boas-vindas e reembolso de taxas em Spot e Futuros. Informações claras, direto das fontes oficiais.",
    referralCodes: "Códigos de indicação",
    referralCodeOf: (name) => `Código de indicação ${name}`,
    alternatives: "Alternativas",
    alternativesOf: (name) => `Alternativas à ${name}`,
    guides: "Guias",
    comparisons: "Comparativos de corretoras",
    howCodesWork: "Como funcionam os códigos de indicação",
    faq: "Perguntas frequentes",
    about: "Sobre nós e metodologia",
    legal: "Informações legais",
    imprint: "Aviso legal",
    privacy: "Política de privacidade",
    disclosure: "Divulgação de afiliados",
    cookieSettings: "Configurações de cookies",
    risk: (
      <>
        <strong>Aviso de risco:</strong> Negociar derivativos de criptomoedas com alavancagem é altamente arriscado e pode levar à perda de todo o seu
        depósito. Opere apenas com dinheiro que você pode se dar ao luxo de perder. Nada neste site constitui aconselhamento financeiro, de investimento
        ou tributário.
      </>
    ),
    affiliate: (
      <>
        <strong>Divulgação de afiliados:</strong> Alguns links são links de indicação. Se você se cadastrar por meio deles, podemos receber uma comissão,
        sem nenhum custo extra para você. Isso nunca influencia os dados que publicamos. Os nomes e logotipos das corretoras são marcas de seus
        respectivos titulares; o {site.name} não é afiliado a elas nem endossado por elas.
      </>
    ),
  },

  consent: {
    label: "Consentimento para estatísticas de acesso",
    text: (privacyHref) => (
      <>
        <strong>Estatísticas de acesso – você decide.</strong> Gostaríamos de usar o Google Analytics para ver quais páginas são lidas. Ele grava cookies
        e envia dados de uso ao Google, e só é ativado se você permitir. Em nenhum caso usamos cookies de publicidade. Detalhes:{" "}
        <Link href={privacyHref}>política de privacidade</Link>.
      </>
    ),
    decline: "Recusar",
    allow: "Permitir estatísticas",
  },

  notFound: {
    title: "Esta página não existe",
    text: "O código de indicação que você procura pode ter mudado de endereço. Tente um destes:",
    back: "Voltar à página inicial",
  },

  og: {
    footer: ["Links verificados", "Taxas e dados", "Fontes oficiais"],
    homeAlt: "RefCo – códigos de indicação verificados de corretoras cripto",
    homeKicker: (monthYear) => `Atualizado em ${monthYear}`,
    homeTitle: "Códigos de indicação de corretoras cripto, verificados.",
    exchangeAlt: "Código de indicação, alternativas e comparativos de corretoras – RefCo",
    exchangeKicker: (monthYear) => `Verificado em ${monthYear}`,
    exchangeTitle: (e) => `Código de indicação ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot e Futuros com um só link`,
    versusBadge: "Frente a frente",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Taxas de Futuros ${feesA} vs ${feesB} · alavancagem ${leverageA}x vs ${leverageB}x · KYC, países, bônus`,
  },

  blocks: {
    signUpOn: (name) => `Cadastre-se na ${name}`,
    signUp: "Cadastre-se",
    details: "Detalhes",
    breadcrumb: "Trilha de navegação",
    copy: "Copiar",
    copied: "Copiado ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futuros maker / taker",
    maxLeverage: "Alavancagem máx.",
    since: "Desde",
    tableCaption:
      "Comparativo de corretoras de criptomoedas por oferta para novos usuários, taxas de Spot e Futuros, alavancagem e dados de mercado",
    exchange: "Corretora",
    newUserOffer: "Oferta para novos usuários",
    futuresFees: "Taxas de Futuros (maker / taker)",
    spotFees: "Taxas de Spot",
    openInterest: "Open interest",
    markets: "Mercados",
    action: "Ação",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => fit(TITLE_MAX, `Códigos de indicação de corretoras cripto (${monthYear})`, `Códigos de indicação cripto (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Códigos de indicação verificados para Binance, OKX, Bybit, Bitget, Gate, KuCoin e MEXC: bônus e reembolso de taxas com um só link (${monthYear}).`,
        `Códigos de indicação verificados para Binance, OKX, Bybit, Bitget, Gate, KuCoin e MEXC: bônus de cadastro e reembolso de taxas com um só link.`,
      ),
    listName: "Códigos de indicação de corretoras cripto para Spot e Futuros",
    updated: (monthYear) => `Atualizado em ${monthYear}`,
    h1: (
      <>
        Códigos de indicação de corretoras cripto, <span className="hl">verificados</span> e explicados.
      </>
    ),
    lead: (
      <>
        Desbloqueie bônus de boas-vindas e reembolso de taxas nas maiores corretoras de criptomoedas do mundo – uma única indicação vale para Spot{" "}
        <em>e</em> Futuros. E ainda os dados de que você precisa para escolher: taxas, alavancagem, licenças e prós e contras honestos.
      </>
    ),
    browse: "Ver códigos de indicação",
    seeBenefits: "Ver suas vantagens",
    trust: (date) => [`Verificado em ${date}`, "Somente links oficiais", "Estatísticas só com o seu consentimento"],
    featured: "Corretoras em destaque",
    ticketName: (name) => `Código de indicação ${name}`,
    ticketTag: "SPOT + FUTUROS",
    stats: ["Principais corretoras de Spot e Futuros", "Open interest somado", "Mercados de derivativos cobertos", "Menor taxa maker (MEXC)"],
    marketData: (date) => `Dados de mercado: ranking de derivativos do CoinMarketCap, posição em ${date}.`,

    benefitsEyebrow: "Suas vantagens",
    benefitsTitle: `Por que se cadastrar com um código de indicação do ${site.name}?`,
    benefitsLead: "Mesma corretora, mesmas taxas – mas com as vantagens para novos usuários que você perderia ao se cadastrar diretamente.",
    benefits: [
      {
        title: "Bônus de boas-vindas",
        text: "Desbloqueie a oferta da corretora para novos usuários – cupons de reembolso de taxas, bônus de Futuros e recompensas por tarefas que podem chegar a milhares de USDT.",
      },
      {
        title: "Taxas de negociação menores",
        text: "Quando a corretora permite, parte da comissão de indicação volta para você como reembolso em cada operação.",
      },
      {
        title: "Spot e Futuros, um só link",
        text: "A indicação fica vinculada à sua conta – vale para Spot (mercado à vista), Futuros, margem e opções. Não é preciso um segundo código.",
      },
      { title: "Zero custo extra", text: "Uma indicação nunca deixa suas taxas mais altas. Você só ganha – quem paga o programa é a corretora." },
      { title: "Páginas oficiais de cadastro", text: "Cada link abre o site da própria corretora. Sem intermediários e sem nenhum dado compartilhado conosco." },
      {
        title: "Melhor usar no cadastro",
        text: "Algumas corretoras deixam você adicionar um código em até 30 dias; outras, nunca. Use o link antes de criar a conta e você estará coberto em todas.",
      },
    ],
    offersCaption: "Ofertas para novos usuários por corretora",
    offersHead: ["Corretora", "Oferta para novos usuários com indicação", "Um link vale para"],
    claim: "Resgatar",
    offersNote: (date) =>
      `Ofertas verificadas em ${date}. As recompensas de boas-vindas dependem de tarefas, exigem verificação de identidade e variam por região – as condições em vigor aparecem na página de cadastro de cada corretora.`,

    exchangesEyebrow: "Códigos de indicação",
    exchangesTitle: "Escolha sua corretora",
    exchangesLead:
      "Cada página explica a indicação, as taxas e para quem a corretora é a melhor escolha – assim você se cadastra uma única vez, na plataforma certa.",
    sideBySide: "Lado a lado",
    notSure: "Não sabe qual escolher?",
    notSureText: (count) => `Compare taxas, alavancagem e open interest (contratos em aberto) das ${count} corretoras em uma única tabela.`,
    compareExchanges: "Comparar corretoras",

    compareTitle: "Comparativo de corretoras cripto: Spot e Futuros",
    compareLead:
      "Veja de relance as ofertas para novos usuários, as taxas padrão (sem nível VIP) de Spot e Futuros, a alavancagem e a profundidade de mercado.",
    compareNote: (reviewed, market) =>
      `Taxas: nível padrão publicado por cada corretora, verificado em ${reviewed}. Open interest e mercados: CoinMarketCap, ${market}. As taxas mudam – confirme na corretora antes de operar.`,
    versusStrip: {
      title: "Compare duas corretoras frente a frente",
      text: (pairs, hubHref) => (
        <>
          {pairs} comparativos diretos, com taxas, alavancagem, produtos, países, KYC e ofertas de indicação lado a lado –{" "}
          <Link href={hubHref}>todos os comparativos de corretoras</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Procurando uma alternativa à sua corretora?",
      text: (others) =>
        `Cada comparativo coloca uma corretora diante das outras ${others}: taxas, alavancagem, produtos, verificação de identidade e os países que ela aceita.`,
    },

    picksEyebrow: "Resposta rápida",
    picksTitle: "Qual corretora é a melhor para você?",
    picks: [
      { label: "Maior liquidez", slug: "binance", why: "Maior open interest e maior volume de Futuros do mundo." },
      { label: "Taxas baixas e opções", slug: "okx", why: "0,08% / 0,10% no Spot, 0,03% em opções e prova de reservas mensal." },
      { label: "Futuros ativos no celular", slug: "bybit", why: "Motor de negociação rápido e um dos melhores apps de trading." },
      { label: "Copy trading", slug: "bitget", why: "Copie automaticamente traders de Futuros experientes." },
      { label: "Mais altcoins", slug: "gate", why: "5.400+ ativos e Futuros de tokens de nicho." },
      { label: "Robôs de trading", slug: "kucoin", why: "Robôs de trading gratuitos para Spot e Futuros." },
      { label: "Taxas mais baixas", slug: "mexc", why: "Taxa maker de 0% no Spot e na maioria dos contratos de Futuros." },
    ],

    howEyebrow: "Como funciona",
    howTitle: "Use um código de indicação em três passos",
    steps: [
      {
        title: "Escolha uma corretora",
        text: "Compare taxas, alavancagem e recursos acima e abra a página da corretora que combina com o seu estilo de trading.",
      },
      {
        title: "Cadastre-se pelo nosso link",
        text: "A indicação é aplicada automaticamente. Cadastre-se com seu e-mail ou celular antes de criar conta em qualquer outro lugar.",
      },
      {
        title: "Verifique a identidade e resgate as recompensas",
        text: "Conclua a verificação de identidade (KYC), proteja sua conta com 2FA e confira as recompensas de boas-vindas exibidas no seu painel.",
      },
    ],

    trustEyebrow: `Por que o ${site.name}`,
    trustTitle: "Feito para gerar confiança, não cliques",
    trustCards: [
      { title: "Ofertas verificadas", text: "Conferimos a oferta para novos usuários de cada corretora e só listamos o que você realmente pode resgatar." },
      {
        title: "Dados atualizados e com data",
        text: "Taxas, alavancagem e licenças são revisadas com regularidade, e cada página mostra a data da sua revisão.",
      },
      {
        title: "Privacidade em primeiro lugar",
        text: "Sem pixels de anúncios e sem cookies de publicidade. As estatísticas de acesso só funcionam se você permitir.",
      },
      { title: "Rápido e direto", text: "Páginas leves que carregam na hora em qualquer celular – primeiro a resposta, depois os detalhes." },
      { title: "Prós e contras honestos", text: "Listamos pontos fracos, incidentes e restrições regionais – não só o marketing." },
      { title: "Riscos às claras", text: "A alavancagem pode zerar um depósito rapidamente. Dizemos isso com clareza em todas as páginas." },
    ],

    faqEyebrow: "Perguntas frequentes",
    faqTitle: "Códigos de indicação – perguntas frequentes",
    faqs: (reviewed) => [
      {
        q: "O que é um código de indicação de corretora cripto?",
        a: "Um código de indicação (também chamado de código de convite ou referral ID) é um identificador curto que vincula uma nova conta na corretora à pessoa ou ao site que a recomendou. As corretoras o usam para recompensar os dois lados – quem chega costuma receber recompensas de boas-vindas ou desconto nas taxas de negociação, e quem indica fica com uma parte das taxas.",
      },
      {
        q: "Quais são as vantagens de usar um código de indicação?",
        a: "Quem se cadastra com uma indicação tem acesso à oferta de boas-vindas da corretora – por exemplo, até 250 USDT em recompensas de indicação na Bybit ou até 10.000 USDT em recompensas para novos usuários na MEXC – e, quando quem indica divide a comissão, recebe de volta parte das taxas de negociação, como 10% durante um ano na Gate. Não custa nada a mais.",
      },
      {
        q: "Um mesmo código de indicação vale para Spot e Futuros?",
        a: "Sim. Na Binance, OKX, Bybit, Bitget, Gate, KuCoin e MEXC, a indicação fica vinculada à sua conta, não a um único produto. Um só cadastro cobre a negociação em Spot e Futuros – além de margem, opções ou copy trading, onde a corretora oferecer.",
      },
      {
        q: "Pago mais caro se me cadastrar com um código de indicação?",
        a: "Não. Cadastrar-se por um link de indicação nunca aumenta suas taxas. Dependendo da corretora e da sua região, você pode até receber um desconto nas taxas ou um bônus de boas-vindas que não teria sem ele.",
      },
      {
        q: "Posso adicionar um código de indicação depois de criar a conta?",
        a: "Depende da corretora. A Binance permite vincular um código em até 30 dias após o cadastro, se você ainda não fez depósito nem operou, e a MEXC deixa você mesmo vincular um indicador em até 30 dias após o cadastro. A KuCoin tem uma solicitação “Link Referrer” na sua Central de Ajuda. Bybit, OKX e Bitget só aceitam o código durante o cadastro, e a Gate não documenta nenhuma forma de adicioná-lo depois. O caminho seguro é usar o link antes de criar sua conta.",
      },
      {
        q: "Qual corretora de criptomoedas tem as menores taxas de Futuros?",
        a: `Na nossa última revisão (${reviewed}), a MEXC tinha as menores taxas padrão de Futuros, com 0% maker e 0,02% taker no BTCUSDT. Binance, OKX e Gate cobram 0,02% maker / 0,05% taker no nível padrão, a Bybit 0,02% / 0,055%, e Bitget e KuCoin 0,02% / 0,06%.`,
      },
      {
        q: "Qual é a melhor corretora para derivativos de cripto?",
        a: "Depende do que você negocia. A Binance oferece a maior liquidez, a OKX combina taxas baixas com opções, a Bybit foi feita para negociar contratos perpétuos com agilidade, a Bitget para copy trading, a Gate para Futuros de altcoins, a KuCoin para robôs e a MEXC para as taxas mais baixas.",
      },
      {
        q: "Essas corretoras funcionam nos Estados Unidos?",
        a: "Na maioria, não. Binance, Bybit, Bitget, Gate, KuCoin e MEXC listam os Estados Unidos como país restrito ou proibido, e a OKX restringe determinadas jurisdições dos EUA. A disponibilidade também varia no Reino Unido, no Canadá e na UE – a página de cada corretora lista os países restritos segundo os próprios termos da corretora.",
      },
      {
        q: "Com que frequência essas informações são atualizadas?",
        a: `Revisamos regularmente taxas, alavancagem, licenças e dados de mercado. Cada página mostra a data da sua última revisão; os dados atuais foram verificados em ${reviewed}.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "Resgate seu bônus de boas-vindas",
    ctaText: "Escolha uma corretora, cadastre-se com uma indicação verificada e opere Spot e Futuros com uma única conta.",
    ctaButton: "Ver todos os códigos de indicação",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Quatro formulações, fixas por corretora, para que os títulos não comecem todos do mesmo jeito.
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, b = benefit(e), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `Código de indicação ${n} ${c} (${shortMonthYear}): ${b}`, `Código de indicação ${n} ${c} (${shortMonthYear}) com bônus`, `Código de indicação ${n} ${c} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${c}: código de indicação ${n} – ${b}`, `${c}: código de indicação ${n} com bônus (${shortMonthYear})`, `${c}: código de indicação ${n} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${b}: código de indicação ${n} ${c}`, `Bônus de boas-vindas ${y}: código de indicação ${n} ${c}`, `Código de indicação ${n} ${c} (${y})`),
        () => fit(TITLE_MAX, `Como usar o código de indicação ${n} ${c} (${shortMonthYear})`, `Como usar o código de indicação ${n} ${c}`, `Código de indicação ${n} ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `Código de indicação ${e.name}: ${e.referralCode}. ${benefit(e)} – onde inserir, cadastro, KYC e taxas, verificado em ${monthYear}.`,
        `Código de indicação ${e.name}: ${e.referralCode}. ${benefit(e)} – onde inserir, KYC e taxas (${monthYear}).`,
        `Código de indicação ${e.name}: ${e.referralCode}. ${benefit(e)} – onde inserir, passo a passo do cadastro, KYC e taxas.`,
        `Código de indicação ${e.name}: ${e.referralCode}. Onde inserir, passo a passo do cadastro, KYC e taxas, verificado em ${monthYear}.`,
      ),
    keywords: (e) => [
      `código de indicação ${e.name}`,
      `código de indicação ${e.name} ${e.referralCode}`,
      `${e.name} ${e.referral.codeName.toLocaleLowerCase("pt-BR")}`,
      `link de indicação ${e.name}`,
      `código de convite ${e.name}`,
      `bônus de cadastro ${e.name}`,
      `como se cadastrar na ${e.name}`,
      `KYC ${e.name}`,
      `taxas de Futuros ${e.name}`,
    ],
    toc: {
      "code-facts": "Resumo do código",
      benefits: "Suas vantagens",
      "use-code": "Como usar o código",
      "how-to": "Como se cadastrar",
      verification: "Verificação (KYC)",
      "key-facts": "Dados principais",
      fees: "Taxas",
      about: "Sobre a corretora",
      "pros-cons": "Prós e contras",
      "best-for": "Para quem é",
      safety: "Segurança e disponibilidade",
      faq: "Perguntas frequentes",
      sources: "Fontes",
      alternatives: "Alternativas e comparativos",
    },
    onThisPage: "Nesta página",
    crumbHome: "Início",
    crumbCodes: "Códigos de indicação",
    crumbPage: (e) => `Código de indicação ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `Código de indicação ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Uma única indicação vale para ${e.referralCovers.join(", ")}.`,
    offerCategory: "Cadastro em corretora de criptomoedas",
    howToName: (e) => `Como se cadastrar na ${e.name} com o código de indicação ${e.referralCode}`,
    howToDescription: (e) =>
      `Passo a passo do cadastro na ${e.name}, conforme documentado pela corretora, incluindo onde inserir o código de indicação ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Verificado e atualizado em ${date}`,
    h1: (e) => `Código de indicação ${e.name}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – e uma única indicação para {list(e.referralCovers)}. Veja o que você ganha, quanto custa operar e se a {e.name}{" "}
        é a corretora certa para você.
      </>
    ),
    quickAnswer: "Resposta rápida",
    highlights: "Destaques",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futuros ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Alavancagem ${lcFirst(shortLeverage(e))}`,
      `${e.market.markets} mercados de derivativos`,
      `Desde ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Seu cadastro na ${e.name}`,
    appliedByLink: "A indicação é aplicada automaticamente por este link.",
    goesToOfficial: (domain) => `Leva direto ao site oficial ${domain}.`,
    codeLabel: "Código de indicação",
    noCodeToType: "Nenhum código para digitar – aplicado pelo link",
    officialSite: (domain) => `Site oficial: ${domain}`,
    yourBenefits: "Suas vantagens",
    freeNeverRaises: "Grátis – usar uma indicação nunca aumenta suas taxas",
    qrLabel: (e) => `QR code: cadastre-se no app da ${e.name} com o código de indicação ${e.referralCode}`,
    preferApp: "Prefere o app?",
    scan: (e) => (
      <>
        Escaneie com a câmera do celular para abrir a {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – indicação <strong>{e.referralCode}</strong> incluída
          </>
        ) : null}
        . Funciona no iOS e no Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Operar com alavancagem é de alto risco. Não está disponível em todos os países – veja a <a href="#safety">disponibilidade</a> ou as{" "}
        <Link href={links.alternatives}>alternativas à {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `Código de indicação ${e.name} ${e.referralCode} em resumo`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        O código de indicação da {e.name} para {monthYear} é <strong>{e.referralCode}</strong>. A tabela resume o que ele faz, onde inseri-lo e o que a{" "}
        {e.name} exige de uma conta nova – cada linha conferida nas páginas da própria {e.name} em {date}.
      </>
    ),
    codeFactsCaption: (e) => `Código de indicação ${e.name} ${e.referralCode}: dados principais`,
    codeFacts: (e, date) => [
      [`Código de indicação ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`Nome usado pela ${e.name}`, e.referral.codeName],
      ["Vantagem para novos usuários", benefit(e)],
      ["Onde inserir", e.referral.whereShort],
      ["Pode ser adicionado após o cadastro?", e.referral.afterSignupShort],
      ["Vale para", e.referralCovers.join(", ")],
      ["Verificação de identidade (KYC)", e.signup.kycShort],
      ["Custo", "Grátis – não aumenta suas taxas"],
      ["Última verificação", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Suas vantagens com o código de indicação ${e.name}`,
    benefitsIntro: (e) => (
      <>
        Cadastrar-se com o código de indicação da {e.name} <strong>{e.referralCode}</strong> não custa nada a mais. Veja o que a {e.name} oferece hoje a
        contas novas. O mesmo código vale para <strong>{list(e.referralCovers)}</strong> – você não precisa de um código para Spot e outro para Futuros.
      </>
    ),
    offerChecked: (date) => `Oferta para novos usuários · verificada em ${date}`,
    appliedWhenRegistering: "aplicada quando você se cadastra por esta indicação",
    noExtraCost: "Sem custo extra – suas taxas de negociação nunca ficam mais altas por causa de uma indicação",
    oneReferralCovers: "Uma única indicação vale para:",
    claimOffer: (e) => `Resgate a oferta de boas-vindas da ${e.name}`,
    tasksTitle: (e) => `Oferta de boas-vindas da ${e.name}: tarefas e recompensas`,
    tasksCaption: (e) => `Tarefas para novos usuários da ${e.name} e a recompensa de cada uma`,
    task: "Tarefa",
    reward: "Recompensa",
    tasksNote: (e, date) =>
      `Conforme divulgado pela ${e.name} em ${date}. As ofertas variam por país e mudam com frequência – valem as condições exibidas na sua conta após o cadastro.`,

    /* How to use the code */
    useCodeTitle: (e) => `Como usar o código de indicação ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `Onde colocar o código de indicação da ${e.name}`,
    forgotCode: "Esqueceu o código? Como adicioná-lo após o cadastro",
    asInvited: "O que você recebe como usuário convidado",
    interfaceNote: (e) => (
      <>
        Os nomes de campos e botões entre aspas são os da interface em inglês da {e.name}, que foi a que verificamos; na interface em português, eles
        podem aparecer com outros nomes.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Como se cadastrar na ${e.name}: passo a passo`,
    howToIntro: (e) => (
      <>
        A {e.name} permite criar uma conta com {list(e.signup.methods)}. Estes são os passos conforme a {e.name} os documenta, com o momento em que
        entra o código de indicação <strong>{e.referralCode}</strong>.
      </>
    ),
    startRegistration: (e) => `Comece seu cadastro na ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Verificação de identidade (KYC) na ${e.name}`,
    verification: "Verificação",
    minAge: "Idade mínima",
    documents: "Documentos aceitos",

    /* Key facts */
    factsTitle: (e) => `${e.name} em resumo`,
    founded: "Fundação",
    headquarters: "Sede",
    futuresFees: "Taxas de Futuros (maker / taker)",
    spotFees: "Taxas de Spot (maker / taker)",
    maxLeverage: "Alavancagem máxima",
    assets: "Ativos",
    openInterest: "Open interest",
    volume24h: "Volume de derivativos em 24 h",
    users: "Usuários",
    regulation: "Regulação",
    factsNote: (date) =>
      `Open interest, volume e número de mercados: ranking de derivativos do CoinMarketCap, ${date}. Taxas: nível padrão na data da revisão.`,

    /* Fees */
    feesTitle: (e) => `Taxas da ${e.name} explicadas`,
    feesIntro: (e) =>
      `A ${e.name} usa o modelo maker/taker: ordens que adicionam liquidez ao livro de ofertas (ordens limitadas) pagam a taxa maker, e ordens que retiram liquidez (ordens a mercado) pagam a taxa taker. As taxas diminuem conforme crescem o seu volume dos últimos 30 dias ou os seus saldos.`,
    market: "Mercado",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futuros / perpétuos",
    spotRow: "Spot",
    feesNote: (e, date) => `Taxas padrão (sem nível VIP) publicadas pela ${e.name}, verificadas em ${date}.`,
    funding: "As taxas de financiamento (funding) dos contratos perpétuos são pagas entre os traders, não à corretora.",
    liveSchedule: (e) => `Veja a tabela de taxas atual da ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        Como essas taxas se comparam? Nosso <Link href={`${links.alternatives}#fees`}>comparativo de alternativas à {e.name}</Link> coloca as taxas da{" "}
        {e.name} lado a lado com as da {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Sobre a ${e.name}`,
    products: "Produtos",
    prosConsTitle: (e) => `Prós e contras da ${e.name}`,
    pros: "Prós",
    cons: "Contras",
    bestForTitle: (e) => `Para quem a ${e.name} é mais indicada?`,
    openAccount: (e) => `Abra sua conta na ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Não é o que você procura? Veja <Link href={links.alternatives}>as {count} melhores alternativas à {e.name}</Link> e no que cada uma se destaca, ou
        compare a {e.name} frente a frente: <Link href={pairs[0].href}>{pairs[0].label}</Link> e <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `A ${e.name} é segura?`,
    availability: "Disponibilidade:",
    closedWhereYouLive: (e, links) => (
      <>
        A {e.name} não funciona onde você mora? A{" "}
        <Link href={`${links.alternatives}#countries`}>tabela de países da nossa página de alternativas à {e.name}</Link> mostra quais das outras
        corretoras aceitam o seu país.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `Código de indicação e cadastro na ${e.name} – perguntas frequentes`,
    faqIntro: (e, count) =>
      `${count} perguntas sobre o código de indicação ${e.name} ${e.referralCode}, a criação e a verificação da conta, a oferta de boas-vindas e as taxas.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Fontes: de onde vêm estes dados",
    sourcesIntro: (e, date) =>
      `Tudo o que esta página diz sobre o código de indicação, o cadastro, a verificação, a oferta de boas-vindas e as taxas foi lido no site e na central de ajuda da própria ${e.name} em ${date}. As corretoras mudam ofertas e taxas sem aviso e mostram condições diferentes em cada país, por isso a palavra final é das páginas abaixo.`,

    /* Alternatives */
    alternativesTitle: (e) => `Alternativas à ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Não tem certeza de que a {e.name} é a escolha certa? Estas são as alternativas mais próximas, cada uma com seu próprio cadastro com indicação. O{" "}
        <Link href={links.alternatives}>comparativo completo de alternativas à {e.name}</Link> avalia as {count} em relação à {e.name} por taxas,
        alavancagem, produtos, verificação e disponibilidade por país.
      </>
    ),
    headToHeadTitle: (e) => `${e.name} frente a frente`,
    headToHeadIntro: (e) =>
      `Em dúvida entre a ${e.name} e outra corretora? Cada par tem seu próprio comparativo de taxas, alavancagem, produtos, países e ofertas de indicação:`,
    compareAll: (e, count) => `Compare as ${count} alternativas à ${e.name}`,
    allComparisons: "Todos os comparativos de corretoras →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Aviso de risco:</strong> Derivativos de criptomoedas são instrumentos complexos. A alavancagem multiplica ganhos e perdas, e você pode
        perder toda a sua margem em questão de minutos. Esta página tem caráter apenas informativo e não constitui aconselhamento financeiro. Podemos
        receber uma comissão se você se cadastrar pelos nossos links – veja nossa <Link href={disclosureHref}>divulgação de afiliados</Link>.
      </>
    ),
    joinTitle: (e) => `Crie sua conta na ${e.name} em 3 minutos`,
    joinText: (e) => `${benefit(e)}. Uma única indicação para Spot e Futuros.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `Código de indicação ${name}`,
      signup: (name) => `Cadastro e verificação na ${name}`,
      bonus: (name) => `Bônus de boas-vindas e recompensas da ${name}`,
      fees: (name) => `Taxas e negociação na ${name}`,
      safety: () => "Segurança e disponibilidade",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Qual é o código de indicação da ${e.name}?`,
          a: `O código de indicação da ${e.name} é ${e.referralCode}. ${r.apply} A própria ${e.name} o chama de ${r.codeName}.`,
        },
        { topic: "referral", q: `Onde coloco o código de indicação da ${e.name}?`, a: r.whereToEnter },
        { topic: "referral", q: `Posso adicionar o código de indicação da ${e.name} depois de me cadastrar?`, a: r.afterSignup },
        { topic: "referral", q: `O que ganho com o código de indicação ${e.name} ${e.referralCode}?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `O código de indicação da ${e.name} vale para Spot e Futuros?`,
          a: `Sim. A indicação fica vinculada à sua conta na ${e.name}, não a um produto específico, então um único cadastro com ${e.referralCode} cobre ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Usar o código de indicação da ${e.name} custa alguma coisa?`,
          a: `Não. Inserir ${e.referralCode} é grátis e não aumenta suas taxas de negociação. A ${e.name} paga o programa de indicação com a própria receita de taxas.`,
        },
        {
          topic: "signup",
          q: `Como se cadastrar na ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${st.title}`).join(" ")} Você pode se cadastrar com ${list(s.methods)}.`,
        },
        { topic: "signup", q: `Preciso fazer verificação de identidade (KYC) na ${e.name}?`, a: s.kyc },
        { topic: "signup", q: `Quais documentos a ${e.name} aceita na verificação?`, a: s.documents },
        { topic: "signup", q: `Qual é a idade mínima para abrir uma conta na ${e.name}?`, a: s.minAge },
        {
          topic: "fees",
          q: `Quais são as taxas de negociação da ${e.name}?`,
          a: `No nível padrão, a ${e.name} cobra ${e.spotFees.maker} maker / ${e.spotFees.taker} taker no Spot e ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker nos Futuros perpétuos.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `Em quais países a ${e.name} não está disponível?`, a: e.restricted },
      ];
    },
  },
};
