/**
 * The head-to-head pages ("/tr/<a>-vs-<b>") and the comparison hub ("/tr/borsa-karsilastirma") in Turkish.
 * Same keys as `./en.tsx`, written in Turkish.
 *
 * Wording: "borsa", "komisyon", "referans kodu", "kaldıraç", "vadeli işlemler", informal "sen". Fee rates come
 * from the data in Turkish notation (%0,02). "vs" stays "vs".
 * Exchange and country names take their case suffixes from the tables below (`inCase`, `countryForms`);
 * values from the data that would need a suffix are placed after a colon or in front of a noun instead.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "tr";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- grammar --------------------------------- */

/** Genitive, dative, locative, ablative and accusative of the exchange names. */
type Case = "gen" | "dat" | "loc" | "abl" | "acc";
const exchangeForms: Record<string, Record<Case, string>> = {
  binance: { gen: "Binance'in", dat: "Binance'e", loc: "Binance'te", abl: "Binance'ten", acc: "Binance'i" },
  okx: { gen: "OKX'in", dat: "OKX'e", loc: "OKX'te", abl: "OKX'ten", acc: "OKX'i" },
  bybit: { gen: "Bybit'in", dat: "Bybit'e", loc: "Bybit'te", abl: "Bybit'ten", acc: "Bybit'i" },
  bitget: { gen: "Bitget'in", dat: "Bitget'e", loc: "Bitget'te", abl: "Bitget'ten", acc: "Bitget'i" },
  gate: { gen: "Gate'in", dat: "Gate'e", loc: "Gate'te", abl: "Gate'ten", acc: "Gate'i" },
  kucoin: { gen: "KuCoin'in", dat: "KuCoin'e", loc: "KuCoin'de", abl: "KuCoin'den", acc: "KuCoin'i" },
  mexc: { gen: "MEXC'nin", dat: "MEXC'ye", loc: "MEXC'de", abl: "MEXC'den", acc: "MEXC'yi" },
};
const inCase = (e: Exchange, c: Case) => exchangeForms[e.slug]?.[c] ?? e.name;
/** Question particle after the name: "Binance mi OKX mi?" – front vowel, like the suffixes in the table ("Binance'in", "Binance'e"). */
const particle: Record<string, string> = {};
const either = (a: Exchange, b: Exchange) => `${a.name} ${particle[a.slug] ?? "mi"} ${b.name} ${particle[b.slug] ?? "mi"}`;
/** A list of names with the suffix on the last one only: "Binance ve OKX'te". */
const namesIn = (list: Exchange[], c: Case) => joinList(list.map((e, i) => (i === list.length - 1 ? inCase(e, c) : e.name)));

/** Country names in the nominative and the locative ("ABD'de"). */
const countryForms: Record<CountryKey, { name: string; loc: string }> = {
  us: { name: "ABD", loc: "ABD'de" },
  uk: { name: "Birleşik Krallık", loc: "Birleşik Krallık'ta" },
  ca: { name: "Kanada", loc: "Kanada'da" },
  de: { name: "Almanya", loc: "Almanya'da" },
  fr: { name: "Fransa", loc: "Fransa'da" },
  nl: { name: "Hollanda", loc: "Hollanda'da" },
  es: { name: "İspanya", loc: "İspanya'da" },
  it: { name: "İtalya", loc: "İtalya'da" },
  au: { name: "Avustralya", loc: "Avustralya'da" },
  jp: { name: "Japonya", loc: "Japonya'da" },
  sg: { name: "Singapur", loc: "Singapur'da" },
  hk: { name: "Hong Kong", loc: "Hong Kong'da" },
  in: { name: "Hindistan", loc: "Hindistan'da" },
  ae: { name: "Birleşik Arap Emirlikleri", loc: "BAE'de" },
};

/* ---------------------------------- helpers --------------------------------- */

/**
 * Lower-cases the first letter (Turkish rules: I → ı, İ → i), unless the text starts with a name
 * ("Gate'in …"), an abbreviation ("KYC …", "USDⓈ-M …") or a word with a capital inside ("KuCoin").
 */
const properNames = new Set(exchanges.map((e) => e.name));
const lcFirst = (s: string) => {
  const first = s.split(/[\s–:,;.'’]/)[0];
  const keep = properNames.has(first) || /^[A-ZÇĞİÖŞÜ0-9]{2,}/.test(first) || /\p{Lu}/u.test(first.slice(1));
  return keep ? s : s.charAt(0).toLocaleLowerCase("tr-TR") + s.slice(1);
};
/** "320M+ kayıtlı kullanıcı (Binance'e göre)" → "320M+ kayıtlı kullanıcı"; "… (Bybit API'si)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\([^()]*(?:göre|API['’]si)\)/, "");
const lev = (e: Exchange) => lcFirst(e.maxLeverage);
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} şu konularda önde: ${joinList(rows.map((r) => r.topic))}` : `${e.name} bu noktaların hiçbirinde önde değil`;
  return `Ne ${a.name} ne de ${b.name} her noktada üstün. Bu karşılaştırmadaki ${s.measurable} ölçülebilir noktanın ${s.a.length} tanesinde ${a.name}, ${s.b.length} tanesinde ${b.name} önde${s.tie.length ? `, ${s.tie.length} noktada ise ikisi eşit` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. ${altInfo(a).chooseIf[0]}, ${inCase(a, "acc")} seç. ${altInfo(b).chooseIf[0]}, ${inCase(b, "acc")} seç.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} ve ${b.name} aynı maksimum kaldıracı sunuyor: ${a.name} ${lev(a)}, ${b.name} ${lev(b)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} daha yüksek maksimum kaldıraç sunuyor: ${lev(hi)}. ${inCase(lo, "loc")} ise kaldıraç ${lev(lo)} çıkıyor.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `CoinMarketCap'in türev sıralamasına göre (${prettyDate(site.marketDataDate)}) ${inCase(a, "loc")} ${a.market.markets} piyasada ${formatBn(a.market.openInterestBn)} açık pozisyon vardı, ${inCase(b, "loc")} ise ${b.market.markets} piyasada ${formatBn(b.market.openInterestBn)}. ${inCase(deeper, "gen")} piyasası daha derin; bu da büyük emirlerde genellikle daha dar alış-satış makası (spread) anlamına gelir.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} ${joinList(notOffered.map((f) => f.noun))} sunuyor, ${b.name} sunmuyor.` : "",
    notFound.length ? `${a.name} ${joinList(notFound.map((f) => f.noun))} sunuyor; ${inCase(b, "gen")} kendi sitesinde ise böyle bir ürün bulamadık.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  const place = countryForms[c.key];
  if (status === "restricted") return `${e.name}, ${place.loc} yaşayanlara kapalı${extra}`;
  if (status === "regional") return `${e.name}, ${place.loc} yaşayanlara bölgesel bir platform üzerinden hizmet veriyor${extra}`;
  if (status === "partial") return `${e.name}, ${place.loc} kısmi kısıtlama uyguluyor${extra}`;
  return `${inCase(e, "gen")} kısıtlı ülkeler listesinde ${place.name} yer almıyor`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("tr").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Ülke listeleri değişir ve bir ülkenin listede yer almaması, orada her ürünün sunulduğunu garanti etmez – belirleyici olan borsanın kendi koşullarıdır.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key) ? "ikisinde de var" : has(a, key) ? `yalnızca ${a.name}` : has(b, key) ? `yalnızca ${b.name}` : "iki borsanın sitesinde de bulunamadı";
  const noTokenDiscount = "Böyle bir indirim yayımlanmamış.";
  const noFund = "Koruma fonu belirtilmemiş.";
  const noMica = "kendi sayfalarında MiCA yetkisi almış bir kuruluş belirtmiyor";
  const leverageRisk = "Yüksek kaldıraç likidasyon riskini ciddi şekilde artırır.";

  const verdict: Faq[] = [
    { q: `${a.name} ${particle[a.slug] ?? "mi"} daha iyi, ${b.name} ${particle[b.slug] ?? "mi"}?`, a: versusAnswer(a, b, s) },
    {
      q: `${a.name} ile ${b.name} arasındaki temel fark nedir?`,
      a: `${ia.pick}. ${ib.pick}.${aheadA.length ? ` ${inCase(a, "gen")} en belirgin ölçülebilir avantajları: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` ${inCase(b, "gen")} avantajları: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `${a.name}, ${inCase(b, "abl")} daha mı büyük?`,
      a: `CoinMarketCap'in türev sıralamasına göre (${marketDate}) ${inCase(a, "loc")} ${formatBn(a.market.openInterestBn)} açık pozisyon ve ${formatBn(a.market.volume24hBn)} 24 saatlik işlem hacmi vardı, ${inCase(b, "loc")} ise ${formatBn(b.market.openInterestBn)} ve ${formatBn(b.market.volume24hBn)}. Borsaların kendi verilerine göre kullanıcı sayıları: ${a.name} ${withoutSource(a.users)}, ${b.name} ${withoutSource(b.users)}.`,
    },
    {
      q: `Yeni başlayanlar için hangisi daha iyi: ${either(a, b)}?`,
      a: `İlk hesapta üç şey önemli: kolayca kripto satın alabilmek, pratik yapabilmek ve düşük komisyon. Kartla veya banka havalesiyle kripto alımı: ${state("fiat")}. Demo hesap: ${state("demoTrading")}. Kopya işlem (copy trading): ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Kimlik doğrulama – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `Vadeli işlemler için hangisi daha iyi: ${either(a, b)}?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Hangisinin komisyonu daha düşük, ${either(a, b)}?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Bunlar standart (VIP olmayan) oranlar; VIP seviyeleri ve borsa token indirimleri komisyonu daha da düşürür.`,
    },
    {
      q: `${a.name} ve ${inCase(b, "loc")} komisyonu borsanın kendi tokenıyla ödeyince indirim var mı?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `Hangisi daha yüksek kaldıraç sunuyor, ${either(a, b)}?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${inCase(a, "loc")} mi ${inCase(b, "loc")} mi daha fazla coin listeleniyor?`,
      a: `Borsaların kendi verilerine göre listelenen varlıklar: ${a.name} ${withoutSource(a.assets)}, ${b.name} ${withoutSource(b.assets)}. Borsalar farklı sayıyor – kimi coinleri, kimi işlem çiftlerini sayıyor – bu yüzden iki rakam doğrudan karşılaştırılamaz.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({
      q: `${countryForms[c.key].loc} ${inCase(a, "acc")} veya ${inCase(b, "acc")} kullanabilir miyim?`,
      a: countryPairAnswer(a, b, c),
    })),
    {
      q: `${a.name} ve ${b.name} KYC istiyor mu?`,
      a: `Evet, ikisi de yeni kullanıcılardan kimlik doğrulaması istiyor. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Doğrulama yapmadan işlem yapmak isteyenler için ikisi de bir seçenek değil.`,
    },
    {
      q: `Hangisi daha güvenli, ${either(a, b)}?`,
      a: `Hiçbir merkezi borsa risksiz değildir; bu yüzden dürüst karşılaştırma, her birinin yayımladığı bilgilere bakmaktır. ${a.name}: ${a.regulation}. Rezerv kanıtı – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Rezerv kanıtı – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} İki borsada da yalnızca aktif olarak işlem yaptığın fonları tut.`,
    },
    {
      q: `${a.name} ve ${inCase(b, "gen")} AB'de MiCA lisansı var mı?`,
      a: `${a.name}: ${ia.mica ? `evet – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `evet – ${ib.mica}` : noMica}. Bölgesel bir platformun genellikle kendine ait ürün yelpazesi, komisyonları ve limitleri olur.`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Karşılaştırdığımız ${featureList.length} ürün içinde böyle bir ürün yok: ${inCase(x, "gen")} kendi sitesinde gösterdiği her ürün ${inCase(y, "gen")} sitesinde de yer alıyor.`;
  const products: Faq[] = [
    { q: `${inCase(a, "loc")} olup ${inCase(b, "loc")} olmayan ürünler neler?`, a: onlyA || nothing(a, b) },
    { q: `${inCase(b, "loc")} olup ${inCase(a, "loc")} olmayan ürünler neler?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} ve ${inCase(b, "loc")} kopya işlem, trading botları, opsiyon ve demo hesap var mı?`,
      a: `Kopya işlem (copy trading): ${state("copyTrading")}. Trading botları: ${state("tradingBots")}. Opsiyon: ${state("options")}. Demo hesap: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Yalnızca bir borsanın adı geçen yerlerde, diğer borsanın kendi sitesinde ${prettyDate(site.lastReviewed)} tarihinde bu ürüne ait bir sayfa bulamadık.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `${a.name} ve ${b.name} referans kodları nedir?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. İki kod da ücretsiz ve işlem komisyonlarını artırmaz.`,
    },
    {
      q: `Hangisinin kayıt bonusu daha iyi, ${either(a, b)}?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. İki borsada da hoş geldin ödülleri kimlik doğrulama, para yatırma veya işlem hacmi gibi koşullara bağlıdır ve ülkeye göre değişir; bu yüzden manşetteki rakamı değil, koşulları karşılaştır.`,
    },
    {
      q: `${inCase(a, "loc")} veya ${inCase(b, "loc")} referans kodunu sonradan ekleyebilir miyim?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. İkisinde de güvenli yol, referans bağlantısıyla kayıt olmaktır.`,
    },
    {
      q: `${inCase(a, "acc")} ve ${inCase(b, "acc")} aynı anda kullanabilir miyim?`,
      a: "Evet. İkisi ayrı şirketler; birindeki hesap diğerindeki hesabı etkilemez ve pek çok trader fonlarını iki borsada birden tutar. Komisyon kademeleri, referanslar ve ödüller her hesaba ayrı ayrı bağlıdır ve diğerine aktarılmaz.",
    },
    {
      q: `${inCase(a, "abl")} ${inCase(b, "dat")} kripto nasıl aktarılır?`,
      a: `1. ${b.name} hesabını ${b.referralCode} referans koduyla aç ve kimlik doğrulamasını tamamla. 2. ${inCase(a, "loc")} açık vadeli ve marjin pozisyonlarını kapat – pozisyonlar borsalar arasında taşınamaz. 3. ${inCase(b, "loc")} kullanmak istediğin coin ve ağ için para yatırma adresini kopyala. 4. ${inCase(a, "abl")} bu adrese aynı ağ üzerinden para çek ve önce küçük bir test tutarı gönder: yanlış ağda yapılan bir transfer kaybolabilir. Aynı adımlar ters yönde de geçerlidir.`,
    },
  ];

  return [
    { id: "verdict", title: `${either(a, b)}? Hangisi daha iyi?`, faqs: verdict },
    { id: "fees", title: "Komisyonlar, kaldıraç ve coinler", faqs: fees },
    { id: "countries", title: "Ülkeler, KYC ve güvenlik", faqs: countries },
    { id: "products", title: "Ürünler", faqs: products },
    { id: "referral", title: "Referans kodları ve borsalar arası geçiş", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `En düşük standart vadeli işlem komisyonu ${namesIn(lowF, "loc")} (${feePair(lowF[0].futuresFees)} maker / taker), en yüksek kaldıraç ${namesIn(hi, "loc")} (${leverageOf(hi[0])}x), en derin türev piyasası ise ${namesIn(oi, "loc")} (${formatBn(oi[0].market.openInterestBn)} açık pozisyon). ${names(mica)}, AEA'da yaşayanlar için MiCA yetkisi almış bir platformu olduğunu belirtiyor. Hangi borsanın sana daha uygun olduğu, arasında karar vermeye çalıştığın ikiliye bağlı – aşağıdan seç.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Komisyonu en düşük kripto para borsası hangisi?",
      a: `Standart kademede en düşük vadeli işlem komisyonu ${namesIn(lowF, "loc")}: ${feePair(lowF[0].futuresFees)} (maker / taker); en düşük Spot komisyonu ise ${namesIn(lowS, "loc")}: ${feePair(lowS[0].spotFees)}. Diğer borsalar: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name}: vadeli işlemlerde ${feePair(e.futuresFees)}, Spot'ta ${feePair(e.spotFees)}`)
        .join("; ")}. VIP seviyeleri ve borsa token indirimleri bu oranları daha da düşürür.`,
    },
    {
      q: "En yüksek kaldıracı sunan kripto para borsası hangisi?",
      a: `${names(hi)}: ${lev(hi[0])}. Diğerleri: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. Yüksek kaldıraç likidasyon riskini ciddi şekilde artırır.`,
    },
    {
      q: "Vadeli işlem piyasası en derin kripto para borsası hangisi?",
      a: `CoinMarketCap'in türev sıralamasındaki açık pozisyona göre (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Daha derin bir piyasa, büyük emirlerde genellikle daha dar alış-satış makası (spread) demektir.`,
    },
    {
      q: "Hangi borsaların AEA için MiCA yetkili bir platformu var?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} kendi sayfalarında MiCA yetkisi almış bir kuruluş belirtmiyor. Bölgesel bir platformun genellikle kendine ait ürün yelpazesi, komisyonları ve limitleri olur.`,
    },
    {
      q: "Hangi borsalarda referans kodu kayıttan sonra eklenebilir?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. ${namesIn(signupOnly, "loc")} ise kod yalnızca kayıt sırasında geçerli ya da sonradan eklemenin bir yolu belgelenmemiş – her yerde güvenli yol, referans bağlantısıyla kayıt olmaktır.`,
    },
    {
      q: "Bu karşılaştırmalar nasıl yapılıyor?",
      a: `Her rakam borsanın kendi web sitesinden veya yardım merkezinden alınır – komisyon tabloları, kullanım koşulları, kısıtlı ülke listeleri, ürün sayfaları – ve her sayfa kaynaklarını listeler. Açık pozisyon, işlem hacmi ve türev piyasası sayısı CoinMarketCap'in türev sıralamasından gelir. Bir noktada hangi borsanın önde olduğu bu rakamlardan çıkarılır; kendimize ait bir sıralama yoktur. Güncel inceleme tarihi: ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const tr: VersusText = {
  rows: {
    futuresFees: { label: "Vadeli işlem komisyonu (maker / taker)", topic: "vadeli işlem komisyonu" },
    spotFees: { label: "Spot komisyonu (maker / taker)", topic: "Spot komisyonu" },
    leverage: { label: "Maksimum kaldıraç", topic: "maksimum kaldıraç" },
    openInterest: { label: "Türev açık pozisyonu (open interest)", topic: "açık pozisyon" },
    volume: { label: "24 saatlik türev hacmi", topic: "24 saatlik türev hacmi" },
    markets: { label: "Türev piyasası sayısı", topic: "türev piyasası sayısı" },
    users: { label: "Kullanıcılar (borsanın kendi verisi)", topic: "kullanıcı sayısı" },
    assets: { label: "Listelenen varlıklar (borsanın kendi verisi)", topic: "" },
    founded: { label: "Kuruluş yılı", topic: "" },
    products: { label: (compared) => `Bulunan ürünler (karşılaştırılan ${compared} üründen)`, topic: "ürün yelpazesi" },
    countries: { label: (compared) => `Kapalı olduğu ülkeler (karşılaştırılan ${compared} ülkeden)`, topic: "ülke kapsamı" },
    mica: { label: "MiCA yetkili AEA platformu", topic: "MiCA yetkisi" },
    kyc: { label: "Kimlik doğrulama (KYC)", topic: "" },
    addLater: { label: "Referans kodu sonradan eklenebilir mi?", topic: "referans kodunu sonradan ekleme imkânı" },
    offer: { label: "Yeni kullanıcı ödülleri", topic: "" },
    reserves: { label: "Rezerv kanıtı (Proof of Reserves)", topic: "" },
    fund: { label: "Koruma fonu", topic: "" },
  },
  countOf: (count, of) => `${count} / ${of}`,
  noMica: "Belirtilmemiş",
  noFund: "Belirtilmemiş",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} (${shortMonthYear}): Komisyon, Kaldıraç, KYC ve Bonus`,
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}: vadeli işlem komisyonu ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, kaldıraç ${leverageOf(a)}x vs ${leverageOf(b)}x, ayrıca ürünler, ülkeler, KYC ve referans kodları – resmî veriler, son kontrol: ${monthYear}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      either(a, b),
      `${a.name} vs ${b.name} komisyon`,
      `${a.name} vs ${b.name} vadeli işlem`,
      `${a.name} ${b.name} karşılaştırma`,
      `${a.name} ${inCase(b, "abl")} daha iyi mi`,
      `${b.name} ${inCase(a, "abl")} daha iyi mi`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Ana sayfa",
    crumbHub: "Borsa karşılaştırmaları",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name}, eskiden ${formerName} adıyla bilinen borsadır.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} ve ${b.name}, Spot ve kaldıraçlı vadeli işlemler sunan iki merkezi kripto para borsası; ikisinin de yeni kullanıcılar için bir referans programı var. ${pickA}. ${pickB}.${formerNote ? ` ${formerNote}` : ""} Bu sayfa iki borsanın komisyonlarını, kaldıraçlarını, ürünlerini, hangi ülkelerde kullanılabildiklerini, doğrulama kurallarını ve referans tekliflerini yan yana koyuyor – tüm rakamlar ${date} tarihinde borsaların kendi sitelerinden alındı.`,

    toc: {
      "at-a-glance": "Bir bakışta",
      verdict: "Hangisini seçmeli",
      fees: "Komisyonlar",
      leverage: "Kaldıraç ve derinlik",
      products: "Ürünler",
      countries: "Ülkeler",
      kyc: "Doğrulama (KYC)",
      safety: "Güvenlik ve regülasyon",
      referral: "Referans kodları",
      "pros-cons": "Artılar ve eksiler",
      faq: "SSS",
      sources: "Kaynaklar",
    },
    onThisPage: "Bu sayfada",

    /* Hero */
    updated: (date) => `Kontrol edildi ve güncellendi: ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: Komisyon, Kaldıraç ve Güvenlik Karşılaştırması`,
    quickAnswer: "Kısa cevap",
    keyFigures: "Temel rakamlar",
    chips: (a, b, oiA, oiB) => [
      `Vadeli ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Kaldıraç ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Açık pozisyon ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Referans koduyla kayıt ol",
    boxNote: "İki kod da ücretsiz ve komisyonlarını asla artırmaz.",
    codeLabel: (e) => `${e.name} referans kodu`,
    boxRisk: () => (
      <>
        Kaldıraçlı işlemler yüksek risk taşır. İki borsa da tüm ülkelerde hizmet vermiyor – bkz. <a href="#countries">ülkeler</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: bir bakışta`,
    glanceText: (a, b, s) =>
      `İster ${a.name} vs ${b.name} ister ${b.name} vs ${a.name} diye ara, karşılaştırma aynı. Rakamlarla karara bağlanabilen ${s.measurable} noktanın ${s.a.length} tanesinde ${a.name}, ${s.b.length} tanesinde ${b.name} önde${s.tie.length ? `; ${s.tie.length} noktada ise ikisi eşit` : ""}. Bu noktaların hepsi aynı ağırlıkta değil – aktif bir trader için düşük komisyon, uzun bir coin listesinden daha önemlidir – bu yüzden işlem tarzına uyan sütuna bak.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: komisyonlar, kaldıraç, piyasa büyüklüğü, ürünler, ülkeler, doğrulama ve referans kuralları`,
    compared: "Karşılaştırılan",
    ahead: "Önde",
    level: "Eşit",
    glanceNote: (marketDate, date) =>
      `Komisyonlar: standart (VIP olmayan) kademe. Açık pozisyon, hacim ve piyasa sayısı: CoinMarketCap türev sıralaması, ${marketDate}. "–" iki değerin birbirine göre sıralanamadığını gösterir. Diğer tüm bilgiler ${date} tarihinde borsaların kendi sitelerinden alındı.`,

    /* Verdict */
    verdictTitle: (a, b) => `${either(a, b)}: hangisini seçmelisin?`,
    verdictText:
      "Genel bir kazanan yok – her borsa farklı türde bir trader için tasarlanmış. Aşağıdaki iki kutu, her birinin kime uygun olduğunu ve ölçülebilir olarak hangi noktalarda diğerinin önüne geçtiğini gösteriyor.",
    bestFor: (role) => `Öne çıktığı alan: ${role}`,
    chooseIf: (e) => `Şu durumlarda ${inCase(e, "acc")} seç:`,
    aheadOf: (e, other) => `${inCase(e, "gen")} ${inCase(other, "abl")} önde olduğu noktalar`,
    noAdvantage: "Karşılaştırdığımız noktalarda ölçülebilir bir avantajı yok.",
    thinkTwice: "Şu durumlarda iki kez düşün:",
    codeButton: (e) => `${e.name} referans kodu ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Komisyonlar: ${a.name} vs ${b.name}`,
    feesModel:
      "İki borsa da maker/taker modelini kullanıyor: likidite ekleyen limit emirler maker komisyonu, likidite alan emirler ise taker komisyonu öder.",
    feesCaption: (a, b) => `${a.name} ve ${inCase(b, "gen")} standart Spot ve vadeli işlem komisyonları`,
    exchange: "Borsa",
    futuresMaker: "Vadeli maker",
    futuresTaker: "Vadeli taker",
    spotMaker: "Spot maker",
    spotTaker: "Spot taker",
    otherMarkets: "Diğer piyasalar (maker / taker)",
    feesNote: (date) =>
      `Her borsanın yayımladığı standart (VIP olmayan) oranlar, kontrol tarihi: ${date}. Komisyonlar değişir – işlem yapmadan önce borsada teyit et.`,
    tokenTitle: "Token indirimleri ve dikkat edilecek ayrıntılar",
    noTokenDiscount: "Komisyonu borsa tokenıyla ödemeye yönelik bir indirim yayımlanmamış.",

    /* Leverage */
    leverageTitle: "Kaldıraç ve piyasa derinliği",
    leverageRisk: "Yüksek kaldıraç likidasyon riskini ciddi şekilde artırır – maksimum değer bir tavsiye değil, bir sınırdır.",
    leverageCaption: (a, b) => `${a.name} ve ${inCase(b, "gen")} kaldıraç ve türev piyasası verileri`,
    maxLeverage: "Maksimum kaldıraç",
    openInterest: "Açık pozisyon (open interest)",
    volume24h: "24 saatlik türev hacmi",
    derivativesMarkets: "Türev piyasası sayısı",
    listedAssets: "Listelenen varlıklar (borsanın kendi verisi)",
    leverageNote: (marketDate) =>
      `Piyasa verileri: CoinMarketCap türev sıralaması, ${marketDate}. Borsalar listelenen varlıkları farklı sayar – kimi coinleri, kimi işlem çiftlerini.`,

    /* Products */
    productsTitle: (a, b) => `Ürünler: ${a.name} ve ${b.name} neler sunuyor?`,
    productsSame: (compared) => `İki borsa da karşılaştırdığımız ${compared} ürünün tamamını kendi sitesinde gösteriyor; farklar ayrıntılarda.`,
    productsLegend: (date) =>
      `Onay işareti, borsanın ürünü kendi sitesinde gösterdiği anlamına gelir; tire ise ${date} tarihinde orada bu ürüne ait bir sayfa bulamadığımızı gösterir.`,
    productsCaption: (a, b) => `${a.name} ve ${inCase(b, "gen")} sunduğu ürünler`,
    product: "Ürün",
    offered: "Sunuluyor",
    notOffered: "Sunulmuyor",
    noPage: "Kendi sitesinde sayfa bulunamadı",

    /* Countries */
    countriesTitle: (a, b) => `Ülkeler: ${a.name} ve ${b.name} nerede kullanılabilir?`,
    countriesText: (compared, differing) =>
      `Tablo, ${compared} ülke için her borsanın kendi koşullarında ne yazdığını gösteriyor. İki borsa bu ülkelerin ${differing} tanesinde farklı. "${ct.statusLabel.regional}", borsanın o ülkeye kendi ürünleri, komisyonları ve limitleri olan ayrı bir platform üzerinden hizmet verdiği anlamına gelir.`,
    countriesCaption: (a, b) => `${a.name} ve ${inCase(b, "gen")} ülkelere göre erişilebilirliği`,
    country: "Ülke",
    countriesNote: (date) =>
      `"${ct.statusLabel.open}", ülkenin ${date} tarihinde borsanın kısıtlı ülkeler listesinde yer almadığı anlamına gelir – orada her ürünün sunulduğunu garanti etmez. İki borsa da bir kısıtlamanın VPN ya da sahte bilgilerle aşılmasını yasaklıyor.`,
    differTitle: "İki borsanın ayrıştığı ülkeler",
    differQuestion: (a, b, countryName) => {
      const key = ct.countries.find((c) => c.name === countryName)?.key;
      return key ? `${countryForms[key].loc} ${either(a, b)}?` : `${countryName}: ${either(a, b)}?`;
    },
    neither: (a, b, hrefA, hrefB) => (
      <>
        İkisi de yaşadığın ülkede hizmet vermiyor mu? Alternatif sayfalarındaki ülke tabloları, ülkeni kabul eden diğer borsaları gösteriyor:{" "}
        <Link href={hrefA}>Ülkelere göre {a.name} alternatifleri</Link> · <Link href={hrefB}>Ülkelere göre {b.name} alternatifleri</Link>.
      </>
    ),
    restrictedTitle: "Kısıtlı ülkeler ve bölgesel platformlar",
    whereNot: (e) => `${e.name} hangi ülkelerde kullanılamıyor?`,
    regionalPlatforms: "Bölgesel platformlar:",

    /* Verification */
    kycTitle: (a, b) => `Kimlik doğrulama: ${a.name} vs ${b.name}`,
    kycText:
      "İki borsa da yeni kullanıcılardan kimlik doğrulaması istiyor; yani ikisi de KYC'siz işlem için bir seçenek değil. Fark, doğrulanmamış bir hesabın hâlâ neler yapabildiğinde ve kontrolün nasıl işlediğinde.",
    documents: "Belgeler:",
    minAge: "Minimum yaş:",
    howToRegister: (e) => `${inCase(e, "loc")} adım adım kayıt ve kimlik doğrulama`,

    /* Safety */
    safetyTitle: (a, b) => `Güvenlik ve regülasyon: ${a.name} vs ${b.name}`,
    safetyText:
      "Hiçbir merkezi borsa risksiz değildir. Karşılaştırılabilecek olan, her birinin kendisi hakkında yayımladığı bilgilerdir: nerede lisanslı olduğu, rezervlerini kanıtlayıp kanıtlamadığı ve acil durumlar için bir fon tutup tutmadığı.",
    safetyCaption: (a, b) => `${a.name} ve ${inCase(b, "gen")} regülasyonu, rezerv kanıtı ve koruma fonları`,
    licences: "Borsanın belirttiği lisanslar",
    entity: "İşletici kuruluş",
    reserves: "Rezerv kanıtı",
    fund: "Koruma fonu",
    founded: "Kuruluş yılı",
    isSafe: (e) => `${e.name} güvenilir mi?`,
    safetyDetail: (e) => `${inCase(e, "gen")} güvenliği ve erişilebilirliği hakkında ayrıntılar`,

    /* Referral codes */
    referralTitle: (a, b) => `Referans kodları ve yeni kullanıcı ödülleri: ${a.name} vs ${b.name}`,
    referralText:
      "Hangisini seçersen seç, referans koduyla kayıt ol: hiçbir ücreti yok, komisyonlarını asla artırmaz ve borsanın yeni kullanıcı teklifinin kilidini açar. Son satıra dikkat et – unutulan bir kod her zaman sonradan eklenemez.",
    referralCaption: (a, b) => `${a.name} ve ${inCase(b, "gen")} referans kodları ve yeni kullanıcı ödülleri`,
    referralCodeOf: (e) => `${e.name} referans kodu`,
    referralCode: "Referans kodu",
    newUserOffer: "Yeni kullanıcı ödülleri",
    inviteeReward: "Davet edilen kullanıcı olarak ne alırsın",
    covers: "Tek referansın kapsamı",
    whereCode: "Kodun girileceği yer",
    addLater: "Sonradan eklenebilir mi?",
    referralNote: (date) => `Teklifler ${date} tarihinde kontrol edildi. Hoş geldin ödülleri görev bazlıdır, kimlik doğrulama gerektirir ve ülkeye göre değişir.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `${a.name} ve ${inCase(b, "gen")} artıları ve eksileri`,
    pros: "Artılar",
    cons: "Eksiler",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – Sıkça Sorulan Sorular`,
    faqText: (count, a, b) =>
      `${a.name} ile ${b.name} arasında seçim yaparken sorulan ${count} soru: komisyonlar, kaldıraç, ülkeler, doğrulama, ürünler ve referans kodları.`,

    /* Sources */
    sourcesTitle: "Kaynaklar: bu rakamlar nereden geliyor?",
    sourcesText: (date, marketDate) =>
      `Bu sayfada komisyonlar, kaldıraç, ürünler, doğrulama, ülkeler, lisanslar, rezervler ve referans kuralları hakkında yer alan her şey ${date} tarihinde iki borsanın kendi web sitelerinden ve yardım merkezlerinden alındı. Açık pozisyon, hacim ve türev piyasası sayısı CoinMarketCap'in türev sıralamasından geliyor (${marketDate}). Borsalar koşullarını haber vermeden değiştirir; bu yüzden son söz aşağıdaki sayfalarındır.`,
    officialPages: (e, count) => `${e.name}: ${count} resmî sayfa`,

    /* More comparisons */
    moreTitle: "Diğer karşılaştırmalar",
    against: (e) => `${e.name} ve diğer borsalar`,
    allAlternatives: (e) => `Tüm ${e.name} alternatifleri`,
    allComparisons: "Tüm borsa karşılaştırmaları",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Risk uyarısı:</strong> Kripto türev ürünleri karmaşık araçlardır. Kaldıraç kazancı da kaybı da katlar ve tüm marjinini dakikalar içinde
        kaybedebilirsin. Bu sayfa yalnızca bilgilendirme amaçlıdır ve finansal tavsiye değildir. Bağlantılarımız üzerinden kayıt olursan komisyon
        kazanabiliriz – bkz. <Link href={disclosureHref}>satış ortaklığı açıklamamız</Link>. Bu, rakamları değiştirmez: rakamlar borsaların kendi
        verileridir.
      </>
    ),
    ctaTitle: (a, b) => `${either(a, b)}? Referans koduyla başla`,
    ctaText: "İki borsada da Spot ve vadeli işlemler için tek hesap, ek maliyet olmadan.",
    ctaButton: "Daha fazla borsa karşılaştır",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `Kripto Borsaları Karşılaştırması (${shortMonthYear}): ${pairs} Birebir Kıyaslama`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames} ikişerli: komisyon, kaldıraç, ülkeler, KYC ve referans kodlarında ${pairs} birebir karşılaştırma – resmî veriler, son kontrol: ${monthYear}.`,
    crumbHome: "Ana sayfa",
    crumbPage: "Borsa karşılaştırmaları",
    listName: "Kripto para borsalarının birebir karşılaştırmaları",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Kontrol edildi ve güncellendi: ${date}`,
    h1: (pairs) => `Kripto borsası karşılaştırmaları: ${pairs} birebir kıyaslama`,
    lead: (exchangeCount) =>
      `${exchangeCount} borsa, her ikili aynı noktalarda karşılaştırıldı: komisyonlar, kaldıraç, piyasa derinliği, ürünler, ülkelere göre erişim, kimlik doğrulama, regülasyon ve referans teklifleri. Her karşılaştırma, borsaların kendi sitelerindeki rakamları kullanıyor.`,
    quickAnswer: "Kısa cevap",

    pickTitle: "Karşılaştırmak için iki borsa seç",
    pickText: (others) =>
      `Her kutu bir borsayı diğer ${others} borsayla karşılaştırıyor. Her ikilinin tek bir sayfası var; yani "Binance vs OKX" ve "OKX vs Binance" aynı karşılaştırmaya götürür.`,
    alternativesOf: (e) => `${e.name} alternatifleri`,
    referralCodeOf: (e) => `${e.name} referans kodu`,

    tableTitle: (exchangeCount) => `${exchangeCount} borsa yan yana`,
    tableText: "Her borsanın yeni kullanıcı ödülleri, standart (VIP olmayan) komisyonları, kaldıracı ve piyasa derinliği tek tabloda.",
    tableNote: (date, marketDate) =>
      `Komisyonlar: her borsanın yayımladığı standart kademe, kontrol tarihi: ${date}. Açık pozisyon ve piyasa sayısı: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Bir borsa, diğer tüm borsalara karşı",
    alternativesText: (others) =>
      `İki borsa arasında karar vermiyor, bir yenisini mi arıyorsun? Alternatif sayfaları bir borsayı aynı anda diğer ${others} borsayla karşılaştırıyor ve hangilerinin ülkeni kabul ettiğini gösteriyor.`,

    faqTitle: "Borsa karşılaştırmaları – Sıkça Sorulan Sorular",

    ctaTitle: "Kararını verdin mi? Referans koduyla kayıt ol",
    ctaText: (exchangeCount) => `${exchangeCount} borsanın tamamı için doğrulanmış kodlar – Spot ve vadeli işlemler için tek hesap, ek maliyet olmadan.`,
    ctaButton: "Tüm referans kodlarını gör",
  },
};
