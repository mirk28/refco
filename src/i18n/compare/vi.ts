/**
 * The sentences of the comparison pages in Vietnamese. Same functions and the same logic as `./en.ts`, written in
 * Vietnamese grammar.
 *
 * Wording: "sàn giao dịch" / "sàn", "sàn thay thế Binance", "mã giới thiệu", "phí", "maker / taker", "xác minh
 * danh tính", address "bạn", the site "chúng tôi". Exchange names never change and stand after their noun ("phí
 * Binance", "sàn thay thế OKX"). Vietnamese has no plural or verb agreement, so `verb()` is only used where the
 * sentence itself differs (one regional platform or one per exchange). Country names stand alone in `name`; the
 * sentences add "tại" (statements) or "ở" (questions). The United Arab Emirates is "UAE" in `name` and `short`;
 * `full` holds the first-mention form "Các Tiểu vương quốc Ả Rập Thống nhất (UAE)" used in the country question.
 * Fee rates arrive in Vietnamese notation (0,02%); leverage stays 150x; counts through `toLocaleString("vi-VN")`.
 *
 * Capitals: inserted data texts keep their first letter, except the fixed starters of section 7 of the language
 * sheet – "Có – / Không – / Theo yêu cầu – / Chưa …" of `afterSignupShort`, "Tối đa" of `maxLeverage`, "Bạn" of
 * `chooseIf`, "Hơn" of `assets` – and common Vietnamese words at the start of `kycShort` ("Bắt buộc", "Cần" …),
 * which are lower-cased inside a sentence. A name or an abbreviation at the start is never touched.
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

const locale = "vi";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("vi-VN");

/* -------------------------------- capitals -------------------------------- */

/** Lower-cases the first letter (only for texts whose first word is fixed or written here). */
const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
/**
 * Lower-cases the first word only when it is one of the fixed starters of the data texts or a common Vietnamese
 * word ("Tối đa 150x …" → "tối đa 150x …", "Bạn muốn …" → "bạn muốn …", "Bắt buộc …" → "bắt buộc …").
 * Anything else – a name, KYC, BTC – keeps its capital.
 */
const lcStart = (s: string) =>
  s.replace(/^(Có|Không|Theo yêu cầu|Chưa|Tối đa|Bạn|Hơn|Bắt buộc|Cần|Yêu cầu|Phải|Chỉ)(?=[\s–:,]|$)/, (w) => lcFirst(w));

/** Ends a data text with a full stop unless it already ends a sentence. */
const stop = (s: string) => (/[.!?]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A data text without a final full stop – for texts that code joins itself. */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** The `pick` lines of several exchanges, joined with ". " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join(". ")}.`;
/** `afterSignupShort` without its leading "Có – ". */
const withoutYes = (s: string) => s.replace(/^Có\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` after "có" / "cung cấp" in sentences ("có copy trading"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy trading", noun: "copy trading" },
  tradingBots: { label: "Bot giao dịch", noun: "bot giao dịch" },
  options: { label: "Quyền chọn", noun: "giao dịch quyền chọn" },
  demoTrading: { label: "Giao dịch demo", noun: "giao dịch demo" },
  margin: { label: "Spot Margin", noun: "giao dịch Spot Margin" },
  p2p: { label: "Giao dịch P2P", noun: "giao dịch P2P" },
  fiat: { label: "Mua bằng thẻ / ngân hàng", noun: "dịch vụ mua tiền mã hóa bằng thẻ hoặc chuyển khoản ngân hàng" },
  earn: { label: "Earn / staking", noun: "sản phẩm Earn" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Ví Web3", noun: "ví Web3 tự lưu ký" },
  card: { label: "Thẻ crypto", noun: "thẻ crypto" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences and `short` for the tables; `full` is the first mention of a country in a question. */
const countryWords: Record<CountryKey, { name: string; full: string }> = {
  us: { name: "Mỹ", full: "Mỹ" },
  uk: { name: "Vương quốc Anh", full: "Vương quốc Anh" },
  ca: { name: "Canada", full: "Canada" },
  de: { name: "Đức", full: "Đức" },
  fr: { name: "Pháp", full: "Pháp" },
  nl: { name: "Hà Lan", full: "Hà Lan" },
  es: { name: "Tây Ban Nha", full: "Tây Ban Nha" },
  it: { name: "Ý", full: "Ý" },
  au: { name: "Úc", full: "Úc" },
  jp: { name: "Nhật Bản", full: "Nhật Bản" },
  sg: { name: "Singapore", full: "Singapore" },
  hk: { name: "Hồng Kông", full: "Hồng Kông" },
  in: { name: "Ấn Độ", full: "Ấn Độ" },
  ae: { name: "UAE", full: "Các Tiểu vương quốc Ả Rập Thống nhất (UAE)" },
};
/** `residents`: "người cư trú tại Mỹ". */
const countries = countryList.map((c) => ({
  key: c.key,
  name: countryWords[c.key].name,
  short: countryWords[c.key].name,
  full: countryWords[c.key].full,
  residents: `người cư trú tại ${countryWords[c.key].name}`,
}));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Bị hạn chế",
  regional: "Trang khu vực",
  partial: "Hạn chế một phần",
  open: "Không bị hạn chế",
};

/** The market of a fee comparison: "giao dịch Spot" / "hợp đồng vĩnh cửu". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "giao dịch Spot" : "hợp đồng vĩnh cửu");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} và ${x.name} áp dụng cùng mức phí tiêu chuẩn cho ${label}: maker ${fa.maker} / taker ${fa.taker}.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} rẻ hơn cho cả maker lẫn taker`
      : mm !== 0
        ? `${who} rẻ hơn cho maker, phí taker bằng nhau`
        : `${who} rẻ hơn cho taker, phí maker bằng nhau`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} rẻ hơn cho maker, ${x.name} rẻ hơn cho taker`
          : `${x.name} rẻ hơn cho maker, ${a.name} rẻ hơn cho taker`;
  return `Với ${label}, ${a.name} thu phí maker ${fa.maker} / taker ${fa.taker}, còn ${x.name} thu ${fx.maker} / ${fx.taker} – ${verdict}.`;
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
    `Với ${marketName(market)}, ${x.name} thu ${feePair(fx)} (maker / taker).`,
    lower.length ? `Rẻ hơn: ${rates(lower)}.` : `Trong ${alts.length} sàn thay thế, không sàn nào rẻ hơn.`,
    same.length ? `Cùng mức phí: ${names(same)}.` : "",
    higher.length ? `Đắt hơn: ${rates(higher)}.` : "",
    mixed.length ? `Chỉ rẻ hơn ở phí maker hoặc phí taker: ${rates(mixed)}.` : "",
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
    if (m < 0 && t < 0) out.push(`Phí ${label} thấp hơn: ${feePair(fa)} thay vì ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Phí maker ${label} thấp hơn: ${fa.maker} thay vì ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Phí taker ${label} thấp hơn: ${fa.taker} thay vì ${fx.taker}`);
    else if (m < 0) out.push(`Phí maker ${label} thấp hơn: ${fa.maker} thay vì ${fx.maker} (nhưng phí taker cao hơn)`);
    else if (t < 0) out.push(`Phí taker ${label} thấp hơn: ${fa.taker} thay vì ${fx.taker} (nhưng phí maker cao hơn)`);
  };
  fee("Spot", a.spotFees, x.spotFees);
  fee("Futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Đòn bẩy tối đa cao hơn: ${leverageOf(a)}x thay vì ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Hợp đồng mở phái sinh lớn hơn: ${formatBn(a.market.openInterestBn)} so với ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Nhiều thị trường phái sinh hơn: ${count(a.market.markets)} so với ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Vẫn liên kết được mã giới thiệu đã quên (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Có ${joinList(notOffered.map((f) => f.noun))}, trong khi ${x.name} không có`);
  if (notFound.length)
    out.push(`Có ${joinList(notFound.map((f) => f.noun))} – trên trang web của chính ${x.name}, chúng tôi không tìm thấy sản phẩm như vậy`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Nền tảng cho EEA được cấp phép theo MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Không hạn chế ${joinList(openWhere.map((c) => c.name))}, nơi ${x.name} không phục vụ người dùng`);
  if (regionalWhere.length)
    out.push(`Phục vụ người dùng tại ${joinList(regionalWhere.map((c) => c.name))} qua nền tảng khu vực, nơi ${x.name} không phục vụ người dùng`);
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
  if (own.status === "restricted") parts.push(`${x.name} liệt kê ${c.name} trong danh sách quốc gia bị hạn chế của chính sàn.`);
  else if (own.status === "partial") parts.push(`${x.name} hạn chế một phần tại ${c.name}${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} phục vụ ${c.residents} qua nền tảng khu vực${ownNote}.`);
  else parts.push(`${x.name} không liệt kê ${c.name} là quốc gia bị hạn chế.`);
  if (g.open.length) parts.push(`${names(g.open)} không liệt kê ${c.name} là quốc gia bị hạn chế.`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} phục vụ ${c.residents} qua ${verb(g.regional, "một nền tảng khu vực riêng", "nền tảng khu vực riêng của từng sàn")}.`,
    );
  if (g.partial.length) parts.push(`Hạn chế một phần: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)}${own.status === "restricted" ? " cũng" : ""} liệt kê ${c.name} là quốc gia bị hạn chế.`);
  if (!g.open.length && !g.regional.length) parts.push(`Trong ${alts.length} sàn thay thế, không sàn nào mở cửa hoàn toàn cho ${c.residents}.`);
  parts.push(
    "Danh sách quốc gia thay đổi theo thời gian, và việc một quốc gia không có tên trong danh sách không đảm bảo mọi sản phẩm đều có ở đó – điều khoản của chính sàn mới có giá trị quyết định.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Trang này so sánh ${alts.length} sàn thay thế ${x.name}: ${names(alts)}. ${picks(alts)} Cả ${alts.length} sàn đều yêu cầu người dùng mới xác minh danh tính (KYC) và mỗi sàn có danh sách quốc gia bị hạn chế riêng, vì vậy hãy xem bảng quốc gia trước khi đăng ký.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Xác định sàn mới phải hơn ${x.name} ở điểm nào`,
      text: `Phí thấp hơn, đòn bẩy cao hơn, nhiều coin hơn hay đơn giản là sàn chấp nhận quốc gia của bạn: bảng trên trang này cho thấy từng sàn thay thế hơn ${x.name} ở điểm nào và không hơn ở điểm nào.`,
    },
    {
      title: "Kiểm tra xem sàn có chấp nhận quốc gia của bạn không",
      text: "Mỗi sàn có danh sách quốc gia bị hạn chế riêng, và một số sàn chuyển bạn sang nền tảng khu vực với sản phẩm và hạn mức khác. Xem bảng quốc gia trước khi đăng ký.",
    },
    {
      title: "Đăng ký qua liên kết giới thiệu",
      text: `${names(signupOnly)} chỉ nhận mã giới thiệu khi đăng ký hoặc không công bố cách thêm mã sau đó, vì vậy hãy dùng liên kết trước khi tạo tài khoản.${later.length ? ` ${names(later)} cho phép liên kết mã sau khi đăng ký nếu đáp ứng điều kiện.` : ""}`,
    },
    {
      title: "Xác minh danh tính trước khi chuyển tiền",
      text: `Cả ${alts.length} sàn thay thế đều yêu cầu người dùng mới xác minh danh tính, và trên phần lớn sàn, nạp tiền hoặc giao dịch bị khóa cho đến khi xác minh xong. Chuẩn bị sẵn hộ chiếu, thẻ căn cước hoặc bằng lái xe.`,
    },
    {
      title: `Đóng vị thế đang mở trên ${x.name}`,
      text: `Vị thế Futures và Margin không chuyển được từ sàn này sang sàn khác. Đóng vị thế trên ${x.name} trước, hoặc giữ tài khoản đến khi vị thế kết thúc.`,
    },
    {
      title: "Rút tiền về địa chỉ nạp tiền mới",
      text: "Sao chép địa chỉ nạp tiền trên sàn mới, chọn cùng coin và cùng mạng ở cả hai bên, rồi gửi thử một khoản nhỏ trước. Tiền chuyển qua sai mạng có thể bị mất.",
    },
    {
      title: `Quyết định làm gì với tài khoản ${x.name}`,
      text: `Bạn có thể giữ tài khoản – tài khoản trên mỗi sàn độc lập với nhau. Cấp phí giao dịch, liên kết giới thiệu và phần thưởng chưa dùng vẫn thuộc về ${x.name} và không chuyển sang sàn mới.`,
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
      q: `Sàn thay thế ${x.name} tốt nhất là sàn nào?`,
      a: `Không có sàn thay thế ${x.name} nào tốt nhất cho mọi trường hợp – câu trả lời tùy vào lý do bạn muốn chuyển sàn. ${picks(alts)} Trang này so sánh cả ${n} sàn với ${x.name} về phí, đòn bẩy, sản phẩm, quốc gia được phục vụ và xác minh danh tính, với số liệu lấy từ trang web của chính các sàn, kiểm tra ngày ${date}.`,
    },
    {
      q: `Sàn giao dịch nào tương tự ${x.name}?`,
      a: `Sàn gần với ${x.name} nhất là ${names(alts)}. Giống ${x.name}, đây đều là sàn giao dịch tập trung cho phép giao dịch Spot và Futures có đòn bẩy trong cùng một tài khoản và có chương trình giới thiệu cho người dùng mới. Điểm khác biệt nằm ở phí, đòn bẩy tối đa, số tài sản niêm yết và quốc gia mà mỗi sàn chấp nhận.`,
    },
    {
      q: `Sàn thay thế ${x.name} lớn nhất là sàn nào?`,
      a: `Xét theo hợp đồng mở (Open Interest) phái sinh trên CoinMarketCap (số liệu ngày ${prettyDate(site.marketDataDate)}), ${names(oi)} là sàn lớn nhất trong ${n} sàn thay thế với ${formatBn(oi[0].market.openInterestBn)}. Bản thân ${x.name} ở mức ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Sàn thay thế ${x.name} nào có phí thấp nhất?`,
      a: `${names(lowF)} có phí Futures tiêu chuẩn thấp nhất trong ${n} sàn: ${feePair(lowF[0].futuresFees)} (maker / taker). Với giao dịch Spot, ${names(lowS)} rẻ nhất: ${feePair(lowS[0].spotFees)}. ${x.name} thu ${feePair(x.futuresFees)} cho Futures và ${feePair(x.spotFees)} cho Spot.${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} Đây là mức phí tiêu chuẩn; cấp VIP và token riêng của sàn còn giảm phí thêm nữa.`,
    },
    {
      q: `Sàn nào có phí rẻ hơn ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Với hợp đồng vĩnh cửu: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, so với ${feePair(x.futuresFees)} trên ${x.name}.` : `Với hợp đồng vĩnh cửu, không sàn nào trong ${n} sàn thay thế có phí thấp hơn mức ${feePair(x.futuresFees)} của ${x.name}.`} ${cheaperS.length ? `Với giao dịch Spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, so với ${feePair(x.spotFees)} trên ${x.name}.` : `Với giao dịch Spot, không sàn nào trong số đó có phí thấp hơn mức ${feePair(x.spotFees)} của ${x.name}.`} Tất cả số liệu là phí maker / taker ở mức phí tiêu chuẩn.`
          : `Ở mức phí tiêu chuẩn, không sàn nào trong ${n} sàn thay thế rẻ hơn ${x.name}: ${x.name} thu ${feePair(x.futuresFees)} cho Futures và ${feePair(x.spotFees)} cho Spot (maker / taker), mức thấp nhất trong so sánh này. Sàn thay thế vẫn đáng cân nhắc vì lý do khác – quy định pháp lý, sản phẩm hoặc quốc gia mà sàn chấp nhận.`,
    },
    {
      q: `Sàn thay thế ${x.name} nào có đòn bẩy cao nhất?`,
      a: `${names(highest)} có đòn bẩy cao nhất trong ${n} sàn: ${lcStart(highest[0].maxLeverage)}. Các sàn còn lại: ${alts
        .filter((a) => !highest.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. Bản thân ${x.name} cho phép ${lcStart(x.maxLeverage)}. Đòn bẩy cao làm tăng mạnh rủi ro bị thanh lý.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Sàn thay thế ${x.name} nào dùng được ở ${c.full}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Có sàn thay thế ${x.name} nào không cần KYC không?`,
      a: `Không có trong ${n} sàn này. Sàn nào cũng yêu cầu người dùng mới xác minh danh tính: ${alts.map((a) => `${a.name} – ${lcStart(bare(a.signup.kycShort))}`).join("; ")}. Riêng ${x.name}: ${stop(lcStart(x.signup.kycShort))}`,
    },
    {
      q: `Sàn thay thế ${x.name} nào được cấp phép theo MiCA tại EU?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} công bố pháp nhân được cấp phép theo MiCA dành cho người cư trú tại Khu vực Kinh tế châu Âu (EEA).` : `Không sàn nào trong ${n} sàn công bố pháp nhân được cấp phép theo MiCA.`}${noMica.length ? ` ${names(noMica)} không nêu giấy phép MiCA nào trên trang của chính sàn.` : ""} ${xInfo.mica ? `Riêng ${x.name}: ${stop(xInfo.mica)}` : `Bản thân ${x.name} không nêu pháp nhân nào như vậy.`} Nền tảng khu vực thường có danh mục sản phẩm, phí và hạn mức riêng.`,
    },
    {
      q: `Sàn thay thế ${x.name} nào an toàn nhất?`,
      a: `Sàn giao dịch tập trung nào cũng có rủi ro, nên cách so sánh trung thực là xem mỗi sàn công bố những gì. ${alts.map((a, i) => `${a.name}: bằng chứng dự trữ${i === 0 ? " (Proof of Reserves)" : ""} – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Không nêu quỹ bảo vệ người dùng nào."}`).join(" ")} Trên bất kỳ sàn nào, hãy chỉ giữ số tiền bạn đang dùng để giao dịch.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Sàn thay thế ${x.name} nào có ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} có ${f.noun}.` : `Không sàn nào trong ${n} sàn thay thế giới thiệu ${f.noun} trên trang web của chính sàn.`}${no.length ? ` ${names(no)} không cung cấp sản phẩm này.` : ""}${unknown.length ? ` Khi kiểm tra trang web của ${names(unknown)}, chúng tôi không tìm thấy sản phẩm như vậy.` : ""} ${own === true ? `Bản thân ${x.name} cũng có ${f.noun}.` : own === false ? `Bản thân ${x.name} không cung cấp sản phẩm này.` : `Bản thân ${x.name} không giới thiệu sản phẩm như vậy trên trang web của sàn.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Sàn thay thế ${x.name} nào niêm yết nhiều coin nhất?`,
      a: `Theo số liệu của chính các sàn: ${alts.map((a) => `${a.name} – ${lcStart(bare(a.assets))}`).join("; ")}. ${x.name}: ${stop(lcStart(x.assets))} Mỗi sàn đếm theo một cách – có sàn đếm coin, có sàn đếm cặp giao dịch – nên không thể so sánh trực tiếp các con số này.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Làm thế nào để chuyển từ ${x.name} sang sàn khác?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Có giữ được tài khoản ${x.name} khi mở tài khoản trên sàn khác không?`,
      a: `Có. Mỗi sàn là một công ty riêng, nên tài khoản trên sàn này không ảnh hưởng đến tài khoản trên sàn khác và bạn có thể dùng song song cả hai. Những gì gắn với tài khoản thì không chuyển theo: liên kết giới thiệu trên ${x.name}, cấp phí giao dịch, phần thưởng chào mừng và lịch sử giao dịch vẫn ở lại ${x.name}.`,
    },
    {
      q: `Có chuyển được vị thế Futures đang mở từ ${x.name} sang sàn khác không?`,
      a: `Không. Vị thế Futures chỉ tồn tại trên sàn nơi bạn mở vị thế đó. Để chuyển, đóng vị thế trên ${x.name}, rút tiền rồi mở vị thế mới trên sàn kia – với giá và mức phí áp dụng tại sàn đó.`,
    },
    {
      q: `Sàn thay thế ${x.name} có mã giới thiệu không?`,
      a: `Có, cả ${n} sàn: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Dùng mã giới thiệu là miễn phí và không làm tăng phí giao dịch của bạn.`,
    },
    {
      q: `Có thể thêm mã giới thiệu sau khi đăng ký trên sàn thay thế ${x.name} không?`,
      a: `${alts.map((a) => `${a.name}: ${lcStart(bare(a.referral.afterSignupShort))}`).join(". ")}. Cách an toàn trên mọi sàn là đăng ký qua liên kết giới thiệu.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} có tốt hơn ${x.name} không?`,
      a: `${ahead.length ? `${a.name} có ưu thế so với ${x.name} ở những điểm sau: ${ahead.map(lcFirst).join("; ")}.` : `Ở những tiêu chí chúng tôi so sánh, ${a.name} không có ưu thế đo lường được nào so với ${x.name}.`} ${behind.length ? `${x.name} có ưu thế ở: ${behind.map(lcFirst).join("; ")}.` : `${x.name} không có ưu thế ở tiêu chí nào.`} ${a.name} phù hợp nếu ${lcStart(bare(altInfo(a).chooseIf[0]))}.`,
    };
  });

  return [
    { id: "choosing", title: `Chọn sàn thay thế ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Phí và đòn bẩy", faqs: fees },
    { id: "countries", title: "Quốc gia, KYC và pháp lý", faqs: countryFaqs },
    { id: "features", title: "Sản phẩm và coin", faqs: featureFaqs },
    { id: "switching", title: `Chuyển từ ${x.name} và mã giới thiệu`, faqs: switching },
    { id: "versus", title: `${x.name} so với sàn thay thế`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Sàn thay thế ${x.name} tốt nhất là những sàn nào?`,
    a: `${picks(alts)} Trang sàn thay thế ${x.name} của chúng tôi so sánh cả ${alts.length} sàn với ${x.name} về phí, đòn bẩy, sản phẩm, quốc gia được phục vụ và xác minh danh tính.`,
  };
}

export const vi: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Có", no: "Không", notFound: "Không tìm thấy trên trang của sàn" },
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
