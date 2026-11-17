import type { ExchangeText } from "../../types";

export const mexc: ExchangeText = {
  referral: {
    codeName: "Referral Code",
    whereShort: "Ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) trên biểu mẫu đăng ký, phân biệt chữ hoa và chữ thường",
    apply:
      "Nhập mã vào ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) trên biểu mẫu đăng ký – mã phân biệt chữ hoa và chữ thường – hoặc mở liên kết đăng ký trên trang này, liên kết sẽ tự điền mã và khóa ô lại.",
    whereToEnter:
      "Biểu mẫu đăng ký của MEXC có ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) kèm dòng gợi ý “Enter invitation code (case-sensitive)” (nhập mã, phân biệt chữ hoa và chữ thường), vì vậy bạn cần gõ 4E3xM đúng như cách viết, với chữ E và chữ M viết hoa. Trên website, đánh dấu vào “Enter Referral Code” (nhập mã giới thiệu) để ô hiện ra; trong ứng dụng, chạm vào mũi tên nhỏ để mở rộng ô. Liên kết trên trang này mở trang mời của MEXC với 4E3xM đã điền sẵn và ô đã bị khóa.",
    afterSignupShort: "Có – trong vòng 30 ngày sau khi đăng ký",
    afterSignup:
      "Có. MEXC có chức năng tự liên kết người giới thiệu sau khi đăng ký: chỉ tài khoản đăng ký trong 30 ngày gần nhất mới đủ điều kiện, chức năng áp dụng cho tài khoản chính, và bạn liên kết bằng mã giới thiệu hoặc UID của người giới thiệu. Người giới thiệu phải đăng ký trước bạn. Theo MEXC, mã giới thiệu đã liên kết thì không thể thay đổi hay gỡ bỏ.",
    inviteeReward:
      "MEXC không giảm phí lâu dài cho người được giới thiệu. Mã này mở quyền tham gia sự kiện giới thiệu của MEXC: trang mời hiển thị thêm phần thưởng lên đến 140 USDT cho người đăng ký qua mã giới thiệu, ngoài phần thưởng người dùng mới lên đến 10.000 USDT. Phần thưởng giới thiệu được trả bằng bonus Futures khi bạn hoàn thành nhiệm vụ nạp ròng và nhiệm vụ giao dịch Futures trong vòng 7 ngày sau khi đăng ký.",
    guide: [
      "Trên MEXC, mã giới thiệu có hai tác dụng. Mã ghi nhận ai đã mời bạn – người giới thiệu nhận hoa hồng từ giao dịch Spot và Futures của bạn – và giúp bạn đủ điều kiện tham gia sự kiện giới thiệu mà MEXC tổ chức cho người mới đăng ký. Sự kiện chia theo bậc: 50 USDT khi nạp ròng ít nhất 100 USD và đạt 1.000 USD khối lượng giao dịch Futures, 90 USDT khi đạt 10.000 USD khối lượng Futures và 140 USDT khi đạt 20.000 USD, tất cả trong vòng 7 ngày sau khi đăng ký và sau khi hoàn tất Primary KYC.",
      "Phần thưởng là bonus Futures, voucher phí giao dịch và airdrop vị thế, không phải tiền mặt. MEXC ghi rõ sự kiện có thời hạn và “only open to designated users” (chỉ dành cho người dùng được chỉ định), còn mục FAQ của sự kiện cho biết bonus giới thiệu không cộng gộp được với sự kiện 10.000 USDT hay bonus trong Rewards Hub – dù trang mời quảng bá cả hai cùng lúc. Hãy coi số tiền hiển thị trong tài khoản của bạn sau khi đăng ký là con số áp dụng.",
      "Vì mã phân biệt chữ hoa và chữ thường, dùng liên kết là cách an toàn nhất để áp dụng mã. Nếu đã đăng ký mà chưa nhập mã, bạn vẫn có 30 ngày để tự liên kết mã giới thiệu.",
    ],
  },
  signup: {
    methods: ["địa chỉ email", "số điện thoại", "Google", "Apple", "Telegram", "MetaMask"],
    steps: [
      {
        title: "Mở trang đăng ký MEXC",
        text: "Dùng nút đăng ký trên trang này. MEXC mở trang “Your Friend Invites You to Join MEXC” (bạn bè mời bạn tham gia MEXC) với mã giới thiệu 4E3xM đã điền sẵn và khóa lại.",
      },
      {
        title: "Nhập email hoặc số điện thoại và mật khẩu",
        text: "Bạn cũng có thể tiếp tục bằng Google, Apple, Telegram hoặc MetaMask. Mật khẩu cần ít nhất 10 ký tự, gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.",
      },
      {
        title: "Kiểm tra mã giới thiệu",
        text: "Ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) phải hiển thị 4E3xM. Nếu tự gõ mã, hãy chú ý chữ hoa – mã phân biệt chữ hoa và chữ thường.",
      },
      {
        title: "Giải câu đố thanh trượt",
        text: "MEXC hiển thị câu đố kéo thanh trượt để kiểm tra bảo mật.",
      },
      {
        title: "Nhập mã 6 chữ số",
        text: "Nhập mã xác minh 6 chữ số MEXC gửi cho bạn rồi chọn “Confirm” (Xác nhận).",
      },
      {
        title: "Hoàn tất KYC",
        text: "Hoàn tất Primary KYC để mở khóa phần thưởng và tránh bị hạn chế khi nạp tiền, rút tiền và giao dịch.",
      },
    ],
    kycShort: "Cần để nạp tiền, rút tiền và giao dịch",
    kyc: "Trên thực tế là có. MEXC cho biết nếu không hoàn tất xác minh danh tính (KYC), bạn có thể bị ảnh hưởng khi dùng các dịch vụ như nạp tiền, rút tiền và giao dịch, và phần thưởng của sàn yêu cầu ít nhất Primary KYC. Primary KYC cho phép rút tiền mã hóa 80 BTC mỗi ngày; Advanced KYC nâng mức này lên 200 BTC mỗi ngày và thêm hạn mức fiat 20.000 USD mỗi ngày. Spot, Futures và sự kiện đều mở ở cả hai cấp.",
    documents: "MEXC chấp nhận thẻ căn cước, hộ chiếu, giấy phép lái xe hoặc thẻ cư trú.",
    minAge: "Tuổi thành niên theo quy định tại quốc gia của bạn – Thỏa thuận người dùng của MEXC yêu cầu bạn đủ tuổi để giao kết hợp đồng có hiệu lực ràng buộc và không nêu con số cụ thể",
  },
  welcomeTasks: [
    { task: "Đăng ký", reward: "Voucher 10 USDT" },
    { task: "Đăng nhập lần đầu trên ứng dụng", reward: "Voucher 10 USDT" },
    { task: "Hoàn tất Primary KYC trong vòng 7 ngày", reward: "Airdrop vị thế BTCUSDT trị giá 200 USD" },
    { task: "Giao dịch Futures tích lũy (bậc cao nhất: ít nhất 1.000.000 USDT)", reward: "Bonus Futures lên đến 7.620 USDT" },
    { task: "Sự kiện giới thiệu: nạp ròng ít nhất 100 USD và đạt 1.000 USD khối lượng Futures trong vòng 7 ngày", reward: "50 USDT dưới dạng bonus Futures" },
    { task: "Sự kiện giới thiệu: khối lượng Futures ít nhất 10.000 USD trong vòng 7 ngày", reward: "90 USDT dưới dạng bonus Futures" },
    { task: "Sự kiện giới thiệu: khối lượng Futures ít nhất 20.000 USD trong vòng 7 ngày", reward: "140 USDT dưới dạng bonus Futures" },
  ],
  tokenDiscount:
    "Trả phí bằng MX được giảm 20% phí Spot và Futures; với Futures, MX phải nằm trong ví Futures. Mức giảm 50% trước đây khi nắm giữ từ 500 MX trở lên đã bị tạm dừng từ ngày 9 tháng 2 năm 2026.",
  extraFeeMarkets: ["Futures Coin-M (BTCUSD, ETHUSD)"],
  sourceLabels: [
    "MEXC: Quy trình đăng ký tài khoản (web)",
    "MEXC: Quy trình đăng ký tài khoản (ứng dụng)",
    "MEXC: Hướng dẫn chương trình giới thiệu",
    "MEXC: Hướng dẫn tự liên kết người giới thiệu",
    "MEXC: Sự kiện giới thiệu và quy tắc",
    "MEXC: Rewards Hub (phần thưởng người dùng mới)",
    "MEXC: Thông báo về phần thưởng chào mừng (thời hạn bonus)",
    "MEXC: Biểu phí",
    "MEXC: Cách dùng MX để được giảm phí giao dịch",
    "MEXC: Ra mắt đòn bẩy 500x cho Futures",
    "MEXC: Câu hỏi thường gặp về KYC",
    "MEXC: Câu hỏi phổ biến về xác minh KYC",
    "MEXC: Thỏa thuận người dùng (khu vực pháp lý bị cấm)",
    "MEXC Learn: Quốc gia bị hạn chế",
    "MEXC: Về MEXC",
    "MEXC: Tại sao chọn MEXC (cặp giao dịch và hợp đồng)",
    "MEXC: Bằng chứng dự trữ",
  ],
  feeDiscount: "",
  referralCovers: ["Spot", "Futures"],
  bonusHeadline: "Phần thưởng người dùng mới lên đến 10.000 USDT",
  benefits: [
    "Phần thưởng người dùng mới lên đến 10.000 USDT trong Rewards Hub – voucher, airdrop vị thế và bonus Futures",
    "Trang mời hiển thị thêm phần thưởng lên đến 140 USDT dưới dạng bonus Futures cho người đăng ký qua mã giới thiệu",
    "Phí maker 0% cho Spot và hầu hết hợp đồng Futures",
    "Vẫn có thể liên kết mã trong vòng 30 ngày sau khi đăng ký",
  ],
  benefitNote:
    "Mọi phần thưởng đều gắn với nhiệm vụ và yêu cầu ít nhất Primary KYC. Bonus không rút được – chỉ lợi nhuận tạo ra từ bonus mới rút được – và nếu chuyển tiền ra khỏi tài khoản Futures trước khi dùng hết bonus, bạn sẽ mất toàn bộ bonus. Bonus Futures dùng cho hợp đồng USDT-M và được công bố với thời hạn 15 ngày. Sự kiện giới thiệu có thời hạn và chỉ dành cho người dùng được chỉ định, mục FAQ của sự kiện cho biết bonus này không cộng gộp được với sự kiện 10.000 USDT, và phần thưởng phải qua bước đánh giá rủi ro tối đa 7 ngày. Người dùng ở khu vực cấm giao dịch phái sinh có thể không đủ điều kiện.",
  headquarters: "MEXC (Comoros) Ltd, đăng ký tại Liên bang Comoros",
  regulation: "Trang web của chính MEXC không nêu giấy phép nào; MEXC cho biết sàn không có giấy phép hạng nhất và không có giấy phép MiCA",
  users: "Hơn 40 triệu người dùng (theo MEXC)",
  assets: "1.384 cặp Spot và 1.152 hợp đồng Futures (theo MEXC)",
  maxLeverage: "Tối đa 500x (hợp đồng Futures BTCUSDT và ETHUSDT)",
  feeNote:
    "Mức phí Futures hiển thị là mức MEXC áp dụng cho BTCUSDT và ETHUSDT; trên toàn bộ hợp đồng, trang biểu phí của MEXC nêu khoảng 0% đến 0,04% cho maker và 0% đến 0,1% cho taker, và một số cặp giao dịch không mất phí. MEXC lưu ý mức phí maker có thể thay đổi theo sự kiện của sàn hoặc theo khu vực của bạn.",
  products: ["Futures USDT-M & Coin-M", "Spot", "Copy trading", "Launchpad", "Earn"],
  tagline: "Miễn phí maker và đòn bẩy tối đa 500x",
  quickAnswer:
    "Mã giới thiệu MEXC là 4E3xM – mã phân biệt chữ hoa và chữ thường. Nhập mã vào ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) khi đăng ký, hoặc dùng nút trên trang này để mã tự điền và khóa lại. Nếu quên nhập mã, MEXC cho phép bạn tự liên kết người giới thiệu trong vòng 30 ngày sau khi đăng ký. Người dùng mới có thể mở khóa phần thưởng lên đến 10.000 USDT, và trang mời của MEXC hiển thị thêm bonus lên đến 140 USDT cho người đăng ký qua mã giới thiệu.",
  about: [
    "MEXC hoạt động từ năm 2018 và cho biết đang phục vụ hơn 40 triệu người dùng tại hơn 170 quốc gia và vùng lãnh thổ. Sàn cạnh tranh bằng giá và độ phủ thị trường: người dùng thông thường không trả phí maker với Spot và hầu hết hợp đồng Futures, và MEXC niêm yết 1.384 cặp Spot cùng 1.152 hợp đồng Futures.",
    "Nền tảng Futures cung cấp hợp đồng ký quỹ bằng USDT và ký quỹ bằng coin, với đòn bẩy tối đa 500x trên BTCUSDT và ETHUSDT. Mức tối đa này không áp dụng ở mọi nơi – MEXC loại trừ Úc, Áo, Bỉ, Canada, Pháp, Hồng Kông, Ý, Nga, Vương quốc Anh và Yemen – và giao dịch sao chép (copy trading) không hỗ trợ 250x hay 500x. Sàn cũng có copy trading, Launchpad và sản phẩm Earn.",
    "Pháp nhân ký hợp đồng với người dùng là MEXC (Comoros) Ltd, đăng ký tại Liên bang Comoros. MEXC không nêu giấy phép nào trên trang web của chính mình và tự xác nhận không có giấy phép hạng nhất cũng như giấy phép MiCA; hướng dẫn của chính MEXC ghi nhận sàn có tên trong danh sách tạm thời của ESMA về các pháp nhân không tuân thủ. MEXC công bố bằng chứng dự trữ (Proof of Reserves) – snapshot ngày 9 tháng 11 năm 2026 cho thấy 122,42% với USDT, 109,84% với USDC, 317,61% với BTC và 112,41% với ETH – đồng thời duy trì Guardian Fund trị giá 100 triệu USD và quỹ bảo hiểm Futures.",
  ],
  highlights: [
    { title: "Phí maker 0%", text: "Không mất phí maker với Spot và hầu hết hợp đồng Futures." },
    { title: "Liên kết trong 30 ngày", text: "Quên nhập mã? MEXC cho phép bạn liên kết người giới thiệu trong 30 ngày sau khi đăng ký." },
    { title: "Dự trữ trên 100%", text: "USDT 122%, BTC 318%, ETH 112% theo snapshot ngày 9 tháng 11 năm 2026." },
  ],
  pros: [
    "Phí giao dịch thuộc nhóm thấp nhất trong ngành: maker 0%, taker 0,02% trên Futures BTCUSDT",
    "Có thể liên kết mã giới thiệu đến 30 ngày sau khi đăng ký",
    "1.384 cặp Spot và 1.152 hợp đồng Futures",
    "Bằng chứng dự trữ trên 100% và Guardian Fund trị giá 100 triệu USD",
  ],
  cons: [
    "Không có giấy phép hạng nhất và không có giấy phép MiCA – chính MEXC xác nhận",
    "Không phục vụ người dùng tại Mỹ, Vương quốc Anh, Canada, Pháp, Hà Lan, Singapore và Hồng Kông",
    "Bonus không rút được và bị hủy nếu bạn chuyển tiền ra sớm",
    "Đòn bẩy 500x cực kỳ rủi ro",
  ],
  bestFor: [
    "Nhà giao dịch Futures tần suất cao, chú trọng chi phí",
    "Nhà giao dịch săn token mới niêm yết",
    "Người dùng có kinh nghiệm, quen với sàn offshore",
  ],
  signupTip:
    "Hãy hoàn tất Primary KYC trong vòng 7 ngày sau khi đăng ký – bước này mở khóa airdrop vị thế BTCUSDT trị giá 200 USD – và đừng chuyển tiền ra khỏi tài khoản Futures khi bonus Futures vẫn đang được dùng, nếu không bonus sẽ bị hủy.",
  safety:
    "MEXC công bố bằng chứng dự trữ – 122,42% với USDT, 109,84% với USDC, 317,61% với BTC và 112,41% với ETH theo snapshot ngày 9 tháng 11 năm 2026 – và duy trì Guardian Fund trị giá 100 triệu USD cùng quỹ bảo hiểm Futures. Chính MEXC xác nhận sàn không có giấy phép hạng nhất và không có giấy phép MiCA, vì vậy hãy bảo mật tài khoản thật chặt và đừng cất giữ khoản tiết kiệm dài hạn trên sàn. Với token rất mới, hãy kiểm tra thanh khoản và thông số hợp đồng trước khi giao dịch bằng đòn bẩy.",
  restricted:
    "Thỏa thuận người dùng của MEXC (cập nhật lần cuối ngày 13 tháng 10 năm 2026) cấm người dùng đến từ Triều Tiên, Cuba, Sudan, Iran, Trung Quốc đại lục, Singapore, Malaysia, Mỹ, Vương quốc Anh, Hồng Kông, Kazakhstan, Nga, các vùng của Ukraine do Nga kiểm soát, Belarus, Canada, Pháp và Hà Lan, cùng các quốc gia bị trừng phạt và quốc gia nằm trong danh sách đen của FATF.",
  faqs: [
    {
      topic: "referral",
      q: "Mã giới thiệu MEXC 4E3xM có còn dùng được không?",
      a: "Có. Ngày 16 tháng 11 năm 2026, liên kết trên trang này mở trang mời của MEXC với inviteCode=4E3xM trên thanh địa chỉ, còn ô “Referral Code (Optional)” (mã giới thiệu, không bắt buộc) đã điền sẵn 4E3xM và bị khóa.",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu MEXC có phân biệt chữ hoa chữ thường không?",
      a: "Có. Ô đăng ký của MEXC có dòng gợi ý “Enter invitation code (case-sensitive)” (nhập mã, phân biệt chữ hoa và chữ thường). Mã là 4E3xM – chữ số 4, chữ E viết hoa, chữ số 3, chữ x viết thường, chữ M viết hoa.",
    },
    {
      topic: "referral",
      q: "Làm sao liên kết người giới thiệu trên MEXC sau khi đăng ký?",
      a: "Dùng chức năng tự liên kết người giới thiệu của MEXC trong vòng 30 ngày sau khi đăng ký. Chức năng này dành cho tài khoản chính, bạn nhập mã giới thiệu hoặc UID của người giới thiệu, và người giới thiệu phải đăng ký trước bạn. Sau khi liên kết, bạn không thể thay đổi hay gỡ bỏ người giới thiệu.",
    },
    {
      topic: "referral",
      q: "Mã giới thiệu MEXC có được giảm phí giao dịch không?",
      a: "MEXC không công bố mức giảm phí lâu dài nào cho người được giới thiệu. Lợi ích nằm ở sự kiện giới thiệu với phần thưởng lên đến 140 USDT dưới dạng bonus Futures, cộng thêm phần thưởng chung cho người dùng mới.",
    },
    {
      topic: "signup",
      q: "Mật khẩu MEXC cần đáp ứng yêu cầu gì?",
      a: "Ít nhất 10 ký tự, gồm một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt.",
    },
    {
      topic: "signup",
      q: "Có đăng ký MEXC bằng Google, Apple, Telegram hoặc MetaMask được không?",
      a: "Có. Trang đăng ký của MEXC có sẵn Google và Apple, còn Telegram và MetaMask nằm trong mục “More Options” (tùy chọn khác), bên cạnh email và số điện thoại.",
    },
    {
      topic: "signup",
      q: "KYC MEXC có những cấp nào và hạn mức bao nhiêu?",
      a: "Primary KYC cho phép rút tiền mã hóa 80 BTC mỗi ngày và giao dịch P2P. Advanced KYC nâng hạn mức lên 200 BTC mỗi ngày và cho phép giao dịch fiat tối đa 20.000 USD mỗi ngày. Spot, Futures và sự kiện đều mở ở cả hai cấp.",
    },
    {
      topic: "signup",
      q: "Dùng MEXC không cần KYC được không?",
      a: "Được, nhưng có hạn chế. MEXC cho biết nếu không hoàn tất xác minh danh tính (KYC), bạn có thể bị ảnh hưởng khi dùng các dịch vụ như nạp tiền, rút tiền và giao dịch, còn phần thưởng người dùng mới và phần thưởng giới thiệu yêu cầu ít nhất Primary KYC.",
    },
    {
      topic: "bonus",
      q: "Thưởng chào mừng MEXC là gì?",
      a: "MEXC quảng cáo phần thưởng người dùng mới lên đến 10.000 USDT. Ví dụ trong Rewards Hub: voucher 10 USDT khi đăng ký, voucher 10 USDT cho lần đăng nhập ứng dụng đầu tiên, airdrop vị thế BTCUSDT trị giá 200 USD khi hoàn tất Primary KYC trong vòng 7 ngày và bonus Futures lên đến 7.620 USDT cho giao dịch tích lũy, với bậc cao nhất ở mức 1.000.000 USDT khối lượng giao dịch.",
    },
    {
      topic: "bonus",
      q: "Thưởng giới thiệu MEXC là bao nhiêu?",
      a: "Trong sự kiện giới thiệu của MEXC, người được giới thiệu nhận 50 USDT khi nạp ròng ít nhất 100 USD cộng 1.000 USD khối lượng Futures, 90 USDT khi đạt 10.000 USD khối lượng Futures và 140 USDT khi đạt 20.000 USD, tất cả trong vòng 7 ngày sau khi đăng ký. Thưởng được trả dưới dạng bonus Futures, voucher phí giao dịch và airdrop vị thế. Sự kiện có thời hạn và chỉ dành cho người dùng được chỉ định.",
    },
    {
      topic: "bonus",
      q: "Bonus MEXC có rút được không?",
      a: "Không. MEXC cho biết bonus không thể rút, nhưng lợi nhuận từ giao dịch dùng bonus thì rút được. Nếu chuyển bất kỳ tài sản nào ra khỏi tài khoản Futures trước khi dùng hết bonus, bạn sẽ mất toàn bộ bonus.",
    },
    {
      topic: "bonus",
      q: "Bonus Futures MEXC có hạn sử dụng bao lâu?",
      a: "MEXC công bố thời hạn 15 ngày cho bonus Futures và cho voucher. Bonus Futures chỉ dùng được trên hợp đồng USDT-M.",
    },
    {
      topic: "fees",
      q: "Phí Futures MEXC là bao nhiêu?",
      a: "Trên BTCUSDT và ETHUSDT, người dùng thông thường trả phí maker 0% và taker 0,02%. Xét trên toàn bộ hợp đồng, trang biểu phí của MEXC nêu khoảng 0% đến 0,04% cho maker và 0% đến 0,1% cho taker, và một số cặp giao dịch được miễn phí.",
    },
    {
      topic: "fees",
      q: "Giảm phí bằng MX trên MEXC là bao nhiêu?",
      a: "Giảm 20% phí Spot và Futures khi bạn trả phí bằng MX; với Futures, MX phải nằm trong ví Futures. Mức giảm 50% trước đây khi nắm giữ ít nhất 500 MX đã bị tạm dừng từ ngày 9 tháng 2 năm 2026.",
    },
    {
      topic: "fees",
      q: "MEXC có thật sự cho đòn bẩy 500x không?",
      a: "Có, trên Futures BTCUSDT và ETHUSDT. Mức này không áp dụng tại Úc, Áo, Bỉ, Canada, Pháp, Hồng Kông, Ý, Nga, Vương quốc Anh và Yemen, và copy trading không hỗ trợ mức này. Ở mức 500x, giá đi ngược 0,2% là có thể xóa sạch vị thế.",
    },
    {
      topic: "safety",
      q: "MEXC có được cấp phép không?",
      a: "Trang web của chính MEXC không nêu giấy phép nào, và MEXC cho biết sàn không có giấy phép hạng nhất cũng như giấy phép MiCA. Pháp nhân ký hợp đồng với người dùng là MEXC (Comoros) Ltd, đăng ký tại Liên bang Comoros.",
    },
    {
      topic: "safety",
      q: "MEXC có dùng được ở Mỹ hay Vương quốc Anh không?",
      a: "Không. Cả Mỹ và Vương quốc Anh đều là khu vực pháp lý bị cấm trong Thỏa thuận người dùng của MEXC, cũng như Canada, Pháp, Hà Lan, Singapore và Hồng Kông.",
    },
    {
      topic: "safety",
      q: "MEXC có công bố bằng chứng dự trữ không?",
      a: "Có. Snapshot ngày 9 tháng 11 năm 2026 cho thấy tỷ lệ dự trữ 122,42% với USDT, 109,84% với USDC, 317,61% với BTC và 112,41% với ETH. MEXC cũng duy trì Guardian Fund trị giá 100 triệu USD.",
    },
  ],
};
