/**
 * The sentences of the comparison pages in Thai. Same functions and the same logic as `./en.ts`, written in Thai.
 *
 * Wording: "กระดานเทรด" (classifier แห่ง), "ทางเลือกแทน Binance", "รหัสแนะนำ", "ค่าธรรมเนียม", "Maker / Taker",
 * "ยืนยันตัวตน (KYC)", "เลเวอเรจ", "ได้เปรียบ" for "ahead". The reader is "คุณ" (at most once per sentence), the site "เรา".
 * Thai has no plural, gender or case: nothing is glued to a name, so `verb()` and the singular / plural branches of
 * the English file fall away. A Latin name, a code or a number has one space on each side; Thai words stand
 * together (`glue()` adds the space only where an inserted text starts with a Latin letter, a digit or a bracket).
 *
 * Thai closes no sentence with a mark: sentences and data texts are joined with one space, never with ". ".
 * Lists built in code use `list()` of the dictionary ("Binance, OKX และ Bybit"); clause items that English joins
 * with "; " (the advantages) keep "; ". Country names stand alone in `name` ("ใน" + name, no space: "ในเยอรมนี");
 * `residents` is "ผู้ที่อาศัยอยู่ใน" + name; the UAE is "UAE" only in `short`.
 * Data texts are inserted as written (section 7 of the language sheet): `afterSignupShort` loses its "ได้ – " where
 * English drops "Yes – ", `maxLeverage` ("สูงสุด 150x (…)") follows "เลเวอเรจ" directly, `chooseIf` follows "ถ้า"
 * directly. Thai has no capital letters, so no inserted text is ever lower-cased. Fee rates arrive in the site's
 * notation (0.02%); leverage stays 150x.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
import { withReading } from "@/i18n/name-readings";
import {
  addLater,
  altInfo as altInfoIn,
  alternativesTo as alternativesIn,
  cheaper,
  countryGroups,
  feePair,
  highestLeverage,
  largestOpenInterest,
  leverageOf,
  lowestFutures,
  lowestSpot,
  pct,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "th";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- joining --------------------------------- */

/** Puts a Thai word before an inserted text: no space before Thai script, one space before anything else. */
const glue = (thai: string, text: string) => (/^\p{Script=Thai}/u.test(text.trim()) ? `${thai}${text.trim()}` : `${thai} ${text.trim()}`);
/** The `pick` lines of several exchanges, one sentence each, joined with a space. */
const picks = (list: Exchange[]) => list.map((a) => altInfo(a).pick.trim()).join(" ");
/** `afterSignupShort` without its leading "ได้ – ". */
const withoutYes = (s: string) => s.replace(/^ได้\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` after "มี" in sentences ("มีบอทเทรด"); every noun starts with a Thai word. */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy Trading", noun: "ฟีเจอร์ Copy Trading" },
  tradingBots: { label: "บอทเทรด", noun: "บอทเทรด" },
  options: { label: "Options", noun: "ตลาด Options" },
  demoTrading: { label: "ทดลองเทรด (Demo Trading)", noun: "บัญชีทดลองเทรด (Demo Trading)" },
  margin: { label: "Spot Margin", noun: "บริการเทรด Margin ในตลาด Spot" },
  p2p: { label: "ตลาด P2P", noun: "ตลาด P2P" },
  fiat: { label: "ซื้อด้วยบัตร / โอนผ่านธนาคาร", noun: "บริการซื้อคริปโตด้วยบัตรหรือโอนผ่านธนาคาร" },
  earn: { label: "Earn / Staking", noun: "ผลิตภัณฑ์ Earn" },
  launchpad: { label: "Launchpad / Launchpool", noun: "แพลตฟอร์ม Launchpad" },
  web3Wallet: { label: "กระเป๋า Web3", noun: "กระเป๋า Web3 แบบ Self-custody" },
  card: { label: "บัตรคริปโต", noun: "บัตรคริปโต" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("ในเยอรมนี"), `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "สหรัฐอเมริกา", short: "สหรัฐอเมริกา" },
  uk: { name: "สหราชอาณาจักร", short: "สหราชอาณาจักร" },
  ca: { name: "แคนาดา", short: "แคนาดา" },
  de: { name: "เยอรมนี", short: "เยอรมนี" },
  fr: { name: "ฝรั่งเศส", short: "ฝรั่งเศส" },
  nl: { name: "เนเธอร์แลนด์", short: "เนเธอร์แลนด์" },
  es: { name: "สเปน", short: "สเปน" },
  it: { name: "อิตาลี", short: "อิตาลี" },
  au: { name: "ออสเตรเลีย", short: "ออสเตรเลีย" },
  jp: { name: "ญี่ปุ่น", short: "ญี่ปุ่น" },
  sg: { name: "สิงคโปร์", short: "สิงคโปร์" },
  hk: { name: "ฮ่องกง", short: "ฮ่องกง" },
  in: { name: "อินเดีย", short: "อินเดีย" },
  ae: { name: "สหรัฐอาหรับเอมิเรตส์", short: "UAE" },
};
/** `residents`: "ผู้ที่อาศัยอยู่ในญี่ปุ่น". */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `ผู้ที่อาศัยอยู่ใน${countryWords[c.key].name}` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "ถูกจำกัด",
  regional: "เว็บไซต์เฉพาะภูมิภาค",
  partial: "จำกัดบางส่วน",
  open: "ไม่ถูกจำกัด",
};

/** The market of a fee comparison: "ตลาด Spot" / "สัญญา Perpetual" (both end in a Latin word). */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "ตลาด Spot" : "สัญญา Perpetual");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} และ ${x.name} คิดค่าธรรมเนียมมาตรฐานของ${label} เท่ากัน คือ Maker ${fa.maker} / Taker ${fa.taker}`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} ถูกกว่าทั้งฝั่ง Maker และ Taker`
      : mm !== 0
        ? `${who} ถูกกว่าเฉพาะฝั่ง Maker ขณะที่ Taker จ่ายเท่ากัน`
        : `${who} ถูกกว่าเฉพาะฝั่ง Taker ขณะที่ Maker จ่ายเท่ากัน`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} ถูกกว่าฝั่ง Maker ขณะที่ ${x.name} ถูกกว่าฝั่ง Taker`
          : `${x.name} ถูกกว่าฝั่ง Maker ขณะที่ ${a.name} ถูกกว่าฝั่ง Taker`;
  return `ค่าธรรมเนียม${label} ของ ${a.name} อยู่ที่ Maker ${fa.maker} / Taker ${fa.taker} ส่วน ${x.name} อยู่ที่ ${fx.maker} / ${fx.taker} เท่ากับว่า ${verdict}`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `ค่าธรรมเนียม${marketName(market)} ของ ${x.name} อยู่ที่ ${feePair(fx)} (Maker / Taker)`,
    lower.length ? `ทางเลือกที่ถูกกว่า ได้แก่ ${rates(lower)}` : `ทางเลือกทั้ง ${alts.length} แห่งไม่มีแห่งใดถูกกว่า`,
    same.length ? `ทางเลือกที่ค่าธรรมเนียมเท่ากัน ได้แก่ ${names(same)}` : "",
    higher.length ? `ทางเลือกที่แพงกว่า ได้แก่ ${rates(higher)}` : "",
    mixed.length ? `ทางเลือกที่ถูกกว่าเพียงฝั่งเดียว ได้แก่ ${rates(mixed)}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`ค่าธรรมเนียม ${label} ต่ำกว่า: ${feePair(fa)} แทน ${feePair(fx)} (Maker / Taker)`);
    else if (m < 0 && t === 0) out.push(`ค่าธรรมเนียม ${label} ฝั่ง Maker ต่ำกว่า: ${fa.maker} แทน ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`ค่าธรรมเนียม ${label} ฝั่ง Taker ต่ำกว่า: ${fa.taker} แทน ${fx.taker}`);
    else if (m < 0) out.push(`ค่าธรรมเนียม ${label} ฝั่ง Maker ต่ำกว่า: ${fa.maker} แทน ${fx.maker} (แต่ฝั่ง Taker สูงกว่า)`);
    else if (t < 0) out.push(`ค่าธรรมเนียม ${label} ฝั่ง Taker ต่ำกว่า: ${fa.taker} แทน ${fx.taker} (แต่ฝั่ง Maker สูงกว่า)`);
  };
  fee("Spot", a.spotFees, x.spotFees);
  fee("Futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`เลเวอเรจสูงสุดมากกว่า: ${leverageOf(a)}x แทน ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Open Interest ในตลาดอนุพันธ์สูงกว่า: ${formatBn(a.market.openInterestBn)} เทียบกับ ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`จำนวนตลาดอนุพันธ์มากกว่า: ${a.market.markets} ตลาด เทียบกับ ${x.market.markets} ตลาด`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`ยังเพิ่มรหัสแนะนำที่ลืมกรอกได้ทีหลัง (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${glue("มี", joinList(notOffered.map((f) => f.noun)))} ซึ่ง ${x.name} ไม่มี`);
  if (notFound.length)
    out.push(`${glue("มี", joinList(notFound.map((f) => f.noun)))} ขณะที่เราไม่พบผลิตภัณฑ์ลักษณะนี้บนเว็บไซต์ของ ${x.name} เอง`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`แพลตฟอร์มสำหรับเขตเศรษฐกิจยุโรป (EEA) ที่ได้รับอนุญาตตาม MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`ไม่จำกัดการใช้งานใน${joinList(openWhere.map((c) => c.name))} ขณะที่ ${x.name} ปิดให้บริการที่นั่น`);
  if (regionalWhere.length)
    out.push(`ให้บริการใน${joinList(regionalWhere.map((c) => c.name))} ผ่านแพลตฟอร์มเฉพาะภูมิภาค ขณะที่ ${x.name} ปิดให้บริการที่นั่น`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
function countryAnswer(x: Exchange, alts: Exchange[], country: (typeof countryList)[number]): string {
  const c = countries.find((it) => it.key === country.key)!;
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const ownNote = own.note ? ` (${own.note})` : "";
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} ระบุ${c.name}ไว้ในรายชื่อประเทศที่ถูกจำกัดของตัวเอง`);
  else if (own.status === "partial") parts.push(`${x.name} จำกัดการใช้งานใน${c.name}บางส่วน${ownNote}`);
  else if (own.status === "regional") parts.push(`${x.name} ให้บริการ${c.residents} ผ่านแพลตฟอร์มเฉพาะภูมิภาค${ownNote}`);
  else parts.push(`${x.name} ไม่ได้ระบุ${c.name}เป็นประเทศที่ถูกจำกัด`);
  if (g.open.length) parts.push(`${names(g.open)} ไม่ได้ระบุ${c.name}เป็นประเทศที่ถูกจำกัด`);
  if (g.regional.length) parts.push(`${joinList(withNote(g.regional))} ให้บริการ${c.residents} ผ่านแพลตฟอร์มเฉพาะภูมิภาคที่แยกออกมาต่างหาก`);
  if (g.partial.length) parts.push(`จำกัดบางส่วน: ${joinList(withNote(g.partial))}`);
  if (g.restricted.length) parts.push(`${names(g.restricted)} จำกัดการใช้งานใน${c.name}${own.status === "restricted" ? "เช่นกัน" : ""}`);
  if (!g.open.length && !g.regional.length) parts.push(`ทางเลือกทั้ง ${alts.length} แห่งไม่มีแห่งใดเปิดให้${c.residents}ใช้งานได้เต็มที่`);
  parts.push(
    "รายชื่อประเทศเปลี่ยนแปลงได้ และการที่ประเทศใดไม่อยู่ในรายชื่อก็ไม่ได้รับประกันว่าทุกผลิตภัณฑ์จะเปิดให้บริการในประเทศนั้น ข้อกำหนดของกระดานเทรดแต่ละแห่งคือสิ่งที่ใช้ตัดสิน",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `หน้านี้เปรียบเทียบทางเลือกแทน ${withReading(x, locale)} ได้แก่ ${names(alts)} รวม ${alts.length} แห่ง ${picks(alts)} ทั้ง ${alts.length} แห่งกำหนดให้ผู้ใช้ใหม่ยืนยันตัวตน (KYC) และแต่ละแห่งมีรายชื่อประเทศที่ถูกจำกัดของตัวเอง จึงควรดูตารางประเทศก่อนสมัคร`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `ระบุให้ชัดว่ากระดานเทรดใหม่ต้องดีกว่า ${x.name} ในเรื่องใด`,
      text: `ค่าธรรมเนียมต่ำกว่า เลเวอเรจสูงกว่า เหรียญมากกว่า หรือแค่กระดานเทรดที่รับผู้ใช้จากประเทศของคุณ ตารางในหน้านี้บอกว่าทางเลือกแต่ละแห่งได้เปรียบ ${x.name} ตรงไหนและไม่ได้เปรียบตรงไหน`,
    },
    {
      title: "ตรวจสอบว่ากระดานเทรดรับผู้ใช้จากประเทศของคุณ",
      text: "กระดานเทรดแต่ละแห่งมีรายชื่อประเทศที่ถูกจำกัดของตัวเอง และบางแห่งจะส่งผู้ใช้ไปยังแพลตฟอร์มเฉพาะภูมิภาคที่มีผลิตภัณฑ์และขีดจำกัดต่างออกไป ดูตารางประเทศก่อนสมัคร",
    },
    {
      title: "สมัครผ่านลิงก์แนะนำ",
      text: `${names(signupOnly)} รับรหัสแนะนำเฉพาะตอนสมัคร หรือไม่ได้ระบุวิธีเพิ่มรหัสทีหลัง จึงต้องใช้ลิงก์ตั้งแต่ก่อนเปิดบัญชี${later.length ? ` ส่วน ${names(later)} ให้เพิ่มรหัสทีหลังได้ตามเงื่อนไขที่กำหนด` : ""}`,
    },
    {
      title: "ยืนยันตัวตนให้เสร็จก่อนย้ายเงิน",
      text: `ทางเลือกทั้ง ${alts.length} แห่งกำหนดให้ผู้ใช้ใหม่ยืนยันตัวตน และส่วนใหญ่จะยังฝากเงินหรือเทรดไม่ได้จนกว่าจะยืนยันเสร็จ เตรียมหนังสือเดินทาง บัตรประจำตัวประชาชน หรือใบขับขี่ไว้ให้พร้อม`,
    },
    {
      title: `ปิดสถานะที่เปิดอยู่บน ${x.name}`,
      text: `สถานะ Futures และ Margin ย้ายข้ามกระดานเทรดไม่ได้ ปิดสถานะบน ${x.name} ก่อน หรือเก็บบัญชีไว้จนกว่าสถานะจะสิ้นสุด`,
    },
    {
      title: "ถอนเงินไปยังที่อยู่ฝากเงินใหม่",
      text: "คัดลอกที่อยู่ฝากเงินจากกระดานเทรดใหม่ เลือกเหรียญเดียวกันและเครือข่ายเดียวกันทั้งสองฝั่ง แล้วส่งจำนวนเล็กน้อยเพื่อทดสอบก่อน การโอนผิดเครือข่ายอาจทำให้เงินสูญหาย",
    },
    {
      title: `ตัดสินใจว่าจะทำอย่างไรกับบัญชี ${x.name}`,
      text: `คุณเก็บบัญชีไว้ได้ เพราะบัญชีบนกระดานเทรดแต่ละแห่งแยกจากกัน ระดับค่าธรรมเนียม รหัสแนะนำที่ผูกไว้ และรางวัลที่ยังไม่ได้ใช้จะอยู่กับ ${x.name} และไม่ย้ายตามไปด้วย`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const highest = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `ทางเลือกแทน ${x.name} ที่ดีที่สุดคือกระดานเทรดไหน?`,
      a: `ไม่มีทางเลือกแทน ${x.name} แห่งเดียวที่ดีที่สุด เพราะขึ้นอยู่กับว่าคุณต้องการย้ายด้วยเหตุผลอะไร ${picks(alts)} หน้านี้เปรียบเทียบทั้ง ${n} แห่งกับ ${x.name} ในด้านค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ ประเทศที่เปิดให้บริการ และการยืนยันตัวตน โดยใช้ตัวเลขจากเว็บไซต์ทางการของกระดานเทรดแต่ละแห่ง ตรวจสอบเมื่อวันที่ ${date}`,
    },
    {
      q: `กระดานเทรดคล้าย ${x.name} มีที่ไหนบ้าง?`,
      a: `${names(alts)} คือกระดานเทรดที่ใกล้เคียงที่สุด ทุกแห่งเป็นกระดานเทรดแบบรวมศูนย์ (CEX) เช่นเดียวกับ ${x.name} โดยเปิดให้เทรด Spot และ Futures แบบใช้เลเวอเรจได้ภายใต้บัญชีเดียว และมีโปรแกรมแนะนำเพื่อนสำหรับผู้ใช้ใหม่ ความแตกต่างอยู่ที่ค่าธรรมเนียม เลเวอเรจสูงสุด จำนวนสินทรัพย์ที่เปิดให้เทรด และประเทศที่รับผู้ใช้`,
    },
    {
      q: `ทางเลือกแทน ${x.name} ที่ใหญ่ที่สุดคือกระดานเทรดไหน?`,
      a: `หากวัดจาก Open Interest (สถานะคงค้าง) ในตลาดอนุพันธ์บน CoinMarketCap (ข้อมูล ณ วันที่ ${prettyDate(site.marketDataDate)}) ${names(oi)} ใหญ่ที่สุดในทางเลือก ${n} แห่ง ด้วยมูลค่า ${formatBn(oi[0].market.openInterestBn)} ส่วน ${x.name} เองอยู่ที่ ${formatBn(x.market.openInterestBn)}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `ทางเลือกแทน ${x.name} แห่งไหนค่าธรรมเนียมต่ำที่สุด?`,
      a: `${names(lowF)} มีค่าธรรมเนียม Futures มาตรฐานต่ำที่สุดในทางเลือก ${n} แห่ง คือ ${feePair(lowF[0].futuresFees)} (Maker / Taker) ส่วนในตลาด Spot แห่งที่ถูกที่สุดคือ ${names(lowS)} ที่ ${feePair(lowS[0].spotFees)} ขณะที่ ${x.name} คิด ${feePair(x.futuresFees)} สำหรับ Futures และ ${feePair(x.spotFees)} สำหรับ Spot${lowF.length === 1 ? ` ${lowF[0].feeNote.trim()}` : ""} ทั้งหมดนี้เป็นอัตราระดับมาตรฐาน ระดับ VIP และโทเคนของกระดานเทรดช่วยลดค่าธรรมเนียมลงได้อีก`,
    },
    {
      q: `กระดานเทรดไหนค่าธรรมเนียมถูกกว่า ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `สัญญา Perpetual: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))} เทียบกับ ${feePair(x.futuresFees)} บน ${x.name}` : `ในสัญญา Perpetual ทางเลือกทั้ง ${n} แห่งไม่มีแห่งใดคิดต่ำกว่า ${feePair(x.futuresFees)} ของ ${x.name}`} ${cheaperS.length ? `ตลาด Spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))} เทียบกับ ${feePair(x.spotFees)} บน ${x.name}` : `ในตลาด Spot ไม่มีแห่งใดคิดต่ำกว่า ${feePair(x.spotFees)} ของ ${x.name}`} ตัวเลขทั้งหมดเป็นค่าธรรมเนียม Maker / Taker ระดับมาตรฐาน`
          : `ในระดับมาตรฐาน ทางเลือกทั้ง ${n} แห่งไม่มีแห่งใดถูกกว่า ${x.name} ซึ่งคิด ${feePair(x.futuresFees)} สำหรับ Futures และ ${feePair(x.spotFees)} สำหรับ Spot (Maker / Taker) เป็นอัตราที่ต่ำที่สุดในการเปรียบเทียบนี้ ถึงอย่างนั้นทางเลือกแต่ละแห่งก็ยังน่าพิจารณาด้วยเหตุผลอื่น ได้แก่ การกำกับดูแล ผลิตภัณฑ์ หรือประเทศที่รับผู้ใช้`,
    },
    {
      q: `ทางเลือกแทน ${x.name} แห่งไหนให้เลเวอเรจสูงที่สุด?`,
      a: `${names(highest)} ให้เลเวอเรจสูงที่สุดในทางเลือก ${n} แห่ง: ${highest[0].maxLeverage} ทางเลือกที่เหลือ: ${joinList(
        alts.filter((a) => !highest.includes(a)).map((a) => `${a.name} ${leverageOf(a)}x`),
      )} ส่วน ${x.name} เองให้${glue("เลเวอเรจ", x.maxLeverage)} เลเวอเรจสูงเพิ่มความเสี่ยงที่จะถูกบังคับปิดสถานะ (Liquidation) อย่างมาก`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `ทางเลือกแทน ${x.name} แห่งไหนใช้ได้ใน${c.name}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `ทางเลือกแทน ${x.name} แบบไม่ต้อง KYC มีไหม?`,
      a: `ไม่มีในทางเลือก ${n} แห่งนี้ ทุกแห่งกำหนดให้ผู้ใช้ใหม่ยืนยันตัวตนดังนี้ ${alts.map((a) => `${a.name}: ${a.signup.kycShort}`).join(" ")} ส่วน ${x.name}: ${x.signup.kycShort}`,
    },
    {
      q: `ทางเลือกแทน ${x.name} แห่งไหนอยู่ภายใต้การกำกับดูแลตาม MiCA ในสหภาพยุโรป (EU)?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ระบุนิติบุคคลที่ได้รับอนุญาตตาม MiCA สำหรับผู้ที่อาศัยอยู่ในเขตเศรษฐกิจยุโรป (EEA)` : `ทางเลือกทั้ง ${n} แห่งไม่มีแห่งใดระบุนิติบุคคลที่ได้รับอนุญาตตาม MiCA`}${noMica.length ? ` ${names(noMica)} ไม่ได้ระบุใบอนุญาต MiCA ไว้บนหน้าเว็บของตัวเอง` : ""} ${xInfo.mica ? `ส่วน ${x.name}: ${xInfo.mica}` : `ส่วน ${x.name} เองไม่ได้ระบุนิติบุคคลใดไว้`} แพลตฟอร์มเฉพาะภูมิภาคมักมีผลิตภัณฑ์ ค่าธรรมเนียม และขีดจำกัดเป็นของตัวเอง`,
    },
    {
      q: `ทางเลือกแทน ${x.name} แห่งไหนปลอดภัยที่สุด?`,
      a: `ไม่มีกระดานเทรดแบบรวมศูนย์ (CEX) แห่งใดที่ปลอดความเสี่ยง การเปรียบเทียบที่ตรงไปตรงมาจึงดูจากสิ่งที่แต่ละแห่งเปิดเผย ${alts
        .map(
          (a, i) =>
            `Proof of Reserves${i === 0 ? " (หลักฐานการสำรองสินทรัพย์)" : ""} ของ ${a.name}: ${altInfo(a).reserves} ${altInfo(a).fund ? altInfo(a).fund : `${a.name} ไม่ได้ระบุกองทุนคุ้มครองผู้ใช้`}`,
        )
        .join(" ")} เก็บเงินไว้บนกระดานเทรดเฉพาะจำนวนที่ใช้เทรดอยู่จริง ไม่ว่าจะเป็นแห่งไหน`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `ทางเลือกแทน ${x.name} แห่งไหน${glue("มี", f.noun)}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${glue("มี", f.noun)}` : `บนเว็บไซต์ของทางเลือกทั้ง ${n} แห่ง ไม่มีแห่งใดแสดง${f.noun}`}${no.length ? ` ${names(no)} ไม่มีผลิตภัณฑ์นี้` : ""}${unknown.length ? ` ในการตรวจสอบของเรา ไม่พบผลิตภัณฑ์ลักษณะนี้บนเว็บไซต์ของ ${names(unknown)}` : ""} ${own === true ? `ส่วน ${x.name} เองก็มีเช่นกัน` : own === false ? `ส่วน ${x.name} เองไม่มี` : `ส่วน ${x.name} เองไม่ได้แสดงผลิตภัณฑ์ลักษณะนี้บนเว็บไซต์`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `ทางเลือกแทน ${x.name} แห่งไหนมีเหรียญให้เทรดมากที่สุด?`,
      a: `ตามตัวเลขที่แต่ละแห่งเปิดเผยเอง ${alts.map((a) => `${a.name} ${glue("มี", a.assets)}`).join(" ")} ส่วน ${x.name} ${glue("มี", x.assets)} กระดานเทรดแต่ละแห่งนับไม่เหมือนกัน บางแห่งนับเหรียญ บางแห่งนับคู่เทรด จึงนำตัวเลขมาเทียบกันตรง ๆ ไม่ได้`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `ย้ายจาก ${x.name} ไปกระดานเทรดอื่นต้องทำอย่างไร?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}`)
        .join(" "),
    },
    {
      q: `เปิดบัญชีกับกระดานเทรดอื่นแล้ว ยังเก็บบัญชี ${x.name} ไว้ได้ไหม?`,
      a: `ได้ กระดานเทรดแต่ละแห่งเป็นบริษัทแยกกัน บัญชีบนแห่งหนึ่งจึงไม่กระทบบัญชีบนอีกแห่ง และใช้ทั้งสองบัญชีควบคู่กันได้ สิ่งที่ย้ายตามไปไม่ได้คือทุกอย่างที่ผูกกับบัญชี ได้แก่ รหัสแนะนำที่ผูกไว้กับ ${x.name} ระดับค่าธรรมเนียม รางวัลต้อนรับ และประวัติการเทรด ซึ่งจะยังอยู่กับ ${x.name}`,
    },
    {
      q: `ย้ายสถานะ Futures ที่เปิดอยู่จาก ${x.name} ไปกระดานเทรดอื่นได้ไหม?`,
      a: `ไม่ได้ สถานะ Futures มีอยู่เฉพาะบนกระดานเทรดที่เปิดสถานะนั้นเท่านั้น ถ้าจะย้าย ให้ปิดสถานะบน ${x.name} ถอนเงิน แล้วเปิดสถานะใหม่บนกระดานเทรดอีกแห่ง ในราคาและค่าธรรมเนียมที่ใช้อยู่ที่นั่น`,
    },
    {
      q: `ทางเลือกแทน ${x.name} มีรหัสแนะนำไหม?`,
      a: `มีครบทั้ง ${n} แห่ง ดังนี้ ${alts.map((a) => `${a.name}: รหัส ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join(" ")} การใช้รหัสแนะนำไม่มีค่าใช้จ่าย และค่าธรรมเนียมการเทรดไม่เพิ่มขึ้น`,
    },
    {
      q: `สมัครทางเลือกแทน ${x.name} ไปแล้ว เพิ่มรหัสแนะนำทีหลังได้ไหม?`,
      a: `${alts.map((a) => `${a.name}: ${a.referral.afterSignupShort}`).join(" ")} วิธีที่ปลอดภัยสำหรับทุกกระดานเทรดคือสมัครผ่านลิงก์แนะนำ`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} ดีกว่า ${x.name} ไหม?`,
      a: `${ahead.length ? `${a.name} ได้เปรียบ ${x.name} ในข้อต่อไปนี้: ${ahead.join("; ")}` : `ในประเด็นที่เราเปรียบเทียบ ${a.name} ไม่มีข้อได้เปรียบที่วัดได้เหนือ ${x.name}`} ${behind.length ? `ส่วน ${x.name} ได้เปรียบในข้อต่อไปนี้: ${behind.join("; ")}` : `ส่วน ${x.name} ไม่ได้เปรียบในข้อใดเลย`} ${a.name} เหมาะกับคุณ ${glue("ถ้า", altInfo(a).chooseIf[0])}`,
    };
  });

  return [
    { id: "choosing", title: `เลือกกระดานเทรดแทน ${x.name}`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "ค่าธรรมเนียมและเลเวอเรจ", faqs: fees },
    { id: "countries", title: "ประเทศ KYC และการกำกับดูแล", faqs: countryFaqs },
    { id: "features", title: "ผลิตภัณฑ์และเหรียญ", faqs: featureFaqs },
    { id: "switching", title: `ย้ายจาก ${x.name} และรหัสแนะนำ`, faqs: switching },
    { id: "versus", title: `${x.name} เทียบกับทางเลือกแต่ละแห่ง`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `ทางเลือกแทน ${x.name} ที่ดีที่สุดมีแห่งไหนบ้าง?`,
    a: `${picks(alts)} หน้าทางเลือกแทน ${x.name} ของเราเปรียบเทียบทั้ง ${alts.length} แห่งกับ ${x.name} ในด้านค่าธรรมเนียม เลเวอเรจ ผลิตภัณฑ์ ประเทศที่เปิดให้บริการ และการยืนยันตัวตน`,
  };
}

export const th: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "มี", no: "ไม่มี", notFound: "ไม่พบบนเว็บไซต์ของกระดานเทรด" },
  names,
  feeSentence,
  feeSummary,
  advantages,
  countryAnswer,
  quickAnswer,
  switchSteps,
  buildAlternativesFaqs,
  alternativesTeaserFaq,
};
