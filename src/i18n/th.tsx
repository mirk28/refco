import Link from "next/link";
import { site } from "@/config/site";
import type { Exchange } from "@/data/types";
import type { Dictionary } from "./en";
import { readingOf, withReading } from "./name-readings";

/**
 * Interface texts in Thai. Same keys as `en.tsx`.
 *
 * Wording: "รหัสแนะนำ" for referral code (main keyword, always before the name: "รหัสแนะนำ Binance"), "โค้ดแนะนำ",
 * "รหัสเชิญ", "รหัสอ้างอิง" and "รหัสผู้แนะนำ" as second keywords, "กระดานเทรด" for the exchange, "ค่าธรรมเนียม" for fees,
 * Spot / Futures / Margin / Maker / Taker in Latin letters, address "คุณ" (used sparingly), the site is "เรา". Exchange
 * names stay Latin; the Thai spelling ("Binance (ไบแนนซ์)") is added only in the title, the H1, the lead and the
 * keywords (`withReading`). Thai has no sentence-final full stop: sentences are separated by one space, and a Latin
 * word, a code or a number has one space on each side, while Thai words touch each other. Latin digits with a decimal
 * point (0.02%, 10,000 USDT, 34.1 พันล้านดอลลาร์). Field and button names of the exchanges stay in English, because only
 * the English interface was checked.
 */

const benefit = (e: Exchange) => e.feeDiscount || e.bonusHeadline;
/** "A, B และ C" */
const list = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} และ ${items[items.length - 1]}`);
/** "A, B หรือ C" – for alternatives such as the sign-up methods. */
const orList = (items: string[]) => (items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} หรือ ${items[items.length - 1]}`);
const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
/** Thai words touch each other; where a Latin word, a number or a bracket meets Thai, there is one space. */
const thaiLetter = /[฀-๿]/;
const glue = (a: string, b: string) => (thaiLetter.test(a.slice(-1)) && thaiLetter.test(b.charAt(0)) ? `${a}${b}` : `${a} ${b}`);
/** Billions of US dollars: 34.1 → "34.1 พันล้านดอลลาร์". */
const billion = (n: string) => `${n} พันล้านดอลลาร์`;
/** Spellings people also type besides the fixed one (`readingOf`): keywords only, never in text. */
const keywordSpellings: Record<string, string> = { bybit: "บายบิท", bitget: "บิทเก็ต", gate: "เกท", mexc: "เม็กซ์ซี" };

export const th: Dictionary = {
  list,

  format: {
    billions: (n) => billion(n.toFixed(n >= 10 ? 1 : 2)),
    billionsExact: (n) => billion(n.toFixed(2)),
    billionsFloor: (n) => `มากกว่า ${billion(String(Math.floor(n)))}`,
  },

  meta: {
    siteTitle: `${site.name} – รหัสแนะนำกระดานเทรดคริปโตที่ตรวจสอบแล้ว`,
    siteDescription:
      "รหัสแนะนำที่ตรวจสอบแล้วของ Binance, OKX, Bybit, Bitget, Gate, KuCoin และ MEXC รับโบนัสผู้ใช้ใหม่และเงินคืนค่าธรรมเนียมการเทรด Spot และ Futures ด้วยลิงก์สมัครเดียว พร้อมค่าธรรมเนียม ข้อมูล และข้อดีข้อเสียตามจริง",
  },

  layout: {
    skip: "ข้ามไปที่เนื้อหา",
    mainNav: "เมนูหลัก",
    nav: { exchanges: "กระดานเทรด", benefits: "สิทธิประโยชน์", compare: "เปรียบเทียบ", howItWorks: "วิธีใช้งาน", about: "เกี่ยวกับเรา" },
    getCodes: "รับรหัส",
    homeLabel: `${site.name} – หน้าแรก ${site.domain}`,
    language: "ภาษา",
    footerAbout:
      "รหัสแนะนำที่ตรวจสอบแล้วของกระดานเทรดคริปโตรายใหญ่ที่สุด พร้อมโบนัสต้อนรับและเงินคืนค่าธรรมเนียมสำหรับ Spot และ Futures ข้อมูลชัดเจนจากแหล่งข้อมูลทางการ",
    referralCodes: "รหัสแนะนำ",
    referralCodeOf: (name) => `รหัสแนะนำ ${name}`,
    alternatives: "ทางเลือก",
    alternativesOf: (name) => `ทางเลือกแทน ${name}`,
    guides: "คู่มือ",
    comparisons: "เปรียบเทียบกระดานเทรด",
    howCodesWork: "รหัสแนะนำทำงานอย่างไร",
    faq: "คำถามที่พบบ่อย",
    about: "เกี่ยวกับเราและวิธีตรวจสอบข้อมูล",
    legal: "ข้อกฎหมาย",
    imprint: "ข้อมูลผู้ดูแลเว็บไซต์",
    privacy: "นโยบายความเป็นส่วนตัว",
    disclosure: "การเปิดเผยลิงก์ Affiliate",
    cookieSettings: "ตั้งค่าคุกกี้",
    risk: (
      <>
        <strong>คำเตือนความเสี่ยง:</strong> การเทรดอนุพันธ์คริปโตด้วยเลเวอเรจมีความเสี่ยงสูงมาก และอาจสูญเสียเงินฝากทั้งหมด
        เทรดด้วยเงินที่ยอมเสียได้เท่านั้น เนื้อหาบนเว็บไซต์นี้ไม่ใช่คำแนะนำด้านการเงิน การลงทุน หรือภาษี
      </>
    ),
    affiliate: (
      <>
        <strong>การเปิดเผยลิงก์ Affiliate:</strong> ลิงก์บางส่วนเป็นลิงก์แนะนำ หากสมัครผ่านลิงก์แนะนำ เราอาจได้รับค่าคอมมิชชันโดยคุณไม่ต้องจ่ายเพิ่ม
        ค่าคอมมิชชันไม่มีผลต่อข้อมูลที่เราเผยแพร่ ชื่อและโลโก้ของกระดานเทรดเป็นเครื่องหมายการค้าของเจ้าของแต่ละราย{" "}
        {site.name} ไม่มีส่วนเกี่ยวข้องกับเจ้าของเครื่องหมายการค้า และไม่ได้รับการรับรองจากเจ้าของรายใด
      </>
    ),
  },

  consent: {
    label: "ความยินยอมให้วิเคราะห์การใช้งาน",
    text: (privacyHref) => (
      <>
        <strong>การวิเคราะห์การใช้งาน คุณเป็นผู้เลือก</strong> เราต้องการใช้ Google Analytics เพื่อดูว่ามีคนอ่านหน้าใดบ้าง Google Analytics
        ตั้งคุกกี้และส่งข้อมูลการใช้งานไปยัง Google โดยจะเริ่มทำงานเมื่อคุณอนุญาตเท่านั้น ไม่ว่าจะเลือกแบบใด เว็บไซต์นี้ไม่ใช้คุกกี้โฆษณา รายละเอียด:{" "}
        <Link href={privacyHref}>นโยบายความเป็นส่วนตัว</Link>
      </>
    ),
    decline: "ปฏิเสธ",
    allow: "อนุญาตการวิเคราะห์",
  },

  notFound: {
    title: "ไม่พบหน้านี้",
    text: "รหัสแนะนำที่คุณกำลังหาอาจย้ายไปที่อื่นแล้ว ลองเลือกจากรายการด้านล่าง:",
    back: "กลับไปหน้าแรก",
  },

  og: {
    footer: ["ลิงก์ตรวจสอบแล้ว", "ค่าธรรมเนียมและข้อมูล", "แหล่งข้อมูลทางการ"],
    homeAlt: "RefCo – รหัสแนะนำกระดานเทรดคริปโตที่ตรวจสอบแล้ว",
    homeKicker: (monthYear) => `อัปเดตเดือน${monthYear}`,
    homeTitle: "รหัสแนะนำกระดานเทรดคริปโต ตรวจสอบแล้ว",
    exchangeAlt: "รหัสแนะนำ ทางเลือก และการเปรียบเทียบกระดานเทรดคริปโต – RefCo",
    exchangeKicker: (monthYear) => `ตรวจสอบเมื่อเดือน${monthYear}`,
    exchangeTitle: (e) => `รหัสแนะนำ ${e.name}`,
    exchangeSubtitle: (e) => `${benefit(e)} · Spot และ Futures ในลิงก์เดียว`,
    versusBadge: "เปรียบเทียบตัวต่อตัว",
    versusSubtitle: (feesA, feesB, leverageA, leverageB) =>
      `ค่าธรรมเนียม Futures ${feesA} vs ${feesB} · เลเวอเรจ ${leverageA}x vs ${leverageB}x · KYC ประเทศ และโบนัส`,
  },

  blocks: {
    signUpOn: (name) => `สมัคร ${name}`,
    signUp: "สมัครเลย",
    details: "รายละเอียด",
    breadcrumb: "ลำดับหน้า",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว ✓",
    spotMakerTaker: "Spot Maker / Taker",
    futuresMakerTaker: "Futures Maker / Taker",
    maxLeverage: "เลเวอเรจสูงสุด",
    since: "ก่อตั้ง",
    tableCaption: "เปรียบเทียบกระดานเทรดคริปโตตามข้อเสนอสำหรับผู้ใช้ใหม่ ค่าธรรมเนียม Spot และ Futures เลเวอเรจ และข้อมูลตลาด",
    exchange: "กระดานเทรด",
    newUserOffer: "ข้อเสนอสำหรับผู้ใช้ใหม่",
    futuresFees: "ค่าธรรมเนียม Futures (Maker / Taker)",
    spotFees: "ค่าธรรมเนียม Spot",
    openInterest: "Open Interest",
    markets: "จำนวนตลาด",
    action: "การดำเนินการ",
  },

  /* ------------------------------------ Home page ------------------------------------ */
  home: {
    title: (monthYear) => `รหัสแนะนำกระดานเทรดคริปโต (${monthYear}): โบนัส Spot และ Futures`,
    description: (monthYear) =>
      `รหัสแนะนำที่ตรวจสอบแล้วของ Binance, OKX, Bybit, Bitget, Gate, KuCoin และ MEXC รับโบนัสผู้ใช้ใหม่และเงินคืนค่าธรรมเนียม Spot และ Futures ด้วยลิงก์เดียว อัปเดตเดือน${monthYear}`,
    listName: "รหัสแนะนำกระดานเทรดคริปโตสำหรับ Spot และ Futures",
    updated: (monthYear) => `อัปเดตเดือน${monthYear}`,
    h1: (
      <>
        รหัสแนะนำกระดานเทรดคริปโตที่<span className="hl">ตรวจสอบแล้ว</span> พร้อมคำอธิบายครบ
      </>
    ),
    lead: (
      <>
        รับโบนัสต้อนรับและเงินคืนค่าธรรมเนียมบนกระดานเทรดคริปโตที่ใหญ่ที่สุดในโลก ด้วยรหัสแนะนำเดียวที่ใช้ได้ทั้ง Spot <em>และ</em> Futures
        พร้อมข้อมูลที่ต้องใช้ในการเลือก ได้แก่ ค่าธรรมเนียม เลเวอเรจ ใบอนุญาต และข้อดีข้อเสียที่บอกตามจริง
      </>
    ),
    browse: "ดูรหัสแนะนำ",
    seeBenefits: "ดูสิทธิประโยชน์ของคุณ",
    trust: (date) => [`ตรวจสอบเมื่อ ${date}`, "ใช้เฉพาะลิงก์ทางการ", "วิเคราะห์การใช้งานเมื่อคุณยินยอมเท่านั้น"],
    featured: "กระดานเทรดแนะนำ",
    ticketName: (name) => `รหัสแนะนำ ${name}`,
    ticketTag: "SPOT + FUTURES",
    stats: ["กระดานเทรด Spot และ Futures ชั้นนำ", "Open Interest รวม", "ตลาดอนุพันธ์ที่ครอบคลุม", "ค่าธรรมเนียม Maker ต่ำที่สุด (MEXC)"],
    marketData: (date) => `ข้อมูลตลาด: อันดับตลาดอนุพันธ์ของ CoinMarketCap ณ วันที่ ${date}`,

    benefitsEyebrow: "สิทธิประโยชน์ของคุณ",
    benefitsTitle: `ทำไมต้องสมัครด้วยรหัสแนะนำจาก ${site.name}?`,
    benefitsLead: "กระดานเทรดเดิม ค่าธรรมเนียมเท่าเดิม แต่ได้สิทธิ์สำหรับผู้ใช้ใหม่ที่จะพลาดไปหากสมัครเองโดยตรง",
    benefits: [
      {
        title: "โบนัสต้อนรับ",
        text: "ปลดล็อกข้อเสนอสำหรับผู้ใช้ใหม่ของกระดานเทรด ทั้งเวาเชอร์คืนค่าธรรมเนียม โบนัส Futures และรางวัลจากภารกิจ มูลค่าสูงสุดหลายพัน USDT",
      },
      {
        title: "ค่าธรรมเนียมการเทรดต่ำลง",
        text: "บนกระดานเทรดที่เปิดให้ทำได้ ค่าคอมมิชชันจากการแนะนำส่วนหนึ่งจะกลับมาหาคุณเป็นเงินคืนค่าธรรมเนียมในทุกการเทรด",
      },
      {
        title: "Spot และ Futures ในลิงก์เดียว",
        text: "รหัสแนะนำผูกกับบัญชี จึงใช้ได้ทั้ง Spot, Futures, Margin และ Options ไม่ต้องมีรหัสที่สอง",
      },
      { title: "ไม่มีค่าใช้จ่ายเพิ่ม", text: "รหัสแนะนำไม่ทำให้ค่าธรรมเนียมสูงขึ้นเลย คุณได้อย่างเดียว เพราะกระดานเทรดเป็นผู้จ่ายค่าโปรแกรมแนะนำเพื่อน" },
      { title: "หน้าสมัครทางการ", text: "ทุกลิงก์เปิดเว็บไซต์ของกระดานเทรดเอง ไม่มีคนกลาง และเราไม่ได้รับข้อมูลใดของคุณ" },
      {
        title: "ใช้ตอนสมัครดีที่สุด",
        text: "บางกระดานเทรดให้เพิ่มรหัสได้ภายใน 30 วัน บางแห่งไม่ให้เพิ่มเลย ใช้ลิงก์ก่อนสร้างบัญชีแล้วจะไม่พลาดไม่ว่าจะเป็นกระดานเทรดใด",
      },
    ],
    offersCaption: "ข้อเสนอสำหรับผู้ใช้ใหม่ของแต่ละกระดานเทรด",
    offersHead: ["กระดานเทรด", "ข้อเสนอสำหรับผู้ใช้ใหม่ผ่านรหัสแนะนำ", "ลิงก์เดียวใช้ได้กับ"],
    claim: "รับสิทธิ์",
    offersNote: (date) =>
      `ตรวจสอบข้อเสนอเมื่อ ${date} รางวัลต้อนรับได้จากการทำภารกิจ ต้องยืนยันตัวตน และแตกต่างกันไปตามภูมิภาค โดยเงื่อนไขปัจจุบันแสดงอยู่ในหน้าสมัครของแต่ละกระดานเทรด`,

    exchangesEyebrow: "รหัสแนะนำ",
    exchangesTitle: "เลือกกระดานเทรด",
    exchangesLead: "แต่ละหน้าอธิบายรหัสแนะนำ ค่าธรรมเนียม และกระดานเทรดนั้นเหมาะกับใคร เพื่อให้สมัครครั้งเดียวบนแพลตฟอร์มที่ใช่",
    sideBySide: "เทียบกันแบบเคียงข้าง",
    notSure: "ยังเลือกไม่ได้?",
    notSureText: (count) => `เทียบค่าธรรมเนียม เลเวอเรจ และ Open Interest ของกระดานเทรดทั้ง ${count} แห่งในตารางเดียว`,
    compareExchanges: "เปรียบเทียบกระดานเทรด",

    compareTitle: "เปรียบเทียบกระดานเทรดคริปโต: Spot และ Futures",
    compareLead: "ข้อเสนอสำหรับผู้ใช้ใหม่ ค่าธรรมเนียม Spot และ Futures ระดับมาตรฐาน (ไม่ใช่ VIP) เลเวอเรจ และความลึกของตลาดในตารางเดียว",
    compareNote: (reviewed, market) =>
      `ค่าธรรมเนียม: ระดับมาตรฐานตามที่แต่ละกระดานเทรดประกาศ ตรวจสอบเมื่อ ${reviewed} Open Interest และจำนวนตลาด: CoinMarketCap ณ วันที่ ${market} ค่าธรรมเนียมเปลี่ยนแปลงได้ ตรวจสอบกับกระดานเทรดอีกครั้งก่อนเทรด`,
    versusStrip: {
      title: "เปรียบเทียบกระดานเทรดแบบตัวต่อตัว",
      text: (pairs, hubHref) => (
        <>
          การเปรียบเทียบตัวต่อตัว {pairs} คู่ วางค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ ประเทศ KYC และข้อเสนอรหัสแนะนำไว้เคียงกัน{" "}
          <Link href={hubHref}>ดูการเปรียบเทียบกระดานเทรดทั้งหมด</Link>
        </>
      ),
    },
    alternativesStrip: {
      title: "กำลังหาทางเลือกแทนกระดานเทรดที่ใช้อยู่?",
      text: (others) =>
        `แต่ละหน้าเทียบกระดานเทรดหนึ่งแห่งกับอีก ${others} แห่ง ทั้งค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ การยืนยันตัวตน และประเทศที่รับสมัคร`,
    },

    picksEyebrow: "สรุปสั้น ๆ",
    picksTitle: "กระดานเทรดไหนเหมาะกับคุณที่สุด?",
    picks: [
      { label: "สภาพคล่องสูงที่สุด", slug: "binance", why: "Open Interest และปริมาณการซื้อขาย Futures สูงที่สุดในโลก" },
      {
        label: "ค่าธรรมเนียมต่ำและมี Options",
        slug: "okx",
        why: "Spot 0.08% / 0.10% Options 0.03% และ Proof of Reserves (หลักฐานการสำรองสินทรัพย์) ทุกเดือน",
      },
      { label: "เทรด Futures บนมือถือเป็นประจำ", slug: "bybit", why: "ระบบจับคู่คำสั่งเร็ว และเป็นหนึ่งในแอปเทรดที่ดีที่สุด" },
      { label: "Copy Trading", slug: "bitget", why: "คัดลอกการเทรดของเทรดเดอร์ Futures ที่มีประสบการณ์ได้อัตโนมัติ" },
      { label: "Altcoin มากที่สุด", slug: "gate", why: "สินทรัพย์ 5,400+ รายการ และ Futures ของโทเคนเฉพาะกลุ่ม" },
      { label: "บอทเทรด", slug: "kucoin", why: "บอทเทรดฟรีสำหรับ Spot และ Futures" },
      { label: "ค่าธรรมเนียมต่ำที่สุด", slug: "mexc", why: "ค่าธรรมเนียม Maker 0% สำหรับ Spot และสัญญา Futures ส่วนใหญ่" },
    ],

    howEyebrow: "วิธีใช้งาน",
    howTitle: "ใช้รหัสแนะนำในสามขั้นตอน",
    steps: [
      { title: "เลือกกระดานเทรด", text: "เทียบค่าธรรมเนียม เลเวอเรจ และฟีเจอร์ด้านบน แล้วเปิดหน้าของกระดานเทรดที่เข้ากับสไตล์การเทรดของคุณ" },
      {
        title: "สมัครผ่านลิงก์ของเรา",
        text: "ระบบผูกรหัสแนะนำให้อัตโนมัติ สมัครด้วยอีเมลหรือเบอร์โทรศัพท์ก่อนสร้างบัญชีที่อื่น",
      },
      {
        title: "ยืนยันตัวตนและรับรางวัล",
        text: "ยืนยันตัวตน (KYC) ให้เสร็จ ป้องกันบัญชีด้วย 2FA แล้วตรวจดูรางวัลต้อนรับที่แสดงในแดชบอร์ด",
      },
    ],

    trustEyebrow: `ทำไมต้อง ${site.name}`,
    trustTitle: "สร้างเพื่อความน่าเชื่อถือ ไม่ใช่ยอดคลิก",
    trustCards: [
      { title: "ข้อเสนอที่ตรวจสอบแล้ว", text: "เราตรวจสอบข้อเสนอสำหรับผู้ใช้ใหม่ของแต่ละกระดานเทรด และลงเฉพาะสิ่งที่รับได้จริง" },
      { title: "ข้อมูลใหม่ ระบุวันที่", text: "เราตรวจสอบค่าธรรมเนียม เลเวอเรจ และใบอนุญาตซ้ำเป็นประจำ และทุกหน้าแสดงวันที่ตรวจสอบ" },
      { title: "ความเป็นส่วนตัวมาก่อน", text: "ไม่มีพิกเซลโฆษณาและไม่มีคุกกี้โฆษณา ระบบวิเคราะห์ทำงานเมื่อคุณอนุญาตเท่านั้น" },
      { title: "เร็วและชัดเจน", text: "หน้าเว็บน้ำหนักเบาที่โหลดทันทีบนมือถือทุกรุ่น คำตอบมาก่อน รายละเอียดตามมา" },
      { title: "ข้อดีข้อเสียตามจริง", text: "เราระบุจุดอ่อน เหตุการณ์ที่เคยเกิดขึ้น และข้อจำกัดตามภูมิภาค ไม่ใช่แค่คำโฆษณา" },
      { title: "ความเสี่ยงต้องมาก่อน", text: "เลเวอเรจทำให้เงินฝากหมดได้อย่างรวดเร็ว เราบอกเรื่องนี้ชัดเจนในทุกหน้า" },
    ],

    faqEyebrow: "คำถามที่พบบ่อย",
    faqTitle: "รหัสแนะนำ – คำถามที่พบบ่อย",
    faqs: (reviewed) => [
      {
        q: "รหัสแนะนำกระดานเทรดคริปโตคืออะไร?",
        a: "รหัสแนะนำ (หรือที่เรียกว่าโค้ดแนะนำ รหัสเชิญ หรือ Referral ID) คือรหัสสั้น ๆ ที่เชื่อมบัญชีใหม่บนกระดานเทรดกับบุคคลหรือเว็บไซต์ที่แนะนำ กระดานเทรดใช้รหัสนี้ให้รางวัลทั้งสองฝ่าย โดยผู้ใช้ใหม่มักได้รับรางวัลต้อนรับหรือส่วนลดค่าธรรมเนียมการเทรด ส่วนผู้แนะนำได้รับส่วนแบ่งจากค่าธรรมเนียม",
      },
      {
        q: "ใช้รหัสแนะนำแล้วได้ประโยชน์อะไรบ้าง?",
        a: "ผู้ใช้ใหม่ที่สมัครผ่านรหัสแนะนำจะได้สิทธิ์ในข้อเสนอสำหรับผู้ใช้ใหม่ของกระดานเทรด เช่น รางวัลจากการแนะนำสูงสุด 250 USDT บน Bybit หรือรางวัลผู้ใช้ใหม่สูงสุด 10,000 USDT บน MEXC และหากผู้แนะนำแบ่งค่าคอมมิชชัน ก็จะได้ค่าธรรมเนียมการเทรดคืนส่วนหนึ่ง เช่น 10% เป็นเวลาหนึ่งปีบน Gate ทั้งหมดนี้ไม่มีค่าใช้จ่ายเพิ่ม",
      },
      {
        q: "รหัสแนะนำเดียวใช้กับทั้งการเทรด Spot และ Futures ได้ไหม?",
        a: "ได้ บน Binance, OKX, Bybit, Bitget, Gate, KuCoin และ MEXC รหัสแนะนำผูกกับบัญชี ไม่ได้ผูกกับผลิตภัณฑ์ใดผลิตภัณฑ์หนึ่ง สมัครครั้งเดียวก็ครอบคลุมทั้งการเทรด Spot และ Futures รวมถึง Margin, Options หรือ Copy Trading บนกระดานเทรดที่มีผลิตภัณฑ์นั้น",
      },
      {
        q: "สมัครด้วยรหัสแนะนำแล้วต้องจ่ายแพงขึ้นไหม?",
        a: "ไม่ต้อง สมัครผ่านลิงก์แนะนำไม่ทำให้ค่าธรรมเนียมสูงขึ้นเลย และยังอาจได้ส่วนลดค่าธรรมเนียมหรือโบนัสต้อนรับที่จะไม่ได้รับหากสมัครโดยไม่มีรหัสแนะนำ ทั้งนี้ขึ้นอยู่กับกระดานเทรดและภูมิภาคของคุณ",
      },
      {
        q: "สมัครไปแล้ว เพิ่มรหัสแนะนำทีหลังได้ไหม?",
        a: "ขึ้นอยู่กับกระดานเทรด Binance ให้ผูกรหัสได้ภายใน 30 วันหลังสมัคร หากยังไม่ได้ฝากเงินหรือเทรด และ MEXC ให้ผูกผู้แนะนำเองได้ภายใน 30 วันหลังสมัคร KuCoin มีคำขอ “Link Referrer” (ผูกผู้แนะนำ) ในศูนย์ช่วยเหลือ ส่วน Bybit, OKX และ Bitget รับรหัสเฉพาะตอนสมัคร และ Gate ไม่ได้ระบุวิธีเพิ่มรหัสภายหลัง วิธีที่ปลอดภัยคือใช้ลิงก์ก่อนสร้างบัญชี",
      },
      {
        q: "กระดานเทรดคริปโตไหนค่าธรรมเนียม Futures ต่ำที่สุด?",
        a: `จากการตรวจสอบครั้งล่าสุด (${reviewed}) MEXC มีค่าธรรมเนียม Futures มาตรฐานต่ำที่สุด คือ Maker 0% และ Taker 0.02% สำหรับ BTCUSDT ส่วน Binance, OKX และ Gate คิด Maker 0.02% / Taker 0.05% ในระดับมาตรฐาน Bybit คิด 0.02% / 0.055% และ Bitget กับ KuCoin คิด 0.02% / 0.06%`,
      },
      {
        q: "กระดานเทรดไหนดีที่สุดสำหรับอนุพันธ์คริปโต?",
        a: "ขึ้นอยู่กับสิ่งที่คุณเทรด Binance มีสภาพคล่องสูงที่สุด OKX มีค่าธรรมเนียมต่ำควบคู่กับ Options Bybit สร้างมาเพื่อเทรดสัญญา Perpetual อย่างรวดเร็ว Bitget เหมาะกับ Copy Trading Gate เหมาะกับ Futures ของ Altcoin KuCoin เหมาะกับบอทเทรด และ MEXC เหมาะกับผู้ที่ต้องการค่าธรรมเนียมต่ำที่สุด",
      },
      {
        q: "กระดานเทรดในหน้านี้ใช้ในสหรัฐอเมริกาได้ไหม?",
        a: "ส่วนใหญ่ไม่ได้ Binance, Bybit, Bitget, Gate, KuCoin และ MEXC ระบุสหรัฐอเมริกาเป็นประเทศที่ถูกจำกัดหรือต้องห้าม และ OKX จำกัดการใช้งานในบางเขตอำนาจของสหรัฐอเมริกา การให้บริการในสหราชอาณาจักร แคนาดา และสหภาพยุโรป (EU) ก็แตกต่างกันไป หน้าของแต่ละกระดานเทรดแสดงรายชื่อประเทศที่ถูกจำกัดตามข้อกำหนดของกระดานเทรดนั้นเอง",
      },
      {
        q: "ข้อมูลในหน้านี้อัปเดตบ่อยแค่ไหน?",
        a: `เราตรวจสอบค่าธรรมเนียม เลเวอเรจ ใบอนุญาต และข้อมูลตลาดซ้ำเป็นประจำ ทุกหน้าแสดงวันที่ตรวจสอบล่าสุด ข้อมูลปัจจุบันตรวจสอบเมื่อวันที่ ${reviewed}`,
      },
    ],
    countryFaq: null,

    ctaTitle: "รับโบนัสต้อนรับ",
    ctaText: "เลือกกระดานเทรด สมัครด้วยรหัสแนะนำที่ตรวจสอบแล้ว แล้วเทรดทั้ง Spot และ Futures ในบัญชีเดียว",
    ctaButton: "ดูรหัสแนะนำทั้งหมด",
  },

  /* ------------------------------- Exchange (referral-code) page ------------------------------- */
  exchange: {
    title: (e, shortMonthYear) => `รหัสแนะนำ ${withReading(e, "th")} ${e.referralCode} (${shortMonthYear}): ${benefit(e)}`,
    description: (e, monthYear) =>
      `รหัสแนะนำ ${e.name}: ${e.referralCode} ${benefit(e)} พร้อมจุดที่ต้องกรอกรหัส ขั้นตอนสมัคร KYC และค่าธรรมเนียม ตรวจสอบเมื่อเดือน${monthYear}`,
    keywords: (e) => {
      const same = (k: string) => k.toLowerCase().replace(/\s/g, "");
      const reading = readingOf(e.slug, "th");
      const spelling = keywordSpellings[e.slug];
      return [
        `รหัสแนะนำ ${e.name}`,
        `รหัสแนะนำ ${e.name} ${e.referralCode}`,
        ...(reading ? [`รหัสแนะนำ ${reading}`, `โค้ดแนะนำ ${reading}`] : []),
        ...(spelling ? [`รหัสแนะนำ ${spelling}`] : []),
        `โค้ดแนะนำ ${e.name}`,
        `รหัสเชิญ ${e.name}`,
        `รหัสอ้างอิง ${e.name}`,
        `รหัสผู้แนะนำ ${e.name}`,
        `${e.name} referral code`,
        `${e.name} referral id`,
        `ลิงก์แนะนำ ${e.name}`,
        `วิธีใส่รหัสแนะนำ ${e.name}`,
        `วิธีสมัคร ${e.name}`,
        `เปิดบัญชี ${e.name}`,
        `ยืนยันตัวตน ${e.name} (KYC)`,
        `โบนัสต้อนรับ ${e.name}`,
        `โบนัสผู้ใช้ใหม่ ${e.name}`,
        `โบนัสสมัครใหม่ ${e.name}`,
        `ค่าธรรมเนียม ${e.name}`,
        `ค่าฟี ${e.name}`,
        `ค่าธรรมเนียม Futures ของ ${e.name}`,
      ].filter((k, i, all) => all.findIndex((x) => same(x) === same(k)) === i);
    },
    toc: {
      "code-facts": "สรุปข้อมูลรหัส",
      benefits: "สิทธิประโยชน์ของคุณ",
      "use-code": "วิธีใช้รหัส",
      "how-to": "วิธีสมัคร",
      verification: "การยืนยันตัวตน (KYC)",
      "key-facts": "ข้อมูลสำคัญ",
      fees: "ค่าธรรมเนียม",
      about: "เกี่ยวกับกระดานเทรด",
      "pros-cons": "ข้อดีและข้อเสีย",
      "best-for": "เหมาะกับใคร",
      safety: "ความปลอดภัยและประเทศที่ให้บริการ",
      faq: "คำถามที่พบบ่อย",
      sources: "แหล่งข้อมูล",
      alternatives: "ทางเลือกและการเปรียบเทียบ",
    },
    onThisPage: "ในหน้านี้",
    crumbHome: "หน้าแรก",
    crumbCodes: "รหัสแนะนำ",
    crumbPage: (e) => `รหัสแนะนำ ${e.name}`,

    /* JSON-LD */
    offerName: (e) => `รหัสแนะนำ ${e.name} ${e.referralCode}`,
    offerDescription: (e) => `${benefit(e)} รหัสแนะนำเดียวใช้ได้กับ ${list(e.referralCovers)}`,
    offerCategory: "การสมัครกระดานเทรดคริปโต",
    howToName: (e) => `วิธีสมัคร ${e.name} ด้วยรหัสแนะนำ ${e.referralCode}`,
    howToDescription: (e) => `ขั้นตอนสมัคร ${e.name} ตามที่กระดานเทรดระบุไว้ รวมถึงจุดที่ต้องกรอกรหัสแนะนำ ${e.referralCode}`,

    /* Hero */
    updated: (date) => `ตรวจสอบและอัปเดตเมื่อ ${date}`,
    h1: (e) => `รหัสแนะนำ ${withReading(e, "th")}: ${e.referralCode}`,
    lead: (e) => (
      <>
        <strong>{benefit(e)}</strong> พร้อมรหัสแนะนำเดียวที่ใช้ได้กับ {list(e.referralCovers)} หน้านี้สรุปว่าคุณจะได้อะไร เทรดแล้วเสียค่าธรรมเนียมเท่าไร
        และ {withReading(e, "th")} เหมาะกับคุณแค่ไหน
      </>
    ),
    quickAnswer: "สรุปสั้น ๆ",
    highlights: "ข้อมูลเด่น",
    chips: (e) => [
      `Spot ${e.spotFees.maker} / ${e.spotFees.taker}`,
      `Futures ${e.futuresFees.maker} / ${e.futuresFees.taker}`,
      glue("เลเวอเรจ", shortLeverage(e)),
      `ตลาดอนุพันธ์ ${e.market.markets} ตลาด`,
      `ก่อตั้งปี ${e.founded}`,
    ],

    /* Sign-up box */
    yourSignup: (e) => `สมัครบัญชี ${e.name}`,
    appliedByLink: "ลิงก์นี้ผูกรหัสแนะนำให้อัตโนมัติ",
    goesToOfficial: (domain) => `ลิงก์ไปยังเว็บไซต์ทางการ ${domain} โดยตรง`,
    codeLabel: "รหัสแนะนำ",
    noCodeToType: "ไม่ต้องพิมพ์รหัส ระบบผูกให้ผ่านลิงก์",
    officialSite: (domain) => `เว็บไซต์ทางการ: ${domain}`,
    yourBenefits: "สิทธิประโยชน์ของคุณ",
    freeNeverRaises: "ฟรี รหัสแนะนำไม่ทำให้ค่าธรรมเนียมสูงขึ้น",
    qrLabel: (e) => `QR Code: สมัครบนแอป ${e.name} ด้วยรหัสแนะนำ ${e.referralCode}`,
    preferApp: "ใช้แอปสะดวกกว่า?",
    scan: (e) => (
      <>
        สแกนด้วยกล้องมือถือเพื่อเปิด {e.name}
        {e.referralCode ? (
          <>
            {" "}
            พร้อมรหัสแนะนำ <strong>{e.referralCode}</strong>
          </>
        ) : null}{" "}
        ใช้ได้ทั้ง iOS และ Android
      </>
    ),
    riskLine: (e, links) => (
      <>
        การเทรดด้วยเลเวอเรจมีความเสี่ยงสูง {e.name} ไม่ได้เปิดให้บริการในทุกประเทศ ดู<a href="#safety">ประเทศที่ให้บริการ</a> หรือ
        <Link href={links.alternatives}>ทางเลือกแทน {e.name}</Link>
      </>
    ),

    /* Code at a glance */
    codeFactsTitle: (e) => `รหัสแนะนำ ${e.name} ${e.referralCode} โดยสรุป`,
    codeFactsIntro: (e, monthYear, date) => (
      <>
        รหัสแนะนำ (โค้ดแนะนำ) {e.name} สำหรับเดือน{monthYear} คือ <strong>{e.referralCode}</strong> ตารางด้านล่างสรุปว่ารหัสนี้ให้อะไร ต้องกรอกที่ไหน
        และ {e.name} กำหนดอะไรบ้างสำหรับบัญชีใหม่ ทุกบรรทัดตรวจกับหน้าเว็บของ {e.name} เองเมื่อวันที่ {date}
      </>
    ),
    codeFactsCaption: (e) => `รหัสแนะนำ ${e.name} ${e.referralCode}: ข้อมูลสำคัญ`,
    codeFacts: (e, date) => [
      [`รหัสแนะนำ ${e.name}`, <strong key="code">{e.referralCode}</strong>],
      [`ชื่อที่ ${e.name} ใช้`, e.referral.codeName],
      ["สิทธิประโยชน์สำหรับผู้ใช้ใหม่", benefit(e)],
      ["ใส่รหัสตรงไหน", e.referral.whereShort],
      ["เพิ่มหลังสมัครได้ไหม?", e.referral.afterSignupShort],
      ["ใช้ได้กับ", list(e.referralCovers)],
      ["การยืนยันตัวตน (KYC)", e.signup.kycShort],
      ["ค่าใช้จ่าย", "ฟรี ไม่ทำให้ค่าธรรมเนียมสูงขึ้น"],
      ["ตรวจสอบล่าสุด", date],
    ],

    /* Benefits */
    benefitsTitle: (e) => `สิทธิประโยชน์เมื่อใช้รหัสแนะนำ ${e.name}`,
    benefitsIntro: (e) => (
      <>
        สมัครด้วยรหัสแนะนำ {e.name} <strong>{e.referralCode}</strong> ไม่มีค่าใช้จ่ายเพิ่ม ด้านล่างคือข้อเสนอที่ {e.name} มอบให้บัญชีใหม่ในตอนนี้
        รหัสเดียวกันใช้ได้กับ <strong>{list(e.referralCovers)}</strong> ไม่ต้องมีรหัสแยกสำหรับ Spot และ Futures
      </>
    ),
    offerChecked: (date) => `ข้อเสนอสำหรับผู้ใช้ใหม่ · ตรวจสอบเมื่อ ${date}`,
    appliedWhenRegistering: "ได้รับเมื่อสมัครผ่านรหัสแนะนำนี้",
    noExtraCost: "ไม่มีค่าใช้จ่ายเพิ่ม รหัสแนะนำไม่ทำให้ค่าธรรมเนียมการเทรดสูงขึ้น",
    oneReferralCovers: "รหัสแนะนำเดียวใช้ได้กับ:",
    claimOffer: (e) => `รับข้อเสนอสำหรับผู้ใช้ใหม่ของ ${e.name}`,
    tasksTitle: (e) => `ข้อเสนอสำหรับผู้ใช้ใหม่ของ ${e.name}: ภารกิจและรางวัล`,
    tasksCaption: (e) => `ภารกิจสำหรับผู้ใช้ใหม่ของ ${e.name} และรางวัลของแต่ละภารกิจ`,
    task: "ภารกิจ",
    reward: "รางวัล",
    tasksNote: (e, date) =>
      `ตามที่ ${e.name} ระบุไว้เมื่อวันที่ ${date} ข้อเสนอแตกต่างกันในแต่ละประเทศและเปลี่ยนบ่อย เงื่อนไขที่ใช้จริงคือเงื่อนไขที่แสดงในบัญชีหลังสมัคร`,

    /* How to use the code */
    useCodeTitle: (e) => `วิธีใช้รหัสแนะนำ ${e.name} ${e.referralCode}`,
    whereToEnter: (e) => `ใส่รหัสแนะนำ ${e.name} ตรงไหน?`,
    forgotCode: "ลืมใส่รหัส? เพิ่มรหัสหลังสมัคร",
    asInvited: "สิ่งที่ได้รับในฐานะผู้ถูกแนะนำ",
    interfaceNote: (e) => (
      <>ชื่อช่องและปุ่มในเครื่องหมายคำพูดมาจากหน้าเว็บภาษาอังกฤษของ {e.name} ที่เราตรวจสอบ ในเวอร์ชันภาษาไทยอาจใช้ชื่อต่างออกไป</>
    ),

    /* Registration */
    howToTitle: (e) => `วิธีสมัคร ${e.name} ทีละขั้นตอน`,
    howToIntro: (e) => (
      <>
        {e.name} {glue("เปิดให้สร้างบัญชีด้วย", orList(e.signup.methods))} ด้านล่างคือขั้นตอนตามที่ {e.name} อธิบายไว้ พร้อมจุดที่ต้องใช้รหัสแนะนำ{" "}
        <strong>{e.referralCode}</strong>
      </>
    ),
    startRegistration: (e) => `เริ่มสมัคร ${e.name}`,

    /* Verification */
    kycTitle: (e) => `ยืนยันตัวตน ${e.name} (KYC)`,
    verification: "การยืนยันตัวตน",
    minAge: "อายุขั้นต่ำ",
    documents: "เอกสารที่ใช้ได้",

    /* Key facts */
    factsTitle: (e) => `ภาพรวม ${e.name}`,
    founded: "ก่อตั้ง",
    headquarters: "สำนักงานใหญ่",
    futuresFees: "ค่าธรรมเนียม Futures (Maker / Taker)",
    spotFees: "ค่าธรรมเนียม Spot (Maker / Taker)",
    maxLeverage: "เลเวอเรจสูงสุด",
    assets: "สินทรัพย์",
    openInterest: "Open Interest (สถานะคงค้าง)",
    volume24h: "ปริมาณการซื้อขายอนุพันธ์ 24 ชั่วโมง",
    users: "ผู้ใช้",
    regulation: "การกำกับดูแล",
    factsNote: (date) =>
      `Open Interest ปริมาณการซื้อขาย และจำนวนตลาด: อันดับตลาดอนุพันธ์ของ CoinMarketCap ณ วันที่ ${date} ค่าธรรมเนียม: ระดับมาตรฐาน ณ วันที่ตรวจสอบ`,

    /* Fees */
    feesTitle: (e) => `ค่าธรรมเนียม ${e.name} คิดอย่างไร?`,
    feesIntro: (e) =>
      `${e.name} ใช้โมเดล Maker / Taker โดยคำสั่งที่เพิ่มสภาพคล่องเข้าไปใน Order Book (คำสั่ง Limit) จ่ายค่าธรรมเนียม Maker ส่วนคำสั่งที่ดึงสภาพคล่องออกไป (คำสั่ง Market) จ่ายค่าธรรมเนียม Taker อัตราจะลดลงเมื่อปริมาณการซื้อขายย้อนหลัง 30 วันหรือยอดสินทรัพย์ที่ถือเพิ่มขึ้น`,
    market: "ตลาด",
    maker: "Maker",
    taker: "Taker",
    futuresRow: "Futures / สัญญา Perpetual",
    spotRow: "Spot",
    feesNote: (e, date) => `อัตรามาตรฐาน (ไม่ใช่ VIP) ตามที่ ${e.name} ประกาศ ตรวจสอบเมื่อ ${date}`,
    funding: "Funding Rate ของสัญญา Perpetual เป็นเงินที่เทรดเดอร์จ่ายให้กันเอง ไม่ได้จ่ายให้กระดานเทรด",
    liveSchedule: (e) => `ดูตารางค่าธรรมเนียมล่าสุดของ ${e.name}`,
    feesCompare: (e, others, links) => (
      <>
        อัตรานี้เทียบกับที่อื่นเป็นอย่างไร? หน้า<Link href={`${links.alternatives}#fees`}>เปรียบเทียบทางเลือกแทน {e.name}</Link> วางค่าธรรมเนียมของ{" "}
        {e.name} ไว้เทียบกับ {list(others)}
      </>
    ),

    /* About, pros and cons, best for */
    aboutTitle: (e) => `เกี่ยวกับ ${e.name}`,
    products: "ผลิตภัณฑ์",
    prosConsTitle: (e) => `ข้อดีและข้อเสียของ ${e.name}`,
    pros: "ข้อดี",
    cons: "ข้อเสีย",
    bestForTitle: (e) => `${e.name} เหมาะกับใคร?`,
    openAccount: (e) => `เปิดบัญชี ${e.name}`,
    notAMatch: (e, count, links, pairs) => (
      <>
        ยังไม่ใช่? ดู<Link href={links.alternatives}>ทางเลือกแทน {e.name} ที่ดีที่สุด {count} แห่ง</Link> และจุดเด่นของแต่ละแห่ง หรือเปรียบเทียบ {e.name}{" "}
        แบบตัวต่อตัว: <Link href={pairs[0].href}>{pairs[0].label}</Link> และ <Link href={pairs[1].href}>{pairs[1].label}</Link>
      </>
    ),

    /* Safety */
    safetyTitle: (e) => `${e.name} ปลอดภัยไหม?`,
    availability: "ประเทศที่ให้บริการ:",
    closedWhereYouLive: (e, links) => (
      <>
        {e.name} ไม่เปิดให้บริการในประเทศที่คุณอยู่?{" "}
        <Link href={`${links.alternatives}#countries`}>ตารางประเทศในหน้าทางเลือกแทน {e.name}</Link> แสดงว่ากระดานเทรดอื่นแห่งใดรับผู้ใช้จากประเทศของคุณ
      </>
    ),

    /* FAQ */
    faqTitle: (e) => `รหัสแนะนำ ${e.name} และการสมัคร – คำถามที่พบบ่อย`,
    faqIntro: (e, count) =>
      `คำถาม ${count} ข้อเกี่ยวกับรหัสแนะนำ ${e.name} ${e.referralCode} การสร้างบัญชีและยืนยันตัวตน ข้อเสนอสำหรับผู้ใช้ใหม่ และค่าธรรมเนียม`,

    /* The English language names of the data are left out; the link shows the language as its readers write it. */
    guideLink: (label, _name, language) => (
      <>
        {label} ({language})
      </>
    ),

    /* Sources */
    sourcesTitle: "แหล่งข้อมูล: ข้อมูลในหน้านี้มาจากไหน?",
    sourcesIntro: (e, date) =>
      `ข้อมูลทั้งหมดในหน้านี้เกี่ยวกับรหัสแนะนำ การสมัคร การยืนยันตัวตน ข้อเสนอสำหรับผู้ใช้ใหม่ และค่าธรรมเนียม เราอ่านจากเว็บไซต์และศูนย์ช่วยเหลือของ ${e.name} เองเมื่อวันที่ ${date} กระดานเทรดเปลี่ยนข้อเสนอและค่าธรรมเนียมได้โดยไม่แจ้งล่วงหน้า และแสดงเงื่อนไขต่างกันในแต่ละประเทศ หน้าทางการด้านล่างจึงถือเป็นข้อมูลอ้างอิงสุดท้าย`,

    /* Alternatives */
    alternativesTitle: (e) => `ทางเลือกแทน ${e.name}`,
    alternativesIntro: (e, count, links) => (
      <>
        ไม่แน่ใจว่า {e.name} เหมาะกับคุณ? ด้านล่างคือทางเลือกที่ใกล้เคียงที่สุด แต่ละแห่งมีลิงก์สมัครพร้อมรหัสแนะนำของตัวเอง{" "}
        <Link href={links.alternatives}>การเปรียบเทียบทางเลือกแทน {e.name} ฉบับเต็ม</Link> เทียบทั้ง {count} แห่งกับ {e.name} ในด้านค่าธรรมเนียม เลเวอเรจ
        ผลิตภัณฑ์ การยืนยันตัวตน และประเทศที่ให้บริการ
      </>
    ),
    headToHeadTitle: (e) => `${e.name}: เปรียบเทียบตัวต่อตัว`,
    headToHeadIntro: (e) =>
      `กำลังตัดสินใจระหว่าง ${e.name} กับกระดานเทรดอีกแห่ง? แต่ละคู่มีหน้าเปรียบเทียบค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ ประเทศ และข้อเสนอรหัสแนะนำของตัวเอง:`,
    compareAll: (e, count) => `เปรียบเทียบทางเลือกแทน ${e.name} ทั้ง ${count} แห่ง`,
    allComparisons: "เปรียบเทียบกระดานเทรดทั้งหมด →",

    /* Risk notice and closing call to action */
    riskNotice: (disclosureHref) => (
      <>
        <strong>คำเตือนความเสี่ยง:</strong> อนุพันธ์คริปโตเป็นเครื่องมือที่ซับซ้อน เลเวอเรจขยายทั้งกำไรและขาดทุน และคุณอาจสูญเสียหลักประกันทั้งหมดได้ภายในไม่กี่นาที
        หน้านี้ให้ข้อมูลเท่านั้นและไม่ใช่คำแนะนำทางการเงิน เราอาจได้รับค่าคอมมิชชันหากคุณสมัครผ่านลิงก์ของเรา ดู
        <Link href={disclosureHref}>การเปิดเผยลิงก์ Affiliate</Link>
      </>
    ),
    joinTitle: (e) => `สมัคร ${e.name} ใน 3 นาที`,
    joinText: (e) => `${benefit(e)} รหัสแนะนำเดียวใช้ได้ทั้ง Spot และ Futures`,
  },

  /* ---------------------------- Questions every exchange page answers ---------------------------- */
  faq: {
    topics: {
      referral: (name) => `รหัสแนะนำ ${name}`,
      signup: (name) => `การสมัครและยืนยันตัวตนบน ${name}`,
      bonus: (name) => `โบนัสต้อนรับและรางวัล ${name}`,
      fees: (name) => `ค่าธรรมเนียม ${name} และการเทรด`,
      safety: () => "ความปลอดภัยและประเทศที่ให้บริการ",
    },
    common: (e) => {
      const r = e.referral;
      const s = e.signup;
      return [
        {
          topic: "referral",
          q: `รหัสแนะนำ ${e.name} คืออะไร?`,
          a: `รหัสแนะนำ ${e.name} คือ ${e.referralCode} ${r.apply} ${e.name} เองเรียกรหัสนี้ว่า ${r.codeName}`,
        },
        { topic: "referral", q: `ใส่รหัสแนะนำ ${e.name} ตรงไหน?`, a: r.whereToEnter },
        { topic: "referral", q: `สมัครไปแล้ว เพิ่มรหัสแนะนำ ${e.name} ทีหลังได้ไหม?`, a: r.afterSignup },
        { topic: "referral", q: `ใช้รหัสแนะนำ ${e.name} ${e.referralCode} แล้วได้อะไร?`, a: r.inviteeReward },
        {
          topic: "referral",
          q: `รหัสแนะนำ ${e.name} ใช้กับทั้ง Spot และ Futures ได้ไหม?`,
          a: `ได้ รหัสแนะนำผูกกับบัญชี ${e.name} ไม่ได้ผูกกับผลิตภัณฑ์ใดผลิตภัณฑ์หนึ่ง สมัครด้วย ${e.referralCode} ครั้งเดียวจึงใช้ได้กับ ${list(e.referralCovers)}`,
        },
        {
          topic: "referral",
          q: `ใช้รหัสแนะนำ ${e.name} มีค่าใช้จ่ายไหม?`,
          a: `ไม่มี กรอก ${e.referralCode} ได้ฟรีและไม่ทำให้ค่าธรรมเนียมการเทรดสูงขึ้น ${e.name} จ่ายค่าโปรแกรมแนะนำเพื่อนจากรายได้ค่าธรรมเนียมของตัวเอง`,
        },
        {
          topic: "signup",
          q: `วิธีสมัคร ${e.name} ทำอย่างไร?`,
          a: `${s.steps.map((st, i) => `${i + 1}. ${st.title.trim()}`).join(" ")} ${glue("สมัครได้ด้วย", orList(s.methods))}`,
        },
        { topic: "signup", q: `ต้องยืนยันตัวตน (KYC) บน ${e.name} ไหม?`, a: s.kyc },
        { topic: "signup", q: `${e.name} รับเอกสารอะไรบ้างสำหรับยืนยันตัวตน?`, a: s.documents },
        { topic: "signup", q: `เปิดบัญชี ${e.name} ต้องอายุเท่าไร?`, a: s.minAge },
        {
          topic: "fees",
          q: `ค่าธรรมเนียมการเทรด ${e.name} เท่าไร?`,
          a: `ในระดับมาตรฐาน ${e.name} คิดค่าธรรมเนียม Spot ที่ Maker ${e.spotFees.maker} / Taker ${e.spotFees.taker} และสัญญา Perpetual ที่ Maker ${e.futuresFees.maker} / Taker ${e.futuresFees.taker}${e.tokenDiscount ? ` ${e.tokenDiscount}` : ""} ${e.feeNote}`,
        },
        { topic: "safety", q: `${e.name} ไม่เปิดให้บริการในประเทศใดบ้าง?`, a: e.restricted },
      ];
    },
  },
};
