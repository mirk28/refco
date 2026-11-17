/**
 * The head-to-head pages ("/vi/<a>-vs-<b>") and the comparison hub ("/vi/so-sanh-san-giao-dich") in Vietnamese.
 * Same keys as `./en.tsx`, written natively for readers in Vietnam.
 *
 * Wording: "sàn" / "sàn giao dịch", "phí", "mã giới thiệu", "đòn bẩy", "bạn"; the site is "chúng tôi". Spot, Futures,
 * Margin, maker / taker, KYC and MiCA stay in Latin letters. The pages call themselves "so sánh trực tiếp", the hub
 * "So sánh sàn giao dịch"; the better value of a row is "Ưu thế", a tie "Ngang nhau". "vs" stays "vs".
 * Names never change and the modifier follows its noun ("mã giới thiệu Binance", "tại Mỹ", "so với OKX").
 * Generated dates: `prettyDate` gives "16 tháng 11, 2026" and is written after "ngày"; the month of a title is "11/2026".
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "vi";
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

/** Names and product words that keep their capital when a text from the data continues a sentence. */
const keepCapital = new Set(["Binance", "OKX", "Bybit", "Bitget", "Gate", "KuCoin", "MEXC", "Spot", "Futures", "Margin"]);
/**
 * A text from the data inside a sentence: lower-cases the first letter of a common first word ("Có –" → "có –",
 * "Tối đa" → "tối đa", "Hơn 320 triệu" → "hơn 320 triệu", "Bạn muốn" → "bạn muốn", "Bắt buộc" → "bắt buộc").
 * Names, product words and abbreviations ("Binance", "Futures", "BTC", "“Referral ID") keep their capital.
 */
const lcFirst = (s: string) => {
  const first = s.split(/[\s,.:;()–]/)[0];
  if (!first || keepCapital.has(first) || first.slice(1) !== first.slice(1).toLowerCase()) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
};
/** "Hơn 320 triệu người dùng đã đăng ký (theo Binance)" → without the bracket; "390 coin, 509 cặp Spot (Bybit API)" → without the bracket. */
const withoutSource = (s: string) => s.replace(/\s*\((?:theo [^()]*|[^()]*\bAPI)\)/, "");
/** "Tối đa 150x (hợp đồng vĩnh cửu BTCUSDT)" → "150x (hợp đồng vĩnh cửu BTCUSDT)", for sentences that already say "đòn bẩy tối đa". */
const leverageText = (e: Exchange) => lcFirst(e.maxLeverage.replace(/^Tối đa\s+/, ""));
/** "thg 11 2026" / "tháng 11 năm 2026" → "11/2026", the way Vietnamese titles write the month. */
const monthSlash = (monthYear: string) => {
  const m = /(\d{1,2})\D+(\d{4})/.exec(monthYear);
  return m ? `${m[1]}/${m[2]}` : monthYear;
};
/** A data text that code closes itself, without a final full stop (`pick`, `chooseIf`). */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** Counts in a sentence with the Vietnamese thousands dot ("1.000"). */
const count = (n: number) => n.toLocaleString("vi-VN");
const offer = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
const has =(e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;
const leverageRisk = "Đòn bẩy cao làm tăng mạnh rủi ro bị thanh lý.";
const regionalNote = "Nền tảng khu vực thường có danh mục sản phẩm, phí và hạn mức riêng.";

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} có ưu thế về ${joinList(rows.map((r) => r.topic))}` : `${e.name} không có ưu thế ở tiêu chí nào`;
  return `Cả ${a.name} lẫn ${b.name} đều không vượt trội ở mọi tiêu chí. Trong ${s.measurable} tiêu chí đo được của bài so sánh này, ${a.name} có ưu thế ở ${s.a.length} tiêu chí, ${b.name} ở ${s.b.length} tiêu chí${s.tie.length ? `, còn ${s.tie.length} tiêu chí ngang nhau` : ""}. ${lead(a, s.a)}. ${lead(b, s.b)}. Chọn ${a.name} nếu ${lcFirst(bare(altInfo(a).chooseIf[0]))}. Chọn ${b.name} nếu ${lcFirst(bare(altInfo(b).chooseIf[0]))}.`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} và ${b.name} có cùng mức đòn bẩy tối đa: ${a.name} ${leverageText(a)}, ${b.name} ${leverageText(b)}.`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} có đòn bẩy tối đa cao hơn – ${leverageText(hi)} – so với ${leverageText(lo)} trên ${lo.name}.`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `Trên bảng xếp hạng phái sinh của CoinMarketCap (ngày ${prettyDate(site.marketDataDate)}), ${a.name} có ${formatBn(a.market.openInterestBn)} hợp đồng mở trên ${count(a.market.markets)} thị trường, ${b.name} có ${formatBn(b.market.openInterestBn)} trên ${count(b.market.markets)} thị trường. ${deeper.name} có thị trường sâu hơn, nghĩa là spread khi đặt lệnh lớn thường hẹp hơn.`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} cung cấp ${joinList(notOffered.map((f) => f.noun))}, còn ${b.name} thì không.` : "",
    notFound.length ? `${a.name} cung cấp ${joinList(notFound.map((f) => f.noun))}; trên trang web của chính ${b.name}, chúng tôi không tìm thấy sản phẩm nào như vậy.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${note})` : "";
  if (status === "restricted") return `${e.name} không phục vụ ${c.residents}${extra}`;
  if (status === "regional") return `${e.name} phục vụ ${c.residents} qua một nền tảng khu vực${extra}`;
  if (status === "partial") return `${e.name} hạn chế một phần người dùng tại ${c.name}${extra}`;
  return `${e.name} không xếp ${c.name} vào danh sách quốc gia bị hạn chế`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("vi").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}. ${statusPhrase(b, c)}. Danh sách quốc gia có thể thay đổi, và việc một quốc gia không có tên trong danh sách không đảm bảo mọi sản phẩm đều được cung cấp ở đó – điều khoản của chính sàn mới là căn cứ quyết định.`;

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
      ? "cả hai sàn đều có"
      : has(a, key)
        ? `chỉ ${a.name} có`
        : has(b, key)
          ? `chỉ ${b.name} có`
          : "không tìm thấy trên trang web của sàn nào";
  const noTokenDiscount = "Sàn không công bố mức giảm phí như vậy.";
  const noFund = "Không công bố quỹ bảo vệ người dùng.";
  const noMica = "không nêu pháp nhân nào được cấp phép theo MiCA trên trang của mình";

  const verdict: Faq[] = [
    { q: `${a.name} hay ${b.name}: sàn nào tốt hơn?`, a: versusAnswer(a, b, s) },
    {
      q: `Điểm khác biệt chính giữa ${a.name} và ${b.name} là gì?`,
      a: `${bare(ia.pick)}. ${bare(ib.pick)}.${aheadA.length ? ` Ưu thế đo được rõ nhất của ${a.name}: ${aheadA.slice(0, 2).map(lcFirst).join("; ")}.` : ""}${aheadB.length ? ` Của ${b.name}: ${aheadB.slice(0, 2).map(lcFirst).join("; ")}.` : ""}`,
    },
    {
      q: `${a.name} có lớn hơn ${b.name} không?`,
      a: `Trên bảng xếp hạng phái sinh của CoinMarketCap (ngày ${marketDate}), ${a.name} có ${formatBn(a.market.openInterestBn)} hợp đồng mở và ${formatBn(a.market.volume24hBn)} khối lượng giao dịch 24 giờ, ${b.name} có ${formatBn(b.market.openInterestBn)} và ${formatBn(b.market.volume24hBn)}. Theo số liệu do chính các sàn công bố, ${a.name} có ${lcFirst(withoutSource(a.users))}, còn ${b.name} có ${lcFirst(withoutSource(b.users))}.`,
    },
    {
      q: `${a.name} hay ${b.name}: sàn nào tốt hơn cho người mới?`,
      a: `Với tài khoản đầu tiên, có ba điều quan trọng: cách mua tiền mã hóa đơn giản, nơi để luyện tập và phí thấp. Mua bằng thẻ hoặc chuyển khoản ngân hàng: ${state("fiat")}. Giao dịch demo: ${state("demoTrading")}. Giao dịch sao chép (copy trading): ${state("copyTrading")}. ${feeSentence(a, b, "spot")} Xác minh danh tính – ${a.name}: ${lcFirst(a.signup.kycShort)}; ${b.name}: ${lcFirst(b.signup.kycShort)}.`,
    },
    {
      q: `${a.name} hay ${b.name}: sàn nào tốt hơn để giao dịch Futures?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} hay ${b.name}: sàn nào phí thấp hơn?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} Đây là mức phí tiêu chuẩn (không VIP); cấp VIP và token của sàn giúp giảm phí thêm nữa.`,
    },
    {
      q: `${a.name} và ${b.name} có giảm phí khi trả phí bằng token của sàn không?`,
      a: `${a.name}: ${a.tokenDiscount || noTokenDiscount} ${b.name}: ${b.tokenDiscount || noTokenDiscount}`,
    },
    { q: `${a.name} hay ${b.name}: sàn nào có đòn bẩy cao hơn?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} hay ${b.name}: sàn nào niêm yết nhiều coin hơn?`,
      a: `Theo số liệu do chính các sàn công bố, ${a.name} niêm yết ${lcFirst(withoutSource(a.assets))}, còn ${b.name} niêm yết ${lcFirst(withoutSource(b.assets))}. Mỗi sàn đếm theo một cách – có sàn đếm coin, có sàn đếm cặp giao dịch – nên không thể so sánh trực tiếp hai con số này.`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `${a.name} hay ${b.name} có dùng được ở ${c.name} không?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `${a.name} và ${b.name} có bắt buộc KYC không?`,
      a: `Có. Cả hai sàn đều yêu cầu người dùng mới xác minh danh tính. ${a.name}: ${lcFirst(a.signup.kycShort)}. ${b.name}: ${lcFirst(b.signup.kycShort)}. Nếu muốn giao dịch mà không xác minh, cả hai sàn đều không phải lựa chọn.`,
    },
    {
      q: `${a.name} hay ${b.name}: sàn nào an toàn hơn?`,
      a: `Không có sàn giao dịch tập trung nào hoàn toàn không có rủi ro, nên cách so sánh khách quan là dựa vào những gì mỗi sàn tự công bố. ${a.name}: ${a.regulation}. Bằng chứng dự trữ – ${ia.reserves}. ${ia.fund ? `${ia.fund}.` : noFund} ${b.name}: ${b.regulation}. Bằng chứng dự trữ – ${ib.reserves}. ${ib.fund ? `${ib.fund}.` : noFund} Trên sàn nào cũng vậy, hãy chỉ giữ số tiền bạn đang chủ động giao dịch.`,
    },
    {
      q: `${a.name} và ${b.name} có được cấp phép theo MiCA tại EU không?`,
      a: `${a.name}: ${ia.mica ? `có – ${ia.mica}` : noMica}. ${b.name}: ${ib.mica ? `có – ${ib.mica}` : noMica}. ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `Không có gì trong ${featureList.length} sản phẩm chúng tôi so sánh: mọi sản phẩm ${x.name} giới thiệu trên trang web của mình, ${y.name} cũng có.`;
  const products: Faq[] = [
    { q: `${a.name} có gì mà ${b.name} không có?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} có gì mà ${a.name} không có?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} và ${b.name} có copy trading, bot giao dịch, quyền chọn và giao dịch demo không?`,
      a: `Copy trading: ${state("copyTrading")}. Bot giao dịch: ${state("tradingBots")}. Quyền chọn (Options): ${state("options")}. Giao dịch demo: ${state("demoTrading")}.${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Ở mục chỉ nêu một sàn, chúng tôi không tìm thấy trang nào về sản phẩm đó trên trang web của sàn còn lại vào ngày ${prettyDate(site.lastReviewed)}.` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `Mã giới thiệu ${a.name} và ${b.name} là gì?`,
      a: `${a.name}: ${a.referralCode} – ${lcFirst(a.referral.whereShort)}. ${b.name}: ${b.referralCode} – ${lcFirst(b.referral.whereShort)}. Cả hai mã đều miễn phí và không làm tăng phí giao dịch của bạn.`,
    },
    {
      q: `${a.name} hay ${b.name}: sàn nào có thưởng đăng ký tốt hơn?`,
      a: `${a.name}: ${lcFirst(offer(a))}. ${b.name}: ${lcFirst(offer(b))}. Phần thưởng chào mừng trên cả hai sàn đều gắn với điều kiện như xác minh danh tính, nạp tiền hoặc khối lượng giao dịch và khác nhau theo quốc gia, vì vậy hãy so sánh điều kiện chứ đừng chỉ nhìn con số quảng cáo.`,
    },
    {
      q: `Có thể liên kết mã giới thiệu sau khi đăng ký ${a.name} hay ${b.name} không?`,
      a: `${a.name}: ${lcFirst(a.referral.afterSignupShort)}. ${b.name}: ${lcFirst(b.referral.afterSignupShort)}. Cách an toàn trên cả hai sàn là đăng ký qua liên kết giới thiệu.`,
    },
    {
      q: `Có thể dùng ${a.name} và ${b.name} cùng lúc không?`,
      a: "Có. Đây là hai công ty riêng biệt, nên tài khoản trên sàn này không ảnh hưởng đến tài khoản trên sàn kia, và nhiều nhà giao dịch giữ tiền trên hai sàn. Bậc phí, mã giới thiệu đã liên kết và phần thưởng gắn với từng tài khoản, không chuyển sang sàn khác.",
    },
    {
      q: `Làm sao chuyển tiền mã hóa từ ${a.name} sang ${b.name}?`,
      a: `1. Mở tài khoản ${b.name} bằng mã giới thiệu ${b.referralCode} và hoàn tất xác minh danh tính. 2. Đóng vị thế Futures và Margin đang mở trên ${a.name} – không thể chuyển vị thế giữa các sàn. 3. Trên ${b.name}, sao chép địa chỉ nạp tiền cho coin và mạng lưới bạn muốn dùng. 4. Rút tiền từ ${a.name} về địa chỉ đó trên cùng mạng lưới, và gửi thử một khoản nhỏ trước: tiền chuyển qua sai mạng lưới có thể bị mất. Chiều ngược lại cũng làm theo đúng các bước này.`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} hay ${b.name}: sàn nào tốt hơn?`, faqs: verdict },
    { id: "fees", title: "Phí, đòn bẩy và coin", faqs: fees },
    { id: "countries", title: "Quốc gia, KYC và độ an toàn", faqs: countries },
    { id: "products", title: "Sản phẩm", faqs: products },
    { id: "referral", title: "Mã giới thiệu và chuyển tiền giữa hai sàn", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} có mức phí Futures tiêu chuẩn thấp nhất (${feePair(lowF[0].futuresFees)} maker / taker), ${names(hi)} có đòn bẩy cao nhất (${leverageOf(hi[0])}x) và ${names(oi)} có thị trường phái sinh sâu nhất với ${formatBn(oi[0].market.openInterestBn)} hợp đồng mở (Open Interest). ${names(mica)} công bố nền tảng được cấp phép theo MiCA cho người cư trú tại Khu vực Kinh tế châu Âu (EEA). Sàn nào tốt hơn với bạn còn tùy vào cặp sàn bạn đang cân nhắc – chọn cặp đó ở bên dưới.`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "Sàn giao dịch tiền mã hóa nào có phí thấp nhất?",
      a: `Ở mức phí tiêu chuẩn, ${names(lowF)} có phí Futures thấp nhất với ${feePair(lowF[0].futuresFees)} (maker / taker), còn ${names(lowS)} có phí Spot thấp nhất với ${feePair(lowS[0].spotFees)}. Các sàn còn lại: ${ranked
        .filter((e) => !lowF.includes(e))
        .map((e) => `${e.name} ${feePair(e.futuresFees)} cho Futures và ${feePair(e.spotFees)} cho Spot`)
        .join("; ")}. Cấp VIP và token của sàn giúp giảm các mức phí này thêm nữa.`,
    },
    {
      q: "Sàn giao dịch tiền mã hóa nào có đòn bẩy cao nhất?",
      a: `${names(hi)}: ${lcFirst(hi[0].maxLeverage)}. Các sàn khác: ${ranked
        .filter((e) => !hi.includes(e))
        .map((e) => `${e.name} ${leverageOf(e)}x`)
        .join(", ")}. ${leverageRisk}`,
    },
    {
      q: "Sàn giao dịch tiền mã hóa nào có thị trường Futures sâu nhất?",
      a: `Tính theo hợp đồng mở (Open Interest) trên bảng xếp hạng phái sinh của CoinMarketCap (ngày ${marketDate}): ${ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`).join(", ")}. Thị trường càng sâu thì spread khi đặt lệnh lớn thường càng hẹp.`,
    },
    {
      q: "Sàn nào có nền tảng được cấp phép theo MiCA cho EEA?",
      a: `${joinList(mica.map((e) => `${e.name} (${altInfo(e).mica})`))}. ${names(noMica)} không nêu pháp nhân nào được cấp phép theo MiCA trên trang của mình. ${regionalNote}`,
    },
    {
      q: "Sàn nào cho phép liên kết mã giới thiệu sau khi đăng ký?",
      a: `${later.map((e) => `${e.name}: ${lcFirst(e.referral.afterSignupShort)}`).join(". ")}. Với ${names(signupOnly)}, mã chỉ được tính khi đăng ký hoặc sàn không hướng dẫn cách liên kết về sau – cách an toàn ở mọi sàn là đăng ký qua liên kết giới thiệu.`,
    },
    {
      q: "Chúng tôi so sánh các sàn như thế nào?",
      a: `Mọi số liệu đều lấy từ trang web hoặc trung tâm trợ giúp của chính sàn – biểu phí, điều khoản, danh sách quốc gia bị hạn chế, trang sản phẩm – và trang nào cũng ghi rõ nguồn. Hợp đồng mở, khối lượng giao dịch và số thị trường phái sinh lấy từ bảng xếp hạng phái sinh của CoinMarketCap. Sàn nào có ưu thế ở một tiêu chí được xác định trực tiếp từ các số liệu đó; chúng tôi không có bảng xếp hạng riêng. Lần kiểm tra hiện tại: ngày ${date}.`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const vi: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "có ưu thế về" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Phí Futures (maker / taker)", topic: "phí Futures" },
    spotFees: { label: "Phí Spot (maker / taker)", topic: "phí Spot" },
    leverage: { label: "Đòn bẩy tối đa", topic: "đòn bẩy tối đa" },
    openInterest: { label: "Hợp đồng mở phái sinh", topic: "hợp đồng mở (Open Interest)" },
    volume: { label: "Khối lượng phái sinh 24 giờ", topic: "khối lượng phái sinh 24 giờ" },
    markets: { label: "Thị trường phái sinh", topic: "số thị trường phái sinh" },
    users: { label: "Người dùng (số liệu của sàn)", topic: "số người dùng" },
    assets: { label: "Tài sản niêm yết (số liệu của sàn)", topic: "" },
    founded: { label: "Năm thành lập", topic: "" },
    products: { label: (compared) => `Sản phẩm tìm thấy (trong ${compared} sản phẩm được so sánh)`, topic: "danh mục sản phẩm" },
    countries: { label: (compared) => `Quốc gia bị hạn chế (trong ${compared} quốc gia được so sánh)`, topic: "phạm vi quốc gia" },
    mica: { label: "Nền tảng EEA được cấp phép theo MiCA", topic: "giấy phép MiCA" },
    kyc: { label: "Xác minh danh tính (KYC)", topic: "" },
    addLater: { label: "Liên kết mã giới thiệu sau khi đăng ký?", topic: "khả năng liên kết mã giới thiệu sau khi đăng ký" },
    offer: { label: "Ưu đãi cho người dùng mới", topic: "" },
    reserves: { label: "Bằng chứng dự trữ", topic: "" },
    fund: { label: "Quỹ bảo vệ người dùng", topic: "" },
  },
  countOf: (count, of) => `${count} trên ${of}`,
  noMica: "Không công bố",
  noFund: "Không công bố",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    title: (a, b, shortMonthYear) => `${a.name} vs ${b.name} (${monthSlash(shortMonthYear)}): So sánh phí, đòn bẩy, KYC và thưởng`,
    /** Stays within 160 characters for every pair. */
    description: (a, b, monthYear) =>
      `${a.name} vs ${b.name}: phí Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}, đòn bẩy ${leverageOf(a)}x vs ${leverageOf(b)}x, sản phẩm, quốc gia, KYC và mã giới thiệu – dữ liệu chính thức, ${monthSlash(monthYear)}.`,
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} hay ${b.name}`,
      `so sánh phí ${a.name} và ${b.name}`,
      `so sánh Futures ${a.name} và ${b.name}`,
      `so sánh ${a.name} và ${b.name}`,
      `${a.name} có tốt hơn ${b.name} không`,
      `${b.name} có tốt hơn ${a.name} không`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "Trang chủ",
    crumbHub: "So sánh sàn giao dịch",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} chính là sàn trước đây mang tên ${formerName}.`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} và ${b.name} đều là sàn giao dịch tập trung cho giao dịch giao ngay (Spot) và hợp đồng tương lai (Futures) có đòn bẩy, và cả hai sàn đều có chương trình giới thiệu cho người dùng mới. ${bare(pickA)}. ${bare(pickB)}.${formerNote ? ` ${formerNote}` : ""} Bài so sánh trực tiếp này đặt cạnh nhau phí, đòn bẩy, sản phẩm, phạm vi quốc gia, quy định xác minh danh tính và ưu đãi mã giới thiệu của hai sàn – mọi số liệu đều lấy từ trang web của chính các sàn vào ngày ${date}.`,

    toc: {
      "at-a-glance": "Tổng quan",
      verdict: "Nên chọn sàn nào",
      fees: "Phí",
      leverage: "Đòn bẩy và độ sâu thị trường",
      products: "Sản phẩm",
      countries: "Quốc gia",
      kyc: "Xác minh danh tính (KYC)",
      safety: "An toàn và pháp lý",
      referral: "Mã giới thiệu",
      "pros-cons": "Ưu điểm và nhược điểm",
      faq: "Câu hỏi thường gặp",
      sources: "Nguồn",
    },
    onThisPage: "Trên trang này",

    /* Hero */
    updated: (date) => `Kiểm tra và cập nhật ngày ${date}`,
    h1: (a, b) => `${a.name} vs ${b.name}: So sánh phí, đòn bẩy và độ an toàn`,
    quickAnswer: "Trả lời nhanh",
    keyFigures: "Số liệu chính",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Đòn bẩy ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Hợp đồng mở ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Đăng ký bằng mã giới thiệu",
    boxNote: "Cả hai mã đều miễn phí và không bao giờ làm tăng phí giao dịch.",
    codeLabel: (e) => `Mã giới thiệu ${e.name}`,
    boxRisk: () => (
      <>
        Giao dịch có đòn bẩy rủi ro cao. Cả hai sàn đều không phục vụ mọi quốc gia – xem phần <a href="#countries">quốc gia</a>.
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name}: tổng quan nhanh`,
    glanceText: (a, b, s) =>
      `Dù bạn tìm "${a.name} vs ${b.name}" hay "${b.name} vs ${a.name}", bài so sánh vẫn là một. Trong ${s.measurable} tiêu chí có thể phân định bằng số liệu, ${a.name} có ưu thế ở ${s.a.length} tiêu chí, ${b.name} ở ${s.b.length} tiêu chí${s.tie.length ? `; ${s.tie.length} tiêu chí ngang nhau` : ""}. Không phải tiêu chí nào cũng quan trọng như nhau – với nhà giao dịch năng động, phí thấp quan trọng hơn danh sách coin dài – vì vậy hãy tập trung vào những tiêu chí hợp với cách bạn giao dịch.`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: phí, đòn bẩy, quy mô thị trường, sản phẩm, quốc gia, xác minh danh tính và quy định về mã giới thiệu`,
    compared: "Tiêu chí",
    ahead: "Ưu thế",
    level: "Ngang nhau",
    glanceNote: (marketDate, date) =>
      `Phí: mức phí tiêu chuẩn (không VIP). Hợp đồng mở, khối lượng và số thị trường: bảng xếp hạng phái sinh của CoinMarketCap, ngày ${marketDate}. "–" nghĩa là không thể xếp hạng hai giá trị với nhau. Mọi thông tin khác lấy từ trang web của chính các sàn vào ngày ${date}.`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} hay ${b.name}: nên chọn sàn nào?`,
    verdictText:
      "Không có sàn nào thắng ở mọi mặt – mỗi sàn hướng đến một kiểu nhà giao dịch khác. Hai khung bên dưới cho biết mỗi sàn phù hợp với ai và có ưu thế đo được ở điểm nào so với sàn còn lại.",
    bestFor: (role) => `Thế mạnh: ${role}`,
    chooseIf: (e) => `Chọn ${e.name} nếu …`,
    aheadOf: (e, other) => `Ưu thế của ${e.name} so với ${other.name}`,
    noAdvantage: "Không có ưu thế đo được ở các tiêu chí chúng tôi so sánh.",
    thinkTwice: "Cân nhắc kỹ nếu …",
    codeButton: (e) => `Mã giới thiệu ${e.name} ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `Phí giao dịch: ${a.name} vs ${b.name}`,
    feesModel: "Cả hai sàn đều dùng mô hình maker / taker: lệnh giới hạn bổ sung thanh khoản trả phí maker, lệnh lấy thanh khoản trả phí taker.",
    feesCaption: (a, b) => `Mức phí Spot và Futures tiêu chuẩn của ${a.name} và ${b.name}`,
    exchange: "Sàn",
    futuresMaker: "Maker Futures",
    futuresTaker: "Taker Futures",
    spotMaker: "Maker Spot",
    spotTaker: "Taker Spot",
    otherMarkets: "Thị trường khác (maker / taker)",
    feesNote: (date) => `Mức phí tiêu chuẩn (không VIP) theo công bố của từng sàn, kiểm tra ngày ${date}. Phí có thể thay đổi – hãy xác nhận trên sàn trước khi giao dịch.`,
    tokenTitle: "Giảm phí bằng token và điều kiện kèm theo",
    noTokenDiscount: "Sàn không công bố mức giảm phí khi trả phí bằng token của sàn.",

    /* Leverage */
    leverageTitle: "Đòn bẩy và độ sâu thị trường",
    leverageRisk: "Đòn bẩy cao làm tăng mạnh rủi ro bị thanh lý – mức tối đa là giới hạn, không phải khuyến nghị.",
    leverageCaption: (a, b) => `Đòn bẩy và dữ liệu thị trường phái sinh của ${a.name} và ${b.name}`,
    maxLeverage: "Đòn bẩy tối đa",
    openInterest: "Hợp đồng mở",
    volume24h: "Khối lượng phái sinh 24 giờ",
    derivativesMarkets: "Thị trường phái sinh",
    listedAssets: "Tài sản niêm yết (số liệu của sàn)",
    leverageNote: (marketDate) =>
      `Dữ liệu thị trường: bảng xếp hạng phái sinh của CoinMarketCap, ngày ${marketDate}. Mỗi sàn đếm tài sản niêm yết theo một cách – có sàn đếm coin, có sàn đếm cặp giao dịch.`,

    /* Products */
    productsTitle: (a, b) => `Sản phẩm: ${a.name} và ${b.name} cung cấp những gì`,
    productsSame: (compared) => `Trên trang web của chính mình, cả hai sàn đều giới thiệu đủ ${compared} sản phẩm chúng tôi so sánh; khác biệt nằm ở chi tiết.`,
    productsLegend: (date) =>
      `Dấu tích nghĩa là sàn giới thiệu sản phẩm đó trên trang web của chính sàn; dấu gạch nghĩa là vào ngày ${date} chúng tôi không tìm thấy trang nào về sản phẩm đó ở đây.`,
    productsCaption: (a, b) => `Sản phẩm của ${a.name} và ${b.name}`,
    product: "Sản phẩm",
    offered: "Có cung cấp",
    notOffered: "Không cung cấp",
    noPage: "Không tìm thấy trang nào trên trang web của chính sàn",

    /* Countries */
    countriesTitle: (a, b) => `Quốc gia: ${a.name} và ${b.name} phục vụ ở đâu`,
    countriesText: (compared, differing) =>
      `Với ${compared} quốc gia, bảng dưới đây cho thấy điều khoản của chính từng sàn quy định thế nào. Hai sàn khác nhau ở ${differing} quốc gia trong số đó. "${ct.statusLabel.regional}" nghĩa là sàn phục vụ quốc gia đó qua một nền tảng riêng, với sản phẩm, phí và hạn mức riêng.`,
    countriesCaption: (a, b) => `Phạm vi phục vụ theo quốc gia của ${a.name} và ${b.name}`,
    country: "Quốc gia",
    countriesNote: (date) =>
      `"${ct.statusLabel.open}" nghĩa là quốc gia đó không có trong danh sách hạn chế của sàn vào ngày ${date} – không đảm bảo mọi sản phẩm đều có ở đó. Cả hai sàn đều cấm dùng VPN hoặc thông tin sai để lách quy định hạn chế.`,
    differTitle: "Hai sàn khác nhau ở đâu",
    differQuestion: (a, b, countryName) => `${a.name} hay ${b.name} ở ${countryName}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        Cả hai sàn đều không phục vụ nơi bạn sống? Bảng quốc gia trên trang sàn thay thế cho biết những sàn nào khác chấp nhận quốc gia của bạn:{" "}
        <Link href={hrefA}>Sàn thay thế {a.name} theo quốc gia</Link> · <Link href={hrefB}>Sàn thay thế {b.name} theo quốc gia</Link>.
      </>
    ),
    restrictedTitle: "Quốc gia bị hạn chế và nền tảng khu vực",
    whereNot: (e) => `${e.name} không phục vụ người dùng ở đâu?`,
    regionalPlatforms: "Nền tảng khu vực:",

    /* Verification */
    kycTitle: (a, b) => `Xác minh danh tính: ${a.name} vs ${b.name}`,
    kycText:
      "Cả hai sàn đều yêu cầu người dùng mới xác minh danh tính, nên không sàn nào phù hợp để giao dịch mà không KYC. Khác biệt nằm ở việc tài khoản chưa xác minh còn làm được gì và quy trình kiểm tra diễn ra thế nào.",
    documents: "Giấy tờ:",
    minAge: "Tuổi tối thiểu:",
    howToRegister: (e) => `Cách đăng ký và xác minh tài khoản ${e.name} từng bước`,

    /* Safety */
    safetyTitle: (a, b) => `An toàn và pháp lý: ${a.name} vs ${b.name}`,
    safetyText:
      "Không có sàn giao dịch tập trung nào hoàn toàn không có rủi ro. Điều có thể so sánh là những gì mỗi sàn tự công bố: sàn được cấp phép ở đâu, có công bố bằng chứng dự trữ (Proof of Reserves) hay không và có duy trì quỹ cho trường hợp khẩn cấp hay không.",
    safetyCaption: (a, b) => `Pháp lý, bằng chứng dự trữ và quỹ bảo vệ người dùng của ${a.name} và ${b.name}`,
    licences: "Giấy phép sàn công bố",
    entity: "Pháp nhân vận hành",
    reserves: "Bằng chứng dự trữ",
    fund: "Quỹ bảo vệ người dùng",
    founded: "Năm thành lập",
    isSafe: (e) => `${e.name} có an toàn không?`,
    safetyDetail: (e) => `Chi tiết về độ an toàn và phạm vi phục vụ của ${e.name}`,

    /* Referral codes */
    referralTitle: (a, b) => `Mã giới thiệu và ưu đãi cho người dùng mới: ${a.name} vs ${b.name}`,
    referralText:
      "Dù chọn sàn nào, hãy đăng ký bằng mã giới thiệu: mã miễn phí, không bao giờ làm tăng phí giao dịch và mở khóa ưu đãi cho người dùng mới của sàn. Hãy chú ý dòng cuối – không phải lúc nào cũng liên kết được mã đã quên nhập về sau.",
    referralCaption: (a, b) => `Mã giới thiệu và ưu đãi cho người dùng mới của ${a.name} và ${b.name}`,
    referralCodeOf: (e) => `Mã giới thiệu ${e.name}`,
    referralCode: "Mã giới thiệu",
    newUserOffer: "Ưu đãi cho người dùng mới",
    inviteeReward: "Bạn nhận được gì khi là người được giới thiệu",
    covers: "Mã giới thiệu áp dụng cho",
    whereCode: "Nhập mã ở đâu",
    addLater: "Có thể liên kết sau không?",
    referralNote: (date) => `Ưu đãi kiểm tra ngày ${date}. Phần thưởng chào mừng gắn với nhiệm vụ, yêu cầu xác minh danh tính và khác nhau theo quốc gia.`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `Ưu điểm và nhược điểm của ${a.name} và ${b.name}`,
    pros: "Ưu điểm",
    cons: "Nhược điểm",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – câu hỏi thường gặp`,
    faqText: (count, a, b) => `${count} câu hỏi khi chọn giữa ${a.name} và ${b.name}: phí, đòn bẩy, quốc gia, xác minh danh tính, sản phẩm và mã giới thiệu.`,

    /* Sources */
    sourcesTitle: "Nguồn: số liệu lấy từ đâu",
    sourcesText: (date, marketDate) =>
      `Mọi thông tin trên trang này về phí, đòn bẩy, sản phẩm, xác minh danh tính, quốc gia, giấy phép, dự trữ và quy định về mã giới thiệu đều lấy từ trang web và trung tâm trợ giúp của chính hai sàn vào ngày ${date}. Hợp đồng mở, khối lượng giao dịch và số thị trường phái sinh lấy từ bảng xếp hạng phái sinh của CoinMarketCap (ngày ${marketDate}). Sàn có thể thay đổi điều khoản mà không báo trước, vì vậy các trang dưới đây là căn cứ cuối cùng.`,
    officialPages: (e, count) => `${e.name}: ${count} trang chính thức`,

    /* More comparisons */
    moreTitle: "Thêm so sánh sàn giao dịch",
    against: (e) => `${e.name} so với các sàn còn lại`,
    allAlternatives: (e) => `Tất cả sàn thay thế ${e.name}`,
    allComparisons: "Tất cả bài so sánh sàn giao dịch",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>Cảnh báo rủi ro:</strong> Phái sinh tiền mã hóa là công cụ phức tạp. Đòn bẩy khuếch đại cả lãi lẫn lỗ, và bạn có thể mất toàn bộ tiền ký quỹ
        chỉ trong vài phút. Trang này chỉ nhằm cung cấp thông tin, không phải lời khuyên tài chính. Chúng tôi có thể nhận hoa hồng nếu bạn đăng ký qua liên kết
        của chúng tôi – xem <Link href={disclosureHref}>Công bố liên kết tiếp thị</Link>. Điều đó không làm thay đổi số liệu: mọi số liệu đều do chính các sàn
        công bố.
      </>
    ),
    ctaTitle: (a, b) => `${a.name} hay ${b.name}? Bắt đầu bằng mã giới thiệu`,
    ctaText: "Dù chọn sàn nào, bạn chỉ cần một tài khoản cho cả Spot và Futures, không tốn thêm chi phí.",
    ctaButton: "So sánh thêm sàn khác",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `So sánh sàn giao dịch tiền mã hóa (${monthSlash(shortMonthYear)}): ${pairs} cặp đối đầu`,
    description: (exchangeNames, pairs, monthYear) =>
      `${exchangeNames}: ${pairs} cặp so sánh trực tiếp về phí, đòn bẩy, quốc gia, KYC và mã giới thiệu – dữ liệu chính thức, ${monthSlash(monthYear)}.`,
    crumbHome: "Trang chủ",
    crumbPage: "So sánh sàn giao dịch",
    listName: "So sánh trực tiếp sàn giao dịch tiền mã hóa",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `Kiểm tra và cập nhật ngày ${date}`,
    h1: (pairs) => `So sánh sàn giao dịch tiền mã hóa: ${pairs} cặp so sánh trực tiếp`,
    lead: (exchangeCount) =>
      `${exchangeCount} sàn, mọi cặp đều được so sánh theo cùng tiêu chí: phí, đòn bẩy, độ sâu thị trường, sản phẩm, phạm vi quốc gia, xác minh danh tính, pháp lý và ưu đãi mã giới thiệu. Mỗi bài so sánh đều dùng số liệu từ trang web của chính các sàn.`,
    quickAnswer: "Trả lời nhanh",

    pickTitle: "Chọn hai sàn để so sánh",
    pickText: (others) =>
      `Mỗi khung đặt một sàn cạnh ${others} sàn còn lại. Mỗi cặp chỉ có một trang, nên "Binance vs OKX" và "OKX vs Binance" dẫn đến cùng một bài so sánh.`,
    alternativesOf: (e) => `Sàn thay thế ${e.name}`,
    referralCodeOf: (e) => `Mã giới thiệu ${e.name}`,

    tableTitle: (exchangeCount) => `Cả ${exchangeCount} sàn đặt cạnh nhau`,
    tableText: "Ưu đãi cho người dùng mới, mức phí tiêu chuẩn (không VIP), đòn bẩy và độ sâu thị trường của từng sàn trong một bảng.",
    tableNote: (date, marketDate) =>
      `Phí: mức phí tiêu chuẩn theo công bố của từng sàn, kiểm tra ngày ${date}. Hợp đồng mở và số thị trường: CoinMarketCap, ngày ${marketDate}.`,

    alternativesTitle: "Một sàn so với tất cả sàn còn lại",
    alternativesText: (others) =>
      `Bạn không phân vân giữa hai sàn mà đang tìm sàn thay thế? Trang sàn thay thế so sánh một sàn với ${others} sàn còn lại cùng lúc và cho biết sàn nào chấp nhận quốc gia của bạn.`,

    faqTitle: "So sánh sàn giao dịch – câu hỏi thường gặp",

    ctaTitle: "Đã chọn được sàn? Đăng ký bằng mã giới thiệu",
    ctaText: (exchangeCount) => `Mã đã kiểm chứng cho cả ${exchangeCount} sàn – một tài khoản cho Spot và Futures, không tốn thêm chi phí.`,
    ctaButton: "Xem tất cả mã giới thiệu",
  },
};
