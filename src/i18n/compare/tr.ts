/**
 * The sentences of the comparison pages in Turkish. Same functions and the same logic as `./en.ts`, written in
 * Turkish grammar.
 *
 * Wording: "borsa", "referans kodu", "komisyon", informal "sen". Fee rates arrive from the data in Turkish
 * notation (%0,02). Suffixes on exchange and country names follow pronunciation and come from the tables below
 * (Binance'te, MEXC'de, ABD'de); values from the data are placed so that they need no suffix.
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

const locale = "tr";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- name cases -------------------------------- */

/** Genitive, dative, locative, ablative and accusative of the exchange names, and the "de/da" that follows the name. */
type NameCase = "gen" | "dat" | "loc" | "abl" | "acc";
const exchangeCases: Record<string, Record<NameCase, string> & { de: string }> = {
  binance: { gen: "Binance'in", dat: "Binance'e", loc: "Binance'te", abl: "Binance'ten", acc: "Binance'i", de: "de" },
  okx: { gen: "OKX'in", dat: "OKX'e", loc: "OKX'te", abl: "OKX'ten", acc: "OKX'i", de: "de" },
  bybit: { gen: "Bybit'in", dat: "Bybit'e", loc: "Bybit'te", abl: "Bybit'ten", acc: "Bybit'i", de: "de" },
  bitget: { gen: "Bitget'in", dat: "Bitget'e", loc: "Bitget'te", abl: "Bitget'ten", acc: "Bitget'i", de: "de" },
  gate: { gen: "Gate'in", dat: "Gate'e", loc: "Gate'te", abl: "Gate'ten", acc: "Gate'i", de: "de" },
  kucoin: { gen: "KuCoin'in", dat: "KuCoin'e", loc: "KuCoin'de", abl: "KuCoin'den", acc: "KuCoin'i", de: "de" },
  mexc: { gen: "MEXC'nin", dat: "MEXC'ye", loc: "MEXC'de", abl: "MEXC'den", acc: "MEXC'yi", de: "de" },
};
const formsOf = (e: Exchange) => {
  const forms = exchangeCases[e.slug];
  if (!forms) throw new Error(`The Turkish case forms of ${e.name} are missing in src/i18n/compare/tr.ts`);
  return forms;
};
/** `exchangeCase(binance, "loc")` → "Binance'te". */
export const exchangeCase = (e: Exchange, c: NameCase) => formsOf(e)[c];
const gen = (e: Exchange) => exchangeCase(e, "gen");
const dat = (e: Exchange) => exchangeCase(e, "dat");
const loc = (e: Exchange) => exchangeCase(e, "loc");
const abl = (e: Exchange) => exchangeCase(e, "abl");
/** "A, B ve C'de" – in a list only the last name takes the suffix. */
const namesIn = (list: Exchange[], c: NameCase) => joinList(list.map((e, i) => (i === list.length - 1 ? exchangeCase(e, c) : e.name)));
/** "A ve B de" – the clitic follows the last name. */
const namesToo = (list: Exchange[]) => `${names(list)} ${formsOf(list[list.length - 1]).de}`;

/* -------------------------------- vocabulary -------------------------------- */

/** Country names with their locative and accusative (ABD'de, ABD'yi); `short` is the table label. */
export const countryWords: Record<CountryKey, { name: string; short: string; loc: string; acc: string }> = {
  us: { name: "ABD", short: "ABD", loc: "ABD'de", acc: "ABD'yi" },
  uk: { name: "Birleşik Krallık", short: "Birleşik Krallık", loc: "Birleşik Krallık'ta", acc: "Birleşik Krallık'ı" },
  ca: { name: "Kanada", short: "Kanada", loc: "Kanada'da", acc: "Kanada'yı" },
  de: { name: "Almanya", short: "Almanya", loc: "Almanya'da", acc: "Almanya'yı" },
  fr: { name: "Fransa", short: "Fransa", loc: "Fransa'da", acc: "Fransa'yı" },
  nl: { name: "Hollanda", short: "Hollanda", loc: "Hollanda'da", acc: "Hollanda'yı" },
  es: { name: "İspanya", short: "İspanya", loc: "İspanya'da", acc: "İspanya'yı" },
  it: { name: "İtalya", short: "İtalya", loc: "İtalya'da", acc: "İtalya'yı" },
  au: { name: "Avustralya", short: "Avustralya", loc: "Avustralya'da", acc: "Avustralya'yı" },
  jp: { name: "Japonya", short: "Japonya", loc: "Japonya'da", acc: "Japonya'yı" },
  sg: { name: "Singapur", short: "Singapur", loc: "Singapur'da", acc: "Singapur'u" },
  hk: { name: "Hong Kong", short: "Hong Kong", loc: "Hong Kong'da", acc: "Hong Kong'u" },
  in: { name: "Hindistan", short: "Hindistan", loc: "Hindistan'da", acc: "Hindistan'ı" },
  ae: { name: "Birleşik Arap Emirlikleri", short: "BAE", loc: "BAE'de", acc: "BAE'yi" },
};
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `${countryWords[c.key].loc} yaşayan kullanıcılar` }));
type Country = (typeof countries)[number];
/** "ABD'de yaşayan kullanıcılara" */
const residentsDat = (c: Country) => `${c.residents}a`;
/** "ABD, Kanada ve Hollanda'da" – in a list only the last name takes the suffix. */
const countriesIn = (list: Country[], c: "loc" | "acc") => joinList(list.map((it, i) => (i === list.length - 1 ? it[c] : it.name)));

const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Kopya işlem", noun: "kopya işlem (copy trading)" },
  tradingBots: { label: "Trading botları", noun: "trading botları" },
  options: { label: "Opsiyon", noun: "opsiyon işlemleri" },
  demoTrading: { label: "Demo hesap", noun: "demo hesap" },
  margin: { label: "Spot marjin", noun: "Spot marjin işlemleri" },
  p2p: { label: "P2P alım satım", noun: "P2P alım satım" },
  fiat: { label: "Kart / banka ile alım", noun: "kart veya banka havalesiyle kripto alımı" },
  earn: { label: "Earn / staking", noun: "Earn ürünleri" },
  launchpad: { label: "Launchpad / launchpool", noun: "launchpad" },
  web3Wallet: { label: "Web3 cüzdanı", noun: "gözetimsiz (self-custody) Web3 cüzdanı" },
  card: { label: "Kripto kart", noun: "kripto kart" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Kısıtlı",
  regional: "Bölgesel site",
  partial: "Kısmen",
  open: "Kısıtlı değil",
};

/** Words that keep their capital at the start of a quoted text: names, countries, products, abbreviations. */
const keepCapital = new Set([
  ...exchanges.map((e) => e.name),
  ...Object.values(countryWords).map((c) => c.name.split(" ")[0]),
  "Spot",
  "Earn",
  "Simple",
  "Launchpool",
  "Web3",
  "MiCA",
  "Avrupa",
  "Türkiye",
]);
/** Lower-cases the first letter in Turkish (İ → i, I → ı), unless the text starts with a name or an abbreviation. */
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.'’()]/)[0];
  return keepCapital.has(first) || /^[A-ZÇĞİÖŞÜ0-9]{2,}/.test(first) ? s : s.charAt(0).toLocaleLowerCase("tr-TR") + s.slice(1);
};
const ucFirst = (s: string) => s.charAt(0).toLocaleUpperCase("tr-TR") + s.slice(1);

/** "Spot piyasada" / "sürekli vadeli kontratlarda" */
const marketIn = (market: "spot" | "futures") => (market === "spot" ? "Spot piyasada" : "sürekli vadeli kontratlarda");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = ucFirst(marketIn(market));
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${where} ${a.name} ve ${x.name} için standart komisyon aynı: ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} hem maker hem taker emirlerinde daha ucuz`
      : mm !== 0
        ? `${who} maker emirlerinde daha ucuz, taker emirlerinde ücret aynı`
        : `${who} taker emirlerinde daha ucuz, maker emirlerinde ücret aynı`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} maker, ${x.name} taker emirlerinde daha ucuz`
          : `${x.name} maker, ${a.name} taker emirlerinde daha ucuz`;
  return `${where} ${a.name} ${fa.maker} maker / ${fa.taker} taker komisyon alıyor, ${x.name} ise ${fx.maker} / ${fx.taker} – ${verdict}.`;
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
    `${ucFirst(marketIn(market))} ${x.name} ${feePair(fx)} (maker / taker) komisyon alıyor.`,
    lower.length ? `Daha ucuz: ${rates(lower)}.` : `${alts.length} alternatifin hiçbiri daha ucuz değil.`,
    same.length ? `Aynı oranlar: ${names(same)}.` : "",
    higher.length ? `Daha pahalı: ${rates(higher)}.` : "",
    mixed.length ? `Yalnızca tek tarafta daha ucuz: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const what = market === "spot" ? "Spot" : "vadeli işlem";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Daha düşük ${what} komisyonu: ${feePair(fx)} yerine ${feePair(fa)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Daha düşük ${what} maker komisyonu: ${fx.maker} yerine ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`Daha düşük ${what} taker komisyonu: ${fx.taker} yerine ${fa.taker}`);
    else if (m < 0) out.push(`Daha düşük ${what} maker komisyonu: ${fx.maker} yerine ${fa.maker} (ama taker komisyonu daha yüksek)`);
    else if (t < 0) out.push(`Daha düşük ${what} taker komisyonu: ${fx.taker} yerine ${fa.taker} (ama maker komisyonu daha yüksek)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Daha yüksek maksimum kaldıraç: ${leverageOf(x)}x yerine ${leverageOf(a)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Daha yüksek türev açık pozisyonu (open interest): ${formatBn(a.market.openInterestBn)}, ${loc(x)} ise ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Daha fazla türev piyasası: ${a.market.markets}, ${loc(x)} ise ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Unutulan referans kodu sonradan da eklenebiliyor (${lcFirst(a.referral.afterSignupShort.replace(/^Evet – /, ""))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${ucFirst(joinList(notOffered.map((f) => f.noun)))} sunuyor, ${x.name} ise sunmuyor`);
  if (notFound.length) out.push(`${ucFirst(joinList(notFound.map((f) => f.noun)))} sunuyor – ${gen(x)} kendi sitesinde böyle bir ürün bulamadık`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`MiCA kapsamında yetkilendirilmiş bir AEA platformu (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${gen(x)} kapalı olduğu ${countriesIn(openWhere, "loc")} kısıtlama uygulamıyor`);
  if (regionalWhere.length) out.push(`${gen(x)} kapalı olduğu ${countriesIn(regionalWhere, "loc")} bölgesel bir platform üzerinden hizmet veriyor`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${c.name}, ${gen(x)} kendi kısıtlı ülkeler listesinde yer alıyor.`);
  else if (own.status === "partial") parts.push(`${x.name} ${c.loc} kısmi kısıtlama uyguluyor${own.note ? ` (${own.note})` : ""}.`);
  else if (own.status === "regional") parts.push(`${x.name} ${residentsDat(c)} bölgesel bir platform üzerinden hizmet veriyor${own.note ? ` (${own.note})` : ""}.`);
  else parts.push(`${x.name} ${c.acc} kısıtlı ülke olarak listelemiyor.`);
  if (g.open.length) parts.push(`${names(g.open)} ${c.acc} kısıtlı ülke olarak listelemiyor.`);
  if (g.regional.length) parts.push(`${joinList(withNote(g.regional))} ${residentsDat(c)} ayrı bir bölgesel platform üzerinden hizmet veriyor.`);
  if (g.partial.length) parts.push(`Kısmen kısıtlı: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(`${own.status === "restricted" ? namesToo(g.restricted) : names(g.restricted)} ${c.acc} kısıtlı ülkeler arasında sayıyor.`);
  if (!g.open.length && !g.regional.length) parts.push(`${alts.length} alternatifin hiçbiri ${residentsDat(c)} tamamen açık değil.`);
  parts.push("Ülke listeleri değişir ve bir ülkenin listede yer almaması, orada her ürünün sunulduğunun garantisi değildir – belirleyici olan borsanın kendi koşullarıdır.");
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Burada karşılaştırdığımız ${alts.length} ${x.name} alternatifi şunlar: ${names(alts)}. ${alts.map((a) => altInfo(a).pick).join(". ")}. ${alts.length} borsanın hepsi yeni kullanıcılardan kimlik doğrulama (KYC) istiyor ve her birinin kendi kısıtlı ülkeler listesi var; bu yüzden kayıt olmadan önce ülke tablosuna göz at.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `${dat(x)} göre neyin daha iyi olması gerektiğine karar ver`,
      text: `Daha düşük komisyon, daha yüksek kaldıraç, daha fazla coin ya da sadece ülkeni kabul eden bir borsa: bu sayfadaki tablolar, her alternatifin hangi noktalarda ${gen(x)} önüne geçtiğini, hangilerinde geçemediğini gösteriyor.`,
    },
    {
      title: "Borsanın ülkeni kabul ettiğinden emin ol",
      text: "Her borsanın kendi kısıtlı ülkeler listesi var ve bazıları seni ürünleri ve limitleri farklı olan bölgesel bir platforma yönlendiriyor. Kayıt olmadan önce ülke tablosuna bak.",
    },
    {
      title: "Referans bağlantısıyla kayıt ol",
      text: `${names(signupOnly)} referans kodunu yalnızca kayıt sırasında kabul ediyor ya da sonradan eklemenin bir yolunu belgelemiyor; bu yüzden bağlantıyı hesap açılmadan önce kullan.${later.length ? ` ${names(later)} ise kodun belirli koşullarla sonradan eklenmesine izin veriyor.` : ""}`,
    },
    {
      title: "Fon aktarmadan önce kimliğini doğrula",
      text: `${alts.length} alternatifin hepsi yeni kullanıcılardan kimlik doğrulama istiyor ve çoğunda bu adım tamamlanana kadar para yatırma ya da alım satım kilitli kalıyor. Pasaportunu, kimlik kartını veya sürücü belgeni hazır tut.`,
    },
    {
      title: `${loc(x)}ki açık pozisyonlarını kapat`,
      text: `Vadeli işlem ve marjin pozisyonları bir borsadan diğerine taşınamaz. Bunları önce ${loc(x)} kapat ya da pozisyonlar sona erene kadar hesabını koru.`,
    },
    {
      title: "Yeni para yatırma adresine çekim yap",
      text: "Yeni borsadaki para yatırma adresini kopyala, iki tarafta da aynı coini ve aynı ağı seç ve önce küçük bir test tutarı gönder. Yanlış ağ üzerinden yapılan bir transfer kaybolabilir.",
    },
    {
      title: `${x.name} hesabına ne olacağına karar ver`,
      text: `Hesabını tutabilirsin – farklı borsalardaki hesaplar birbirinden bağımsızdır. Komisyon seviyen, referans kaydın ve kullanılmamış ödüllerin ${loc(x)} kalır ve yeni borsaya taşınmaz.`,
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

  const choosing: Faq[] = [
    {
      q: `En iyi ${x.name} alternatifi hangisi?`,
      a: `Tek bir en iyi ${x.name} alternatifi yok – hangisinin uygun olduğu, neden geçmek istediğine bağlı. ${alts.map((a) => altInfo(a).pick).join(". ")}. Bu sayfada ${n} borsanın hepsi komisyon, kaldıraç, ürünler, hangi ülkelerde kullanılabildikleri ve kimlik doğrulama açısından ${x.name} ile karşılaştırılıyor; rakamlar borsaların kendi sitelerinden alındı ve ${date} tarihinde kontrol edildi.`,
    },
    {
      q: `${x.name} benzeri borsalar hangileri?`,
      a: `${dat(x)} en çok benzeyenler: ${names(alts)}. Hepsi, tıpkı ${x.name} gibi, tek hesap altında Spot ve kaldıraçlı vadeli işlem sunan ve yeni kullanıcılar için referans programı yürüten merkezi borsalar. Aralarındaki farklar komisyonlarda, maksimum kaldıraçta, listelenen varlık sayısında ve kabul ettikleri ülkelerde.`,
    },
    {
      q: `En büyük ${x.name} alternatifi hangisi?`,
      a: `CoinMarketCap'teki türev açık pozisyon (open interest) verilerine göre (${prettyDate(site.marketDataDate)}) ${n} alternatifin en ${verb(oi, "büyüğü", "büyükleri")} ${formatBn(oi[0].market.openInterestBn)} ile ${names(oi)}. ${x.name} ise ${formatBn(x.market.openInterestBn)} seviyesindeydi.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Komisyonu en düşük ${x.name} alternatifi hangisi?`,
      a: `${n} alternatif arasında en düşük standart vadeli işlem komisyonu ${namesIn(lowF, "dat")} ait: ${feePair(lowF[0].futuresFees)} (maker / taker). Spot piyasada en ${verb(lowS, "ucuzu", "ucuzları")} ${feePair(lowS[0].spotFees)} ile ${names(lowS)}. ${x.name} vadeli işlemlerde ${feePair(x.futuresFees)}, Spot piyasada ${feePair(x.spotFees)} komisyon alıyor.${lowF.length === 1 ? ` ${lowF[0].feeNote}` : ""} Bunlar standart seviye oranları; VIP seviyeleri ve borsa tokenları bu oranları daha da düşürür.`,
    },
    {
      q: `${abl(x)} daha ucuz borsalar hangileri?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Sürekli vadeli kontratlarda: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}; ${loc(x)} ise ${feePair(x.futuresFees)}.` : `Sürekli vadeli kontratlarda ${n} alternatifin hiçbiri ${gen(x)} ${feePair(x.futuresFees)} oranının altına inmiyor.`} ${cheaperS.length ? `Spot piyasada: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}; ${loc(x)} ise ${feePair(x.spotFees)}.` : `Spot piyasada ise hiçbiri ${gen(x)} ${feePair(x.spotFees)} oranının altına inmiyor.`} Tüm rakamlar standart seviyedeki maker / taker oranlarıdır.`
          : `Standart seviyede ${n} alternatifin hiçbiri ${abl(x)} daha ucuz değil: ${x.name} vadeli işlemlerde ${feePair(x.futuresFees)}, Spot piyasada ${feePair(x.spotFees)} (maker / taker) komisyon alıyor; bunlar bu karşılaştırmadaki en düşük oranlar. Alternatifler başka nedenlerle göz atmaya değer – regülasyon, ürünler ya da kabul ettikleri ülkeler.`,
    },
    {
      q: `En yüksek kaldıracı hangi ${x.name} alternatifi sunuyor?`,
      a: `${n} alternatif arasında en yüksek kaldıracı ${names(hi)} sunuyor: ${hi[0].maxLeverage}. Diğerleri: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. ${gen(x)} kendi sınırı: ${x.maxLeverage}. Yüksek kaldıraç likidasyon riskini ciddi ölçüde artırır.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${c.loc} hangi ${x.name} alternatiflerini kullanabilirim?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `KYC'siz bir ${x.name} alternatifi var mı?`,
      a: `Bu ${n} borsa arasında yok. Hepsi yeni kullanıcılardan kimlik doğrulama istiyor: ${alts.map((a) => `${a.name} – ${lcFirst(a.signup.kycShort)}`).join("; ")}. ${x.name} ise: ${lcFirst(x.signup.kycShort)}.`,
    },
    {
      q: `AB'de MiCA kapsamında düzenlenen ${x.name} alternatifleri hangileri?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} AEA'da yaşayan kullanıcılar için MiCA kapsamında yetkilendirilmiş bir kuruluş belirtiyor.` : `${n} alternatifin hiçbiri MiCA kapsamında yetkilendirilmiş bir kuruluş belirtmiyor.`}${noMica.length ? ` ${names(noMica)} kendi sayfalarında herhangi bir MiCA yetkisinden söz etmiyor.` : ""} ${xInfo.mica ? `${x.name} ise: ${xInfo.mica}.` : `${x.name} ise böyle bir kuruluş belirtmiyor.`} Bölgesel bir platformun genellikle kendine ait ürün yelpazesi, komisyonları ve limitleri olur.`,
    },
    {
      q: `En güvenli ${x.name} alternatifi hangisi?`,
      a: `Hiçbir merkezi borsa risksiz değildir; bu yüzden dürüst bir karşılaştırma, her borsanın yayımladığı bilgilere dayanır. ${alts.map((a) => `${a.name}: rezerv kanıtı – ${altInfo(a).reserves}. ${altInfo(a).fund ? `${altInfo(a).fund}.` : "Belirtilen bir koruma fonu yok."}`).join(" ")} Hangi borsa olursa olsun, orada yalnızca aktif olarak işlem yaptığın fonları tut.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Hangi ${x.name} alternatifleri ${f.noun} sunuyor?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${f.noun} sunuyor.` : `${n} alternatifin hiçbirinin kendi sitesinde ${f.noun} yer almıyor.`}${no.length ? ` ${names(no)} bunu sunmuyor.` : ""}${unknown.length ? ` ${namesIn(unknown, "gen")} ${verb(unknown, "sitesinde", "sitelerinde")} kontrolümüz sırasında böyle bir ürün bulamadık.` : ""} ${own === true ? `${loc(x)} de bu ürün var` : own === false ? `${loc(x)} bu ürün yok` : `${gen(x)} sitesinde böyle bir ürün görünmüyor`}.`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `En çok coin listeleyen ${x.name} alternatifi hangisi?`,
      a: `Borsaların kendi verilerine göre: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}. ${x.name}: ${x.assets}. Borsalar farklı sayıyor – kimi coinleri, kimi işlem çiftlerini sayıyor – bu yüzden rakamlar doğrudan karşılaştırılamaz.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `${abl(x)} başka bir borsaya nasıl geçerim?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Başka bir borsada hesap açarsam ${x.name} hesabımı tutabilir miyim?`,
      a: `Evet. Borsalar ayrı şirketlerdir; bu yüzden birindeki hesap diğerindeki hesabı etkilemez ve ikisini yan yana kullanabilirsin. Taşınmayan şey, hesaba bağlı olan her şeydir: ${x.name} referans kaydın, komisyon seviyen, hoş geldin ödüllerin ve işlem geçmişin ${loc(x)} kalır.`,
    },
    {
      q: `Açık vadeli işlem pozisyonlarımı ${abl(x)} başka bir borsaya taşıyabilir miyim?`,
      a: `Hayır. Bir vadeli işlem pozisyonu yalnızca açıldığı borsada vardır. Geçmek için pozisyonu ${loc(x)} kapat, fonları çek ve diğer borsada yeni bir pozisyon aç – oradaki fiyat ve komisyonlarla.`,
    },
    {
      q: `${x.name} alternatiflerinin referans kodu var mı?`,
      a: `Evet, ${n} borsanın hepsinde var: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Referans kodu kullanmak ücretsizdir ve işlem komisyonlarını artırmaz.`,
    },
    {
      q: `Bir ${x.name} alternatifinde referans kodunu sonradan ekleyebilir miyim?`,
      a: `${alts.map((a) => `${a.name}: ${lcFirst(a.referral.afterSignupShort)}`).join(". ")}. Her borsada en güvenli yol, referans bağlantısıyla kayıt olmaktır.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name}, ${abl(x)} daha iyi mi?`,
      a: `${ahead.length ? `${a.name} şu noktalarda ${gen(x)} önünde: ${ahead.map(lcFirst).join("; ")}.` : `Karşılaştırdığımız noktalarda ${gen(a)} ${x.name} karşısında ölçülebilir bir avantajı yok.`} ${behind.length ? `${gen(x)} önde olduğu noktalar: ${behind.map(lcFirst).join("; ")}.` : `${x.name} bu noktaların hiçbirinde önde değil.`} ${altInfo(a).chooseIf[0]}, ${a.name} sana uygun.`,
    };
  });

  return [
    { id: "choosing", title: `${x.name} alternatifi seçimi`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Komisyonlar ve kaldıraç", faqs: fees },
    { id: "countries", title: "Ülkeler, KYC ve regülasyon", faqs: countryFaqs },
    { id: "features", title: "Ürünler ve coinler", faqs: featureFaqs },
    { id: "switching", title: `${abl(x)} geçiş ve referans kodları`, faqs: switching },
    { id: "versus", title: `${x.name} ve alternatifleri karşılaştırması`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `En iyi ${x.name} alternatifleri hangileri?`,
    a: `${alts.map((a) => altInfo(a).pick).join(". ")}. ${x.name} alternatifleri sayfamız ${alts.length} borsanın hepsini komisyon, kaldıraç, ürünler, hangi ülkelerde kullanılabildikleri ve kimlik doğrulama açısından ${x.name} ile karşılaştırıyor.`,
  };
}

export const tr: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Evet", no: "Hayır", notFound: "Sitesinde bulunamadı" },
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
