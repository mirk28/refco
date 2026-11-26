import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Interface texts in Turkish. Same keys as `en.tsx`.
 *
 * Wording: "referans kodu" for referral code (main keyword), "borsa" for the exchange, "komisyon" for fees,
 * informal address ("sen"). Numbers in Turkish notation (10.000 USDT, %0,02, 34,1 milyar $).
 * Field and button names of the exchanges stay in English, because only the English interface was checked.
 * Exchange names get their case endings from `endings` (Binance'in, KuCoin'de, MEXC'ye); dates and values
 * from the data are built into sentences so that they need no ending.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B ve C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} ve ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");

/* ------------------------------ case endings of names ------------------------------ */

type Case = "gen" | "dat" | "loc" | "abl" | "acc";
/** Endings as the names are pronounced: genitive, dative, locative, ablative, accusative. */
const endings: Record<string, Record<Case, string>> = {
  Binance: { gen: "in", dat: "e", loc: "te", abl: "ten", acc: "i" },
  OKX: { gen: "in", dat: "e", loc: "te", abl: "ten", acc: "i" },
  Bybit: { gen: "in", dat: "e", loc: "te", abl: "ten", acc: "i" },
  Bitget: { gen: "in", dat: "e", loc: "te", abl: "ten", acc: "i" },
  Gate: { gen: "in", dat: "e", loc: "te", abl: "ten", acc: "i" },
  KuCoin: { gen: "in", dat: "e", loc: "de", abl: "den", acc: "i" },
  MEXC: { gen: "nin", dat: "ye", loc: "de", abl: "den", acc: "yi" },
};
/** Fallback for a name missing above: vowel harmony from the written form. */
function guessEnding(name: string, c: Case): string {
  const s = name.toLocaleLowerCase("tr-TR");
  const v = s.match(/[aeıioöuü]/g)?.pop() ?? "e";
  const a = "aıou".includes(v) ? "a" : "e";
  const i = ({ a: "ı", ı: "ı", o: "u", u: "u", e: "i", i: "i", ö: "ü", ü: "ü" } as Record<string, string>)[v];
  const vowelEnd = /[aeıioöuü]$/.test(s);
  const d = /[çfhkpsşt]$/.test(s) ? "t" : "d";
  return { gen: vowelEnd ? `n${i}n` : `${i}n`, dat: vowelEnd ? `y${a}` : a, loc: `${d}${a}`, abl: `${d}${a}n`, acc: vowelEnd ? `y${i}` : i }[c];
}
const ek = (name: string, c: Case) => `${name}'${endings[name]?.[c] ?? guessEnding(name, c)}`;
/** Binance'in */
const gen = (name: string) => ek(name, "gen");
/** Binance'e */
const dat = (name: string) => ek(name, "dat");
/** Binance'te */
const loc = (name: string) => ek(name, "loc");

/** A number from `toFixed` in Turkish notation: "1234.5" → "1.234,5". */
const trNumber = (fixed: string) => {
  const [int, dec] = fixed.split(".");
  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}${dec ? `,${dec}` : ""}`;
};

export const tr: Dictionary = {
  list,

  format: {
    billions: (n) => `${trNumber(n.toFixed(n >= 10 ? 1 : 2))} milyar $`,
    billionsExact: (n) => `${trNumber(n.toFixed(2))} milyar $`,
    billionsFloor: (n) => `${trNumber(String(Math.floor(n)))}+ milyar $`,
  },

  meta: {
    siteTitle: `${site.name} – Doğrulanmış Kripto Borsası Referans Kodları`,
    siteDescription:
      "Binance, OKX, Bybit, Bitget, Gate, KuCoin ve MEXC için doğrulanmış referans kodları – tek kayıt bağlantısıyla Spot ve vadeli işlemlerde yeni kullanıcı bonusu ve komisyon iadesi al. Komisyonlar, net bilgiler, dürüst artılar ve eksiler.",
  },

  layout: {
    skip: "İçeriğe geç",
    mainNav: "Ana menü",
    nav: { exchanges: "Borsalar", benefits: "Avantajlar", compare: "Karşılaştır", howItWorks: "Nasıl çalışır?", about: "Hakkımızda" },
    getCodes: "Kodları al",
    homeLabel: `${site.name} – ${site.domain} ana sayfası`,
    language: "Dil",
    footerAbout:
      "En büyük kripto para borsaları için doğrulanmış referans kodları – Spot ve vadeli işlemlerde hoş geldin bonusları ve komisyon iadeleri. Resmi kaynaklardan net bilgiler.",
    referralCodes: "Referans kodları",
    referralCodeOf: (name) => `${name} referans kodu`,
    alternatives: "Alternatifler",
    alternativesOf: (name) => `${name} alternatifleri`,
    guides: "Rehberler",
    comparisons: "Borsa karşılaştırmaları",
    howCodesWork: "Referans kodları nasıl çalışır?",
    faq: "SSS",
    about: "Hakkımızda ve yöntemimiz",
    legal: "Yasal",
    imprint: "Künye (yasal bilgiler)",
    privacy: "Gizlilik politikası",
    disclosure: "Satış ortaklığı açıklaması",
    cookieSettings: "Çerez ayarları",
    risk: (
      <>
        <strong>Risk uyarısı:</strong> Kripto türev ürünlerinde kaldıraçlı işlem yapmak son derece risklidir ve yatırdığın paranın tamamını kaybetmene yol
        açabilir. Yalnızca kaybetmeyi göze alabileceğin parayla işlem yap. Bu web sitesindeki hiçbir içerik finansal, yatırım veya vergi tavsiyesi
        değildir.
      </>
    ),
    affiliate: (
      <>
        <strong>Satış ortaklığı açıklaması:</strong> Bazı bağlantılar referans bağlantısıdır. Bu bağlantılar üzerinden kaydolursan, sana hiçbir ek maliyet
        çıkmadan komisyon kazanabiliriz. Bu durum yayımladığımız bilgileri asla etkilemez. Borsa adları ve logoları ilgili sahiplerinin ticari
        markalarıdır; {site.name} bu şirketlerle bağlantılı değildir ve onlar tarafından desteklenmez.
      </>
    ),
  },

  consent: {
    label: "Analitik izni",
    text: (privacyHref) => (
      <>
        <strong>Analitik – karar senin.</strong> Hangi sayfaların okunduğunu görmek için Google Analytics kullanmak istiyoruz. Çerez yerleştirir, kullanım
        verilerini Google&apos;a gönderir ve yalnızca sen izin verirsen başlar. Hangi seçimi yaparsan yap, reklam çerezi kullanılmaz. Ayrıntılar:{" "}
        <Link href={privacyHref}>gizlilik politikası</Link>.
      </>
    ),
    decline: "Reddet",
    allow: "Analitiğe izin ver",
  },

  notFound: {
    title: "Bu sayfa mevcut değil",
    text: "Aradığın referans kodu başka bir yere taşınmış olabilir. Şunlardan birini dene:",
    back: "Ana sayfaya dön",
  },

  og: {
    footer: ["Doğrulanmış bağlantılar", "Komisyonlar ve bilgiler", "Resmi kaynaklar"],
    homeAlt: "RefCo – doğrulanmış kripto borsası referans kodları",
    homeKicker: (monthYear) => `Güncelleme: ${monthYear}`,
    homeTitle: "Doğrulanmış kripto borsası referans kodları.",
    exchangeAlt: "Borsa referans kodu, alternatifler ve karşılaştırmalar – RefCo",
    exchangeKicker: (monthYear) => `Kontrol: ${monthYear}`,
    exchangeTitle: (e) => `${e.name} Referans Kodu`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot ve vadeli işlemler tek bağlantıyla`,
    versusBadge: "Birebir karşılaştırma",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Vadeli komisyon ${feesA} vs ${feesB} · ${leverageA}x vs ${leverageB}x kaldıraç · KYC, ülkeler, bonus`,
  },

  blocks: {
    signUpOn: (name) => `${dat(name)} kaydol`,
    signUp: "Kaydol",
    details: "Ayrıntılar",
    breadcrumb: "Sayfa yolu",
    copy: "Kopyala",
    copied: "Kopyalandı ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Vadeli maker / taker",
    maxLeverage: "Maks. kaldıraç",
    since: "Kuruluş",
    tableCaption: "Kripto para borsalarının yeni kullanıcı ödülü, Spot ve vadeli işlem komisyonları, kaldıraç ve piyasa verilerine göre karşılaştırması",
    exchange: "Borsa",
    newUserOffer: "Yeni kullanıcı ödülü",
    futuresFees: "Vadeli işlem komisyonu (maker / taker)",
    spotFees: "Spot komisyonu",
    openInterest: "Açık pozisyon",
    markets: "Piyasalar",
    action: "İşlem",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) =>
      fit(TITLE_MAX, `Kripto Borsası Referans Kodları ve Bonusları (${monthYear})`, `Kripto Borsası Referans Kodları (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Binance, OKX, Bybit, Bitget, Gate, KuCoin ve MEXC için doğrulanmış referans kodları: tek bağlantıyla yeni kullanıcı bonusu ve komisyon iadesi. ${monthYear} itibarıyla güncel.`,
        `Binance, OKX, Bybit, Bitget, Gate, KuCoin ve MEXC için doğrulanmış referans kodları: tek bağlantıyla yeni kullanıcı bonusu ve komisyon iadesi.`,
      ),
    listName: "Spot ve vadeli işlemler için kripto borsası referans kodları",
    updated: (monthYear) => `Güncelleme: ${monthYear}`,
    h1: (
      <>
        Kripto borsası referans kodları: <span className="hl">doğrulanmış</span> ve açıklamalı.
      </>
    ),
    lead: (
      <>
        Dünyanın en büyük kripto para borsalarında hoş geldin bonuslarından ve komisyon iadelerinden yararlan – Spot <em>ve</em> vadeli işlemler için tek
        referans. Üstelik seçim yapman için gereken bilgiler de burada: komisyonlar, kaldıraç, lisanslar ve dürüst artılar ile eksiler.
      </>
    ),
    browse: "Referans kodlarına göz at",
    seeBenefits: "Avantajlarını gör",
    trust: (date) => [`Kontrol tarihi: ${date}`, "Yalnızca resmi bağlantılar", "Analitik yalnızca onayınla"],
    featured: "Öne çıkan borsalar",
    ticketName: (name) => `${name} referans kodu`,
    ticketTag: "SPOT + VADELİ",
    stats: ["Önde gelen Spot ve vadeli işlem borsası", "Toplam açık pozisyon", "Kapsanan türev piyasası", "En düşük maker komisyonu (MEXC)"],
    marketData: (date) => `Piyasa verileri: CoinMarketCap türev sıralaması, ${date} tarihli anlık görüntü.`,

    benefitsEyebrow: "Avantajların",
    benefitsTitle: `Neden ${site.name} referans koduyla kaydolmalısın?`,
    benefitsLead: "Aynı borsa, aynı komisyonlar – ama doğrudan kaydolursan kaçıracağın yeni kullanıcı avantajlarıyla birlikte.",
    benefits: [
      {
        title: "Hoş geldin bonusları",
        text: "Borsanın yeni kullanıcı kampanyasından yararlan: komisyon iadesi kuponları, vadeli işlem bonusları ve değeri binlerce USDT'yi bulabilen görev ödülleri.",
      },
      {
        title: "Daha düşük işlem ücretleri",
        text: "Borsanın izin verdiği durumlarda referans komisyonunun bir kısmı, her işlemde iade olarak sana geri döner.",
      },
      {
        title: "Spot ve vadeli, tek bağlantı",
        text: "Referans hesabına bağlıdır – Spot, vadeli işlem, marjin ve opsiyonların hepsini kapsar. İkinci bir koda gerek yok.",
      },
      { title: "Sıfır ek maliyet", text: "Referans, ödediğin komisyonu asla yükseltmez. Sen yalnızca kazanırsın – programın masrafını borsa karşılar." },
      { title: "Resmi kayıt sayfaları", text: "Her bağlantı doğrudan borsanın kendi web sitesini açar. Aracı yok, bizimle hiçbir veri paylaşılmaz." },
      {
        title: "En iyisi kayıt sırasında kullanmak",
        text: "Bazı borsalar kodu 30 gün içinde eklemene izin verir, bazıları hiçbir zaman. Hesabını açmadan önce bağlantıyı kullanırsan hiçbir borsada sorun yaşamazsın.",
      },
    ],
    offersCaption: "Borsalara göre yeni kullanıcı ödülleri",
    offersHead: ["Borsa", "Referansla yeni kullanıcı ödülü", "Tek bağlantının kapsamı"],
    claim: "Ödülü al",
    offersNote: (date) =>
      `Kampanyalar ${date} tarihinde kontrol edildi. Hoş geldin ödülleri görev bazlıdır, kimlik doğrulaması gerektirir ve bölgeye göre değişir – güncel koşullar her borsanın kayıt sayfasında yer alır.`,

    exchangesEyebrow: "Referans kodları",
    exchangesTitle: "Borsanı seç",
    exchangesLead: "Her sayfa referansı, komisyonları ve borsanın en çok kime uygun olduğunu anlatır – böylece tek seferde, doğru platformda kaydolursun.",
    sideBySide: "Yan yana",
    notSure: "Hangisini seçeceğinden emin değil misin?",
    notSureText: (count) => `${count} borsanın tamamının komisyonlarını, kaldıraç oranlarını ve açık pozisyonlarını tek tabloda karşılaştır.`,
    compareExchanges: "Borsaları karşılaştır",

    compareTitle: "Kripto borsaları karşılaştırması: Spot ve vadeli işlemler",
    compareLead: "Yeni kullanıcı ödülleri, standart (VIP olmayan) Spot ve vadeli işlem komisyonları, kaldıraç ve piyasa derinliği bir bakışta.",
    compareNote: (reviewed, market) =>
      `Komisyonlar: her borsanın yayımladığı standart seviye, kontrol tarihi: ${reviewed}. Açık pozisyon ve piyasalar: CoinMarketCap, ${market}. Komisyonlar değişir – işlem yapmadan önce borsada teyit et.`,
    versusStrip: {
      title: "İki borsayı birebir karşılaştır",
      text: (pairs, hubHref) => (
        <>
          {pairs} ikili karşılaştırma: komisyonlar, kaldıraç, ürünler, ülkeler, KYC ve referans fırsatları yan yana –{" "}
          <Link href={hubHref}>tüm borsa karşılaştırmaları</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Borsana bir alternatif mi arıyorsun?",
      text: (others) =>
        `Her karşılaştırma bir borsayı diğer ${others} borsayla kıyaslar: komisyonlar, kaldıraç, ürünler, kimlik doğrulama ve kabul ettiği ülkeler.`,
    },

    picksEyebrow: "Kısa cevap",
    picksTitle: "Sana en uygun borsa hangisi?",
    picks: [
      { label: "En derin likidite", slug: "binance", why: "Dünya genelinde en yüksek açık pozisyon ve vadeli işlem hacmi." },
      { label: "Düşük komisyon ve opsiyonlar", slug: "okx", why: "Spot piyasada %0,08 / %0,10, opsiyonlarda %0,03 ve aylık rezerv kanıtı." },
      { label: "Mobilde aktif vadeli işlem", slug: "bybit", why: "Hızlı eşleştirme motoru ve en iyi trading uygulamalarından biri." },
      { label: "Kopya işlem", slug: "bitget", why: "Deneyimli vadeli işlem trader'larını otomatik olarak kopyala." },
      { label: "En fazla altcoin", slug: "gate", why: "5.400+ varlık ve niş token vadeli işlemleri." },
      { label: "Trading botları", slug: "kucoin", why: "Spot ve vadeli işlemler için ücretsiz trading botları." },
      { label: "En düşük komisyon", slug: "mexc", why: "Spot piyasada ve çoğu vadeli kontratta %0 maker komisyonu." },
    ],

    howEyebrow: "Nasıl çalışır?",
    howTitle: "Referans kodunu üç adımda kullan",
    steps: [
      { title: "Bir borsa seç", text: "Yukarıda komisyonları, kaldıracı ve özellikleri karşılaştır; işlem tarzına uyan borsanın sayfasını aç." },
      {
        title: "Bağlantımızla kaydol",
        text: "Referans otomatik olarak eklenir. Başka bir yerden hesap açmadan önce e-posta adresin veya telefon numaranla kaydol.",
      },
      {
        title: "Doğrula ve ödülleri al",
        text: "Kimlik doğrulamasını (KYC) tamamla, hesabını 2FA ile koru ve panelinde gösterilen hoş geldin ödüllerini kontrol et.",
      },
    ],

    trustEyebrow: `Neden ${site.name}?`,
    trustTitle: "Tıklama için değil, güven için tasarlandı",
    trustCards: [
      { title: "Doğrulanmış kampanyalar", text: "Her borsanın yeni kullanıcı kampanyasını kontrol eder, yalnızca gerçekten alabileceğin ödülleri listeleriz." },
      { title: "Güncel ve tarihli bilgiler", text: "Komisyonlar, kaldıraç ve lisanslar düzenli olarak yeniden kontrol edilir; her sayfada inceleme tarihi yazar." },
      { title: "Önce gizlilik", text: "Reklam pikseli yok, reklam çerezi yok. Analitik yalnızca sen izin verirsen çalışır." },
      { title: "Hızlı ve net", text: "Her telefonda anında açılan hafif sayfalar – önce cevap, sonra ayrıntılar." },
      { title: "Dürüst artılar ve eksiler", text: "Yalnızca pazarlama vaatlerini değil; zayıf yönleri, yaşanan olayları ve bölgesel kısıtlamaları da yazıyoruz." },
      { title: "Önce risk", text: "Kaldıraç, yatırdığın parayı çok hızlı eritebilir. Bunu her sayfada açıkça belirtiyoruz." },
    ],

    faqEyebrow: "SSS",
    faqTitle: "Referans kodları – sıkça sorulan sorular",
    faqs: (reviewed) => [
      {
        q: "Kripto borsası referans kodu nedir?",
        a: "Referans kodu (davet kodu ya da referral ID olarak da geçer), yeni açılan bir borsa hesabını o borsayı öneren kişiye veya web sitesine bağlayan kısa bir tanımlayıcıdır. Borsalar bu kodla iki tarafı da ödüllendirir: yeni kullanıcılar genellikle hoş geldin ödülü ya da işlem ücreti indirimi alır, davet eden ise komisyonlardan pay kazanır.",
      },
      {
        q: "Referans kodu kullanmanın avantajları nelerdir?",
        a: "Referansla kaydolan yeni kullanıcılar borsanın hoş geldin kampanyasından yararlanır – örneğin Bybit'te 250 USDT'ye kadar referans ödülü ya da MEXC'de 10.000 USDT'ye kadar yeni kullanıcı ödülü. Davet eden komisyonunu paylaşıyorsa işlem ücretlerinin bir kısmı da geri gelir; Gate'te bir yıl boyunca %10 gibi. Bunun için ekstra hiçbir ücret ödemezsin.",
      },
      {
        q: "Tek referans kodu hem Spot hem vadeli işlemlerde geçerli mi?",
        a: "Evet. Binance, OKX, Bybit, Bitget, Gate, KuCoin ve MEXC'de referans tek bir ürüne değil, hesabına bağlanır. Tek bir kayıt Spot ve vadeli işlemleri kapsar; borsa sunuyorsa marjin, opsiyon veya kopya işlem de buna dahildir.",
      },
      {
        q: "Referans koduyla kaydolursam daha fazla mı öderim?",
        a: "Hayır. Referans bağlantısıyla kaydolmak komisyonlarını asla artırmaz. Borsaya ve bölgene bağlı olarak, referans olmadan alamayacağın bir komisyon indirimi veya hoş geldin bonusu bile kazanabilirsin.",
      },
      {
        q: "Hesabımı açtıktan sonra referans kodu ekleyebilir miyim?",
        a: "Borsaya bağlı. Binance, para yatırmadıysan ve işlem yapmadıysan kayıttan sonraki 30 gün içinde kod bağlamana izin verir; MEXC'de de kayıttan sonraki 30 gün içinde davet edeni kendin bağlayabilirsin. KuCoin'in Yardım Merkezi'nde “Link Referrer” talebi bulunur. Bybit, OKX ve Bitget kodu yalnızca kayıt sırasında kabul eder; Gate ise sonradan kod eklemenin bir yolunu belgelemiyor. En güvenli yol, hesabını açmadan önce bağlantıyı kullanmaktır.",
      },
      {
        q: "Hangi kripto borsasının vadeli işlem komisyonu en düşük?",
        a: `Son incelememizde (${reviewed}) en düşük standart vadeli işlem komisyonları MEXC'deydi: BTCUSDT'de %0 maker ve %0,02 taker. Binance, OKX ve Gate standart seviyede %0,02 maker / %0,05 taker, Bybit %0,02 / %0,055, Bitget ve KuCoin ise %0,02 / %0,06 komisyon alıyor.`,
      },
      {
        q: "Kripto türev işlemleri için en iyi borsa hangisi?",
        a: "Ne tür işlem yaptığına bağlı. Binance en derin likiditeyi sunar, OKX düşük komisyonları opsiyonlarla birleştirir, Bybit hızlı sürekli vadeli (perpetual) işlemler için tasarlanmıştır; Bitget kopya işlemde, Gate altcoin vadeli işlemlerinde, KuCoin botlarda, MEXC ise en düşük komisyonlarda öne çıkar.",
      },
      {
        q: "Bu borsalar ABD'de kullanılabilir mi?",
        a: "Çoğunlukla hayır. Binance, Bybit, Bitget, Gate, KuCoin ve MEXC, ABD'yi kısıtlı veya yasaklı ülkeler arasında sayıyor; OKX ise ABD'deki bazı yargı bölgelerini kısıtlıyor. Birleşik Krallık, Kanada ve AB'de de erişim borsadan borsaya değişiyor – her borsa sayfasında, borsanın kendi kullanım koşullarına göre kısıtlı ülkeler listelenir.",
      },
      {
        q: "Bu bilgiler ne sıklıkla güncelleniyor?",
        a: `Komisyonları, kaldıraç oranlarını, lisansları ve piyasa verilerini düzenli olarak yeniden kontrol ediyoruz. Her sayfa son inceleme tarihini gösterir; mevcut veriler ${reviewed} tarihinde kontrol edildi.`,
      },
    ],
    // No researched country data for Turkey, so there is no extra question about it.
    countryFaq: null,

    ctaTitle: "Hoş geldin bonusunu al",
    ctaText: "Bir borsa seç, doğrulanmış bir referansla kaydol ve tek hesapla Spot ve vadeli işlem yap.",
    ctaButton: "Tüm referans kodlarını gör",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Four wordings, chosen per exchange, so the seven pages do not all start with "<Borsa> Referans Kodu".
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, b = benefit(e), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `${n} Referans Kodu ${c} (${shortMonthYear}): ${b}`, `${n} Referans Kodu ${c} (${shortMonthYear}) – Kayıt Bonusu`, `${n} Referans Kodu ${c} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${c} – ${n} Referans Kodu: ${b}`, `${c}: ${n} Referans Kodu ve Bonusu (${shortMonthYear})`, `${c}: ${n} Referans Kodu (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${b}: ${n} Referans Kodu ${c}`, `${y} Kayıt Bonusu: ${n} Referans Kodu ${c}`, `${n} Referans Kodu ${c} (${y})`),
        () => fit(TITLE_MAX, `${n} Referans Kodu ${c} Nasıl Kullanılır? (${shortMonthYear})`, `${n} Referans Kodu ${c} Nasıl Kullanılır?`, `${n} Referans Kodu ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `${e.name} referans kodu: ${e.referralCode}. ${benefit(e)}. Kod nereye girilir, kayıt adımları, KYC ve komisyonlar – kontrol: ${monthYear}.`,
        `${e.name} referans kodu: ${e.referralCode}. ${benefit(e)}. Kod nereye girilir, kayıt adımları, KYC ve komisyonlar.`,
        `${e.name} referans kodu: ${e.referralCode}. Kod nereye girilir, kayıt adımları, KYC ve komisyonlar – kontrol: ${monthYear}.`,
      ),
    keywords: (e) =>
      [
        `${e.name} referans kodu`,
        `${e.name} referans kodu ${e.referralCode}`,
        `${e.name} ${e.referral.codeName}`,
        `${e.name} referans bağlantısı`,
        `${e.name} davet kodu`,
        `${e.name} kayıt bonusu`,
        `${e.name} nasıl kayıt olunur`,
        `${e.name} KYC`,
        `${e.name} vadeli işlem komisyonları`,
      ].filter((k, i, all) => all.indexOf(k) === i),
    toc: {
      "code-facts": "Bir bakışta kod",
      benefits: "Avantajların",
      "use-code": "Kod nasıl kullanılır?",
      "how-to": "Nasıl kayıt olunur?",
      verification: "Doğrulama (KYC)",
      "key-facts": "Temel bilgiler",
      fees: "Komisyonlar",
      about: "Borsa hakkında",
      "pros-cons": "Artılar ve eksiler",
      "best-for": "Kimler için uygun?",
      safety: "Güvenlik ve erişim",
      faq: "SSS",
      sources: "Kaynaklar",
      alternatives: "Alternatifler ve karşılaştırmalar",
    },
    onThisPage: "Bu sayfada",
    crumbHome: "Ana sayfa",
    crumbCodes: "Referans kodları",
    crumbPage: (e) => `${e.name} referans kodu`,

    /* JSON-LD */
    offerName: (e) => `${e.name} referans kodu ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Tek referans şunları kapsar: ${e.referralCovers.join(", ")}.`,
    offerCategory: "Kripto para borsası kaydı",
    howToName: (e) => `${dat(e.name)} ${e.referralCode} referans koduyla nasıl kayıt olunur?`,
    howToDescription: (e) =>
      `Borsanın belgelediği haliyle ${e.name} kayıt adımları; ${e.referralCode} referans kodunun girildiği yer de dahil.`,

    /* Hero */
    updated: (date) => `Kontrol edildi ve güncellendi: ${date}`,
    h1: (e) => `${e.name} Referans Kodu: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – üstelik {list(e.referralCovers)} için tek referans. Burada neler kazanacağını, işlem yapmanın maliyetini ve{" "}
        {e.name} borsasının sana uygun olup olmadığını öğreneceksin.
      </>
    ),
    quickAnswer: "Kısa cevap",
    highlights: "Öne çıkanlar",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Vadeli ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `${shortLeverage(e)} kaldıraç`,
      `${e.market.markets} türev piyasası`,
      `Kuruluş: ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `${e.name} kaydı`,
    appliedByLink: "Referans bu bağlantı üzerinden otomatik olarak uygulanır.",
    goesToOfficial: (domain) => `Doğrudan resmi ${domain} web sitesine gider.`,
    codeLabel: "Referans kodu",
    noCodeToType: "Kod yazmana gerek yok – bağlantıyla uygulanır",
    officialSite: (domain) => `Resmi site: ${domain}`,
    yourBenefits: "Avantajların",
    freeNeverRaises: "Ücretsiz – referans kullanmak komisyonlarını asla artırmaz",
    qrLabel: (e) => `QR kod: ${e.referralCode} referansıyla ${e.name} uygulaması üzerinden kaydol`,
    preferApp: "Uygulamayı mı tercih edersin?",
    scan: (e) => (
      <>
        {e.name} uygulamasını açmak için telefon kameranla tara
        {e.referralCode ? (
          <>
            {" "}
            – <strong>{e.referralCode}</strong> referansı dahil
          </>
        ) : null}
        . iOS ve Android&apos;de çalışır.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Kaldıraçlı işlem yüksek risklidir. {e.name} tüm ülkelerde sunulmuyor – <a href="#safety">erişim durumuna</a> ya da{" "}
        <Link href={links.alternatives}>{e.name} alternatiflerine</Link> göz at.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `${e.name} referans kodu ${e.referralCode} bir bakışta`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        {monthYear} itibarıyla geçerli {e.name} referans kodu: <strong>{e.referralCode}</strong>. Aşağıdaki tablo, kodun ne işe yaradığını, nereye
        girildiğini ve {gen(e.name)} yeni bir hesaptan neler istediğini özetliyor – her satır {date} tarihinde {gen(e.name)} kendi sayfalarıyla
        karşılaştırılarak kontrol edildi.
      </>
    ),
    codeFactsCaption: (e) => `${e.name} referans kodu ${e.referralCode}: temel bilgiler`,
    codeFacts: (e, date) => [
      [`${e.name} referans kodu`, <strong key="code">{e.referralCode}</strong>],
      [`${loc(e.name)}ki adı`, e.referral.codeName],
      ["Yeni kullanıcı avantajı", benefit(e)],
      ["Nereye girilir?", e.referral.whereShort],
      ["Kayıttan sonra eklenebilir mi?", e.referral.afterSignupShort],
      ["Geçerli olduğu ürünler", e.referralCovers.join(", ")],
      ["Kimlik doğrulama (KYC)", e.signup.kycShort],
      ["Maliyet", "Ücretsiz – komisyonlarını artırmaz"],
      ["Son kontrol", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `${e.name} referans koduyla avantajların`,
    benefitsIntro: (e) => (
      <>
        {e.name} referans kodu <strong>{e.referralCode}</strong> ile kaydolmak sana ekstra bir maliyet getirmez. {gen(e.name)} şu anda yeni hesaplara
        sunduğu avantajlar aşağıda. Aynı kod <strong>{list(e.referralCovers)}</strong> için geçerli – Spot ve vadeli işlemler için ayrı bir koda ihtiyacın
        yok.
      </>
    ),
    offerChecked: (date) => `Yeni kullanıcı ödülü · kontrol: ${date}`,
    appliedWhenRegistering: "bu referansla kaydolduğunda uygulanır",
    noExtraCost: "Ek maliyet yok – referans yüzünden işlem ücretlerin asla artmaz",
    oneReferralCovers: "Tek referansın kapsamı:",
    claimOffer: (e) => `${e.name} hoş geldin bonusunu al`,
    tasksTitle: (e) => `${e.name} hoş geldin bonusu: görevler ve ödüller`,
    tasksCaption: (e) => `${e.name} yeni kullanıcı görevleri ve her birinin ödülü`,
    task: "Görev",
    reward: "Ödül",
    tasksNote: (e, date) =>
      `${gen(e.name)} ${date} tarihli listesine göre. Kampanyalar ülkeden ülkeye değişir ve sık sık güncellenir – geçerli olan, kayıttan sonra hesabında gösterilen koşullardır.`,

    /* How to use the code */
    useCodeTitle: (e) => `${e.name} referans kodu ${e.referralCode} nasıl kullanılır?`,
    whereToEnter: (e) => `${e.name} referans kodu nereye girilir?`,
    forgotCode: "Kodu girmeyi mi unuttun? Kayıttan sonra ekleme",
    asInvited: "Davet edilen kullanıcı olarak ne kazanırsın?",
    interfaceNote: (e) => (
      <>
        Tırnak içindeki alan ve buton adları, kontrol ettiğimiz {gen(e.name)} İngilizce arayüzüne aittir; Türkçe arayüzde farklı adlarla görünebilirler.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `${dat(e.name)} adım adım nasıl kayıt olunur?`,
    howToIntro: (e) => (
      <>
        {e.name} hesabını {list(e.signup.methods)} ile açabilirsin. Aşağıdaki adımlar {gen(e.name)} belgelediği şekliyledir ve{" "}
        <strong>{e.referralCode}</strong> referans kodunun devreye girdiği noktayı da gösterir.
      </>
    ),
    startRegistration: (e) => `${e.name} kaydını başlat`,

    /* Verification */
    kycTitle: (e) => `${e.name} kimlik doğrulama (KYC)`,
    verification: "Doğrulama",
    minAge: "Minimum yaş",
    documents: "Kabul edilen belgeler",

    /* Key facts */
    factsTitle: (e) => `Bir bakışta ${e.name}`,
    founded: "Kuruluş yılı",
    headquarters: "Merkez",
    futuresFees: "Vadeli işlem komisyonu (maker / taker)",
    spotFees: "Spot komisyonu (maker / taker)",
    maxLeverage: "Maksimum kaldıraç",
    assets: "Varlıklar",
    openInterest: "Açık pozisyon",
    volume24h: "24 saatlik türev hacmi",
    users: "Kullanıcılar",
    regulation: "Regülasyon",
    factsNote: (date) =>
      `Açık pozisyon, hacim ve piyasa sayısı: CoinMarketCap türev sıralaması, ${date}. Komisyonlar: inceleme tarihindeki standart seviye.`,

    /* Fees */
    feesTitle: (e) => `${e.name} komisyon oranları: nasıl işler?`,
    feesIntro: (e) =>
      `${e.name} maker/taker modelini kullanır: emir defterine likidite ekleyen emirler (limit emirler) maker komisyonu, defterden likidite çeken emirler (piyasa emirleri) ise taker komisyonu öder. 30 günlük işlem hacmin veya varlıkların arttıkça oranlar düşer.`,
    market: "Piyasa",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Vadeli / perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `${gen(e.name)} yayımladığı standart (VIP olmayan) oranlar, ${date} tarihinde kontrol edildi.`,
    funding: "Sürekli vadeli kontratlardaki fonlama ücretleri borsaya değil, trader'lar arasında ödenir.",
    liveSchedule: (e) => `${gen(e.name)} güncel komisyon tablosuna göz at`,
    feesCompare: (e, others, links) => (
      <>
        Bu oranlar diğer borsalarla kıyaslandığında nerede duruyor? <Link href={`${links.alternatives}#fees`}>{e.name} alternatifleri karşılaştırmamız</Link>,{" "}
        {gen(e.name)} komisyonlarını {list(others)} borsalarının komisyonlarıyla yan yana koyuyor.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `${e.name} hakkında`,
    products: "Ürünler",
    prosConsTitle: (e) => `${e.name} artıları ve eksileri`,
    pros: "Artılar",
    cons: "Eksiler",
    bestForTitle: (e) => `${e.name} kimler için en uygun?`,
    openAccount: (e) => `${e.name} hesabını aç`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Sana uymadı mı? <Link href={links.alternatives}>En iyi {count} {e.name} alternatifine</Link> ve her birinin en çok kime uygun olduğuna bak ya da{" "}
        {e.name} borsasını birebir karşılaştır: <Link href={pairs[0].href}>{pairs[0].label}</Link> ve <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} güvenilir mi?`,
    availability: "Erişim durumu:",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} yaşadığın yerde kullanılamıyor mu? <Link href={`${links.alternatives}#countries`}>{e.name} alternatifleri sayfamızdaki ülke tablosu</Link>
        , diğer borsalardan hangilerinin ülkeni kabul ettiğini gösteriyor.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `${e.name} referans kodu ve kayıt – SSS`,
    faqIntro: (e, count) =>
      `${e.name} referans kodu ${e.referralCode}, hesap açma ve doğrulama, hoş geldin bonusu ve komisyonlar hakkında ${count} soru.`,

    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Kaynaklar: bu bilgiler nereden geliyor?",
    sourcesIntro: (e, date) =>
      `Bu sayfada referans kodu, kayıt, doğrulama, hoş geldin bonusu ve komisyonlarla ilgili her bilgi ${date} tarihinde ${gen(e.name)} kendi web sitesinden ve yardım merkezinden okunmuştur. Borsalar kampanyaları ve komisyonları önceden haber vermeden değiştirir ve farklı ülkelerde farklı koşullar gösterir; bu yüzden son söz aşağıdaki sayfalarındır.`,

    /* Alternatives */
    alternativesTitle: (e) => `${e.name} alternatifleri`,
    alternativesIntro: (e, count, links) => (
      <>
        {e.name} borsasının sana uygun olduğundan emin değil misin? Aşağıda en yakın alternatifleri bulabilirsin; her birinin kendi referanslı kayıt
        bağlantısı var. <Link href={links.alternatives}>Kapsamlı {e.name} alternatifleri karşılaştırması</Link>, {count} borsanın tamamını komisyon,
        kaldıraç, ürünler, doğrulama ve ülke erişimi açısından {e.name} ile kıyaslıyor.
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: birebir karşılaştırmalar`,
    headToHeadIntro: (e) =>
      `${e.name} ile başka bir borsa arasında kararsız mısın? Her ikili için komisyonları, kaldıracı, ürünleri, ülkeleri ve referans fırsatlarını karşılaştıran ayrı bir sayfa var:`,
    compareAll: (e, count) => `${count} ${e.name} alternatifinin tamamını karşılaştır`,
    allComparisons: "Tüm borsa karşılaştırmaları →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Risk uyarısı:</strong> Kripto türevleri karmaşık finansal araçlardır. Kaldıraç kazançları da kayıpları da katlar ve marjinin tamamını
        dakikalar içinde kaybedebilirsin. Bu sayfa yalnızca bilgilendirme amaçlıdır, finansal tavsiye değildir. Bağlantılarımız üzerinden kaydolursan
        komisyon kazanabiliriz – <Link href={disclosureHref}>satış ortaklığı açıklamamıza</Link> göz at.
      </>
    ),
    joinTitle: (e) => `3 dakikada ${dat(e.name)} katıl`,
    joinText: (e) => `${benefit(e)}. Spot ve vadeli işlemler için tek referans.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `${name} referans kodu`,
      signup: (name) => `${name} kayıt ve doğrulama`,
      bonus: (name) => `${name} hoş geldin bonusu ve ödülleri`,
      fees: (name) => `${name} komisyonları ve işlem koşulları`,
      safety: () => "Güvenlik ve erişim",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `${e.name} referans kodu nedir?`,
          a: `${e.name} referans kodu: ${e.referralCode}. ${r.apply} ${gen(e.name)} bu kod için kullandığı ad: ${r.codeName}.`,
        },
        { topic: "referral", q: `${e.name} referans kodu nereye yazılır?`, a: r.whereToEnter },
        { topic: "referral", q: `${e.name} referans kodu kayıttan sonra eklenebilir mi?`, a: r.afterSignup },
        { topic: "referral", q: `${e.name} referans kodu ${e.referralCode} ile ne kazanırım?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `${e.name} referans kodu hem Spot hem vadeli işlemlerde geçerli mi?`,
          a: `Evet. Referans tek bir ürüne değil, ${e.name} hesabına bağlıdır; bu yüzden ${e.referralCode} ile yapılan tek bir kayıt ${list(e.referralCovers)} için geçerlidir.`,
        },
        {
          topic: "referral",
          q: `${e.name} referans kodunu kullanmak ücretli mi?`,
          a: `Hayır. ${e.referralCode} kodunu girmek ücretsizdir ve işlem ücretlerini artırmaz. ${e.name}, referans programını kendi komisyon gelirinden finanse eder.`,
        },
        {
          topic: "signup",
          q: `${dat(e.name)} nasıl kayıt olunur?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${st.title}`).join(" ")} ${list(s.methods)} ile kayıt olabilirsin.`,
        },
        { topic: "signup", q: `${loc(e.name)} kimlik doğrulama (KYC) gerekli mi?`, a: s.kyc },
        { topic: "signup", q: `${e.name} kimlik doğrulama için hangi belgeleri kabul ediyor?`, a: s.documents },
        { topic: "signup", q: `${e.name} hesabı açmak için kaç yaşında olmak gerekiyor?`, a: s.minAge },
        {
          topic: "fees",
          q: `${e.name} komisyon oranları ne kadar?`,
          a: `Standart seviyede ${e.name}, Spot piyasada ${e.spotFees.maker} maker / ${e.spotFees.taker} taker, sürekli vadeli kontratlarda ise ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker komisyon alır.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} hangi ülkelerde kullanılamıyor?`, a: e.restricted },
      ];
    },
  },
};
