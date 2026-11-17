/**
 * The head-to-head pages ("/th/<a>-vs-<b>") and the comparison hub ("/th/compare") in Thai.
 * Same keys as `./en.tsx`, written natively for readers in Thailand (polite neutral written Thai, "คุณ" / "เรา").
 *
 * Wording: "กระดานเทรด" (classifier แห่ง), "ค่าธรรมเนียม", "รหัสแนะนำ", "เลเวอเรจ"; Spot, Futures, Margin, Maker / Taker,
 * Open Interest, Proof of Reserves, Copy Trading, KYC and MiCA stay in Latin letters. The pages call themselves
 * “เปรียบเทียบตัวต่อตัว”, the hub “เปรียบเทียบกระดานเทรด”; the better value of a row is “ได้เปรียบ”, a tie “เสมอกัน”.
 * Between two names the pages keep the Latin "vs"; questions say "กับ" ("Binance กับ OKX อันไหนดีกว่า?").
 * Thai has no gender, case or ending: nothing is glued to a name, and a Latin name, code or number has one space on
 * each side. A Thai sentence ends without a mark; sentences are separated by one space. Thai has no capital letters,
 * so data texts are inserted as they are (no `lcFirst`). The Thai spellings of the names ("Binance (ไบแนนซ์)") appear
 * only in the title, the H1, the first mention in the lead and the keywords.
 */
import Link from "next/link";
import type { Exchange, Faq } from "@/data/exchanges";
import type { CountryKey, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { compareText } from "@/i18n/compare";
import { addLater, altInfo as altInfoIn, feePair, leverageOf } from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { ScoreRow, ScoreSummary } from "@/lib/versus";
import { site } from "@/config/site";
import { readingOf, withReading } from "../name-readings";
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";

const locale = "th";
const ct = compareText(locale);
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const { advantages, feeSentence, names } = ct;
const featureList = ct.features;
const countryList = ct.countries;
type Country = (typeof countryList)[number];

/* ---------------------------------- helpers --------------------------------- */

/** The name with its Thai spelling, for the title, the H1 and the first mention in the lead. */
const named = (e: Exchange) => withReading(e, locale);
/** Spellings people also type besides the fixed one (`readingOf`): keywords only, never in text. */
const keywordVariants: Record<string, string> = { bybit: "บายบิท", bitget: "บิทเก็ต", gate: "เกท", mexc: "เม็กซ์ซี" };
/** Width of a Thai text in columns: the marks above and below a letter take no width. */
const cols = (s: string) => s.replace(/[ัิ-ฺ็-๎]/g, "").length;
/** The richest variant that fits into `max` columns (the last one otherwise). */
const fit = (max: number, ...variants: string[]) => variants.find((v) => cols(v) <= max) ?? variants[variants.length - 1];
/** A Thai word followed by a text: glued when the text starts with a Thai letter, one space before Latin, digits and quotes. */
const after = (word: string, s: string) => (/^[฀-๿]/.test(s) ? `${word}${s}` : `${word} ${s}`);
/** A data text inserted into a sentence, without a stray final full stop (Thai sentences end without a mark). */
const bare = (s: string) => s.trim().replace(/\.$/, "");
/** Drops the source bracket of `users` / `assets`: "(ตามข้อมูลของ Binance)", "(Bybit API)". */
const withoutSource = (s: string) => bare(s.replace(/\s*\((?:ตามข้อมูลของ[^()]*|[^()]*\bAPI)\)/, ""));
const offer = (e: Exchange) => bare(e.feeDiscount || e.bonusHeadline);
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;

const leverageRisk = "เลเวอเรจสูงเพิ่มความเสี่ยงที่จะถูกบังคับปิดสถานะอย่างมาก";
const regionalNote = "แพลตฟอร์มเฉพาะภูมิภาคมักมีผลิตภัณฑ์ ค่าธรรมเนียม และขีดจำกัดของตัวเอง";
const safeWay = "วิธีที่ปลอดภัยคือสมัครผ่านลิงก์แนะนำ";
const cmcRanking = "อันดับตลาดอนุพันธ์ของ CoinMarketCap";

/** "Binance ได้เปรียบ 4 ข้อ และ OKX ได้เปรียบ 3 ข้อ" / "… OKX ได้เปรียบ 3 ข้อ และเสมอกัน 2 ข้อ" */
const tally = (a: Exchange, b: Exchange, s: ScoreSummary) =>
  s.tie.length
    ? `${a.name} ได้เปรียบ ${s.a.length} ข้อ ${b.name} ได้เปรียบ ${s.b.length} ข้อ และเสมอกัน ${s.tie.length} ข้อ`
    : `${a.name} ได้เปรียบ ${s.a.length} ข้อ และ ${b.name} ได้เปรียบ ${s.b.length} ข้อ`;

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length ? `${e.name} ได้เปรียบด้าน${joinList(rows.map((r) => r.topic))}` : `${e.name} ไม่ได้เปรียบในข้อใดเลย`;
  return `ระหว่าง ${a.name} กับ ${b.name} ไม่มีแห่งใดดีกว่าในทุกข้อ จาก ${s.measurable} ข้อที่วัดได้ในการเปรียบเทียบนี้ ${tally(a, b, s)} ${lead(a, s.a)} ${lead(b, s.b)} ${after(`เลือก ${a.name} ถ้า`, bare(altInfo(a).chooseIf[0]))} ${after(`เลือก ${b.name} ถ้า`, bare(altInfo(b).chooseIf[0]))}`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb) return `${a.name} และ ${b.name} มีเลเวอเรจสูงสุดเท่ากัน: ${after(`${a.name} ให้`, bare(a.maxLeverage))} ส่วน ${after(`${b.name} ให้`, bare(b.maxLeverage))}`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} มีเลเวอเรจสูงสุดมากกว่า ${after("คือ", bare(hi.maxLeverage))} ขณะที่ ${after(`${lo.name} ให้`, bare(lo.maxLeverage))}`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `ใน${cmcRanking} (${prettyDate(site.marketDataDate)}) ${a.name} มี Open Interest (สถานะคงค้าง) ${formatBn(a.market.openInterestBn)} ในตลาดอนุพันธ์ ${a.market.markets} ตลาด และ ${b.name} มี ${formatBn(b.market.openInterestBn)} ใน ${b.market.markets} ตลาด ${deeper.name} มีตลาดที่ลึกกว่า ซึ่งมักหมายถึงสเปรดที่แคบกว่าสำหรับคำสั่งขนาดใหญ่`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${after(`${a.name} มี`, joinList(notOffered.map((f) => f.noun)))} ซึ่ง ${b.name} ไม่มี` : "",
    notFound.length ? `${after(`${a.name} มี`, joinList(notFound.map((f) => f.noun)))} แต่บนเว็บไซต์ของ ${b.name} เองเราไม่พบผลิตภัณฑ์ลักษณะนี้` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${bare(note)})` : "";
  if (status === "restricted") return `${e.name} ไม่เปิดให้บริการแก่${c.residents}${extra}`;
  if (status === "regional") return `${e.name} ให้บริการแก่${c.residents}ผ่านแพลตฟอร์มเฉพาะภูมิภาค${extra}`;
  if (status === "partial") return `${e.name} จำกัดการใช้งานใน${c.name}บางส่วน${extra}`;
  return `${e.name} ไม่ได้จัด${c.name}ไว้ในรายชื่อประเทศที่ถูกจำกัด`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("th").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)} ${statusPhrase(b, c)} รายชื่อประเทศเปลี่ยนแปลงได้ และการที่ประเทศหนึ่งไม่อยู่ในรายชื่อก็ไม่ได้รับประกันว่าทุกผลิตภัณฑ์จะเปิดให้บริการที่นั่น ข้อกำหนดของกระดานเทรดเองเป็นตัวตัดสิน`;

/* ------------------------------------ FAQ ------------------------------------ */

/** All questions a head-to-head page answers, grouped for display (see `./en.tsx`). */
function buildVersusFaqs(a: Exchange, b: Exchange, s: ScoreSummary, differing: CountryKey[]): VersusFaqGroup[] {
  const ia = altInfo(a);
  const ib = altInfo(b);
  const marketDate = prettyDate(site.marketDataDate);
  const aheadA = advantages(a, b);
  const aheadB = advantages(b, a);
  const state = (key: FeatureKey) =>
    has(a, key) && has(b, key)
      ? "มีทั้งสองแห่ง"
      : has(a, key)
        ? `มีเฉพาะ ${a.name} แห่งเดียว`
        : has(b, key)
          ? `มีเฉพาะ ${b.name} แห่งเดียว`
          : "ไม่พบบนเว็บไซต์ของทั้งสองแห่ง";
  const noTokenDiscount = "ไม่ได้ประกาศส่วนลดลักษณะนี้";
  const noFund = "ไม่ได้ระบุกองทุนคุ้มครองผู้ใช้";
  const noMica = "ไม่ได้ระบุนิติบุคคลที่ได้รับอนุญาตตาม MiCA บนหน้าเว็บไซต์ของตัวเอง";

  const verdict: Faq[] = [
    { q: `${a.name} กับ ${b.name} อันไหนดีกว่า?`, a: versusAnswer(a, b, s) },
    {
      q: `ความแตกต่างหลักระหว่าง ${a.name} กับ ${b.name} คืออะไร?`,
      a: `${bare(ia.pick)} ${bare(ib.pick)}${aheadA.length ? ` ข้อได้เปรียบที่วัดได้ชัดที่สุดของ ${a.name}: ${joinList(aheadA.slice(0, 2).map(bare))}` : ""}${aheadB.length ? ` ส่วนของ ${b.name}: ${joinList(aheadB.slice(0, 2).map(bare))}` : ""}`,
    },
    {
      q: `${a.name} ใหญ่กว่า ${b.name} ไหม?`,
      a: `ใน${cmcRanking} (${marketDate}) ${a.name} มี Open Interest (สถานะคงค้าง) ${formatBn(a.market.openInterestBn)} และปริมาณการซื้อขาย 24 ชั่วโมง ${formatBn(a.market.volume24hBn)} ส่วน ${b.name} มี ${formatBn(b.market.openInterestBn)} และ ${formatBn(b.market.volume24hBn)} ตามตัวเลขของกระดานเทรดเอง ${after(`${a.name} มี`, withoutSource(a.users))} และ ${after(`${b.name} มี`, withoutSource(b.users))}`,
    },
    {
      q: `${a.name} กับ ${b.name} อันไหนดีกว่าสำหรับมือใหม่?`,
      a: `สำหรับบัญชีแรก มีสามเรื่องที่สำคัญ คือ ซื้อคริปโตได้ง่าย มีที่ให้ฝึกเทรด และค่าธรรมเนียมต่ำ ซื้อคริปโตด้วยบัตรหรือโอนผ่านธนาคาร: ${state("fiat")} ทดลองเทรด (Demo Trading): ${state("demoTrading")} Copy Trading: ${state("copyTrading")} ${feeSentence(a, b, "spot")} การยืนยันตัวตน ${a.name}: ${bare(a.signup.kycShort)} ส่วน ${b.name}: ${bare(b.signup.kycShort)}`,
    },
    {
      q: `${a.name} กับ ${b.name} อันไหนดีกว่าสำหรับเทรด Futures?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `ค่าธรรมเนียม ${a.name} กับ ${b.name} อันไหนถูกกว่า?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} ทั้งหมดนี้เป็นอัตรามาตรฐาน (ไม่ใช่ VIP) ระดับ VIP และโทเคนของกระดานเทรดช่วยลดค่าธรรมเนียมลงได้อีก`,
    },
    {
      q: `${a.name} และ ${b.name} มีส่วนลดค่าธรรมเนียมเมื่อจ่ายด้วยโทเคนของตัวเองไหม?`,
      a: `${a.name}: ${bare(a.tokenDiscount) || noTokenDiscount} ${b.name}: ${bare(b.tokenDiscount) || noTokenDiscount}`,
    },
    { q: `${a.name} กับ ${b.name} อันไหนให้เลเวอเรจสูงกว่า?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} กับ ${b.name} อันไหนมีเหรียญให้เทรดมากกว่า?`,
      a: `ตามตัวเลขของกระดานเทรดเอง ${after(`${a.name} มี`, withoutSource(a.assets))} และ ${after(`${b.name} มี`, withoutSource(b.assets))} แต่ละแห่งนับต่างกัน บางแห่งนับเป็นเหรียญ บางแห่งนับเป็นคู่เทรด จึงเทียบตัวเลขทั้งสองกันตรง ๆ ไม่ได้`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `ใช้ ${a.name} หรือ ${b.name} ใน${c.name}ได้ไหม?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `${a.name} และ ${b.name} ต้องทำ KYC ไหม?`,
      a: `ต้อง ทั้งสองแห่งกำหนดให้ผู้ใช้ใหม่ยืนยันตัวตน ${a.name}: ${bare(a.signup.kycShort)} ${b.name}: ${bare(b.signup.kycShort)} ทั้งสองแห่งจึงไม่ใช่ตัวเลือกสำหรับการเทรดโดยไม่ยืนยันตัวตน`,
    },
    {
      q: `${a.name} กับ ${b.name} อันไหนปลอดภัยกว่า?`,
      a: `ไม่มีกระดานเทรดแบบรวมศูนย์แห่งใดที่ไร้ความเสี่ยง การเปรียบเทียบที่ตรงไปตรงมาจึงดูจากสิ่งที่แต่ละแห่งเปิดเผยเอง ${a.name}: ${bare(a.regulation)} Proof of Reserves (หลักฐานการสำรองสินทรัพย์): ${bare(ia.reserves)} ${ia.fund ? bare(ia.fund) : noFund} ${b.name}: ${bare(b.regulation)} Proof of Reserves: ${bare(ib.reserves)} ${ib.fund ? bare(ib.fund) : noFund} ไม่ว่าจะเลือกแห่งไหน ให้เก็บเงินไว้บนกระดานเทรดเฉพาะส่วนที่ใช้เทรดอยู่จริง`,
    },
    {
      q: `${a.name} และ ${b.name} มีใบอนุญาต MiCA ในสหภาพยุโรป (EU) ไหม?`,
      a: `${a.name}: ${ia.mica ? `มี – ${bare(ia.mica)}` : noMica} ${b.name}: ${ib.mica ? `มี – ${bare(ib.mica)}` : noMica} ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `ไม่มี ในผลิตภัณฑ์ ${featureList.length} รายการที่เราเปรียบเทียบ ทุกรายการที่ ${x.name} แสดงบนเว็บไซต์ของตัวเอง ${y.name} ก็แสดงเช่นกัน`;
  const products: Faq[] = [
    { q: `${a.name} มีอะไรที่ ${b.name} ไม่มี?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} มีอะไรที่ ${a.name} ไม่มี?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} และ ${b.name} มี Copy Trading, บอทเทรด, Options และทดลองเทรด (Demo Trading) ไหม?`,
      a: `Copy Trading: ${state("copyTrading")} บอทเทรด: ${state("tradingBots")} Options: ${state("options")} ทดลองเทรด: ${state("demoTrading")}${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` รายการที่ระบุชื่อเพียงแห่งเดียว หมายถึงเราไม่พบหน้าของผลิตภัณฑ์นั้นบนเว็บไซต์ของอีกแห่งเมื่อวันที่ ${prettyDate(site.lastReviewed)}` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `รหัสแนะนำ ${a.name} และ ${b.name} คืออะไร?`,
      a: `รหัสแนะนำ ${a.name} คือ ${a.referralCode} ตำแหน่งกรอกรหัส: ${bare(a.referral.whereShort)} รหัสแนะนำ ${b.name} คือ ${b.referralCode} ตำแหน่งกรอกรหัส: ${bare(b.referral.whereShort)} ทั้งสองรหัสใช้ฟรี และไม่ทำให้ค่าธรรมเนียมการเทรดเพิ่มขึ้น`,
    },
    {
      q: `โบนัสผู้ใช้ใหม่ ${a.name} กับ ${b.name} อันไหนดีกว่า?`,
      a: `${a.name}: ${offer(a)} ${b.name}: ${offer(b)} รางวัลต้อนรับของทั้งสองแห่งมีเงื่อนไข เช่น ยืนยันตัวตน ฝากเงิน หรือปริมาณการซื้อขาย และแตกต่างกันไปตามประเทศ จึงควรเทียบเงื่อนไข ไม่ใช่แค่ตัวเลขที่โฆษณา`,
    },
    {
      q: `สมัครไปแล้ว เพิ่มรหัสแนะนำ ${a.name} หรือ ${b.name} ทีหลังได้ไหม?`,
      a: `${a.name}: ${bare(a.referral.afterSignupShort)} ${b.name}: ${bare(b.referral.afterSignupShort)} สำหรับทั้งสองแห่ง ${safeWay}`,
    },
    {
      q: `ใช้ ${a.name} และ ${b.name} พร้อมกันได้ไหม?`,
      a: "ได้ ทั้งสองแห่งเป็นบริษัทแยกกัน บัญชีบนแห่งหนึ่งจึงไม่กระทบบัญชีบนอีกแห่ง และเทรดเดอร์จำนวนมากก็เก็บเงินไว้บนกระดานเทรดสองแห่ง ระดับค่าธรรมเนียม รหัสแนะนำที่ผูกไว้ และรางวัลผูกกับแต่ละบัญชี ไม่โอนข้ามไปอีกแห่ง",
    },
    {
      q: `ย้ายคริปโตจาก ${a.name} ไป ${b.name} อย่างไร?`,
      a: `1. เปิดบัญชี ${b.name} ด้วยรหัสแนะนำ ${b.referralCode} แล้วยืนยันตัวตนให้เสร็จ 2. ปิดสถานะ Futures และ Margin ที่เปิดอยู่บน ${a.name} เพราะย้ายสถานะข้ามกระดานเทรดไม่ได้ 3. ใน ${b.name} คัดลอกที่อยู่ฝากเงินของเหรียญและเครือข่ายที่ต้องการใช้ 4. ถอนเงินจาก ${a.name} ไปยังที่อยู่นั้นบนเครือข่ายเดียวกัน และส่งจำนวนเล็กน้อยเพื่อทดสอบก่อน เพราะเงินที่โอนผิดเครือข่ายอาจสูญหาย ขั้นตอนเดียวกันนี้ใช้ได้กับการย้ายในทิศทางกลับกัน`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} หรือ ${b.name}: แห่งไหนดีกว่า?`, faqs: verdict },
    { id: "fees", title: "ค่าธรรมเนียม เลเวอเรจ และเหรียญ", faqs: fees },
    { id: "countries", title: "ประเทศ KYC และความปลอดภัย", faqs: countries },
    { id: "products", title: "ผลิตภัณฑ์", faqs: products },
    { id: "referral", title: "รหัสแนะนำและการย้ายระหว่างสองแห่ง", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi: top, oi, mica }: HubFacts) =>
  `${names(lowF)} มีค่าธรรมเนียม Futures มาตรฐานต่ำที่สุด (${feePair(lowF[0].futuresFees)} Maker / Taker) ${names(top)} มีเลเวอเรจสูงที่สุด (${leverageOf(top[0])}x) และ ${names(oi)} มีตลาดอนุพันธ์ที่ลึกที่สุด (Open Interest ${formatBn(oi[0].market.openInterestBn)}) ${names(mica)} ระบุแพลตฟอร์มที่ได้รับอนุญาตตาม MiCA สำหรับผู้ที่อาศัยอยู่ในเขตเศรษฐกิจยุโรป (EEA) กระดานเทรดแห่งไหนดีกว่าสำหรับคุณขึ้นอยู่กับคู่ที่กำลังตัดสินใจ เลือกคู่นั้นได้ด้านล่าง`;

function hubFaqs({ all, ranked, lowF, lowS, hi: top, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "กระดานเทรดคริปโตไหนค่าธรรมเนียมต่ำที่สุด?",
      a: `ที่ระดับมาตรฐาน ${names(lowF)} มีค่าธรรมเนียม Futures ต่ำที่สุดที่ ${feePair(lowF[0].futuresFees)} (Maker / Taker) และ ${names(lowS)} มีค่าธรรมเนียม Spot ต่ำที่สุดที่ ${feePair(lowS[0].spotFees)} กระดานเทรดอื่น: ${joinList(
        ranked.filter((e) => !lowF.includes(e)).map((e) => `${e.name} (Futures ${feePair(e.futuresFees)}, Spot ${feePair(e.spotFees)})`),
      )} ระดับ VIP และโทเคนของกระดานเทรดช่วยลดอัตราค่าธรรมเนียมลงได้อีก`,
    },
    {
      q: "กระดานเทรดคริปโตไหนให้เลเวอเรจสูงที่สุด?",
      a: `${names(top)}: ${bare(top[0].maxLeverage)} กระดานเทรดอื่น: ${joinList(ranked.filter((e) => !top.includes(e)).map((e) => `${e.name} ${leverageOf(e)}x`))} ${leverageRisk}`,
    },
    {
      q: "กระดานเทรดคริปโตไหนมีตลาด Futures ลึกที่สุด?",
      a: `วัดจาก Open Interest (สถานะคงค้าง) ใน${cmcRanking} (${marketDate}): ${joinList(ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`))} ตลาดที่ลึกกว่ามักหมายถึงสเปรดที่แคบกว่าสำหรับคำสั่งขนาดใหญ่`,
    },
    {
      q: "กระดานเทรดไหนมีแพลตฟอร์มที่ได้รับอนุญาตตาม MiCA สำหรับ EEA?",
      a: `${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))} ส่วน ${names(noMica)} ไม่ได้ระบุนิติบุคคลที่ได้รับอนุญาตตาม MiCA บนหน้าเว็บไซต์ของตัวเอง ${regionalNote}`,
    },
    {
      q: "กระดานเทรดไหนเพิ่มรหัสแนะนำหลังสมัครได้?",
      a: `${later.map((e) => `${e.name}: ${bare(e.referral.afterSignupShort)}`).join(" ")} ส่วน ${names(signupOnly)} นับรหัสเฉพาะตอนสมัคร หรือไม่ได้ระบุวิธีเพิ่มรหัสทีหลังไว้ ไม่ว่าแห่งไหน ${safeWay}`,
    },
    {
      q: "ผลเปรียบเทียบในหน้านี้ได้มาอย่างไร?",
      a: `ทุกตัวเลขอ่านจากเว็บไซต์หรือศูนย์ช่วยเหลือของกระดานเทรดเอง ทั้งตารางค่าธรรมเนียม ข้อกำหนด รายชื่อประเทศที่ถูกจำกัด และหน้าผลิตภัณฑ์ โดยทุกหน้าระบุแหล่งข้อมูลไว้ Open Interest ปริมาณการซื้อขาย และจำนวนตลาดอนุพันธ์มาจาก${cmcRanking} แห่งไหนได้เปรียบในข้อใดตัดสินจากตัวเลขนั้นโดยตรง เราไม่ได้จัดอันดับเอง วันที่ตรวจสอบล่าสุดคือ ${date}`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const th: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row after "ได้เปรียบด้าน" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "ค่าธรรมเนียม Futures (Maker / Taker)", topic: "ค่าธรรมเนียม Futures" },
    spotFees: { label: "ค่าธรรมเนียม Spot (Maker / Taker)", topic: "ค่าธรรมเนียม Spot" },
    leverage: { label: "เลเวอเรจสูงสุด", topic: "เลเวอเรจสูงสุด" },
    openInterest: { label: "Open Interest ของตลาดอนุพันธ์", topic: "มูลค่า Open Interest" },
    volume: { label: "ปริมาณการซื้อขายอนุพันธ์ 24 ชั่วโมง", topic: "ปริมาณการซื้อขายอนุพันธ์ 24 ชั่วโมง" },
    markets: { label: "จำนวนตลาดอนุพันธ์", topic: "จำนวนตลาดอนุพันธ์" },
    users: { label: "ผู้ใช้ (ตัวเลขของกระดานเทรดเอง)", topic: "จำนวนผู้ใช้" },
    assets: { label: "สินทรัพย์ที่เปิดให้เทรด (ตัวเลขของกระดานเทรดเอง)", topic: "" },
    founded: { label: "ปีที่ก่อตั้ง", topic: "" },
    products: { label: (compared) => `ผลิตภัณฑ์ที่พบ (จาก ${compared} รายการที่เปรียบเทียบ)`, topic: "ความหลากหลายของผลิตภัณฑ์" },
    countries: { label: (compared) => `ประเทศที่ถูกจำกัด (จาก ${compared} ประเทศที่เปรียบเทียบ)`, topic: "ความครอบคลุมประเทศ" },
    mica: { label: "แพลตฟอร์ม EEA ที่ได้รับอนุญาตตาม MiCA", topic: "การได้รับอนุญาตตาม MiCA" },
    kyc: { label: "การยืนยันตัวตน (KYC)", topic: "" },
    addLater: { label: "เพิ่มรหัสแนะนำหลังสมัครได้ไหม?", topic: "การเพิ่มรหัสแนะนำหลังสมัคร" },
    offer: { label: "ข้อเสนอสำหรับผู้ใช้ใหม่", topic: "" },
    reserves: { label: "Proof of Reserves", topic: "" },
    fund: { label: "กองทุนคุ้มครองผู้ใช้", topic: "" },
  },
  countOf: (count, of) => `${count} จาก ${of}`,
  noMica: "ไม่ได้ระบุ",
  noFund: "ไม่ได้ระบุ",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    /**
     * Both names with their Thai spellings and the month in front, as in English; then the richest tail that keeps the
     * title within 69 columns (fees and leverage for every pair, KYC where there is room).
     */
    title: (a, b, shortMonthYear) => {
      const head = `${named(a)} vs ${named(b)} (${shortMonthYear})`;
      return fit(
        69,
        `${head}: เปรียบเทียบค่าธรรมเนียม เลเวอเรจ KYC และโบนัส`,
        `${head}: ค่าธรรมเนียม เลเวอเรจ KYC และโบนัส`,
        `${head}: ค่าธรรมเนียม เลเวอเรจ และ KYC`,
        `${head}: ค่าธรรมเนียมและเลเวอเรจ`,
        `${head}: ค่าธรรมเนียม`,
        head,
      );
    },
    /** 130–155 columns for every pair: the longest variant that fits. */
    description: (a, b, monthYear) => {
      const fees = `${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`;
      const lev = `${leverageOf(a)}x vs ${leverageOf(b)}x`;
      return fit(
        155,
        `${a.name} vs ${b.name}: ค่าธรรมเนียม Futures ${fees} เลเวอเรจ ${lev} พร้อมเทียบผลิตภัณฑ์ ประเทศ KYC และรหัสแนะนำ จากข้อมูลทางการ ตรวจสอบเมื่อเดือน${monthYear}`,
        `${a.name} vs ${b.name}: ค่าธรรมเนียม Futures ${fees} เลเวอเรจ ${lev} พร้อมผลิตภัณฑ์ ประเทศ KYC และรหัสแนะนำ ข้อมูลทางการ ตรวจสอบเมื่อเดือน${monthYear}`,
        `${a.name} vs ${b.name}: Futures ${fees} เลเวอเรจ ${lev} พร้อมผลิตภัณฑ์ ประเทศ KYC และรหัสแนะนำ ข้อมูลทางการ ตรวจสอบเมื่อเดือน${monthYear}`,
      );
    },
    keywords: (a, b, former) => {
      const ra = readingOf(a.slug, locale);
      const rb = readingOf(b.slug, locale);
      const va = keywordVariants[a.slug] ?? ra;
      const vb = keywordVariants[b.slug] ?? rb;
      return [
        `${a.name} vs ${b.name}`,
        `${b.name} vs ${a.name}`,
        `${a.name} กับ ${b.name}`,
        `${a.name} หรือ ${b.name}`,
        `${a.name} กับ ${b.name} อันไหนดีกว่า`,
        `เปรียบเทียบ ${a.name} ${b.name}`,
        `ค่าธรรมเนียม ${a.name} vs ${b.name}`,
        `${a.name} vs ${b.name} Futures`,
        `${a.name} ดีกว่า ${b.name} ไหม`,
        `${b.name} ดีกว่า ${a.name} ไหม`,
        ...(ra && rb ? [`${ra} vs ${rb}`, `${ra} กับ ${rb}`, `เปรียบเทียบ ${ra} ${rb}`] : []),
        ...(va && vb && (va !== ra || vb !== rb) ? [`${va} กับ ${vb}`] : []),
        `${a.name} vs ${b.name} fees`,
        ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`, `${old} กับ ${other}`]),
      ];
    },

    crumbHome: "หน้าแรก",
    crumbHub: "เปรียบเทียบกระดานเทรด",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} คือกระดานเทรดที่เดิมใช้ชื่อ ${formerName}`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${named(a)} และ ${named(b)} เป็นกระดานเทรดคริปโตแบบรวมศูนย์ (CEX) ทั้งคู่ เปิดให้เทรดทั้งตลาด Spot และสัญญา Futures แบบใช้เลเวอเรจ และทั้งสองแห่งมีโปรแกรมแนะนำเพื่อนสำหรับผู้ใช้ใหม่ ${bare(pickA)} ${bare(pickB)}${formerNote ? ` ${formerNote}` : ""} หน้าเปรียบเทียบตัวต่อตัวนี้นำค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ ประเทศที่ให้บริการ กฎการยืนยันตัวตน และข้อเสนอรหัสแนะนำของทั้งสองแห่งมาวางเทียบกัน ทุกตัวเลขอ่านจากเว็บไซต์ของกระดานเทรดเองเมื่อวันที่ ${date}`,

    toc: {
      "at-a-glance": "ภาพรวม",
      verdict: "ควรเลือกแห่งไหน",
      fees: "ค่าธรรมเนียม",
      leverage: "เลเวอเรจและความลึกของตลาด",
      products: "ผลิตภัณฑ์",
      countries: "ประเทศ",
      kyc: "การยืนยันตัวตน (KYC)",
      safety: "ความปลอดภัยและการกำกับดูแล",
      referral: "รหัสแนะนำ",
      "pros-cons": "ข้อดีและข้อเสีย",
      faq: "คำถามที่พบบ่อย",
      sources: "แหล่งข้อมูล",
    },
    onThisPage: "ในหน้านี้",

    /* Hero */
    updated: (date) => `ตรวจสอบและอัปเดตเมื่อ ${date}`,
    h1: (a, b) => `${named(a)} vs ${named(b)}: เปรียบเทียบค่าธรรมเนียม เลเวอเรจ และความปลอดภัย`,
    quickAnswer: "สรุปสั้น ๆ",
    keyFigures: "ตัวเลขสำคัญ",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `เลเวอเรจ ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open Interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "สมัครด้วยรหัสแนะนำ",
    boxNote: "ทั้งสองรหัสใช้ฟรี และไม่ทำให้ค่าธรรมเนียมเพิ่มขึ้นเลย",
    codeLabel: (e) => `รหัสแนะนำ ${e.name}`,
    boxRisk: () => (
      <>
        การเทรดด้วยเลเวอเรจมีความเสี่ยงสูง ทั้งสองแห่งไม่ได้เปิดให้บริการในทุกประเทศ ดูหัวข้อ<a href="#countries">ประเทศ</a>
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} ในภาพรวม`,
    glanceText: (a, b, s) =>
      `จะค้นหา “${a.name} vs ${b.name}” หรือ “${b.name} vs ${a.name}” ก็ได้ผลเปรียบเทียบเดียวกัน จาก ${s.measurable} ข้อที่ตัดสินได้ด้วยตัวเลข ${tally(a, b, s)} แต่ละข้อมีน้ำหนักไม่เท่ากัน เช่น สำหรับเทรดเดอร์ที่เทรดบ่อย ค่าธรรมเนียมที่ต่ำกว่าสำคัญกว่ารายชื่อเหรียญที่ยาวกว่า จึงควรดูข้อที่ตรงกับวิธีเทรดของคุณ`,
    glanceCaption: (a, b) => `${a.name} vs ${b.name}: ค่าธรรมเนียม เลเวอเรจ ขนาดตลาด ผลิตภัณฑ์ ประเทศ การยืนยันตัวตน และกฎของรหัสแนะนำ`,
    compared: "หัวข้อ",
    ahead: "ได้เปรียบ",
    level: "เสมอกัน",
    glanceNote: (marketDate, date) =>
      `ค่าธรรมเนียม: ระดับมาตรฐาน (ไม่ใช่ VIP) Open Interest ปริมาณการซื้อขาย และจำนวนตลาด: ${cmcRanking} ณ วันที่ ${marketDate} “–” หมายถึงจัดอันดับสองค่านี้เทียบกันไม่ได้ ข้อมูลอื่นทั้งหมดอ่านจากเว็บไซต์ของกระดานเทรดเองเมื่อวันที่ ${date}`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} หรือ ${b.name}: ควรเลือกแห่งไหน?`,
    verdictText:
      "ไม่มีแห่งใดชนะในทุกด้าน กระดานเทรดแต่ละแห่งสร้างมาเพื่อเทรดเดอร์คนละแบบ กล่องทั้งสองด้านล่างแสดงว่าแต่ละแห่งเหมาะกับใคร และได้เปรียบอีกแห่งตรงไหนบ้างเมื่อวัดจากตัวเลข",
    bestFor: (role) => `จุดเด่น: ${role}`,
    chooseIf: (e) => `เลือก ${e.name} ถ้าคุณ…`,
    aheadOf: (e, other) => `จุดที่ ${e.name} ได้เปรียบ ${other.name}`,
    noAdvantage: "ไม่มีข้อได้เปรียบที่วัดได้ในหัวข้อที่เราเปรียบเทียบ",
    thinkTwice: "คิดให้ดีก่อน ถ้าคุณ…",
    codeButton: (e) => `รหัสแนะนำ ${e.name}: ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `ค่าธรรมเนียม ${a.name} vs ${b.name}`,
    feesModel:
      "ทั้งสองแห่งใช้โมเดล Maker / Taker: คำสั่ง Limit ที่เพิ่มสภาพคล่องให้ตลาดจ่ายค่าธรรมเนียม Maker ส่วนคำสั่งที่ดึงสภาพคล่องออกจากตลาดจ่ายค่าธรรมเนียม Taker",
    feesCaption: (a, b) => `ค่าธรรมเนียม Spot และ Futures มาตรฐานของ ${a.name} และ ${b.name}`,
    exchange: "กระดานเทรด",
    futuresMaker: "Futures Maker",
    futuresTaker: "Futures Taker",
    spotMaker: "Spot Maker",
    spotTaker: "Spot Taker",
    otherMarkets: "ตลาดอื่น (Maker / Taker)",
    feesNote: (date) =>
      `อัตรามาตรฐาน (ไม่ใช่ VIP) ตามที่กระดานเทรดแต่ละแห่งเผยแพร่ ตรวจสอบเมื่อวันที่ ${date} ค่าธรรมเนียมเปลี่ยนแปลงได้ จึงควรตรวจสอบบนกระดานเทรดอีกครั้งก่อนเทรด`,
    tokenTitle: "ส่วนลดเมื่อจ่ายด้วยโทเคนและเงื่อนไขปลีกย่อย",
    noTokenDiscount: "ไม่ได้ประกาศส่วนลดเมื่อจ่ายค่าธรรมเนียมด้วยโทเคนของกระดานเทรด",

    /* Leverage */
    leverageTitle: "เลเวอเรจและความลึกของตลาด",
    leverageRisk: "เลเวอเรจสูงเพิ่มความเสี่ยงที่จะถูกบังคับปิดสถานะอย่างมาก ค่าสูงสุดเป็นเพียงเพดาน ไม่ใช่คำแนะนำ",
    leverageCaption: (a, b) => `เลเวอเรจและข้อมูลตลาดอนุพันธ์ของ ${a.name} และ ${b.name}`,
    maxLeverage: "เลเวอเรจสูงสุด",
    openInterest: "Open Interest",
    volume24h: "ปริมาณการซื้อขายอนุพันธ์ 24 ชั่วโมง",
    derivativesMarkets: "ตลาดอนุพันธ์",
    listedAssets: "สินทรัพย์ที่เปิดให้เทรด (ตัวเลขของกระดานเทรดเอง)",
    leverageNote: (marketDate) =>
      `ข้อมูลตลาด: ${cmcRanking} ณ วันที่ ${marketDate} แต่ละกระดานเทรดนับสินทรัพย์ต่างกัน บางแห่งนับเป็นเหรียญ บางแห่งนับเป็นคู่เทรด`,

    /* Products */
    productsTitle: (a, b) => `ผลิตภัณฑ์: ${a.name} และ ${b.name} มีอะไรบ้าง`,
    productsSame: (compared) => `ทั้งสองแห่งแสดงผลิตภัณฑ์ครบทั้ง ${compared} รายการที่เราเปรียบเทียบบนเว็บไซต์ของตัวเอง ความแตกต่างอยู่ที่รายละเอียด`,
    productsLegend: (date) =>
      `เครื่องหมายถูกหมายถึงกระดานเทรดแสดงผลิตภัณฑ์นั้นบนเว็บไซต์ของตัวเอง ขีดหมายถึงเราไม่พบหน้าของผลิตภัณฑ์นั้นบนเว็บไซต์ของกระดานเทรดเมื่อวันที่ ${date}`,
    productsCaption: (a, b) => `ผลิตภัณฑ์ของ ${a.name} และ ${b.name}`,
    product: "ผลิตภัณฑ์",
    offered: "มี",
    notOffered: "ไม่มี",
    noPage: "ไม่พบหน้าบนเว็บไซต์ของกระดานเทรด",

    /* Countries */
    countriesTitle: (a, b) => `ประเทศ: ${a.name} และ ${b.name} เปิดให้บริการที่ไหน`,
    countriesText: (compared, differing) =>
      `ตารางนี้แสดงสิ่งที่ข้อกำหนดของกระดานเทรดแต่ละแห่งระบุไว้สำหรับ ${compared} ประเทศ ทั้งสองแห่งต่างกันใน ${differing} ประเทศ “${ct.statusLabel.regional}” หมายถึงกระดานเทรดให้บริการประเทศนั้นผ่านแพลตฟอร์มแยกที่มีผลิตภัณฑ์ ค่าธรรมเนียม และขีดจำกัดของตัวเอง`,
    countriesCaption: (a, b) => `ประเทศที่ ${a.name} และ ${b.name} เปิดให้บริการ`,
    country: "ประเทศ",
    countriesNote: (date) =>
      `“${ct.statusLabel.open}” หมายถึงประเทศนั้นไม่อยู่ในรายชื่อประเทศที่ถูกจำกัดของกระดานเทรดเมื่อวันที่ ${date} ซึ่งไม่ได้รับประกันว่าทุกผลิตภัณฑ์จะเปิดให้บริการที่นั่น ทั้งสองแห่งห้ามใช้ VPN หรือข้อมูลเท็จเพื่อเลี่ยงข้อจำกัด`,
    differTitle: "จุดที่ทั้งสองแห่งต่างกัน",
    differQuestion: (a, b, countryName) => `${a.name} หรือ ${b.name} ใน${countryName}?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        ทั้งสองแห่งไม่เปิดให้บริการในประเทศที่คุณอาศัยอยู่ใช่ไหม? ตารางประเทศในหน้าทางเลือกแทนแสดงว่ากระดานเทรดอื่นแห่งใดรับผู้ใช้จากประเทศของคุณ:{" "}
        <Link href={hrefA}>ทางเลือกแทน {a.name} แยกตามประเทศ</Link> · <Link href={hrefB}>ทางเลือกแทน {b.name} แยกตามประเทศ</Link>
      </>
    ),
    restrictedTitle: "ประเทศที่ถูกจำกัดและแพลตฟอร์มเฉพาะภูมิภาค",
    whereNot: (e) => `${e.name} ไม่เปิดให้บริการในประเทศไหนบ้าง?`,
    regionalPlatforms: "แพลตฟอร์มเฉพาะภูมิภาค:",

    /* Verification */
    kycTitle: (a, b) => `การยืนยันตัวตน (KYC): ${a.name} vs ${b.name}`,
    kycText:
      "ทั้งสองแห่งกำหนดให้ผู้ใช้ใหม่ยืนยันตัวตน จึงไม่มีแห่งใดเหมาะกับการเทรดโดยไม่ทำ KYC ความแตกต่างอยู่ที่บัญชีที่ยังไม่ยืนยันตัวตนยังทำอะไรได้บ้าง และขั้นตอนตรวจสอบเป็นอย่างไร",
    documents: "เอกสาร:",
    minAge: "อายุขั้นต่ำ:",
    howToRegister: (e) => `วิธีสมัคร ${e.name} และยืนยันตัวตนทีละขั้นตอน`,

    /* Safety */
    safetyTitle: (a, b) => `ความปลอดภัยและการกำกับดูแล: ${a.name} vs ${b.name}`,
    safetyText:
      "ไม่มีกระดานเทรดแบบรวมศูนย์แห่งใดที่ไร้ความเสี่ยง สิ่งที่เทียบกันได้คือข้อมูลที่แต่ละแห่งเปิดเผยเกี่ยวกับตัวเอง ได้แก่ ใบอนุญาตที่ได้รับ การพิสูจน์เงินสำรองด้วย Proof of Reserves (หลักฐานการสำรองสินทรัพย์) และกองทุนที่กันไว้สำหรับเหตุฉุกเฉิน",
    safetyCaption: (a, b) => `การกำกับดูแล Proof of Reserves และกองทุนคุ้มครองผู้ใช้ของ ${a.name} และ ${b.name}`,
    licences: "ใบอนุญาตที่กระดานเทรดระบุ",
    entity: "นิติบุคคลผู้ให้บริการ",
    reserves: "Proof of Reserves",
    fund: "กองทุนคุ้มครองผู้ใช้",
    founded: "ปีที่ก่อตั้ง",
    isSafe: (e) => `${e.name} ปลอดภัยไหม?`,
    safetyDetail: (e) => `รายละเอียดความปลอดภัยและประเทศที่ ${e.name} ให้บริการ`,

    /* Referral codes */
    referralTitle: (a, b) => `รหัสแนะนำและข้อเสนอสำหรับผู้ใช้ใหม่: ${a.name} vs ${b.name}`,
    referralText:
      "ไม่ว่าจะเลือกแห่งไหน ให้สมัครด้วยรหัสแนะนำ เพราะไม่มีค่าใช้จ่าย ไม่ทำให้ค่าธรรมเนียมเพิ่มขึ้น และปลดล็อกข้อเสนอสำหรับผู้ใช้ใหม่ของกระดานเทรด ดูแถวสุดท้ายให้ดี เพราะรหัสที่ลืมกรอกไม่ได้เพิ่มทีหลังได้เสมอไป",
    referralCaption: (a, b) => `รหัสแนะนำและข้อเสนอสำหรับผู้ใช้ใหม่ของ ${a.name} และ ${b.name}`,
    referralCodeOf: (e) => `รหัสแนะนำ ${e.name}`,
    referralCode: "รหัสแนะนำ",
    newUserOffer: "ข้อเสนอสำหรับผู้ใช้ใหม่",
    inviteeReward: "สิ่งที่ได้รับในฐานะผู้ถูกแนะนำ",
    covers: "รหัสเดียวครอบคลุม",
    whereCode: "กรอกรหัสตรงไหน",
    addLater: "เพิ่มหลังสมัครได้ไหม?",
    referralNote: (date) => `ตรวจสอบข้อเสนอเมื่อวันที่ ${date} รางวัลต้อนรับต้องทำภารกิจ ต้องยืนยันตัวตน และแตกต่างกันไปตามประเทศ`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `ข้อดีและข้อเสียของ ${a.name} และ ${b.name}`,
    pros: "ข้อดี",
    cons: "ข้อเสีย",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – คำถามที่พบบ่อย`,
    faqText: (count, a, b) =>
      `คำถาม ${count} ข้อเกี่ยวกับการเลือกระหว่าง ${a.name} กับ ${b.name}: ค่าธรรมเนียม เลเวอเรจ ประเทศ การยืนยันตัวตน ผลิตภัณฑ์ และรหัสแนะนำ`,

    /* Sources */
    sourcesTitle: "แหล่งข้อมูล: ตัวเลขในหน้านี้มาจากไหน",
    sourcesText: (date, marketDate) =>
      `ข้อมูลทั้งหมดในหน้านี้เกี่ยวกับค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ การยืนยันตัวตน ประเทศ ใบอนุญาต เงินสำรอง และกฎของรหัสแนะนำ อ่านจากเว็บไซต์และศูนย์ช่วยเหลือของกระดานเทรดทั้งสองแห่งเมื่อวันที่ ${date} ส่วน Open Interest ปริมาณการซื้อขาย และจำนวนตลาดอนุพันธ์มาจาก${cmcRanking} (${marketDate}) กระดานเทรดเปลี่ยนเงื่อนไขได้โดยไม่แจ้งล่วงหน้า หน้าทางการด้านล่างจึงเป็นข้อมูลชี้ขาด`,
    officialPages: (e, count) => `${e.name}: หน้าทางการ ${count} หน้า`,

    /* More comparisons */
    moreTitle: "เปรียบเทียบเพิ่มเติม",
    against: (e) => `${e.name} เทียบกับกระดานเทรดอื่น`,
    allAlternatives: (e) => `ทางเลือกแทน ${e.name} ทั้งหมด`,
    allComparisons: "เปรียบเทียบกระดานเทรดทั้งหมด",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>คำเตือนความเสี่ยง:</strong> อนุพันธ์คริปโตเป็นเครื่องมือที่ซับซ้อน เลเวอเรจขยายทั้งกำไรและขาดทุน และคุณอาจสูญเสียเงินหลักประกันทั้งหมดได้ภายในไม่กี่นาที
        หน้านี้ให้ข้อมูลเท่านั้น ไม่ใช่คำแนะนำทางการเงิน เราอาจได้รับค่าคอมมิชชันเมื่อคุณสมัครผ่านลิงก์ของเรา ดู<Link href={disclosureHref}>การเปิดเผยลิงก์ Affiliate</Link>{" "}
        ค่าคอมมิชชันไม่ได้ทำให้ตัวเลขเปลี่ยน เพราะตัวเลขทั้งหมดเป็นของกระดานเทรดเอง
      </>
    ),
    ctaTitle: (a, b) => `${a.name} หรือ ${b.name}? เริ่มต้นด้วยรหัสแนะนำ`,
    ctaText: "บัญชีเดียวสำหรับทั้ง Spot และ Futures ไม่ว่าจะเลือกแห่งไหน โดยไม่มีค่าใช้จ่ายเพิ่ม",
    ctaButton: "เปรียบเทียบกระดานเทรดอื่น",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => `เปรียบเทียบกระดานเทรดคริปโต (${shortMonthYear}): เปรียบเทียบตัวต่อตัว ${pairs} คู่`,
    /** 130–155 columns: the longest variant that fits. */
    description: (exchangeNames, pairs, monthYear) =>
      fit(
        155,
        `${exchangeNames} จับคู่เทียบกัน: เปรียบเทียบตัวต่อตัว ${pairs} คู่ ทั้งค่าธรรมเนียม เลเวอเรจ ประเทศ KYC และรหัสแนะนำ จากข้อมูลทางการ ตรวจสอบเมื่อเดือน${monthYear}`,
        `${exchangeNames}: เปรียบเทียบตัวต่อตัว ${pairs} คู่ ทั้งค่าธรรมเนียม เลเวอเรจ ประเทศ KYC และรหัสแนะนำ จากข้อมูลทางการ ตรวจสอบเมื่อเดือน${monthYear}`,
        `${exchangeNames}: เปรียบเทียบตัวต่อตัว ${pairs} คู่ ค่าธรรมเนียม เลเวอเรจ ประเทศ KYC และรหัสแนะนำ ข้อมูลทางการ ตรวจสอบเมื่อเดือน${monthYear}`,
        `${exchangeNames}: เปรียบเทียบตัวต่อตัว ${pairs} คู่ ค่าธรรมเนียม เลเวอเรจ ประเทศ KYC และรหัสแนะนำ ข้อมูลทางการ เดือน${monthYear}`,
      ),
    crumbHome: "หน้าแรก",
    crumbPage: "เปรียบเทียบกระดานเทรด",
    listName: "เปรียบเทียบตัวต่อตัวของกระดานเทรดคริปโต",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `ตรวจสอบและอัปเดตเมื่อ ${date}`,
    h1: (pairs) => `เปรียบเทียบกระดานเทรดคริปโต: เปรียบเทียบตัวต่อตัว ${pairs} คู่`,
    lead: (exchangeCount) =>
      `กระดานเทรด ${exchangeCount} แห่ง ทุกคู่เทียบกันด้วยหัวข้อเดียวกัน ได้แก่ ค่าธรรมเนียม เลเวอเรจ ความลึกของตลาด ผลิตภัณฑ์ ประเทศที่ให้บริการ การยืนยันตัวตน การกำกับดูแล และข้อเสนอรหัสแนะนำ ทุกการเปรียบเทียบใช้ตัวเลขจากเว็บไซต์ของกระดานเทรดเอง`,
    quickAnswer: "สรุปสั้น ๆ",

    pickTitle: "เลือกกระดานเทรดสองแห่งเพื่อเปรียบเทียบ",
    pickText: (others) =>
      `แต่ละกล่องจับคู่กระดานเทรดหนึ่งแห่งกับอีก ${others} แห่ง แต่ละคู่มีหน้าเดียว “Binance vs OKX” และ “OKX vs Binance” จึงพาไปที่หน้าเปรียบเทียบเดียวกัน`,
    alternativesOf: (e) => `ทางเลือกแทน ${e.name}`,
    referralCodeOf: (e) => `รหัสแนะนำ ${e.name}`,

    tableTitle: (exchangeCount) => `กระดานเทรดทั้ง ${exchangeCount} แห่งในตารางเดียว`,
    tableText: "ข้อเสนอสำหรับผู้ใช้ใหม่ ค่าธรรมเนียมมาตรฐาน (ไม่ใช่ VIP) เลเวอเรจ และความลึกของตลาดของทุกแห่งในตารางเดียว",
    tableNote: (date, marketDate) =>
      `ค่าธรรมเนียม: ระดับมาตรฐานตามที่กระดานเทรดแต่ละแห่งเผยแพร่ ตรวจสอบเมื่อวันที่ ${date} Open Interest และจำนวนตลาด: CoinMarketCap ณ วันที่ ${marketDate}`,

    alternativesTitle: "กระดานเทรดหนึ่งแห่งเทียบกับทุกแห่งที่เหลือ",
    alternativesText: (others) =>
      `ไม่ได้ลังเลระหว่างสองแห่ง แต่กำลังหากระดานเทรดมาแทนใช่ไหม? หน้าทางเลือกแทนวัดกระดานเทรดหนึ่งแห่งกับอีก ${others} แห่งพร้อมกัน และแสดงว่าแห่งไหนรับผู้ใช้จากประเทศของคุณ`,

    faqTitle: "เปรียบเทียบกระดานเทรด – คำถามที่พบบ่อย",

    ctaTitle: "ตัดสินใจได้แล้ว? สมัครด้วยรหัสแนะนำ",
    ctaText: (exchangeCount) => `รหัสที่ตรวจสอบแล้วของกระดานเทรดทั้ง ${exchangeCount} แห่ง บัญชีเดียวใช้ได้ทั้ง Spot และ Futures โดยไม่มีค่าใช้จ่ายเพิ่ม`,
    ctaButton: "ดูรหัสแนะนำทั้งหมด",
  },
};
