import type { ExchangeText } from "../../types";

export const gate: ExchangeText = {
  referral: {
    codeName: "mã giới thiệu",
    whereShort: "Tự gắn qua liên kết đăng ký – Gate hiển thị người giới thiệu ngay trên biểu mẫu đăng ký",
    apply:
      "Mở liên kết đăng ký trên trang này: Gate gắn mã vào lượt đăng ký của bạn và hiển thị banner người giới thiệu kèm phần thưởng trên biểu mẫu.",
    whereToEnter:
      "Với Gate, cách an toàn nhất là dùng liên kết giới thiệu. Liên kết trên trang này mở gate.com/signup và gắn sẵn mã VAAXAW9YVA, sau đó Gate xác nhận bằng banner “Register now to receive a gift from your friend” (đăng ký ngay để nhận quà từ bạn bè) phía trên biểu mẫu. Bước đầu tiên của biểu mẫu trên web chỉ hỏi quốc gia cư trú, nên ở đó không có ô riêng để nhập mã – nếu không thấy banner người giới thiệu, hãy mở lại liên kết trước khi tạo tài khoản.",
    afterSignupShort: "Chưa có hướng dẫn từ Gate – hãy dùng liên kết khi đăng ký",
    afterSignup:
      "Gate không công bố cách thêm mã giới thiệu vào tài khoản sàn đã có. Theo quy tắc giới thiệu của Gate, mỗi người dùng chỉ được đăng ký qua một hình thức giới thiệu, và chính hướng dẫn của Gate cảnh báo rằng quan hệ giới thiệu có thể không được ghi nhận nếu người dùng mới đăng ký mà không có liên kết mời hoặc mã giới thiệu. Dùng liên kết trước khi tạo tài khoản.",
    inviteeReward:
      "Đăng ký qua liên kết này đưa bạn vào chương trình Super Commission của Gate: trang đăng ký của Gate ghi rõ bạn nhận thưởng hoa hồng 10% trên phí giao dịch. Theo quy tắc chương trình, khoản hoàn phí được tính trên phí giao dịch bạn trả trong 1 năm và không áp dụng cho giao dịch fiat.",
    guide: [
      "Gate chạy song song nhiều chương trình giới thiệu. Mã VAAXAW9YVA thuộc Super Commission – chương trình mà người giới thiệu chia lại một phần hoa hồng cho người được mời: theo tỷ lệ Gate công bố, người giới thiệu nhận 30% và người được giới thiệu nhận 10%, tính trên phí giao dịch của người được giới thiệu trong một năm. Không tính giao dịch fiat.",
      "Một lần đăng ký áp dụng cho Spot, Margin, Futures và Trenches (mục mà Gate còn gọi là Gate Alpha). Các chiến dịch giới thiệu khác của Gate dùng voucher thay cho hoa hồng – “Earn Voucher” và “Token Crew” – nhưng quy tắc Super Commission ghi rằng tài khoản được mời theo cách này không đủ điều kiện nhận thưởng từ sự kiện khác, vì vậy đừng trông chờ vào việc cộng dồn.",
      "Gate không hỗ trợ mời chéo giữa các trang. Nếu bạn sống tại Khu vực Kinh tế châu Âu (EEA), một pháp nhân riêng của Gate tại Malta sẽ phục vụ bạn (gate.com/en-eu); ở đó hoa hồng chỉ trả cho giao dịch Spot, và lượt giới thiệu trên trang toàn cầu không được chuyển sang. Super Commission cũng không dành cho người dùng tại Bỉ, Vương quốc Anh, Pháp, Đức, Hà Lan, Thổ Nhĩ Kỳ, Áo và Hàn Quốc.",
    ],
  },
  signup: {
    methods: ["địa chỉ email", "số điện thoại", "Google", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Mở trang đăng ký Gate",
        text: "Dùng nút đăng ký trên trang này. Phía trên biểu mẫu, Gate hiển thị banner người giới thiệu kèm thưởng 10% trên phí giao dịch – đó là dấu hiệu mã giới thiệu đã gắn thành công.",
      },
      {
        title: "Chọn quốc gia hoặc khu vực cư trú",
        text: "Chọn nơi bạn sinh sống, đồng ý với Thỏa thuận người dùng rồi nhấn “Create Account” (tạo tài khoản).",
      },
      {
        title: "Nhập email hoặc số điện thoại",
        text: "Chọn một trong hai; Gate dùng thông tin này để đăng nhập và gửi mã bảo mật.",
      },
      {
        title: "Nhập mã xác minh",
        text: "Gate gửi mã đến email hoặc điện thoại của bạn. Theo hướng dẫn trên ứng dụng của Gate, mã có hiệu lực trong 15 phút.",
      },
      {
        title: "Đặt mật khẩu",
        text: "Chọn một mật khẩu mạnh, chưa dùng ở nơi khác, để hoàn tất tạo tài khoản.",
      },
      {
        title: "Xác minh danh tính",
        text: "Hoàn tất KYC bằng hộ chiếu, thẻ căn cước hoặc giấy phép lái xe. Gate yêu cầu bước này trước khi bạn nạp hoặc rút tiền mã hóa.",
      },
    ],
    kycShort: "Bắt buộc khi nạp và rút tiền",
    kyc: "Có. Gate cho biết xác minh danh tính (KYC) là bắt buộc với mọi người dùng khi nạp và rút tiền mã hóa, giao dịch tiền pháp định và tham gia các đợt đăng ký mua Startup. Xác minh địa chỉ không bắt buộc và giúp nâng hạn mức rút tiền. Nhiệm vụ xác minh danh tính cũng nằm trong phần thưởng tân thủ của Gate.",
    documents:
      "Gate chấp nhận hộ chiếu, thẻ căn cước hoặc giấy phép lái xe để xác minh danh tính. Bạn có thể tự nguyện bổ sung giấy tờ chứng minh địa chỉ để có hạn mức cao hơn.",
    minAge: "18 tuổi (Thỏa thuận người dùng của Gate)",
  },
  welcomeTasks: [
    { task: "Đăng ký", reward: "Voucher trị giá 50 USDT" },
    { task: "Hoàn tất xác minh danh tính", reward: "Voucher trị giá 50 USDT" },
    { task: "Lần nạp đầu tiên tối thiểu 10 USDT", reward: "Voucher trị giá 10 USDT" },
    { task: "Giao dịch đầu tiên tối thiểu 10 USDT", reward: "Voucher trị giá 5 USDT" },
    { task: "Tải ứng dụng lần đầu", reward: "Voucher trị giá 10 USDT" },
    {
      task: "Nhiệm vụ nâng cao, giai đoạn đầu tiên: nạp ròng tối thiểu 50 USDT và đạt khối lượng giao dịch 500 USDT",
      reward: "100 USDT (nhiệm vụ nâng cao lên đến 10.000 USDT)",
    },
  ],
  tokenDiscount: "Trả phí Spot bằng GT giúp giảm mức phí tiêu chuẩn từ 0,1% xuống 0,09% cho cả maker lẫn taker.",
  extraFeeMarkets: ["Hợp đồng giao hàng USDT"],
  sourceLabels: [
    "Gate: Chương trình giới thiệu Super Commission và quy tắc",
    "Gate: Chiến dịch giới thiệu Earn Voucher",
    "Gate: Chiến dịch giới thiệu Token Crew",
    "Gate Learn: Hướng dẫn chương trình giới thiệu của Gate",
    "Gate: Rewards Hub (nhiệm vụ tân thủ)",
    "Gate: Quy tắc nhiệm vụ tân thủ",
    "Gate: Biểu phí",
    "Gate: Ký quỹ và các bậc đòn bẩy hợp đồng vĩnh cửu BTCUSDT",
    "Gate: Giới hạn đòn bẩy cho tài khoản Futures mới",
    "Gate: Cách đăng ký trên website",
    "Gate: Cách đăng ký trên ứng dụng",
    "Gate: Yêu cầu KYC",
    "Gate: Cách hoàn tất xác minh danh tính",
    "Gate: Thỏa thuận người dùng (khu vực bị hạn chế, độ tuổi tối thiểu)",
    "Gate: Thông tin về Gate",
    "Gate: Giấy phép",
    "Gate: Bằng chứng dự trữ",
    "Gate: Chuyển sang tên miền gate.com (thông báo)",
  ],
  feeDiscount: "Hoàn 10% phí giao dịch trong 1 năm",
  referralCovers: ["Spot", "Margin", "Futures", "Trenches (Gate Alpha)"],
  bonusHeadline: "Hoàn 10% phí giao dịch kèm nhiệm vụ tân thủ trị giá 125 USDT",
  benefits: [
    "Rewards Hub của Gate liệt kê nhiệm vụ tân thủ với voucher trị giá 125 USDT (đăng ký, xác minh, nạp tiền lần đầu, giao dịch đầu tiên, tải ứng dụng)",
    "Một lượt giới thiệu áp dụng cho Spot, Margin, Futures và Trenches trong một năm",
    "Phí Spot 0,1%, hoặc 0,09% khi trả bằng GT",
    "Giao dịch hơn 5.400 tài sản số chỉ với một tài khoản",
  ],
  benefitNote:
    "Mức hoàn 10% là phần thưởng Gate hiển thị trên trang đăng ký mở qua liên kết này; mức này không áp dụng cho giao dịch fiat và không dành cho người dùng tại Bỉ, Vương quốc Anh, Pháp, Đức, Hà Lan, Thổ Nhĩ Kỳ, Áo và Hàn Quốc. Nhiệm vụ tân thủ phải hoàn thành trong vòng 15 ngày kể từ khi đăng ký, có thể khác nhau theo khu vực và không áp dụng cho tài khoản tổ chức, tài khoản API và tài khoản tiếp thị liên kết. Theo quy tắc của Gate, tài khoản được mời qua hình thức chia sẻ hoa hồng không đủ điều kiện nhận thưởng từ sự kiện khác – Rewards Hub trong tài khoản cho thấy phần thưởng bạn thực sự nhận được.",
  headquarters: "Gate Group, có các pháp nhân được cấp phép tại nhiều khu vực",
  regulation:
    "Giấy phép hoặc đăng ký tại Malta (MFSA, MiCA), Gibraltar, Bahamas, Hồng Kông, Dubai (VARA, DMCC), Úc (AUSTRAC), Nhật Bản và Síp",
  users: "Hơn 63 triệu người dùng (theo Gate)",
  assets: "5.400+ tài sản số",
  maxLeverage: "Tối đa 200x (hợp đồng vĩnh cửu BTCUSDT)",
  feeNote:
    "Cấp VIP càng cao, phí càng thấp. Nếu bật Points Deduction thay vì GT, Gate áp dụng mức phí cố định: 0,2% cho Spot và phí taker 0,075% cho Futures.",
  products: ["Hợp đồng vĩnh cửu", "Hợp đồng giao hàng", "Quyền chọn", "Spot", "Margin", "Copy trading", "Launchpad", "Earn"],
  tagline: "Lựa chọn altcoin rộng nhất, hoạt động từ năm 2013",
  quickAnswer:
    "Mã giới thiệu Gate là VAAXAW9YVA. Mở liên kết đăng ký trên trang này, Gate sẽ tự gắn mã – sau đó biểu mẫu đăng ký hiển thị banner hứa thưởng hoa hồng 10% trên phí giao dịch của bạn. Khoản hoàn phí kéo dài một năm và áp dụng cho giao dịch giao ngay (Spot), giao dịch ký quỹ (Margin), hợp đồng tương lai (Futures) và Trenches. Gate không có hướng dẫn thêm mã sau khi đăng ký, vì vậy hãy dùng liên kết trước khi tạo tài khoản.",
  about: [
    "Gate được thành lập năm 2013 – khởi đầu với tên Bter.com, sau đó trở thành Gate.io và chuyển sang tên miền quốc tế gate.com vào tháng 5 năm 2025. Điểm nhận diện của Gate là độ phủ: theo Gate, sàn niêm yết hơn 5.400 tài sản số và phục vụ hơn 63 triệu người dùng, và token mới thường xuất hiện ở đây từ rất lâu trước khi các sàn lớn khác niêm yết.",
    "Ở mảng phái sinh, Gate có lượng hợp đồng mở (Open Interest) lớn thứ hai trên bảng xếp hạng của CoinMarketCap tại ngày chốt dữ liệu thị trường của chúng tôi, với hợp đồng tương lai vĩnh cửu ký quỹ USDT trên hàng trăm altcoin, hợp đồng giao hàng và quyền chọn (Options). Đòn bẩy trên hợp đồng vĩnh cửu BTCUSDT đạt tối đa 200x ở bậc rủi ro thấp nhất, còn tài khoản Futures mới chỉ được dùng tối đa 20x trong ba ngày đầu tiên. Giao dịch sao chép (copy trading), launchpad cho token mới và các sản phẩm Earn nằm ngay cạnh màn hình giao dịch.",
    "Gate công bố bằng chứng dự trữ (Proof of Reserves) từ tháng 5 năm 2020. Đợt công bố ngày 18 tháng 10 năm 2026 cho thấy tổng dự trữ 8,68 tỷ USD trên 496 tài sản, với tỷ lệ dự trữ 118%. Tập đoàn có giấy phép và đăng ký tại Malta (MFSA, theo MiCA), Gibraltar, Bahamas, Hồng Kông, Dubai, Úc, Nhật Bản và Síp. Trang toàn cầu gate.com không phục vụ người cư trú tại Mỹ và một danh sách dài các quốc gia khác; người cư trú tại Khu vực Kinh tế châu Âu (EEA) do pháp nhân Malta của Gate phục vụ.",
  ],
  highlights: [
    { title: "5.400+ tài sản", text: "Một trong những danh mục altcoin lớn nhất trong số các sàn giao dịch." },
    { title: "Hoàn 10% phí giao dịch", text: "Gate hiển thị mức này trên trang đăng ký mở qua liên kết này." },
    { title: "Dự trữ 118%", text: "Bằng chứng dự trữ từ năm 2020, đợt mới nhất ngày 18 tháng 10 năm 2026." },
  ],
  pros: [
    "Futures trên nhiều altcoin mà sàn khác không có",
    "Phí Spot tiêu chuẩn 0,1%, 0,09% khi dùng GT, và 0,02% / 0,05% cho hợp đồng vĩnh cửu USDT",
    "Bằng chứng dự trữ từ năm 2020, tỷ lệ dự trữ 118%",
    "Lịch sử hoạt động dài từ năm 2013 và danh sách giấy phép khu vực ngày càng mở rộng",
  ],
  cons: [
    "Trang toàn cầu không phục vụ nhiều quốc gia, trong đó có Mỹ, Vương quốc Anh, Canada, Đức, Pháp, Tây Ban Nha và Hà Lan",
    "Không có hướng dẫn thêm mã giới thiệu sau khi đăng ký",
    "Lượt giới thiệu không được chuyển giữa các trang khu vực của Gate",
    "Token nhỏ biến động mạnh và có rủi ro thanh khoản cao",
  ],
  bestFor: ["Nhà giao dịch Futures altcoin", "Người săn token mới niêm yết", "Nhà giao dịch coi trọng sự đa dạng hơn sự đơn giản"],
  signupTip:
    "Hãy hoàn thành nhiệm vụ tân thủ trong vòng 15 ngày sau khi đăng ký – quá hạn này, voucher tân thủ sẽ hết hiệu lực – và cân nhắc trả phí Spot bằng GT để giảm xuống 0,09%.",
  safety:
    "Gate công bố bằng chứng dự trữ với tỷ lệ dự trữ trên 100% – 118% ở đợt ngày 18 tháng 10 năm 2026 – và trung tâm trợ giúp của sàn hướng dẫn xác thực hai yếu tố, mã chống lừa đảo (anti-phishing), danh sách trắng địa chỉ rút tiền và mật khẩu quỹ. Hãy bật các tính năng này trước khi nạp tiền. Với altcoin vốn hóa nhỏ, hãy luôn kiểm tra thanh khoản trước khi mở vị thế có đòn bẩy.",
  restricted:
    "Thỏa thuận người dùng của Gate (cập nhật lần cuối ngày 22 tháng 7 năm 2026) liệt kê các khu vực bị hạn chế đối với trang toàn cầu, trong đó có Mỹ, Trung Quốc đại lục, Singapore, Canada, Pháp, Đức, Hồng Kông, Malaysia, Malta, Tây Ban Nha, Hà Lan, Vương quốc Anh, Áo, Ấn Độ, Indonesia, Nhật Bản, Argentina, Các Tiểu vương quốc Ả Rập Thống nhất (UAE), Thái Lan, Hàn Quốc, Philippines, Pakistan, Việt Nam, Nga và Belarus, cùng các khu vực chịu lệnh trừng phạt. Một số quốc gia trong danh sách do các pháp nhân riêng của Gate phục vụ, với trang web và quy định riêng.",
  faqs: [
    {
      topic: "referral",
      q: "Mã giới thiệu Gate VAAXAW9YVA có còn hoạt động không?",
      a: "Có. Ngày 16 tháng 11 năm 2026, liên kết gate.com/signup/VAAXAW9YVA mở đúng trang đăng ký chính thức của Gate, với mã đã gắn sẵn và banner người giới thiệu ghi “Sign up and trade to receive 10% commission reward on trading fees!” (đăng ký và giao dịch để nhận thưởng hoa hồng 10% trên phí giao dịch).",
    },
    {
      topic: "referral",
      q: "Hoàn phí từ mã giới thiệu Gate kéo dài bao lâu?",
      a: "Một năm. Theo quy tắc Super Commission của Gate, khoản hoàn phí được tính trên phí giao dịch bạn trả trong 1 năm và không áp dụng cho giao dịch fiat.",
    },
    {
      topic: "referral",
      q: "Gate.io có phải là Gate không, mã giới thiệu còn dùng được không?",
      a: "Có. Gate.io đã chuyển sang tên miền quốc tế gate.com vào tháng 5 năm 2025; đây vẫn là cùng một sàn, thành lập năm 2013. Mã VAAXAW9YVA được dùng trên gate.com.",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu Gate có dùng được ở EU không?",
      a: "Không hẳn. Người cư trú tại Khu vực Kinh tế châu Âu (EEA) do một trang Gate riêng phục vụ (gate.com/en-eu, vận hành từ Malta), nơi hoa hồng chỉ áp dụng cho giao dịch Spot, và Gate cho biết không hỗ trợ mời chéo giữa các trang. Super Commission cũng không dành cho người dùng tại Bỉ, Pháp, Đức, Hà Lan và Áo.",
    },
    {
      topic: "referral",
      q: "Hoàn phí từ mã giới thiệu Gate có cộng dồn được với voucher giới thiệu của Gate không?",
      a: "Không nên trông chờ. Quy tắc Super Commission của Gate ghi rằng tài khoản được mời theo cách này không đủ điều kiện nhận thưởng từ sự kiện khác, kể cả các chiến dịch voucher “Earn Voucher” và “Token Crew”.",
    },
    {
      topic: "signup",
      q: "Vì sao biểu mẫu đăng ký Gate hỏi quốc gia trước tiên?",
      a: "Quy trình đăng ký Gate bắt đầu bằng quốc gia hoặc khu vực cư trú vì sản phẩm, phần thưởng và cả pháp nhân Gate phục vụ bạn đều phụ thuộc vào thông tin này. Chỉ sau bước đó bạn mới nhập email hoặc số điện thoại.",
    },
    {
      topic: "signup",
      q: "Mã xác minh Gate có hiệu lực bao lâu?",
      a: "Theo hướng dẫn đăng ký trên ứng dụng của Gate, mã xác minh gửi đến email hoặc điện thoại của bạn có hiệu lực trong 15 phút.",
    },
    {
      topic: "signup",
      q: "Dùng Gate không cần KYC được không?",
      a: "Chỉ ở mức hạn chế. Gate cho biết KYC là bắt buộc với mọi người dùng khi nạp và rút tiền mã hóa, giao dịch tiền pháp định và tham gia các đợt đăng ký mua Startup.",
    },
    {
      topic: "bonus",
      q: "Gate có thưởng chào mừng gì cho người dùng mới?",
      a: "Rewards Hub của Gate liệt kê nhiệm vụ tân thủ với voucher trị giá 125 USDT: 50 khi đăng ký, 50 khi xác minh danh tính, 10 cho lần nạp đầu tiên tối thiểu 10 USDT, 5 cho giao dịch đầu tiên tối thiểu 10 USDT và 10 khi tải ứng dụng lần đầu. Nhiệm vụ nâng cao lên đến 10.000 USDT. Bản thân trang đăng ký quảng bá mức thưởng lên đến 135 USDT, vì vậy số tiền hiển thị trong tài khoản của bạn mới là con số có giá trị.",
    },
    {
      topic: "bonus",
      q: "Nhiệm vụ tân thủ Gate phải hoàn thành trong bao lâu?",
      a: "Nhiệm vụ tân thủ phải hoàn thành trong vòng 15 ngày kể từ khi đăng ký. Giao dịch stablecoin không được tính vào nhiệm vụ giao dịch, và tài khoản tổ chức, tài khoản API và tài khoản tiếp thị liên kết không được tham gia.",
    },
    {
      topic: "fees",
      q: "Phí Spot trên Gate là bao nhiêu?",
      a: "Phí Spot tiêu chuẩn (VIP 0) là 0,1% cho cả maker và taker, hoặc 0,09% khi trả phí bằng GT. Nếu bật Points Deduction thay vào đó, Gate áp dụng mức cố định 0,2%.",
    },
    {
      topic: "fees",
      q: "Phí Futures trên Gate là bao nhiêu?",
      a: "Hợp đồng vĩnh cửu USDT có phí maker 0,02% và taker 0,05% ở mức phí tiêu chuẩn. Hợp đồng giao hàng USDT niêm yết phí maker -0,015% (tức là bạn được hoàn phí) và taker 0,016%.",
    },
    {
      topic: "fees",
      q: "Đòn bẩy tối đa trên Gate là bao nhiêu?",
      a: "Tối đa 200x với hợp đồng vĩnh cửu BTCUSDT ở bậc rủi ro thấp nhất (ký quỹ chéo, vị thế nằm trong hạn mức rủi ro đầu tiên). Tài khoản Futures mới bị giới hạn ở 20x trong ba ngày đầu tiên. Với đòn bẩy cao như vậy, chỉ một biến động giá rất nhỏ cũng có thể khiến vị thế bị thanh lý.",
    },
    {
      topic: "safety",
      q: "Gate có dùng được ở Mỹ không?",
      a: "Không. Mỹ nằm trong danh sách khu vực bị hạn chế của Thỏa thuận người dùng Gate.",
    },
    {
      topic: "safety",
      q: "Gate có công bố bằng chứng dự trữ (Proof of Reserves) không?",
      a: "Có, từ tháng 5 năm 2020. Đợt công bố ngày 18 tháng 10 năm 2026 cho thấy tổng dự trữ 8,68 tỷ USD trên 496 tài sản và tỷ lệ dự trữ 118%.",
    },
    {
      topic: "safety",
      q: "Gate được cấp phép ở đâu?",
      a: "Gate công bố giấy phép hoặc đăng ký tại Hồng Kông, Gibraltar, Malta (MFSA, theo MiCA), Úc (AUSTRAC), Dubai (VARA và DMCC), Bahamas, Nhật Bản và Síp.",
    },
  ],
};
