import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in Brazilian Portuguese. Same keys as `./en.tsx`.
 * Wording: "corretora" (feminine: "a Binance", "da OKX", "à Bybit"), "taxas", "código de indicação", "você".
 */

/** "em" + article for the country names of the comparison: "nos Estados Unidos", "no Japão", "em Singapura". */
const inCountryForms: Record<string, string> = {
  "Estados Unidos": "nos Estados Unidos",
  EUA: "nos EUA",
  "Reino Unido": "no Reino Unido",
  Canadá: "no Canadá",
  Alemanha: "na Alemanha",
  França: "na França",
  Holanda: "na Holanda",
  "Países Baixos": "nos Países Baixos",
  Espanha: "na Espanha",
  Itália: "na Itália",
  Austrália: "na Austrália",
  Japão: "no Japão",
  Singapura: "em Singapura",
  "Hong Kong": "em Hong Kong",
  Índia: "na Índia",
  "Emirados Árabes Unidos": "nos Emirados Árabes Unidos",
  EAU: "nos EAU",
};
const contraction: Record<string, string> = { o: "no", a: "na", os: "nos", as: "nas" };

/** Accepts the name with or without article ("os Estados Unidos" / "Estados Unidos") and an optional bracket ("Holanda (Países Baixos)"). */
const inCountry = (country: string) => {
  const m = /^(os|as|o|a)\s+(.+)$/i.exec(country.trim());
  const bare = m ? m[2] : country.trim();
  const paren = bare.indexOf(" (");
  const head = paren > 0 ? bare.slice(0, paren) : bare;
  const tail = paren > 0 ? bare.slice(paren) : "";
  const form = inCountryForms[head];
  if (form) return form + tail;
  return m ? `${contraction[m[1].toLowerCase()]} ${bare}` : `em ${bare}`;
};

export const pt: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Quatro formulações, fixas por corretora.
  title: (x, n, shortMonthYear) =>
    fit(
      TITLE_MAX,
      ...[
        [`Alternativas à ${x.name} (${shortMonthYear}): ${n} corretoras comparadas`],
        [`As ${n} melhores alternativas à ${x.name} (${shortMonthYear}): taxas e bônus`, `As ${n} melhores alternativas à ${x.name}: taxas e bônus`],
        [`Procurando alternativas à ${x.name}? ${n} corretoras comparadas`],
        [`Alternativas à ${x.name} em ${yearOf(shortMonthYear)}: taxas, alavancagem e KYC`],
      ][variant(4, x.slug)],
      `Alternativas à ${x.name}: ${n} corretoras comparadas`,
      `Alternativas à ${x.name} (${shortMonthYear})`,
    ),
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: ${n} alternativas à ${x.name}${former ? ` (${former})` : ""} comparadas por taxas, alavancagem, KYC, países e códigos de indicação (${monthYear}).`,
      `${names}: ${n} alternativas à ${x.name} comparadas por taxas, alavancagem, KYC, países e códigos de indicação (${monthYear}).`,
      `${names}: ${n} alternativas à ${x.name} por taxas, alavancagem, KYC, países e códigos de indicação (${monthYear}).`,
      `${names}: ${n} alternativas à ${x.name} comparadas por taxas, alavancagem, KYC, países e códigos de indicação.`,
    ),
  keywords: (x, alts, former) => [
    `alternativas à ${x.name}`,
    `alternativa à ${x.name}`,
    `corretoras como a ${x.name}`,
    `melhores alternativas à ${x.name}`,
    `concorrentes da ${x.name}`,
    `alternativa à ${x.name} com taxas menores`,
    `alternativa à ${x.name} sem KYC`,
    ...(former ? [`alternativas à ${former}`, `alternativa à ${former}`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Início",
  crumbReferral: (name) => `Código de indicação da ${name}`,
  crumbAlternatives: (name) => `Alternativas à ${name}`,
  listLdName: (name) => `Alternativas à ${name}`,
  listLdDescription: (name) => `Corretoras comparadas com a ${name}, na ordem do ranking de derivativos da CoinMarketCap.`,
  howToLdName: (name) => `Como migrar da ${name} para outra corretora`,
  howToLdDescription: (name) => `O que verificar, e em que ordem, ao trocar a ${name} por outra corretora de criptomoedas.`,
  ogTitle: (name) => `Alternativas à ${name}`,
  ogSubtitle: (names) => `${names} – taxas, alavancagem, KYC e países comparados`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " e ". */
  and: () => " e ",
  noneOfThem: "Nenhuma delas",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Verificado e atualizado em ${date}`,
  h1: (name, n) => `Alternativas à ${name}: ${n} corretoras comparadas`,
  quickAnswer: "Resposta rápida",
  chipsLabel: "O que é comparado",
  chips: (n, products, countries) => [`${n} corretoras`, "Taxas e alavancagem", `${products} produtos`, `${countries} países`, "KYC e regulação", "Códigos de indicação"],
  glanceTitle: (name) => `Alternativas à ${name} em resumo`,
  glanceIntro: "O ponto forte de cada uma, com as taxas padrão de Futuros (maker / taker).",
  glanceOrder: (marketDate) => `Ordem: ranking de derivativos da CoinMarketCap, ${marketDate}. Operar com alavancagem é de alto risco.`,
  onThisPage: "Nesta página",
  toc: (name, n) => [
    ["at-a-glance", "Em resumo"],
    ["why", `Por que sair da ${name}?`],
    ["alternatives", `As ${n} alternativas`],
    ["by-need", "A melhor para cada necessidade"],
    ["fees", "Taxas"],
    ["products", "Produtos"],
    ["countries", "Países"],
    ["kyc", "Verificação (KYC)"],
    ["safety", "Regulação e reservas"],
    ["referral-codes", "Códigos de indicação"],
    ["switch", "Como migrar"],
    ["faq", "Perguntas frequentes"],
    ["sources", "Fontes"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `Alternativas à ${name} comparadas (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `As ${n} alternativas lado a lado com a própria ${name}. As taxas são as tarifas padrão (sem VIP) que cada corretora publica, no formato maker / taker; a alavancagem é o máximo que ela documenta; o código de indicação é o que você pode usar no cadastro. Todos os números foram lidos no site da própria corretora em ${date}.`,
  comparedCaption: (name, n) => `A ${name} e ${n} alternativas: o ponto forte de cada uma, taxas, alavancagem e código de indicação`,
  colExchange: "Corretora",
  colBestFor: "Ideal para",
  colFuturesFees: "Taxas de Futuros",
  colSpotFees: "Taxas Spot",
  colMaxLeverage: "Alavancagem máx.",
  colReferralCode: "Código de indicação",
  colAction: "Ação",
  forComparison: "para comparação",
  signUp: "Criar conta",
  comparedOrder: (marketDate) => `Ordem das alternativas: ranking de derivativos da CoinMarketCap, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Por que procurar uma alternativa à ${name}?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Estes são os pontos em que a própria {name} impõe limites – cada um tirado das páginas da própria {name} (veja a{" "}
      <Link href={sourcesHref}>lista de fontes na nossa página da {name}</Link>). Se nenhum deles afetar você, ficar é uma escolha perfeitamente válida.
    </>
  ),
  stayTitle: (name) => `Quando a ${name} ainda é a escolha certa`,
  stayOutro: (name, code, href) => (
    <>
      Decidiu ficar? Nossa <Link href={href}>página do código de indicação da {name}</Link> traz o código {code}, o passo a passo do cadastro e a
      oferta atual para novos usuários.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `As ${n} melhores alternativas à ${name} em detalhe`,
  detailIntro: (name) =>
    `Cada alternativa é comparada com a ${name} nos mesmos pontos: taxas, alavancagem, tamanho do mercado, verificação, regras de indicação, produtos e países aceitos. “À frente” só lista diferenças que podem ser conferidas nos números das próprias corretoras.`,
  rowFuturesFees: "Taxas de Futuros (maker / taker)",
  rowSpotFees: "Taxas Spot (maker / taker)",
  rowMaxLeverage: "Alavancagem máx.",
  rowAssets: "Ativos listados",
  rowOpenInterest: "Open interest em derivativos",
  rowUsers: "Usuários",
  rowFounded: "Fundação",
  rowKyc: "Verificação de identidade",
  rowAddLater: "Dá para adicionar o código de indicação depois?",
  rowOffer: "Oferta para novos usuários",
  bestFor: (role) => `Ideal para: ${role}`,
  asAlternative: (name) => `como alternativa à ${name}`,
  chooseIf: (a, x) => `Escolha a ${a} em vez da ${x} se …`,
  thinkTwiceIf: "Pense duas vezes se …",
  whereAhead: (a, x) => `Onde a ${a} está à frente da ${x}`,
  whereBehind: (x) => `Onde a ${x} está à frente`,
  noAdvantage: "Nenhuma vantagem mensurável nos pontos que comparamos.",
  codeLabel: (name) => `Código de indicação da ${name}`,
  signUpOn: (name) => `Cadastre-se na ${name}`,
  linkReferral: (name, code) => `Código de indicação da ${name} ${code}: oferta, passo a passo do cadastro e KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: comparação completa, frente a frente`,
  linkAlternatives: (name) => `Alternativas à ${name}`,
  sideBySide: (a, x) => `${a} vs ${x}: todos os números lado a lado`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: taxas, alavancagem, ativos, verificação e regras de indicação`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `A melhor alternativa à ${name} para cada necessidade`,
  needIntro: (n) => `Qual das ${n} se sai melhor depende do que você procura. A tabela responde necessidade por necessidade – com base nos números, sem um ranking nosso.`,
  needCaption: (name) => `Melhor alternativa à ${name} por necessidade`,
  needColWant: "Se você quer …",
  needColLook: "Confira",
  needColWhy: "Por quê",
  needLowestFutures: "Taxas de Futuros mais baixas",
  needLowestSpot: "Taxas Spot mais baixas",
  needHighestLeverage: "Maior alavancagem",
  needDeepest: "Mercado de derivativos mais profundo",
  needMostMarkets: "Mais mercados de derivativos",
  needMica: "Plataforma com autorização MiCA para o EEE",
  needAddLater: "Código de indicação que pode ser adicionado depois do cadastro",
  whyStandardTier: (fees) => `${fees} maker / taker no nível padrão`,
  whyOpenInterest: (amount, marketDate) => `${amount} em open interest (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} mercados (CoinMarketCap, ${marketDate})`,
  whyFeature: "Consta no site da própria corretora – o que exatamente é oferecido aparece em Produtos",
  needNotFound: (n) => `Não encontrado nos sites das ${n} alternativas quando fizemos a verificação.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Taxas da ${name} comparadas às alternativas`,
  feesIntro:
    "As sete corretoras usam o modelo maker/taker: ordens limitadas que adicionam liquidez pagam a taxa maker, e ordens que retiram liquidez pagam a taxa taker. A tabela mostra o nível padrão – as tarifas que uma conta nova paga antes de qualquer nível VIP ou desconto com token.",
  feesCaption: (name) => `Taxas padrão de Spot (mercado à vista) e Futuros da ${name} e das alternativas`,
  colFuturesMaker: "Futuros maker",
  colFuturesTaker: "Futuros taker",
  colSpotMaker: "Spot maker",
  colSpotTaker: "Spot taker",
  colOtherMarkets: "Outros mercados (maker / taker)",
  feesNote: (date) => `Tarifas padrão (sem VIP) publicadas por cada corretora, verificadas em ${date}. As taxas mudam – confirme na corretora antes de operar.`,
  cheaperTitle: (name) => `Quem cobra menos que a ${name}?`,
  tokenTitle: "Descontos com token e letras miúdas",
  noTokenDiscount: "Não há desconto publicado para quem paga as taxas com um token da corretora.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Produtos: o que cada corretora oferece",
  productsIntro: (date) =>
    `Uma marca de seleção significa que a corretora mostra o produto no próprio site. Um traço significa que, em ${date}, não encontramos lá nenhuma página sobre ele – isso não prova que o produto não exista. A oferta pode variar de país para país, principalmente nas plataformas regionais.`,
  productsCaption: (name) => `Produtos oferecidos pela ${name} e pelas alternativas`,
  colProduct: "Produto",
  productDetailsTitle: "Detalhes dos produtos por corretora",
  productDetails: (name) => `${name}: produtos em detalhe`,
  offered: "Oferecido",
  notOffered: "Não oferecido",
  noPageFound: "Nenhuma página encontrada no site da própria corretora",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Disponibilidade por país: a ${name} e as alternativas`,
  countriesIntro: (count) =>
    `O lugar onde você mora é o motivo mais comum para precisar de uma alternativa. A tabela mostra, para ${count} países, o que dizem os termos de cada corretora. “Site regional” significa que a corretora atende o país por meio de uma plataforma separada, com produtos, taxas e limites próprios.`,
  countriesCaption: (name) => `Disponibilidade por país da ${name} e das alternativas`,
  colCountry: "País",
  legendRestricted: "fechado para residentes segundo os termos ou avisos da própria corretora",
  legendRegional: "atendido por uma plataforma regional separada",
  legendPartial: "apenas alguns produtos ou regiões",
  legendOpen: (date) => `fora da lista de países restritos em ${date}`,
  countriesNote:
    "“Sem restrição” não garante que todos os produtos sejam oferecidos naquele país. Valem os termos da corretora no momento do seu cadastro, e todas essas corretoras proíbem contornar uma restrição com VPN ou dados falsos.",
  countryHeading: (name, country) => `Alternativas à ${name} ${inCountry(country)}`,
  restrictedTitle: "Países restritos e plataformas regionais de cada corretora",
  whereNotAvailable: (name) => `Onde a ${name} não está disponível?`,
  regionalPlatforms: "Plataformas regionais:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Verificação: existe alternativa à ${name} sem KYC?`,
  kycIntro: (n) =>
    `Não entre estas ${n}. Todas as corretoras desta comparação pedem verificação de identidade aos novos usuários, e na maioria delas depósitos ou negociações ficam bloqueados até a verificação ser concluída. As diferenças estão no que uma conta não verificada ainda consegue fazer.`,
  kycCaption: (name) => `Verificação de identidade na ${name} e nas alternativas`,
  colKyc: "Verificação de identidade",
  kycDetailsTitle: "O que cada corretora diz sobre a verificação",
  kycQuestion: (name) => `Preciso fazer a verificação de identidade (KYC) na ${name}?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regulação, prova de reservas e fundos de proteção",
  safetyIntro:
    "Nenhuma corretora centralizada é livre de risco. O que dá para comparar é o que cada uma publica sobre si mesma: onde tem licença, se comprova suas reservas e se mantém um fundo para emergências.",
  safetyCaption: (name) => `Regulação, prova de reservas e fundos de proteção da ${name} e das alternativas`,
  colLicences: "Licenças citadas pela corretora",
  colReserves: "Prova de reservas",
  colFund: "Fundo de proteção",
  noneNamed: "Nenhum citado",
  safetyNote: "Os índices de reserva são números das próprias corretoras, nas datas de referência indicadas. Só mantenha fundos numa corretora em que você opera ativamente.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Códigos de indicação das alternativas à ${name}`,
  codesIntro:
    "Se for abrir conta em uma das alternativas, use um código de indicação: não custa nada, nunca aumenta suas taxas e libera a oferta da corretora para novos usuários. A última coluna é a que mais importa – em várias corretoras, um código esquecido não pode ser adicionado depois.",
  codesCaption: (name) => `Códigos de indicação da ${name} e das alternativas`,
  colOffer: "Oferta para novos usuários",
  colWhere: "Onde inserir o código",
  colLater: "Pode ser adicionado depois?",
  codesRow: (name) => `Código de indicação da ${name}`,
  codesNote: (date) => `Ofertas verificadas em ${date}. As recompensas de boas-vindas dependem de tarefas, exigem verificação de identidade e variam por país.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Como migrar da ${name} para outra corretora`,
  switchIntro: "Mudar dá menos trabalho do que parece, desde que você siga a ordem: primeiro a conta, depois a verificação e, por último, os fundos.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `Alternativas à ${name} – perguntas frequentes`,
  faqIntro: (name, count) => `${count} perguntas sobre como substituir a ${name}: qual corretora atende cada necessidade, taxas, países, verificação e como fazer a mudança.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Fontes: de onde vêm estes números",
  sourcesIntro: (date, marketDate) =>
    `Tudo o que esta página diz sobre taxas, alavancagem, produtos, verificação, países, licenças, reservas e regras de indicação foi lido nos sites e centrais de ajuda das próprias corretoras em ${date}. O open interest e o número de mercados de derivativos vêm do ranking de derivativos da CoinMarketCap (${marketDate}). As corretoras mudam os termos sem aviso prévio, por isso a palavra final é das páginas abaixo.`,
  sourcesSummary: (name, count, focus) => `${name}: ${count} páginas oficiais${focus ? "" : " consultadas para esta comparação"}`,
  sourcesMore: (name, count, href) => (
    <>
      Taxas, alavancagem, verificação, regras de indicação e lista de países restritos da {name}:{" "}
      <Link href={href}>
        todas as {count} fontes na nossa página da {name}
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Mais comparações de corretoras",
  headToHeadTitle: (name) => `${name} frente a frente`,
  headToHeadIntro: "Já tem uma alternativa na sua lista? As páginas de cada dupla vão mais fundo em taxas, produtos, países e ofertas de indicação:",
  otherAlternativesTitle: "Alternativas às outras corretoras",
  otherAlternativesIntro: "A mesma comparação do ponto de vista de cada uma das outras corretoras:",
  referralLink: (name, code) => `Código de indicação da ${name} ${code}`,
  allComparisons: "Todas as comparações de corretoras",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Aviso de risco:</strong> Derivativos de cripto são instrumentos complexos. A alavancagem multiplica ganhos e perdas, e você pode perder
      toda a sua margem em questão de minutos. Esta página é apenas informativa e não é aconselhamento financeiro. Podemos receber uma comissão se você
      se cadastrar pelos nossos links – veja nossa <Link href={disclosureHref}>divulgação de afiliados</Link>. Isso não muda os números: eles são das
      próprias corretoras.
    </>
  ),
  ctaTitle: (name) => `Encontrou sua alternativa à ${name}?`,
  ctaText: "Cadastre-se com um código de indicação verificado – uma só conta para Spot e Futuros, sem custo extra.",
  ctaButton: "Ver todos os códigos de indicação",
};
