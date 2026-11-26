import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in Indonesian. Same keys as `./en.tsx`.
 * Wording: "alternatif Binance" (the noun first, the name follows), "biaya", "kode referral", "exchange", "Anda";
 * the site is "kami". Names never change ("di Binance", "dari OKX"); country names come unchanged from `../compare/id.ts`.
 * Generated dates: `prettyDate` gives "16 November 2026", `monthYearFor` "November 2026", the short form "Nov 2026".
 */
export const id: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  // Empat variasi, tetap per exchange.
  title: (x, n, shortMonthYear) =>
    fit(
      TITLE_MAX,
      [
        `Alternatif ${x.name} (${shortMonthYear}): Perbandingan ${n} Exchange`,
        `${n} Alternatif ${x.name} Terbaik (${shortMonthYear}): Biaya & Bonus`,
        `Mencari Alternatif ${x.name}? ${n} Exchange Dibandingkan`,
        `Alternatif ${x.name} ${yearOf(shortMonthYear)}: Bandingkan Biaya, Leverage & KYC`,
      ][variant(4, x.slug)],
      `Alternatif ${x.name}: Perbandingan ${n} Exchange`,
      `Alternatif ${x.name} (${shortMonthYear})`,
    ),
  description: (x, names, n, former, monthYear) =>
    fit(
      DESC_MAX,
      `${names}: ${n} alternatif ${x.name}${former ? ` (${former})` : ""} dibandingkan dari biaya, leverage, KYC, negara, dan kode referral. Diperiksa ${monthYear}.`,
      `${names}: ${n} alternatif ${x.name} dibandingkan dari biaya, leverage, KYC, negara, dan kode referral. Diperiksa ${monthYear}.`,
      `${names}: ${n} alternatif ${x.name} dibandingkan dari biaya, leverage, KYC, negara, dan kode referral (${monthYear}).`,
      `${names}: ${n} alternatif ${x.name} dibandingkan dari biaya, leverage, KYC, negara, dan kode referral.`,
    ),
  keywords: (x, alts, former) => [
    `alternatif ${x.name}`,
    `alternatif ${x.name} terbaik`,
    `exchange selain ${x.name}`,
    `exchange seperti ${x.name}`,
    `kompetitor ${x.name}`,
    `alternatif ${x.name} biaya lebih rendah`,
    `alternatif ${x.name} tanpa KYC`,
    `${x.name} alternatives`,
    ...(former ? [`alternatif ${former}`, `${former} alternatives`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Beranda",
  crumbReferral: (name) => `Kode referral ${name}`,
  crumbAlternatives: (name) => `Alternatif ${name}`,
  listLdName: (name) => `Alternatif ${name}`,
  listLdDescription: (name) => `Exchange yang dibandingkan dengan ${name}, diurutkan menurut peringkat derivatif CoinMarketCap.`,
  howToLdName: (name) => `Cara pindah dari ${name} ke exchange lain`,
  howToLdDescription: (name) => `Hal yang perlu diperiksa, dan urutannya, saat Anda pindah dari ${name} ke exchange kripto lain.`,
  ogTitle: (name) => `Alternatif ${name}`,
  ogSubtitle: (names) => `${names} – perbandingan biaya, leverage, KYC, dan negara`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " dan ". */
  and: () => " dan ",
  noneOfThem: "Tidak satu pun",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Diperiksa dan diperbarui ${date}`,
  h1: (name, n) => `Alternatif ${name}: Perbandingan ${n} Exchange`,
  quickAnswer: "Jawaban singkat",
  chipsLabel: "Yang dibandingkan",
  chips: (n, products, countries) => [`${n} exchange`, "Biaya & leverage", `${products} produk`, `${countries} negara`, "KYC & regulasi", "Kode referral"],
  glanceTitle: (name) => `Ringkasan alternatif ${name}`,
  glanceIntro: "Untuk apa tiap exchange paling cocok, beserta biaya futures standarnya (maker / taker).",
  glanceOrder: (marketDate) => `Urutan: peringkat derivatif CoinMarketCap, ${marketDate}. Trading dengan leverage berisiko tinggi.`,
  onThisPage: "Di halaman ini",
  toc: (name, n) => [
    ["at-a-glance", "Ringkasan"],
    ["why", `Mengapa pindah dari ${name}?`],
    ["alternatives", `Ke-${n} alternatif`],
    ["by-need", "Terbaik untuk tiap kebutuhan"],
    ["fees", "Biaya"],
    ["products", "Produk"],
    ["countries", "Negara"],
    ["kyc", "Verifikasi identitas (KYC)"],
    ["safety", "Regulasi & cadangan"],
    ["referral-codes", "Kode referral"],
    ["switch", "Cara pindah"],
    ["faq", "FAQ"],
    ["sources", "Sumber"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `Perbandingan alternatif ${name} (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Tabel ini menempatkan ke-${n} alternatif berdampingan dengan ${name} sendiri. Kolom biaya memuat biaya standar (non-VIP) yang dipublikasikan tiap exchange, ditulis sebagai maker / taker; leverage menunjukkan batas maksimum yang didokumentasikan exchange itu; kode referral di tabel bisa Anda pakai saat mendaftar. Setiap angka kami baca di situs resmi exchange itu sendiri pada ${date}.`,
  comparedCaption: (name, n) => `${name} dan ${n} alternatif: untuk apa tiap exchange paling cocok, biaya, leverage, dan kode referral`,
  colExchange: "Exchange",
  colBestFor: "Paling cocok untuk",
  colFuturesFees: "Biaya futures",
  colSpotFees: "Biaya spot",
  colMaxLeverage: "Leverage maksimum",
  colReferralCode: "Kode referral",
  colAction: "Aksi",
  forComparison: "sebagai pembanding",
  signUp: "Daftar",
  comparedOrder: (marketDate) => `Urutan alternatif: peringkat derivatif CoinMarketCap, ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Mengapa mencari alternatif ${name}?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Berikut batasan yang ditetapkan {name} sendiri – masing-masing diambil dari halaman resmi {name} (lihat{" "}
      <Link href={sourcesHref}>daftar sumber di halaman {name} kami</Link>). Jika tidak ada satu pun yang berlaku bagi Anda, tetap memakai {name} adalah
      pilihan yang sepenuhnya tepat.
    </>
  ),
  stayTitle: (name) => `Kapan ${name} tetap menjadi pilihan yang tepat`,
  stayOutro: (name, code, href) => (
    <>
      Memutuskan tetap memakai {name}? Kode {code}, langkah pendaftaran, dan penawaran pengguna baru yang berlaku saat ini ada di{" "}
      <Link href={href}>halaman kode referral {name}</Link> kami.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Rincian ${n} alternatif ${name} terbaik`,
  detailIntro: (name) =>
    `Setiap alternatif diukur terhadap ${name} pada poin yang sama: biaya, leverage, ukuran pasar, verifikasi, aturan referral, produk, dan negara yang dilayaninya. Bagian “Unggul” hanya memuat perbedaan yang bisa dibaca langsung dari angka resmi exchange itu sendiri.`,
  rowFuturesFees: "Biaya futures (maker / taker)",
  rowSpotFees: "Biaya spot (maker / taker)",
  rowMaxLeverage: "Leverage maksimum",
  rowAssets: "Aset yang tersedia",
  rowOpenInterest: "Open interest derivatif",
  rowUsers: "Pengguna",
  rowFounded: "Tahun berdiri",
  rowKyc: "Verifikasi identitas",
  rowAddLater: "Kode referral bisa ditambahkan belakangan?",
  rowOffer: "Penawaran pengguna baru",
  bestFor: (role) => `Paling cocok untuk: ${role}`,
  asAlternative: (name) => `sebagai alternatif ${name}`,
  chooseIf: (a, x) => `Pilih ${a}, bukan ${x}, jika …`,
  thinkTwiceIf: "Pertimbangkan lagi jika …",
  whereAhead: (a, x) => `Hal yang membuat ${a} unggul dari ${x}`,
  whereBehind: (x) => `Hal yang membuat ${x} unggul`,
  noAdvantage: "Tidak ada keunggulan terukur pada poin yang kami bandingkan.",
  codeLabel: (name) => `Kode referral ${name}`,
  signUpOn: (name) => `Daftar di ${name}`,
  linkReferral: (name, code) => `Kode referral ${name} ${code}: penawaran, langkah pendaftaran, dan KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: perbandingan langsung lengkap`,
  linkAlternatives: (name) => `Alternatif ${name}`,
  sideBySide: (a, x) => `${a} vs ${x}: semua angka berdampingan`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: biaya, leverage, aset, verifikasi, dan aturan referral`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `Alternatif ${name} terbaik untuk tiap kebutuhan`,
  needIntro: (n) =>
    `Alternatif mana yang paling unggul di antara ${n} pilihan ini bergantung pada apa yang Anda cari. Tabel berikut menjawabnya per kebutuhan – dari angka, tanpa peringkat buatan kami sendiri.`,
  needCaption: (name) => `Alternatif ${name} terbaik per kebutuhan`,
  needColWant: "Jika Anda ingin …",
  needColLook: "Lihat",
  needColWhy: "Alasan",
  needLowestFutures: "Biaya futures terendah",
  needLowestSpot: "Biaya spot terendah",
  needHighestLeverage: "Leverage tertinggi",
  needDeepest: "Pasar derivatif terdalam",
  needMostMarkets: "Pasar derivatif terbanyak",
  needMica: "Platform berizin MiCA untuk Wilayah Ekonomi Eropa (EEA)",
  needAddLater: "Kode referral bisa ditambahkan setelah pendaftaran",
  whyStandardTier: (fees) => `${fees} maker / taker di level standar`,
  whyOpenInterest: (amount, marketDate) => `Open interest ${amount} (CoinMarketCap, ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} pasar (CoinMarketCap, ${marketDate})`,
  whyFeature: "Ditampilkan di situs resmi exchange itu sendiri – rincian penawarannya ada di bagian Produk",
  needNotFound: (n) => `Tidak kami temukan di situs ke-${n} alternatif saat pemeriksaan.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Biaya: ${name} vs alternatifnya`,
  feesIntro:
    "Ketujuh exchange memakai model maker / taker: limit order yang menambah likuiditas membayar biaya maker, order yang mengambil likuiditas membayar biaya taker. Tabel ini menampilkan level standar – biaya yang dibayar akun baru sebelum ada level VIP atau diskon token.",
  feesCaption: (name) => `Biaya spot dan futures standar ${name} dan alternatifnya`,
  colFuturesMaker: "Maker futures",
  colFuturesTaker: "Taker futures",
  colSpotMaker: "Maker spot",
  colSpotTaker: "Taker spot",
  colOtherMarkets: "Pasar lain (maker / taker)",
  feesNote: (date) => `Biaya standar (non-VIP) sesuai publikasi tiap exchange, diperiksa pada ${date}. Biaya bisa berubah – pastikan di exchange sebelum trading.`,
  cheaperTitle: (name) => `Exchange mana yang lebih murah daripada ${name}?`,
  tokenTitle: "Diskon token dan ketentuannya",
  noTokenDiscount: "Tidak ada diskon yang dipublikasikan untuk pembayaran biaya dengan token exchange.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Produk: apa yang ditawarkan tiap exchange",
  productsIntro: (date) =>
    `Tanda centang berarti exchange menampilkan produk itu di situs resminya sendiri. Tanda strip berarti kami tidak menemukan halaman untuk produk itu di sana pada ${date} – ini tidak membuktikan bahwa produknya tidak ada. Produk yang ditawarkan bisa berbeda menurut negara, terutama di platform regional.`,
  productsCaption: (name) => `Produk yang ditawarkan ${name} dan alternatifnya`,
  colProduct: "Produk",
  productDetailsTitle: "Detail produk per exchange",
  productDetails: (name) => `${name}: detail produk`,
  offered: "Ditawarkan",
  notOffered: "Tidak ditawarkan",
  noPageFound: "Halaman tidak ditemukan di situs resmi exchange itu sendiri",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Ketersediaan: ${name} dan alternatifnya per negara`,
  countriesIntro: (count) =>
    `Tempat tinggal Anda adalah alasan paling umum untuk membutuhkan alternatif. Untuk ${count} negara, tabel ini menunjukkan isi ketentuan resmi tiap exchange. “Situs regional” berarti exchange melayani negara itu lewat platform terpisah dengan produk, biaya, dan batasnya sendiri.`,
  countriesCaption: (name) => `Ketersediaan ${name} dan alternatifnya per negara`,
  colCountry: "Negara",
  legendRestricted: "tertutup bagi penduduk menurut ketentuan atau pemberitahuan resmi exchange itu sendiri",
  legendRegional: "dilayani lewat platform regional terpisah",
  legendPartial: "hanya sebagian produk atau wilayah",
  legendOpen: (date) => `tidak ada dalam daftar negara yang dibatasi pada ${date}`,
  countriesNote:
    "“Tidak dibatasi” bukan jaminan bahwa semua produk ditawarkan di negara itu. Yang berlaku adalah ketentuan exchange pada saat Anda mendaftar, dan semua exchange ini melarang upaya menghindari pembatasan dengan VPN atau data palsu.",
  countryHeading: (name, country) => `Alternatif ${name} di ${country}`,
  restrictedTitle: "Negara yang dibatasi dan platform regional per exchange",
  whereNotAvailable: (name) => `Di mana ${name} tidak tersedia?`,
  regionalPlatforms: "Platform regional:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Verifikasi: apakah ada alternatif ${name} tanpa KYC?`,
  kycIntro: (n) =>
    `Tidak ada di antara ${n} exchange ini. Setiap exchange dalam perbandingan ini meminta verifikasi identitas dari pengguna baru, dan di sebagian besar exchange, deposit atau trading tetap terkunci hingga verifikasi selesai. Perbedaannya ada pada apa yang masih bisa dilakukan akun yang belum terverifikasi.`,
  kycCaption: (name) => `Verifikasi identitas di ${name} dan alternatifnya`,
  colKyc: "Verifikasi identitas",
  kycDetailsTitle: "Penjelasan tiap exchange tentang verifikasi",
  kycQuestion: (name) => `Apakah saya perlu verifikasi identitas (KYC) di ${name}?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Regulasi, bukti cadangan (proof of reserves), dan dana perlindungan",
  safetyIntro:
    "Tidak ada exchange terpusat yang bebas risiko. Yang bisa dibandingkan adalah apa yang dipublikasikan tiap exchange tentang dirinya sendiri: tempat exchange itu memegang lisensi, apakah cadangannya dibuktikan, dan apakah exchange itu menyimpan dana untuk keadaan darurat.",
  safetyCaption: (name) => `Regulasi, bukti cadangan, dan dana perlindungan ${name} serta alternatifnya`,
  colLicences: "Lisensi yang disebut exchange",
  colReserves: "Bukti cadangan",
  colFund: "Dana perlindungan",
  noneNamed: "Tidak disebutkan",
  safetyNote:
    "Rasio cadangan adalah angka resmi exchange itu sendiri pada tanggal snapshot yang dicantumkan. Simpan dana hanya di exchange yang aktif Anda pakai untuk trading.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Kode referral untuk alternatif ${name}`,
  codesIntro:
    "Jika Anda membuka akun di salah satu alternatif, gunakan kode referral: kode ini gratis, tidak pernah menaikkan biaya, dan membuka penawaran pengguna baru dari exchange tersebut. Kolom terakhir paling penting – di beberapa exchange, kode yang terlupa tidak bisa ditambahkan setelahnya.",
  codesCaption: (name) => `Kode referral ${name} dan alternatifnya`,
  colOffer: "Penawaran pengguna baru",
  colWhere: "Tempat memasukkan kode",
  colLater: "Bisa ditambahkan belakangan?",
  codesRow: (name) => `Kode referral ${name}`,
  codesNote: (date) =>
    `Penawaran diperiksa pada ${date}. Hadiah selamat datang berbasis tugas, mewajibkan verifikasi identitas, dan berbeda menurut negara.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Cara pindah dari ${name} ke exchange lain`,
  switchIntro: "Pindah exchange tidak serumit kedengarannya, asalkan Anda menjaga urutannya: akun dulu, lalu verifikasi, dana paling akhir.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `Alternatif ${name} – FAQ`,
  faqIntro: (name, count) =>
    `Berikut ${count} pertanyaan tentang beralih dari ${name}: exchange mana yang cocok untuk kebutuhan apa, biaya, negara, verifikasi, dan cara pindah.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Sumber: asal angka di halaman ini",
  sourcesIntro: (date, marketDate) =>
    `Semua informasi di halaman ini tentang biaya, leverage, produk, verifikasi, negara, lisensi, cadangan, dan aturan referral kami baca di situs resmi dan pusat bantuan exchange itu sendiri pada ${date}. Open interest dan jumlah pasar derivatif berasal dari peringkat derivatif CoinMarketCap (${marketDate}). Exchange bisa mengubah ketentuan tanpa pemberitahuan, jadi halaman di bawah ini menjadi acuan akhir.`,
  sourcesSummary: (name, count, focus) => `${name}: ${count} halaman resmi${focus ? "" : " yang diperiksa untuk perbandingan ini"}`,
  sourcesMore: (name, count, href) => (
    <>
      Biaya, leverage, verifikasi, aturan referral, dan daftar negara yang dibatasi untuk {name}:{" "}
      <Link href={href}>
        ke-{count} sumber di halaman {name} kami
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Perbandingan exchange lainnya",
  headToHeadTitle: (name) => `Perbandingan langsung ${name}`,
  headToHeadIntro:
    "Sudah punya satu alternatif dalam daftar pilihan? Halaman perbandingan langsung membahas lebih dalam soal biaya, produk, negara, dan penawaran referral:",
  otherAlternativesTitle: "Alternatif untuk exchange lainnya",
  otherAlternativesIntro: "Perbandingan yang sama dari sudut pandang tiap exchange lainnya:",
  referralLink: (name, code) => `Kode referral ${name} ${code}`,
  allComparisons: "Semua perbandingan exchange",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Peringatan risiko:</strong> Derivatif kripto adalah instrumen yang kompleks. Leverage melipatgandakan keuntungan sekaligus kerugian, dan Anda
      bisa kehilangan seluruh margin dalam hitungan menit. Halaman ini hanya untuk informasi dan bukan saran keuangan. Kami mungkin menerima komisi jika Anda
      mendaftar lewat tautan kami – lihat <Link href={disclosureHref}>Pengungkapan afiliasi</Link> kami. Hal itu tidak mengubah angka: semua angka berasal
      dari exchange itu sendiri.
    </>
  ),
  ctaTitle: (name) => `Sudah menemukan alternatif ${name}?`,
  ctaText: "Daftar dengan kode referral terverifikasi – satu akun untuk spot dan futures, tanpa biaya tambahan.",
  ctaButton: "Lihat semua kode referral",
};
