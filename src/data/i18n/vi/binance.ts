import type { ExchangeText } from "../../types";

export const binance: ExchangeText = {
  referral: {
    codeName: "Referral ID",
    whereShort: "Ô “Referral ID (Optional)” (ID giới thiệu, không bắt buộc) ở bước cuối cùng khi đăng ký",
    apply:
      "Nhập mã vào ô “Referral ID (Optional)” (ID giới thiệu, không bắt buộc) ở bước cuối cùng khi đăng ký, hoặc mở liên kết đăng ký trên trang này – liên kết sẽ tự điền mã cho bạn.",
    whereToEnter:
      "Trên cả trang web lẫn ứng dụng, Binance hỏi mã giới thiệu ở bước cuối cùng của quá trình đăng ký – sau khi bạn đã xác nhận email hoặc số điện thoại và đặt mật khẩu. Nếu bạn vào qua liên kết giới thiệu, Binance tự điền mã cho bạn và hiện dấu tích xanh kèm chữ “Linked” (đã liên kết) bên cạnh. Nếu không, nhập REFCO888 vào ô “Referral ID (Optional)” (ID giới thiệu, không bắt buộc). Bước này không bắt buộc, bạn có thể bỏ qua.",
    afterSignupShort: "Có – trong vòng 30 ngày, trước khi nạp tiền hoặc giao dịch",
    afterSignup:
      "Có, nhưng kèm điều kiện. Binance cho phép liên kết mã giới thiệu còn thiếu trên trang liên kết mã giới thiệu (binance.com/en/activity/referral/bind-ref) nếu tài khoản mở chưa đủ 30 ngày, chưa nạp tiền hay giao dịch, chưa có người giới thiệu và là tài khoản chính, nếu thông tin xác minh danh tính chưa được dùng cho tài khoản nào khác trong 180 ngày qua, và nếu tài khoản không bị gắn cờ wash trading. Theo Binance, mã giới thiệu đã liên kết thì không thể thay đổi hay gỡ bỏ.",
    inviteeReward:
      "REFCO888 là mã Binance Referral Pro. Ở chế độ Pro, người được giới thiệu nhận lại một phần phí giao dịch của chính mình, trả bằng USDC, nếu người giới thiệu chọn chia sẻ hoa hồng – Binance hiển thị mức áp dụng ngay khi bạn đăng ký. Không liên quan đến mã này, Binance còn giao cho mọi người dùng mới đã xác minh nhiệm vụ tân thủ với voucher hoàn phí giao dịch trị giá lên đến 100 USD.",
    guide: [
      "Binance có hai chế độ giới thiệu, và mỗi người dùng mới chỉ thuộc một trong hai. Liên kết dạng binance.com/register?ref=… – như liên kết trên trang này – thuộc Referral Pro: người giới thiệu nhận hoa hồng trên phí giao dịch của bạn và có thể chia lại cho bạn một phần dưới dạng hoàn phí bằng USDC. Chế độ còn lại, Referral Lite, dùng voucher hoàn phí giao dịch cho lần mua và lần giao dịch đầu tiên với giá trị nhỏ; với mã Pro, Binance không phát loại voucher này.",
      "Một mã giới thiệu Pro áp dụng cho cả Spot, Margin và Futures. Khi bạn mở tài khoản Futures sau này, Binance hiện thêm ô thứ hai, không bắt buộc, tên “Futures Referral ID” (ID giới thiệu Futures). Ô này chỉ nhận mã của đúng người đã giới thiệu tài khoản chính của bạn, nên bạn không thể kết hợp hai người giới thiệu khác nhau.",
      "Nơi bạn sinh sống cũng quan trọng. Từ ngày 1 tháng 7 năm 2026, người dùng đăng ký tại quốc gia thuộc Khu vực Kinh tế châu Âu (EEA) không còn được tham gia chương trình giới thiệu của Binance dưới bất kỳ hình thức nào, và điều khoản chương trình giới thiệu của Binance cũng nêu hạn chế đối với Vương quốc Anh, Singapore, Nhật Bản, Thổ Nhĩ Kỳ, Hồng Kông và Israel. Bạn vẫn có thể mở tài khoản từ những quốc gia Binance phục vụ, nhưng khi đó mã giới thiệu không có tác dụng.",
    ],
  },
  signup: {
    methods: ["địa chỉ email", "số điện thoại", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Mở trang đăng ký Binance",
        text: "Bấm nút đăng ký trên trang này. Nút mở accounts.binance.com với mã giới thiệu đã gắn sẵn – Binance hiển thị mã REFCO888 cạnh biểu mẫu.",
      },
      {
        title: "Nhập địa chỉ email hoặc số điện thoại",
        text: "Hoặc tiếp tục bằng tài khoản Google, Apple hoặc Telegram. Đồng ý với Điều khoản sử dụng và Thông báo quyền riêng tư để đi tiếp.",
      },
      {
        title: "Xác nhận mã 6 chữ số",
        text: "Binance gửi mã xác minh 6 chữ số đến email hoặc điện thoại của bạn. Mã có hiệu lực trong 30 phút.",
      },
      {
        title: "Đặt mật khẩu",
        text: "Ít nhất 8 ký tự, trong đó có một chữ in hoa và một chữ số.",
      },
      {
        title: "Kiểm tra mã giới thiệu",
        text: "Ở bước cuối, ô Referral ID sẽ có sẵn mã, kèm dấu tích xanh và chữ “Linked” (đã liên kết). Nếu ô còn trống, nhập REFCO888 – hoặc bỏ qua nếu bạn không muốn dùng mã giới thiệu.",
      },
      {
        title: "Xác minh danh tính",
        text: "Sau đó Binance chuyển bạn sang bước xác minh danh tính. Mọi người dùng mới đều phải hoàn tất bước này trước khi nạp tiền hoặc giao dịch.",
      },
    ],
    kycShort: "Bắt buộc với mọi sản phẩm",
    kyc: "Có. Binance yêu cầu mọi người dùng mới hoàn tất xác minh danh tính (trạng thái “Verified”, tức đã xác minh) trước khi dùng bất kỳ sản phẩm nào – kể cả nạp tiền mã hóa và giao dịch. Bạn chọn loại giấy tờ, tải ảnh lên rồi xác minh khuôn mặt; theo Binance, việc xét duyệt thường xong trong vòng 48 giờ. Tài khoản cũ chưa từng xác minh chỉ được rút tiền.",
    documents:
      "Phần lớn người dùng có thể xác minh bằng hộ chiếu, thẻ căn cước hoặc bằng lái xe, sau đó là bước xác minh khuôn mặt.",
    minAge: "18 tuổi (Điều khoản sử dụng của Binance)",
  },
  welcomeTasks: [],
  tokenDiscount:
    "Trả phí bằng BNB giúp giảm 25% phí Spot (0,075% thay vì 0,10%) và giảm 10% phí Futures USDⓈ-M (maker 0,018% / taker 0,045% thay vì 0,02% / 0,05%).",
  extraFeeMarkets: ["Futures COIN-M"],
  sourceLabels: [
    "Binance: Cách đăng ký trên trang web (bước nhập mã giới thiệu)",
    "Binance: Cách đăng ký trên ứng dụng",
    "Binance: Liên kết mã giới thiệu sau khi đăng ký",
    "Binance: Hai chế độ Referral Pro và Referral Lite",
    "Binance: Điều khoản chương trình giới thiệu và hạn chế theo khu vực",
    "Binance: Phần thưởng chào mừng cho người dùng mới (voucher hoàn phí giao dịch)",
    "Binance: Mức phí giao dịch Spot",
    "Binance: Mức phí Futures USDⓈ-M",
    "Binance: Mức phí Futures COIN-M",
    "Binance: Đòn bẩy và tiền ký quỹ của Futures USDⓈ-M",
    "Binance: Giới hạn đòn bẩy cho tài khoản Futures mới",
    "Binance: Xác minh danh tính",
    "Binance: Điều khoản sử dụng",
    "Binance: Danh sách quốc gia bị cấm",
    "Binance: Giấy phép và đăng ký",
    "Binance: Bằng chứng dự trữ (Proof of Reserves)",
    "Binance: Quỹ SAFU",
    "Binance: Giới thiệu về Binance",
  ],
  guides: {
    heading: "Hướng dẫn trên Binance Square",
    intro:
      "Một hướng dẫn chi tiết hơn dạng danh sách kiểm tra về việc đăng ký bằng mã giới thiệu Binance được đăng trên Binance Square, nền tảng nội dung của chính Binance. Bản gốc bằng tiếng Tây Ban Nha; Binance Square có thể hiển thị bản dịch:",
    linkLabel: "Hỏi đáp về mã giới thiệu Binance",
  },
  feeDiscount: "",
  referralCovers: ["Spot", "Margin", "Futures"],
  bonusHeadline: "Voucher hoàn phí giao dịch lên đến 100 USD",
  benefits: [
    "Nhiệm vụ tân thủ với voucher hoàn phí giao dịch trị giá lên đến 100 USD sau khi bạn xác minh tài khoản",
    "Một mã giới thiệu dùng cho cả Spot, Margin và Futures – không cần mã thứ hai",
    "Giảm 25% phí Spot và 10% phí Futures USDⓈ-M khi trả phí bằng BNB",
    "Vẫn liên kết được mã trong vòng 30 ngày sau khi đăng ký nếu bạn chưa nạp tiền hay giao dịch",
  ],
  benefitNote:
    "Voucher chào mừng là ưu đãi chung của Binance cho người dùng mới, không phải phần thưởng của mã giới thiệu. Binance phát voucher sau khi bạn xác minh danh tính; voucher hoàn phí giao dịch Spot, không dùng để bù phí cho giao dịch qua API và chỉ dùng được trong ứng dụng Binance. Binance loại cả một danh sách dài quốc gia khỏi ưu đãi này, trong đó có Vương quốc Anh, Mỹ, Canada, Hà Lan, Na Uy, Serbia, Nhật Bản, Singapore và Hồng Kông.",
  headquarters: "Vận hành qua các pháp nhân được ADGM cấp phép tại Abu Dhabi",
  regulation:
    "Chịu sự quản lý của ADGM FSRA (Abu Dhabi); có thêm giấy phép và đăng ký khác, trong đó có Dubai (VARA), Bahrain, Kazakhstan, Úc và Nhật Bản",
  users: "Hơn 320 triệu người dùng đã đăng ký (theo Binance)",
  assets: "600+ loại tiền mã hóa",
  maxLeverage: "Tối đa 150x (hợp đồng vĩnh cửu BTCUSDT và ETHUSDT)",
  feeNote: "Ở cấp VIP cao hơn, mức phí còn thấp hơn nữa.",
  products: ["Spot", "Margin", "Futures USDⓈ-M & COIN-M", "Quyền chọn", "Copy trading", "Bot giao dịch", "Earn & Launchpool"],
  tagline: "Thanh khoản sâu nhất thị trường phái sinh tiền mã hóa",
  quickAnswer:
    "Mã giới thiệu Binance là REFCO888. Binance hỏi mã này ở bước cuối cùng khi đăng ký; nút đăng ký trên trang này tự điền mã cho bạn. Một mã áp dụng cho cả giao dịch giao ngay (Spot), giao dịch ký quỹ (Margin) và hợp đồng tương lai (Futures). Nếu quên nhập mã, bạn vẫn có thể liên kết mã trong vòng 30 ngày sau khi đăng ký, miễn là chưa nạp tiền hoặc giao dịch. Người dùng mới đã xác minh còn có thể nhận voucher hoàn phí giao dịch trị giá lên đến 100 USD.",
  about: [
    "Binance ra mắt vào tháng 7 năm 2017 và, theo chính sàn cho biết, đã trở thành sàn giao dịch tiền mã hóa lớn nhất thế giới chỉ trong vòng 180 ngày. Hiện Binance công bố hơn 320 triệu người dùng đã đăng ký tại hơn 180 quốc gia và niêm yết hơn 600 loại tiền mã hóa. Ở mảng phái sinh, Binance dẫn đầu rõ rệt: vào ngày chúng tôi lấy dữ liệu thị trường, hợp đồng mở (Open Interest) trên Binance còn lớn hơn tổng của ba sàn xếp ngay sau trên bảng xếp hạng phái sinh của CoinMarketCap. Với nhà giao dịch, đây là yếu tố quan trọng: sổ lệnh sâu đồng nghĩa với spread hẹp hơn và ít trượt giá hơn khi đặt lệnh lớn.",
    "Chỉ với một tài khoản, bạn có thể giao dịch Spot và Margin, Futures ký quỹ bằng USDⓈ và ký quỹ bằng coin, quyền chọn (Options), dùng bot giao dịch và giao dịch sao chép (copy trading), cùng Earn và Launchpool. Với Futures USDⓈ-M, đòn bẩy tối đa là 150x trên hợp đồng tương lai vĩnh cửu BTCUSDT và ETHUSDT cho vị thế tối đa 300.000 USDT; hợp đồng ký quỹ bằng coin có đòn bẩy tối đa 125x. Tài khoản Futures mới không được dùng quá 20x trong 30 ngày đầu tiên.",
    "Binance.com chịu sự quản lý của Financial Services Regulatory Authority (FSRA) thuộc Abu Dhabi Global Market (ADGM) thông qua ba pháp nhân được cấp phép. Binance còn liệt kê giấy phép và đăng ký tại Dubai (VARA), Bahrain, Kazakhstan, Úc (AUSTRAC), Ấn Độ, Indonesia, Nhật Bản, New Zealand, Thái Lan, Mexico, El Salvador, Argentina, Brazil và Nam Phi. Bằng chứng dự trữ (Proof of Reserves) của Binance kết hợp cây Merkle với zk-SNARKs để người dùng tự kiểm tra số dư của mình có nằm trong đó hay không, còn quỹ khẩn cấp SAFU, lập từ năm 2018, có khoảng 1 tỷ USD tính đến tháng 2 năm 2026.",
  ],
  highlights: [
    { title: "Thanh khoản số 1", text: "Hợp đồng mở và khối lượng Futures lớn nhất trong số các sàn." },
    { title: "Phí Futures thấp", text: "Maker 0,02% / taker 0,05% ở mức phí tiêu chuẩn, giảm thêm 10% khi trả bằng BNB." },
    { title: "Mọi thứ trong một ứng dụng", text: "Futures, quyền chọn, bot, copy trading và Earn trong cùng một tài khoản." },
  ],
  pros: [
    "Thanh khoản không sàn nào sánh bằng trên hợp đồng vĩnh cửu BTC, ETH và altcoin lớn",
    "Mức phí tiêu chuẩn cạnh tranh, giảm thêm khi trả phí bằng BNB",
    "Bằng chứng dự trữ bạn tự kiểm tra được và quỹ SAFU khoảng 1 tỷ USD",
    "Vẫn liên kết được mã giới thiệu còn thiếu trong vòng 30 ngày",
  ],
  cons: [
    "Không phục vụ người dùng tại Mỹ, Canada và Hà Lan",
    "Phải xác minh danh tính trước khi nạp tiền hoặc giao dịch",
    "Tài khoản Futures mới chỉ được dùng đòn bẩy tối đa 20x trong 30 ngày đầu",
    "Người cư trú tại EEA bị loại khỏi chương trình giới thiệu từ tháng 7 năm 2026",
  ],
  bestFor: [
    "Nhà giao dịch Futures năng động cần thanh khoản sâu",
    "Nhà giao dịch muốn làm mọi thứ trên một nền tảng",
    "Người dùng có khối lượng giao dịch lớn, được hưởng lợi từ cấp VIP",
  ],
  signupTip:
    "Hãy xác minh danh tính ngay: Binance không cho tài khoản mới nạp tiền hay giao dịch khi chưa xác minh, và nhiệm vụ chào mừng chỉ xuất hiện sau khi bạn đã xác minh.",
  safety:
    "Binance công bố bằng chứng dự trữ mà sàn cho biết thể hiện toàn bộ số dư tài khoản được đảm bảo theo tỷ lệ 1:1 – đợt kiểm toán ngày 12 tháng 11 năm 2026 cho thấy tỷ lệ dự trữ BTC là 100,05% – và cho phép bạn tự kiểm tra tài khoản của mình tại Wallet → Verification. Lớp bảo vệ tài khoản gồm xác thực hai yếu tố, passkey và danh sách trắng địa chỉ rút tiền. Quỹ SAFU nhằm bảo vệ người dùng trong những tình huống cực đoan. Không sàn giao dịch tập trung nào hoàn toàn không có rủi ro, vì vậy hãy chỉ giữ trên sàn số tiền bạn đang dùng để giao dịch.",
  restricted:
    "Danh sách quốc gia bị cấm của Binance (cập nhật ngày 5 tháng 1 năm 2026) gồm Mỹ, Canada, Hà Lan, Cuba, Triều Tiên, Iran, Crimea và cái gọi là Cộng hòa Nhân dân Donetsk và Cộng hòa Nhân dân Luhansk.",
  faqs: [
    {
      topic: "referral",
      q: "Mã giới thiệu Binance REFCO888 còn dùng được không?",
      a: "Có. Ngày 16 tháng 11 năm 2026, liên kết binance.com/register?ref=REFCO888 mở đúng trang đăng ký chính thức của Binance, và trang này hiển thị mã REFCO888 bên cạnh biểu mẫu đăng ký.",
    },
    {
      topic: "referral",
      q: "Binance Referral Pro và Referral Lite khác nhau thế nào?",
      a: "Đây là hai chế độ riêng biệt, và mỗi người dùng mới chỉ thuộc một chế độ. Với Referral Pro, người giới thiệu nhận hoa hồng trên phí giao dịch của bạn và có thể chia lại một phần cho bạn dưới dạng hoàn phí trả bằng USDC. Với Referral Lite, cả hai bên nhận voucher hoàn phí giao dịch khi hoàn thành nhiệm vụ nhỏ cho lần mua đầu tiên và lần giao dịch đầu tiên. REFCO888 là mã Referral Pro, nên voucher của Lite không áp dụng.",
    },
    {
      topic: "referral",
      q: "Binance Futures có mã giới thiệu riêng không?",
      a: "Khi bạn mở tài khoản Futures, Binance hiện một ô không bắt buộc tên “Futures Referral ID” (ID giới thiệu Futures). Ô này chỉ nhận mã của đúng người giới thiệu có mã hoặc liên kết Referral Pro mà bạn đã dùng khi đăng ký, nên trên thực tế một mã giới thiệu áp dụng cho cả Spot, Margin và Futures.",
    },
    {
      topic: "referral",
      q: "Có thể đổi mã giới thiệu Binance sau này không?",
      a: "Không. Theo Binance, khi quan hệ giới thiệu đã được thiết lập thì không thể thay đổi hay gỡ bỏ. Chỉ tài khoản chưa có người giới thiệu mới liên kết được mã, trong vòng 30 ngày sau khi đăng ký và trước lần nạp tiền hoặc giao dịch đầu tiên.",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu Binance có dùng được ở EU không?",
      a: "Không còn. Theo điều khoản chương trình giới thiệu của Binance, từ ngày 1 tháng 7 năm 2026, người dùng đăng ký thuộc quốc gia Khu vực Kinh tế châu Âu (EEA) không còn đủ điều kiện tham gia Binance Referral Program. Điều khoản này cũng nêu hạn chế đối với Vương quốc Anh, Singapore, Nhật Bản, Thổ Nhĩ Kỳ, Hồng Kông và Israel.",
    },
    {
      topic: "signup",
      q: "Có thể đăng ký Binance bằng Google, Apple hoặc Telegram không?",
      a: "Có. Ngoài địa chỉ email hoặc số điện thoại, trang đăng ký của Binance còn có “Continue with Google”, “Continue with Apple” và “Continue with Telegram” (tiếp tục bằng tài khoản Google, Apple hoặc Telegram).",
    },
    {
      topic: "signup",
      q: "Mật khẩu Binance cần đáp ứng yêu cầu gì?",
      a: "Mật khẩu Binance cần ít nhất 8 ký tự, trong đó có một chữ in hoa và một chữ số.",
    },
    {
      topic: "signup",
      q: "Mã xác minh Binance có hiệu lực trong bao lâu?",
      a: "Mã 6 chữ số mà Binance gửi đến email hoặc điện thoại của bạn khi đăng ký có hiệu lực trong 30 phút.",
    },
    {
      topic: "signup",
      q: "Xác minh danh tính (KYC) Binance mất bao lâu?",
      a: "Theo Binance, việc xét duyệt thường hoàn tất trong vòng 48 giờ sau khi bạn gửi giấy tờ và vượt qua bước xác minh khuôn mặt.",
    },
    {
      topic: "signup",
      q: "Có thể dùng Binance mà không cần KYC không?",
      a: "Không. Mọi người dùng mới đều phải xác minh trước khi dùng sản phẩm của Binance, kể cả nạp tiền mã hóa và giao dịch. Tài khoản cũ chưa xác minh chỉ có thể rút tiền.",
    },
    {
      topic: "bonus",
      q: "Thưởng chào mừng Binance cho người dùng mới là gì?",
      a: "Binance giao cho người dùng mới ba nhiệm vụ tân thủ để mở khóa voucher hoàn phí giao dịch trị giá lên đến 100 USD. Bạn chỉ nhận nhiệm vụ sau khi hoàn tất xác minh tài khoản, và mỗi voucher hoàn lại một tỷ lệ phần trăm cố định của phí giao dịch Spot.",
    },
    {
      topic: "bonus",
      q: "Có rút được thưởng chào mừng Binance không?",
      a: "Không. Phần thưởng là voucher hoàn phí giao dịch, không phải tiền mặt: voucher hoàn phí giao dịch Spot, không dùng được cho lệnh đặt qua API và chỉ dùng được trong ứng dụng Binance.",
    },
    {
      topic: "bonus",
      q: "Quốc gia nào không được nhận voucher chào mừng của Binance?",
      a: "Điều khoản của Binance loại trừ nhiều quốc gia, trong đó có Vương quốc Anh, Mỹ, Canada, Hà Lan, Croatia, Na Uy, Iceland, Liechtenstein, Serbia, Albania, Nga, Nhật Bản, Singapore và Hồng Kông. Danh sách đầy đủ nằm trong bài viết của trung tâm trợ giúp Binance về phần thưởng chào mừng.",
    },
    {
      topic: "fees",
      q: "Trả phí bằng BNB trên Binance được giảm bao nhiêu?",
      a: "Trả phí bằng BNB giúp giảm 25% phí Spot – còn 0,075% thay vì 0,10% với người dùng thông thường – và giảm 10% phí Futures USDⓈ-M, tức còn maker 0,018% và taker 0,045%.",
    },
    {
      topic: "fees",
      q: "Đòn bẩy tối đa trên Binance là bao nhiêu?",
      a: "Tối đa 150x trên hợp đồng vĩnh cửu USDⓈ-M BTCUSDT và ETHUSDT cho vị thế tối đa 300.000 USDT, và tối đa 125x trên hợp đồng vĩnh cửu ký quỹ bằng coin BTCUSD. Tài khoản Futures mở chưa đủ 30 ngày không được dùng quá 20x. Đòn bẩy cao làm rủi ro bị thanh lý tăng mạnh.",
    },
    {
      topic: "fees",
      q: "Phí Futures COIN-M trên Binance là bao nhiêu?",
      a: "Người dùng thông thường trả phí maker 0,02% và taker 0,05% cho Futures COIN-M, bằng mức phí của hợp đồng USDⓈ-M ký quỹ bằng USDT.",
    },
    {
      topic: "safety",
      q: "Binance có dùng được ở Mỹ không?",
      a: "Không. Mỹ nằm trong danh sách quốc gia bị cấm của Binance, cùng với Canada và Hà Lan.",
    },
    {
      topic: "safety",
      q: "Quỹ SAFU của Binance là gì?",
      a: "SAFU (Secure Asset Fund for Users) là quỹ khẩn cấp Binance lập năm 2018 để bảo vệ người dùng trong những tình huống cực đoan. Theo Binance, tính đến tháng 2 năm 2026, quỹ nắm giữ tài sản tiền mã hóa trị giá khoảng 1 tỷ USD và sẽ được bổ sung nếu giảm xuống dưới 800 triệu USD.",
    },
    {
      topic: "safety",
      q: "Kiểm tra bằng chứng dự trữ của Binance như thế nào?",
      a: "Binance công bố tỷ lệ dự trữ trên trang bằng chứng dự trữ (Proof of Reserves) và dùng cây Merkle kết hợp zk-SNARKs. Người dùng đã đăng nhập có thể vào Wallet → Verification để xác nhận số dư của mình nằm trong dữ liệu đó.",
    },
  ],
};
