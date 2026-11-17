import Link from "next/link";
import type { AlternativesTexts } from "./en";

/**
 * Texts of the "[Exchange] alternatives" pages in Vietnamese. Same keys as `./en.tsx`.
 * Wording: "sàn thay thế Binance" (the noun first, the name follows), "phí", "mã giới thiệu", "bạn"; the site is "chúng tôi".
 * Names never change ("tại Mỹ", "so với OKX"); country names come unchanged from `../compare/vi.ts`.
 * Generated dates: `prettyDate` gives "16 tháng 11, 2026" and is written after "ngày".
 */

/**
 * The month of a title or description ("thg 11 2026", "tháng 11 năm 2026") written the way Vietnamese titles write it:
 * "11/2026" (keeps the description under 160 characters).
 */
const monthSlash = (shortMonthYear: string) => {
  const m = /(\d{1,2})\D+(\d{4})/.exec(shortMonthYear);
  return m ? `${m[1]}/${m[2]}` : shortMonthYear;
};

export const vi: AlternativesTexts = {
  /* ------------------------------- metadata ------------------------------- */
  title: (x, n, shortMonthYear) => `Sàn thay thế ${x.name} (${monthSlash(shortMonthYear)}): So sánh ${n} sàn giao dịch`,
  description: (x, names, n, former, monthYear) =>
    `${names}: so sánh ${n} sàn thay thế ${x.name}${former ? ` (${former})` : ""} về phí, đòn bẩy, KYC, quốc gia và mã giới thiệu – dữ liệu chính thức, kiểm tra ${monthSlash(monthYear)}.`,
  keywords: (x, alts, former) => [
    `sàn thay thế ${x.name}`,
    `${x.name} alternatives`,
    `sàn thay thế ${x.name} tốt nhất`,
    `sàn giao dịch tương tự ${x.name}`,
    `đối thủ cạnh tranh của ${x.name}`,
    `sàn thay thế ${x.name} phí thấp hơn`,
    `sàn thay thế ${x.name} không cần KYC`,
    ...(former ? [`sàn thay thế ${former}`, `${former} alternatives`] : []),
    ...alts.map((a) => `${a.name} vs ${x.name}`),
  ],
  crumbHome: "Trang chủ",
  crumbReferral: (name) => `Mã giới thiệu ${name}`,
  crumbAlternatives: (name) => `Sàn thay thế ${name}`,
  listLdName: (name) => `Sàn thay thế ${name}`,
  listLdDescription: (name) => `Sàn giao dịch so sánh với ${name}, xếp theo thứ tự trong bảng xếp hạng phái sinh của CoinMarketCap.`,
  howToLdName: (name) => `Cách chuyển từ ${name} sang sàn giao dịch khác`,
  howToLdDescription: (name) => `Cần kiểm tra gì và theo thứ tự nào khi chuyển từ ${name} sang sàn giao dịch tiền mã hóa khác.`,
  ogTitle: (name) => `Sàn thay thế ${name}`,
  ogSubtitle: (names) => `${names} – so sánh phí, đòn bẩy, KYC và quốc gia`,

  /* --------------------------------- words --------------------------------- */
  /** Joins the last two names of a list of links: " và ". */
  and: () => " và ",
  noneOfThem: "Không sàn nào",

  /* ---------------------------------- hero ---------------------------------- */
  updated: (date) => `Kiểm tra và cập nhật ngày ${date}`,
  h1: (name, n) => `Sàn thay thế ${name}: So sánh ${n} sàn giao dịch`,
  quickAnswer: "Trả lời nhanh",
  chipsLabel: "Nội dung so sánh",
  chips: (n, products, countries) => [`${n} sàn`, "Phí và đòn bẩy", `${products} sản phẩm`, `${countries} quốc gia`, "KYC và pháp lý", "Mã giới thiệu"],
  glanceTitle: (name) => `Sàn thay thế ${name}: tổng quan nhanh`,
  glanceIntro: "Thế mạnh của từng sàn, kèm mức phí Futures tiêu chuẩn (maker / taker).",
  glanceOrder: (marketDate) => `Thứ tự: bảng xếp hạng phái sinh của CoinMarketCap, ngày ${marketDate}. Giao dịch đòn bẩy có rủi ro cao.`,
  onThisPage: "Trên trang này",
  toc: (name, n) => [
    ["at-a-glance", "Tổng quan"],
    ["why", `Vì sao chuyển khỏi ${name}?`],
    ["alternatives", `${n} sàn thay thế`],
    ["by-need", "Lựa chọn tốt nhất theo nhu cầu"],
    ["fees", "Phí"],
    ["products", "Sản phẩm"],
    ["countries", "Quốc gia"],
    ["kyc", "Xác minh danh tính (KYC)"],
    ["safety", "Pháp lý và dự trữ"],
    ["referral-codes", "Mã giới thiệu"],
    ["switch", "Cách chuyển sàn"],
    ["faq", "Câu hỏi thường gặp"],
    ["sources", "Nguồn"],
  ],

  /* ------------------------------- at a glance ------------------------------ */
  comparedTitle: (name, monthYear) => `So sánh sàn thay thế ${name} (${monthYear})`,
  comparedIntro: (name, n, date) =>
    `Bảng đặt ${n} sàn thay thế cạnh chính ${name}. Phí là mức phí tiêu chuẩn (không VIP) mà từng sàn công bố, ghi theo dạng maker / taker; đòn bẩy là mức tối đa sàn nêu trong tài liệu; mã giới thiệu là mã bạn có thể dùng khi đăng ký. Chúng tôi đọc mọi số liệu trên trang web của chính sàn vào ngày ${date}.`,
  comparedCaption: (name, n) => `${name} và ${n} sàn thay thế: thế mạnh của từng sàn, phí, đòn bẩy và mã giới thiệu`,
  colExchange: "Sàn",
  colBestFor: "Thế mạnh",
  colFuturesFees: "Phí Futures",
  colSpotFees: "Phí Spot",
  colMaxLeverage: "Đòn bẩy tối đa",
  colReferralCode: "Mã giới thiệu",
  colAction: "Thao tác",
  forComparison: "để so sánh",
  signUp: "Đăng ký",
  comparedOrder: (marketDate) => `Thứ tự các sàn thay thế: bảng xếp hạng phái sinh của CoinMarketCap, ngày ${marketDate}.`,

  /* ----------------------------------- why ---------------------------------- */
  whyTitle: (name) => `Vì sao nên tìm sàn thay thế ${name}?`,
  whyIntro: (name, sourcesHref) => (
    <>
      Đây là những điểm {name} tự đặt ra giới hạn – mỗi điểm đều lấy từ trang web của chính {name} (xem{" "}
      <Link href={sourcesHref}>danh sách nguồn trên trang {name} của chúng tôi</Link>). Nếu không điểm nào ảnh hưởng đến bạn, ở lại {name} hoàn toàn là lựa
      chọn hợp lý.
    </>
  ),
  stayTitle: (name) => `${name} vẫn là lựa chọn phù hợp nếu …`,
  stayOutro: (name, code, href) => (
    <>
      Bạn quyết định ở lại? <Link href={href}>Trang mã giới thiệu {name}</Link> của chúng tôi có mã {code}, các bước đăng ký và ưu đãi hiện hành cho người
      dùng mới.
    </>
  ),

  /* ------------------------------ alternatives ------------------------------ */
  detailTitle: (name, n) => `Chi tiết ${n} sàn thay thế ${name} tốt nhất`,
  detailIntro: (name) =>
    `Chúng tôi đối chiếu từng sàn thay thế với ${name} theo cùng các tiêu chí: phí, đòn bẩy, quy mô thị trường, xác minh danh tính, quy định về mã giới thiệu, sản phẩm và quốc gia mà sàn chấp nhận. Mục "Ưu thế" chỉ nêu khác biệt đọc được trực tiếp từ số liệu của chính các sàn.`,
  rowFuturesFees: "Phí Futures (maker / taker)",
  rowSpotFees: "Phí Spot (maker / taker)",
  rowMaxLeverage: "Đòn bẩy tối đa",
  rowAssets: "Tài sản niêm yết",
  rowOpenInterest: "Hợp đồng mở phái sinh (Open Interest)",
  rowUsers: "Người dùng",
  rowFounded: "Năm thành lập",
  rowKyc: "Xác minh danh tính",
  rowAddLater: "Liên kết mã giới thiệu sau khi đăng ký?",
  rowOffer: "Ưu đãi cho người dùng mới",
  bestFor: (role) => `Thế mạnh: ${role}`,
  asAlternative: (name) => `– sàn thay thế ${name}`,
  chooseIf: (a, x) => `Chọn ${a} thay vì ${x} nếu …`,
  thinkTwiceIf: "Cân nhắc kỹ nếu …",
  whereAhead: (a, x) => `Ưu thế của ${a} so với ${x}`,
  whereBehind: (x) => `Ưu thế của ${x}`,
  noAdvantage: "Không có ưu thế đo được ở các tiêu chí chúng tôi so sánh.",
  codeLabel: (name) => `Mã giới thiệu ${name}`,
  signUpOn: (name) => `Đăng ký ${name}`,
  linkReferral: (name, code) => `Mã giới thiệu ${name} ${code}: ưu đãi, các bước đăng ký và KYC`,
  linkVersus: (a, x) => `${a} vs ${x}: so sánh trực tiếp đầy đủ`,
  linkAlternatives: (name) => `Sàn thay thế ${name}`,
  sideBySide: (a, x) => `${a} vs ${x}: toàn bộ số liệu đặt cạnh nhau`,
  sideBySideCaption: (a, x) => `${a} vs ${x}: phí, đòn bẩy, tài sản, xác minh danh tính và quy định về mã giới thiệu`,
  versusHead: (a, x) => `${a} vs ${x}`,

  /* --------------------------------- by need -------------------------------- */
  needTitle: (name) => `Sàn thay thế ${name} tốt nhất cho từng nhu cầu`,
  needIntro: (n) =>
    `Sàn nào trong ${n} sàn dẫn đầu còn tùy bạn đang tìm gì. Bảng trả lời theo từng nhu cầu – dựa trên số liệu, không dùng xếp hạng riêng của chúng tôi.`,
  needCaption: (name) => `Sàn thay thế ${name} tốt nhất theo nhu cầu`,
  needColWant: "Nếu bạn muốn …",
  needColLook: "Nên xem",
  needColWhy: "Lý do",
  needLowestFutures: "Phí Futures thấp nhất",
  needLowestSpot: "Phí Spot thấp nhất",
  needHighestLeverage: "Đòn bẩy cao nhất",
  needDeepest: "Thị trường phái sinh sâu nhất",
  needMostMarkets: "Nhiều thị trường phái sinh nhất",
  needMica: "Nền tảng được cấp phép theo MiCA cho Khu vực Kinh tế châu Âu (EEA)",
  needAddLater: "Có thể liên kết mã giới thiệu sau khi đăng ký",
  whyStandardTier: (fees) => `${fees} maker / taker ở mức phí tiêu chuẩn`,
  whyOpenInterest: (amount, marketDate) => `${amount} hợp đồng mở (CoinMarketCap, ngày ${marketDate})`,
  whyMarkets: (markets, marketDate) => `${markets} thị trường (CoinMarketCap, ngày ${marketDate})`,
  whyFeature: `Có trên trang web của chính sàn – mục "Sản phẩm" ghi rõ sàn cung cấp những gì`,
  needNotFound: (n) => `Không tìm thấy trên trang web của ${n} sàn thay thế khi chúng tôi kiểm tra.`,

  /* ---------------------------------- fees ---------------------------------- */
  feesTitle: (name) => `Phí: ${name} so với các sàn thay thế`,
  feesIntro:
    "Cả bảy sàn đều áp dụng mô hình maker / taker: lệnh giới hạn bổ sung thanh khoản trả phí maker, lệnh lấy thanh khoản trả phí taker. Bảng thể hiện mức phí tiêu chuẩn – mức tài khoản mới phải trả trước khi lên cấp VIP hay được giảm phí bằng token.",
  feesCaption: (name) => `Phí Spot và Futures tiêu chuẩn của ${name} và các sàn thay thế`,
  colFuturesMaker: "Maker Futures",
  colFuturesTaker: "Taker Futures",
  colSpotMaker: "Maker Spot",
  colSpotTaker: "Taker Spot",
  colOtherMarkets: "Thị trường khác (maker / taker)",
  feesNote: (date) => `Mức phí tiêu chuẩn (không VIP) theo công bố của từng sàn, kiểm tra ngày ${date}. Phí có thể thay đổi – hãy xác nhận trên sàn trước khi giao dịch.`,
  cheaperTitle: (name) => `Sàn nào có phí thấp hơn ${name}?`,
  tokenTitle: "Giảm phí bằng token và điều kiện kèm theo",
  noTokenDiscount: "Sàn không công bố mức giảm phí khi trả phí bằng token của sàn.",

  /* -------------------------------- products -------------------------------- */
  productsTitle: "Sản phẩm: mỗi sàn cung cấp gì",
  productsIntro: (date) =>
    `Dấu tích nghĩa là sàn giới thiệu sản phẩm đó trên trang web của chính sàn. Dấu gạch ngang nghĩa là vào ngày ${date} chúng tôi không tìm thấy trang nào về sản phẩm đó trên trang web của sàn – nhưng không có nghĩa là sản phẩm không tồn tại. Sản phẩm có thể khác nhau theo quốc gia, nhất là trên các nền tảng khu vực.`,
  productsCaption: (name) => `Sản phẩm của ${name} và các sàn thay thế`,
  colProduct: "Sản phẩm",
  productDetailsTitle: "Chi tiết sản phẩm theo từng sàn",
  productDetails: (name) => `${name}: chi tiết sản phẩm`,
  offered: "Có cung cấp",
  notOffered: "Không cung cấp",
  noPageFound: "Không tìm thấy trang nào trên trang web của chính sàn",

  /* -------------------------------- countries ------------------------------- */
  countriesTitle: (name) => `Phạm vi phục vụ: ${name} và các sàn thay thế theo quốc gia`,
  countriesIntro: (count) =>
    `Nơi bạn sống là lý do phổ biến nhất khiến bạn cần sàn thay thế. Với ${count} quốc gia, bảng cho thấy điều khoản của chính từng sàn quy định thế nào. "Trang khu vực" nghĩa là sàn phục vụ quốc gia đó qua một nền tảng riêng, với sản phẩm, phí và hạn mức riêng.`,
  countriesCaption: (name) => `Phạm vi phục vụ của ${name} và các sàn thay thế theo quốc gia`,
  colCountry: "Quốc gia",
  legendRestricted: "không phục vụ người cư trú theo điều khoản hoặc thông báo của chính sàn",
  legendRegional: "phục vụ qua một nền tảng khu vực riêng",
  legendPartial: "chỉ một số sản phẩm hoặc khu vực",
  legendOpen: (date) => `không có trong danh sách quốc gia bị hạn chế vào ngày ${date}`,
  countriesNote: `"Không bị hạn chế" không đảm bảo mọi sản phẩm đều có tại quốc gia đó. Điều khoản của sàn tại thời điểm bạn đăng ký mới là điều khoản áp dụng, và tất cả các sàn này đều cấm dùng VPN hoặc thông tin sai để lách quy định hạn chế.`,
  countryHeading: (name, country) => `Sàn thay thế ${name} tại ${country}`,
  restrictedTitle: "Quốc gia bị hạn chế và nền tảng khu vực của từng sàn",
  whereNotAvailable: (name) => `${name} không phục vụ người dùng ở đâu?`,
  regionalPlatforms: "Nền tảng khu vực:",

  /* ----------------------------------- kyc ---------------------------------- */
  kycTitle: (name) => `Xác minh danh tính: có sàn thay thế ${name} không cần KYC không?`,
  kycIntro: (n) =>
    `Không có sàn nào như vậy trong ${n} sàn này. Mọi sàn trong bài so sánh đều yêu cầu người dùng mới xác minh danh tính, và trên phần lớn các sàn, nạp tiền hoặc giao dịch bị khóa cho đến khi xác minh xong. Khác biệt nằm ở việc tài khoản chưa xác minh vẫn làm được những gì.`,
  kycCaption: (name) => `Xác minh danh tính trên ${name} và các sàn thay thế`,
  colKyc: "Xác minh danh tính",
  kycDetailsTitle: "Mỗi sàn nói gì về xác minh danh tính",
  kycQuestion: (name) => `Dùng ${name} có cần xác minh danh tính (KYC) không?`,

  /* --------------------------------- safety --------------------------------- */
  safetyTitle: "Pháp lý, bằng chứng dự trữ (Proof of Reserves) và quỹ bảo vệ người dùng",
  safetyIntro:
    "Không có sàn giao dịch tập trung nào hoàn toàn không có rủi ro. Điều có thể so sánh là những gì mỗi sàn tự công bố: được cấp phép ở đâu, có chứng minh dự trữ hay không và có duy trì quỹ cho trường hợp khẩn cấp hay không.",
  safetyCaption: (name) => `Pháp lý, bằng chứng dự trữ và quỹ bảo vệ người dùng của ${name} và các sàn thay thế`,
  colLicences: "Giấy phép sàn công bố",
  colReserves: "Bằng chứng dự trữ",
  colFund: "Quỹ bảo vệ người dùng",
  noneNamed: "Không công bố",
  safetyNote: "Tỷ lệ dự trữ là số liệu của chính các sàn, tính tại ngày chốt số liệu đã nêu. Chỉ giữ tiền trên sàn mà bạn đang tích cực giao dịch.",

  /* ----------------------------- referral codes ----------------------------- */
  codesTitle: (name) => `Mã giới thiệu cho các sàn thay thế ${name}`,
  codesIntro:
    "Nếu mở tài khoản trên một trong các sàn thay thế, hãy dùng mã giới thiệu: mã hoàn toàn miễn phí, không bao giờ làm tăng phí giao dịch và mở khóa ưu đãi cho người dùng mới của sàn. Cột cuối cùng quan trọng nhất – trên một số sàn, mã đã quên nhập không thể liên kết về sau.",
  codesCaption: (name) => `Mã giới thiệu của ${name} và các sàn thay thế`,
  colOffer: "Ưu đãi cho người dùng mới",
  colWhere: "Nhập mã ở đâu",
  colLater: "Có thể liên kết sau không?",
  codesRow: (name) => `Mã giới thiệu ${name}`,
  codesNote: (date) => `Ưu đãi kiểm tra ngày ${date}. Phần thưởng chào mừng gắn với nhiệm vụ, yêu cầu xác minh danh tính và khác nhau theo quốc gia.`,

  /* --------------------------------- switch --------------------------------- */
  switchTitle: (name) => `Cách chuyển từ ${name} sang sàn giao dịch khác`,
  switchIntro: "Chuyển sàn ít việc hơn bạn tưởng, miễn là giữ đúng thứ tự: tài khoản trước, xác minh danh tính sau, chuyển tiền sau cùng.",

  /* ----------------------------------- faq ---------------------------------- */
  faqTitle: (name) => `Sàn thay thế ${name} – câu hỏi thường gặp`,
  faqIntro: (name, count) => `${count} câu hỏi khi tìm sàn thay thế ${name}: sàn nào hợp với nhu cầu nào, phí, quốc gia, xác minh danh tính và cách chuyển sàn.`,

  /* --------------------------------- sources -------------------------------- */
  sourcesTitle: "Nguồn: số liệu lấy từ đâu",
  sourcesIntro: (date, marketDate) =>
    `Chúng tôi đọc mọi thông tin trên trang này về phí, đòn bẩy, sản phẩm, xác minh danh tính, quốc gia, giấy phép, dự trữ và quy định về mã giới thiệu trên trang web và trung tâm trợ giúp của chính các sàn vào ngày ${date}. Hợp đồng mở và số lượng thị trường phái sinh lấy từ bảng xếp hạng phái sinh của CoinMarketCap (ngày ${marketDate}). Sàn có thể thay đổi điều khoản mà không báo trước, vì vậy các trang dưới đây là căn cứ cuối cùng.`,
  sourcesSummary: (name, count, focus) => `${name}: ${count} trang chính thức${focus ? "" : " đã kiểm tra cho bài so sánh này"}`,
  sourcesMore: (name, count, href) => (
    <>
      Phí, đòn bẩy, xác minh danh tính, quy định về mã giới thiệu và danh sách quốc gia bị hạn chế của {name}:{" "}
      <Link href={href}>
        toàn bộ {count} nguồn trên trang {name} của chúng tôi
      </Link>
      .
    </>
  ),

  /* ---------------------------------- more ---------------------------------- */
  moreTitle: "Thêm so sánh sàn giao dịch",
  headToHeadTitle: (name) => `${name}: so sánh trực tiếp`,
  headToHeadIntro: "Đã có một sàn thay thế trong danh sách cân nhắc? Các trang so sánh trực tiếp đi sâu hơn vào phí, sản phẩm, quốc gia và ưu đãi mã giới thiệu:",
  otherAlternativesTitle: "Sàn thay thế cho các sàn khác",
  otherAlternativesIntro: "Cùng bài so sánh, nhìn từ góc độ của từng sàn còn lại:",
  referralLink: (name, code) => `Mã giới thiệu ${name} ${code}`,
  allComparisons: "Tất cả bài so sánh sàn giao dịch",

  /* ------------------------------ notice and CTA ----------------------------- */
  risk: (disclosureHref) => (
    <>
      <strong>Cảnh báo rủi ro:</strong> Sản phẩm phái sinh tiền mã hóa là công cụ phức tạp. Đòn bẩy khuếch đại cả lãi lẫn lỗ, và bạn có thể mất toàn bộ tiền
      ký quỹ chỉ trong vài phút. Trang này chỉ nhằm cung cấp thông tin, không phải lời khuyên tài chính. Chúng tôi có thể nhận hoa hồng nếu bạn đăng ký qua
      liên kết của chúng tôi – xem <Link href={disclosureHref}>Công bố liên kết tiếp thị</Link>. Hoa hồng không làm thay đổi số liệu: mọi số liệu đều do chính
      các sàn công bố.
    </>
  ),
  ctaTitle: (name) => `Bạn đã tìm được sàn thay thế ${name}?`,
  ctaText: "Đăng ký bằng mã giới thiệu đã kiểm chứng – một tài khoản cho cả Spot và Futures, không tốn thêm chi phí.",
  ctaButton: "Xem tất cả mã giới thiệu",
};
