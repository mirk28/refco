/**
 * The head-to-head pages ("/pt/<a>-vs-<b>") and the comparison hub ("/pt/comparar") in Brazilian Portuguese.
 * Same keys as `./en.tsx`, written in Portuguese grammar.
 *
 * Wording as in `../compare/pt.ts`: "corretora" (feminine – a Binance, da OKX, na Bybit), "taxas",
 * "código de indicação", "você". Numbers in the Brazilian notation (0,02%, 10.000 USDT, 150x). "vs" stays "vs".
 */
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf, verb } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "pt";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** The exchanges are feminine in Portuguese: "a Binance", "da OKX", "na Bybit", "pela Gate". */
const the = (e: Exchange) => `a ${e.name}`;
const The = (e: Exchange) => `A ${e.name}`;
const da = (e: Exchange) => `da ${e.name}`;
const na = (e: Exchange) => `na ${e.name}`;
const pela = (e: Exchange) => `pela ${e.name}`;
/** "a Binance, a OKX e a Bybit" */
const theNames = (list: Exchange[]) => joinList(list.map(the));
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Lower-cases the first letter, unless the text starts with an exchange name ("Gate não documenta"), an
 * abbreviation or a name with inner capitals ("KYC", "MiCA", "OKX") or a product word written with a capital
 * ("Spot", "Futuros").
 */
const properNames = new Set(exchanges.map((e) => e.name));
const keepCapital = new Set(["Spot", "Futuros", "Earn", "Simple", "Launchpool", "Launchpad", "Web3"]);
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.()]/)[0];
  return properNames.has(first) || keepCapital.has(first) || /\p{Lu}/u.test(first.slice(1)) ? s : s.charAt(0).toLowerCase() + s.slice(1);
};
/** "320M+ usuários cadastrados (segundo a Binance)" → "320M+ usuários cadastrados"; "390 moedas, 509 pares Spot (API da Bybit)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((segundo [^)]*|API d[aeo]s? [^)]*)\)/, "");
const lowerUpTo = (s: string) => s.replace(/^Até/, "até");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const tied = (count: number) => (count === 1 ? "termina empatado" : "terminam empatados");

/** Country names with article and contractions: "o Reino Unido", "no Reino Unido", "do Reino Unido", "em Singapura". */
const countryForms: Record<CountryKey, { the: string; in: string; of: string }> = {
  us: { the: "os Estados Unidos", in: "nos Estados Unidos", of: "dos Estados Unidos" },
  uk: { the: "o Reino Unido", in: "no Reino Unido", of: "do Reino Unido" },
  ca: { the: "o Canadá", in: "no Canadá", of: "do Canadá" },
  de: { the: "a Alemanha", in: "na Alemanha", of: "da Alemanha" },
  fr: { the: "a França", in: "na França", of: "da França" },
  nl: { the: "a Holanda", in: "na Holanda", of: "da Holanda" },
  es: { the: "a Espanha", in: "na Espanha", of: "da Espanha" },
  it: { the: "a Itália", in: "na Itália", of: "da Itália" },
  au: { the: "a Austrália", in: "na Austrália", of: "da Austrália" },
  jp: { the: "o Japão", in: "no Japão", of: "do Japão" },
  sg: { the: "Singapura", in: "em Singapura", of: "de Singapura" },
  hk: { the: "Hong Kong", in: "em Hong Kong", of: "de Hong Kong" },
  in: { the: "a Índia", in: "na Índia", of: "da Índia" },
  ae: { the: "os Emirados Árabes Unidos", in: "nos Emirados Árabes Unidos", of: "dos Emirados Árabes Unidos" },
};
const contraction: Record<string, string> = { o: "no", a: "na", os: "nos", as: "nas" };
/** "em" + a country name as `compareText("pt").countries` spells it: "nos Estados Unidos", "em Singapura". */
const inCountry = (countryName: string) => {
  const key =
    countryList.find((c) => c.name === countryName || c.short === countryName)?.key ??
    (Object.keys(countryForms) as CountryKey[]).find((k) => countryForms[k].the === countryName);
  if (key) return countryForms[key].in;
  const m = /^(o|a|os|as) (.+)$/.exec(countryName);
  return m ? `${contraction[m[1]]} ${m[2]}` : `em ${countryName}`;
};

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${The(e)} está à frente em ${joinList(rows.map((r) => r.topic))}` : `${The(e)} não está à frente em nenhum deles`;
  return `Nem ${the(a)} nem ${the(b)} é melhor em todos os pontos. Dos ${s.measurable} pontos mensuráveis desta comparação, ${the(a)} leva vantagem em ${s.a.length} e ${the(b)} em ${s.b.length}${s.tie.length ? `, e ${s.tie.length} ${tied(s.tie.length)}` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Escolha ${the(a)} se ${lcFirst(altInfo(a).chooseIf[0])}. Escolha ${the(b)} se ${lcFirst(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${The(a)} e ${the(b)} oferecem a mesma alavancagem máxima: ${a.name}, ${lowerUpTo(a.maxLeverage)}; ${b.name}, ${lowerUpTo(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${The(hi)} oferece a alavancagem máxima mais alta – ${lowerUpTo(hi.maxLeverage)} –, contra ${lowerUpTo(lo.maxLeverage)} ${na(lo)}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `No ranking de derivativos do CoinMarketCap (${prettyDate(site.marketDataDate)}), ${the(a)} registrava ${formatBn(a.market.openInterestBn)} de open interest em ${a.market.markets} mercados, e ${the(b)}, ${formatBn(b.market.openInterestBn)} em ${b.market.markets}. ${The(deeper)} tem o mercado mais profundo, o que costuma significar spreads mais apertados em ordens grandes.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${The(a)} oferece ${joinList(notOffered.map((f) => f.noun))}, que ${the(b)} não oferece.` : "",
    notFound.length ? `${The(a)} oferece ${joinList(notFound.map((f) => f.noun))}; no site ${da(b)} não encontramos nenhum produto desse tipo.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const forms = countryForms[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${The(e)} não aceita residentes ${forms.of}${extra}`;
  if (status === "regional") return `${The(e)} atende residentes ${forms.of} por meio de uma plataforma regional${extra}`;
  if (status === "partial") return `${The(e)} tem restrições parciais ${forms.in}${extra}`;
  return `${The(e)} não inclui ${forms.the} na sua lista de países restritos`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("pt").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. As listas de países mudam, e um país fora da lista não é garantia de que todos os produtos estejam disponíveis lá – o que vale são os termos da própria corretora.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "as duas" : has(a, key) ? `só ${the(a)}` : has(b, key) ? `só ${the(b)}` : "não encontrado no site de nenhuma das duas";
  const noTokenDiscount = "Nenhum desconto desse tipo é divulgado.";
  const noFund = "Nenhum fundo de proteção citado.";
  const noMica = "não cita nenhuma entidade com autorização MiCA nas próprias páginas";
  const leverageRisk = "Alavancagem alta aumenta muito o risco de liquidação.";

  const verdict: Faq[] = [
    { q: `${a.name} ou ${b.name}: qual é melhor?`, a: versusAnswer(a, b, s) },
    {
      q: `Qual é a principal diferença entre ${the(a)} e ${the(b)}?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` As vantagens mensuráveis mais claras ${da(a)}: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` As ${da(b)}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `${The(a)} é maior que ${the(b)}?`,
      a: `No ranking de derivativos do CoinMarketCap (${marketDate}), ${the(a)} registrava ${formatBn(a.market.openInterestBn)} de open interest e ${formatBn(a.market.volume24hBn)} de volume em 24 horas; ${the(b)}, ${formatBn(b.market.openInterestBn)} e ${formatBn(b.market.volume24hBn)}. Pelos números das próprias corretoras, ${the(a)} tem ${withoutSource(a.users)} e ${the(b)}, ${withoutSource(b.users)}.`,
    },
    {
      q: `${a.name} ou ${b.name}: qual é melhor para iniciantes?`,
      a: `Para uma primeira conta, três coisas contam: um jeito fácil de comprar cripto, uma forma de praticar e taxas baixas. Compra com cartão ou transferência bancária: ${state("fiat")}. Conta demo: ${state("demoTrading")}. Copy trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Verificação de identidade – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} ou ${b.name}: qual é melhor para operar Futuros?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} ou ${b.name}: qual tem as taxas mais baixas?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Essas são as taxas padrão (sem nível VIP); níveis VIP e tokens das corretoras as reduzem ainda mais.`,
    },
    {
      q: `${The(a)} e ${the(b)} dão desconto para quem paga as taxas com o próprio token?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} ou ${b.name}: qual oferece mais alavancagem?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} ou ${b.name}: qual lista mais moedas?`,
      a: `Pelos números das próprias corretoras, ${the(a)} lista ${withoutSource(a.assets)} e ${the(b)}, ${withoutSource(b.assets)}. Cada corretora conta de um jeito – algumas contam moedas, outras pares de negociação –, então os dois números não são diretamente comparáveis.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({
      q: `Posso usar ${the(a)} ou ${the(b)} ${countryForms[c.key].in}?`,
      a: countryPairAnswer(a, b, c),
    })),
    {
      q: `${The(a)} e ${the(b)} exigem KYC?`,
      a: `Sim, as duas pedem verificação de identidade aos novos usuários. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Nenhuma das duas serve para quem quer operar sem verificação.`,
    },
    {
      q: `${a.name} ou ${b.name}: qual é mais segura?`,
      a: `Nenhuma corretora centralizada é livre de risco, então a comparação honesta é o que cada uma divulga. ${a.name}: ${a.regulation}. Prova de reservas – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Prova de reservas – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Em qualquer uma das duas, mantenha apenas os fundos com que você opera ativamente.`,
    },
    {
      q: `${The(a)} e ${the(b)} são regulamentadas na UE pelo MiCA?`,
      a: `${a.name}: ${ia.mica ? `sim – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `sim – ${ib.mica}` : noMica}. Uma plataforma regional costuma ter linha de produtos, taxas e limites próprios.`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Nada entre os ${featureList.length} produtos que comparamos: todo produto que ${the(x)} mostra no próprio site também aparece no site ${da(y)}.`;
  const products: Faq[] = [
    { q: `O que ${the(a)} oferece que ${the(b)} não oferece?`, a: onlyA || nothing(a, b) },
    { q: `O que ${the(b)} oferece que ${the(a)} não oferece?`, a: onlyB || nothing(b, a) },
    {
      q: `${The(a)} e ${the(b)} têm copy trading, robôs de trading, opções e conta demo?`,
      a: `Copy trading: ${state("copyTrading")}. Robôs de trading: ${state("tradingBots")}. Opções: ${state("options")}. Conta demo: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Onde só uma corretora é citada, não encontramos em ${prettyDate(site.lastReviewed)} nenhuma página do produto no site da outra.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Quais são os códigos de indicação ${da(a)} e ${da(b)}?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Os dois códigos são gratuitos e não aumentam suas taxas de negociação.`,
    },
    {
      q: `${a.name} ou ${b.name}: qual tem o melhor bônus de cadastro?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Nas duas corretoras, os bônus de boas-vindas dependem de condições como verificação de identidade, depósitos ou volume de negociação e variam por país; por isso, compare as condições, não o valor em destaque.`,
    },
    {
      q: `Posso adicionar um código de indicação depois ${na(a)} ou ${na(b)}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. O caminho seguro nas duas é se cadastrar pelo link de indicação.`,
    },
    {
      q: `Posso usar ${the(a)} e ${the(b)} ao mesmo tempo?`,
      a: "Sim. São empresas diferentes, então uma conta em uma não afeta a conta na outra, e muitos traders mantêm fundos em duas corretoras. Níveis de taxa, indicações e recompensas ficam vinculados a cada conta e não são transferidos.",
    },
    {
      q: `Como transferir cripto ${da(a)} para ${the(b)}?`,
      a: `1. Abra sua conta ${na(b)} com o código de indicação ${b.referralCode} e conclua a verificação de identidade. 2. Feche as posições abertas de Futuros e de margem ${na(a)} – posições não podem ser transferidas de uma corretora para outra. 3. ${cap(na(b))}, copie o endereço de depósito da moeda e da rede que você quer usar. 4. Saque ${da(a)} para esse endereço pela mesma rede e envie antes um valor pequeno de teste: uma transferência pela rede errada pode ser perdida. Os mesmos passos valem no sentido inverso.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} ou ${b.name}: qual é melhor?`, faqs: verdict },
    { id: "fees", title: "Taxas, alavancagem e moedas", faqs: fees },
    { id: "countries", title: "Países, KYC e segurança", faqs: countries },
    { id: "products", title: "Produtos", faqs: products },
    { id: "referral", title: "Códigos de indicação e como migrar de uma para a outra", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${cap(theNames(lowF))} ${verb(lowF, "tem", "têm")} as menores taxas padrão de Futuros (${feePair(lowF[0].futuresFees)} maker / taker), ${theNames(hi)}, a maior alavancagem (${leverageOf(hi[0])}x), e ${theNames(oi)}, o mercado de derivativos mais profundo (${formatBn(oi[0].market.openInterestBn)} de open interest). ${cap(theNames(mica))} ${verb(mica, "cita", "citam")} uma plataforma autorizada pelo MiCA para residentes do EEE (Espaço Econômico Europeu). Qual corretora é melhor para você depende do par que você está avaliando – escolha-o abaixo.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Qual corretora de cripto tem as menores taxas?",
      a: `No nível padrão, ${theNames(lowF)} ${verb(lowF, "tem", "têm")} as menores taxas de Futuros, com ${feePair(lowF[0].futuresFees)} (maker / taker), e ${theNames(lowS)}, as menores taxas de Spot, com ${feePair(lowS[0].spotFees)}. As demais corretoras: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name}, com ${feePair(e.futuresFees)} em Futuros e ${feePair(e.spotFees)} em Spot`)
        .join("; ")}. Níveis VIP e tokens das corretoras reduzem ainda mais essas taxas.`,
    },
    {
      q: "Qual corretora de cripto oferece a maior alavancagem?",
      a: `${names(hi)}: ${lowerUpTo(hi[0].maxLeverage)}. As demais: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. Alavancagem alta aumenta muito o risco de liquidação.`,
    },
    {
      q: "Qual corretora de cripto tem o mercado de Futuros mais profundo?",
      a: `Pelo open interest no ranking de derivativos do CoinMarketCap (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Um mercado mais profundo costuma significar spreads mais apertados em ordens grandes.`,
    },
    {
      q: "Quais corretoras têm uma plataforma autorizada pelo MiCA no EEE?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${cap(theNames(noMica))} não ${verb(noMica, "cita", "citam")} nenhuma entidade com autorização MiCA nas próprias páginas. Uma plataforma regional costuma ter linha de produtos, taxas e limites próprios.`,
    },
    {
      q: "Quais corretoras permitem adicionar o código de indicação depois do cadastro?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. ${cap(joinList(signupOnly.map(na)))}, o código só vale no cadastro ou não há forma documentada de adicioná-lo depois – o caminho seguro em todas é se cadastrar pelo link de indicação.`,
    },
    {
      q: "Como são feitas estas comparações?",
      a: `Cada número é lido no site ou na central de ajuda da própria corretora – tabelas de taxas, termos, listas de países restritos, páginas de produtos – e cada página lista as suas fontes. Open interest, volume e número de mercados de derivativos vêm do ranking de derivativos do CoinMarketCap. Qual corretora está à frente em cada ponto sai desses números; não existe um ranking próprio nosso. A revisão atual é de ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const pt: VersusText = {
  rows: {
    futuresFees: { label: "Taxas de Futuros (maker / taker)", topic: "taxas de Futuros" },
    spotFees: { label: "Taxas de Spot (maker / taker)", topic: "taxas de Spot" },
    leverage: { label: "Alavancagem máxima", topic: "alavancagem máxima" },
    openInterest: { label: "Open interest em derivativos", topic: "open interest" },
    volume: { label: "Volume de derivativos em 24h", topic: "volume de derivativos em 24 horas" },
    markets: { label: "Mercados de derivativos", topic: "número de mercados de derivativos" },
    users: { label: "Usuários (números próprios)", topic: "número de usuários" },
    assets: { label: "Ativos listados (números próprios)", topic: "" },
    founded: { label: "Fundação", topic: "" },
    products: { label: (compared) => `Produtos encontrados (de ${compared} comparados)`, topic: "variedade de produtos" },
    countries: { label: (compared) => `Países bloqueados (de ${compared} comparados)`, topic: "cobertura de países" },
    mica: { label: "Plataforma no EEE autorizada pelo MiCA", topic: "autorização MiCA" },
    kyc: { label: "Verificação de identidade (KYC)", topic: "" },
    addLater: { label: "Adicionar o código de indicação depois?", topic: "possibilidade de adicionar o código de indicação depois" },
    offer: { label: "Oferta para novos usuários", topic: "" },
    reserves: { label: "Prova de reservas", topic: "" },
    fund: { label: "Fundo de proteção", topic: "" },
  },
  countOf: (count, of) => `${count} de ${of}`,
  noMica: "Nenhuma citada",
  noFund: "Nenhum citado",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    // Três formulações, fixas por par.
    title: (a, b, shortMonthYear) =>
      fit(
        TITLE_MAX,
        ...[
          [`${a.name} vs ${b.name} (${shortMonthYear}): taxas, alavancagem e bônus`, `${a.name} vs ${b.name} (${shortMonthYear}): taxas e alavancagem`],
          [`${a.name} ou ${b.name}? Taxas, alavancagem e KYC comparados`, `${a.name} ou ${b.name}? Taxas e KYC comparados`],
          [`${a.name} vs ${b.name}: qual corretora é melhor em ${yearOf(shortMonthYear)}?`],
        ][variant(3, a.slug, b.slug)],
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      ),
    description: (a, b, monthYear) =>
      fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: taxas de Futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, alavancagem ${leverageOf(a)}x vs ${leverageOf(b)}x, produtos, países, KYC e códigos de indicação (${monthYear}).`,
        `${a.name} vs ${b.name}: taxas de Futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, alavancagem ${leverageOf(a)}x vs ${leverageOf(b)}x, países, KYC e códigos de indicação (${monthYear}).`,
        `${a.name} vs ${b.name}: taxas de Futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, alavancagem ${leverageOf(a)}x vs ${leverageOf(b)}x, KYC e códigos de indicação (${monthYear}).`,
        `${a.name} vs ${b.name}: taxas de Futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, alavancagem ${leverageOf(a)}x vs ${leverageOf(b)}x, produtos, países, KYC e códigos de indicação.`,
      ),
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} ou ${b.name}`,
      `${a.name} vs ${b.name} taxas`,
      `${a.name} vs ${b.name} futuros`,
      `comparativo ${a.name} ${b.name}`,
      `${a.name} é melhor que ${b.name}`,
      `${b.name} é melhor que ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Início",
    crumbHub: "Comparações de corretoras",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${The(e)} é a corretora antes conhecida como ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${The(a)} e ${the(b)} são corretoras centralizadas para negociação no mercado à vista (Spot) e de Futuros com alavancagem, e as duas têm um programa de indicação para novos usuários. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} Esta página coloca lado a lado as taxas, a alavancagem, os produtos, a disponibilidade por país, as regras de verificação e as ofertas de indicação das duas – cada número foi lido nos sites das próprias corretoras em ${date}.`,

    toc: {
      "at-a-glance": "Visão geral",
      verdict: "Qual escolher",
      fees: "Taxas",
      leverage: "Alavancagem e profundidade",
      products: "Produtos",
      countries: "Países",
      kyc: "Verificação (KYC)",
      safety: "Segurança e regulamentação",
      referral: "Códigos de indicação",
      "pros-cons": "Prós e contras",
      faq: "Perguntas frequentes",
      sources: "Fontes",
    },
    onThisPage: "Nesta página",

    /* Hero */
    updated: (date) => `Conferido e atualizado em ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: taxas, alavancagem e segurança comparadas`,
    quickAnswer: "Resposta rápida",
    keyFigures: "Números principais",
    chips: (a, b, oiA, oiB) => [
      `Futuros ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Alavancagem ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Cadastre-se com um código de indicação",
    boxNote: "Os dois códigos são gratuitos e nunca aumentam suas taxas.",
    codeLabel: (e) => `Código de indicação ${da(e)}`,
    boxRisk: () => (
      <>
        Operar com alavancagem é de alto risco. Nenhuma das duas corretoras está disponível em todos os países – veja{" "}
        <a href="#countries">países</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: visão geral`,
    glanceText: (a, b, s) =>
      `Tanto faz pesquisar ${a.name} vs ${b.name} ou ${b.name} vs ${a.name}: a comparação é a mesma. Dos ${s.measurable} pontos que os números permitem decidir, ${the(a)} está à frente em ${s.a.length} e ${the(b)} em ${s.b.length}${s.tie.length ? `; ${s.tie.length} ${tied(s.tie.length)}` : ""}. Os pontos não têm o mesmo peso – taxas menores importam mais para quem opera com frequência do que uma lista de moedas mais longa –, então leia a coluna que combina com o seu jeito de operar.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: taxas, alavancagem, tamanho do mercado, produtos, países, verificação e regras de indicação`,
    compared: "Critério",
    ahead: "Vantagem",
    level: "Empate",
    glanceNote: (marketDate, date) =>
      `Taxas: nível padrão (sem VIP). Open interest, volume e mercados: ranking de derivativos do CoinMarketCap, ${marketDate}. “–” significa que os dois valores não podem ser classificados um contra o outro. Todo o resto foi lido nos sites das próprias corretoras em ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} ou ${b.name}: qual você deve escolher?`,
    verdictText:
      "Não existe uma vencedora absoluta – cada corretora foi pensada para um tipo diferente de trader. Os dois quadros mostram para quem cada uma serve e em que pontos mensuráveis ela supera a outra.",
    bestFor: (role) => `Ideal para: ${role}`,
    chooseIf: (e) => `Escolha ${the(e)} se …`,
    aheadOf: (e, other) => `Onde ${the(e)} supera ${the(other)}`,
    noAdvantage: "Nenhuma vantagem mensurável nos pontos que comparamos.",
    thinkTwice: "Pense duas vezes se …",
    codeButton: (e) => `Código de indicação ${da(e)}: ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Taxas: ${a.name} vs ${b.name}`,
    feesModel:
      "As duas usam o modelo maker/taker: ordens limite que adicionam liquidez pagam a taxa maker, e ordens que retiram liquidez pagam a taxa taker.",
    feesCaption: (a, b) => `Taxas padrão de Spot e Futuros ${da(a)} e ${da(b)}`,
    exchange: "Corretora",
    futuresMaker: "Futuros maker",
    futuresTaker: "Futuros taker",
    spotMaker: "Spot maker",
    spotTaker: "Spot taker",
    otherMarkets: "Outros mercados (maker / taker)",
    feesNote: (date) =>
      `Taxas padrão (sem VIP) conforme publicadas por cada corretora, conferidas em ${date}. As taxas mudam – confirme na corretora antes de operar.`,
    tokenTitle: "Descontos com token e letras miúdas",
    noTokenDiscount: "Nenhum desconto divulgado para quem paga as taxas com um token da corretora.",

    /* Leverage */
    leverageTitle: "Alavancagem e profundidade de mercado",
    leverageRisk: "Alavancagem alta aumenta muito o risco de liquidação – o máximo é um limite, não uma recomendação.",
    leverageCaption: (a, b) => `Alavancagem e dados do mercado de derivativos ${da(a)} e ${da(b)}`,
    maxLeverage: "Alavancagem máxima",
    openInterest: "Open interest (contratos em aberto)",
    volume24h: "Volume de derivativos em 24h",
    derivativesMarkets: "Mercados de derivativos",
    listedAssets: "Ativos listados (números próprios)",
    leverageNote: (marketDate) =>
      `Dados de mercado: ranking de derivativos do CoinMarketCap, ${marketDate}. Cada corretora conta os ativos listados de um jeito – algumas contam moedas, outras pares de negociação.`,

    /* Products */
    productsTitle: (a, b) => `Produtos: o que ${the(a)} e ${the(b)} oferecem`,
    productsSame: (compared) =>
      `As duas corretoras mostram nos próprios sites todos os ${compared} produtos que comparamos; as diferenças estão nos detalhes.`,
    productsLegend: (date) =>
      `O sinal de visto indica que a corretora mostra o produto no próprio site; o traço indica que não encontramos nenhuma página sobre ele lá em ${date}.`,
    productsCaption: (a, b) => `Produtos oferecidos ${pela(a)} e ${pela(b)}`,
    product: "Produto",
    offered: "Disponível",
    notOffered: "Não disponível",
    noPage: "Nenhuma página encontrada no próprio site",

    /* Countries */
    countriesTitle: (a, b) => `Países: onde ${the(a)} e ${the(b)} estão disponíveis`,
    countriesText: (compared, differing) =>
      `Para ${compared} países, isto é o que dizem os termos de cada corretora. As duas diferem em ${differing} deles. “${ct.statusLabel.regional}” significa que a corretora atende o país por meio de uma plataforma separada, com produtos, taxas e limites próprios.`,
    countriesCaption: (a, b) => `Disponibilidade por país ${da(a)} e ${da(b)}`,
    country: "País",
    countriesNote: (date) =>
      `“${ct.statusLabel.open}” significa que o país não constava da lista de países restritos da corretora em ${date} – não é garantia de que todos os produtos sejam oferecidos lá. As duas corretoras proíbem contornar uma restrição com VPN ou dados falsos.`,
    differTitle: "Onde as duas diferem",
    differQuestion: (a, b, countryName) => `${a.name} ou ${b.name} ${inCountry(countryName)}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        Nenhuma das duas atende onde você mora? As tabelas de países das páginas de alternativas mostram quais outras corretoras aceitam o seu país:{" "}
        <Link href={hrefA}>Alternativas à {a.name} por país</Link> · <Link href={hrefB}>Alternativas à {b.name} por país</Link>.
      </>
    ),
    restrictedTitle: "Países restritos e plataformas regionais",
    whereNot: (e) => `Onde ${the(e)} não está disponível?`,
    regionalPlatforms: "Plataformas regionais:",

    /* Verification */
    kycTitle: (a, b) => `Verificação: ${a.name} vs ${b.name}`,
    kycText:
      "As duas pedem verificação de identidade aos novos usuários, então nenhuma delas é opção para operar sem KYC. A diferença está no que uma conta não verificada ainda pode fazer e em como a verificação funciona.",
    documents: "Documentos:",
    minAge: "Idade mínima:",
    howToRegister: (e) => `Como se cadastrar e verificar a conta ${na(e)}, passo a passo`,

    /* Safety */
    safetyTitle: (a, b) => `Segurança e regulamentação: ${a.name} vs ${b.name}`,
    safetyText:
      "Nenhuma corretora centralizada é livre de risco. O que dá para comparar é o que cada uma divulga sobre si mesma: onde tem licença, se comprova as próprias reservas e se mantém um fundo para emergências.",
    safetyCaption: (a, b) => `Regulamentação, prova de reservas e fundos de proteção ${da(a)} e ${da(b)}`,
    licences: "Licenças citadas pela corretora",
    entity: "Entidade operadora",
    reserves: "Prova de reservas",
    fund: "Fundo de proteção",
    founded: "Fundação",
    isSafe: (e) => `${The(e)} é segura?`,
    safetyDetail: (e) => `Segurança e disponibilidade ${da(e)} em detalhes`,

    /* Referral codes */
    referralTitle: (a, b) => `Códigos de indicação e ofertas para novos usuários: ${a.name} vs ${b.name}`,
    referralText:
      "Seja qual for a sua escolha, cadastre-se com um código de indicação: não custa nada, nunca aumenta suas taxas e libera a oferta da corretora para novos usuários. Atenção à última linha – um código esquecido nem sempre pode ser adicionado depois.",
    referralCaption: (a, b) => `Códigos de indicação e ofertas para novos usuários ${da(a)} e ${da(b)}`,
    referralCodeOf: (e) => `Código de indicação ${da(e)}`,
    referralCode: "Código de indicação",
    newUserOffer: "Oferta para novos usuários",
    inviteeReward: "O que você recebe como convidado",
    covers: "Uma indicação vale para",
    whereCode: "Onde inserir o código",
    addLater: "Dá para adicionar depois?",
    referralNote: (date) =>
      `Ofertas conferidas em ${date}. Os bônus de boas-vindas dependem de tarefas, exigem verificação de identidade e variam por país.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Prós e contras ${da(a)} e ${da(b)}`,
    pros: "Prós",
    cons: "Contras",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – perguntas frequentes`,
    faqText: (count, a, b) =>
      `${count} perguntas sobre como escolher entre ${the(a)} e ${the(b)}: taxas, alavancagem, países, verificação, produtos e códigos de indicação.`,

    /* Sources */
    sourcesTitle: "Fontes: de onde vêm estes números",
    sourcesText: (date, marketDate) =>
      `Tudo o que esta página diz sobre taxas, alavancagem, produtos, verificação, países, licenças, reservas e regras de indicação foi lido nos sites e nas centrais de ajuda das duas corretoras em ${date}. Open interest, volume e número de mercados de derivativos vêm do ranking de derivativos do CoinMarketCap (${marketDate}). As corretoras mudam os termos sem aviso prévio, então a palavra final é das páginas abaixo.`,
    officialPages: (e, count) => `${e.name}: ${count} páginas oficiais`,

    /* More comparisons */
    moreTitle: "Mais comparações",
    against: (e) => `${e.name} contra as outras corretoras`,
    allAlternatives: (e) => `Todas as alternativas à ${e.name}`,
    allComparisons: "Todas as comparações de corretoras",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Aviso de risco:</strong> Derivativos de cripto são instrumentos complexos. A alavancagem multiplica ganhos e perdas, e você pode perder
        toda a sua margem em questão de minutos. Esta página é apenas informativa e não constitui aconselhamento financeiro. Podemos receber uma comissão
        se você se cadastrar pelos nossos links – veja a nossa <Link href={disclosureHref}>divulgação de afiliados</Link>. Isso não muda os números: eles
        são das próprias corretoras.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} ou ${b.name}? Comece com um código de indicação`,
    ctaText: "Uma única conta para Spot e Futuros em qualquer uma das duas corretoras, sem custo extra.",
    ctaButton: "Comparar mais corretoras",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(
        TITLE_MAX,
        `Comparativo de corretoras de cripto (${shortMonthYear}): ${pairs} confrontos`,
        `Comparativo de corretoras de cripto: ${pairs} confrontos`,
        `Comparativo de corretoras de cripto (${shortMonthYear})`,
      ),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames} frente a frente: ${pairs} comparações diretas de taxas, alavancagem, países, KYC e códigos de indicação (${monthYear}).`,
        `${exchangeNames}: ${pairs} comparações diretas de taxas, alavancagem, países, KYC e códigos de indicação (${monthYear}).`,
        `${exchangeNames} frente a frente: ${pairs} comparações diretas de taxas, alavancagem, países, KYC e códigos de indicação.`,
      ),
    crumbHome: "Início",
    crumbPage: "Comparações de corretoras",
    listName: "Comparações diretas entre corretoras de cripto",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Conferido e atualizado em ${date}`,
    h1: (pairs) => `Comparação de corretoras de cripto: ${pairs} confrontos diretos`,
    lead: (exchangeCount) =>
      `${exchangeCount} corretoras, e cada par comparado nos mesmos pontos: taxas, alavancagem, profundidade de mercado, produtos, disponibilidade por país, verificação de identidade, regulamentação e ofertas de indicação. Cada comparação usa os números dos sites das próprias corretoras.`,
    quickAnswer: "Resposta rápida",

    pickTitle: "Escolha duas corretoras para comparar",
    pickText: (others) =>
      `Cada quadro coloca uma corretora frente às outras ${others}. Cada par tem uma única página, então “Binance vs OKX” e “OKX vs Binance” levam à mesma comparação.`,
    alternativesOf: (e) => `Alternativas à ${e.name}`,
    referralCodeOf: (e) => `Código de indicação ${da(e)}`,

    tableTitle: (exchangeCount) => `As ${exchangeCount} corretoras lado a lado`,
    tableText: "Ofertas para novos usuários, taxas padrão (sem VIP), alavancagem e profundidade de mercado de todas as corretoras em uma só tabela.",
    tableNote: (date, marketDate) =>
      `Taxas: nível padrão conforme publicado por cada corretora, conferido em ${date}. Open interest e mercados: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Uma corretora contra todas as outras",
    alternativesText: (others) =>
      `Não está decidindo entre duas, mas procurando uma substituta? As páginas de alternativas medem uma corretora contra as outras ${others} de uma vez e mostram quais delas aceitam o seu país.`,

    faqTitle: "Comparação de corretoras – perguntas frequentes",

    ctaTitle: "Já decidiu? Cadastre-se com um código de indicação",
    ctaText: (exchangeCount) => `Códigos verificados para as ${exchangeCount} corretoras – uma conta para Spot e Futuros, sem custo extra.`,
    ctaButton: "Ver todos os códigos de indicação",
  },
};
