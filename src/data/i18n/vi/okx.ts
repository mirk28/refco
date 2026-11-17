import type { ExchangeText } from "../../types";

export const okx: ExchangeText = {
  referral: {
    codeName: "mã giới thiệu",
    whereShort: "Ô “Referral code (optional)” (mã giới thiệu, không bắt buộc) ở bước nhập email khi đăng ký",
    apply:
      "Nhập mã vào ô “Referral code (optional)” (mã giới thiệu, không bắt buộc) ở bước nhập email khi đăng ký – ô này đang thu gọn nên cần bấm mở ra trước – hoặc mở liên kết đăng ký trên trang này, liên kết đã mang sẵn mã cho bạn.",
    whereToEnter:
      "Trên website OKX, bạn nhập mã vào ô “Referral code (optional)” (mã giới thiệu, không bắt buộc) ở bước điền địa chỉ email. Ô này mặc định được thu gọn, nên cần bấm mở ra trước. Nếu bạn vào qua liên kết giới thiệu, mã sẽ tự đi kèm; OKX cho biết mã đã điền sẵn từ liên kết thì không thể chỉnh sửa. Trên điện thoại, OKX hướng dẫn nhập email trên trang mời trước, sau đó cài ứng dụng qua chính liên kết đó và đăng ký bằng cùng email – nếu bạn cài ứng dụng riêng rồi đăng ký trong ứng dụng, mã có thể không được ghi nhận.",
    afterSignupShort: "Không – chỉ khi đăng ký",
    afterSignup:
      "Không. OKX cho biết mã giới thiệu chỉ có hiệu lực trong lúc đăng ký và không thể bổ sung về sau; trang FAQ về chương trình giới thiệu cũng nêu rằng thông thường không thể thêm hay đổi mã sau khi đã đăng ký. Xóa tài khoản rồi đăng ký lại không giúp bạn đủ điều kiện trở lại và có thể bị coi là vi phạm. Liên kết dạng okx.com/join/… không thể gắn vào tài khoản đã có.",
    inviteeReward:
      "Là người được giới thiệu, bạn nhận phần thưởng chào mừng của OKX (Welcome Rewards), còn gọi là New User Bonus. Phần thưởng này tách biệt với phần thưởng của người giới thiệu và phụ thuộc vào quốc gia của bạn, chiến dịch đang chạy và liên kết bạn dùng; ưu đãi được chốt ngay lúc bạn đăng ký. Khi chúng tôi kiểm tra, trang mời của mã này hiển thị thưởng chào mừng lên đến 400 EUR trên OKX Europe, còn trang mời toàn cầu của OKX hứa hẹn lên đến 100 USDT cho việc đăng ký và hoàn thành nhiệm vụ.",
    guide: [
      "Mã giới thiệu OKX liên kết tài khoản mới của bạn với người đã mời bạn. Về mặt thực tế, mã giúp bạn tiếp cận phần thưởng chào mừng (Welcome Rewards): một loạt nhiệm vụ nạp tiền và giao dịch mà OKX đặt mức thưởng theo từng quốc gia, chiến dịch và nhóm người dùng. OKX xác định ưu đãi của bạn ngay khi bạn đăng ký, vì vậy mã phải có mặt đúng vào thời điểm đó.",
      "Bạn được đưa đến phiên bản OKX nào phụ thuộc vào nơi bạn sống. Người truy cập từ Khu vực Kinh tế châu Âu (EEA) – và từ một số nước châu Âu khác – được chuyển đến OKX Europe (okx.com/en-eu), do OKX Europe Limited tại Malta vận hành theo MiCA. Tại đây, phần thưởng được trả bằng tiền mã hóa, voucher X-Perps hoặc VIP Pass; phần thưởng bằng tiền mã hóa bị khóa tối đa 45 ngày (giao dịch được nhưng không rút được), và khối lượng giao dịch X-Perps không được tính vào nhiệm vụ giao dịch.",
      "Trên trang toàn cầu, phần thưởng về tài khoản dưới dạng tiền mã hóa hoặc thẻ hoàn phí và bạn phải mở chúng trong vòng 30 ngày; mỗi nhiệm vụ giao dịch phải hoàn thành bằng một giao dịch duy nhất, còn nhiệm vụ chưa hoàn thành sẽ biến mất sau 180 ngày kể từ khi đăng ký.",
    ],
  },
  signup: {
    methods: ["địa chỉ email (số điện thoại được thêm và xác nhận trong quá trình đăng ký)"],
    steps: [
      {
        title: "Mở trang mời của OKX",
        text: "Dùng nút đăng ký trên trang này. OKX mở trang mời cho mã T7IRGAR3 và hiển thị thưởng chào mừng áp dụng tại quốc gia của bạn.",
      },
      {
        title: "Chọn quốc gia hoặc khu vực cư trú",
        text: "Chọn nơi bạn sống, xác nhận Điều khoản dịch vụ (Terms of Service) rồi bấm “Next” (Tiếp theo).",
      },
      {
        title: "Nhập địa chỉ email và kiểm tra mã giới thiệu",
        text: "Mở ô “Referral code (optional)” (mã giới thiệu, không bắt buộc) – trong ô phải có sẵn T7IRGAR3 – rồi bấm “Sign up” (Đăng ký).",
      },
      {
        title: "Xác nhận mã email gồm 6 chữ số",
        text: "OKX gửi mã 6 chữ số đến địa chỉ email của bạn. Mã có hiệu lực trong 10 phút.",
      },
      {
        title: "Thêm số điện thoại",
        text: "Nhập số điện thoại và mã 6 chữ số được gửi đến số đó. OKX yêu cầu mọi tài khoản phải có cả địa chỉ email lẫn số điện thoại.",
      },
      {
        title: "Đặt mật khẩu",
        text: "Chọn cho tài khoản mật khẩu mạnh và chưa dùng ở bất kỳ nơi nào khác.",
      },
      {
        title: "Xác minh danh tính",
        text: "Hoàn tất xác minh danh tính bằng giấy tờ tùy thân do nhà nước cấp và ảnh selfie hoặc xác minh khuôn mặt. Sau bước này bạn mới có thể giao dịch, nạp tiền và rút tiền.",
      },
    ],
    kycShort: "Bắt buộc trước khi giao dịch, nạp tiền và rút tiền",
    kyc: "Có. OKX yêu cầu xác minh danh tính để dùng tài khoản cá nhân – giao dịch, nạp tiền và rút tiền đều chỉ mở sau bước này. Bạn khai nơi cư trú, quốc tịch, họ tên, ngày sinh và thông tin giấy tờ tùy thân, tải lên giấy tờ do nhà nước cấp và chụp selfie hoặc xác minh khuôn mặt; OKX cũng có thể yêu cầu giấy tờ chứng minh địa chỉ được cấp trong 6 tháng gần nhất. OKX cho biết việc xét duyệt hoàn tất trong vòng 24 giờ, và mỗi giấy tờ tùy thân chỉ dùng được cho một tài khoản.",
    documents:
      "Giấy tờ tùy thân hợp lệ do nhà nước cấp: hộ chiếu, thẻ căn cước, giấy phép lái xe hoặc thẻ cư trú – danh sách hiển thị cho quốc gia của bạn khi xác minh mới là danh sách có giá trị quyết định – kèm ảnh selfie hoặc xác minh khuôn mặt và, nếu được yêu cầu, giấy tờ chứng minh địa chỉ không quá 6 tháng.",
    minAge: "18 tuổi",
  },
  welcomeTasks: [],
  tokenDiscount: "",
  extraFeeMarkets: ["Quyền chọn"],
  sourceLabels: [
    "OKX: Cách đăng ký tài khoản",
    "OKX: FAQ về chương trình giới thiệu",
    "OKX: FAQ tiếp thị liên kết (mã giới thiệu và hoàn phí)",
    "OKX: Điều khoản và điều kiện New User Bonus (EEA)",
    "OKX: FAQ về New User Bonus (EEA)",
    "OKX: Điều khoản và điều kiện New User Bonus (toàn cầu)",
    "OKX: Biểu phí",
    "OKX: FAQ về quy tắc phí giao dịch",
    "OKX: Đòn bẩy X-Perps tại EEA",
    "API công khai của OKX: danh sách hợp đồng vĩnh cửu (đòn bẩy tối đa)",
    "OKX: Cách xác minh tài khoản cá nhân",
    "OKX: Xác minh danh tính – điều kiện, thời gian xét duyệt và giấy tờ",
    "OKX: Công bố rủi ro và tuân thủ (khu vực bị hạn chế)",
    "OKX: Điều khoản dịch vụ",
    "OKX Europe: Giới thiệu",
    "OKX Middle East: Giới thiệu (giấy phép VARA)",
    "OKX: Bằng chứng dự trữ",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures và hợp đồng vĩnh cửu"],
  bonusHeadline: "Thưởng chào mừng lên đến 400 EUR hoặc 100 USDT",
  benefits: [
    "Phần thưởng chào mừng OKX cho người dùng mới: lên đến 400 EUR trên OKX Europe, lên đến 100 USDT trên trang toàn cầu, mở khóa qua nhiệm vụ nạp tiền và giao dịch",
    "Mức phí tiêu chuẩn thấp: 0,08% maker / 0,10% taker cho Spot và 0,02% / 0,05% cho Futures và hợp đồng tương lai vĩnh cửu",
    "Mã có sẵn trong liên kết thì không thể gõ nhầm – OKX khóa mã đã điền sẵn",
    "Bằng chứng dự trữ (Proof of Reserves) hằng tháng mà bạn có thể tự đối chiếu với số dư tài khoản",
  ],
  benefitNote:
    "Để nhận phần thưởng chào mừng, bạn phải đăng ký qua liên kết được chỉ định và hoàn tất xác minh danh tính, sau đó làm nhiệm vụ nạp tiền và giao dịch. Trên OKX Europe, chuyển khoản nội bộ không được tính là nạp tiền, cặp giao dịch miễn phí và khối lượng X-Perps không được tính là giao dịch, phần thưởng bằng tiền mã hóa bị khóa tối đa 45 ngày và việc cộng thưởng có thể mất tối đa 48 giờ. Trên trang toàn cầu, phần thưởng phải được mở trong vòng 30 ngày và nhiệm vụ hết hạn sau 180 ngày kể từ khi đăng ký. Mức thưởng và nhiệm vụ khác nhau tùy quốc gia và chiến dịch.",
  headquarters: "Aux Cayes FinTech Co. Ltd. (Seychelles) cho trang toàn cầu; OKX Europe Limited (Malta); OKX Middle East Fintech FZE (Dubai)",
  regulation: "Cấp phép MiCA qua OKX Europe Limited (Malta, MFSA); giấy phép VARA tại Dubai",
  users: "Hơn 120 triệu người dùng (theo OKX Europe)",
  assets: "270+ coin (theo OKX Europe)",
  maxLeverage: "Tối đa 100x (trang toàn cầu; tối đa 10x trên OKX Europe)",
  feeNote:
    "Đây là mức phí cho người dùng cấp Regular; cấp tiếp theo bắt đầu khi tài sản đạt 100.000 hoặc khối lượng giao dịch Spot 30 ngày đạt 1.000.000 (5.000.000 với Futures), tính bằng EUR trên OKX Europe và bằng USD trên trang toàn cầu. Futures có kỳ hạn chịu phí tất toán (settlement fee) 0,01%.",
  products: ["Spot", "Hợp đồng vĩnh cửu", "Futures có kỳ hạn", "Quyền chọn", "Bot giao dịch"],
  tagline: "Spot và phái sinh phí thấp, có bằng chứng dự trữ hằng tháng",
  quickAnswer:
    "Mã giới thiệu OKX là T7IRGAR3. Trên website, bạn nhập mã vào ô “Referral code (optional)” (mã giới thiệu, không bắt buộc) ở bước nhập email khi đăng ký; nút trên trang này mang sẵn mã cho bạn. Mã chỉ có hiệu lực khi đăng ký – OKX không bổ sung mã giới thiệu về sau. Người dùng mới nhận phần thưởng chào mừng của OKX: lên đến 400 EUR trên OKX Europe hoặc lên đến 100 USDT trên trang toàn cầu, sau khi xác minh danh tính và hoàn thành nhiệm vụ nạp tiền và giao dịch.",
  about: [
    "OKX được thành lập năm 2017 và là một trong những sàn giao dịch tiền mã hóa lớn nhất cho cả giao dịch giao ngay (Spot) lẫn phái sinh. Trang web OKX Europe nêu con số hơn 120 triệu người dùng và niêm yết hơn 270 coin. Người dùng cấp Regular trả phí maker 0,08% và taker 0,10% cho Spot; 0,02% / 0,05% cho hợp đồng tương lai (Futures) và hợp đồng tương lai vĩnh cửu; 0,03% cho quyền chọn (Options).",
    "Danh mục sản phẩm gồm Spot, hợp đồng vĩnh cửu, Futures có kỳ hạn, quyền chọn và bot giao dịch, nhưng bạn dùng được những gì còn tùy nơi bạn sống. Trên trang toàn cầu, đòn bẩy cao nhất là 100x, áp dụng cho hợp đồng vĩnh cửu như BTC-USDT, ETH-USDT, SOL-USDT và XRP-USDT. Trên OKX Europe, sản phẩm hợp đồng vĩnh cửu mang tên X-Perps và bị giới hạn ở 10x, thấp hơn với vị thế lớn.",
    "OKX công bố bằng chứng dự trữ mỗi tháng. Báo cáo thứ 49 bao quát 33,87 tỷ USD trên 21 tài sản; đợt kiểm chứng ngày 1 tháng 11 năm 2026 cho thấy tỷ lệ dự trữ 108% với BTC, 101% với ETH, 106% với USDT và 100% với USDC. Báo cáo dựa trên zk-STARK và cây Merkle, nhờ đó người dùng đã đăng nhập có thể kiểm tra số dư của chính họ có nằm trong báo cáo hay không. OKX Europe Limited được Malta Financial Services Authority cấp phép là nhà cung cấp dịch vụ tài sản mã hóa theo MiCA, còn OKX Middle East Fintech FZE có giấy phép của VARA tại Dubai.",
  ],
  highlights: [
    { title: "Mức phí tiêu chuẩn thấp", text: "0,08% / 0,10% cho Spot và 0,02% / 0,05% cho Futures và hợp đồng vĩnh cửu." },
    { title: "Bằng chứng dự trữ hằng tháng", text: "Đã có 49 báo cáo, có thể kiểm chứng bằng zk-STARK và cây Merkle." },
    { title: "Được cấp phép MiCA tại EEA", text: "OKX Europe Limited được MFSA, cơ quan quản lý tài chính Malta, cấp phép." },
  ],
  pros: [
    "Phí tiêu chuẩn thấp cho Spot, Futures và quyền chọn",
    "Bằng chứng dự trữ hằng tháng, tự kiểm chứng được, tỷ lệ trên 100%",
    "Pháp nhân được cấp phép MiCA cho người dùng tại EEA và giấy phép VARA tại Dubai",
    "Có quyền chọn và Futures có kỳ hạn bên cạnh hợp đồng vĩnh cửu",
  ],
  cons: [
    "Không thể thêm mã giới thiệu sau khi đăng ký",
    "Sản phẩm phụ thuộc nhiều vào quốc gia của bạn – trên OKX Europe, hợp đồng vĩnh cửu bị giới hạn ở 10x",
    "Phần thưởng chào mừng trên OKX Europe bị khóa tối đa 45 ngày",
    "Không phục vụ người dùng tại Canada, Ấn Độ, Nhật Bản, Hồng Kông và một số khu vực của Mỹ",
  ],
  bestFor: ["Nhà giao dịch Spot và Futures quan tâm đến phí", "Nhà giao dịch quyền chọn", "Người dùng tại EEA muốn dùng nền tảng được cấp phép MiCA"],
  signupTip:
    "Trên điện thoại, hãy nhập email trên trang mời trước rồi cài ứng dụng qua chính liên kết đó – nếu bạn tải ứng dụng riêng và đăng ký trong ứng dụng, mã giới thiệu có thể không được ghi nhận.",
  safety:
    "OKX công bố bằng chứng dự trữ hằng tháng – tỷ lệ 108% với BTC, 101% với ETH, 106% với USDT và 100% với USDC ở đợt kiểm chứng ngày 1 tháng 11 năm 2026 – và cho phép người dùng đã đăng nhập tự kiểm tra số dư qua “View my report” (Xem báo cáo của tôi), với công cụ mã nguồn mở và địa chỉ ví được công bố. Mỗi tài khoản phải liên kết cả địa chỉ email lẫn số điện thoại. Như với mọi sàn giao dịch, hãy chỉ giữ trên sàn số vốn dùng để giao dịch.",
  restricted:
    "OKX liệt kê các khu vực bị hạn chế sau: Afghanistan, Canada, Cuba, Hồng Kông, Iran, Ấn Độ, Nhật Bản, Malaysia, Nepal, Triều Tiên, Syria, Uzbekistan, các vùng Crimea, Donetsk và Luhansk, cùng một số khu vực pháp lý của Mỹ, bao gồm toàn bộ vùng lãnh thổ của Mỹ. Hạn chế một phần áp dụng tại Úc, Brazil, Hàn Quốc và Vương quốc Anh (không có phái sinh) cũng như với thanh toán fiat tại Nga. Danh sách được cập nhật lần cuối ngày 14 tháng 11 năm 2026.",
  faqs: [
    {
      topic: "referral",
      q: "Mã giới thiệu OKX T7IRGAR3 có còn dùng được không?",
      a: "Có. Ngày 16 tháng 11 năm 2026, liên kết okx.com/join/T7IRGAR3 mở đúng trang mời chính thức của OKX cho mã này, kèm thưởng chào mừng và liên kết đăng ký mang sẵn mã.",
    },
    {
      topic: "referral",
      q: "Tại sao không thấy ô nhập mã giới thiệu trên OKX?",
      a: "Ô “Referral code (optional)” (mã giới thiệu, không bắt buộc) được thu gọn trong biểu mẫu đăng ký, bạn cần bấm để mở ra. OKX cho biết thêm: nếu hoàn toàn không thấy ô này, hãy đăng ký qua liên kết giới thiệu.",
    },
    {
      topic: "referral",
      q: "Dùng mã giới thiệu OKX trên ứng dụng như thế nào?",
      a: "Mở liên kết mời trên điện thoại và nhập địa chỉ email tại đó, sau đó cài ứng dụng OKX qua chính liên kết này và đăng ký bằng cùng email. OKX lưu ý rằng mã có thể không được ghi nhận nếu bạn cài ứng dụng riêng rồi đăng ký trong ứng dụng.",
    },
    {
      topic: "referral",
      q: "Xóa tài khoản OKX rồi đăng ký lại để dùng mã giới thiệu có được không?",
      a: "Không. OKX cho biết xóa tài khoản rồi đăng ký lại không khôi phục quyền nhận ưu đãi và có thể bị coi là vi phạm.",
    },
    {
      topic: "signup",
      q: "Đăng ký OKX có cần số điện thoại không?",
      a: "Có. Khi đăng ký, OKX yêu cầu địa chỉ email trước rồi đến số điện thoại, mỗi thứ đều được xác nhận bằng mã 6 chữ số. Tài khoản phải liên kết cả hai, và mỗi địa chỉ email hay số điện thoại chỉ dùng được cho một tài khoản.",
    },
    {
      topic: "signup",
      q: "Mã xác nhận email của OKX có hiệu lực trong bao lâu?",
      a: "Mã 6 chữ số mà OKX gửi đến địa chỉ email của bạn khi đăng ký có hiệu lực trong 10 phút.",
    },
    {
      topic: "signup",
      q: "Xác minh danh tính OKX mất bao lâu?",
      a: "OKX cho biết việc xét duyệt hoàn tất trong vòng 24 giờ sau khi bạn nộp giấy tờ và chụp selfie hoặc xác minh khuôn mặt.",
    },
    {
      topic: "signup",
      q: "Có dùng OKX mà không cần KYC được không?",
      a: "Không. Bắt buộc xác minh danh tính để dùng tài khoản cá nhân; giao dịch, nạp tiền và rút tiền chỉ mở sau bước này.",
    },
    {
      topic: "bonus",
      q: "Thưởng chào mừng OKX là gì?",
      a: "Người dùng mới đăng ký qua liên kết giới thiệu nhận phần thưởng chào mừng của OKX (Welcome Rewards, còn gọi là New User Bonus). Khi chúng tôi kiểm tra, trang mời hiển thị mức thưởng lên đến 400 EUR trên OKX Europe, còn trang mời toàn cầu hiển thị lên đến 100 USDT. Phần thưởng được mở khóa khi bạn hoàn tất xác minh danh tính, nhiệm vụ nạp tiền và nhiệm vụ giao dịch, và khác nhau tùy quốc gia và chiến dịch.",
    },
    {
      topic: "bonus",
      q: "Thưởng chào mừng OKX có rút được ngay không?",
      a: "Không. Trên OKX Europe, phần thưởng bằng tiền mã hóa bị khóa tối đa 45 ngày – bạn có thể dùng để giao dịch nhưng không rút được. Trên trang toàn cầu, phần thưởng bị khóa ngay khi về tài khoản và không thể giao dịch hay rút trong thời gian khóa.",
    },
    {
      topic: "bonus",
      q: "Khoản nạp và giao dịch nào được tính cho nhiệm vụ chào mừng OKX?",
      a: "Trên OKX Europe, khoản nạp bằng tiền mã hóa hoặc bằng fiat qua SEPA, iDEAL hay Bancontact được tính, chuyển khoản nội bộ thì không. Giao dịch qua Buy, Sell, Convert hoặc sổ lệnh Spot được tính; cặp giao dịch miễn phí và khối lượng X-Perps thì không. Trên trang toàn cầu, mỗi nhiệm vụ giao dịch phải hoàn thành bằng một giao dịch duy nhất.",
    },
    {
      topic: "fees",
      q: "Phí quyền chọn trên OKX là bao nhiêu?",
      a: "Người dùng cấp Regular trả phí maker 0,03% và taker 0,03% cho quyền chọn.",
    },
    {
      topic: "fees",
      q: "Đòn bẩy tối đa trên OKX là bao nhiêu?",
      a: "100x trên trang toàn cầu, với hợp đồng vĩnh cửu như BTC-USDT, ETH-USDT, SOL-USDT và XRP-USDT, và thấp hơn với vị thế lớn. Trên OKX Europe, X-Perps bị giới hạn ở 10x. Đòn bẩy cao làm rủi ro bị thanh lý tăng mạnh.",
    },
    {
      topic: "fees",
      q: "Làm thế nào để có mức phí thấp hơn trên OKX?",
      a: "Cấp phí của OKX dựa trên số dư tài sản hoặc khối lượng giao dịch 30 ngày của bạn. Cấp Regular kết thúc ở mức 100.000 tài sản, hoặc 1.000.000 khối lượng 30 ngày với Spot và 5.000.000 với Futures; vượt mức đó, bạn được áp dụng mức phí VIP.",
    },
    {
      topic: "safety",
      q: "OKX có được cấp phép tại châu Âu không?",
      a: "Có. OKX Europe Limited được Malta Financial Services Authority cấp phép là nhà cung cấp dịch vụ tài sản mã hóa theo MiCA và phục vụ khách hàng tại EEA qua okx.com/en-eu.",
    },
    {
      topic: "safety",
      q: "OKX có dùng được ở Mỹ không?",
      a: "Chỉ ở mức hạn chế: OKX liệt kê một số khu vực pháp lý của Mỹ và toàn bộ vùng lãnh thổ của Mỹ là khu vực bị hạn chế. Canada, Ấn Độ, Nhật Bản và Hồng Kông bị hạn chế hoàn toàn.",
    },
    {
      topic: "safety",
      q: "OKX có công bố bằng chứng dự trữ (Proof of Reserves) không?",
      a: "Có, hằng tháng. Báo cáo thứ 49 bao quát 33,87 tỷ USD trên 21 tài sản, và đợt kiểm chứng ngày 1 tháng 11 năm 2026 cho thấy 108% với BTC, 101% với ETH, 106% với USDT và 100% với USDC.",
    },
  ],
};
