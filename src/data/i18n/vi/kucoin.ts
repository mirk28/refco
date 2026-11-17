import type { ExchangeText } from "../../types";

export const kucoin: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) ở bước đầu tiên khi đăng ký",
    apply:
      "Nhập mã vào ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) ở bước đầu tiên khi đăng ký, hoặc mở liên kết đăng ký trên trang này – liên kết tự điền mã vào ô và khóa ô lại.",
    whereToEnter:
      "KuCoin hỏi mã giới thiệu ngay ở bước đầu tiên khi đăng ký, cùng lúc với địa chỉ email hoặc số điện thoại – trên cả website lẫn ứng dụng. Ô này có nhãn “Referral Code (Optional)” (mã giới thiệu, không bắt buộc). Liên kết trên trang này mở trang đăng ký KuCoin với QBSS4BT7 đã điền sẵn và ô đã khóa, nên không thể nhập sai. Hướng dẫn đăng ký của KuCoin còn cho biết bạn có thể tự gõ mã nếu liên kết không điền được.",
    afterSignupShort: "Theo yêu cầu – mục “Link Referrer” (liên kết người giới thiệu) trong trung tâm trợ giúp, điều kiện không công bố",
    afterSignup:
      "Có thể. Trung tâm trợ giúp của KuCoin có yêu cầu tự phục vụ tên là “Link Referrer” (liên kết người giới thiệu), kèm mô tả “Submit a request to add a referrer manually” (gửi yêu cầu thêm người giới thiệu thủ công), và một yêu cầu tương ứng để hủy liên kết người giới thiệu. Cả hai đều cần đăng nhập, và KuCoin không công bố điều kiện hay thời hạn, nên không có gì bảo đảm yêu cầu sẽ được duyệt. Nhập mã ngay khi đăng ký vẫn là cách chắc chắn.",
    inviteeReward:
      "Trang chương trình giới thiệu của KuCoin viết rằng bạn bè được mời “stand to receive cashback and exclusive newcomer rewards” (có thể nhận hoàn tiền và phần thưởng độc quyền dành cho người mới). Khoản hoàn tiền là một phần phí giao dịch do chính bạn trả: người giới thiệu có thể đặt mức hoàn tiền riêng cho người được giới thiệu, tối đa bằng tỷ lệ hoa hồng hiện tại của họ, nên không có tỷ lệ phần trăm cố định. Quan hệ giới thiệu kéo dài 365 ngày kể từ khi bạn đăng ký. Ngoài ra, KuCoin còn quảng cáo khoản thưởng lên đến 10.650 USDT cho người dùng mới.",
    guide: [
      "Chương trình giới thiệu của KuCoin trả cho người giới thiệu hoa hồng trên phí giao dịch của những người họ mời, đồng thời cho phép người giới thiệu chia lại một phần cho người được giới thiệu dưới dạng hoàn tiền. KuCoin không đặt tỷ lệ hoàn tiền cố định – mức áp dụng là mức người giới thiệu đã cài đặt, tối đa bằng tỷ lệ hoa hồng của chính họ.",
      "Quan hệ giới thiệu áp dụng cho giao dịch Spot (với KuCoin gồm Spot, Margin và bot giao dịch), ETF và giao dịch Futures. Lệnh đặt qua API không được tính. Quan hệ này kéo dài 365 ngày kể từ khi bạn đăng ký và kết thúc sớm hơn nếu bạn lên VIP 3. KuCoin thanh toán hoa hồng hằng ngày bằng đúng loại tiền đã dùng để trả phí.",
      "KuCoin cho biết chương trình giới thiệu không áp dụng cho người cư trú tại Bỉ, Pháp, Hà Lan và các quốc gia hoặc khu vực khác nơi dịch vụ của KuCoin bị hạn chế.",
    ],
  },
  signup: {
    methods: ["địa chỉ email", "số điện thoại", "Telegram", "Google", "Apple"],
    steps: [
      {
        title: "Mở trang đăng ký KuCoin",
        text: "Dùng nút đăng ký trên trang này. KuCoin mở trang “Welcome to KuCoin” (chào mừng đến với KuCoin), trong đó mã giới thiệu QBSS4BT7 đã nằm sẵn trong ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc).",
      },
      {
        title: "Nhập địa chỉ email hoặc số điện thoại",
        text: "Hoặc tiếp tục bằng Telegram, Google hay Apple. Ô mã giới thiệu nằm ngay trong bước đầu tiên này.",
      },
      {
        title: "Chấp nhận Điều khoản sử dụng",
        text: "Đánh dấu ô đồng ý với Điều khoản sử dụng và Chính sách quyền riêng tư, rồi chọn “Create Account and Claim Reward” (tạo tài khoản và nhận thưởng).",
      },
      {
        title: "Nhập mã xác minh",
        text: "KuCoin gửi mã đến email hoặc số điện thoại để xác nhận đó đúng là của bạn.",
      },
      {
        title: "Đặt mật khẩu đăng nhập",
        text: "Chọn mật khẩu rồi bấm “Confirm” (xác nhận) – vậy là tài khoản đã được tạo.",
      },
      {
        title: "Xác minh danh tính",
        text: "Chọn quốc gia và loại giấy tờ tùy thân, tải ảnh giấy tờ lên và hoàn tất xác minh khuôn mặt. Người dùng mới cần bước này để dùng sản phẩm của KuCoin.",
      },
    ],
    kycShort: "Bắt buộc với người dùng mới",
    kyc: "Có. Từ ngày 31 tháng 8 năm 2023, người dùng mới phải hoàn tất xác minh danh tính để dùng sản phẩm và dịch vụ của KuCoin. Quy trình gồm chọn quốc gia và loại giấy tờ, tải ảnh giấy tờ lên và xác minh khuôn mặt; mỗi người chỉ xác minh được một tài khoản KuCoin. Tài khoản cũ chưa từng xác minh vẫn có thể bán tiền mã hóa, đóng vị thế Futures và Margin, tất toán sản phẩm Earn và rút tiền, nhưng không thể nạp tiền.",
    documents: "KuCoin chấp nhận thẻ căn cước, giấy phép lái xe, hộ chiếu hoặc thẻ cư trú, sau đó là bước xác minh khuôn mặt.",
    minAge: "18 tuổi (Điều khoản sử dụng của KuCoin)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Trả phí bằng KCS được giảm 20%; KuCoin áp dụng mức giảm này cho giao dịch Spot và Margin, trả lại dưới dạng hoàn phí và lưu ý rằng mức giảm thực tế có thể thấp hơn một chút. Cấp VIP càng cao, phí càng giảm, lên đến 75%.",
  extraFeeMarkets: ["Spot – token loại B", "Spot – token loại C"],
  sourceLabels: [
    "KuCoin: Cách đăng ký (web và ứng dụng)",
    "KuCoin: Chương trình giới thiệu và quy định",
    "KuCoin: Tự phục vụ trong trung tâm trợ giúp (Link Referrer)",
    "KuCoin: Rewards Hub (nhiệm vụ cho người dùng mới)",
    "KuCoin: Câu hỏi thường gặp về Rewards Hub",
    "KuCoin: Biểu phí theo cấp VIP",
    "KuCoin: Trả phí bằng KCS",
    "KuCoin: Xác minh danh tính và hạn mức tài khoản",
    "KuCoin: Đòn bẩy Futures theo quy mô vị thế",
    "KuCoin: Phí bot giao dịch",
    "KuCoin: Điều khoản sử dụng (khu vực bị hạn chế, độ tuổi tối thiểu)",
    "KuCoin: Về chúng tôi",
    "KuCoin: Bằng chứng dự trữ (Proof of Reserves)",
    "KuCoin EU: Giấy phép MiCAR của KuCoin EU Exchange GmbH",
    "KuCoin: Tuyên bố về thỏa thuận dàn xếp với Bộ Tư pháp Mỹ",
    "KuCoin: Thư của CEO về sự cố bảo mật năm 2020",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures", "Bot giao dịch", "ETF"],
  bonusHeadline: "Thưởng lên đến 10.650 USDT cho người dùng mới",
  benefits: [
    "Trang đăng ký KuCoin quảng cáo khoản thưởng lên đến 10.650 USDT cho người dùng mới, mở khóa qua các nhiệm vụ trong Rewards Hub",
    "Hoàn tiền trên phí giao dịch nếu người giới thiệu đã đặt mức hoàn – chương trình của KuCoin cho phép điều này trong 365 ngày",
    "Một lần giới thiệu áp dụng cho Spot, Margin, Futures, bot giao dịch và ETF",
    "Bot giao dịch miễn phí sử dụng; bạn chỉ trả phí giao dịch của bot",
  ],
  benefitNote:
    "Con số 10.650 USDT là con số quảng cáo của chính KuCoin và là mức tối đa: Rewards Hub trả thưởng dưới dạng gói coupon, vốn dùng thử, voucher phí giao dịch và phần thưởng tiền mặt nhỏ cho việc đăng ký, xác minh danh tính, nạp tiền lần đầu, giao dịch lần đầu và nhiệm vụ có thời hạn. Nhiệm vụ có thời hạn phải hoàn thành trong vòng 7 ngày sau khi đăng ký, và phần thưởng có hiệu lực 30 ngày. Giao dịch cặp stablecoin và giao dịch miễn phí không được tính; nhà tạo lập thị trường (market maker) và người dùng tổ chức bị loại trừ. Phần câu hỏi thường gặp của Rewards Hub vẫn ghi mức tối đa cũ là 3.200 USDT.",
  headquarters: "KuCoin không công bố (Điều khoản sử dụng chịu sự điều chỉnh của luật Quần đảo Turks và Caicos)",
  regulation: "Giấy phép MiCAR qua KuCoin EU Exchange GmbH, Vienna (EEA trừ Malta); đăng ký với AUSTRAC tại Úc",
  users: "Hơn 45 triệu người dùng (theo KuCoin)",
  assets: "1.000+ token niêm yết, 1.300+ cặp giao dịch",
  maxLeverage: "Tối đa 125x (bậc vị thế nhỏ nhất)",
  feeNote:
    "KuCoin chia token thành nhiều loại: mức phí Spot ở trên áp dụng cho token loại A, còn token loại B và loại C có phí cao hơn. Loại token phụ thuộc vào đồng tiền cơ sở của cặp giao dịch.",
  products: ["Futures ký quỹ USDT và ký quỹ coin", "Spot", "Margin", "Bot giao dịch", "Copy trading", "Earn", "KuCoin Web3 Wallet"],
  tagline: "Altcoin và bot giao dịch cho mọi người",
  quickAnswer:
    "Mã giới thiệu KuCoin là QBSS4BT7. Mã này nhập vào ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) ở bước đầu tiên khi đăng ký; nút trên trang này mở KuCoin với mã đã điền sẵn và khóa lại. Quan hệ giới thiệu áp dụng cho Spot, Margin, Futures và bot giao dịch trong 365 ngày, và KuCoin quảng cáo khoản thưởng lên đến 10.650 USDT cho người dùng mới. Nếu bạn quên nhập mã, trung tâm trợ giúp của KuCoin có yêu cầu “Link Referrer” (liên kết người giới thiệu), nhưng điều kiện của yêu cầu này không được công khai.",
  about: [
    "KuCoin ra mắt vào quý III năm 2017 và cho biết hiện phục vụ hơn 45 triệu người dùng tại hơn 200 quốc gia và khu vực, với hơn 1.000 token niêm yết. Sàn có được lượng người dùng đông đảo nhờ niêm yết altcoin sớm và giúp giao dịch tự động trở nên dễ dàng: dùng bot giao dịch không mất phí gì ngoài phí giao dịch.",
    "Mảng phái sinh của KuCoin gồm Futures ký quỹ USDT và ký quỹ coin với đòn bẩy tối đa 125x ở bậc vị thế nhỏ nhất – sang bậc kế tiếp, giới hạn giảm xuống 100x và tiếp tục giảm khi vị thế lớn dần. Sàn còn có giao dịch Margin, giao dịch sao chép (copy trading), sản phẩm Earn và ví Web3, còn token KCS giúp giảm 20% phí Spot và Margin.",
    "Ngày 27 tháng 1 năm 2025, KuCoin công bố thỏa thuận dàn xếp với Bộ Tư pháp Mỹ; trước đó sàn đã đóng tài khoản của người dùng tại Mỹ, có hiệu lực từ ngày 23 tháng 1 năm 2025. Tại Khu vực Kinh tế châu Âu (EEA), tập đoàn hoạt động qua KuCoin EU Exchange GmbH ở Vienna, nhà cung cấp dịch vụ tài sản mã hóa được cấp phép theo MiCAR và chịu sự giám sát của FMA Áo. Sau vụ hack năm 2020 ảnh hưởng đến khoảng 285 triệu USD, KuCoin cho biết sàn và quỹ bảo hiểm của sàn đã bù đắp khoảng 45,55 triệu USD không thu hồi được và không người dùng nào bị thiệt hại.",
  ],
  highlights: [
    { title: "Bot giao dịch miễn phí", text: "Bản thân bot không tính phí – bạn chỉ trả phí giao dịch của bot." },
    { title: "Mã khóa sẵn trong ô", text: "Liên kết đăng ký tự điền QBSS4BT7 và khóa ô nhập mã." },
    { title: "Dự trữ trên 100%", text: "BTC 112%, ETH 115%, USDT 110% tính đến ngày 31 tháng 10 năm 2026." },
  ],
  pros: [
    "Giao dịch tự động thân thiện với người mới nhờ bot miễn phí",
    "Nhiều lựa chọn altcoin với hơn 1.000 token niêm yết",
    "Phí Futures tiêu chuẩn thấp: maker 0,02% / taker 0,06%",
    "Bằng chứng dự trữ trên 100% cho BTC, ETH, USDT và USDC",
  ],
  cons: [
    "Không phục vụ người dùng tại Mỹ, Pháp, Hà Lan, Singapore và một phần Canada",
    "Phí Spot tăng lên 0,2% và 0,3% với token loại B và loại C",
    "KuCoin không công bố điều kiện để thêm người giới thiệu sau khi đăng ký",
    "Khối lượng Futures thấp hơn năm sàn dẫn đầu",
  ],
  bestFor: ["Nhà giao dịch muốn tự động hóa bằng bot", "Người yêu thích altcoin", "Nhà giao dịch Futures ở trình độ trung cấp"],
  signupTip:
    "Hãy hoàn tất xác minh danh tính ngay sau khi đăng ký – người dùng mới phải có bước này mới dùng được KuCoin – và bắt đầu các nhiệm vụ có thời hạn trong Rewards Hub trong vòng 7 ngày kể từ khi đăng ký.",
  safety:
    "KuCoin thường xuyên công bố báo cáo bằng chứng dự trữ (Proof of Reserves). Dữ liệu ngày 31 tháng 10 năm 2026 cho thấy tỷ lệ dự trữ 112% với BTC, 115% với ETH, 110% với USDT và 127% với USDC, kèm báo cáo kiểm toán ngày 9 tháng 11 năm 2026. Về vụ hack năm 2020, KuCoin cho biết không người dùng nào bị thiệt hại. Bot tự động hóa việc đặt lệnh, không tự động hóa việc quản lý rủi ro – hãy luôn đặt điều kiện dừng và chỉ để vốn giao dịch trên sàn.",
  restricted:
    "Điều khoản sử dụng của KuCoin (cập nhật ngày 29 tháng 10 năm 2026) liệt kê các khu vực bị hạn chế: Mỹ, kể cả các vùng lãnh thổ của Mỹ, Singapore, Trung Quốc đại lục và Hồng Kông, Malaysia, Kazakhstan, Uzbekistan, Nga, Belarus, các tỉnh Ontario và British Columbia của Canada, Pháp, Hà Lan, cùng các vùng Crimea, Donetsk, Luhansk, Zaporizhzhia và Kherson. Dùng VPN để lách hạn chế là hành vi bị cấm.",
  faqs: [
    {
      topic: "referral",
      q: "Mã giới thiệu KuCoin QBSS4BT7 có dùng được không?",
      a: "Có. Ngày 16 tháng 11 năm 2026, liên kết trên trang này mở trang đăng ký KuCoin với QBSS4BT7 đã điền sẵn và khóa trong ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc).",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu KuCoin có hiệu lực trong bao lâu?",
      a: "365 ngày kể từ khi bạn đăng ký. Theo quy định của KuCoin, hoa hồng – và cùng với đó là mọi khoản hoàn tiền – cũng dừng nếu bạn lên cấp VIP 3.",
    },
    {
      topic: "referral",
      q: "Dùng mã giới thiệu KuCoin được hoàn tiền bao nhiêu?",
      a: "KuCoin không đặt mức cố định. Người giới thiệu có thể đặt mức hoàn tiền riêng cho người được giới thiệu, tối đa bằng tỷ lệ hoa hồng của chính họ, áp dụng cho giao dịch Spot, Margin, bot giao dịch, ETF và Futures. Lệnh đặt qua API không được tính.",
    },
    {
      topic: "referral",
      q: "Mục “Link Referrer” trên KuCoin là gì?",
      a: "Đây là yêu cầu tự phục vụ trong trung tâm trợ giúp của KuCoin, kèm mô tả “Submit a request to add a referrer manually” (gửi yêu cầu thêm người giới thiệu thủ công). Đây là cách dành cho tài khoản đã đăng ký mà không có mã. Bạn phải đăng nhập mới dùng được, và KuCoin không công bố điều kiện.",
    },
    {
      topic: "referral",
      q: "Chương trình giới thiệu KuCoin không áp dụng ở những quốc gia nào?",
      a: "KuCoin cho biết chương trình không áp dụng cho người cư trú tại Bỉ, Pháp, Hà Lan và các quốc gia hoặc khu vực khác nơi dịch vụ của KuCoin bị hạn chế.",
    },
    {
      topic: "signup",
      q: "Có thể đăng ký KuCoin bằng Google, Apple hoặc Telegram không?",
      a: "Có. Trang đăng ký KuCoin hiển thị dòng “Or continue with” (hoặc tiếp tục với) cùng Telegram, Google và Apple bên dưới ô email và số điện thoại.",
    },
    {
      topic: "signup",
      q: "Có thể dùng KuCoin mà không cần KYC không?",
      a: "Không, nếu bạn là người dùng mới. Từ ngày 31 tháng 8 năm 2023, người dùng mới phải hoàn tất xác minh danh tính để dùng sản phẩm và dịch vụ của KuCoin.",
    },
    {
      topic: "signup",
      q: "Một người có thể có hai tài khoản KuCoin không?",
      a: "Không thể có hai tài khoản đã xác minh. KuCoin cho biết mỗi người chỉ xác minh được một tài khoản KuCoin.",
    },
    {
      topic: "bonus",
      q: "Thưởng chào mừng KuCoin là gì?",
      a: "Trang chủ và trang đăng ký KuCoin quảng cáo mức thưởng lên đến 10.650 USDT cho người dùng mới. Khoản này được trả qua nhiệm vụ cho người dùng mới trong Rewards Hub – đăng ký, xác minh danh tính, nạp tiền lần đầu, giao dịch lần đầu và nhiệm vụ có thời hạn – dưới dạng gói coupon, vốn dùng thử, voucher phí giao dịch và phần thưởng tiền mặt nhỏ. Nhiệm vụ đăng ký ghi phần thưởng là gói thưởng 400 USDT kèm phần thưởng tiền mặt (Bonus Pack and Cash Reward).",
    },
    {
      topic: "bonus",
      q: "Phần thưởng cho người dùng mới trên KuCoin phải nhận trong bao lâu?",
      a: "Nhiệm vụ thử thách có thời hạn phải hoàn thành trong vòng 7 ngày sau khi đăng ký, và KuCoin cho biết phần thưởng có hiệu lực 30 ngày trước khi hết hạn.",
    },
    {
      topic: "bonus",
      q: "Giao dịch nào không được tính vào nhiệm vụ người dùng mới trên KuCoin?",
      a: "Giao dịch cặp stablecoin và giao dịch miễn phí không được tính. Nhà tạo lập thị trường (market maker) và người dùng tổ chức hoàn toàn không đủ điều kiện tham gia.",
    },
    {
      topic: "fees",
      q: "Phí Futures KuCoin là bao nhiêu?",
      a: "Người dùng VIP 0 trả phí Futures 0,02% cho lệnh maker và 0,06% cho lệnh taker. Bot Futures Grid áp dụng phí giao dịch cố định 0,06%.",
    },
    {
      topic: "fees",
      q: "Trả phí bằng KCS trên KuCoin được giảm bao nhiêu?",
      a: "20%. KuCoin áp dụng mức giảm này cho giao dịch Spot và Margin khi bạn trả phí bằng KCS và trả lại dưới dạng hoàn phí; mức giảm thực tế có thể thấp hơn một chút.",
    },
    {
      topic: "fees",
      q: "Bot giao dịch KuCoin có miễn phí không?",
      a: "Có, KuCoin cho biết bản thân bot miễn phí. Giao dịch của bot theo quy tắc phí riêng: bot Spot được giảm 20% trên mức phí maker và taker của VIP 0, bot Futures Grid trả cố định 0,06%, còn khấu trừ phí bằng KCS và cấp VIP không áp dụng.",
    },
    {
      topic: "fees",
      q: "Đòn bẩy tối đa trên KuCoin là bao nhiêu?",
      a: "125x với tài khoản đã xác minh ở bậc vị thế nhỏ nhất. Đòn bẩy Futures trên KuCoin chia bậc theo quy mô vị thế – bậc kế tiếp giới hạn ở 100x.",
    },
    {
      topic: "safety",
      q: "KuCoin có dùng được ở Mỹ không?",
      a: "Không. Điều khoản sử dụng của KuCoin xếp Mỹ vào danh sách khu vực bị hạn chế, và KuCoin đã đóng tài khoản của người dùng tại Mỹ, có hiệu lực từ ngày 23 tháng 1 năm 2025.",
    },
    {
      topic: "safety",
      q: "KuCoin có được cấp phép ở châu Âu không?",
      a: "KuCoin EU Exchange GmbH tại Vienna là nhà cung cấp dịch vụ tài sản mã hóa được cấp phép theo MiCAR và chịu sự giám sát của Cơ quan Giám sát Thị trường Tài chính Áo. Pháp nhân này phục vụ Khu vực Kinh tế châu Âu (EEA), trừ Malta.",
    },
    {
      topic: "safety",
      q: "KuCoin có từng bị hack không?",
      a: "Có, vào năm 2020. Khoảng 285 triệu USD bị ảnh hưởng. KuCoin cho biết sàn và quỹ bảo hiểm của sàn đã bù đắp khoảng 45,55 triệu USD (16%) không thu hồi được và không người dùng nào bị thiệt hại.",
    },
  ],
};
