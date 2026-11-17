import type { ExchangeText } from "../../types";

export const bybit: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) trên biểu mẫu đăng ký",
    apply:
      "Nhập mã vào ô “Referral Code (Optional)” trên biểu mẫu đăng ký, hoặc mở liên kết đăng ký trên trang này – liên kết sẽ tự điền mã vào ô đó cho bạn.",
    whereToEnter:
      "Biểu mẫu đăng ký của Bybit có ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc). Trên website, ô này hiện ra sau khi bạn nhập địa chỉ email hoặc số điện thoại, còn trong ứng dụng thì muộn hơn một bước – cả hai trường hợp đều trước khi bạn nhấn “Sign Up Now” (Đăng ký ngay). Liên kết trên trang này mở trang mời của Bybit với VN3KGLE đã điền sẵn trong ô đó; bạn vẫn sửa được ô này, nên hãy kiểm tra mã còn nguyên trước khi gửi biểu mẫu.",
    afterSignupShort: "Không – chỉ khi đăng ký",
    afterSignup:
      "Không. Hướng dẫn đăng ký của Bybit ghi rõ: sau khi đăng ký, bạn sẽ không thể thêm, sửa hoặc xóa mã giới thiệu hay mã tiếp thị liên kết. Ngoại lệ duy nhất mà Bybit nêu là mã tiếp thị liên kết: loại mã này có thể thêm trong vòng 14 ngày vào tài khoản chính chưa có mã nào. Bybit nói rõ cách này không áp dụng cho mã của chương trình giới thiệu (Referral Program) như VN3KGLE.",
    inviteeReward:
      "Theo chương trình giới thiệu của Bybit, người được giới thiệu có thể nhận lên đến 250 USDT: 50 USDT cho giao dịch đầu tiên từ 50 USD trở lên trong vòng 14 ngày sau khi đăng ký, 100 USDT khi khối lượng giao dịch tích lũy đạt tối thiểu 500 USD trong 30 ngày sau giao dịch đầu tiên đó và thêm 100 USDT khi đạt tối thiểu 10.000 USD trong cùng 30 ngày. Trang mời của Bybit còn quảng bá phần thưởng cho người được giới thiệu khi đăng ký và hoàn tất xác minh danh tính, ngoài ra người dùng mới có Welcome Gifts trị giá 100 USDT trong Rewards Hub.",
    guide: [
      "Chương trình giới thiệu của Bybit thưởng cho cả hai bên cùng một mức, vì vậy Bybit quảng bá chương trình là “up to 500 USDT combined” (tổng cộng lên đến 500 USDT cho cả hai bên). Là người được giới thiệu, bạn mở khóa phần thưởng qua ba giai đoạn gắn với giao dịch của chính bạn: giao dịch đầu tiên từ 50 USD trở lên trong vòng 14 ngày sau khi đăng ký, sau đó là khối lượng tích lũy 500 USD và 10.000 USD trong 30 ngày tiếp theo. Khối lượng Spot, phái sinh và quyền chọn đều được tính, còn giao dịch ở cặp miễn phí giao dịch thì không.",
      "Mỗi phần thưởng phải qua 3 ngày xét duyệt rủi ro, sau đó bạn cần nhận trong vòng 10 ngày, nếu không phần thưởng sẽ hết hạn. Bybit giới hạn chương trình bằng quỹ thưởng 500.000 USDT mỗi tháng, chi trả theo thứ tự ai đến trước nhận trước. Điều khoản này áp dụng cho tài khoản đăng ký trên trang toàn cầu từ ngày 10 tháng 10 năm 2026 trở đi.",
      "Mã có tác dụng hay không phụ thuộc vào nơi bạn sống. Điều khoản giới thiệu của Bybit ghi rằng không có chương trình giới thiệu tại Đức, Vương quốc Anh, Pháp, Bỉ và Hồng Kông, và chương trình không mở cho người cư trú tại EEA nhận lời mời từ bên trong EEA. Người cư trú tại EEA dùng Bybit EU (bybit.eu) – nền tảng riêng do Bybit EU GmbH tại Vienna vận hành, với ưu đãi giới thiệu riêng và nhỏ hơn.",
    ],
  },
  signup: {
    methods: ["địa chỉ email", "số điện thoại", "Google", "Apple", "Telegram"],
    steps: [
      {
        title: "Mở trang đăng ký Bybit",
        text: "Dùng nút đăng ký trên trang này. Nút sẽ mở trang mời của Bybit với mã giới thiệu VN3KGLE đã điền sẵn.",
      },
      {
        title: "Chọn quốc gia cư trú",
        text: "Bybit hỏi thông tin này trước tiên vì sản phẩm và phần thưởng phụ thuộc vào nơi bạn sống.",
      },
      {
        title: "Nhập địa chỉ email hoặc số điện thoại",
        text: "Bạn cũng có thể tiếp tục bằng Google, Apple hoặc Telegram.",
      },
      {
        title: "Kiểm tra mã giới thiệu",
        text: "Ô “Referral Code (Optional)” phải hiển thị VN3KGLE. Đây là cơ hội duy nhất – Bybit không cho thêm hoặc đổi mã sau này.",
      },
      {
        title: "Nhập mã xác nhận và đặt mật khẩu",
        text: "Nhập mã xác nhận Bybit gửi cho bạn, chọn mật khẩu rồi nhấn “Sign Up Now” (Đăng ký ngay). Trong ứng dụng (phiên bản 4.47.0 trở lên), bạn cũng có thể thiết lập passkey.",
      },
      {
        title: "Hoàn tất xác minh danh tính",
        text: "Bybit yêu cầu xác minh cấp Standard trước khi bạn có thể nạp tiền hoặc giao dịch.",
      },
    ],
    kycShort: "Bắt buộc với mọi sản phẩm (cấp Standard)",
    kyc: "Có. Bybit yêu cầu tối thiểu xác minh danh tính cấp Standard cho mọi sản phẩm. Nếu chưa xác minh, tài khoản không thể nạp tiền hay giao dịch mà chỉ có thể rút tiền – tối đa 20.000 USDT mỗi ngày và 100.000 USDT mỗi tháng. Xác minh Standard (giấy tờ tùy thân cùng bước đánh giá danh tính) nâng hạn mức rút tiền mỗi ngày lên 1 triệu USDT, xác minh Advanced kèm giấy tờ chứng minh địa chỉ nâng lên 2 triệu USDT.",
    documents:
      "Bybit chấp nhận hộ chiếu, thẻ căn cước, giấy phép cư trú hoặc giấy phép lái xe. Sàn chỉ chấp nhận giấy tờ vật lý, và cấp Advanced cần thêm giấy tờ chứng minh địa chỉ.",
    minAge: "18 tuổi",
  },
  welcomeTasks: [
    { task: "Chương trình giới thiệu: giao dịch đầu tiên từ 50 USD trở lên trong vòng 14 ngày sau khi đăng ký", reward: "50 USDT" },
    { task: "Chương trình giới thiệu: khối lượng giao dịch tích lũy tối thiểu 500 USD trong 30 ngày sau giao dịch đầu tiên", reward: "100 USDT" },
    { task: "Chương trình giới thiệu: khối lượng giao dịch tích lũy tối thiểu 10.000 USD trong cùng 30 ngày", reward: "100 USDT" },
    { task: "Welcome Gifts: hoàn tất xác minh danh tính", reward: "Fee Saver 20 USDT (phái sinh)" },
    { task: "Welcome Gifts: nạp tối thiểu 10 USD", reward: "Position Airdrop 30 USDT (phái sinh)" },
    { task: "Welcome Gifts: giao dịch tối thiểu 10 USD", reward: "Fee Saver 50 USDT (phái sinh)" },
  ],
  tokenDiscount:
    "Trả phí bằng MNT giúp giảm 25% phí Spot (còn 0,075% ở VIP 0) và giảm 10% phí Futures (0,018% maker / 0,0495% taker). Mức giảm không áp dụng cho hợp đồng nghịch đảo, bot giao dịch, người theo dõi trong giao dịch sao chép (copy trading) hoặc giao dịch qua API.",
  extraFeeMarkets: ["Quyền chọn"],
  sourceLabels: [
    "Bybit: Cách đăng ký tài khoản",
    "Bybit: Chương trình giới thiệu – câu hỏi thường gặp",
    "Bybit: Trang và điều khoản chương trình giới thiệu",
    "Bybit: Cách thêm và kiểm tra mã tiếp thị liên kết đã đăng ký",
    "Bybit: Welcome Gifts trong Rewards Hub",
    "Bybit: Câu hỏi thường gặp về Rewards Hub",
    "Bybit: Cơ cấu phí giao dịch",
    "Bybit: Trả phí giao dịch bằng MNT",
    "Bybit: Thông số Margin (bậc đòn bẩy)",
    "Bybit: Câu hỏi thường gặp về KYC cá nhân",
    "Bybit: Quyền lợi của từng cấp KYC",
    "Bybit: Quốc gia bị hạn chế dịch vụ",
    "Bybit: Thông tin về Bybit",
    "Bybit: Bằng chứng dự trữ (Proof of Reserves)",
    "Bybit: Diễn biến sự cố bảo mật (tháng 2 năm 2025)",
    "Bybit: Bybit Europe và MiCAR",
    "Bybit EU: Chương trình giới thiệu",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Phái sinh", "Quyền chọn"],
  bonusHeadline: "Thưởng giới thiệu lên đến 250 USDT",
  benefits: [
    "Lên đến 250 USDT cho người được giới thiệu: 50 USDT sau giao dịch đầu tiên từ 50 USD trong vòng 14 ngày, thêm 100 USDT cho mỗi mốc khối lượng 500 USD và 10.000 USD",
    "Welcome Gifts trị giá 100 USDT trong Rewards Hub khi xác minh danh tính, nạp 10 USD và giao dịch 10 USD",
    "Một mã giới thiệu cho cả tài khoản – khối lượng Spot, phái sinh và quyền chọn (Options) đều được tính",
    "Giảm 25% phí Spot và 10% phí Futures khi trả phí bằng MNT",
  ],
  benefitNote:
    "Phần thưởng giới thiệu áp dụng cho tài khoản đăng ký trên trang toàn cầu của Bybit từ ngày 10 tháng 10 năm 2026 trở đi, phải qua 3 ngày xét duyệt rủi ro, phải được nhận trong vòng 10 ngày và chi từ quỹ thưởng 500.000 USDT mỗi tháng (ai đến trước nhận trước). Bybit không có chương trình giới thiệu tại Đức, Vương quốc Anh, Pháp, Bỉ và Hồng Kông, và không mở chương trình cho người cư trú tại Khu vực Kinh tế châu Âu (EEA) nhận lời mời từ bên trong EEA. Welcome Gifts yêu cầu xác minh danh tính Lv. 1, khác nhau tùy người dùng và khu vực, có thời hạn và không thể rút.",
  headquarters: "Dubai, UAE",
  regulation: "Giấy phép MiCAR qua Bybit EU GmbH, Vienna (chịu sự giám sát của FMA Áo), áp dụng cho EEA trừ Malta",
  users: "Hơn 90 triệu người dùng (theo Bybit)",
  assets: "390 coin, 509 cặp Spot (Bybit API)",
  maxLeverage: "Tối đa 150x (hợp đồng vĩnh cửu BTCUSDT)",
  feeNote:
    "Mức phí giảm dần theo cấp VIP – Supreme VIP trả 0% phí maker cho phái sinh – và có thể khác nhau tùy khu vực; trang “My Fee Rate” (mức phí của tôi) trong tài khoản là căn cứ chính xác nhất.",
  products: [
    "Hợp đồng vĩnh cửu USDT và USDC",
    "Hợp đồng nghịch đảo",
    "Quyền chọn",
    "Spot",
    "Copy trading",
    "Bot giao dịch",
    "Tài khoản giao dịch hợp nhất",
  ],
  tagline: "Hệ thống giao dịch tốc độ cao, ưu tiên phái sinh",
  quickAnswer:
    "Mã giới thiệu Bybit là VN3KGLE. Nhập mã vào ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) khi đăng ký – nút trên trang này sẽ tự điền mã cho bạn. Mã phải có sẵn ngay lúc đăng ký: Bybit không cho thêm hoặc đổi mã giới thiệu sau đó. Người được giới thiệu có thể nhận lên đến 250 USDT qua ba giai đoạn giao dịch, bắt đầu với 50 USDT cho giao dịch đầu tiên 50 USD trong vòng 14 ngày.",
  about: [
    "Bybit ra mắt năm 2018 với tư cách sàn phái sinh và chuyển trụ sở đến Dubai năm 2023. Hiện sàn công bố hơn 90 triệu người dùng tại hơn 181 quốc gia và tự nhận là sàn giao dịch lớn thứ hai thế giới theo khối lượng giao dịch. Nền tảng vẫn mang đậm dấu ấn dành cho nhà giao dịch năng động: đặt lệnh nhanh, tài khoản giao dịch hợp nhất và ứng dụng di động được trau chuốt.",
    "Ngoài hợp đồng tương lai vĩnh cửu USDT và USDC, Bybit cung cấp hợp đồng nghịch đảo, quyền chọn, Spot, copy trading và bot giao dịch. Người dùng ở mức phí tiêu chuẩn trả 0,02% phí maker và 0,055% phí taker cho hợp đồng vĩnh cửu và Futures, 0,1% cho Spot. Đòn bẩy tối đa 150x với hợp đồng vĩnh cửu BTCUSDT ở bậc rủi ro thấp nhất và giảm dần khi vị thế lớn lên. Khách hàng châu Âu do Bybit EU GmbH tại Vienna phục vụ; công ty này chịu sự giám sát của FMA Áo theo MiCAR và hoạt động trên toàn EEA trừ Malta.",
    "Ngày 21 tháng 2 năm 2025, tin tặc đã lấy khoảng 1,46 tỷ USD từ một trong các ví lạnh Ethereum của Bybit – vụ hack lớn nhất trong lịch sử tiền mã hóa. Bybit vẫn mở rút tiền, bù lại lượng ETH bị mất bằng khoản vay bắc cầu, khoản nạp lớn và giao dịch mua OTC; kết quả kiểm toán bằng chứng dự trữ (Proof of Reserves) của Hacken ngày 24 tháng 2 cho thấy khoản thiếu hụt đã được bù đắp trong vòng 72 giờ. Theo Bybit, tài sản khách hàng luôn được bảo chứng 1:1 trong suốt thời gian đó.",
  ],
  highlights: [
    { title: "Khởi đầu từ phái sinh", text: "Thiết kế cho nhà giao dịch Futures ngay từ ngày đầu, với hệ thống khớp lệnh nhanh." },
    { title: "Lên đến 250 USDT", text: "Thưởng giới thiệu qua ba giai đoạn, gắn với khối lượng giao dịch của chính bạn." },
    { title: "Bù đắp thiếu hụt trong 72 giờ", text: "Sau vụ hack năm 2025, Bybit vẫn mở rút tiền và khôi phục dự trữ." },
  ],
  pros: [
    "Hệ thống khớp lệnh nhanh, ổn định và ứng dụng di động hàng đầu",
    "Nhiều loại hợp đồng vĩnh cửu, hợp đồng nghịch đảo và quyền chọn",
    "Thưởng giới thiệu rõ ràng, lên đến 250 USDT cho người được giới thiệu",
    "Bằng chứng dự trữ có công cụ tự kiểm tra bằng cây Merkle",
  ],
  cons: [
    "Sự cố bảo mật lớn vào tháng 2 năm 2025 (khoảng 1,46 tỷ USD bị lấy khỏi một ví lạnh Ethereum)",
    "Không thể thêm hoặc đổi mã giới thiệu sau khi đăng ký",
    "Không có chương trình giới thiệu cho người cư trú tại EEA cũng như tại Đức, Vương quốc Anh, Pháp, Bỉ và Hồng Kông",
    "Không phục vụ người dùng tại Mỹ, Canada, Singapore, Hồng Kông và Trung Quốc đại lục",
  ],
  bestFor: [
    "Nhà giao dịch hợp đồng tương lai vĩnh cửu năng động",
    "Nhà giao dịch chủ yếu dùng điện thoại",
    "Người dùng muốn copy trading với phái sinh",
  ],
  signupTip:
    "Hãy kiểm tra ô “Referral Code (Optional)” trước khi nhấn “Sign Up Now” – sau đó không thể sửa được nữa. Tiếp theo, hãy giao dịch lần đầu từ 50 USD trở lên trong vòng 14 ngày để mở khóa 50 USDT đầu tiên.",
  safety:
    "Bybit lưu giữ tài sản khách hàng trong ví lạnh đa chữ ký và công bố bằng chứng dự trữ mà sàn cho biết thể hiện tỷ lệ bảo chứng 1:1; khi chúng tôi kiểm tra, bản snapshot mới nhất có ngày 27 tháng 10 năm 2026, và bạn có thể tự đối chiếu số dư của mình bằng cây Merkle cùng một công cụ mã nguồn mở. Để bảo vệ tài khoản, Bybit cung cấp Google Authenticator và mã chống lừa đảo (anti-phishing). Vụ hack tháng 2 năm 2025 cho thấy ngay cả sàn lớn cũng có thể bị xâm nhập – hãy chỉ để trên sàn số vốn dùng để giao dịch.",
  restricted:
    "Bybit xếp vào nhóm bị hạn chế dịch vụ: Mỹ, Trung Quốc đại lục, Hồng Kông, Singapore, Canada, Triều Tiên, Cuba, Iran, Uzbekistan, Sudan, Syria, cùng Crimea, Sevastopol và các vùng không do chính phủ kiểm soát thuộc Donetsk, Luhansk, Kherson và Zaporizhzhia. Tại Vương quốc Anh, Bybit không nhận đăng ký mới, và từ ngày 21 tháng 10 năm 2026 tài khoản tại Vương quốc Anh chỉ còn được rút tiền.",
  faqs: [
    {
      topic: "referral",
      q: "Mã giới thiệu Bybit VN3KGLE còn hoạt động không?",
      a: "Có. Ngày 16 tháng 11 năm 2026, liên kết trên trang này đã mở trang mời của Bybit với VN3KGLE điền sẵn trong ô “Referral Code (Optional)”.",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu Bybit có giống mã tiếp thị liên kết không?",
      a: "Không. Bybit xử lý hai loại mã này khác nhau: mã tiếp thị liên kết có thể thêm trong vòng 14 ngày sau khi đăng ký vào tài khoản chính chưa có mã, còn mã của chương trình giới thiệu (Referral Program) như VN3KGLE thì hoàn toàn không thể thêm sau khi đăng ký.",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu Bybit có dùng được ở EU không?",
      a: "Không. Điều khoản giới thiệu của Bybit ghi rằng chương trình không mở cho người cư trú tại EEA nhận lời mời từ bên trong EEA, và không có chương trình giới thiệu tại Đức, Pháp và Bỉ. Người cư trú tại EEA dùng Bybit EU (bybit.eu), nền tảng có ưu đãi giới thiệu riêng.",
    },
    {
      topic: "referral",
      q: "Giao dịch nào được tính để nhận thưởng giới thiệu Bybit?",
      a: "Khối lượng giao dịch Spot, phái sinh và quyền chọn đều được tính; Bybit còn nêu tên Alpha, Convert và một vài sản phẩm mới hơn. Giao dịch ở cặp miễn phí giao dịch không được tính.",
    },
    {
      topic: "signup",
      q: "Có thể đăng ký Bybit bằng Google, Apple hoặc Telegram không?",
      a: "Có. Ngoài địa chỉ email hoặc số điện thoại, Bybit còn cho đăng ký bằng Google, Apple và Telegram. Trong ứng dụng (phiên bản 4.47.0 trở lên), bạn cũng có thể tạo passkey.",
    },
    {
      topic: "signup",
      q: "Có thể dùng Bybit mà không KYC không?",
      a: "Không, nếu bạn muốn giao dịch. Khi chưa xác minh danh tính, tài khoản Bybit không thể nạp tiền hay giao dịch; tài khoản chỉ có thể rút tiền, tối đa 20.000 USDT mỗi ngày và 100.000 USDT mỗi tháng.",
    },
    {
      topic: "signup",
      q: "Bybit có những cấp KYC nào và hạn mức rút tiền bao nhiêu?",
      a: "Xác minh Standard (giấy tờ tùy thân cùng bước đánh giá danh tính) cho phép rút tối đa 1 triệu USDT mỗi ngày. Xác minh Advanced, cần thêm giấy tờ chứng minh địa chỉ, nâng hạn mức lên 2 triệu USDT mỗi ngày. Với hạn mức cao hơn còn có cấp Pro, kèm quy trình thẩm định tăng cường (enhanced due diligence).",
    },
    {
      topic: "bonus",
      q: "Thưởng giới thiệu Bybit cho người dùng mới là bao nhiêu?",
      a: "Lên đến 250 USDT cho người được giới thiệu: 50 USDT cho giao dịch đầu tiên từ 50 USD trở lên trong vòng 14 ngày sau khi đăng ký, 100 USDT khi đạt khối lượng tích lũy 500 USD trong 30 ngày sau giao dịch đó và 100 USDT khi đạt 10.000 USD trong cùng khoảng thời gian. Người giới thiệu nhận số tiền tương tự, vì vậy Bybit quảng bá mức tổng cộng lên đến 500 USDT.",
    },
    {
      topic: "bonus",
      q: "Bybit Welcome Gifts là gì?",
      a: "Rewards Hub của Bybit liệt kê Welcome Gifts trị giá 100 USDT: Fee Saver 20 USDT khi hoàn tất xác minh danh tính, Position Airdrop 30 USDT khi nạp tối thiểu 10 USD và Fee Saver 50 USDT khi giao dịch tối thiểu 10 USD – tất cả đều dùng cho phái sinh. Nhiệm vụ khác nhau tùy người dùng và khu vực.",
    },
    {
      topic: "bonus",
      q: "Có phải tự nhận thưởng giới thiệu Bybit không?",
      a: "Có. Mỗi phần thưởng phải qua 3 ngày xét duyệt rủi ro, sau đó bạn cần nhận trong vòng 10 ngày, nếu không phần thưởng sẽ hết hạn. Phần thưởng được chi từ quỹ thưởng 500.000 USDT mỗi tháng theo thứ tự ai đến trước nhận trước.",
    },
    {
      topic: "bonus",
      q: "Có rút được Welcome Gifts của Bybit không?",
      a: "Không. Bybit cho biết phần thưởng trong Rewards Hub có thời hạn và không thể rút. Fee Saver dùng để bù trừ phí giao dịch, còn Position Airdrop được dùng làm tiền ký quỹ khi giao dịch phái sinh.",
    },
    {
      topic: "fees",
      q: "Phí Futures Bybit là bao nhiêu?",
      a: "Người dùng VIP 0 trả 0,02% phí maker và 0,055% phí taker cho hợp đồng vĩnh cửu và Futures, 0,1% cho Spot và 0,02% maker / 0,03% taker cho quyền chọn. Trả phí bằng MNT giúp giảm phí Futures 10%, còn 0,018% / 0,0495%.",
    },
    {
      topic: "fees",
      q: "Đòn bẩy tối đa trên Bybit là bao nhiêu?",
      a: "Tối đa 150x với hợp đồng vĩnh cửu BTCUSDT ở bậc rủi ro đầu tiên (vị thế đến 300.000 USDT); ở bậc tiếp theo, mức tối đa giảm còn 100x và tiếp tục giảm khi vị thế lớn hơn. Đòn bẩy cao làm tăng mạnh rủi ro bị thanh lý.",
    },
    {
      topic: "fees",
      q: "Trả phí bằng MNT trên Bybit được giảm bao nhiêu?",
      a: "Trả phí bằng MNT giúp giảm 25% phí Spot và 10% phí Futures. Mức giảm không áp dụng cho hợp đồng nghịch đảo, bot giao dịch, người theo dõi trong copy trading hoặc giao dịch qua API.",
    },
    {
      topic: "safety",
      q: "Bybit có bị hack không?",
      a: "Có. Ngày 21 tháng 2 năm 2025, khoảng 1,46 tỷ USD đã bị đánh cắp khỏi một ví lạnh Ethereum. Bybit không dừng rút tiền, tìm nguồn ETH thay thế qua khoản vay bắc cầu, khoản nạp lớn và giao dịch mua OTC; kết quả kiểm toán bằng chứng dự trữ của Hacken ngày 24 tháng 2 cho thấy khoản thiếu hụt đã được bù đắp trong vòng 72 giờ.",
    },
    {
      topic: "safety",
      q: "Bybit có dùng được ở Vương quốc Anh không?",
      a: "Không. Bybit không nhận đăng ký mới từ Vương quốc Anh, và từ ngày 21 tháng 10 năm 2026 tài khoản có nơi cư trú tại Vương quốc Anh chỉ còn được rút tiền.",
    },
    {
      topic: "safety",
      q: "Bybit có dùng được ở châu Âu không?",
      a: "Bybit EU GmbH tại Vienna phục vụ người cư trú tại EEA; công ty chịu sự giám sát của Cơ quan Giám sát Thị trường Tài chính Áo theo MiCAR và hoạt động trên toàn EEA trừ Malta. Đây là một nền tảng riêng với biểu phí và danh mục sản phẩm riêng.",
    },
  ],
};
