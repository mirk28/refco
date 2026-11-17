import Link from "next/link";
import { legal, site } from "@/config/site";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Vietnamese. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: "sàn giao dịch" / "sàn", "mã giới thiệu", "phí", the reader is "bạn", the site is "chúng tôi". The
 * operator of the website is "người vận hành"; a controller under the GDPR is "bên kiểm soát dữ liệu", a processor
 * "bên xử lý dữ liệu". The regulation is "GDPR (Quy định chung về bảo vệ dữ liệu của EU)", articles are cited as
 * "Điều 6(1)(f) GDPR". Page names as in the footer: "Thông tin pháp lý", "Chính sách bảo mật", "Công bố liên kết
 * tiếp thị", "Giới thiệu & phương pháp". Our own buttons and page names are quoted in straight quotes. Names,
 * addresses and email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>Lưu ý:</strong> Trang này là bản tiếng Việt chúng tôi cung cấp để bạn tiện tham khảo. Văn bản có giá trị ràng buộc là{" "}
    <a href={englishHref} hrefLang="en">
      bản tiếng Anh
    </a>
    .
  </p>
);

export const vi: PageTexts = {
  layout: {
    aside: "Trên trang này và các trang khác",
    onThisPage: "Trên trang này",
    referralCodes: "Mã giới thiệu",
    compare: "So sánh sàn giao dịch",
    alternativesOf: (name) => <>Sàn thay thế {name}</>,
    allComparisons: "Tất cả so sánh sàn giao dịch →",
  },

  home: "Trang chủ",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `Giới thiệu & phương pháp của ${site.name}`,
    description: `Ai vận hành ${site.domain}, dữ liệu về phí, mã giới thiệu và ưu đãi lấy từ đâu, và chúng tôi đánh giá sàn giao dịch tiền mã hóa theo phương pháp nào.`,
    ldName: `Giới thiệu về ${site.name}`,
    crumb: "Giới thiệu",
    intro: () => (
      <>
        <span className="eyebrow">Giới thiệu</span>
        <h1>Giới thiệu về {site.name}</h1>
        <p className="lead">
          {site.name} ({site.domain}) giúp nhà giao dịch đăng ký đúng sàn giao dịch phái sinh tiền mã hóa – với mã giới thiệu thực sự hoạt động và những
          thông tin cần biết trước khi nạp tiền.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "Chúng tôi làm gì",
        heading: "Chúng tôi làm gì",
        body: () => (
          <p>
            Chúng tôi tập trung vào những sàn lớn nhất trong bảng xếp hạng phái sinh của CoinMarketCap và đăng một trang cho mỗi sàn theo cùng một cấu
            trúc: câu trả lời nhanh, thông tin chính, phí, mô tả trung thực, ưu điểm và nhược điểm, lưu ý về an toàn, phạm vi cung cấp dịch vụ theo quốc gia
            và phần câu hỏi thường gặp (FAQ). Nhờ vậy, bạn dễ dàng so sánh các sàn với nhau.
          </p>
        ),
      }),
      methodology: section({
        nav: "Phương pháp của chúng tôi",
        heading: "Phương pháp của chúng tôi",
        body: (c) => (
          <ul>
            <li>
              <strong>Dữ liệu thị trường</strong> – hợp đồng mở (Open Interest), khối lượng 24 giờ, số lượng thị trường – lấy từ bảng xếp hạng phái sinh
              của CoinMarketCap và có ghi ngày trên từng trang.
            </li>
            <li>
              <strong>Mã giới thiệu, đăng ký và xác minh</strong> – nhập mã ở đâu, có thể thêm mã sau khi đăng ký hay không, các bước đăng ký và quy định
              KYC – chúng tôi đọc trực tiếp trên trang web và trung tâm trợ giúp của chính từng sàn. Mỗi trang về một sàn đều liệt kê những trang chính thức
              đã dùng để đối chiếu.
            </li>
            <li>
              <strong>Phí và đòn bẩy</strong> lấy từ biểu phí chính thức của từng sàn, ở mức phí tiêu chuẩn (không VIP).
            </li>
            <li>
              <strong>Ưu đãi chào mừng</strong> được ghi đúng như sàn công bố, kèm điều kiện áp dụng. Ưu đãi khác nhau tùy quốc gia và thay đổi thường
              xuyên.
            </li>
            <li>
              <strong>Giấy phép và sự cố</strong> lấy từ trang giấy phép và thông báo chính thức của chính sàn.
            </li>
            <li>
              <strong>So sánh sàn giao dịch</strong> – các trang sàn thay thế và các trang <Link href={c.links.compare}>so sánh trực tiếp</Link> – dùng cùng
              số liệu với các trang về từng sàn. Một sản phẩm chỉ được ghi là có khi chính sàn giới thiệu sản phẩm đó trên trang web của mình, còn phạm vi
              cung cấp dịch vụ theo quốc gia lấy từ điều khoản, danh sách quốc gia bị hạn chế và các trang khu vực của từng sàn. Sàn nào được đánh dấu
              &quot;Ưu thế&quot; ở một tiêu chí là do chính các số liệu đó cho thấy, không phải do chúng tôi xếp hạng.
            </li>
            <li>
              <strong>Chu kỳ kiểm tra:</strong> dữ liệu được kiểm tra lại định kỳ; lần kiểm tra gần nhất là ngày {c.reviewed}.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "Tính độc lập",
        heading: "Tính độc lập",
        body: (c) => (
          <p>
            Chúng tôi nhận hoa hồng giới thiệu từ các sàn có trên trang – chi tiết trong trang{" "}
            <Link href={c.links.affiliateDisclosure}>Công bố liên kết tiếp thị</Link>. Hoa hồng không bao giờ làm thay đổi thông tin chúng tôi đăng, và
            chúng tôi luôn nêu điểm yếu cũng như các hạn chế của từng sàn.
          </p>
        ),
      }),
      operator: section({
        nav: `Ai vận hành ${site.name}`,
        heading: <>Ai vận hành {site.name}</>,
        body: (c) => (
          <p>
            {site.name} là trang web do một cá nhân vận hành, không phải công ty. Tên người vận hành có trong trang{" "}
            <Link href={c.links.imprint}>Thông tin pháp lý</Link>. {site.name} không phải sàn giao dịch và không bao giờ nhận hay giữ tiền của bạn – tài
            khoản được mở trực tiếp với sàn.
          </p>
        ),
      }),
      contact: section({
        nav: "Liên hệ",
        heading: "Liên hệ",
        body: () => (
          <p>
            Bạn thấy thông tin đã cũ? Gửi email cho chúng tôi tại <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> – chúng tôi sửa lỗi
            nhanh chóng.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "Công bố liên kết tiếp thị",
    description: `Cách ${site.name} kiếm tiền, liên kết nào trên trang là quảng cáo và vì sao điều đó không ảnh hưởng đến thông tin chúng tôi đăng về sàn giao dịch tiền mã hóa.`,
    intro: (c) => (
      <>
        <h1>Công bố liên kết tiếp thị</h1>
        <p className="lead">Minh bạch là nền tảng của sự tin cậy. Dưới đây, chúng tôi nói rõ {site.name} có nguồn thu từ đâu.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "Cách chúng tôi kiếm tiền",
        heading: "Cách chúng tôi kiếm tiền",
        body: () => (
          <p>
            {site.name} tham gia chương trình giới thiệu và chương trình tiếp thị liên kết của các sàn có mặt trên trang web này. Khi bạn mở tài khoản qua
            một liên kết của chúng tôi, sàn có thể trả hoa hồng cho người vận hành trang web này – thường là một phần phí giao dịch phát sinh từ tài khoản
            của bạn. Bạn không bao giờ phải trả thêm vì điều này: đăng ký qua liên kết giới thiệu không làm phí cao hơn, và thường còn giúp bạn được giảm phí
            hoặc nhận phần thưởng chào mừng. Hoa hồng do sàn trả, không phải bạn.
          </p>
        ),
      }),
      advertising: section({
        nav: "Liên kết nào là quảng cáo",
        heading: "Liên kết nào là quảng cáo",
        body: () => (
          <p>
            Mọi liên kết và nút dẫn đến một sàn – ví dụ &quot;Đăng ký …&quot;, &quot;Đăng ký&quot; hoặc &quot;Nhận ưu đãi&quot; – và mọi mã giới thiệu
            hiển thị trên trang web này đều là quảng cáo: truyền thông thương mại cho sàn đó, và sàn có thể trả tiền cho chúng tôi vì nội dung này. Các liên
            kết này được gắn <code>rel=&quot;sponsored&quot;</code> theo hướng dẫn của các công cụ tìm kiếm, và mọi trang đều có liên kết đến trang công bố
            này.
          </p>
        ),
      }),
      independence: section({
        nav: "Những gì không bị ảnh hưởng",
        heading: "Những gì không bị ảnh hưởng",
        body: () => (
          <ul>
            <li>
              Phí, đòn bẩy, giấy phép, quy định xác minh và hạn chế theo quốc gia lấy từ trang của chính các sàn, dữ liệu thị trường lấy từ CoinMarketCap –
              không lấy từ thỏa thuận tiếp thị. Mỗi trang về một sàn đều liệt kê nguồn.
            </li>
            <li>Với mọi sàn, chúng tôi đều đăng điểm yếu, sự cố bảo mật và hạn chế theo khu vực.</li>
            <li>
              Thứ tự các sàn theo vị trí của sàn trong bảng xếp hạng phái sinh của CoinMarketCap. Không sàn nào có thể trả tiền để được xếp cao hơn.
            </li>
            <li>
              Sàn nào được đánh dấu &quot;Ưu thế&quot; trong một so sánh là do số liệu đã công bố quyết định. Dấu này không thể mua bằng tiền.
            </li>
          </ul>
        ),
      }),
      who: section({
        nav: "Bạn làm việc với ai",
        heading: "Bạn làm việc với ai",
        body: () => (
          <p>
            {site.name} là trang web thông tin, không phải sàn giao dịch hay nhà môi giới. {site.name} không bao giờ nhận hay giữ tiền hoặc tài sản mã
            hóa của bạn. Nếu bạn đăng ký, bạn chỉ ký hợp đồng với sàn, theo điều khoản của sàn. Bạn có được dùng một sàn hay không phụ thuộc vào quốc
            gia bạn sinh sống – hãy kiểm tra điều khoản của sàn trước khi đăng ký.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Không phải tư vấn tài chính",
        heading: "Không phải tư vấn tài chính",
        body: () => (
          <p>
            Không nội dung nào trên trang web này là khuyến nghị mua, bán hay giao dịch bất kỳ tài sản nào, và nội dung trên trang không thay thế lời tư vấn
            có tính đến hoàn cảnh riêng của bạn. Phái sinh tiền mã hóa là sản phẩm rủi ro cao: đòn bẩy nhân cả lãi lẫn lỗ, và bạn có thể mất toàn bộ số tiền
            đã nạp.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Người vận hành trang web này có tên trong trang <Link href={c.links.imprint}>Thông tin pháp lý</Link>; cách xử lý dữ liệu cá nhân được trình bày
        trong trang <Link href={c.links.privacy}>Chính sách bảo mật</Link>.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "Thông tin pháp lý",
    description: `Thông tin pháp lý của ${site.domain}: người vận hành, thông tin liên hệ, trang web là gì và không là gì, trách nhiệm pháp lý và luật áp dụng.`,
    intro: (c) => (
      <>
        <h1>Thông tin pháp lý</h1>
        <p className="muted">
          Thông tin về nhà cung cấp dịch vụ theo Điều 5 Chỉ thị 2000/31/EC (Chỉ thị Thương mại điện tử) và Điều 5 Luật Ba Lan ngày 18 tháng 7 năm 2002 về
          cung cấp dịch vụ bằng phương tiện điện tử.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "Người vận hành",
        heading: "Người vận hành trang web này",
        body: () => (
          <>
            <p>
              {legal.operator}
              <br />
              {legal.street}
              <br />
              {legal.zipCity}
              <br />
              {legal.country}
            </p>
            <p>
              &quot;{site.name}&quot; và &quot;chúng tôi&quot; trên trang web này đều chỉ người vận hành nêu trên. {site.name} là tên của trang web, không
              phải tên của một công ty.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "Người đại diện",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "Liên hệ",
        heading: "Liên hệ",
        body: () => (
          <p>
            Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                Điện thoại: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "Hình thức pháp lý",
        heading: "Hình thức pháp lý",
        body: () => <p>Trang web này do một cá nhân vận hành. Người vận hành không có tên trong sổ đăng ký thương mại.</p>,
      }),
      register: section({
        heading: "Số đăng ký thương mại và mã số VAT",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "Người chịu trách nhiệm nội dung",
        heading: "Người chịu trách nhiệm nội dung",
        body: () => <p>{legal.representative || legal.operator}, địa chỉ như trên.</p>,
      }),
      scope: section({
        nav: "Trang web này là gì",
        heading: "Trang web này là gì – và không là gì",
        body: () => (
          <p>
            {site.name} là trang web cung cấp thông tin và so sánh về các sàn giao dịch tiền mã hóa và chương trình giới thiệu của các sàn. {site.name}{" "}
            không phải sàn giao dịch, nhà môi giới hay nhà cung cấp dịch vụ tài sản mã hóa: trang không nhận, không giữ và không chuyển tiền hay tài sản mã
            hóa, không thực hiện lệnh giao dịch và không ký bất kỳ hợp đồng nào với khách truy cập. Nếu bạn mở tài khoản, bạn mở trực tiếp với sàn, theo
            điều khoản của chính sàn và qua quy trình xác minh của chính sàn.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "Không phải tư vấn, cảnh báo rủi ro",
        heading: "Không phải tư vấn, cảnh báo rủi ro",
        body: () => (
          <p>
            Không nội dung nào trên trang web này là tư vấn đầu tư, tài chính, pháp lý hay thuế, là khuyến nghị cá nhân, hoặc là lời chào bán hay lời mời
            mua, bán bất kỳ tài sản mã hóa hay công cụ tài chính nào. Các bài so sánh nêu những thông tin do các sàn công bố và không tính đến hoàn cảnh
            riêng của bạn. Giao dịch tài sản mã hóa, nhất là khi dùng đòn bẩy, có rủi ro thua lỗ cao – có thể mất toàn bộ số tiền đã nạp. Hãy tự quyết định
            và, nếu còn băn khoăn, hãy hỏi ý kiến một chuyên gia tư vấn được cấp phép.
          </p>
        ),
      }),
      availability: section({
        nav: "Phạm vi cung cấp dịch vụ",
        heading: "Phạm vi cung cấp dịch vụ và quốc gia bị hạn chế",
        body: () => (
          <p>
            Các sàn không cung cấp dịch vụ ở mọi quốc gia, và một số sản phẩm bị hạn chế với người cư trú tại những quốc gia nhất định. Trang web này không
            hướng đến những người mà tại nơi họ sinh sống, việc dùng sàn liên quan hoặc việc nhận thông tin về sàn đó bị cấm. Trước khi đăng ký, hãy kiểm
            tra điều khoản của sàn và quy định của quốc gia bạn cư trú. Trang web chỉ dành cho người trưởng thành.
          </p>
        ),
      }),
      liability: section({
        nav: "Trách nhiệm pháp lý",
        heading: "Trách nhiệm đối với nội dung",
        body: () => (
          <p>
            Nội dung trên trang web này được soạn thảo cẩn thận và kiểm tra thường xuyên; mỗi trang về một sàn đều ghi ngày kiểm tra gần nhất và các nguồn
            đã dùng để đối chiếu. Tuy nhiên, phí, giới hạn đòn bẩy, phần thưởng, quy định xác minh và phạm vi cung cấp dịch vụ đều do các sàn quy định và
            có thể thay đổi bất cứ lúc nào, vì vậy chúng tôi không thể bảo đảm thông tin luôn chính xác, đầy đủ và cập nhật. Điều khoản mà sàn hiển thị vào
            thời điểm bạn đăng ký mới là điều khoản được áp dụng. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm đối với thiệt hại phát
            sinh từ việc sử dụng những thông tin này; trách nhiệm đối với lỗi cố ý và sơ suất nghiêm trọng, cũng như mọi trách nhiệm mà pháp luật không cho
            phép loại trừ, vẫn giữ nguyên.
          </p>
        ),
      }),
      links: section({
        nav: "Liên kết bên ngoài",
        heading: "Liên kết đến trang web khác",
        body: (c) => (
          <p>
            Trang web này có liên kết đến các trang web bên ngoài mà chúng tôi không kiểm soát. Nhà cung cấp của từng trang tự chịu trách nhiệm hoàn toàn
            về nội dung trang đó. Một số liên kết ra ngoài là liên kết tiếp thị (liên kết giới thiệu), qua đó chúng tôi có thể nhận hoa hồng – xem trang{" "}
            <Link href={c.links.affiliateDisclosure}>Công bố liên kết tiếp thị</Link>. Nếu bạn cho rằng một liên kết dẫn đến nội dung trái pháp luật, hãy
            báo cho chúng tôi qua <a href={`mailto:${legal.email}`}>{legal.email}</a>, chúng tôi sẽ kiểm tra ngay.
          </p>
        ),
      }),
      trademarks: section({
        nav: "Nhãn hiệu và quyền tác giả",
        heading: "Nhãn hiệu và quyền tác giả",
        body: () => (
          <p>
            Tên và logo của các sàn là nhãn hiệu của chủ sở hữu tương ứng và chỉ được dùng để nhận diện. {site.name} không có quan hệ liên kết với sàn nào
            trong số các sàn có trên trang, và không sàn nào chứng thực hay tài trợ cho {site.name}. Toàn bộ văn bản và đồ họa gốc trên trang web này được
            bảo hộ quyền tác giả.
          </p>
        ),
      }),
      disputes: section({
        nav: "Giải quyết tranh chấp",
        heading: "Giải quyết tranh chấp với người tiêu dùng",
        body: () => (
          <p>
            Chúng tôi không bán hàng hóa hay dịch vụ cho khách truy cập, vì vậy việc sử dụng trang web này không phát sinh hợp đồng tiêu dùng nào. Chúng tôi
            không tham gia thủ tục giải quyết tranh chấp trước một cơ quan trọng tài dành cho người tiêu dùng. Khiếu nại về một sàn cần gửi trực tiếp cho
            sàn đó.
          </p>
        ),
      }),
      law: section({
        nav: "Luật áp dụng",
        heading: "Luật áp dụng",
        body: () => (
          <p>
            Trang web này và việc sử dụng trang web chịu sự điều chỉnh của pháp luật Ba Lan. Nếu bạn là người tiêu dùng, các quy định bắt buộc về bảo vệ
            người tiêu dùng của quốc gia nơi bạn thường trú vẫn được áp dụng.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        Xem thêm trang <Link href={c.links.privacy}>Chính sách bảo mật</Link> và trang{" "}
        <Link href={c.links.affiliateDisclosure}>Công bố liên kết tiếp thị</Link> của chúng tôi.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "Chính sách bảo mật",
    description: `${site.domain} xử lý dữ liệu cá nhân theo GDPR (Quy định chung về bảo vệ dữ liệu của EU). Google Analytics chỉ khi bạn đồng ý, không cookie quảng cáo.`,
    intro: (c) => (
      <>
        <h1>Chính sách bảo mật</h1>
        <p className="muted">Cập nhật lần cuối: ngày {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>Tóm tắt:</strong> {site.domain} không dùng pixel quảng cáo, plugin mạng xã hội hay phông chữ bên ngoài. Google Analytics chỉ chạy nếu bạn
          cho phép trong banner đồng ý cookie; khi chưa có sự đồng ý của bạn, không cookie nào được đặt và không dữ liệu nào được gửi đến Google. Ngoài
          ra, chúng tôi chỉ xử lý những dữ liệu kỹ thuật cần thiết để cung cấp trang web một cách an toàn. Khi bạn nhấp vào liên kết đến một sàn, bạn rời
          khỏi trang web của chúng tôi và chính sách bảo mật của sàn đó được áp dụng.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "Bên kiểm soát dữ liệu",
        heading: "1. Bên kiểm soát dữ liệu",
        body: () => (
          <>
            <p>
              Theo định nghĩa tại Điều 4(7) GDPR (Quy định chung về bảo vệ dữ liệu của EU), bên kiểm soát chịu trách nhiệm xử lý dữ liệu trên trang web này
              là người vận hành trang web – một cá nhân:
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              Email: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              Bên kiểm soát có cơ sở tại Ba Lan. GDPR và Luật Ba Lan ngày 10 tháng 5 năm 2018 về bảo vệ dữ liệu cá nhân được áp dụng. Nếu bạn truy cập trang
              web từ Thụy Sĩ, Luật Liên bang Thụy Sĩ về bảo vệ dữ liệu (FADP) cũng có thể được áp dụng thêm; bạn có các quyền nêu dưới đây theo cùng cách
              như vậy.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "Lưu trữ web và tệp nhật ký",
        heading: "2. Lưu trữ web và tệp nhật ký máy chủ",
        body: () => (
          <>
            <p>
              Trang web này được lưu trữ tại {legal.hostingProvider} (&quot;Vercel&quot;), đơn vị đóng vai trò bên xử lý dữ liệu cho chúng tôi (Điều 28
              GDPR). Khi bạn truy cập trang web, Vercel tự động xử lý dữ liệu kỹ thuật do trình duyệt của bạn gửi đi: địa chỉ IP, ngày và giờ của yêu cầu,
              URL được yêu cầu, URL nguồn truy cập (referrer), loại và phiên bản trình duyệt, hệ điều hành và mã trạng thái HTTP. Những dữ liệu này cần
              thiết để cung cấp trang web và bảo đảm trang hoạt động ổn định, an toàn (ví dụ để chống lại các cuộc tấn công). Dữ liệu không được kết hợp
              với nguồn dữ liệu khác và không được dùng để nhận dạng bạn.
            </p>
            <p>
              Cơ sở pháp lý: Điều 6(1)(f) GDPR – lợi ích hợp pháp của chúng tôi trong việc duy trì trang web an toàn và hoạt động tốt. Vercel lưu dữ
              liệu nhật ký trong một thời gian giới hạn rồi xóa. Vercel có thể xử lý dữ liệu tại Mỹ. Vercel được chứng nhận theo EU-U.S. Data Privacy
              Framework (Khung bảo mật dữ liệu giữa EU và Mỹ); với khuôn khổ này, Ủy ban châu Âu đã ban hành quyết định về mức độ bảo vệ tương xứng (Điều
              45 GDPR). Thỏa thuận xử lý dữ liệu của Vercel, bao gồm các Điều khoản hợp đồng tiêu chuẩn (Standard Contractual Clauses) của EU, cũng được áp
              dụng.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "Cookie và phân tích",
        heading: "3. Cookie và phân tích truy cập",
        body: () => (
          <>
            <p>
              Khi chưa có sự đồng ý của bạn, chúng tôi không đặt cookie và không dùng công cụ phân tích nào. Chúng tôi không dùng mạng quảng cáo, kỹ thuật
              nhận dạng trình duyệt (fingerprinting) hay plugin mạng xã hội, và mọi phông chữ, hình ảnh đều được tải từ tên miền của chính chúng tôi. Chúng
              tôi không ra quyết định tự động và không lập hồ sơ người dùng (profiling) theo nghĩa của Điều 22 GDPR.
            </p>
            <p>
              Lựa chọn của bạn trong banner đồng ý cookie được lưu trong bộ nhớ cục bộ (local storage) của trình duyệt (mục{" "}
              <code>refco-analytics-consent</code>, giá trị &quot;granted&quot; hoặc &quot;denied&quot;), để chúng tôi không phải hỏi lại trên mỗi trang.
              Mục này cần thiết để tôn trọng lựa chọn của bạn và không được gửi cho bất kỳ ai.
            </p>
            <h3 id="analytics">Google Analytics – chỉ khi bạn đồng ý</h3>
            <p>
              Nếu bạn chọn &quot;Cho phép phân tích&quot;, trang web này sẽ tải Google Analytics 4, một dịch vụ của Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Ireland (&quot;Google&quot;). Google Analytics đặt cookie <code>_ga</code> và{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> (theo mặc định được lưu tối đa hai năm) để phân biệt khách truy cập. Dịch vụ này ghi
              nhận những trang được xem, cách khách truy cập đến với trang web, khu vực gần đúng suy ra từ địa chỉ IP, cùng dữ liệu về trình duyệt và thiết
              bị. Theo Google, Analytics 4 không ghi lại hay lưu trữ địa chỉ IP. Chúng tôi chỉ dùng báo cáo ở dạng tổng hợp, để biết trang nào được đọc. Các
              tính năng quảng cáo đã được tắt: không có cookie quảng cáo và không cá nhân hóa quảng cáo.
            </p>
            <p>
              Cơ sở pháp lý: sự đồng ý của bạn (Điều 6(1)(a) GDPR). Google đóng vai trò bên xử lý dữ liệu cho chúng tôi. Dữ liệu có thể được chuyển đến
              Google LLC tại Mỹ, công ty được chứng nhận theo EU-U.S. Data Privacy Framework. Google xóa dữ liệu ở cấp người dùng sau thời hạn lưu giữ được
              cài đặt trong Analytics, tối đa 14 tháng. Bạn có thể rút lại sự đồng ý bất cứ lúc nào, có hiệu lực cho tương lai, qua nút
              &quot;Cài đặt cookie&quot; ở cuối mỗi trang; khi đó cookie Analytics được xóa khỏi trình duyệt và Analytics không còn được tải. Thông tin thêm từ Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "Liên kết đến các sàn",
        heading: "4. Liên kết đến các sàn (liên kết tiếp thị)",
        body: (c) => (
          <p>
            Trang web của chúng tôi có liên kết đến các sàn giao dịch tiền mã hóa của bên thứ ba. Một số là liên kết giới thiệu, giúp sàn nhận biết bạn đến
            từ trang web của chúng tôi. Chúng tôi không truyền dữ liệu cá nhân nào cho sàn; mã định danh giới thiệu nằm ngay trong liên kết và xác định
            chúng tôi, không phải bạn. Khi bạn nhấp vào, bạn đã ở trên trang web của sàn và chính sách bảo mật của sàn được áp dụng. Khi đó sàn có thể đặt
            cookie và xử lý dữ liệu của bạn với tư cách một bên kiểm soát độc lập. Sàn báo cho chúng tôi những khoản hoa hồng phát sinh từ các tài khoản mở
            qua liên kết của chúng tôi. Báo cáo này có thể chứa mã định danh tài khoản dạng bí danh (pseudonymous), ví dụ user ID, và số liệu về phí; chúng
            tôi chỉ dùng báo cáo để đối soát hoa hồng (Điều 6(1)(f) GDPR) và không tìm cách nhận dạng bạn từ đó. Tìm hiểu thêm về các liên kết này:{" "}
            <Link href={c.links.affiliateDisclosure}>Công bố liên kết tiếp thị</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "Liên hệ qua email",
        heading: "5. Liên hệ qua email",
        body: () => (
          <p>
            Nếu bạn liên hệ với chúng tôi qua email, chúng tôi xử lý dữ liệu bạn cung cấp (địa chỉ email, tên, nội dung tin nhắn) để trả lời yêu cầu. Cơ sở
            pháp lý: Điều 6(1)(f) GDPR – lợi ích hợp pháp của chúng tôi trong việc trả lời các yêu cầu. Tin nhắn của bạn được lưu trong hộp thư của chúng
            tôi, do một nhà cung cấp dịch vụ email vận hành với vai trò bên xử lý dữ liệu cho chúng tôi. Chúng tôi xóa thư từ trao đổi khi yêu cầu của bạn
            đã được giải quyết, trừ khi pháp luật buộc chúng tôi lưu giữ lâu hơn. Bạn không có nghĩa vụ cung cấp dữ liệu cá nhân nào; chỉ là nếu không có
            địa chỉ email, chúng tôi không thể trả lời bạn.
          </p>
        ),
      }),
      recipients: section({
        nav: "Bên nhận dữ liệu",
        heading: "6. Bên nhận dữ liệu",
        body: () => (
          <p>
            Chúng tôi không bán dữ liệu cá nhân và không chuyển dữ liệu cho bên thứ ba vì mục đích riêng của họ. Chỉ những nhà cung cấp dịch vụ nêu trên xử
            lý dữ liệu – nhà cung cấp dịch vụ lưu trữ web, nhà cung cấp email và, nếu bạn đã cho phép phân tích, Google – và chúng tôi chỉ cung cấp dữ liệu
            cho cơ quan có thẩm quyền khi pháp luật buộc chúng tôi phải làm vậy.
          </p>
        ),
      }),
      rights: section({
        nav: "Quyền của bạn",
        heading: "7. Quyền của bạn",
        body: () => (
          <>
            <p>Theo các điều kiện do pháp luật quy định, bạn có quyền:</p>
            <ul>
              <li>truy cập dữ liệu cá nhân mà chúng tôi lưu giữ về bạn (Điều 15 GDPR),</li>
              <li>yêu cầu cải chính dữ liệu không chính xác (Điều 16 GDPR),</li>
              <li>yêu cầu xóa dữ liệu (Điều 17 GDPR) và hạn chế xử lý (Điều 18 GDPR),</li>
              <li>yêu cầu di chuyển dữ liệu (Điều 20 GDPR),</li>
              <li>phản đối việc xử lý dựa trên lợi ích hợp pháp, vì lý do liên quan đến hoàn cảnh cụ thể của bạn (Điều 21 GDPR),</li>
              <li>rút lại sự đồng ý đã đưa ra vào bất cứ lúc nào, có hiệu lực cho tương lai (Điều 7(3) GDPR),</li>
              <li>
                khiếu nại với cơ quan giám sát (Điều 77 GDPR) – tại Ba Lan là Chủ tịch Văn phòng Bảo vệ dữ liệu cá nhân (Prezes Urzędu Ochrony Danych
                Osobowych, UODO, uodo.gov.pl), hoặc cơ quan giám sát của quốc gia EU nơi bạn sống hoặc làm việc; tại Thụy Sĩ là Ủy viên Liên bang về Bảo vệ
                dữ liệu và Thông tin (FDPIC).
              </li>
            </ul>
            <p>
              Gửi email đến <a href={`mailto:${legal.email}`}>{legal.email}</a> để thực hiện các quyền này. Chúng tôi trả lời không chậm trễ, chậm nhất trong
              vòng một tháng.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "Trẻ em",
        heading: "8. Trẻ em",
        body: () => (
          <p>Trang web này dành cho người trưởng thành. Chúng tôi không cố ý xử lý dữ liệu cá nhân của người dưới 18 tuổi.</p>
        ),
      }),
      security: section({
        nav: "Bảo mật dữ liệu",
        heading: "9. Bảo mật dữ liệu",
        body: () => (
          <p>
            Trang web này chỉ được cung cấp qua kết nối HTTPS mã hóa (TLS) với các header bảo mật nghiêm ngặt. Chúng tôi áp dụng các biện pháp kỹ thuật và
            tổ chức phù hợp để bảo vệ dữ liệu của bạn.
          </p>
        ),
      }),
      changes: section({
        nav: "Thay đổi",
        heading: "10. Thay đổi chính sách này",
        body: (c) => (
          <p>
            Chúng tôi có thể cập nhật chính sách bảo mật này khi trang web hoặc yêu cầu pháp lý thay đổi. Phiên bản hiện hành luôn có trên trang này. Người
            vận hành có tên trong trang <Link href={c.links.imprint}>Thông tin pháp lý</Link>.
          </p>
        ),
      }),
    },
  },
};
