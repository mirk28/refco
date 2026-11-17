/**
 * The sentences of the comparison pages in Brazilian Portuguese. Same functions as `./en.ts`, written in
 * Portuguese grammar.
 *
 * Wording: "corretora" for the platform, "taxas", "código de indicação", "você". The exchanges are feminine and
 * take the article in running text ("a Binance", "da OKX", "na Bybit", "à Gate"); lists after a colon do not.
 * Countries carry their article in `name` ("o Japão") and the contracted form in `inName` ("no Japão").
 * Fee rates come from the data in Portuguese notation (0,02%); leverage stays 150x.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import {
  addLater,
  altInfo as altInfoIn,
  alternativesTo as alternativesIn,
  cheaper,
  countryGroups,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  verb,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "pt";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("pt-BR");

/* ------------------------- exchange names with article ------------------------- */

/** Every exchange is "a corretora", so all names take the feminine article and its contractions. */
const the = (e: Exchange) => `a ${e.name}`;
const theNames = (list: Exchange[]) => joinList(list.map(the));
const ofThe = (e: Exchange) => `da ${e.name}`;
const onThe = (e: Exchange) => `na ${e.name}`;
const toThe = (e: Exchange) => `à ${e.name}`;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Lower-cases the first letter, unless the text starts with a name ("Gate …"), a product word ("Spot …") or an abbreviation ("KYC …"). */
const keepCase = new Set([...exchanges.map((e) => e.name), "Spot", "Futuros", "MiCA", "Web3"]);
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.()]/)[0];
  return keepCase.has(first) || /^[A-ZÁÂÃÀÉÊÍÓÔÕÚÇ0-9]{2,}/.test(first) ? s : s.charAt(0).toLowerCase() + s.slice(1);
};

/* -------------------------------- vocabulary -------------------------------- */

const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy trading", noun: "copy trading" },
  tradingBots: { label: "Robôs de trading", noun: "robôs de trading" },
  options: { label: "Opções", noun: "negociação de opções" },
  demoTrading: { label: "Conta demo", noun: "conta demo" },
  margin: { label: "Margem no Spot", noun: "negociação com margem no Spot" },
  p2p: { label: "Negociação P2P", noun: "negociação P2P" },
  fiat: { label: "Compra com cartão / banco", noun: "compra de cripto com cartão ou transferência bancária" },
  earn: { label: "Earn / staking", noun: "produtos Earn" },
  launchpad: { label: "Launchpad / launchpool", noun: "um launchpad" },
  web3Wallet: { label: "Carteira Web3", noun: "uma carteira Web3 de autocustódia" },
  card: { label: "Cartão cripto", noun: "um cartão cripto" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` with its article ("os Estados Unidos"), `inName` with "em" contracted ("nos Estados Unidos"), `short` for tables. */
const countryWords: Record<CountryKey, { name: string; inName: string; short: string }> = {
  us: { name: "os Estados Unidos", inName: "nos Estados Unidos", short: "Estados Unidos" },
  uk: { name: "o Reino Unido", inName: "no Reino Unido", short: "Reino Unido" },
  ca: { name: "o Canadá", inName: "no Canadá", short: "Canadá" },
  de: { name: "a Alemanha", inName: "na Alemanha", short: "Alemanha" },
  fr: { name: "a França", inName: "na França", short: "França" },
  nl: { name: "a Holanda", inName: "na Holanda", short: "Holanda" },
  es: { name: "a Espanha", inName: "na Espanha", short: "Espanha" },
  it: { name: "a Itália", inName: "na Itália", short: "Itália" },
  au: { name: "a Austrália", inName: "na Austrália", short: "Austrália" },
  jp: { name: "o Japão", inName: "no Japão", short: "Japão" },
  sg: { name: "Singapura", inName: "em Singapura", short: "Singapura" },
  hk: { name: "Hong Kong", inName: "em Hong Kong", short: "Hong Kong" },
  in: { name: "a Índia", inName: "na Índia", short: "Índia" },
  ae: { name: "os Emirados Árabes Unidos", inName: "nos Emirados Árabes Unidos", short: "Emirados Árabes Unidos" },
};
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `residentes ${countryWords[c.key].inName}` }));
type Country = (typeof countryList)[number];

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Restrito",
  regional: "Site regional",
  partial: "Parcial",
  open: "Sem restrição",
};

/** "no Spot" / "nos contratos perpétuos" – the market of a fee comparison. */
const inMarket = (market: "spot" | "futures") => (market === "spot" ? "no Spot" : "nos contratos perpétuos");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = inMarket(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${cap(the(a))} e ${the(x)} cobram as mesmas taxas padrão ${where}: ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: Exchange, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${the(who)} é mais barata para makers e takers`
      : mm !== 0
        ? `${the(who)} é mais barata para makers, e os takers pagam o mesmo`
        : `${the(who)} é mais barata para takers, e os makers pagam o mesmo`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a, m, t)
      : m >= 0 && t >= 0
        ? one(x, m, t)
        : m < 0
          ? `${the(a)} é mais barata para makers, e ${the(x)}, para takers`
          : `${the(x)} é mais barata para makers, e ${the(a)}, para takers`;
  return `${cap(where)}, ${the(a)} cobra ${fa.maker} maker / ${fa.taker} taker e ${the(x)}, ${fx.maker} / ${fx.taker} – ${verdict}.`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `${market === "spot" ? "No mercado à vista (Spot)" : "Nos contratos perpétuos"}, ${the(x)} cobra ${feePair(fx)} (maker / taker).`,
    lower.length ? `${verb(lower, "Mais barata", "Mais baratas")}: ${rates(lower)}.` : `Nenhuma das ${alts.length} alternativas é mais barata.`,
    same.length ? `Mesmas taxas: ${names(same)}.` : "",
    higher.length ? `${verb(higher, "Mais cara", "Mais caras")}: ${rates(higher)}.` : "",
    mixed.length ? `${verb(mixed, "Mais barata", "Mais baratas")} em apenas uma das taxas: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const where = market === "spot" ? "no Spot" : "em Futuros";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Taxas mais baixas ${where}: ${feePair(fa)} em vez de ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Taxa maker mais baixa ${where}: ${fa.maker} em vez de ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Taxa taker mais baixa ${where}: ${fa.taker} em vez de ${fx.taker}`);
    else if (m < 0) out.push(`Taxa maker mais baixa ${where}: ${fa.maker} em vez de ${fx.maker} (mas taxa taker mais alta)`);
    else if (t < 0) out.push(`Taxa taker mais baixa ${where}: ${fa.taker} em vez de ${fx.taker} (mas taxa maker mais alta)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Alavancagem máxima maior: ${leverageOf(a)}x em vez de ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Maior open interest em derivativos: ${formatBn(a.market.openInterestBn)} contra ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Mais mercados de derivativos: ${count(a.market.markets)} contra ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Um código de indicação esquecido ainda pode ser adicionado (${lcFirst(a.referral.afterSignupShort.replace(/^Sim – /, ""))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Oferece ${joinList(notOffered.map((f) => f.noun))}, que ${the(x)} não oferece`);
  if (notFound.length) out.push(`Oferece ${joinList(notFound.map((f) => f.noun))} – não encontramos produto equivalente no próprio site ${ofThe(x)}`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Uma plataforma para o EEE com autorização MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Não tem restrições ${joinList(openWhere.map((c) => c.inName))}, onde ${the(x)} está fechada`);
  if (regionalWhere.length) out.push(`Atua ${joinList(regionalWhere.map((c) => c.inName))} por meio de uma plataforma regional, onde ${the(x)} está fechada`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: Country): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[], article: boolean) =>
    list.map((a) => {
      const who = article ? the(a) : a.name;
      return note(a) ? `${who} (${note(a)})` : who;
    });
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${cap(the(x))} inclui ${c.name} na sua própria lista de países restritos.`);
  else if (own.status === "partial") parts.push(`${cap(the(x))} tem restrições parciais ${c.inName}${own.note ? ` (${own.note})` : ""}.`);
  else if (own.status === "regional") parts.push(`${cap(the(x))} atende ${c.residents} por meio de uma plataforma regional${own.note ? ` (${own.note})` : ""}.`);
  else parts.push(`${cap(the(x))} não lista ${c.name} como país restrito.`);
  if (g.open.length) parts.push(`${cap(theNames(g.open))} não ${verb(g.open, "lista", "listam")} ${c.name} como país restrito.`);
  if (g.regional.length)
    parts.push(
      `${cap(joinList(withNote(g.regional, true)))} ${verb(g.regional, "atende", "atendem")} ${c.residents} por meio de ${verb(g.regional, "uma plataforma regional separada", "plataformas regionais separadas")}.`,
    );
  if (g.partial.length) parts.push(`Com restrições parciais: ${withNote(g.partial, false).join("; ")}.`);
  if (g.restricted.length)
    parts.push(`${cap(theNames(g.restricted))} ${own.status === "restricted" ? "também " : ""}${verb(g.restricted, "restringe", "restringem")} o acesso ${c.inName}.`);
  if (!g.open.length && !g.regional.length) parts.push(`Nenhuma das ${alts.length} alternativas está totalmente aberta a ${c.residents}.`);
  parts.push(
    "As listas de países mudam, e um país não constar da lista não garante que todos os produtos estejam disponíveis lá – quem decide são os termos da própria corretora.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `As ${alts.length} alternativas ${toThe(x)} comparadas aqui são ${names(alts)}. ${alts.map((a) => altInfo(a).pick).join(". ")}. Todas as ${alts.length} pedem verificação de identidade (KYC) a novos usuários e cada uma tem sua própria lista de países restritos – por isso, confira a tabela de países antes de se cadastrar.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Defina o que precisa ser melhor do que ${onThe(x)}`,
      text: `Taxas menores, mais alavancagem, mais moedas ou simplesmente uma corretora que aceite o seu país: as tabelas desta página mostram em que cada alternativa supera ${the(x)} e em que não.`,
    },
    {
      title: "Confira se a corretora aceita o seu país",
      text: "Cada corretora tem sua própria lista de países restritos, e algumas direcionam você para uma plataforma regional com outros produtos e limites. Consulte a tabela de países antes de se cadastrar.",
    },
    {
      title: "Cadastre-se pelo link de indicação",
      text: `${cap(theNames(signupOnly))} só ${verb(signupOnly, "aceita", "aceitam")} o código de indicação durante o cadastro ou não ${verb(signupOnly, "documenta", "documentam")} nenhuma forma de adicioná-lo depois – por isso, use o link antes de criar a conta.${later.length ? ` ${cap(theNames(later))} ${verb(later, "permite", "permitem")} adicioná-lo depois, sob certas condições.` : ""}`,
    },
    {
      title: "Verifique sua identidade antes de transferir fundos",
      text: `Todas as ${alts.length} alternativas pedem verificação de identidade a novos usuários, e na maioria delas depósitos ou negociação ficam bloqueados até a verificação ser concluída. Tenha em mãos passaporte, RG ou CNH.`,
    },
    {
      title: `Feche suas posições abertas ${onThe(x)}`,
      text: `Posições de Futuros e de margem não podem ser transferidas entre corretoras. Feche-as primeiro ${onThe(x)} ou mantenha a conta até que elas se encerrem.`,
    },
    {
      title: "Saque para o seu novo endereço de depósito",
      text: "Copie o endereço de depósito da nova corretora, escolha a mesma moeda e a mesma rede dos dois lados e envie primeiro um pequeno valor de teste. Uma transferência pela rede errada pode ser perdida.",
    },
    {
      title: `Decida o que fazer com sua conta ${onThe(x)}`,
      text: `Você pode mantê-la – contas em corretoras diferentes são independentes entre si. Seu nível de taxas, seu vínculo de indicação e as recompensas não usadas ficam ${onThe(x)} e não são transferidos.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);
  const upTo = (s: string) => s.replace(/^Até/, "até");

  const choosing: Faq[] = [
    {
      q: `Qual é a melhor alternativa ${toThe(x)}?`,
      a: `Não existe uma única melhor alternativa ${toThe(x)} – depende do motivo pelo qual você quer trocar. ${alts.map((a) => altInfo(a).pick).join(". ")}. Nesta página, as ${n} são comparadas com ${the(x)} em taxas, alavancagem, produtos, disponibilidade por país e verificação, com dados dos sites das próprias corretoras, conferidos em ${date}.`,
    },
    {
      q: `Quais corretoras são parecidas com ${the(x)}?`,
      a: `${cap(theNames(alts))} são as mais parecidas. Assim como ${the(x)}, são corretoras centralizadas que oferecem negociação Spot e de Futuros com alavancagem em uma única conta e mantêm um programa de indicação para novos usuários. A diferença está nas taxas, na alavancagem máxima, no número de ativos listados e nos países que aceitam.`,
    },
    {
      q: `Qual é a maior alternativa ${toThe(x)}?`,
      a: `Pelo open interest (contratos em aberto) de derivativos no CoinMarketCap (${prettyDate(site.marketDataDate)}), ${theNames(oi)} ${verb(oi, "é a maior", "são as maiores")} das ${n} alternativas, com ${formatBn(oi[0].market.openInterestBn)}. A própria ${x.name} registrava ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Qual alternativa ${toThe(x)} tem as menores taxas?`,
      a: `${cap(theNames(lowF))} ${verb(lowF, "tem", "têm")} as menores taxas padrão de Futuros entre as ${n}: ${feePair(lowF[0].futuresFees)} (maker / taker). No Spot, ${theNames(lowS)} ${verb(lowS, "é a mais barata", "são as mais baratas")}, com ${feePair(lowS[0].spotFees)}. ${cap(the(x))} cobra ${feePair(x.futuresFees)} em Futuros e ${feePair(x.spotFees)} no Spot.${lowF.length === 1 ? ` ${lowF[0].feeNote}` : ""} Essas são as taxas do nível padrão; níveis VIP e os tokens das corretoras reduzem os valores ainda mais.`,
    },
    {
      q: `Quais corretoras são mais baratas que ${the(x)}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Nos contratos perpétuos: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, contra ${feePair(x.futuresFees)} ${onThe(x)}.` : `Nos contratos perpétuos, nenhuma das ${n} alternativas fica abaixo dos ${feePair(x.futuresFees)} ${ofThe(x)}.`} ${cheaperS.length ? `No Spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, contra ${feePair(x.spotFees)} ${onThe(x)}.` : `No Spot, nenhuma delas fica abaixo dos ${feePair(x.spotFees)} ${ofThe(x)}.`} Todos os valores são maker / taker no nível padrão.`
          : `Nenhuma das ${n} alternativas cobra menos que ${the(x)} no nível padrão: ${the(x)} cobra ${feePair(x.futuresFees)} em Futuros e ${feePair(x.spotFees)} no Spot (maker / taker), as menores taxas desta comparação. As alternativas merecem atenção por outros motivos – regulação, produtos ou os países que aceitam.`,
    },
    {
      q: `Qual alternativa ${toThe(x)} oferece a maior alavancagem?`,
      a: `${cap(theNames(hi))} ${verb(hi, "oferece", "oferecem")} a maior alavancagem entre as ${n}: ${upTo(hi[0].maxLeverage)}. As demais: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. A própria ${x.name} oferece ${upTo(x.maxLeverage)}. Alavancagem alta aumenta muito o risco de liquidação.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Quais alternativas ${toThe(x)} posso usar ${c.inName}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Existe alternativa ${toThe(x)} sem KYC?`,
      a: `Não entre as ${n} desta comparação. Cada uma delas pede verificação de identidade a novos usuários: ${alts.map((a) => `${a.name} – ${lcFirst(a.signup.kycShort)}`).join("; ")}. A própria ${x.name}: ${lcFirst(x.signup.kycShort)}.`,
    },
    {
      q: `Quais alternativas ${toThe(x)} são regulamentadas na UE pelo MiCA?`,
      a: `${mica.length ? `${cap(joinList(mica.map((a) => `${the(a)} (${altInfo(a).mica})`)))} ${verb(mica, "indica", "indicam")} uma entidade com autorização MiCA para residentes do EEE.` : `Nenhuma das ${n} indica uma entidade com autorização MiCA.`}${noMica.length ? ` ${cap(theNames(noMica))} ${verb(noMica, "não menciona", "não mencionam")} autorização MiCA nas próprias páginas.` : ""} ${xInfo.mica ? `A própria ${x.name}: ${xInfo.mica}.` : `A própria ${x.name} não menciona nenhuma.`} Uma plataforma regional costuma ter linha de produtos, taxas e limites próprios.`,
    },
    {
      q: `Qual alternativa ${toThe(x)} é a mais segura?`,
      a: `Nenhuma corretora centralizada é livre de riscos, então a comparação honesta é o que cada uma publica. ${alts.map((a) => `${a.name}: prova de reservas – ${altInfo(a).reserves}. ${altInfo(a).fund ? `${altInfo(a).fund}.` : "Nenhum fundo de proteção informado."}`).join(" ")} Em qualquer corretora, mantenha apenas os fundos que você usa ativamente para negociar.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Quais alternativas ${toThe(x)} oferecem ${f.noun}?`,
      a: `${yes.length ? `${cap(joinList(yes.map((a) => (altInfo(a).features[key].note ? `${the(a)} (${altInfo(a).features[key].note})` : the(a)))))} ${verb(yes, "oferece", "oferecem")} ${f.noun}.` : `Nenhuma das ${n} alternativas mostra ${f.noun} no próprio site.`}${no.length ? ` ${cap(theNames(no))} ${verb(no, "não oferece", "não oferecem")} esse produto.` : ""}${unknown.length ? ` ${verb(unknown, "No site", "Nos sites")} ${joinList(unknown.map(ofThe))} não encontramos esse produto na nossa verificação.` : ""} A própria ${x.name} ${own === true ? "também oferece" : own === false ? "não oferece" : "não mostra esse produto em seu site"}.`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Qual alternativa ${toThe(x)} lista mais moedas?`,
      a: `Pelos números das próprias corretoras: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}. ${x.name}: ${x.assets}. As corretoras contam de formas diferentes – algumas contam moedas, outras pares de negociação –, então os números não são diretamente comparáveis.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Como migrar ${ofThe(x)} para outra corretora?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Posso manter minha conta ${onThe(x)} ao abrir uma em outra corretora?`,
      a: `Sim. As corretoras são empresas distintas, então uma conta em uma não afeta a conta em outra, e você pode usar as duas em paralelo. O que não é transferido é tudo o que está vinculado à conta: sua indicação ${onThe(x)}, seu nível de taxas, as recompensas de boas-vindas e o histórico de negociação ficam ${onThe(x)}.`,
    },
    {
      q: `Posso transferir posições abertas de Futuros ${ofThe(x)} para outra corretora?`,
      a: `Não. Uma posição de Futuros só existe na corretora em que foi aberta. Para migrar, feche a posição ${onThe(x)}, saque os fundos e abra uma nova posição na outra corretora – com o preço e as taxas que valem lá.`,
    },
    {
      q: `As alternativas ${toThe(x)} têm código de indicação?`,
      a: `Sim, todas as ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Usar um código de indicação é grátis e não aumenta suas taxas de negociação.`,
    },
    {
      q: `Posso adicionar um código de indicação depois em uma alternativa ${toThe(x)}?`,
      a: `${alts.map((a) => `${a.name}: ${lcFirst(a.referral.afterSignupShort)}`).join(". ")}. O caminho seguro em qualquer corretora é se cadastrar pelo link de indicação.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${cap(the(a))} é melhor que ${the(x)}?`,
      a: `${ahead.length ? `${cap(the(a))} está à frente ${ofThe(x)} nestes pontos: ${ahead.map(lcFirst).join("; ")}.` : `Nos pontos que comparamos, ${the(a)} não tem nenhuma vantagem mensurável sobre ${the(x)}.`} ${behind.length ? `${cap(the(x))} leva vantagem em: ${behind.map(lcFirst).join("; ")}.` : `${cap(the(x))} não leva vantagem em nenhum deles.`} ${cap(the(a))} é uma boa opção se ${lcFirst(altInfo(a).chooseIf[0])}.`,
    };
  });

  return [
    { id: "choosing", title: `Como escolher uma alternativa ${toThe(x)}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Taxas e alavancagem", faqs: fees },
    { id: "countries", title: "Países, KYC e regulação", faqs: countryFaqs },
    { id: "features", title: "Produtos e moedas", faqs: featureFaqs },
    { id: "switching", title: `Migração ${ofThe(x)} e códigos de indicação`, faqs: switching },
    { id: "versus", title: `${x.name} vs. alternativas`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Quais são as melhores alternativas ${toThe(x)}?`,
    a: `${alts.map((a) => altInfo(a).pick).join(". ")}. Nossa página de alternativas ${toThe(x)} compara as ${alts.length} com ${the(x)} em taxas, alavancagem, produtos, disponibilidade por país e verificação.`,
  };
}

export const pt: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Sim", no: "Não", notFound: "Não encontrado no site da corretora" },
  names,
  feeSentence,
  feeSummary,
  advantages,
  countryAnswer,
  quickAnswer,
  switchSteps,
  buildAlternativesFaqs,
  alternativesTeaserFaq,
};
