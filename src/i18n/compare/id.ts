/**
 * The sentences of the comparison pages in Indonesian. Same functions and the same logic as `./en.ts`, written in
 * Indonesian grammar.
 *
 * Wording: "exchange" (lower-case, no plural), "alternatif Binance", "kode referral", "biaya", "maker / taker",
 * "verifikasi identitas", address "Anda", the site "kami". Exchange names never change and follow their head noun
 * ("biaya Binance", "alternatif OKX"); nothing is glued to a name. Indonesian has no plural or verb agreement, so
 * `verb()` is only used where the sentence itself differs (one regional platform or one per exchange). Counts with a
 * variable are digit + bare noun ("6 alternatif"); "all 6" / "the 6" is "ke-6 alternatif ini". Fee rates arrive in
 * Indonesian notation (0,02%); leverage stays 150x; counts through `toLocaleString("id-ID")`.
 *
 * Capitals: an inserted data text keeps its first letter when it starts with "Anda", a name, a token or an acronym;
 * a plain Indonesian first word ("Wajib", "Ya", "Tidak", "Hingga" …) is lower-cased inside a sentence. `pick` and
 * `chooseIf` are inserted unchanged.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
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
  lcFirst,
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

const locale = "id";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("id-ID");

/* -------------------------------- capitals -------------------------------- */

/** First words of a data text that are names (or "Anda") and keep their capital inside a sentence. */
const keepCapital = new Set([
  "Anda",
  "Binance",
  "Bybit",
  "Bitget",
  "Gate",
  "Simple",
  "Launchpool",
  "Launchpad",
  "Jumpstart",
  "Merkle",
  "Visa",
  "Mastercard",
  "Pusat",
  "Uni",
  "Wilayah",
  "Eropa",
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
  "Indonesia",
  "Malta",
  "Austria",
  "Wina",
  "Dubai",
]);
/**
 * Lower-cases the first letter of a data text inside a sentence ("Wajib untuk semua produk" → "wajib untuk semua
 * produk", "Ya – dalam 30 hari …" → "ya – dalam 30 hari …", "Hingga 150x …" → "hingga 150x …"). A text that starts
 * with "Anda", a name, a token or an acronym (KYC, BTC, OKX, KuCoin) or a digit is left unchanged.
 */
const lcData = (s: string) => {
  const first = s.match(/^\p{L}+/u)?.[0] ?? "";
  return /^\p{Lu}\p{Ll}+$/u.test(first) && !keepCapital.has(first) ? s.charAt(0).toLowerCase() + s.slice(1) : s;
};

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** The `pick` lines of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;
/** `afterSignupShort` without its leading "Ya – ". */
const withoutYes = (s: string) => lcData(s.replace(/^Ya\s*–\s*/, ""));

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` after "menyediakan" in sentences ("menyediakan copy trading"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy trading", noun: "copy trading" },
  tradingBots: { label: "Bot trading", noun: "bot trading" },
  options: { label: "Opsi", noun: "trading opsi" },
  demoTrading: { label: "Trading demo", noun: "trading demo" },
  margin: { label: "Margin spot", noun: "trading margin spot" },
  p2p: { label: "Trading P2P", noun: "trading P2P" },
  fiat: { label: "Pembelian dengan kartu / bank", noun: "pembelian kripto dengan kartu atau transfer bank" },
  earn: { label: "Earn / staking", noun: "produk Earn" },
  launchpad: { label: "Launchpad / launchpool", noun: "launchpad" },
  web3Wallet: { label: "Dompet Web3", noun: "dompet Web3 self-custody" },
  card: { label: "Kartu kripto", noun: "kartu kripto" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("di Amerika Serikat"), `short` for the tables, `residents` as "penduduk …". */
const countryWords: Record<CountryKey, { name: string; short: string; residents: string }> = {
  us: { name: "Amerika Serikat", short: "Amerika Serikat", residents: "penduduk Amerika Serikat" },
  uk: { name: "Inggris", short: "Inggris", residents: "penduduk Inggris" },
  ca: { name: "Kanada", short: "Kanada", residents: "penduduk Kanada" },
  de: { name: "Jerman", short: "Jerman", residents: "penduduk Jerman" },
  fr: { name: "Prancis", short: "Prancis", residents: "penduduk Prancis" },
  nl: { name: "Belanda", short: "Belanda", residents: "penduduk Belanda" },
  es: { name: "Spanyol", short: "Spanyol", residents: "penduduk Spanyol" },
  it: { name: "Italia", short: "Italia", residents: "penduduk Italia" },
  au: { name: "Australia", short: "Australia", residents: "penduduk Australia" },
  jp: { name: "Jepang", short: "Jepang", residents: "penduduk Jepang" },
  sg: { name: "Singapura", short: "Singapura", residents: "penduduk Singapura" },
  hk: { name: "Hong Kong", short: "Hong Kong", residents: "penduduk Hong Kong" },
  in: { name: "India", short: "India", residents: "penduduk India" },
  ae: { name: "Uni Emirat Arab", short: "UEA", residents: "penduduk UEA" },
};
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key] }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Dibatasi",
  regional: "Situs regional",
  partial: "Dibatasi sebagian",
  open: "Tidak dibatasi",
};

/** The market of a fee comparison: "spot" / "futures perpetual". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "spot" : "futures perpetual");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} dan ${x.name} mengenakan biaya standar ${label} yang sama: maker ${fa.maker} / taker ${fa.taker}.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} lebih murah untuk maker dan taker`
      : mm !== 0
        ? `${who} lebih murah untuk maker, sedangkan taker membayar biaya yang sama`
        : `${who} lebih murah untuk taker, sedangkan maker membayar biaya yang sama`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} lebih murah untuk maker, ${x.name} untuk taker`
          : `${x.name} lebih murah untuk maker, ${a.name} untuk taker`;
  return `Untuk ${label}, ${a.name} mengenakan biaya maker ${fa.maker} / taker ${fa.taker} dan ${x.name} ${fx.maker} / ${fx.taker} – ${verdict}.`;
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
    `Untuk ${marketName(market)}, ${x.name} mengenakan ${feePair(fx)} (maker / taker).`,
    lower.length ? `Lebih murah: ${rates(lower)}.` : `Tidak satu pun dari ke-${alts.length} alternatif ini lebih murah.`,
    same.length ? `Biaya sama: ${names(same)}.` : "",
    higher.length ? `Lebih mahal: ${rates(higher)}.` : "",
    mixed.length ? `Lebih murah hanya untuk maker atau hanya untuk taker: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Biaya ${label} lebih rendah: ${feePair(fa)} dibanding ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Biaya maker ${label} lebih rendah: ${fa.maker} dibanding ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Biaya taker ${label} lebih rendah: ${fa.taker} dibanding ${fx.taker}`);
    else if (m < 0) out.push(`Biaya maker ${label} lebih rendah: ${fa.maker} dibanding ${fx.maker} (tetapi biaya taker lebih tinggi)`);
    else if (t < 0) out.push(`Biaya taker ${label} lebih rendah: ${fa.taker} dibanding ${fx.taker} (tetapi biaya maker lebih tinggi)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Leverage maksimum lebih tinggi: ${leverageOf(a)}x dibanding ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Open interest derivatif lebih besar: ${formatBn(a.market.openInterestBn)} dibanding ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Jumlah pasar derivatif lebih banyak: ${count(a.market.markets)} dibanding ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Kode referral yang terlupa masih bisa ditambahkan (${withoutYes(bare(a.referral.afterSignupShort))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Menyediakan ${joinList(notOffered.map((f) => f.noun))}, yang tidak ada di ${x.name}`);
  if (notFound.length)
    out.push(`Menyediakan ${joinList(notFound.map((f) => f.noun))} – kami tidak menemukan produk seperti ini di situs ${x.name} sendiri`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Platform berizin MiCA untuk Wilayah Ekonomi Eropa (EEA): ${bare(altInfo(a).mica)}`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Tidak membatasi ${joinList(openWhere.map((c) => c.name))}, sementara ${x.name} tidak tersedia di sana`);
  if (regionalWhere.length)
    out.push(`Melayani pengguna di ${joinList(regionalWhere.map((c) => c.name))} lewat platform regional, sementara ${x.name} tidak tersedia di sana`);
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
  const ownNote = own.note ? ` (${own.note})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} sendiri mencantumkan ${c.name} dalam daftar negara yang dibatasi.`);
  else if (own.status === "partial") parts.push(`${x.name} membatasi sebagian layanan di ${c.name}${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} melayani ${c.residents} lewat platform regional${ownNote}.`);
  else parts.push(`${x.name} tidak mencantumkan ${c.name} sebagai negara yang dibatasi.`);
  if (g.open.length) parts.push(`${names(g.open)} tidak mencantumkan ${c.name} sebagai negara yang dibatasi.`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} melayani ${c.residents} lewat ${verb(g.regional, "platform regional tersendiri", "platform regional masing-masing")}.`,
    );
  if (g.partial.length) parts.push(`Dibatasi sebagian: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length) parts.push(`${names(g.restricted)}${own.status === "restricted" ? " juga" : ""} membatasi ${c.name}.`);
  if (!g.open.length && !g.regional.length) parts.push(`Tidak satu pun dari ke-${alts.length} alternatif ini terbuka sepenuhnya bagi ${c.residents}.`);
  parts.push(
    "Daftar negara bisa berubah, dan negara yang tidak tercantum dalam daftar bukan jaminan bahwa semua produk tersedia di sana – yang menentukan adalah ketentuan exchange itu sendiri.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Halaman ini membandingkan ${alts.length} alternatif ${x.name}: ${names(alts)}. ${picks(alts)} Ke-${alts.length} exchange ini mewajibkan verifikasi identitas bagi pengguna baru dan masing-masing memiliki daftar negara yang dibatasi sendiri, jadi periksa tabel negara sebelum mendaftar.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Tentukan apa yang harus lebih baik daripada di ${x.name}`,
      text: `Biaya lebih rendah, leverage lebih besar, lebih banyak koin, atau sekadar exchange yang menerima negara Anda: tabel di halaman ini menunjukkan di bagian mana setiap alternatif unggul dari ${x.name} dan di bagian mana tidak.`,
    },
    {
      title: "Pastikan exchange menerima negara Anda",
      text: "Setiap exchange memiliki daftar negara yang dibatasi sendiri, dan sebagian mengarahkan Anda ke platform regional dengan produk dan limit yang berbeda. Periksa tabel negara sebelum mendaftar.",
    },
    {
      title: "Daftar lewat tautan referral",
      text: `${names(signupOnly)} hanya menerima kode referral saat pendaftaran atau tidak menjelaskan cara menambahkannya belakangan, jadi gunakan tautan sebelum akun dibuat.${later.length ? ` ${names(later)} mengizinkan kode ditambahkan setelah pendaftaran dengan syarat tertentu.` : ""}`,
    },
    {
      title: "Verifikasi identitas sebelum memindahkan dana",
      text: `Ke-${alts.length} alternatif ini mewajibkan verifikasi identitas bagi pengguna baru, dan di sebagian besar exchange tersebut deposit atau trading tetap terkunci hingga verifikasi selesai. Siapkan paspor, kartu identitas, atau SIM.`,
    },
    {
      title: `Tutup posisi terbuka di ${x.name}`,
      text: `Posisi futures dan margin tidak bisa dipindahkan dari satu exchange ke exchange lain. Tutup posisi itu di ${x.name} lebih dulu, atau pertahankan akun hingga posisinya berakhir.`,
    },
    {
      title: "Tarik dana ke alamat deposit yang baru",
      text: "Salin alamat deposit dari exchange baru, pilih koin dan jaringan yang sama di kedua sisi, lalu kirim jumlah kecil sebagai uji coba lebih dulu. Transfer lewat jaringan yang salah bisa hilang.",
    },
    {
      title: `Tentukan apa yang dilakukan dengan akun ${x.name} Anda`,
      text: `Anda bisa mempertahankan akun itu – akun di exchange yang berbeda tidak saling bergantung. Level biaya, referral, dan hadiah yang belum terpakai tetap berada di ${x.name} dan tidak ikut pindah.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const highest = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `Apa alternatif ${x.name} terbaik?`,
      a: `Tidak ada satu alternatif ${x.name} yang paling baik – jawabannya bergantung pada alasan Anda ingin pindah. ${picks(alts)} Halaman ini membandingkan ke-${n} exchange tersebut dengan ${x.name} dari sisi biaya, leverage, produk, ketersediaan di tiap negara, dan verifikasi, dengan angka dari situs resmi masing-masing exchange yang diperiksa pada ${date}.`,
    },
    {
      q: `Exchange apa saja yang mirip dengan ${x.name}?`,
      a: `Yang paling mirip adalah ${names(alts)}. Seperti ${x.name}, semuanya merupakan exchange terpusat yang menyediakan trading spot dan futures dengan leverage dalam satu akun serta menjalankan program referral untuk pengguna baru. Perbedaannya ada pada biaya, leverage maksimum, jumlah aset yang diperdagangkan, dan negara yang diterima.`,
    },
    {
      q: `Apa alternatif ${x.name} terbesar?`,
      a: `Diukur dari open interest derivatif di CoinMarketCap (${prettyDate(site.marketDataDate)}), ${names(oi)} menjadi yang terbesar di antara ke-${n} alternatif ini dengan ${formatBn(oi[0].market.openInterestBn)}. ${x.name} sendiri tercatat ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Alternatif ${x.name} mana yang biayanya paling rendah?`,
      a: `${names(lowF)} memiliki biaya standar terendah untuk futures di antara ke-${n} alternatif ini: ${feePair(lowF[0].futuresFees)} (maker / taker). Untuk spot, ${names(lowS)} paling murah dengan ${feePair(lowS[0].spotFees)}. ${x.name} mengenakan ${feePair(x.futuresFees)} untuk futures dan ${feePair(x.spotFees)} untuk spot.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Angka ini berlaku untuk level standar; level VIP dan token milik exchange menurunkannya lebih jauh.`,
    },
    {
      q: `Exchange apa saja yang lebih murah daripada ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Untuk futures perpetual: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, dibanding ${feePair(x.futuresFees)} di ${x.name}.` : `Untuk futures perpetual, tidak satu pun dari ke-${n} alternatif ini lebih murah dari tarif ${x.name} sebesar ${feePair(x.futuresFees)}.`} ${cheaperS.length ? `Untuk spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, dibanding ${feePair(x.spotFees)} di ${x.name}.` : `Untuk spot, tidak ada yang lebih murah dari tarif ${x.name} sebesar ${feePair(x.spotFees)}.`} Semua angka dalam format maker / taker untuk level standar.`
          : `Di level standar, tidak satu pun dari ke-${n} alternatif ini lebih murah daripada ${x.name}: ${x.name} mengenakan ${feePair(x.futuresFees)} untuk futures dan ${feePair(x.spotFees)} untuk spot (maker / taker), tarif terendah dalam perbandingan ini. Alternatif ini tetap layak dipertimbangkan karena alasan lain – regulasi, produk, atau negara yang diterima.`,
    },
    {
      q: `Alternatif ${x.name} mana yang menawarkan leverage tertinggi?`,
      a: `${names(highest)} menawarkan leverage tertinggi di antara ke-${n} alternatif ini: ${lcData(bare(highest[0].maxLeverage))}. Sisanya: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. ${x.name} sendiri menawarkan ${lcData(bare(x.maxLeverage))}. Leverage tinggi meningkatkan risiko likuidasi secara drastis.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Alternatif ${x.name} apa saja yang bisa saya gunakan di ${c.name}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Apakah ada alternatif ${x.name} tanpa KYC?`,
      a: `Tidak ada di antara ke-${n} alternatif ini. Masing-masing mewajibkan verifikasi identitas bagi pengguna baru: ${alts.map((a) => `${a.name} – ${lcData(bare(a.signup.kycShort))}`).join("; ")}. ${x.name} sendiri: ${stop(lcData(x.signup.kycShort))}`,
    },
    {
      q: `Alternatif ${x.name} mana yang diatur berdasarkan MiCA di Uni Eropa?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${bare(altInfo(a).mica)})`))} menyebutkan entitas berizin MiCA untuk penduduk Wilayah Ekonomi Eropa (EEA).` : `Tidak satu pun dari ke-${n} alternatif ini menyebutkan entitas berizin MiCA.`}${noMica.length ? ` ${names(noMica)} tidak menyebutkan izin MiCA di halaman resmi ${verb(noMica, "exchange tersebut", "masing-masing")}.` : ""} ${xInfo.mica ? `${x.name} sendiri: ${stop(xInfo.mica)}` : `${x.name} sendiri tidak menyebutkan entitas seperti itu.`} Platform regional biasanya memiliki pilihan produk, biaya, dan limit tersendiri.`,
    },
    {
      q: `Alternatif ${x.name} mana yang paling aman?`,
      a: `Tidak ada exchange terpusat yang bebas risiko, jadi perbandingan yang jujur adalah melihat apa yang dipublikasikan masing-masing exchange. ${alts.map((a, i) => `${a.name}: bukti cadangan${i === 0 ? " (proof of reserves)" : ""} – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Tidak ada dana perlindungan yang disebutkan."}`).join(" ")} Di exchange mana pun, simpan hanya dana yang memang Anda pakai untuk trading aktif.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Alternatif ${x.name} mana yang menyediakan ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} menyediakan ${f.noun}.` : `Tidak satu pun dari ke-${n} alternatif ini menampilkan ${f.noun} di situs resmi masing-masing.`}${no.length ? ` ${names(no)} tidak menyediakan produk ini.` : ""}${unknown.length ? ` Di situs ${names(unknown)}, kami tidak menemukan produk seperti ini saat pemeriksaan.` : ""} ${own === true ? `${x.name} sendiri juga menyediakannya.` : own === false ? `${x.name} sendiri tidak menyediakannya.` : `Situs ${x.name} sendiri tidak menampilkan produk seperti ini.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Alternatif ${x.name} mana yang memiliki koin paling banyak?`,
      a: `Menurut angka masing-masing exchange: ${alts.map((a) => `${a.name} – ${lcData(bare(a.assets))}`).join("; ")}. ${x.name}: ${stop(lcData(x.assets))} Setiap exchange menghitung dengan cara berbeda – sebagian menghitung koin, sebagian lagi pasangan trading – jadi angka ini tidak bisa dibandingkan secara langsung.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Bagaimana cara pindah dari ${x.name} ke exchange lain?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Bisakah saya mempertahankan akun ${x.name} saat membuka akun di exchange lain?`,
      a: `Ya. Masing-masing exchange merupakan perusahaan tersendiri, jadi akun di satu exchange tidak memengaruhi akun di exchange lain dan Anda bisa memakai keduanya secara bersamaan. Yang tidak ikut pindah adalah semua yang terikat pada akun: referral Anda di ${x.name}, level biaya, hadiah selamat datang, dan riwayat trading tetap berada di ${x.name}.`,
    },
    {
      q: `Bisakah saya memindahkan posisi futures terbuka dari ${x.name} ke exchange lain?`,
      a: `Tidak. Posisi futures hanya ada di exchange tempat posisi itu dibuka. Untuk pindah, tutup posisi di ${x.name}, tarik dananya, lalu buka posisi baru di exchange lain – dengan harga dan biaya yang berlaku di sana.`,
    },
    {
      q: `Apakah alternatif ${x.name} memiliki kode referral?`,
      a: `Ya, ke-${n} alternatif ini memilikinya: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Kode referral bisa dipakai secara gratis dan tidak menaikkan biaya trading Anda.`,
    },
    {
      q: `Bisakah saya menambahkan kode referral belakangan di alternatif ${x.name}?`,
      a: `${alts.map((a) => `${a.name}: ${lcData(bare(a.referral.afterSignupShort))}`).join(". ")}. Cara yang aman di semua exchange adalah mendaftar lewat tautan referral.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Apakah ${a.name} lebih baik daripada ${x.name}?`,
      a: `${ahead.length ? `${a.name} unggul dari ${x.name} di poin berikut: ${ahead.map(lcFirst).join("; ")}.` : `Dari poin yang kami bandingkan, ${a.name} tidak memiliki keunggulan terukur atas ${x.name}.`} ${behind.length ? `${x.name} unggul di: ${behind.map(lcFirst).join("; ")}.` : `${x.name} tidak unggul di satu poin pun.`} ${a.name} cocok jika ${bare(altInfo(a).chooseIf[0])}.`,
    };
  });

  return [
    { id: "choosing", title: `Memilih alternatif ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Biaya dan leverage", faqs: fees },
    { id: "countries", title: "Negara, KYC, dan regulasi", faqs: countryFaqs },
    { id: "features", title: "Produk dan koin", faqs: featureFaqs },
    { id: "switching", title: `Pindah dari ${x.name} dan kode referral`, faqs: switching },
    { id: "versus", title: `${x.name} vs alternatifnya`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Apa saja alternatif ${x.name} terbaik?`,
    a: `${picks(alts)} Halaman alternatif ${x.name} kami membandingkan ke-${alts.length} exchange ini dengan ${x.name} dari sisi biaya, leverage, produk, ketersediaan di tiap negara, dan verifikasi.`,
  };
}

export const id: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Ya", no: "Tidak", notFound: "Tidak ditemukan di situs resmi" },
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
