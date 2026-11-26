import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";
import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";

/**
 * Interface texts in Indonesian. Same keys as `en.tsx`.
 *
 * Wording: "kode referral" for referral code (main keyword; the head noun comes first, the name follows: "kode
 * referral Binance"), "kode undangan" and "ID referral" as second terms, "exchange" (lower-case, no plural) for the
 * exchange, "biaya" for fees, spot / futures / margin in English and lower-case, address "Anda" with a capital A.
 * Exchange names never take an affix ("di Binance", "akun Binance"). Numbers with a decimal comma and a dot for
 * thousands (0,02%, 10.000 USDT, US$34,1 miliar). Field and button names of the exchanges stay in English, because
 * only the English interface was checked.
 */

const NBSP = " ";
const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A dan B", "A, B, dan C" – with a comma before "dan" from three items on (EYD). */
const list = (items: string[]) =>
  items.length <= 1 ? items.join("") : items.length === 2 ? `${items[0]} dan ${items[1]}` : `${items.slice(0, -1).join(", ")}, dan ${items[items.length - 1]}`;
/** "A atau B", "A, B, atau C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) =>
  items.length <= 1 ? items.join("") : items.length === 2 ? `${items[0]} atau ${items[1]}` : `${items.slice(0, -1).join(", ")}, atau ${items[items.length - 1]}`;
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** `maxLeverage` starts with "Hingga"; inside a phrase it is lower-cased ("Leverage hingga 150x"). */
const lcLeverage = (s: string) => (s.startsWith("Hingga") ? `h${s.slice(1)}` : s);
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A number in Indonesian notation: 1234.5 → "1.234,5". */
const idNumber = (n: number, digits: number) => {
  const [int, dec] = n.toFixed(digits).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dec ? `${grouped},${dec}` : grouped;
};
/** Billions of US dollars: "34,1" → "US$34,1 miliar". */
const miliar = (n: string) => `US$${n}${NBSP}miliar`;

export const id: Dictionary = {
  list,

  format: {
    billions: (n) => miliar(idNumber(n, n >= 10 ? 1 : 2)),
    billionsExact: (n) => miliar(idNumber(n, 2)),
    billionsFloor: (n) => `${miliar(idNumber(Math.floor(n), 0))}+`,
  },

  meta: {
    siteTitle: `${site.name} – Kode Referral Exchange Kripto Terverifikasi`,
    siteDescription:
      "Kode referral terverifikasi untuk Binance, OKX, Bybit, Bitget, Gate, KuCoin, dan MEXC – dapatkan bonus pengguna baru dan rebate biaya untuk trading spot dan futures dengan satu tautan pendaftaran. Biaya, fakta, serta kelebihan dan kekurangan yang jujur.",
  },

  layout: {
    skip: "Langsung ke konten",
    mainNav: "Menu utama",
    nav: { exchanges: "Exchange", benefits: "Manfaat", compare: "Perbandingan", howItWorks: "Cara kerja", about: "Tentang kami" },
    getCodes: "Dapatkan kode",
    homeLabel: `${site.name} – beranda ${site.domain}`,
    language: "Bahasa",
    footerAbout:
      "Kode referral terverifikasi untuk exchange kripto terbesar – bonus selamat datang dan rebate biaya untuk spot dan futures. Fakta yang jelas dari sumber resmi.",
    referralCodes: "Kode referral",
    referralCodeOf: (name) => `Kode referral ${name}`,
    alternatives: "Alternatif",
    alternativesOf: (name) => `Alternatif ${name}`,
    guides: "Panduan",
    comparisons: "Perbandingan exchange",
    howCodesWork: "Cara kerja kode referral",
    faq: "FAQ",
    about: "Tentang kami & metodologi",
    legal: "Legal",
    imprint: "Informasi hukum",
    privacy: "Kebijakan privasi",
    disclosure: "Pengungkapan afiliasi",
    cookieSettings: "Pengaturan cookie",
    risk: (
      <>
        <strong>Peringatan risiko:</strong> Trading derivatif kripto dengan leverage berisiko tinggi dan bisa membuat Anda kehilangan seluruh deposit.
        Gunakan hanya dana yang siap Anda relakan hilang. Tidak ada isi situs ini yang merupakan nasihat keuangan, investasi, atau pajak.
      </>
    ),
    affiliate: (
      <>
        <strong>Pengungkapan afiliasi:</strong> Sebagian tautan adalah tautan referral. Jika Anda mendaftar lewat tautan tersebut, kami mungkin menerima
        komisi tanpa biaya tambahan bagi Anda. Komisi ini tidak pernah memengaruhi fakta yang kami publikasikan. Nama dan logo exchange adalah merek dagang
        milik pemiliknya masing-masing; {site.name} tidak berafiliasi dengan atau didukung oleh para pemilik merek tersebut.
      </>
    ),
  },

  consent: {
    label: "Persetujuan analitik",
    text: (privacyHref) => (
      <>
        <strong>Analitik – Anda yang memutuskan.</strong> Kami ingin memakai Google Analytics untuk melihat halaman mana yang dibaca. Google Analytics
        memasang cookie, mengirim data penggunaan ke Google, dan baru berjalan jika Anda mengizinkannya. Apa pun pilihan Anda, tidak ada cookie iklan.
        Detail: <Link href={privacyHref}>Kebijakan privasi</Link>.
      </>
    ),
    decline: "Tolak",
    allow: "Izinkan analitik",
  },

  notFound: {
    title: "Halaman ini tidak ada",
    text: "Kode referral yang Anda cari mungkin sudah pindah. Coba salah satu halaman berikut:",
    back: "Kembali ke beranda",
  },

  og: {
    footer: ["Tautan terverifikasi", "Biaya dan fakta", "Sumber resmi"],
    homeAlt: "RefCo – kode referral exchange kripto terverifikasi",
    homeKicker: (monthYear) => `Diperbarui ${monthYear}`,
    homeTitle: "Kode referral exchange kripto, terverifikasi.",
    exchangeAlt: "Kode referral, alternatif, dan perbandingan exchange – RefCo",
    exchangeKicker: (monthYear) => `Diperiksa ${monthYear}`,
    exchangeTitle: (e) => `Kode Referral ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot & futures dengan satu tautan`,
    versusBadge: "Perbandingan langsung",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Biaya futures ${feesA} vs ${feesB} · Leverage ${leverageA}x vs ${leverageB}x · KYC, negara, bonus`,
  },

  blocks: {
    signUpOn: (name) => `Daftar di ${name}`,
    signUp: "Daftar",
    details: "Detail",
    breadcrumb: "Jejak navigasi",
    copy: "Salin",
    copied: "Tersalin ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futures maker / taker",
    maxLeverage: "Leverage maksimum",
    since: "Sejak",
    tableCaption: "Perbandingan exchange kripto berdasarkan penawaran pengguna baru, biaya spot dan futures, leverage, dan data pasar",
    exchange: "Exchange",
    newUserOffer: "Penawaran pengguna baru",
    futuresFees: "Biaya futures (maker / taker)",
    spotFees: "Biaya spot",
    openInterest: "Open interest",
    markets: "Pasar",
    action: "Aksi",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => fit(TITLE_MAX, `Kode Referral Exchange Kripto & Bonus (${monthYear})`, `Kode Referral Exchange Kripto (${monthYear})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Kode referral terverifikasi Binance, OKX, Bybit, Bitget, Gate, KuCoin, dan MEXC: bonus pengguna baru dan rebate biaya lewat satu tautan (${monthYear}).`,
        `Kode referral terverifikasi Binance, OKX, Bybit, Bitget, Gate, KuCoin, dan MEXC: bonus pengguna baru dan rebate biaya spot & futures lewat satu tautan.`,
      ),
    listName: "Kode referral exchange kripto untuk spot dan futures",
    updated: (monthYear) => `Diperbarui ${monthYear}`,
    h1: (
      <>
        Kode referral exchange kripto, <span className="hl">terverifikasi</span> dan dijelaskan.
      </>
    ),
    lead: (
      <>
        Dapatkan bonus selamat datang dan rebate biaya di exchange kripto terbesar dunia – satu kode referral (disebut juga kode undangan atau ID
        referral) untuk spot <em>dan</em> futures. Lengkap dengan fakta yang Anda perlukan untuk memilih: biaya, leverage, lisensi, serta kelebihan &amp;
        kekurangan yang jujur.
      </>
    ),
    browse: "Lihat kode referral",
    seeBenefits: "Lihat manfaat untuk Anda",
    trust: (date) => [`Diperiksa ${date}`, "Hanya tautan resmi", "Analitik hanya dengan izin Anda"],
    featured: "Exchange pilihan",
    ticketName: (name) => `Kode referral ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Exchange spot & futures teratas", "Total open interest", "Pasar derivatif yang tercakup", "Biaya maker terendah (MEXC)"],
    marketData: (date) => `Data pasar: peringkat derivatif CoinMarketCap, per ${date}.`,

    benefitsEyebrow: "Manfaat untuk Anda",
    benefitsTitle: `Mengapa mendaftar dengan kode referral ${site.name}?`,
    benefitsLead: "Exchange yang sama, biaya yang sama – tetapi dengan keuntungan pengguna baru yang terlewat jika Anda mendaftar langsung.",
    benefits: [
      {
        title: "Bonus selamat datang",
        text: "Dapatkan penawaran pengguna baru dari exchange – voucher rebate biaya trading, bonus futures, dan hadiah tugas senilai hingga ribuan USDT.",
      },
      {
        title: "Biaya trading lebih rendah",
        text: "Jika exchange mengizinkan, sebagian komisi referral kembali ke Anda sebagai rebate di setiap transaksi.",
      },
      {
        title: "Spot dan futures, satu tautan",
        text: "Referral terikat pada akun Anda – berlaku untuk spot, futures, margin, dan opsi. Tidak perlu kode kedua.",
      },
      { title: "Tanpa biaya tambahan", text: "Referral tidak pernah membuat biaya Anda lebih tinggi. Anda hanya diuntungkan – exchange yang membiayai programnya." },
      { title: "Halaman pendaftaran resmi", text: "Setiap tautan membuka situs resmi exchange itu sendiri. Tanpa perantara, tanpa data yang dibagikan kepada kami." },
      {
        title: "Paling baik dipakai saat mendaftar",
        text: "Sebagian exchange mengizinkan penambahan kode dalam 30 hari, sebagian lagi tidak sama sekali. Gunakan tautan sebelum membuat akun, dan Anda aman di exchange mana pun.",
      },
    ],
    offersCaption: "Penawaran pengguna baru per exchange",
    offersHead: ["Exchange", "Penawaran pengguna baru dengan referral", "Satu tautan mencakup"],
    claim: "Klaim",
    offersNote: (date) =>
      `Penawaran diperiksa pada ${date}. Hadiah selamat datang berbasis tugas, mewajibkan verifikasi identitas, dan berbeda per wilayah – ketentuan yang berlaku tampil di halaman pendaftaran setiap exchange.`,

    exchangesEyebrow: "Kode referral",
    exchangesTitle: "Pilih exchange Anda",
    exchangesLead: "Setiap halaman menjelaskan referral, biaya, dan untuk siapa exchange itu paling cocok – agar Anda cukup mendaftar sekali, di platform yang tepat.",
    sideBySide: "Berdampingan",
    notSure: "Belum yakin pilih yang mana?",
    notSureText: (count) => `Bandingkan biaya, leverage, dan open interest ke-${count} exchange ini dalam satu tabel.`,
    compareExchanges: "Bandingkan exchange",

    compareTitle: "Perbandingan exchange kripto: spot & futures",
    compareLead: "Sekilas: penawaran pengguna baru, biaya standar (non-VIP) spot dan futures, leverage, dan kedalaman pasar.",
    compareNote: (reviewed, market) =>
      `Biaya: level standar sesuai publikasi masing-masing exchange, diperiksa pada ${reviewed}. Open interest dan pasar: CoinMarketCap, ${market}. Biaya bisa berubah – pastikan lagi di exchange sebelum trading.`,
    versusStrip: {
      title: "Bandingkan dua exchange secara langsung",
      text: (pairs, hubHref) => (
        <>
          Tersedia {pairs} perbandingan langsung yang menyandingkan biaya, leverage, produk, negara, KYC, dan penawaran referral –{" "}
          <Link href={hubHref}>semua perbandingan exchange</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Mencari alternatif untuk exchange Anda?",
      text: (others) =>
        `Setiap perbandingan mengukur satu exchange terhadap ${others} exchange lainnya: biaya, leverage, produk, verifikasi identitas, dan negara yang dilayani exchange tersebut.`,
    },

    picksEyebrow: "Jawaban singkat",
    picksTitle: "Exchange mana yang terbaik untuk Anda?",
    picks: [
      { label: "Likuiditas terdalam", slug: "binance", why: "Open interest dan volume futures terbesar di dunia." },
      { label: "Biaya rendah & opsi", slug: "okx", why: "Spot 0,08% / 0,10%, opsi 0,03%, dan bukti cadangan (proof of reserves) setiap bulan." },
      { label: "Futures aktif di ponsel", slug: "bybit", why: "Mesin trading yang cepat dan salah satu aplikasi trading terbaik." },
      { label: "Copy trading", slug: "bitget", why: "Ikuti posisi trader futures berpengalaman secara otomatis." },
      { label: "Altcoin terbanyak", slug: "gate", why: "Lebih dari 5.400 aset dan futures untuk token yang kurang populer." },
      { label: "Bot trading", slug: "kucoin", why: "Bot trading gratis untuk spot dan futures." },
      { label: "Biaya terendah", slug: "mexc", why: "Biaya maker 0% untuk spot dan sebagian besar kontrak futures." },
    ],

    howEyebrow: "Cara kerja",
    howTitle: "Gunakan kode referral dalam tiga langkah",
    steps: [
      { title: "Pilih exchange", text: "Bandingkan biaya, leverage, dan fitur di atas, lalu buka halaman exchange yang cocok dengan gaya trading Anda." },
      {
        title: "Daftar lewat tautan kami",
        text: "Referral terpasang otomatis. Daftar dengan email atau nomor telepon sebelum Anda membuat akun di tempat lain.",
      },
      {
        title: "Verifikasi & klaim hadiah",
        text: "Selesaikan verifikasi identitas (KYC), amankan akun dengan 2FA, lalu periksa hadiah selamat datang di dasbor.",
      },
    ],

    trustEyebrow: `Mengapa ${site.name}`,
    trustTitle: "Dibangun untuk kepercayaan, bukan klik",
    trustCards: [
      { title: "Penawaran terverifikasi", text: "Kami memeriksa penawaran pengguna baru setiap exchange dan hanya mencantumkan yang benar-benar bisa Anda klaim." },
      { title: "Fakta terbaru dan bertanggal", text: "Biaya, leverage, dan lisensi diperiksa ulang secara berkala, dan setiap halaman menampilkan tanggal pemeriksaannya." },
      { title: "Privasi diutamakan", text: "Tanpa piksel iklan dan tanpa cookie iklan. Analitik hanya berjalan jika Anda mengizinkannya." },
      { title: "Cepat & jelas", text: "Halaman ringan yang langsung terbuka di ponsel apa pun – jawaban dulu, detail kemudian." },
      { title: "Kelebihan & kekurangan yang jujur", text: "Kami mencantumkan kelemahan, insiden, dan pembatasan regional – bukan hanya materi pemasaran." },
      { title: "Risiko diutamakan", text: "Leverage bisa menghapus deposit dengan cepat. Kami menyatakannya dengan jelas di setiap halaman." },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Kode referral – pertanyaan yang sering diajukan",
    faqs: (reviewed) => [
      {
        q: "Apa itu kode referral exchange kripto?",
        a: "Kode referral (disebut juga kode undangan atau ID referral) adalah kode pengenal singkat yang menautkan akun exchange baru dengan orang atau situs yang merekomendasikannya. Exchange memakainya untuk memberi hadiah kepada kedua pihak – pengguna baru biasanya mendapat hadiah selamat datang atau diskon biaya trading, sedangkan pengundang memperoleh bagian dari biaya.",
      },
      {
        q: "Apa keuntungan memakai kode referral?",
        a: "Pengguna baru yang mendaftar dengan referral mendapat akses ke penawaran pengguna baru dari exchange – misalnya hadiah referral hingga 250 USDT di Bybit atau hadiah pengguna baru hingga 10.000 USDT di MEXC – dan, jika pengundang membagi komisinya, sebagian biaya trading kembali ke pengguna baru, misalnya 10% selama satu tahun di Gate. Semua ini tanpa biaya tambahan.",
      },
      {
        q: "Apakah satu kode referral berlaku untuk trading spot dan futures?",
        a: "Ya. Di Binance, OKX, Bybit, Bitget, Gate, KuCoin, dan MEXC, referral terikat pada akun Anda, bukan pada satu produk. Satu kali pendaftaran mencakup trading spot dan futures – ditambah margin, opsi, atau copy trading jika exchange menyediakannya.",
      },
      {
        q: "Apakah saya membayar lebih jika mendaftar dengan kode referral?",
        a: "Tidak. Mendaftar lewat tautan referral tidak pernah menaikkan biaya Anda. Tergantung exchange dan wilayah Anda, Anda bahkan bisa mendapat diskon biaya atau bonus selamat datang yang tidak Anda dapatkan tanpa referral.",
      },
      {
        q: "Bisakah saya menambahkan kode referral setelah membuat akun?",
        a: "Tergantung pada exchange. Binance mengizinkan Anda menautkan kode dalam 30 hari setelah pendaftaran jika Anda belum melakukan deposit atau transaksi, dan MEXC mengizinkan Anda menautkan pengundang sendiri dalam 30 hari setelah mendaftar. KuCoin menyediakan permintaan “Link Referrer” di Pusat Bantuan. Bybit, OKX, dan Bitget hanya menerima kode saat pendaftaran, sedangkan Gate tidak mendokumentasikan cara apa pun untuk menambahkannya belakangan. Cara yang aman adalah memakai tautan sebelum Anda membuat akun.",
      },
      {
        q: "Exchange kripto mana dengan biaya futures terendah?",
        a: `Pada pemeriksaan terakhir kami (${reviewed}), MEXC memiliki biaya futures standar terendah: maker 0% dan taker 0,02% untuk BTCUSDT. Binance, OKX, dan Gate mengenakan maker 0,02% / taker 0,05% di level standar, Bybit 0,02% / 0,055%, serta Bitget dan KuCoin 0,02% / 0,06%.`,
      },
      {
        q: "Exchange mana yang terbaik untuk derivatif kripto?",
        a: "Tergantung pada apa yang Anda perdagangkan. Binance menawarkan likuiditas terdalam, OKX memadukan biaya rendah dengan opsi, Bybit dirancang untuk trading kontrak perpetual yang cepat, Bitget untuk copy trading, Gate untuk futures altcoin, KuCoin untuk bot, dan MEXC untuk biaya terendah.",
      },
      {
        q: "Apakah exchange ini tersedia di Amerika Serikat?",
        a: "Sebagian besar tidak. Binance, Bybit, Bitget, Gate, KuCoin, dan MEXC mencantumkan Amerika Serikat sebagai negara yang dibatasi atau terlarang, dan OKX membatasi yurisdiksi tertentu di AS. Ketersediaan juga berbeda di Inggris, Kanada, dan Uni Eropa – setiap halaman exchange mencantumkan negara yang dibatasi menurut ketentuan exchange itu sendiri.",
      },
      {
        q: "Seberapa sering informasi ini diperbarui?",
        a: `Kami memeriksa ulang biaya, leverage, lisensi, dan data pasar secara berkala. Setiap halaman menampilkan tanggal pemeriksaan terakhirnya; data saat ini diperiksa pada ${reviewed}.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "Klaim bonus selamat datang Anda",
    ctaText: "Pilih exchange, daftar dengan referral terverifikasi, lalu mulai trading spot dan futures dengan satu akun.",
    ctaButton: "Lihat semua kode referral",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Empat variasi, tetap per exchange, agar judul tidak semuanya diawali "Kode Referral <Exchange>".
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, b = benefit(e), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `Kode Referral ${n} ${c} (${shortMonthYear}): ${b}`, `Kode Referral ${n} ${c} (${shortMonthYear}) – Bonus Pengguna Baru`, `Kode Referral ${n} ${c} (${shortMonthYear}) & Bonus`, `Kode Referral ${n} ${c} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${c}: Kode Referral ${n} – ${b}`, `${c}: Kode Referral ${n} & Bonus (${shortMonthYear})`, `${c}: Kode Referral ${n} (${shortMonthYear})`),
        () => fit(TITLE_MAX, `${b}: Kode Referral ${n} ${c}`, `Bonus Pengguna Baru ${y}: Kode Referral ${n} ${c}`, `Kode Referral ${n} ${c} (${y})`),
        () => fit(TITLE_MAX, `Cara Menggunakan Kode Referral ${n} ${c} (${shortMonthYear})`, `Cara Menggunakan Kode Referral ${n} ${c}`, `Kode Referral ${n} ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `Kode referral ${e.name}: ${e.referralCode}. ${benefit(e)} – tempat memasukkan kode, langkah pendaftaran, KYC, dan biaya, diperiksa ${monthYear}.`,
        `Kode referral ${e.name}: ${e.referralCode}. ${benefit(e)} – tempat memasukkan kode, pendaftaran, KYC, dan biaya (${monthYear}).`,
        `Kode referral ${e.name}: ${e.referralCode}. ${benefit(e)} – tempat memasukkan kode, langkah pendaftaran, KYC, dan biaya.`,
        `Kode referral ${e.name}: ${e.referralCode}. Tempat memasukkan kode, langkah pendaftaran, verifikasi KYC, dan biaya trading, diperiksa ${monthYear}.`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLocaleLowerCase("id-ID").replace(/[\s-]/g, "");
      const cn = e.referral.codeName;
      // An Indonesian code name ("kode referral") leads; the exchange's own English field name ("Referral ID") follows the name as people type it in English.
      const own = /^kode\b/i.test(cn) ? `${cn.toLocaleLowerCase("id-ID")} ${e.name}` : `${e.name} ${cn.toLowerCase().replace(/\bid\b/, "ID")}`;
      return [
        `kode referral ${e.name}`,
        `kode referral ${e.name} ${e.referralCode}`,
        own,
        `kode undangan ${e.name}`,
        `ID referral ${e.name}`,
        `link referral ${e.name}`,
        `${e.name} referral code`,
        `referral code ${e.name}`,
        `kode referal ${e.name}`,
        `bonus daftar ${e.name}`,
        `cara daftar ${e.name}`,
        `KYC ${e.name}`,
        `biaya futures ${e.name}`,
        `fee ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "Ringkasan kode",
      benefits: "Manfaat untuk Anda",
      "use-code": "Cara memakai kode",
      "how-to": "Cara daftar",
      verification: "Verifikasi (KYC)",
      "key-facts": "Fakta utama",
      fees: "Biaya",
      about: "Tentang exchange",
      "pros-cons": "Kelebihan & kekurangan",
      "best-for": "Cocok untuk siapa",
      safety: "Keamanan & ketersediaan",
      faq: "FAQ",
      sources: "Sumber",
      alternatives: "Alternatif & perbandingan",
    },
    onThisPage: "Di halaman ini",
    crumbHome: "Beranda",
    crumbCodes: "Kode referral",
    crumbPage: (e) => `Kode referral ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `Kode referral ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Satu referral mencakup ${list(e.referralCovers)}.`,
    offerCategory: "Pendaftaran exchange kripto",
    howToName: (e) => `Cara daftar di ${e.name} dengan kode referral ${e.referralCode}`,
    howToDescription: (e) =>
      `Langkah pendaftaran di ${e.name} sesuai dokumentasi exchange ini, termasuk tempat memasukkan kode referral ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Diperiksa dan diperbarui ${date}`,
    h1: (e) => `Kode Referral ${e.name}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – ditambah satu referral untuk {list(e.referralCovers)}. Berikut apa yang Anda dapatkan, berapa biaya trading di{" "}
        {e.name}, dan apakah {e.name} exchange yang tepat untuk Anda.
      </>
    ),
    quickAnswer: "Jawaban singkat",
    highlights: "Poin utama",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Leverage ${lcLeverage(shortLeverage(e))}`,
      `${e.market.markets} pasar derivatif`,
      `Sejak ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Pendaftaran akun ${e.name}`,
    appliedByLink: "Referral terpasang otomatis lewat tautan ini.",
    goesToOfficial: (domain) => `Langsung menuju situs resmi ${domain}.`,
    codeLabel: "Kode referral",
    noCodeToType: "Tidak perlu mengetik kode – terpasang lewat tautan",
    officialSite: (domain) => `Situs resmi: ${domain}`,
    yourBenefits: "Manfaat untuk Anda",
    freeNeverRaises: "Gratis – referral tidak pernah menaikkan biaya Anda",
    qrLabel: (e) => `Kode QR: daftar di aplikasi ${e.name} dengan referral ${e.referralCode}`,
    preferApp: "Lebih suka aplikasi?",
    scan: (e) => (
      <>
        Pindai dengan kamera ponsel untuk membuka {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – referral <strong>{e.referralCode}</strong> sudah terpasang
          </>
        ) : null}
        . Bisa untuk iOS dan Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Trading dengan leverage berisiko tinggi. {e.name} tidak tersedia di semua negara – lihat <a href="#safety">ketersediaan</a> atau{" "}
        <Link href={links.alternatives}>alternatif {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `Ringkasan kode referral ${e.name} ${e.referralCode}`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        Kode referral {e.name} (disebut juga kode undangan atau ID referral) untuk {monthYear} adalah <strong>{e.referralCode}</strong>. Tabel ini
        merangkum fungsi kode, tempat memasukkannya, dan persyaratan {e.name} untuk akun baru – setiap baris kami cocokkan dengan halaman resmi {e.name}{" "}
        pada {date}.
      </>
    ),
    codeFactsCaption: (e) => `Kode referral ${e.name} ${e.referralCode}: fakta utama`,
    codeFacts: (e, date) => [
      [`Kode referral ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`Sebutan di ${e.name}`, e.referral.codeName],
      ["Manfaat bagi pengguna baru", benefit(e)],
      ["Tempat memasukkan kode", e.referral.whereShort],
      ["Bisa ditambahkan setelah mendaftar?", e.referral.afterSignupShort],
      ["Berlaku untuk", e.referralCovers.join(", ")],
      ["Verifikasi identitas (KYC)", e.signup.kycShort],
      ["Biaya pemakaian", "Gratis – tidak menaikkan biaya Anda"],
      ["Terakhir diperiksa", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Manfaat untuk Anda dengan referral ${e.name}`,
    benefitsIntro: (e) => (
      <>
        Mendaftar dengan kode referral {e.name} <strong>{e.referralCode}</strong> tidak menambah biaya apa pun. Inilah penawaran {e.name} untuk akun baru
        saat ini. Kode yang sama berlaku untuk <strong>{list(e.referralCovers)}</strong> – Anda tidak perlu kode terpisah untuk spot dan futures.
      </>
    ),
    offerChecked: (date) => `Penawaran pengguna baru · diperiksa ${date}`,
    appliedWhenRegistering: "berlaku saat Anda mendaftar lewat referral ini",
    noExtraCost: "Tanpa biaya tambahan – biaya trading Anda tidak pernah lebih tinggi karena referral",
    oneReferralCovers: "Satu referral mencakup:",
    claimOffer: (e) => `Klaim penawaran pengguna baru ${e.name}`,
    tasksTitle: (e) => `Penawaran pengguna baru ${e.name}: tugas dan hadiah`,
    tasksCaption: (e) => `Tugas pengguna baru ${e.name} dan hadiah untuk setiap tugas`,
    task: "Tugas",
    reward: "Hadiah",
    tasksNote: (e, date) =>
      `Sesuai yang dicantumkan ${e.name} pada ${date}. Penawaran berbeda di tiap negara dan sering berubah – yang berlaku adalah ketentuan yang tampil di akun Anda setelah mendaftar.`,

    /* How to use the code */
    useCodeTitle: (e) => `Cara memakai kode referral ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `Di mana memasukkan kode referral ${e.name}?`,
    forgotCode: "Lupa memasukkan kode? Menambahkannya setelah pendaftaran",
    asInvited: "Yang Anda dapatkan sebagai pengguna yang diundang",
    interfaceNote: (e) => (
      <>
        Nama kolom dan tombol dalam tanda kutip berasal dari antarmuka {e.name} berbahasa Inggris yang kami periksa; di antarmuka berbahasa Indonesia,
        namanya bisa berbeda.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Cara daftar di ${e.name} langkah demi langkah`,
    howToIntro: (e) => (
      <>
        Di {e.name}, Anda bisa membuat akun dengan {orList(e.signup.methods)}. Berikut langkah pendaftaran sesuai dokumentasi {e.name}, termasuk tahap
        saat kode referral <strong>{e.referralCode}</strong> berperan.
      </>
    ),
    startRegistration: (e) => `Mulai pendaftaran ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Verifikasi identitas (KYC) di ${e.name}`,
    verification: "Verifikasi",
    minAge: "Usia minimum",
    documents: "Dokumen yang diterima",

    /* Key facts */
    factsTitle: (e) => `Sekilas tentang ${e.name}`,
    founded: "Didirikan",
    headquarters: "Kantor pusat",
    futuresFees: "Biaya futures (maker / taker)",
    spotFees: "Biaya spot (maker / taker)",
    maxLeverage: "Leverage maksimum",
    assets: "Aset",
    openInterest: "Open interest",
    volume24h: "Volume derivatif 24 jam",
    users: "Pengguna",
    regulation: "Regulasi",
    factsNote: (date) =>
      `Open interest, volume, dan jumlah pasar: peringkat derivatif CoinMarketCap, ${date}. Biaya: level standar pada tanggal pemeriksaan.`,

    /* Fees */
    feesTitle: (e) => `Penjelasan biaya trading ${e.name}`,
    feesIntro: (e) =>
      `${e.name} memakai model maker / taker: order yang menambah likuiditas ke order book (order limit) membayar biaya maker, sedangkan order yang mengambil likuiditas (order market) membayar biaya taker. Tarif turun seiring naiknya volume 30 hari atau jumlah aset yang Anda simpan.`,
    market: "Pasar",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / kontrak perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `Tarif standar (non-VIP) sesuai publikasi ${e.name}, diperiksa ${date}.`,
    funding: "Funding rate kontrak perpetual dibayar dari trader ke trader, bukan ke exchange.",
    liveSchedule: (e) => `Lihat tabel biaya ${e.name} terbaru`,
    feesCompare: (e, others, links) => (
      <>
        Bagaimana perbandingan tarif ini dengan exchange lain? <Link href={`${links.alternatives}#fees`}>Perbandingan alternatif {e.name}</Link> kami
        menyandingkan biaya {e.name} dengan biaya {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Tentang ${e.name}`,
    products: "Produk",
    prosConsTitle: (e) => `Kelebihan dan kekurangan ${e.name}`,
    pros: "Kelebihan",
    cons: "Kekurangan",
    bestForTitle: (e) => `Untuk siapa ${e.name} paling cocok?`,
    openAccount: (e) => `Buka akun ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Kurang cocok? Lihat <Link href={links.alternatives}>{count} alternatif {e.name} terbaik</Link> dan untuk apa masing-masing paling cocok, atau
        bandingkan {e.name} secara langsung: <Link href={pairs[0].href}>{pairs[0].label}</Link> dan <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `Apakah ${e.name} aman?`,
    availability: "Ketersediaan:",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} tidak tersedia di negara tempat Anda tinggal? <Link href={`${links.alternatives}#countries`}>Tabel negara di halaman alternatif {e.name}</Link>{" "}
        menunjukkan exchange lain yang menerima pengguna dari negara Anda.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `Kode referral ${e.name} dan pendaftaran – FAQ`,
    faqIntro: (e, count) =>
      `Berikut ${count} pertanyaan seputar kode referral ${e.name} ${e.referralCode}, pembuatan dan verifikasi akun, penawaran pengguna baru, serta biaya.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Sumber: dari mana fakta ini berasal",
    sourcesIntro: (e, date) =>
      `Semua informasi di halaman ini tentang kode referral, pendaftaran, verifikasi, penawaran pengguna baru, dan biaya kami baca di situs dan pusat bantuan resmi ${e.name} pada ${date}. Exchange mengubah penawaran dan biaya tanpa pemberitahuan serta menampilkan ketentuan yang berbeda di tiap negara, jadi halaman di bawah inilah acuan akhirnya.`,

    /* Alternatives */
    alternativesTitle: (e) => `Alternatif ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Belum yakin {e.name} cocok untuk Anda? Berikut alternatif terdekat, masing-masing dengan pendaftaran referral sendiri.{" "}
        <Link href={links.alternatives}>Perbandingan lengkap alternatif {e.name}</Link> mengukur ke-{count} exchange ini terhadap {e.name} berdasarkan biaya,
        leverage, produk, verifikasi, dan ketersediaan di tiap negara.
      </>
    ),
    headToHeadTitle: (e) => `Perbandingan langsung ${e.name}`,
    headToHeadIntro: (e) =>
      `Sedang menimbang antara ${e.name} dan satu exchange lain? Setiap pasangan punya perbandingan sendiri tentang biaya, leverage, produk, negara, dan penawaran referral:`,
    compareAll: (e, count) => `Bandingkan ke-${count} alternatif ${e.name}`,
    allComparisons: "Semua perbandingan exchange →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Peringatan risiko:</strong> Derivatif kripto adalah instrumen yang kompleks. Leverage melipatgandakan keuntungan sekaligus kerugian, dan Anda
        bisa kehilangan seluruh margin dalam hitungan menit. Halaman ini hanya untuk informasi dan bukan nasihat keuangan. Kami mungkin menerima komisi jika
        Anda mendaftar lewat tautan kami – lihat <Link href={disclosureHref}>Pengungkapan afiliasi</Link>.
      </>
    ),
    joinTitle: (e) => `Gabung dengan ${e.name} dalam 3 menit`,
    joinText: (e) => `${benefit(e)}. Satu referral untuk spot dan futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `Kode referral ${name}`,
      signup: (name) => `Pendaftaran dan verifikasi di ${name}`,
      bonus: (name) => `Bonus selamat datang dan hadiah ${name}`,
      fees: (name) => `Biaya dan trading di ${name}`,
      safety: () => "Keamanan dan ketersediaan",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Apa kode referral ${e.name}?`,
          a: `Kode referral ${e.name} adalah ${e.referralCode}. ${r.apply} Di ${e.name} sendiri, kode ini disebut ${r.codeName}.`,
        },
        { topic: "referral", q: `Di mana memasukkan kode referral ${e.name}?`, a: r.whereToEnter },
        { topic: "referral", q: `Bisakah saya menambahkan kode referral ${e.name} setelah mendaftar?`, a: r.afterSignup },
        { topic: "referral", q: `Apa yang saya dapatkan dengan kode referral ${e.name} ${e.referralCode}?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Apakah kode referral ${e.name} berlaku untuk spot dan futures?`,
          a: `Ya. Referral terikat pada akun ${e.name} Anda, bukan pada satu produk, jadi satu kali pendaftaran dengan ${e.referralCode} sudah mencakup ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Apakah memakai kode referral ${e.name} dikenakan biaya?`,
          a: `Tidak. Memasukkan ${e.referralCode} gratis dan tidak menaikkan biaya trading Anda. ${e.name} membiayai program referral dari pendapatan biayanya sendiri.`,
        },
        {
          topic: "signup",
          q: `Bagaimana cara daftar di ${e.name}?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} Anda bisa mendaftar dengan ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `Apakah saya perlu verifikasi identitas (KYC) di ${e.name}?`, a: s.kyc },
        { topic: "signup", q: `Dokumen apa saja yang diterima ${e.name} untuk verifikasi?`, a: s.documents },
        { topic: "signup", q: `Berapa usia minimum untuk membuka akun ${e.name}?`, a: s.minAge },
        {
          topic: "fees",
          q: `Berapa biaya trading di ${e.name}?`,
          a: `Di level standar, ${e.name} mengenakan maker ${e.spotFees.maker} / taker ${e.spotFees.taker} untuk spot dan maker ${e.futuresFees.maker} / taker ${e.futuresFees.taker} untuk futures perpetual.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `Di negara mana saja ${e.name} tidak tersedia?`, a: e.restricted },
      ];
    },
  },
};
