import Link from "next/link";
import type { AlternativesTexts } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Texts of the "[Exchange] alternatives" pages in Turkish. Same keys as `./en.tsx`.
 * Wording: "borsa", "komisyon", "referans kodu", informal "sen".
 */

/*
 * Turkish case suffixes of the exchange names (genitive, dative, locative, ablative, accusative), written after an
 * apostrophe and following pronunciation. An unknown name falls back to "<name> borsası…", which needs no apostrophe.
 */
type Forms = { gen: string; dat: string; loc: string; abl: string; acc: string };
const nameForms: Record<string, Forms> = {
  Binance: { gen: "Binance'in", dat: "Binance'e", loc: "Binance'te", abl: "Binance'ten", acc: "Binance'i" },
  OKX: { gen: "OKX'in", dat: "OKX'e", loc: "OKX'te", abl: "OKX'ten", acc: "OKX'i" },
  Bybit: { gen: "Bybit'in", dat: "Bybit'e", loc: "Bybit'te", abl: "Bybit'ten", acc: "Bybit'i" },
  Bitget: { gen: "Bitget'in", dat: "Bitget'e", loc: "Bitget'te", abl: "Bitget'ten", acc: "Bitget'i" },
  Gate: { gen: "Gate'in", dat: "Gate'e", loc: "Gate'te", abl: "Gate'ten", acc: "Gate'i" },
  KuCoin: { gen: "KuCoin'in", dat: "KuCoin'e", loc: "KuCoin'de", abl: "KuCoin'den", acc: "KuCoin'i" },
  MEXC: { gen: "MEXC'nin", dat: "MEXC'ye", loc: "MEXC'de", abl: "MEXC'den", acc: "MEXC'yi" },
};
const forms = (name: string): Forms =>
  nameForms[name] ?? {
    gen: `${name} borsasının`,
    dat: `${name} borsasına`,
    loc: `${name} borsasında`,
    abl: `${name} borsasından`,
    acc: `${name} borsasını`,
  };
const gen = (name: string) => forms(name).gen;
const dat = (name: string) => forms(name).dat;
const loc = (name: string) => forms(name).loc;
const abl = (name: string) => forms(name).abl;
const acc = (name: string) => forms(name).acc;

/** Locative of the country names ("Almanya'da"). A name not listed is built with "için", which needs no suffix. */
const countryIn: Record<string, string> = {
  ABD: "ABD'de",
  "Amerika Birleşik Devletleri": "Amerika Birleşik Devletleri'nde",
  "Birleşik Krallık": "Birleşik Krallık'ta",
  Kanada: "Kanada'da",
  Almanya: "Almanya'da",
  Fransa: "Fransa'da",
  Hollanda: "Hollanda'da",
  "İspanya": "İspanya'da",
  "İtalya": "İtalya'da",
  Avustralya: "Avustralya'da",
  Japonya: "Japonya'da",
  Singapur: "Singapur'da",
  "Hong Kong": "Hong Kong'da",
  Hindistan: "Hindistan'da",
  "Birleşik Arap Emirlikleri": "Birleşik Arap Emirlikleri'nde",
  BAE: "BAE'de",
};

export const tr: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Four wordings, chosen per exchange.
  title: (x, n, shortMonthYear) =>
    fit(
      TITLE_MAX,
      [
        `${x.name} Alternatifleri (${shortMonthYear}): ${n} Borsa Karşılaştırması`,
        `En İyi ${x.name} Alternatifleri (${shortMonthYear}): Komisyon ve Bonus`,
        `${x.name} Alternatifleri ${yearOf(shortMonthYear)}: ${n} Benzer Borsa Karşılaştırması`,
        `${x.name} Alternatifleri: Hangi Borsaya Geçmeli? (${shortMonthYear})`,
      ][variant(4, x.slug)],
      `${x.name} Alternatifleri (${shortMonthYear}): ${n} Borsa`,
      `${x.name} Alternatifleri (${shortMonthYear})`,
    ),
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: ${n} ${x.name}${former ? ` (${former})` : ""} alternatifi komisyon, kaldıraç, KYC, ülke ve referans kodu açısından karşılaştırıldı. Kontrol: ${monthYear}.`,
      `${names}: ${n} ${x.name} alternatifi komisyon, kaldıraç, KYC, ülke ve referans kodu açısından karşılaştırıldı. Kontrol: ${monthYear}.`,
      `${names}: ${n} ${x.name} alternatifi komisyon, kaldıraç, KYC, ülke ve referans kodu açısından karşılaştırıldı.`,
    ),
  keywords: (x, alts, former) => [
    `${x.name} alternatifleri`,
    `${x.name} alternatifi`,
    `${x.name} benzeri borsalar`,
    `en iyi ${x.name} alternatifleri`,
    `${x.name} rakipleri`,
    `düşük komisyonlu ${x.name} alternatifi`,
    `KYC'siz ${x.name} alternatifi`,
    ...(former ? [`${former} alternatifleri`, `${former} alternatifi`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Ana sayfa",
  crumbReferral: (name) => `${name} referans kodu`,
  crumbAlternatives: (name) => `${name} alternatifleri`,
  listLdName: (name) => `${name} alternatifleri`,
  listLdDescription: (name) => `${name} ile karşılaştırılan borsalar, CoinMarketCap'in türev piyasası sıralamasındaki sırayla.`,
  howToLdName: (name) => `${abl(name)} başka bir borsaya nasıl geçilir`,
  howToLdDescription: (name) => `${abl(name)} başka bir kripto para borsasına geçerken neyi, hangi sırayla kontrol etmen gerektiği.`,
  ogTitle: (name) => `${name} Alternatifleri`,
  ogSubtitle: (names) => `${names} – komisyon, kaldıraç, KYC ve ülke karşılaştırması`,

  /* --------------------------------- words --------------------------------- */
  and: () => " ve ",
  noneOfThem: "Hiçbiri",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Kontrol edildi ve güncellendi: ${date}`,
  h1: (name, n) => `${name} Alternatifleri: ${n} Borsa Karşılaştırması`,
  quickAnswer: "Kısa cevap",
  chipsLabel: "Neler karşılaştırılıyor",
  chips: (n, products, countries) => [`${n} borsa`, "Komisyon ve kaldıraç", `${products} ürün`, `${countries} ülke`, "KYC ve regülasyon", "Referans kodları"],
  glanceTitle: (name) => `Bir bakışta ${name} alternatifleri`,
  glanceIntro: "Her birinin en güçlü yanı ve standart vadeli işlem komisyonu (maker / taker).",
  glanceOrder: (marketDate) => `Sıra: CoinMarketCap türev sıralaması, ${marketDate}. Kaldıraçlı işlem yüksek risk taşır.`,
  onThisPage: "Bu sayfada",
  toc: (name, n) => [
    ["at-a-glance", "Bir bakışta"],
    ["why", `Neden ${abl(name)} ayrılmalı?`],
    ["alternatives", `${n} alternatif`],
    ["by-need", "İhtiyaca göre en iyisi"],
    ["fees", "Komisyonlar"],
    ["products", "Ürünler"],
    ["countries", "Ülkeler"],
    ["kyc", "Kimlik doğrulama (KYC)"],
    ["safety", "Regülasyon ve rezervler"],
    ["referral-codes", "Referans kodları"],
    ["switch", "Nasıl geçilir"],
    ["faq", "SSS"],
    ["sources", "Kaynaklar"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `${name} alternatifleri karşılaştırması (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Tabloda ${n} alternatifin yanında ${gen(name)} kendisi de yer alıyor. Komisyonlar, her borsanın yayımladığı standart (VIP olmayan) oranlardır ve maker / taker olarak gösterilir; kaldıraç, borsanın belirttiği en yüksek değerdir; referans kodu ise kayıt olurken kullanabileceğin koddur. Tüm rakamlar ${date} tarihinde ilgili borsanın kendi sitesinden okundu.`,
  comparedCaption: (name, n) => `${name} ve ${n} alternatif: her birinin en güçlü yanı, komisyonlar, kaldıraç ve referans kodu`,
  colExchange: "Borsa",
  colBestFor: "En güçlü yanı",
  colFuturesFees: "Vadeli işlem komisyonu",
  colSpotFees: "Spot komisyonu",
  colMaxLeverage: "Maks. kaldıraç",
  colReferralCode: "Referans kodu",
  colAction: "Eylem",
  forComparison: "karşılaştırma için",
  signUp: "Kayıt ol",
  comparedOrder: (marketDate) => `Alternatiflerin sırası: CoinMarketCap türev sıralaması, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Neden bir ${name} alternatifi aramalısın?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Aşağıdaki noktalarda sınırı {gen(name)} kendisi koyuyor – her biri doğrudan {gen(name)} kendi sayfalarından alındı (bkz.{" "}
      <Link href={sourcesHref}>{name} sayfamızdaki kaynak listesi</Link>). Bunların hiçbiri seni etkilemiyorsa {loc(name)} kalmak gayet iyi bir
      seçim.
    </>
  ),
  stayTitle: (name) => `${name} ne zaman hâlâ doğru seçim?`,
  stayOutro: (name, code, href) => (
    <>
      Kalmaya mı karar verdin? <Link href={href}>{name} referans kodu sayfamızda</Link> {code} kodunu, kayıt adımlarını ve güncel yeni kullanıcı
      ödüllerini bulabilirsin.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `En iyi ${n} ${name} alternatifi: ayrıntılı inceleme`,
  detailIntro: (name) =>
    `Her alternatif aynı ölçütlerle ${name} ile kıyaslanıyor: komisyonlar, kaldıraç, piyasa büyüklüğü, kimlik doğrulama, referans kuralları, ürünler ve kabul edilen ülkeler. “Önde olduğu noktalar” başlıkları altında yalnızca borsaların kendi rakamlarından okunabilen farklar yer alıyor.`,
  rowFuturesFees: "Vadeli işlem komisyonu (maker / taker)",
  rowSpotFees: "Spot komisyonu (maker / taker)",
  rowMaxLeverage: "Maks. kaldıraç",
  rowAssets: "Listelenen varlıklar",
  rowOpenInterest: "Türevlerde açık pozisyon (open interest)",
  rowUsers: "Kullanıcı sayısı",
  rowFounded: "Kuruluş yılı",
  rowKyc: "Kimlik doğrulama",
  rowAddLater: "Referans kodu sonradan eklenebilir mi?",
  rowOffer: "Yeni kullanıcı ödülleri",
  bestFor: (role) => `En güçlü yanı: ${role}`,
  asAlternative: (name) => `${name} alternatifi olarak`,
  chooseIf: (a, x) => `Şu durumlarda ${x} yerine ${acc(a)} seç:`,
  thinkTwiceIf: "Şu durumlarda bir kez daha düşün:",
  whereAhead: (a, x) => `${gen(a)} ${dat(x)} göre önde olduğu noktalar`,
  whereBehind: (x) => `${gen(x)} önde olduğu noktalar`,
  noAdvantage: "Karşılaştırdığımız noktalarda ölçülebilir bir üstünlük yok.",
  codeLabel: (name) => `${name} referans kodu`,
  signUpOn: (name) => `${dat(name)} kayıt ol`,
  linkReferral: (name, code) => `${name} referans kodu ${code}: ödüller, kayıt adımları ve KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: birebir tam karşılaştırma`,
  linkAlternatives: (name) => `${name} alternatifleri`,
  sideBySide: (a, x) => `${a} vs ${x}: tüm rakamlar yan yana`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: komisyonlar, kaldıraç, varlıklar, kimlik doğrulama ve referans kuralları`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `Her ihtiyaç için en iyi ${name} alternatifi`,
  needIntro: (n) =>
    `${n} alternatiften hangisinin öne geçtiği, ne aradığına bağlı. Tablo bunu her ihtiyaç için ayrı yanıtlıyor – kendi sıralamamıza göre değil, rakamlara göre.`,
  needCaption: (name) => `İhtiyaca göre en iyi ${name} alternatifi`,
  needColWant: "Aradığın …",
  needColLook: "Bakman gereken",
  needColWhy: "Neden",
  needLowestFutures: "En düşük vadeli işlem komisyonu",
  needLowestSpot: "En düşük Spot komisyonu",
  needHighestLeverage: "En yüksek kaldıraç",
  needDeepest: "En derin türev piyasası",
  needMostMarkets: "En fazla türev piyasası",
  needMica: "AEA için MiCA kapsamında yetkili platform",
  needAddLater: "Kayıttan sonra eklenebilen referans kodu",
  whyStandardTier: (fees) => `Standart seviyede ${fees} maker / taker`,
  whyOpenInterest: (amount, marketDate) => `${amount} açık pozisyon (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} piyasa (CoinMarketCap, ${marketDate})`,
  whyFeature: "Borsanın kendi sitesinde yer alıyor – tam olarak ne sunulduğu Ürünler bölümünde",
  needNotFound: (n) => `Kontrolümüz sırasında ${n} alternatifin sitelerinde bulunamadı.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Komisyonlar: ${name} ve alternatifleri karşılaştırması`,
  feesIntro:
    "Yedi borsanın hepsi maker/taker modelini kullanıyor: likidite ekleyen limit emirler maker komisyonu, likidite çeken emirler taker komisyonu öder. Tablo standart seviyeyi gösteriyor – yani yeni bir hesabın, herhangi bir VIP seviyesi ya da token indirimi devreye girmeden önce ödediği oranları.",
  feesCaption: (name) => `${name} ve alternatiflerinin standart Spot ve vadeli işlem komisyonları`,
  colFuturesMaker: "Vadeli maker",
  colFuturesTaker: "Vadeli taker",
  colSpotMaker: "Spot maker",
  colSpotTaker: "Spot taker",
  colOtherMarkets: "Diğer piyasalar (maker / taker)",
  feesNote: (date) => `Her borsanın yayımladığı standart (VIP olmayan) oranlar, kontrol tarihi ${date}. Komisyonlar değişir – işlem yapmadan önce borsada teyit et.`,
  cheaperTitle: (name) => `Hangi borsa ${abl(name)} daha ucuz?`,
  tokenTitle: "Token indirimleri ve dipnotlar",
  noTokenDiscount: "Komisyonu borsanın tokenıyla ödeyenlere yönelik yayımlanmış bir indirim yok.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Ürünler: hangi borsa ne sunuyor?",
  productsIntro: (date) =>
    `Onay işareti, borsanın ürünü kendi sitesinde gösterdiği anlamına gelir. Tire ise ${date} tarihinde orada bu ürüne ait bir sayfa bulamadığımızı gösterir – bu, ürünün var olmadığını kanıtlamaz. Sunulan ürünler ülkeye göre değişebilir, özellikle bölgesel platformlarda.`,
  productsCaption: (name) => `${name} ve alternatiflerinin sunduğu ürünler`,
  colProduct: "Ürün",
  productDetailsTitle: "Borsa bazında ürün ayrıntıları",
  productDetails: (name) => `${name}: ürün ayrıntıları`,
  offered: "Sunuluyor",
  notOffered: "Sunulmuyor",
  noPageFound: "Borsanın kendi sitesinde sayfa bulunamadı",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Erişilebilirlik: ülkelere göre ${name} ve alternatifleri`,
  countriesIntro: (count) =>
    `Alternatif aramanın en yaygın nedeni, yaşadığın ülke. Tablo, ${count} ülke için her borsanın kendi kullanım koşullarında ne yazdığını gösteriyor. “Bölgesel site”, borsanın o ülkeye kendi ürünleri, komisyonları ve limitleri olan ayrı bir platform üzerinden hizmet verdiği anlamına gelir.`,
  countriesCaption: (name) => `${name} ve alternatiflerinin ülkelere göre erişilebilirliği`,
  colCountry: "Ülke",
  legendRestricted: "borsanın kendi koşullarına veya duyurularına göre o ülkede yaşayanlara kapalı",
  legendRegional: "ayrı bir bölgesel platform üzerinden hizmet veriliyor",
  legendPartial: "yalnızca bazı ürünler veya bölgeler",
  legendOpen: (date) => `${date} tarihinde kısıtlı ülkeler listesinde değil`,
  countriesNote:
    "“Kısıtlı değil”, o ülkede her ürünün sunulduğunun garantisi değildir. Geçerli olan, kayıt olduğun andaki borsa koşullarıdır; ayrıca bu borsaların tamamı bir kısıtlamayı VPN ya da yanlış bilgilerle aşmayı yasaklar.",
  countryHeading: (name, country) => (countryIn[country] ? `${countryIn[country]} ${name} alternatifleri` : `${country} için ${name} alternatifleri`),
  restrictedTitle: "Borsa bazında kısıtlı ülkeler ve bölgesel platformlar",
  whereNotAvailable: (name) => `${name} hangi ülkelerde kullanılamıyor?`,
  regionalPlatforms: "Bölgesel platformlar:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Kimlik doğrulama: KYC'siz ${name} alternatifi var mı?`,
  kycIntro: (n) =>
    `Bu ${n} alternatif arasında yok. Karşılaştırmadaki her borsa yeni kullanıcılardan kimlik doğrulaması istiyor ve çoğunda doğrulama tamamlanana kadar para yatırma ya da işlem yapma kapalı kalıyor. Farklar, doğrulanmamış bir hesabın yine de neler yapabildiğinde.`,
  kycCaption: (name) => `${name} ve alternatiflerinde kimlik doğrulama`,
  colKyc: "Kimlik doğrulama",
  kycDetailsTitle: "Her borsa kimlik doğrulama hakkında ne diyor?",
  kycQuestion: (name) => `${loc(name)} kimlik doğrulama (KYC) gerekli mi?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regülasyon, rezerv kanıtı ve koruma fonları",
  safetyIntro:
    "Hiçbir merkezi borsa risksiz değildir. Karşılaştırılabilecek olan, her borsanın kendisi hakkında yayımladığı bilgiler: nerede lisanslı olduğu, rezervlerini kanıtlayıp kanıtlamadığı ve acil durumlar için bir fon tutup tutmadığı.",
  safetyCaption: (name) => `${name} ve alternatiflerinin regülasyonu, rezerv kanıtı ve koruma fonları`,
  colLicences: "Borsanın belirttiği lisanslar",
  colReserves: "Rezerv kanıtı",
  colFund: "Koruma fonu",
  noneNamed: "Belirtilmemiş",
  safetyNote: "Rezerv oranları, borsaların belirtilen tarihlerdeki anlık görüntülerine ait kendi rakamlarıdır. Fonlarını yalnızca aktif olarak işlem yaptığın bir borsada tut.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `${name} alternatifleri için referans kodları`,
  codesIntro:
    "Alternatiflerden birinde hesap açacaksan bunu bir referans koduyla yap: ücretsizdir, komisyonlarını asla artırmaz ve borsanın yeni kullanıcı ödüllerinin kilidini açar. En önemlisi son sütun – birkaç borsada unutulan bir kod sonradan eklenemez.",
  codesCaption: (name) => `${name} ve alternatiflerinin referans kodları`,
  colOffer: "Yeni kullanıcı ödülleri",
  colWhere: "Kod nereye girilir",
  colLater: "Sonradan eklenebilir mi?",
  codesRow: (name) => `${name} referans kodu`,
  codesNote: (date) => `Ödüller ${date} tarihinde kontrol edildi. Hoş geldin ödülleri görev bazlıdır, kimlik doğrulama gerektirir ve ülkeye göre değişir.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `${abl(name)} başka bir borsaya nasıl geçilir`,
  switchIntro: "Sırayı korursan geçiş göründüğünden daha az zahmetli: önce hesap, sonra kimlik doğrulama, en son fonlar.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `${name} alternatifleri – SSS`,
  faqIntro: (name, count) =>
    `${name} yerine başka bir borsa kullanmaya dair ${count} soru: hangi borsa hangi ihtiyaca uyar, komisyonlar, ülkeler, kimlik doğrulama ve geçiş.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Kaynaklar: bu rakamlar nereden geliyor?",
  sourcesIntro: (date, marketDate) =>
    `Bu sayfadaki komisyon, kaldıraç, ürün, kimlik doğrulama, ülke, lisans, rezerv ve referans kurallarına dair her bilgi ${date} tarihinde borsaların kendi web sitelerinden ve yardım merkezlerinden okundu. Açık pozisyon (open interest) ve türev piyasası sayıları CoinMarketCap'in türev sıralamasından alındı (${marketDate}). Borsalar koşullarını haber vermeden değiştirir; bu yüzden son sözü aşağıdaki sayfalar söyler.`,
  sourcesSummary: (name, count, focus) => (focus ? `${name}: ${count} resmî sayfa` : `${name}: bu karşılaştırma için incelenen ${count} resmî sayfa`),
  sourcesMore: (name, count, href) => (
    <>
      {gen(name)} komisyonları, kaldıracı, kimlik doğrulaması, referans kuralları ve kısıtlı ülke listesi:{" "}
      <Link href={href}>
        {name} sayfamızdaki {count} kaynağın tamamı
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Diğer borsa karşılaştırmaları",
  headToHeadTitle: (name) => `${name} ile birebir karşılaştırmalar`,
  headToHeadIntro: "Kısa listende bir alternatif mi var? İkili karşılaştırma sayfaları komisyonlara, ürünlere, ülkelere ve referans ödüllerine daha ayrıntılı iniyor:",
  otherAlternativesTitle: "Diğer borsaların alternatifleri",
  otherAlternativesIntro: "Aynı karşılaştırma, diğer borsaların her birinin bakış açısından:",
  referralLink: (name, code) => `${name} referans kodu ${code}`,
  allComparisons: "Tüm borsa karşılaştırmaları",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Risk uyarısı:</strong> Kripto türev ürünleri karmaşık araçlardır. Kaldıraç kazancı da zararı da katlar ve tüm marjinini dakikalar
      içinde kaybedebilirsin. Bu sayfa yalnızca bilgilendirme amaçlıdır ve finansal tavsiye niteliği taşımaz. Bağlantılarımız üzerinden kayıt olursan
      komisyon kazanabiliriz – ayrıntılar için <Link href={disclosureHref}>satış ortaklığı açıklamamıza</Link> bak. Bu, rakamları değiştirmez: rakamlar
      borsaların kendilerine aittir.
    </>
  ),
  ctaTitle: (name) => `${name} alternatifini buldun mu?`,
  ctaText: "Doğrulanmış bir referans koduyla kayıt ol – Spot ve vadeli işlemler için tek hesap, ek maliyet yok.",
  ctaButton: "Tüm referans kodlarını gör",
};
