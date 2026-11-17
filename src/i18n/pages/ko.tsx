import Link from "next/link";
import { legal, site } from "@/config/site";
import { josa } from "../ko-josa";
import type { PageTexts, TextSection } from "./en";

/**
 * The text pages in Korean. Same pages and sections as `./en.tsx`, written from the English text.
 *
 * Wording: "거래소" / "암호화폐 거래소", "레퍼럴 코드", "수수료", "커미션" for the commission we receive (so that
 * it is not confused with trading fees), "암호자산" for crypto-assets in the legal texts. Running text is in
 * 합니다체; the reader is addressed without a pronoun, "이용자" where a noun is needed, and "we" is "저희". The
 * operator of the website is "운영자"; a controller under the GDPR is "컨트롤러", a processor "프로세서". The
 * regulation is "GDPR(EU 일반 개인정보 보호법)", articles are cited as "GDPR 제6조 제1항 (f)호". Page names as
 * in the footer: “운영자 정보”, “개인정보 처리방침”, “제휴 고지”, “소개 및 검증 방법”. Names, addresses and
 * email addresses stay as they are in `src/config/site.ts`.
 *
 * The legal pages (affiliate disclosure, imprint, privacy policy) carry `translationNotice`: the English
 * text is the binding one.
 */

const section = (s: TextSection) => s;

/** "RefCo는", "RefCo가": the particle follows the Korean reading of the name. */
const nameTopic = josa(site.name, "은/는");
const nameSubject = josa(site.name, "이/가");

/** A plain link, because the English page has its own root layout and loads as a new document. */
const translationNotice = (englishHref: string) => (
  <p className="muted">
    <strong>안내:</strong> 이 페이지는 편의를 위해 제공하는 한국어판입니다. 법적 구속력이 있는 것은{" "}
    <a href={englishHref} hrefLang="en">
      영문판
    </a>
    입니다.
  </p>
);

export const ko: PageTexts = {
  layout: {
    aside: "이 페이지의 내용 및 더 보기",
    onThisPage: "이 페이지의 내용",
    referralCodes: "레퍼럴 코드",
    compare: "거래소 비교",
    alternativesOf: (name) => <>{name} 대안 거래소</>,
    allComparisons: "모든 거래소 비교 보기 →",
  },

  home: "홈",

  /* ------------------------------------ About ------------------------------------ */
  about: {
    title: `${site.name} 소개 및 검증 방법`,
    description: `${josa(site.domain, "을/를")} 누가 운영하는지, 데이터는 어디에서 가져오는지, 암호화폐 거래소를 어떤 방법으로 검증하는지 소개합니다.`,
    ldName: `${site.name} 소개`,
    crumb: "소개",
    intro: () => (
      <>
        <span className="eyebrow">소개</span>
        <h1>{site.name} 소개</h1>
        <p className="lead">
          {josa(`${site.name}(${site.domain})`, "은/는")} 트레이더가 자신에게 맞는 암호화폐 파생상품 거래소에 가입할 수 있도록 돕습니다. 제대로 적용되는
          레퍼럴 코드(추천인 코드)와 입금 전에 꼭 알아야 할 정보를 함께 제공합니다.
        </p>
      </>
    ),
    sections: {
      "what-we-do": section({
        nav: "저희가 하는 일",
        heading: "저희가 하는 일",
        body: () => (
          <p>
            저희는 CoinMarketCap 파생상품 순위에서 규모가 가장 큰 거래소를 중점적으로 다루며, 거래소마다 같은 구성의 페이지를 하나씩 게시합니다. 구성은 핵심
            요약, 주요 정보, 수수료, 솔직한 설명, 장단점, 안전 관련 유의 사항, 이용 가능 여부, FAQ입니다. 덕분에 거래소를 서로 쉽게 비교할 수 있습니다.
          </p>
        ),
      }),
      methodology: section({
        nav: "검증 방법",
        heading: "검증 방법",
        body: (c) => (
          <ul>
            <li>
              <strong>시장 데이터</strong>(미결제약정, 24시간 거래량, 마켓 수)는 CoinMarketCap 파생상품 순위에서 가져오며, 모든 페이지에 기준일을
              표시합니다.
            </li>
            <li>
              <strong>레퍼럴 코드, 가입, 본인 인증</strong>에 관한 내용, 즉 코드를 어디에 입력하는지, 나중에 추가할 수 있는지, 가입 절차와 KYC 규정은 각
              거래소의 자체 웹사이트와 고객센터에서 직접 확인합니다. 거래소 페이지마다 대조에 사용한 공식 페이지를 나열해 두었습니다.
            </li>
            <li>
              <strong>수수료와 레버리지</strong>는 각 거래소의 공식 수수료표에서 기본 등급(VIP 제외) 기준으로 가져옵니다.
            </li>
            <li>
              <strong>웰컴 보너스</strong>는 거래소가 안내한 내용 그대로, 조건과 함께 옮깁니다. 국가마다 다르고 자주 바뀝니다.
            </li>
            <li>
              <strong>라이선스와 사고 이력</strong>은 거래소의 자체 라이선스 페이지와 공식 발표에서 가져옵니다.
            </li>
            <li>
              <strong>거래소 비교</strong>, 즉 대안 거래소 페이지와 <Link href={c.links.compare}>맞대결 비교</Link>는 거래소 페이지와 같은 수치를 사용합니다.
              상품은 거래소가 자체 사이트에 표시한 경우에만 제공하는 것으로 표시하며, 국가별 이용 가능 여부는 각 거래소의 이용약관, 제한 국가 목록, 지역
              사이트에서 가져옵니다. 어떤 항목에서 어느 거래소가 “우위”인지는 이 수치에서 그대로 읽어 낸 것이며, 저희가 순위를 매긴 것이 아닙니다.
            </li>
            <li>
              <strong>검토 주기:</strong> 데이터는 정기적으로 다시 확인하며, 현재 검토일은 {c.reviewed}입니다.
            </li>
          </ul>
        ),
      }),
      independence: section({
        nav: "독립성",
        heading: "독립성",
        body: (c) => (
          <p>
            저희는 소개하는 거래소로부터 레퍼럴 커미션을 받습니다. 자세한 내용은 <Link href={c.links.affiliateDisclosure}>제휴 고지</Link>에 있습니다. 그렇다고
            저희가 게시하는 사실이 달라지는 일은 없으며, 단점과 제한 사항도 항상 함께 밝힙니다.
          </p>
        ),
      }),
      operator: section({
        nav: `${site.name} 운영자`,
        heading: <>{site.name} 운영자</>,
        body: (c) => (
          <p>
            {nameTopic} 회사가 아니라 개인이 운영하는 웹사이트입니다. 운영자는 <Link href={c.links.imprint}>운영자 정보</Link> 페이지에 명시되어 있습니다.{" "}
            {nameTopic} 거래소가 아니며, 이용자의 자금을 받거나 보관하는 일이 없습니다. 계정은 거래소에서 직접 개설됩니다.
          </p>
        ),
      }),
      contact: section({
        nav: "문의",
        heading: "문의",
        body: () => (
          <p>
            오래된 정보를 발견하셨나요? 이메일(<a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>)로 알려 주세요. 오류는 신속하게
            바로잡습니다.
          </p>
        ),
      }),
    },
  },

  /* ------------------------------ Affiliate disclosure ------------------------------ */
  affiliateDisclosure: {
    title: "제휴 고지",
    description: `${nameSubject} 수익을 얻는 방식, 광고에 해당하는 링크, 그리고 이것이 저희가 게시하는 암호화폐 거래소 정보에 영향을 주지 않는 이유를 안내합니다.`,
    intro: (c) => (
      <>
        <h1>제휴 고지</h1>
        <p className="lead">신뢰는 투명성에서 시작됩니다. {site.name}의 운영 자금이 어디에서 나오는지 정확히 밝힙니다.</p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      earn: section({
        nav: "수익을 얻는 방식",
        heading: "저희가 수익을 얻는 방식",
        body: () => (
          <p>
            {nameTopic} 이 웹사이트에 소개된 거래소의 레퍼럴·제휴 프로그램에 참여하고 있습니다. 저희 링크를 통해 계정을 개설하면 거래소가 이 웹사이트의
            운영자에게 커미션을 지급할 수 있으며, 이는 보통 해당 계정에서 발생한 거래 수수료의 일부입니다. 이 때문에 이용자가 비용을 더 내는 일은 없습니다.
            레퍼럴로 가입해도 수수료는 오르지 않으며, 레퍼럴 가입에는 수수료 할인이나 신규 가입 혜택이 따르는 경우가 많습니다. 커미션은 이용자가 아니라 거래소가
            지급합니다.
          </p>
        ),
      }),
      advertising: section({
        nav: "광고에 해당하는 링크",
        heading: "광고에 해당하는 링크",
        body: () => (
          <p>
            거래소로 연결되는 모든 링크와 버튼(예: “… 가입하기”, “가입하기”, “받기”), 그리고 이 웹사이트에 표시된 모든 레퍼럴 코드는 광고입니다. 즉 해당
            거래소를 위한 상업적 커뮤니케이션이며, 저희는 그 대가를 받을 수 있습니다. 이러한 링크에는 검색엔진 가이드라인에 따라{" "}
            <code>rel=&quot;sponsored&quot;</code> 표시를 붙였으며, 모든 페이지에 이 고지로 연결되는 링크가 있습니다.
          </p>
        ),
      }),
      independence: section({
        nav: "영향을 받지 않는 것",
        heading: "영향을 받지 않는 것",
        body: () => (
          <ul>
            <li>
              수수료, 레버리지, 라이선스, 본인 인증 규정, 국가 제한은 거래소의 자체 페이지에서, 시장 데이터는 CoinMarketCap에서 가져옵니다. 마케팅 계약에서
              나오는 내용이 아닙니다. 거래소 페이지마다 출처를 나열해 두었습니다.
            </li>
            <li>모든 거래소에 대해 단점, 보안 사고, 지역별 제한 사항을 게시합니다.</li>
            <li>
              거래소의 나열 순서는 CoinMarketCap 파생상품 순위에서의 위치를 따릅니다. 어떤 거래소도 돈을 내고 더 좋은 자리를 얻을 수 없습니다.
            </li>
            <li>비교에서 어느 거래소가 “우위”인지는 공개된 수치로 계산합니다. 돈으로 살 수 없습니다.</li>
          </ul>
        ),
      }),
      who: section({
        nav: "계약 상대방",
        heading: "이용자의 계약 상대방",
        body: () => (
          <p>
            {nameTopic} 정보 제공 웹사이트이며, 거래소나 브로커가 아닙니다. 이용자의 자금이나 암호자산을 받거나 보관하는 일이 없습니다. 가입하면 계약은 오직
            거래소와, 그 거래소의 이용약관에 따라 체결됩니다. 특정 거래소를 이용할 수 있는지는 거주 국가에 따라 다르므로, 가입하기 전에 해당 거래소의
            이용약관을 확인하세요.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "금융 조언 아님",
        heading: "금융 조언이 아닙니다",
        body: () => (
          <p>
            이 웹사이트의 어떤 내용도 특정 자산의 매수, 매도 또는 거래를 권유하는 것이 아니며, 개인의 상황을 고려한 조언을 대신할 수 없습니다. 암호화폐
            파생상품은 고위험 상품입니다. 레버리지는 수익과 손실을 모두 키우며, 입금한 금액 전부를 잃을 수 있습니다.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        이 웹사이트의 운영자는 <Link href={c.links.imprint}>운영자 정보</Link> 페이지에 명시되어 있으며, 개인정보를 어떻게 다루는지는{" "}
        <Link href={c.links.privacy}>개인정보 처리방침</Link>에서 설명합니다.
      </p>
    ),
  },

  /* ------------------------------------ Imprint ------------------------------------ */
  imprint: {
    title: "운영자 정보(법적 고지)",
    description: `${site.domain}의 법적 고지입니다. 운영자, 연락처, 이 웹사이트가 무엇이고 무엇이 아닌지, 책임, 준거법을 안내합니다.`,
    intro: (c) => (
      <>
        <h1>운영자 정보(법적 고지)</h1>
        <p className="muted">
          지침 2000/31/EC(전자상거래 지침) 제5조 및 폴란드의 2002년 7월 18일자 「전자적 수단에 의한 서비스 제공에 관한 법률」 제5조에 따른 서비스 제공자
          정보입니다.
        </p>
        {translationNotice(c.links.english)}
      </>
    ),
    sections: {
      operator: section({
        nav: "운영자",
        heading: "이 웹사이트의 운영자",
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
              이 웹사이트에서 “{site.name}”, “저희”, “우리”는 위에 기재된 운영자를 가리킵니다. {nameTopic} 웹사이트의 이름이며, 회사의 이름이 아닙니다.
            </p>
          </>
        ),
      }),
      "represented-by": section({
        heading: "대표자",
        body: () => <p>{legal.representative}</p>,
      }),
      contact: section({
        nav: "연락처",
        heading: "연락처",
        body: () => (
          <p>
            이메일: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone ? (
              <>
                <br />
                전화: {legal.phone}
              </>
            ) : null}
          </p>
        ),
      }),
      "legal-form": section({
        nav: "법적 형태",
        heading: "법적 형태",
        body: () => <p>이 웹사이트는 개인이 운영합니다. 상업등기부에 등기된 사항은 없습니다.</p>,
      }),
      register: section({
        heading: "등기 사항 및 부가가치세(VAT)",
        body: () => (
          <p>
            {legal.registerEntry}
            <br />
            {legal.vatId}
          </p>
        ),
      }),
      responsible: section({
        nav: "콘텐츠 책임자",
        heading: "콘텐츠 책임자",
        body: () => <p>{legal.representative || legal.operator}, 주소는 위와 같습니다.</p>,
      }),
      scope: section({
        nav: "이 웹사이트는 무엇인가",
        heading: "이 웹사이트는 무엇이고, 무엇이 아닌가",
        body: () => (
          <p>
            {nameTopic} 암호화폐 거래소와 그 레퍼럴 프로그램에 관한 정보·비교 웹사이트입니다. 거래소도, 브로커도, 암호자산 서비스 제공자도 아닙니다. 자금이나
            암호자산을 받거나 보관하거나 이전하지 않고, 주문을 집행하지 않으며, 방문자와 어떠한 계약도 체결하지 않습니다. 계정을 개설하는 경우, 거래소에서
            직접, 그 거래소의 이용약관에 따라, 그 거래소의 본인 인증 절차를 거쳐 개설하게 됩니다.
          </p>
        ),
      }),
      "no-advice": section({
        nav: "조언 아님, 위험 고지",
        heading: "조언 아님, 위험 고지",
        body: () => (
          <p>
            이 웹사이트의 어떤 내용도 투자·금융·법률·세무 조언이나 개인별 추천이 아니며, 암호자산 또는 금융상품을 매수하거나 매도하라는 제안이나 권유도
            아닙니다. 비교 내용은 거래소가 공개한 사실을 전달할 뿐이며, 개인의 사정을 고려하지 않습니다. 암호자산 거래, 특히 레버리지를 사용하는 거래에는 높은
            손실 위험이 따르며, 입금한 금액 전부를 잃을 수도 있습니다. 결정은 스스로 내리고, 판단이 서지 않으면 자격을 갖춘 전문 자문가와 상담하세요.
          </p>
        ),
      }),
      availability: section({
        nav: "이용 가능 여부",
        heading: "이용 가능 여부 및 제한 국가",
        body: () => (
          <p>
            거래소가 모든 국가에서 서비스를 제공하는 것은 아니며, 일부 상품은 특정 국가의 거주자에게 제한됩니다. 이 웹사이트는 거주지에서 해당 거래소를
            이용하거나 그에 관한 정보를 받는 것이 금지된 사람을 대상으로 하지 않습니다. 가입하기 전에 거래소의 이용약관과 거주 국가의 규정을 확인하세요. 이
            웹사이트는 성인만을 대상으로 합니다.
          </p>
        ),
      }),
      liability: section({
        nav: "책임",
        heading: "콘텐츠에 대한 책임",
        body: () => (
          <p>
            이 웹사이트의 콘텐츠는 주의를 기울여 작성했으며 정기적으로 점검합니다. 거래소 페이지마다 최종 검토일과 대조에 사용한 출처를 표시합니다. 다만
            수수료, 레버리지 한도, 보너스, 본인 인증 규정, 이용 가능 여부는 거래소가 정하며 언제든지 바뀔 수 있으므로, 정보의 정확성, 완전성, 최신성은 보증할
            수 없습니다. 적용되는 조건은 가입하는 시점에 거래소가 표시하는 조건입니다. 법이 허용하는 범위에서, 저희는 이 정보의 이용으로 발생한 손해에 대해
            책임을 지지 않습니다. 고의 및 중대한 과실에 대한 책임과 법률상 배제할 수 없는 책임은 이에 영향을 받지 않습니다.
          </p>
        ),
      }),
      links: section({
        nav: "외부 링크",
        heading: "다른 웹사이트로 연결되는 링크",
        body: (c) => (
          <p>
            이 웹사이트에는 저희가 통제할 수 없는 외부 웹사이트로 연결되는 링크가 있습니다. 그 콘텐츠에 대한 책임은 전적으로 해당 웹사이트의 제공자에게
            있습니다. 외부로 나가는 링크 중 일부는 제휴(레퍼럴) 링크이며, 저희는 이에 대해 커미션을 받을 수 있습니다. 자세한 내용은{" "}
            <Link href={c.links.affiliateDisclosure}>제휴 고지</Link>를 참고하세요. 링크가 불법 콘텐츠로 연결된다고 판단되면 이메일(
            <a href={`mailto:${legal.email}`}>{legal.email}</a>)로 알려 주세요. 지체 없이 확인하겠습니다.
          </p>
        ),
      }),
      trademarks: section({
        nav: "상표 및 저작권",
        heading: "상표 및 저작권",
        body: () => (
          <p>
            거래소의 이름과 로고는 각 소유자의 상표이며, 식별 목적으로만 사용합니다. {nameTopic} 소개된 어떤 거래소에도 소속되어 있지 않으며, 어떤 거래소의
            보증이나 후원도 받지 않습니다. 이 웹사이트에 실린 모든 독자적인 글과 그래픽은 저작권으로 보호됩니다.
          </p>
        ),
      }),
      disputes: section({
        nav: "분쟁 해결",
        heading: "소비자 분쟁 해결",
        body: () => (
          <p>
            저희는 방문자에게 상품이나 서비스를 판매하지 않으므로, 이 웹사이트를 이용하더라도 소비자 계약은 성립하지 않습니다. 저희는 소비자 중재 기관의 분쟁
            해결 절차에 참여하지 않습니다. 거래소에 대한 불만은 해당 거래소에 제기해야 합니다.
          </p>
        ),
      }),
      law: section({
        nav: "준거법",
        heading: "준거법",
        body: () => (
          <p>
            이 웹사이트와 그 이용에는 폴란드 법이 적용됩니다. 소비자인 경우, 일상적으로 거주하는 국가의 강행적인 소비자 보호 규정은 이에 영향을 받지
            않습니다.
          </p>
        ),
      }),
    },
    outro: (c) => (
      <p className="muted">
        <Link href={c.links.privacy}>개인정보 처리방침</Link>과 <Link href={c.links.affiliateDisclosure}>제휴 고지</Link>도 함께 확인하세요.
      </p>
    ),
  },

  /* --------------------------------- Privacy policy --------------------------------- */
  privacy: {
    title: "개인정보 처리방침",
    description: `${josa(site.domain, "이/가")} GDPR(EU 일반 개인정보 보호법)에 따라 개인정보를 처리하는 방식을 안내합니다. Google Analytics는 동의한 경우에만 사용하며, 광고 쿠키는 없습니다.`,
    intro: (c) => (
      <>
        <h1>개인정보 처리방침</h1>
        <p className="muted">최종 수정일: {c.reviewed}</p>
        {translationNotice(c.links.english)}

        <div className="info">
          <strong>요약:</strong> {josa(site.domain, "은/는")} 광고 픽셀, 소셜 미디어 플러그인, 외부 글꼴을 사용하지 않습니다. Google Analytics는 동의
          배너에서 허용한 경우에만 작동하며, 동의가 없으면 쿠키가 설정되지 않고 Google로 아무것도 전송되지 않습니다. 그 밖에는 웹사이트를 안전하게 제공하는 데
          필요한 기술 데이터만 처리합니다. 거래소로 연결되는 링크를 클릭하면 저희 웹사이트를 떠나게 되며, 해당 거래소의 개인정보 처리방침이 적용됩니다.
        </div>
      </>
    ),
    sections: {
      controller: section({
        nav: "컨트롤러",
        heading: "1. 컨트롤러",
        body: () => (
          <>
            <p>
              GDPR(EU 일반 개인정보 보호법) 제4조 제7호에서 말하는, 이 웹사이트의 데이터 처리를 책임지는 컨트롤러(controller)는 이 웹사이트의 운영자인
              아래의 개인입니다.
            </p>
            <p>
              {legal.operator}
              <br />
              {legal.street}, {legal.zipCity}, {legal.country}
              <br />
              이메일: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p>
              컨트롤러는 폴란드에 소재합니다. GDPR과 폴란드의 2018년 5월 10일자 「개인정보 보호에 관한 법률」이 적용됩니다. 스위스에서 이 웹사이트를 방문하는
              경우 스위스 연방 데이터 보호법(FADP)이 추가로 적용될 수 있으며, 아래에 설명한 권리는 동일하게 행사할 수 있습니다.
            </p>
          </>
        ),
      }),
      hosting: section({
        nav: "호스팅 및 로그 파일",
        heading: "2. 호스팅 및 서버 로그 파일",
        body: () => (
          <>
            <p>
              이 웹사이트의 호스팅은 {legal.hostingProvider}(이하 “Vercel”)에서 제공하며, Vercel은 저희의 프로세서(processor)로서 데이터를
              처리합니다(GDPR 제28조). 웹사이트를 방문하면 Vercel은 브라우저가 전송하는 기술 데이터를 자동으로 처리합니다. IP 주소, 요청 날짜와 시간, 요청한
              URL, 리퍼러 URL, 브라우저 종류와 버전, 운영 체제, HTTP 상태 코드가 이에 해당합니다. 이 데이터는 웹사이트를 제공하고 안정성과 보안을 유지하는
              데(예: 공격 방어) 필요합니다. 다른 데이터 출처와 결합하지 않으며, 이용자를 식별하는 데 사용하지 않습니다.
            </p>
            <p>
              법적 근거는 GDPR 제6조 제1항 (f)호, 즉 안전하고 정상적으로 작동하는 웹사이트에 대한 저희의 정당한 이익입니다. 로그 데이터는 Vercel이 한정된
              기간 동안 보관한 뒤 삭제합니다. Vercel은 미국에서 데이터를 처리할 수 있습니다. Vercel은 EU-U.S. Data Privacy Framework 인증을 받았으며, EU
              집행위원회는 이 프레임워크에 대해 적정성 결정을 채택했습니다(GDPR 제45조). 또한 EU 표준계약조항(Standard Contractual Clauses)이 포함된
              Vercel의 데이터 처리 계약이 적용됩니다.
            </p>
          </>
        ),
      }),
      cookies: section({
        nav: "쿠키 및 애널리틱스",
        heading: "3. 쿠키 및 애널리틱스",
        body: () => (
          <>
            <p>
              동의가 없으면 쿠키를 설정하지 않으며 애널리틱스도 사용하지 않습니다. 광고 네트워크, 핑거프린팅, 소셜 미디어 플러그인은 사용하지 않으며, 모든
              글꼴과 이미지는 저희 도메인에서 제공합니다. 자동화된 의사결정이나 프로파일링은 하지 않습니다(GDPR 제22조).
            </p>
            <p>
              동의 배너에서 선택한 내용은 브라우저의 로컬 스토리지에 저장됩니다(항목 <code>refco-analytics-consent</code>, 값 “granted” 또는 “denied”).
              페이지마다 다시 묻지 않기 위해서입니다. 이 항목은 선택을 존중하는 데 필요하며, 누구에게도 전송되지 않습니다.
            </p>
            <h3 id="analytics">Google Analytics – 동의한 경우에만</h3>
            <p>
              “애널리틱스 허용”을 선택하면 이 웹사이트는 Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland(이하 “Google”)의
              서비스인 Google Analytics 4를 불러옵니다. Google Analytics는 방문자를 서로 구분하기 위해 <code>_ga</code> 및{" "}
              <code>_ga_{site.analyticsId.replace(/^G-/, "")}</code> 쿠키를 설정합니다(기본적으로 최대 2년간 저장). 어떤 페이지를 조회했는지, 방문자가
              어떤 경로로 웹사이트에 들어왔는지, IP 주소에서 추정한 대략적인 지역, 브라우저 및 기기 데이터를 기록합니다. Google에 따르면 Analytics 4는 IP
              주소를 기록하거나 저장하지 않습니다. 저희는 어떤 페이지가 읽히는지 파악하기 위해 집계된 형태의 보고서만 이용합니다. 광고 기능은 꺼져 있습니다.
              광고 쿠키도 없고, 광고 개인화도 하지 않습니다.
            </p>
            <p>
              법적 근거는 이용자의 동의입니다(GDPR 제6조 제1항 (a)호). Google은 저희의 프로세서로서 데이터를 처리합니다. 데이터는 미국의 Google LLC로
              이전될 수 있으며, Google LLC는 EU-U.S. Data Privacy Framework 인증을 받았습니다. Google은 Analytics에 설정된 보관 기간(최대 14개월)이
              지나면 사용자 수준 데이터를 삭제합니다. 동의는 모든 페이지 하단의 “쿠키 설정”에서 언제든지 장래에 대하여 철회할 수 있습니다. 철회하면 Analytics
              쿠키가 브라우저에서 삭제되고 Analytics는 더 이상 불러오지 않습니다. Google이 제공하는 추가 정보:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener nofollow">
                policies.google.com/privacy
              </a>
              .
            </p>
          </>
        ),
      }),
      "affiliate-links": section({
        nav: "거래소 링크",
        heading: "4. 거래소 링크(제휴 링크)",
        body: (c) => (
          <p>
            저희 웹사이트에는 제3자인 암호화폐 거래소로 연결되는 링크가 있습니다. 그중 일부는 레퍼럴 링크로, 이용자가 저희 웹사이트를 통해 왔다는 사실을
            거래소가 알 수 있게 합니다. 저희는 거래소에 어떠한 개인정보도 전송하지 않습니다. 레퍼럴 식별자는 링크 자체에 포함되어 있으며, 이용자가 아니라
            저희를 식별합니다. 링크를 클릭하면 거래소의 웹사이트로 이동하며, 그 거래소의 개인정보 처리방침이 적용됩니다. 이후 거래소는 별도의 컨트롤러로서
            쿠키를 설정하고 이용자의 데이터를 처리할 수 있습니다. 거래소는 저희 링크를 통해 개설된 계정에서 어떤 커미션이 발생했는지 저희에게 알려 줍니다. 이
            보고에는 가명 처리된 계정 식별자(예: 사용자 ID)와 수수료 금액이 포함될 수 있습니다. 저희는 이를 커미션 정산에만 사용하며(GDPR 제6조 제1항
            (f)호), 이를 통해 이용자를 식별하려 하지 않습니다. 이 링크에 대한 자세한 내용:{" "}
            <Link href={c.links.affiliateDisclosure}>제휴 고지</Link>.
          </p>
        ),
      }),
      email: section({
        nav: "이메일 문의",
        heading: "5. 이메일 문의",
        body: () => (
          <p>
            이메일로 문의하면 저희는 답변을 위해 이용자가 제공한 데이터(이메일 주소, 이름, 메시지 내용)를 처리합니다. 법적 근거는 GDPR 제6조 제1항 (f)호, 즉 문의에
            답변하는 데 대한 저희의 정당한 이익입니다. 메시지는 저희 메일함에 저장되며, 이 메일함은 저희의 프로세서인 이메일 서비스 제공업체가 운영합니다.
            문의 처리가 끝나면 주고받은 메일을 삭제합니다. 다만 법률에 따라 더 오래 보관해야 하는 경우는 예외입니다. 개인정보를 제공할 의무는 없지만,
            이메일 주소가 없으면 답변을 드릴 수 없습니다.
          </p>
        ),
      }),
      recipients: section({
        nav: "데이터 수령인",
        heading: "6. 데이터 수령인",
        body: () => (
          <p>
            저희는 개인정보를 판매하지 않으며, 제3자가 자신의 목적으로 사용하도록 넘기지도 않습니다. 데이터는 위에서 언급한 서비스 제공업체, 즉 호스팅
            제공업체, 이메일 제공업체, 그리고 애널리틱스를 허용한 경우 Google만 처리하며, 당국에는 법률상 의무가 있는 경우에만 제공합니다.
          </p>
        ),
      }),
      rights: section({
        nav: "이용자의 권리",
        heading: "7. 이용자의 권리",
        body: () => (
          <>
            <p>법적 요건을 충족하는 경우 다음과 같은 권리가 있습니다.</p>
            <ul>
              <li>저희가 보유한 본인의 개인정보를 열람할 권리(GDPR 제15조)</li>
              <li>부정확한 데이터의 정정을 요구할 권리(GDPR 제16조)</li>
              <li>삭제를 요구할 권리(GDPR 제17조)와 처리 제한을 요구할 권리(GDPR 제18조)</li>
              <li>개인정보 이동권(GDPR 제20조)</li>
              <li>본인의 특별한 상황과 관련된 사유로, 정당한 이익에 근거한 처리에 반대할 권리(GDPR 제21조)</li>
              <li>이미 한 동의를 언제든지 장래에 대하여 철회할 권리(GDPR 제7조 제3항)</li>
              <li>
                감독기관에 민원을 제기할 권리(GDPR 제77조) – 폴란드에서는 개인정보 보호청장(Prezes Urzędu Ochrony Danych Osobowych, UODO,
                uodo.gov.pl) 또는 거주하거나 근무하는 EU 국가의 감독기관, 스위스에서는 연방 데이터 보호·정보 감독관(FDPIC)
              </li>
            </ul>
            <p>
              권리를 행사하려면 이메일(<a href={`mailto:${legal.email}`}>{legal.email}</a>)로 요청하세요. 부당한 지체 없이, 늦어도 1개월 이내에
              답변합니다.
            </p>
          </>
        ),
      }),
      children: section({
        nav: "미성년자",
        heading: "8. 미성년자",
        body: () => <p>이 웹사이트는 성인을 대상으로 합니다. 저희는 18세 미만인 사람의 개인정보임을 알면서 이를 처리하지 않습니다.</p>,
      }),
      security: section({
        nav: "데이터 보안",
        heading: "9. 데이터 보안",
        body: () => (
          <p>
            이 웹사이트는 엄격한 보안 헤더를 적용한 암호화된 HTTPS 연결(TLS)로만 제공됩니다. 저희는 이용자의 데이터를 보호하기 위해 적절한 기술적·조직적
            조치를 취합니다.
          </p>
        ),
      }),
      changes: section({
        nav: "변경",
        heading: "10. 이 처리방침의 변경",
        body: (c) => (
          <p>
            웹사이트나 법적 요건이 바뀌면 이 개인정보 처리방침을 업데이트할 수 있습니다. 최신 버전은 항상 이 페이지에서 확인할 수 있습니다. 운영자는{" "}
            <Link href={c.links.imprint}>운영자 정보</Link> 페이지에 명시되어 있습니다.
          </p>
        ),
      }),
    },
  },
};
