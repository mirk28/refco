/**
 * The head-to-head pages ("/id/<a>-vs-<b>") and the comparison hub ("/id/perbandingan-exchange") in Indonesian.
 * Same keys as `./en.tsx`, written natively for readers in Indonesia.
 *
 * Wording: "exchange" (lower-case, no -s), "biaya", "kode referral", "leverage", "Anda" (always capital A); the site is
 * "kami". Spot, futures, margin, maker / taker, open interest, KYC and MiCA stay as traders write them. The pages call
 * themselves "perbandingan langsung", the hub "Perbandingan exchange"; the better value of a row is "Unggul", a tie
 * "Setara". "vs" stays "vs". Names never change and follow their head noun ("kode referral Binance", "di OKX").
 * Generated dates: `prettyDate` gives "16 November 2026", the month of a title "Nov 2026".
 */
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { Exchange, Faq, Fee } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "id";
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

/** First words that keep their capital when a text from the data continues a sentence: "Anda", names, places, products. */
const keepCapital = new Set([
  "Anda",
  "Binance",
  "OKX",
  "Bybit",
  "Bitget",
  "Gate",
  "KuCoin",
  "MEXC",
  "Amerika",
  "Inggris",
  "Kanada",
  "Jerman",
  "Prancis",
  "Belanda",
  "Spanyol",
  "Italia",
  "Australia",
  "Jepang",
  "Singapura",
  "Hong",
  "India",
  "Uni",
  "Wilayah",
  "Eropa",
  "Malta",
  "Austria",
  "Wina",
  "Dubai",
  "Abu",
  "Indonesia",
  "Simple",
  "Launchpool",
  "Jumpstart",
  "Earn",
  "Guardian",
  "Protection",
  "Insurance",
  "Merkle",
  "Copy",
]);
/**
 * A text from the data inside a sentence: lower-cases the first letter of a common first word ("Ya –" → "ya –",
 * "Hingga 150x" → "hingga 150x", "Wajib untuk …" → "wajib untuk …", "Kolom “Referral ID …”" → "kolom “Referral ID …”").
 * "Anda", names, places, products, tokens and acronyms (KYC, BTC, VIP, USDT) keep their capital. Never used on
 * `pick`, `chooseIf`, `thinkTwiceIf` or `stayIf`.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s,.:;()–]/)[0];
  if (!first || !/^[A-Z]/.test(first) || keepCapital.has(first) || first.slice(1) !== first.slice(1).toLowerCase()) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};
/** "320 juta+ pengguna terdaftar (menurut Binance)" → without the bracket; "390 koin, 509 pasangan spot (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:menurut [^()]*|[^()]*\bAPI)\)/, "");
/** A data text that code closes itself, without a final full stop (`pick`, `chooseIf`). */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** Counts in a sentence with the Indonesian thousands dot ("1.000"). */
const count = (n: number) => n.toLocaleString("id-ID");
/** A fee pair with the labels before the rates: "maker 0,02% / taker 0,05%". */
const makerTaker = (f: Fee) => `maker ${f.maker} / taker ${f.taker}`;
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Leverage tinggi sangat memperbesar risiko likuidasi.";
const regionalNote = "Platform regional biasanya punya rangkaian produk, biaya, dan batas sendiri.";
const cmc = "peringkat derivatif CoinMarketCap";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} unggul dalam ${joinList(rows.map((r) => r.topic))}` : `${e.name} tidak unggul di poin mana pun`;
  return `Baik ${a.name} maupun ${b.name} tidak lebih baik di semua poin. Dari ${s.measurable} poin terukur dalam perbandingan ini, ${a.name} unggul di ${s.a.length} poin dan ${b.name} di ${s.b.length} poin${s.tie.length ? `, sementara ${s.tie.length} poin setara` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Pilih ${a.name} jika ${bare(altInfo(a).chooseIf[0])}. Pilih ${b.name} jika ${bare(altInfo(b).chooseIf[0])}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${a.name} dan ${b.name} menawarkan leverage maksimum yang sama: ${a.name} ${lcFirst(a.maxLeverage)}, ${b.name} ${lcFirst(b.maxLeverage)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} menawarkan leverage maksimum yang lebih tinggi – ${lcFirst(hi.maxLeverage)} – dibanding ${lcFirst(lo.maxLeverage)} di ${lo.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `Dalam ${cmc} (${prettyDate(site.marketDataDate)}), ${a.name} mencatat open interest ${formatBn(a.market.openInterestBn)} di ${count(a.market.markets)} pasar dan ${b.name} ${formatBn(b.market.openInterestBn)} di ${count(b.market.markets)} pasar. Pasar ${deeper.name} lebih dalam, dan itu biasanya berarti spread yang lebih sempit untuk order besar.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} menawarkan ${joinList(notOffered.map((f) => f.noun))}, sedangkan ${b.name} tidak.` : "",
    notFound.length ? `${a.name} menawarkan ${joinList(notFound.map((f) => f.noun))}; di situs resmi ${b.name} kami tidak menemukan produk seperti itu.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} tidak melayani ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} melayani ${c.residents} lewat platform regional${extra}`;
  if (status === "partial") return `${e.name} membatasi sebagian layanan di ${c.name}${extra}`;
  return `${e.name} tidak mencantumkan ${c.name} dalam daftar negara yang dibatasi`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("id").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Daftar negara bisa berubah, dan negara yang tidak tercantum bukan jaminan bahwa semua produk tersedia di sana – yang menentukan adalah ketentuan exchange itu sendiri.`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key)
      ? "tersedia di kedua exchange"
      : has(a, key)
        ? `hanya di ${a.name}`
        : has(b, key)
          ? `hanya di ${b.name}`
          : "tidak ditemukan di situs kedua exchange";
  const noTokenDiscount = "Diskon seperti ini tidak dipublikasikan.";
  const noFund = "Tidak ada dana perlindungan yang disebutkan.";
  const noMica = "tidak menyebutkan entitas berizin MiCA di situs resminya";

  const verdict: Faq[] = [
    { q: `${a.name} atau ${b.name}: mana yang lebih baik?`, a: versusAnswer(a, b, s) },
    {
      q: `Apa perbedaan utama ${a.name} dan ${b.name}?`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` Keunggulan terukur ${a.name} yang paling jelas: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Keunggulan ${b.name}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `Apakah ${a.name} lebih besar dari ${b.name}?`,
      a: `Dalam ${cmc} (${marketDate}), ${a.name} mencatat open interest ${formatBn(a.market.openInterestBn)} dan volume 24 jam ${formatBn(a.market.volume24hBn)}, sedangkan ${b.name} ${formatBn(b.market.openInterestBn)} dan ${formatBn(b.market.volume24hBn)}. Menurut angka masing-masing exchange, ${a.name} memiliki ${lcFirst(withoutSource(a.users))} dan ${b.name} ${lcFirst(withoutSource(b.users))}.`,
    },
    {
      q: `${a.name} atau ${b.name}: mana yang lebih cocok untuk pemula?`,
      a: `Untuk akun pertama, ada tiga hal yang penting: cara mudah membeli kripto, sarana untuk berlatih, dan biaya rendah. Pembelian dengan kartu atau transfer bank: ${state("fiat")}. Trading demo: ${state("demoTrading")}. Copy trading: ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Verifikasi identitas – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} atau ${b.name}: mana yang lebih baik untuk trading futures?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} atau ${b.name}: mana yang biayanya lebih rendah?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Ini biaya standar (non-VIP); level VIP dan token exchange menurunkannya lebih jauh.`,
    },
    {
      q: `Apakah ${a.name} dan ${b.name} memberi diskon jika biaya dibayar dengan token exchange itu sendiri?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} atau ${b.name}: mana yang menawarkan leverage lebih tinggi?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} atau ${b.name}: mana yang menyediakan lebih banyak koin?`,
      a: `Menurut angka masing-masing exchange, ${a.name} menyediakan ${lcFirst(withoutSource(a.assets))} dan ${b.name} ${lcFirst(withoutSource(b.assets))}. Cara menghitungnya berbeda – ada yang menghitung koin, ada yang menghitung pasangan trading – sehingga kedua angka ini tidak bisa dibandingkan secara langsung.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `Bisakah saya memakai ${a.name} atau ${b.name} di ${c.name}?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `Apakah ${a.name} dan ${b.name} mewajibkan KYC?`,
      a: `Ya, kedua exchange meminta pengguna baru memverifikasi identitas. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Keduanya bukan pilihan untuk trading tanpa verifikasi.`,
    },
    {
      q: `${a.name} atau ${b.name}: mana yang lebih aman?`,
      a: `Tidak ada exchange terpusat yang bebas risiko, jadi perbandingan yang jujur hanya bisa didasarkan pada apa yang dipublikasikan masing-masing exchange. ${a.name}: ${a.regulation}. Bukti cadangan (proof of reserves) – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Bukti cadangan – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Di exchange mana pun, simpan hanya dana yang aktif Anda gunakan untuk trading.`,
    },
    {
      q: `Apakah ${a.name} dan ${b.name} berizin MiCA di Uni Eropa?`,
      a: `${a.name}: ${ia.mica ? `ya – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `ya – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Tidak ada di antara ${featureList.length} produk yang kami bandingkan: semua produk yang ditampilkan ${x.name} di situs resminya juga ada di ${y.name}.`;
  const products: Faq[] = [
    { q: `Apa yang ditawarkan ${a.name}, tetapi tidak ada di ${b.name}?`, a: onlyA || nothing(a, b) },
    { q: `Apa yang ditawarkan ${b.name}, tetapi tidak ada di ${a.name}?`, a: onlyB || nothing(b, a) },
    {
      q: `Apakah ${a.name} dan ${b.name} menyediakan copy trading, bot trading, opsi, dan trading demo?`,
      a: `Copy trading: ${state("copyTrading")}. Bot trading: ${state("tradingBots")}. Opsi: ${state("options")}. Trading demo: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Jika hanya satu exchange yang disebut, kami tidak menemukan halaman produk itu di situs resmi exchange yang lain pada ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Apa kode referral ${a.name} dan ${b.name}?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Kedua kode gratis dipakai dan tidak menaikkan biaya trading Anda.`,
    },
    {
      q: `${a.name} atau ${b.name}: mana yang bonus pendaftarannya lebih baik?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Hadiah selamat datang di kedua exchange terikat pada syarat seperti verifikasi identitas, deposit, atau volume trading dan berbeda menurut negara, jadi bandingkan syaratnya, bukan angka promosinya.`,
    },
    {
      q: `Bisakah saya menambahkan kode referral setelah mendaftar di ${a.name} atau ${b.name}?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Cara yang aman di kedua exchange: mendaftar lewat tautan referral.`,
    },
    {
      q: `Bisakah saya memakai ${a.name} dan ${b.name} sekaligus?`,
      a: "Ya. Keduanya perusahaan terpisah, jadi akun di satu exchange tidak memengaruhi akun di exchange lain, dan banyak trader menyimpan dana di dua exchange. Level biaya, referral, dan hadiah terikat pada masing-masing akun dan tidak ikut berpindah.",
    },
    {
      q: `Bagaimana cara memindahkan kripto dari ${a.name} ke ${b.name}?`,
      a: `1. Buka akun ${b.name} dengan kode referral ${b.referralCode} dan selesaikan verifikasi identitas. 2. Tutup posisi futures dan margin yang masih terbuka di ${a.name} – posisi tidak bisa dipindahkan dari satu exchange ke exchange lain. 3. Di ${b.name}, salin alamat deposit untuk koin dan jaringan yang ingin Anda pakai. 4. Tarik dana dari ${a.name} ke alamat itu di jaringan yang sama, dan kirim jumlah kecil sebagai uji coba lebih dulu: transfer di jaringan yang salah bisa hilang. Langkah yang sama berlaku untuk arah sebaliknya.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} atau ${b.name}: mana yang lebih baik?`, faqs: verdict },
    { id: "fees", title: "Biaya, leverage, dan koin", faqs: fees },
    { id: "countries", title: "Negara, KYC, dan keamanan", faqs: countries },
    { id: "products", title: "Produk", faqs: products },
    { id: "referral", title: "Kode referral dan cara pindah exchange", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} memiliki biaya futures standar terendah (${makerTaker(lowF[0].futuresFees)}), ${names(hi)} leverage tertinggi (${leverageOf(hi[0])}x), dan ${names(oi)} pasar derivatif terdalam (open interest ${formatBn(oi[0].market.openInterestBn)}). ${names(mica)} menyebutkan platform berizin MiCA untuk penduduk Wilayah Ekonomi Eropa (EEA). Exchange mana yang lebih baik untuk Anda bergantung pada pasangan yang sedang Anda pertimbangkan – pilih di bawah.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Exchange kripto mana yang biayanya paling rendah?",
      a: `Di level standar, ${names(lowF)} memiliki biaya futures terendah, yaitu ${makerTaker(lowF[0].futuresFees)}, dan ${names(lowS)} biaya spot terendah, yaitu ${feePair(lowS[0].spotFees)}. Exchange lainnya: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} untuk futures dan ${feePair(e.spotFees)} untuk spot`)
        .join("; ")}. Level VIP dan token exchange menurunkan tarif ini lebih jauh.`,
    },
    {
      q: "Exchange kripto mana yang menawarkan leverage tertinggi?",
      a: `${names(hi)}: ${lcFirst(hi[0].maxLeverage)}. Exchange lainnya: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "Exchange kripto mana yang memiliki pasar futures terdalam?",
      a: `Diukur dari open interest dalam ${cmc} (${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Pasar yang lebih dalam biasanya berarti spread yang lebih sempit untuk order besar.`,
    },
    {
      q: "Exchange mana yang memiliki platform berizin MiCA untuk Wilayah Ekonomi Eropa (EEA)?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} tidak menyebutkan entitas berizin MiCA di situs resmi masing-masing. ${regionalNote}`,
    },
    {
      q: "Exchange mana yang memungkinkan saya menambahkan kode referral setelah mendaftar?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. Di ${names(signupOnly)}, kode hanya berlaku saat pendaftaran atau tidak ada cara terdokumentasi untuk menambahkannya kemudian – cara yang aman di semua exchange: mendaftar lewat tautan referral.`,
    },
    {
      q: "Bagaimana perbandingan ini dibuat?",
      a: `Setiap angka dibaca di situs resmi atau pusat bantuan exchange itu sendiri – tabel biaya, ketentuan, daftar negara yang dibatasi, halaman produk – dan setiap halaman mencantumkan sumbernya. Open interest, volume, dan jumlah pasar derivatif berasal dari ${cmc}. Exchange mana yang unggul di suatu poin dibaca langsung dari angka tersebut; kami tidak membuat peringkat sendiri. Tanggal pemeriksaan saat ini: ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const id: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "unggul dalam" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Biaya futures (maker / taker)", topic: "biaya futures" },
    spotFees: { label: "Biaya spot (maker / taker)", topic: "biaya spot" },
    leverage: { label: "Leverage maksimum", topic: "leverage maksimum" },
    openInterest: { label: "Open interest derivatif", topic: "open interest" },
    volume: { label: "Volume derivatif 24 jam", topic: "volume derivatif 24 jam" },
    markets: { label: "Pasar derivatif", topic: "jumlah pasar derivatif" },
    users: { label: "Pengguna (menurut exchange)", topic: "jumlah pengguna" },
    assets: { label: "Aset terdaftar (menurut exchange)", topic: "" },
    founded: { label: "Tahun berdiri", topic: "" },
    products: { label: (compared) => `Produk yang ditemukan (dari ${compared} yang dibandingkan)`, topic: "ragam produk" },
    countries: { label: (compared) => `Negara yang dibatasi (dari ${compared} yang dibandingkan)`, topic: "cakupan negara" },
    mica: { label: "Platform EEA berizin MiCA", topic: "izin MiCA" },
    kyc: { label: "Verifikasi identitas (KYC)", topic: "" },
    addLater: { label: "Kode referral bisa ditambahkan belakangan?", topic: "penambahan kode referral setelah mendaftar" },
    offer: { label: "Penawaran pengguna baru", topic: "" },
    reserves: { label: "Bukti cadangan", topic: "" },
    fund: { label: "Dana perlindungan", topic: "" },
  },
  countOf: (count, of) => `${count} dari ${of}`,
  noMica: "Tidak disebutkan",
  noFund: "Tidak disebutkan",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    // Tiga variasi, tetap per pasangan.
    title: (a, b, shortMonthYear) =>
      fit(
        TITLE_MAX,
        [
          `${a.name} vs ${b.name} (${shortMonthYear}): Biaya, Leverage & Bonus`,
          `${a.name} atau ${b.name}? Perbandingan Biaya, Leverage & KYC`,
          `${a.name} vs ${b.name}: Mana yang Lebih Baik di ${yearOf(shortMonthYear)}?`,
        ][variant(3, a.slug, b.slug)],
        `${a.name} vs ${b.name} (${shortMonthYear})`,
      ),
    description: (a, b, monthYear) =>
      fit(
        DESC_MAX,
        `${a.name} vs ${b.name}: biaya futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, produk, negara, KYC, dan kode referral. Diperiksa ${monthYear}.`,
        `${a.name} vs ${b.name}: biaya futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, negara, KYC, dan kode referral. Diperiksa ${monthYear}.`,
        `${a.name} vs ${b.name}: biaya futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, leverage ${leverageOf(a)}x vs ${leverageOf(b)}x, produk, negara, KYC, dan kode referral.`,
      ),
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} atau ${b.name}`,
      `biaya ${a.name} vs ${b.name}`,
      `futures ${a.name} vs ${b.name}`,
      `perbandingan ${a.name} dan ${b.name}`,
      `apakah ${a.name} lebih baik dari ${b.name}`,
      `apakah ${b.name} lebih baik dari ${a.name}`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Beranda",
    crumbHub: "Perbandingan exchange",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} sebelumnya dikenal dengan nama ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} dan ${b.name} sama-sama exchange terpusat untuk trading spot dan futures dengan leverage, dan keduanya menjalankan program referral untuk pengguna baru. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} Perbandingan langsung ini menyandingkan biaya, leverage, produk, ketersediaan per negara, aturan verifikasi, dan penawaran referral kedua exchange – semua angka dibaca di situs resmi masing-masing exchange pada ${date}.`,

    toc: {
      "at-a-glance": "Ringkasan",
      verdict: "Mana yang dipilih",
      fees: "Biaya",
      leverage: "Leverage & kedalaman",
      products: "Produk",
      countries: "Negara",
      kyc: "Verifikasi (KYC)",
      safety: "Keamanan & regulasi",
      referral: "Kode referral",
      "pros-cons": "Kelebihan & kekurangan",
      faq: "FAQ",
      sources: "Sumber",
    },
    onThisPage: "Di halaman ini",

    /* Hero */
    updated: (date) => `Diperiksa dan diperbarui ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: Perbandingan Biaya, Leverage, dan Keamanan`,
    quickAnswer: "Jawaban singkat",
    keyFigures: "Angka utama",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Daftar dengan kode referral",
    boxNote: "Kedua kode gratis dan tidak pernah menaikkan biaya Anda.",
    codeLabel: (e) => `Kode referral ${e.name}`,
    boxRisk: () => (
      <>
        Trading dengan leverage berisiko tinggi. Kedua exchange ini tidak tersedia di semua negara – lihat bagian <a href="#countries">negara</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: ringkasan`,
    glanceText: (a, b, s) =>
      `Entah Anda mencari “${a.name} vs ${b.name}” atau “${b.name} vs ${a.name}”, perbandingannya sama. Dari ${s.measurable} poin yang bisa diputuskan lewat angka, ${a.name} unggul di ${s.a.length} poin dan ${b.name} di ${s.b.length} poin${s.tie.length ? `; ${s.tie.length} poin setara` : ""}. Bobot setiap poin tidak sama – bagi trader aktif, biaya yang lebih rendah lebih penting daripada daftar koin yang lebih panjang – jadi perhatikan kolom yang sesuai dengan cara Anda trading.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: biaya, leverage, ukuran pasar, produk, negara, verifikasi, dan aturan referral`,
    compared: "Aspek",
    ahead: "Unggul",
    level: "Setara",
    glanceNote: (marketDate, date) =>
      `Biaya: level standar (non-VIP). Open interest, volume, dan pasar: ${cmc}, ${marketDate}. “–” berarti kedua nilai tidak bisa diperingkat satu sama lain. Semua data lain dibaca di situs resmi exchange pada ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} atau ${b.name}: mana yang sebaiknya Anda pilih?`,
    verdictText:
      "Tidak ada pemenang mutlak – setiap exchange dirancang untuk tipe trader yang berbeda. Dua kotak berikut menunjukkan untuk siapa masing-masing exchange cocok dan di poin mana exchange itu unggul secara terukur dibanding yang lain.",
    bestFor: (role) => `Paling cocok untuk: ${role}`,
    chooseIf: (e) => `Pilih ${e.name} jika …`,
    aheadOf: (e, other) => `Keunggulan ${e.name} atas ${other.name}`,
    noAdvantage: "Tidak ada keunggulan terukur pada poin yang kami bandingkan.",
    thinkTwice: "Pertimbangkan lagi jika …",
    codeButton: (e) => `Kode referral ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Biaya ${a.name} vs ${b.name}`,
    feesModel:
      "Kedua exchange memakai model maker / taker: limit order yang menambah likuiditas membayar biaya maker, order yang mengambil likuiditas membayar biaya taker.",
    feesCaption: (a, b) => `Biaya standar spot dan futures ${a.name} dan ${b.name}`,
    exchange: "Exchange",
    futuresMaker: "Maker futures",
    futuresTaker: "Taker futures",
    spotMaker: "Maker spot",
    spotTaker: "Taker spot",
    otherMarkets: "Pasar lain (maker / taker)",
    feesNote: (date) =>
      `Biaya standar (non-VIP) sesuai yang dipublikasikan masing-masing exchange, diperiksa ${date}. Biaya bisa berubah – cek di exchange sebelum trading.`,
    tokenTitle: "Diskon token dan detail ketentuan",
    noTokenDiscount: "Tidak ada diskon yang dipublikasikan untuk pembayaran biaya dengan token exchange.",

    /* Leverage */
    leverageTitle: "Leverage dan kedalaman pasar",
    leverageRisk: "Leverage tinggi sangat memperbesar risiko likuidasi – angka maksimum itu batas atas, bukan rekomendasi.",
    leverageCaption: (a, b) => `Leverage dan data pasar derivatif ${a.name} dan ${b.name}`,
    maxLeverage: "Leverage maksimum",
    openInterest: "Open interest",
    volume24h: "Volume derivatif 24 jam",
    derivativesMarkets: "Pasar derivatif",
    listedAssets: "Aset terdaftar (menurut exchange)",
    leverageNote: (marketDate) =>
      `Data pasar: ${cmc}, ${marketDate}. Cara exchange menghitung aset terdaftar berbeda-beda – ada yang menghitung koin, ada yang menghitung pasangan trading.`,

    /* Products */
    productsTitle: (a, b) => `Produk: apa saja yang ditawarkan ${a.name} dan ${b.name}`,
    productsSame: (compared) =>
      `Kedua exchange menampilkan ke-${compared} produk yang kami bandingkan di situs resmi masing-masing; perbedaannya ada pada detail.`,
    productsLegend: (date) =>
      `Tanda centang berarti exchange menampilkan produk itu di situs resminya; tanda strip berarti kami tidak menemukan halaman produk itu di sana pada ${date}.`,
    productsCaption: (a, b) => `Produk yang ditawarkan ${a.name} dan ${b.name}`,
    product: "Produk",
    offered: "Tersedia",
    notOffered: "Tidak tersedia",
    noPage: "Tidak ada halaman di situs resminya",

    /* Countries */
    countriesTitle: (a, b) => `Negara: ketersediaan ${a.name} dan ${b.name}`,
    countriesText: (compared, differing) =>
      `Untuk ${compared} negara, inilah isi ketentuan resmi masing-masing exchange. Keduanya berbeda di ${differing} negara. “${ct.statusLabel.regional}” berarti exchange melayani negara itu lewat platform terpisah dengan produk, biaya, dan batas sendiri.`,
    countriesCaption: (a, b) => `Ketersediaan ${a.name} dan ${b.name} per negara`,
    country: "Negara",
    countriesNote: (date) =>
      `“${ct.statusLabel.open}” berarti negara itu tidak tercantum dalam daftar negara yang dibatasi exchange pada ${date} – bukan jaminan bahwa semua produk tersedia di sana. Kedua exchange melarang upaya mengakali pembatasan dengan VPN atau data palsu.`,
    differTitle: "Perbedaan keduanya",
    differQuestion: (a, b, countryName) => `${a.name} atau ${b.name} di ${countryName}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        Keduanya tidak tersedia di negara Anda? Tabel negara di halaman alternatif menunjukkan exchange lain yang menerima negara Anda:{" "}
        <Link href={hrefA}>Alternatif {a.name} per negara</Link> · <Link href={hrefB}>Alternatif {b.name} per negara</Link>.
      </>
    ),
    restrictedTitle: "Negara yang dibatasi dan platform regional",
    whereNot: (e) => `Di mana ${e.name} tidak tersedia?`,
    regionalPlatforms: "Platform regional:",

    /* Verification */
    kycTitle: (a, b) => `Verifikasi identitas: ${a.name} vs ${b.name}`,
    kycText:
      "Kedua exchange meminta pengguna baru memverifikasi identitas, jadi tidak ada yang bisa dipakai untuk trading tanpa KYC. Perbedaannya ada pada apa yang masih bisa dilakukan akun yang belum terverifikasi dan bagaimana pemeriksaannya berjalan.",
    documents: "Dokumen:",
    minAge: "Usia minimum:",
    howToRegister: (e) => `Cara mendaftar dan memverifikasi akun di ${e.name}, langkah demi langkah`,

    /* Safety */
    safetyTitle: (a, b) => `Keamanan dan regulasi: ${a.name} vs ${b.name}`,
    safetyText:
      "Tidak ada exchange terpusat yang bebas risiko. Yang bisa dibandingkan adalah apa yang dipublikasikan masing-masing exchange tentang dirinya: di mana exchange itu berlisensi, apakah exchange itu menerbitkan bukti cadangan (proof of reserves), dan apakah ada dana untuk keadaan darurat.",
    safetyCaption: (a, b) => `Regulasi, bukti cadangan, dan dana perlindungan ${a.name} dan ${b.name}`,
    licences: "Lisensi yang disebutkan exchange",
    entity: "Entitas pengelola",
    reserves: "Bukti cadangan",
    fund: "Dana perlindungan",
    founded: "Tahun berdiri",
    isSafe: (e) => `Apakah ${e.name} aman?`,
    safetyDetail: (e) => `Detail keamanan dan ketersediaan ${e.name}`,

    /* Referral codes */
    referralTitle: (a, b) => `Kode referral dan penawaran pengguna baru: ${a.name} vs ${b.name}`,
    referralText:
      "Exchange mana pun yang Anda pilih, daftar dengan kode referral: gratis, tidak pernah menaikkan biaya Anda, dan membuka penawaran pengguna baru dari exchange tersebut. Perhatikan baris terakhir – kode yang terlupa tidak selalu bisa ditambahkan belakangan.",
    referralCaption: (a, b) => `Kode referral dan penawaran pengguna baru ${a.name} dan ${b.name}`,
    referralCodeOf: (e) => `Kode referral ${e.name}`,
    referralCode: "Kode referral",
    newUserOffer: "Penawaran pengguna baru",
    inviteeReward: "Yang Anda dapat sebagai pengguna yang diundang",
    covers: "Satu referral berlaku untuk",
    whereCode: "Tempat memasukkan kode",
    addLater: "Bisa ditambahkan belakangan?",
    referralNote: (date) =>
      `Penawaran diperiksa ${date}. Hadiah selamat datang berbasis tugas, mewajibkan verifikasi identitas, dan berbeda menurut negara.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Kelebihan dan kekurangan ${a.name} dan ${b.name}`,
    pros: "Kelebihan",
    cons: "Kekurangan",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – FAQ`,
    faqText: (count, a, b) =>
      `Berikut ${count} pertanyaan seputar pilihan antara ${a.name} dan ${b.name}: biaya, leverage, negara, verifikasi, produk, dan kode referral.`,

    /* Sources */
    sourcesTitle: "Sumber: asal angka di halaman ini",
    sourcesText: (date, marketDate) =>
      `Semua informasi di halaman ini tentang biaya, leverage, produk, verifikasi, negara, lisensi, cadangan, dan aturan referral dibaca di situs resmi dan pusat bantuan kedua exchange pada ${date}. Open interest, volume, dan jumlah pasar derivatif berasal dari ${cmc} (${marketDate}). Exchange bisa mengubah ketentuan tanpa pemberitahuan, jadi halaman di bawah ini yang menjadi acuan akhir.`,
    officialPages: (e, count) => `${e.name}: ${count} halaman resmi`,

    /* More comparisons */
    moreTitle: "Perbandingan lainnya",
    against: (e) => `${e.name} vs exchange lainnya`,
    allAlternatives: (e) => `Semua alternatif ${e.name}`,
    allComparisons: "Semua perbandingan exchange",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Peringatan risiko:</strong> Derivatif kripto merupakan instrumen yang kompleks. Leverage melipatgandakan keuntungan maupun kerugian, dan Anda
        bisa kehilangan seluruh margin dalam hitungan menit. Halaman ini hanya untuk informasi dan bukan nasihat keuangan. Kami bisa mendapat komisi jika
        Anda mendaftar lewat tautan kami – lihat <Link href={disclosureHref}>Pengungkapan afiliasi</Link>. Hal itu tidak mengubah angka di halaman ini:
        semuanya berasal dari exchange itu sendiri.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} atau ${b.name}? Mulai dengan kode referral`,
    ctaText: "Satu akun untuk spot dan futures di exchange mana pun, tanpa biaya tambahan.",
    ctaButton: "Bandingkan exchange lain",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) =>
      fit(TITLE_MAX, `${pairs} Perbandingan Langsung Exchange Kripto (${shortMonthYear})`, `Perbandingan Exchange Kripto (${shortMonthYear})`),
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        DESC_MAX,
        `${exchangeNames}: ${pairs} perbandingan langsung biaya, leverage, negara, KYC, dan kode referral. Diperiksa ${monthYear}.`,
        `${exchangeNames}: ${pairs} perbandingan langsung biaya, leverage, negara, KYC, dan kode referral.`,
      ),
    crumbHome: "Beranda",
    crumbPage: "Perbandingan exchange",
    listName: "Perbandingan langsung exchange kripto",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Diperiksa dan diperbarui ${date}`,
    h1: (pairs) => `Perbandingan exchange kripto: ${pairs} perbandingan langsung`,
    lead: (exchangeCount) =>
      `Ke-${exchangeCount} exchange ini dibandingkan berpasangan pada poin yang sama: biaya, leverage, kedalaman pasar, produk, ketersediaan per negara, verifikasi identitas, regulasi, dan penawaran referral. Setiap perbandingan memakai angka dari situs resmi exchange.`,
    quickAnswer: "Jawaban singkat",

    pickTitle: "Pilih dua exchange untuk dibandingkan",
    pickText: (others) =>
      `Setiap kotak memuat satu exchange melawan ${others} exchange lainnya. Setiap pasangan punya satu halaman, jadi “Binance vs OKX” dan “OKX vs Binance” mengarah ke perbandingan yang sama.`,
    alternativesOf: (e) => `Alternatif ${e.name}`,
    referralCodeOf: (e) => `Kode referral ${e.name}`,

    tableTitle: (exchangeCount) => `Ke-${exchangeCount} exchange berdampingan`,
    tableText: "Penawaran pengguna baru, biaya standar (non-VIP), leverage, dan kedalaman pasar setiap exchange dalam satu tabel.",
    tableNote: (date, marketDate) =>
      `Biaya: level standar sesuai yang dipublikasikan masing-masing exchange, diperiksa ${date}. Open interest dan pasar: CoinMarketCap, ${marketDate}.`,

    alternativesTitle: "Satu exchange vs semua exchange lainnya",
    alternativesText: (others) =>
      `Tidak sedang memilih di antara dua exchange, tetapi mencari pengganti? Halaman alternatif mengukur satu exchange terhadap ${others} exchange lainnya sekaligus dan menunjukkan exchange mana yang menerima negara Anda.`,

    faqTitle: "Perbandingan exchange – FAQ",

    ctaTitle: "Sudah memutuskan? Daftar dengan kode referral",
    ctaText: (exchangeCount) => `Kode terverifikasi untuk ke-${exchangeCount} exchange – satu akun untuk spot dan futures, tanpa biaya tambahan.`,
    ctaButton: "Lihat semua kode referral",
  },
};
