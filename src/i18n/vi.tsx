import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

/**
 * Interface texts in Vietnamese. Same keys as `en.tsx`.
 *
 * Wording: "mã giới thiệu" for referral code (main keyword; the noun comes first, the name follows: "mã giới thiệu
 * Binance"), "mã mời" and "ID giới thiệu" as second terms, "sàn giao dịch" / "sàn" for the exchange, "phí" for fees,
 * Spot / Futures / Margin in Latin letters with a capital, address "bạn". Exchange names never change and take no
 * ending. Numbers with a decimal comma and a dot for thousands (0,02%, 10.000 USDT, 34,1 tỷ USD); the month in a
 * title is written "11/2026". Field and button names of the exchanges stay in English, because only the English
 * interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B và C" – no comma before "và". */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} và ${items[items.length - 1]}`);
/** "A, B hoặc C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} hoặc ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** `maxLeverage` always starts with "Tối đa"; inside a phrase it is lower-cased ("Đòn bẩy tối đa 150x"). */
const lcLeverage = (s: string) => (s.startsWith("Tối đa") ? `t${s.slice(1)}` : s);
/** A step title as a sentence in a running answer. */
const asSentence = (s: string) => (/[.!?:]$/.test(s.trim()) ? s.trim() : `${s.trim()}.`);
/** A number in Vietnamese notation: 1234.5 → "1.234,5". */
const viNumber = (n: number, digits: number) => {
  const [int, dec] = n.toFixed(digits).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dec ? `${grouped},${dec}` : grouped;
};
/** The month as a title writes it: "thg 11 2026" or "tháng 11 năm 2026" → "11/2026". */
const numericMonth = (s: string) => {
  const m = /(\d{1,2})\D+(\d{4})/.exec(s);
  return m ? `${m[1]}/${m[2]}` : s;
};

export const vi: Dictionary = {
  list,

  format: {
    billions: (n) => `${viNumber(n, n >= 10 ? 1 : 2)} tỷ USD`,
    billionsExact: (n) => `${viNumber(n, 2)} tỷ USD`,
    billionsFloor: (n) => `hơn ${viNumber(Math.floor(n), 0)} tỷ USD`,
  },

  meta: {
    siteTitle: `${site.name} – Mã giới thiệu sàn giao dịch tiền mã hóa đã kiểm chứng`,
    siteDescription:
      "Mã giới thiệu đã kiểm chứng cho Binance, OKX, Bybit, Bitget, Gate, KuCoin và MEXC – thưởng người dùng mới và hoàn phí Spot, Futures qua một liên kết đăng ký. Phí, thông tin, ưu và nhược điểm nêu trung thực.",
  },

  layout: {
    skip: "Chuyển đến nội dung chính",
    mainNav: "Menu chính",
    nav: { exchanges: "Sàn giao dịch", benefits: "Lợi ích", compare: "So sánh", howItWorks: "Cách hoạt động", about: "Giới thiệu" },
    getCodes: "Lấy mã",
    homeLabel: `${site.name} – trang chủ ${site.domain}`,
    language: "Ngôn ngữ",
    footerAbout:
      "Mã giới thiệu đã kiểm chứng cho những sàn giao dịch tiền mã hóa lớn nhất – thưởng chào mừng và hoàn phí giao dịch cho Spot và Futures. Thông tin rõ ràng từ nguồn chính thức.",
    referralCodes: "Mã giới thiệu",
    referralCodeOf: (name) => `Mã giới thiệu ${name}`,
    alternatives: "Sàn thay thế",
    alternativesOf: (name) => `Sàn thay thế ${name}`,
    guides: "Hướng dẫn",
    comparisons: "So sánh sàn giao dịch",
    howCodesWork: "Cách mã giới thiệu hoạt động",
    faq: "Câu hỏi thường gặp",
    about: "Giới thiệu & phương pháp",
    legal: "Pháp lý",
    imprint: "Thông tin pháp lý",
    privacy: "Chính sách bảo mật",
    disclosure: "Công bố liên kết tiếp thị",
    cookieSettings: "Cài đặt cookie",
    risk: (
      <>
        <strong>Cảnh báo rủi ro:</strong> Giao dịch phái sinh tiền mã hóa có đòn bẩy có rủi ro rất cao và có thể khiến bạn mất toàn bộ số tiền đã nạp.
        Chỉ giao dịch bằng số tiền bạn có thể chấp nhận mất. Không nội dung nào trên trang web này là lời khuyên tài chính, đầu tư hay thuế.
      </>
    ),
    affiliate: (
      <>
        <strong>Công bố liên kết tiếp thị:</strong> Một số liên kết trên trang là liên kết giới thiệu. Nếu bạn đăng ký qua đó, chúng tôi có thể nhận hoa
        hồng mà bạn không phải trả thêm đồng nào. Hoa hồng không bao giờ ảnh hưởng đến thông tin chúng tôi công bố. Tên và logo của các sàn là nhãn hiệu
        của chủ sở hữu tương ứng; {site.name} không có quan hệ liên kết với các sàn, và các sàn cũng không bảo trợ hay xác nhận {site.name}.
      </>
    ),
  },

  consent: {
    label: "Đồng ý phân tích truy cập",
    text: (privacyHref) => (
      <>
        <strong>Phân tích truy cập – bạn quyết định.</strong> Chúng tôi muốn dùng Google Analytics để biết trang nào được đọc. Công cụ này đặt cookie, gửi
        dữ liệu sử dụng đến Google và chỉ chạy khi bạn cho phép. Dù bạn chọn thế nào, trang cũng không dùng cookie quảng cáo. Chi tiết:{" "}
        <Link href={privacyHref}>Chính sách bảo mật</Link>.
      </>
    ),
    decline: "Từ chối",
    allow: "Cho phép phân tích",
  },

  notFound: {
    title: "Trang này không tồn tại",
    text: "Mã giới thiệu bạn đang tìm có thể đã chuyển sang địa chỉ khác. Thử một trong các sàn sau:",
    back: "Về trang chủ",
  },

  og: {
    footer: ["Liên kết đã kiểm chứng", "Phí và thông tin", "Nguồn chính thức"],
    homeAlt: "RefCo – mã giới thiệu sàn giao dịch tiền mã hóa đã kiểm chứng",
    homeKicker: (monthYear) => `Cập nhật ${monthYear}`,
    homeTitle: "Mã giới thiệu sàn tiền mã hóa, đã kiểm chứng.",
    exchangeAlt: "Mã giới thiệu, sàn thay thế và so sánh sàn giao dịch tiền mã hóa – RefCo",
    exchangeKicker: (monthYear) => `Đã kiểm tra ${monthYear}`,
    exchangeTitle: (e) => `Mã giới thiệu ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot & Futures chỉ với một liên kết`,
    versusBadge: "So sánh trực tiếp",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `Phí Futures ${feesA} vs ${feesB} · Đòn bẩy ${leverageA}x vs ${leverageB}x · KYC, quốc gia, thưởng`,
  },

  blocks: {
    signUpOn: (name) => `Đăng ký ${name}`,
    signUp: "Đăng ký",
    details: "Chi tiết",
    breadcrumb: "Đường dẫn trang",
    copy: "Sao chép",
    copied: "Đã sao chép ✓",
    spotMakerTaker: "Spot maker / taker",
    futuresMakerTaker: "Futures maker / taker",
    maxLeverage: "Đòn bẩy tối đa",
    since: "Thành lập",
    tableCaption: "So sánh sàn giao dịch tiền mã hóa theo ưu đãi cho người dùng mới, phí Spot và Futures, đòn bẩy và dữ liệu thị trường",
    exchange: "Sàn giao dịch",
    newUserOffer: "Ưu đãi cho người dùng mới",
    futuresFees: "Phí Futures (maker / taker)",
    spotFees: "Phí Spot",
    openInterest: "Hợp đồng mở",
    markets: "Thị trường",
    action: "Thao tác",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) =>
      fit(TITLE_MAX, `Mã giới thiệu sàn tiền mã hóa (${numericMonth(monthYear)}): Thưởng & hoàn phí`, `Mã giới thiệu sàn tiền mã hóa (${numericMonth(monthYear)})`),
    description: (monthYear) =>
      fit(
        DESC_MAX,
        `Mã giới thiệu đã kiểm chứng: Binance, OKX, Bybit, Bitget, Gate, KuCoin và MEXC. Thưởng người dùng mới, hoàn phí Spot và Futures qua một liên kết – ${numericMonth(monthYear)}.`,
        `Mã giới thiệu đã kiểm chứng: Binance, OKX, Bybit, Bitget, Gate, KuCoin và MEXC. Thưởng người dùng mới, hoàn phí Spot và Futures qua một liên kết.`,
      ),
    listName: "Mã giới thiệu sàn giao dịch tiền mã hóa cho Spot và Futures",
    updated: (monthYear) => `Cập nhật ${monthYear}`,
    h1: (
      <>
        Mã giới thiệu sàn giao dịch tiền mã hóa, <span className="hl">đã kiểm chứng</span> và giải thích rõ ràng.
      </>
    ),
    lead: (
      <>
        Nhận thưởng chào mừng và hoàn phí giao dịch trên những sàn giao dịch tiền mã hóa lớn nhất thế giới – chỉ cần một mã giới thiệu (còn gọi là mã
        mời hoặc ID giới thiệu) cho cả giao dịch giao ngay (Spot) <em>và</em> hợp đồng tương lai (Futures). Kèm theo đó là thông tin bạn cần để chọn sàn:
        phí, đòn bẩy, giấy phép, cùng ưu điểm và nhược điểm được nêu thẳng thắn.
      </>
    ),
    browse: "Xem mã giới thiệu",
    seeBenefits: "Xem lợi ích của bạn",
    trust: (date) => [`Kiểm tra ngày ${date}`, "Chỉ dùng liên kết chính thức", "Chỉ phân tích truy cập khi bạn đồng ý"],
    featured: "Sàn nổi bật",
    ticketName: (name) => `Mã giới thiệu ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["Sàn Spot & Futures hàng đầu", "Tổng hợp đồng mở", "Thị trường phái sinh được thống kê", "Phí maker thấp nhất (MEXC)"],
    marketData: (date) => `Dữ liệu thị trường: bảng xếp hạng phái sinh của CoinMarketCap, số liệu ngày ${date}.`,

    benefitsEyebrow: "Lợi ích của bạn",
    benefitsTitle: `Vì sao nên đăng ký bằng mã giới thiệu của ${site.name}?`,
    benefitsLead: "Cùng sàn, cùng mức phí – nhưng có thêm quyền lợi dành cho người dùng mới mà bạn sẽ bỏ lỡ nếu đăng ký trực tiếp.",
    benefits: [
      {
        title: "Thưởng chào mừng",
        text: "Mở khóa ưu đãi cho người dùng mới của sàn – voucher hoàn phí giao dịch, thưởng Futures và phần thưởng nhiệm vụ trị giá lên đến hàng nghìn USDT.",
      },
      {
        title: "Phí giao dịch thấp hơn",
        text: "Ở những sàn cho phép, một phần hoa hồng giới thiệu quay về tay bạn dưới dạng hoàn phí trên mỗi giao dịch.",
      },
      {
        title: "Spot và Futures, một liên kết",
        text: "Mã giới thiệu gắn với tài khoản của bạn – áp dụng cho Spot, Futures, Margin và quyền chọn (Options). Bạn không cần mã thứ hai.",
      },
      { title: "Không tốn thêm chi phí", text: "Mã giới thiệu không bao giờ làm phí của bạn tăng lên. Bạn chỉ được lợi – sàn chi trả cho chương trình." },
      { title: "Trang đăng ký chính thức", text: "Mọi liên kết đều mở trang web của chính sàn. Không qua trung gian, không chia sẻ dữ liệu nào với chúng tôi." },
      {
        title: "Tốt nhất là dùng ngay khi đăng ký",
        text: "Có sàn cho phép thêm mã trong vòng 30 ngày, có sàn thì không bao giờ. Dùng liên kết trước khi tạo tài khoản là bạn an toàn ở mọi sàn.",
      },
    ],
    offersCaption: "Ưu đãi cho người dùng mới theo từng sàn",
    offersHead: ["Sàn giao dịch", "Ưu đãi cho người dùng mới qua mã giới thiệu", "Một liên kết áp dụng cho"],
    claim: "Nhận ưu đãi",
    offersNote: (date) =>
      `Ưu đãi kiểm tra ngày ${date}. Phần thưởng chào mừng gắn với nhiệm vụ, yêu cầu xác minh danh tính và khác nhau theo khu vực – điều khoản hiện hành hiển thị trên trang đăng ký của từng sàn.`,

    exchangesEyebrow: "Mã giới thiệu",
    exchangesTitle: "Chọn sàn giao dịch của bạn",
    exchangesLead: "Mỗi trang giải thích mã giới thiệu, mức phí và sàn hợp nhất với ai – để bạn chỉ đăng ký một lần, trên đúng nền tảng.",
    sideBySide: "So sánh song song",
    notSure: "Chưa biết chọn sàn nào?",
    notSureText: (count) => `So sánh phí, đòn bẩy và hợp đồng mở (Open Interest) của cả ${count} sàn trong một bảng.`,
    compareExchanges: "So sánh sàn giao dịch",

    compareTitle: "So sánh sàn giao dịch tiền mã hóa: Spot & Futures",
    compareLead: "Ưu đãi cho người dùng mới, mức phí tiêu chuẩn (không VIP) cho Spot và Futures, đòn bẩy và độ sâu thị trường – xem nhanh trong một bảng.",
    compareNote: (reviewed, market) =>
      `Phí: mức phí tiêu chuẩn do từng sàn công bố, kiểm tra ngày ${reviewed}. Hợp đồng mở và số thị trường: CoinMarketCap, ngày ${market}. Phí có thể thay đổi – hãy xác nhận lại trên sàn trước khi giao dịch.`,
    versusStrip: {
      title: "So sánh trực tiếp hai sàn giao dịch",
      text: (pairs, hubHref) => (
        <>
          {pairs} cặp so sánh đặt phí, đòn bẩy, sản phẩm, quốc gia, KYC và ưu đãi mã giới thiệu cạnh nhau –{" "}
          <Link href={hubHref}>xem tất cả so sánh sàn giao dịch</Link>.
        </>
      ),
    },
    alternativesStrip: {
      title: "Đang tìm sàn thay thế cho sàn bạn dùng?",
      text: (others) =>
        `Mỗi bài so sánh đặt một sàn cạnh ${others} sàn còn lại: phí, đòn bẩy, sản phẩm, xác minh danh tính và quốc gia mà sàn chấp nhận.`,
    },

    picksEyebrow: "Trả lời nhanh",
    picksTitle: "Sàn giao dịch nào phù hợp nhất với bạn?",
    picks: [
      { label: "Thanh khoản sâu nhất", slug: "binance", why: "Hợp đồng mở và khối lượng Futures lớn nhất thế giới." },
      {
        label: "Phí thấp và quyền chọn",
        slug: "okx",
        why: "0,08% / 0,10% cho Spot, 0,03% cho quyền chọn và bằng chứng dự trữ (Proof of Reserves) hằng tháng.",
      },
      { label: "Giao dịch Futures trên di động", slug: "bybit", why: "Bộ máy khớp lệnh nhanh và một trong những ứng dụng giao dịch tốt nhất." },
      { label: "Copy trading", slug: "bitget", why: "Tự động sao chép lệnh của nhà giao dịch Futures giàu kinh nghiệm." },
      { label: "Nhiều altcoin nhất", slug: "gate", why: "5.400+ tài sản số và Futures cho cả token ngách." },
      { label: "Bot giao dịch", slug: "kucoin", why: "Bot giao dịch miễn phí cho Spot và Futures." },
      { label: "Phí thấp nhất", slug: "mexc", why: "Phí maker 0% cho Spot và phần lớn hợp đồng Futures." },
    ],

    howEyebrow: "Cách hoạt động",
    howTitle: "Dùng mã giới thiệu trong ba bước",
    steps: [
      { title: "Chọn sàn", text: "So sánh phí, đòn bẩy và tính năng ở trên, rồi mở trang của sàn hợp với phong cách giao dịch của bạn." },
      {
        title: "Đăng ký qua liên kết của chúng tôi",
        text: "Liên kết tự gắn mã giới thiệu cho bạn. Đăng ký bằng email hoặc số điện thoại trước khi tạo tài khoản ở bất kỳ nơi nào khác.",
      },
      {
        title: "Xác minh và nhận thưởng",
        text: "Hoàn tất xác minh danh tính (KYC), bảo vệ tài khoản bằng 2FA và kiểm tra phần thưởng chào mừng hiển thị trên trang tổng quan tài khoản.",
      },
    ],

    trustEyebrow: `Vì sao chọn ${site.name}`,
    trustTitle: "Xây dựng vì sự tin cậy, không vì lượt nhấp",
    trustCards: [
      { title: "Ưu đãi đã kiểm chứng", text: "Chúng tôi kiểm tra ưu đãi cho người dùng mới của từng sàn và chỉ đăng những gì bạn thực sự nhận được." },
      { title: "Thông tin mới, có ghi ngày", text: "Chúng tôi thường xuyên kiểm tra lại phí, đòn bẩy và giấy phép; trang nào cũng ghi ngày kiểm tra." },
      { title: "Quyền riêng tư là trên hết", text: "Không pixel quảng cáo, không cookie quảng cáo. Công cụ phân tích chỉ chạy khi bạn cho phép." },
      { title: "Nhanh và rõ ràng", text: "Trang nhẹ, tải tức thì trên mọi điện thoại – câu trả lời trước, chi tiết sau." },
      { title: "Ưu, nhược điểm trung thực", text: "Chúng tôi nêu cả điểm yếu, sự cố và hạn chế theo khu vực – không chỉ lời quảng cáo." },
      { title: "Rủi ro là trên hết", text: "Đòn bẩy có thể xóa sạch số tiền nạp rất nhanh. Chúng tôi nói rõ điều đó trên mọi trang." },
    ],

    faqEyebrow: "Hỏi đáp",
    faqTitle: "Mã giới thiệu – câu hỏi thường gặp",
    faqs: (reviewed) => [
      {
        q: "Mã giới thiệu sàn giao dịch tiền mã hóa là gì?",
        a: "Mã giới thiệu (còn gọi là mã mời hoặc ID giới thiệu) là một mã định danh ngắn, liên kết tài khoản mới trên sàn với người hoặc trang web đã giới thiệu sàn đó. Sàn dùng mã này để thưởng cho cả hai bên – người dùng mới thường nhận phần thưởng chào mừng hoặc được giảm phí giao dịch, còn người giới thiệu nhận một phần phí.",
      },
      {
        q: "Dùng mã giới thiệu có lợi ích gì?",
        a: "Người dùng mới đăng ký qua mã giới thiệu được tham gia ưu đãi chào mừng của sàn – ví dụ phần thưởng giới thiệu lên đến 250 USDT trên Bybit hoặc phần thưởng người dùng mới lên đến 10.000 USDT trên MEXC – và, nếu người giới thiệu chia sẻ hoa hồng, được hoàn lại một phần phí giao dịch, chẳng hạn 10% trong một năm trên Gate. Bạn không tốn thêm chi phí nào.",
      },
      {
        q: "Một mã giới thiệu có dùng được cho cả giao dịch Spot và Futures không?",
        a: "Có. Trên Binance, OKX, Bybit, Bitget, Gate, KuCoin và MEXC, mã giới thiệu gắn với tài khoản của bạn, không gắn với một sản phẩm riêng lẻ. Một lần đăng ký áp dụng cho cả giao dịch Spot và Futures – thêm Margin, quyền chọn hoặc giao dịch sao chép (copy trading) ở những sàn có các sản phẩm này.",
      },
      {
        q: "Đăng ký bằng mã giới thiệu có bị tính phí cao hơn không?",
        a: "Không. Đăng ký qua liên kết giới thiệu không bao giờ làm tăng phí của bạn. Tùy sàn và khu vực, bạn thậm chí có thể được giảm phí hoặc nhận thưởng chào mừng mà khi không có mã giới thiệu sẽ không nhận được.",
      },
      {
        q: "Có thể thêm mã giới thiệu sau khi đã tạo tài khoản không?",
        a: "Tùy sàn. Binance cho phép liên kết mã trong vòng 30 ngày sau khi đăng ký nếu bạn chưa nạp tiền hay giao dịch, còn MEXC cho phép bạn tự liên kết người giới thiệu trong vòng 30 ngày sau khi đăng ký. KuCoin có yêu cầu “Link Referrer” (liên kết người giới thiệu) trong trung tâm trợ giúp. Bybit, OKX và Bitget chỉ nhận mã trong lúc đăng ký, còn Gate không công bố cách nào để thêm mã về sau. Cách an toàn là dùng liên kết trước khi tạo tài khoản.",
      },
      {
        q: "Sàn giao dịch tiền mã hóa nào có phí Futures thấp nhất?",
        a: `Ở lần kiểm tra gần nhất (ngày ${reviewed}), MEXC có phí Futures tiêu chuẩn thấp nhất: phí maker 0% và taker 0,02% cho BTCUSDT. Binance, OKX và Gate thu 0,02% maker / 0,05% taker ở mức phí tiêu chuẩn, Bybit 0,02% / 0,055%, còn Bitget và KuCoin 0,02% / 0,06%.`,
      },
      {
        q: "Sàn nào tốt nhất để giao dịch phái sinh tiền mã hóa?",
        a: "Tùy vào việc bạn giao dịch gì. Binance có thanh khoản sâu nhất, OKX kết hợp phí thấp với quyền chọn, Bybit hướng đến giao dịch hợp đồng tương lai vĩnh cửu tốc độ cao, Bitget mạnh về copy trading, Gate về Futures altcoin, KuCoin về bot và MEXC về mức phí thấp nhất.",
      },
      {
        q: "Các sàn này có dùng được ở Mỹ không?",
        a: "Phần lớn là không. Binance, Bybit, Bitget, Gate, KuCoin và MEXC xếp Mỹ vào nhóm quốc gia bị hạn chế hoặc bị cấm, còn OKX hạn chế một số khu vực pháp lý tại Mỹ. Phạm vi phục vụ tại Vương quốc Anh, Canada và EU cũng khác nhau – trang của từng sàn liệt kê quốc gia bị hạn chế theo điều khoản của chính sàn đó.",
      },
      {
        q: "Thông tin trên trang được cập nhật bao lâu một lần?",
        a: `Chúng tôi thường xuyên kiểm tra lại phí, đòn bẩy, giấy phép và dữ liệu thị trường. Mỗi trang đều ghi ngày kiểm tra gần nhất; dữ liệu hiện tại được kiểm tra ngày ${reviewed}.`,
      },
    ],
    countryFaq: null,

    ctaTitle: "Nhận thưởng chào mừng",
    ctaText: "Chọn sàn, đăng ký bằng mã giới thiệu đã kiểm chứng và giao dịch Spot lẫn Futures với cùng một tài khoản.",
    ctaButton: "Xem tất cả mã giới thiệu",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    // Four wordings, chosen per exchange, so the seven pages do not all start with "Mã giới thiệu <sàn>".
    title: (e, shortMonthYear) => {
      const n = e.name, c = e.referralCode, b = benefit(e), m = numericMonth(shortMonthYear), y = yearOf(shortMonthYear);
      return [
        () => fit(TITLE_MAX, `Mã giới thiệu ${n} ${c} (${m}): ${b}`, `Mã giới thiệu ${n} ${c} (${m}) – Thưởng đăng ký`, `Mã giới thiệu ${n} ${c} (${m})`),
        () => fit(TITLE_MAX, `${c} – Mã giới thiệu ${n}: ${b}`, `${c} – Mã giới thiệu ${n} và ưu đãi (${m})`, `${c} – Mã giới thiệu ${n} (${m})`),
        () => fit(TITLE_MAX, `${b}: Mã giới thiệu ${n} ${c}`, `Thưởng đăng ký ${y}: Mã giới thiệu ${n} ${c}`, `Mã giới thiệu ${n} ${c} (${y})`),
        () => fit(TITLE_MAX, `Cách dùng mã giới thiệu ${n} ${c} (${m})`, `Cách dùng mã giới thiệu ${n} ${c}`, `Mã giới thiệu ${n} ${c}`),
      ][variant(4, e.slug)]();
    },
    description: (e, monthYear) =>
      fit(
        DESC_MAX,
        `Mã giới thiệu ${e.name}: ${e.referralCode}. ${asSentence(benefit(e))} Nơi nhập mã, các bước đăng ký, KYC và phí – kiểm tra ${monthYear}.`,
        `Mã giới thiệu ${e.name}: ${e.referralCode}. ${asSentence(benefit(e))} Nơi nhập mã, các bước đăng ký, KYC và phí.`,
        `Mã giới thiệu ${e.name}: ${e.referralCode}. Nơi nhập mã, các bước đăng ký, KYC và phí giao dịch – kiểm tra ${monthYear}.`,
      ),
    keywords: (e) => {
      const same = (k: string) => k.toLocaleLowerCase("vi-VN").replace(/[\s-]/g, "");
      const cn = e.referral.codeName;
      // The exchange's own English field name ("Referral ID") follows the name as people type it in English; a Vietnamese one leads.
      const own = /^[\x20-\x7E]+$/.test(cn) ? `${e.name} ${cn.toLowerCase().replace(/\bid\b/, "ID")}` : `${cn} ${e.name}`;
      return [
        `mã giới thiệu ${e.name}`,
        `mã giới thiệu ${e.name} ${e.referralCode}`,
        `${e.name} referral code`,
        own,
        `mã mời ${e.name}`,
        `ID giới thiệu ${e.name}`,
        `liên kết giới thiệu ${e.name}`,
        `link giới thiệu ${e.name}`,
        `mã ref ${e.name}`,
        `thưởng đăng ký ${e.name}`,
        `cách đăng ký ${e.name}`,
        `KYC ${e.name}`,
        `phí Futures ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "Tổng quan về mã",
      benefits: "Lợi ích của bạn",
      "use-code": "Cách dùng mã",
      "how-to": "Cách đăng ký",
      verification: "Xác minh danh tính (KYC)",
      "key-facts": "Thông tin chính",
      fees: "Phí",
      about: "Về sàn giao dịch",
      "pros-cons": "Ưu và nhược điểm",
      "best-for": "Phù hợp với ai",
      safety: "An toàn và phạm vi phục vụ",
      faq: "Câu hỏi thường gặp",
      sources: "Nguồn",
      alternatives: "Sàn thay thế và so sánh",
    },
    onThisPage: "Nội dung trang",
    crumbHome: "Trang chủ",
    crumbCodes: "Mã giới thiệu",
    crumbPage: (e) => `Mã giới thiệu ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `Mã giới thiệu ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)}. Một mã giới thiệu áp dụng cho ${list(e.referralCovers)}.`,
    offerCategory: "Đăng ký sàn giao dịch tiền mã hóa",
    howToName: (e) => `Cách đăng ký ${e.name} với mã giới thiệu ${e.referralCode}`,
    howToDescription: (e) => `Các bước đăng ký ${e.name} theo hướng dẫn của chính sàn, kèm vị trí nhập mã giới thiệu ${e.referralCode}.`,

    /* Hero */
    updated: (date) => `Kiểm tra và cập nhật ngày ${date}`,
    h1: (e) => `Mã giới thiệu ${e.name}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> – kèm một mã giới thiệu dùng chung cho {list(e.referralCovers)}. Trang này cho biết bạn nhận được gì, giao dịch tốn
        bao nhiêu phí và {e.name} có phải là sàn phù hợp với bạn hay không.
      </>
    ),
    quickAnswer: "Trả lời nhanh",
    highlights: "Điểm nổi bật",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      `Đòn bẩy ${lcLeverage(shortLeverage(e))}`,
      `${e.market.markets} thị trường phái sinh`,
      `Thành lập năm ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `Đăng ký tài khoản ${e.name}`,
    appliedByLink: "Liên kết này tự động áp dụng mã giới thiệu.",
    goesToOfficial: (domain) => `Dẫn thẳng đến trang web chính thức ${domain}.`,
    codeLabel: "Mã giới thiệu",
    noCodeToType: "Không cần nhập mã – áp dụng qua liên kết",
    officialSite: (domain) => `Trang chính thức: ${domain}`,
    yourBenefits: "Lợi ích của bạn",
    freeNeverRaises: "Miễn phí – dùng mã giới thiệu không bao giờ làm tăng phí",
    qrLabel: (e) => `Mã QR: đăng ký trên ứng dụng ${e.name} với mã giới thiệu ${e.referralCode}`,
    preferApp: "Muốn dùng ứng dụng?",
    scan: (e) => (
      <>
        Quét bằng camera điện thoại để mở {e.name}
        {e.referralCode ? (
          <>
            {" "}
            – đã kèm mã giới thiệu <strong>{e.referralCode}</strong>
          </>
        ) : null}
        . Dùng được trên cả iOS và Android.
      </>
    ),
    riskLine: (e, links) => (
      <>
        Giao dịch đòn bẩy tiềm ẩn rủi ro cao. {e.name} không phục vụ người dùng ở mọi quốc gia – xem <a href="#safety">phạm vi phục vụ</a> hoặc{" "}
        <Link href={links.alternatives}>sàn thay thế {e.name}</Link>.
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `Tổng quan về mã giới thiệu ${e.name} ${e.referralCode}`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        Mã giới thiệu {e.name} (còn gọi là mã mời hoặc ID giới thiệu) trong {monthYear} là <strong>{e.referralCode}</strong>. Bảng dưới đây tóm tắt mã có
        tác dụng gì, nhập ở đâu và {e.name} yêu cầu gì ở tài khoản mới – chúng tôi đã đối chiếu từng dòng với trang của chính {e.name} vào ngày {date}.
      </>
    ),
    codeFactsCaption: (e) => `Thông tin chính về mã giới thiệu ${e.name} ${e.referralCode}`,
    codeFacts: (e, date) => [
      [`Mã giới thiệu ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`Tên gọi trên ${e.name}`, e.referral.codeName],
      ["Lợi ích cho người dùng mới", benefit(e)],
      ["Nhập mã ở đâu", e.referral.whereShort],
      ["Thêm mã sau khi đăng ký được không?", e.referral.afterSignupShort],
      ["Áp dụng cho", e.referralCovers.join(", ")],
      ["Xác minh danh tính (KYC)", e.signup.kycShort],
      ["Chi phí", "Miễn phí – không làm tăng phí của bạn"],
      ["Ngày kiểm tra gần nhất", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `Lợi ích khi dùng mã giới thiệu ${e.name}`,
    benefitsIntro: (e) => (
      <>
        Đăng ký bằng mã giới thiệu {e.name} <strong>{e.referralCode}</strong> không tốn thêm chi phí. Dưới đây là ưu đãi {e.name} hiện dành cho tài khoản
        mới. Cùng một mã áp dụng cho <strong>{list(e.referralCovers)}</strong> – bạn không cần mã riêng cho Spot và Futures.
      </>
    ),
    offerChecked: (date) => `Ưu đãi cho người dùng mới · kiểm tra ngày ${date}`,
    appliedWhenRegistering: "áp dụng khi bạn đăng ký qua mã giới thiệu này",
    noExtraCost: "Không tốn thêm chi phí – mã giới thiệu không bao giờ làm phí giao dịch của bạn cao hơn",
    oneReferralCovers: "Một mã giới thiệu áp dụng cho:",
    claimOffer: (e) => `Nhận ưu đãi chào mừng của ${e.name}`,
    tasksTitle: (e) => `Nhiệm vụ và phần thưởng trong ưu đãi chào mừng của ${e.name}`,
    tasksCaption: (e) => `Nhiệm vụ cho người dùng mới trên ${e.name} và phần thưởng của từng nhiệm vụ`,
    task: "Nhiệm vụ",
    reward: "Phần thưởng",
    tasksNote: (e, date) =>
      `Theo thông tin ${e.name} công bố ngày ${date}. Ưu đãi khác nhau theo quốc gia và thay đổi thường xuyên – điều khoản hiển thị trong tài khoản của bạn sau khi đăng ký mới là điều khoản được áp dụng.`,

    /* How to use the code */
    useCodeTitle: (e) => `Cách dùng mã giới thiệu ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `Nhập mã giới thiệu ${e.name} ở đâu`,
    forgotCode: "Quên nhập mã? Thêm mã sau khi đăng ký",
    asInvited: "Bạn nhận được gì khi là người được giới thiệu",
    interfaceNote: (e) => (
      <>
        Tên ô và nút trong dấu ngoặc kép lấy từ giao diện tiếng Anh của {e.name} mà chúng tôi đã kiểm tra; trên giao diện tiếng Việt, tên gọi có thể khác.
      </>
    ),

    /* Registration */
    howToTitle: (e) => `Cách đăng ký ${e.name} từng bước`,
    howToIntro: (e) => (
      <>
        {e.name} cho phép tạo tài khoản bằng {orList(e.signup.methods)}. Dưới đây là các bước theo hướng dẫn của {e.name}, kèm thời điểm bạn dùng đến mã giới
        thiệu <strong>{e.referralCode}</strong>.
      </>
    ),
    startRegistration: (e) => `Bắt đầu đăng ký ${e.name}`,

    /* Verification */
    kycTitle: (e) => `Xác minh danh tính (KYC) trên ${e.name}`,
    verification: "Xác minh",
    minAge: "Độ tuổi tối thiểu",
    documents: "Giấy tờ được chấp nhận",

    /* Key facts */
    factsTitle: (e) => `Tổng quan về ${e.name}`,
    founded: "Thành lập",
    headquarters: "Trụ sở",
    futuresFees: "Phí Futures (maker / taker)",
    spotFees: "Phí Spot (maker / taker)",
    maxLeverage: "Đòn bẩy tối đa",
    assets: "Tài sản",
    openInterest: "Hợp đồng mở",
    volume24h: "Khối lượng phái sinh 24 giờ",
    users: "Người dùng",
    regulation: "Pháp lý",
    factsNote: (date) =>
      `Hợp đồng mở (Open Interest), khối lượng giao dịch và số thị trường: bảng xếp hạng phái sinh của CoinMarketCap, ngày ${date}. Phí: mức phí tiêu chuẩn tại ngày kiểm tra.`,

    /* Fees */
    feesTitle: (e) => `Giải thích phí giao dịch ${e.name}`,
    feesIntro: (e) =>
      `${e.name} áp dụng mô hình maker / taker: lệnh bổ sung thanh khoản cho sổ lệnh (lệnh giới hạn) trả phí maker, lệnh lấy đi thanh khoản (lệnh thị trường) trả phí taker. Mức phí giảm dần khi khối lượng giao dịch 30 ngày hoặc số tài sản bạn nắm giữ tăng lên.`,
    market: "Thị trường",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / hợp đồng vĩnh cửu",
    spotRow: "Spot",
    feesNote: (e, date) => `Mức phí tiêu chuẩn (không VIP) do ${e.name} công bố, kiểm tra ngày ${date}.`,
    funding: "Phí funding của hợp đồng vĩnh cửu do nhà giao dịch trả cho nhau, không trả cho sàn.",
    liveSchedule: (e) => `Xem biểu phí hiện hành của ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        Mức phí này so với sàn khác thế nào? Trang <Link href={`${links.alternatives}#fees`}>sàn thay thế {e.name}</Link> của chúng tôi đặt phí của{" "}
        {e.name} cạnh phí của {list(others)}.
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `Tìm hiểu về ${e.name}`,
    products: "Sản phẩm",
    prosConsTitle: (e) => `Ưu và nhược điểm của ${e.name}`,
    pros: "Ưu điểm",
    cons: "Nhược điểm",
    bestForTitle: (e) => `${e.name} phù hợp nhất với ai?`,
    openAccount: (e) => `Mở tài khoản ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        Không phù hợp? Xem <Link href={links.alternatives}>{count} sàn thay thế {e.name} tốt nhất</Link> và thế mạnh của từng sàn, hoặc so sánh trực tiếp{" "}
        {e.name}: <Link href={pairs[0].href}>{pairs[0].label}</Link> và <Link href={pairs[1].href}>{pairs[1].label}</Link>.
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} có an toàn không?`,
    availability: "Phạm vi phục vụ:",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} không phục vụ nơi bạn sống? <Link href={`${links.alternatives}#countries`}>Bảng quốc gia trên trang sàn thay thế {e.name}</Link> cho
        biết sàn nào khác chấp nhận người dùng từ quốc gia của bạn.
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `Mã giới thiệu ${e.name} và đăng ký – câu hỏi thường gặp`,
    faqIntro: (e, count) =>
      `${count} câu hỏi về mã giới thiệu ${e.name} ${e.referralCode}, cách tạo và xác minh tài khoản, ưu đãi chào mừng và phí.`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} – {language}
      </>
    ),

    /* Sources */
    sourcesTitle: "Nguồn: các thông tin này lấy từ đâu",
    sourcesIntro: (e, date) =>
      `Mọi thông tin trên trang này về mã giới thiệu, đăng ký, xác minh, ưu đãi chào mừng và phí đều được chúng tôi đọc trên trang web và trung tâm trợ giúp của chính ${e.name} vào ngày ${date}. Sàn thay đổi ưu đãi và phí mà không báo trước, đồng thời hiển thị điều khoản khác nhau ở từng quốc gia, vì vậy các trang dưới đây mới là căn cứ cuối cùng.`,

    /* Alternatives */
    alternativesTitle: (e) => `Sàn thay thế ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        Chưa chắc {e.name} có phù hợp? Đây là những sàn thay thế gần nhất, sàn nào cũng có liên kết đăng ký kèm mã giới thiệu riêng. Bài{" "}
        <Link href={links.alternatives}>so sánh đầy đủ sàn thay thế {e.name}</Link> đối chiếu cả {count} sàn với {e.name} theo phí, đòn bẩy, sản phẩm, xác
        minh và phạm vi phục vụ theo quốc gia.
      </>
    ),
    headToHeadTitle: (e) => `So sánh trực tiếp ${e.name}`,
    headToHeadIntro: (e) =>
      `Đang cân nhắc giữa ${e.name} và một sàn khác? Mỗi cặp có bài so sánh riêng về phí, đòn bẩy, sản phẩm, quốc gia và ưu đãi mã giới thiệu:`,
    compareAll: (e, count) => `So sánh cả ${count} sàn thay thế ${e.name}`,
    allComparisons: "Tất cả so sánh sàn giao dịch →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>Cảnh báo rủi ro:</strong> Phái sinh tiền mã hóa là công cụ phức tạp. Đòn bẩy khuếch đại cả lãi lẫn lỗ, và bạn có thể mất toàn bộ tiền ký
        quỹ chỉ trong vài phút. Trang này chỉ nhằm cung cấp thông tin và không phải lời khuyên tài chính. Chúng tôi có thể nhận hoa hồng nếu bạn đăng ký qua
        liên kết của chúng tôi – xem <Link href={disclosureHref}>Công bố liên kết tiếp thị</Link>.
      </>
    ),
    joinTitle: (e) => `Tham gia ${e.name} trong 3 phút`,
    joinText: (e) => `${benefit(e)}. Một mã giới thiệu cho cả Spot và Futures.`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `Mã giới thiệu ${name}`,
      signup: (name) => `Đăng ký và xác minh trên ${name}`,
      bonus: (name) => `Thưởng chào mừng và phần thưởng trên ${name}`,
      fees: (name) => `Phí và giao dịch trên ${name}`,
      safety: () => "An toàn và phạm vi phục vụ",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `Mã giới thiệu ${e.name} là gì?`,
          a: `Mã giới thiệu ${e.name} là ${e.referralCode}. ${r.apply} Trên ${e.name}, mã này có tên ${r.codeName}.`,
        },
        { topic: "referral", q: `Nhập mã giới thiệu ${e.name} ở đâu?`, a: r.whereToEnter },
        { topic: "referral", q: `Có thể thêm mã giới thiệu ${e.name} sau khi đã đăng ký không?`, a: r.afterSignup },
        { topic: "referral", q: `Dùng mã giới thiệu ${e.name} ${e.referralCode} nhận được gì?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `Mã giới thiệu ${e.name} có dùng được cho cả Spot và Futures không?`,
          a: `Có. Mã giới thiệu gắn với tài khoản ${e.name} của bạn, không gắn với một sản phẩm riêng lẻ, nên chỉ một lần đăng ký với ${e.referralCode} là áp dụng cho ${list(e.referralCovers)}.`,
        },
        {
          topic: "referral",
          q: `Dùng mã giới thiệu ${e.name} có mất phí không?`,
          a: `Không. Nhập ${e.referralCode} là miễn phí và không làm tăng phí giao dịch của bạn. ${e.name} chi trả chương trình giới thiệu từ chính nguồn thu phí của sàn.`,
        },
        {
          topic: "signup",
          q: `Đăng ký ${e.name} như thế nào?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${asSentence(st.title)}`).join(" ")} Bạn có thể đăng ký bằng ${orList(s.methods)}.`,
        },
        { topic: "signup", q: `${e.name} có bắt buộc xác minh danh tính (KYC) không?`, a: s.kyc },
        { topic: "signup", q: `${e.name} chấp nhận giấy tờ nào để xác minh?`, a: s.documents },
        { topic: "signup", q: `Bao nhiêu tuổi thì được mở tài khoản ${e.name}?`, a: s.minAge },
        {
          topic: "fees",
          q: `Phí giao dịch ${e.name} là bao nhiêu?`,
          a: `Ở mức phí tiêu chuẩn, ${e.name} thu ${e.spotFees.maker} maker / ${e.spotFees.taker} taker cho Spot và ${e.futuresFees.maker} maker / ${e.futuresFees.taker} taker cho hợp đồng tương lai vĩnh cửu.${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} không phục vụ người dùng ở những quốc gia nào?`, a: e.restricted },
      ];
    },
  },
};
