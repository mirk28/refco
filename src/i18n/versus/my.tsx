/**
 * The head-to-head pages ("/my/<a>-vs-<b>") and the comparison hub ("/my/compare") in Burmese.
 * Same keys as `./en.tsx`, written natively for Burmese readers (polite written Burmese, "သင်" / "ကျွန်ုပ်တို့").
 *
 * Wording: "Exchange", "အခကြေးငွေ", "Referral Code", "Leverage"; Spot, Futures, Margin, Maker / Taker, Open Interest,
 * Proof of Reserves, Copy Trading, KYC and MiCA stay in Latin letters. The pages call themselves
 * “ထိပ်တိုက် နှိုင်းယှဉ်ချက်”, the hub “Exchange နှိုင်းယှဉ်ချက်”; the better value of a row is “ပိုသာ”, a tie “တူညီ”.
 * Between two names the pages keep the Latin "vs"; FAQ questions use the spoken form people type
 * ("Binance နဲ့ OKX ဘယ်ဟာ ပိုကောင်းလဲ?"), answers the written form.
 * Names stay in Latin letters and come first ("Binance Referral Code", "OKX အခကြေးငွေ"); a particle follows a Latin
 * word, a number or a bracket after one space and is glued to a Burmese word (`attach`). A sentence ends with "။",
 * a list or clause comma is "၊ "; data texts are inserted as they are (no `lcFirst`), only their final mark is
 * dropped where the code closes the sentence itself (`bare`).
 * Generated dates: `prettyDate` gives "2026 နိုဝင်ဘာ 16" and takes " ရက်" in a sentence; the month of a title comes
 * from `shortMonthYear` ("2026 နို") and is written out in full (`fullMonth`).
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
import type { HubFacts, VersusFaqGroup, VersusText } from "./en";
import { DESC_MAX, TITLE_MAX, fit, variant, yearOf } from "@/lib/fit";

const locale = "my";
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

/** A data text without its final mark ("။" or "."), for places where the code closes the sentence itself. */
const bare = (s: string) => s.trim().replace(/\s*[။.]$/, "");
/** A data text as a closed sentence. */
const sentence = (s: string) => `${bare(s)}။`;
/** A particle after a text: glued to a Burmese letter, one space after Latin, digits and brackets. */
const attach = (s: string, particle: string) => (/[\u1000-\u109F]$/.test(s) ? `${s}${particle}` : `${s} ${particle}`);
/** Drops the source bracket of `users` / `assets`: "(Binance အဆိုအရ)", "(Bybit API)". */
const withoutSource = (s: string) => bare(s.replace(/\s*\((?:[^()]*အဆိုအရ|[^()]*\bAPI)\)/, ""));
/** "2026 နို" → "2026 နိုဝင်ဘာ": titles show the month in full. */
const fullMonth: Record<string, string> = {
  ဇန်: "ဇန်နဝါရီ",
  ဖေ: "ဖေဖော်ဝါရီ",
  ဧ: "ဧပြီ",
  ဇူ: "ဇူလိုင်",
  ဩ: "ဩဂုတ်",
  စက်: "စက်တင်ဘာ",
  အောက်: "အောက်တိုဘာ",
  နို: "နိုဝင်ဘာ",
  ဒီ: "ဒီဇင်ဘာ",
};
const longMonth = (shortMonthYear: string) => shortMonthYear.replace(/(\S+)$/, (m) => fullMonth[m] ?? m);
const offer = (e: Exchange) => bare(e.feeDiscount || e.bonusHeadline);
const has = (e: Exchange, key: FeatureKey) => altInfo(e).features[key].has === true;

const cmcRanking = "CoinMarketCap ၏ Derivatives အဆင့်စာရင်း";
const oiGloss = "Open Interest (ဖွင့်ထားသော Position စုစုပေါင်း)";
const leverageRisk = "Leverage မြင့်လျှင် Liquidation (Position အတင်းပိတ်ခံရခြင်း) ဖြစ်နိုင်ခြေ သိသိသာသာ မြင့်တက်ပါသည်။";
const regionalNote = "ဒေသဆိုင်ရာ ပလက်ဖောင်းတွင် များသောအားဖြင့် ကိုယ်ပိုင် ထုတ်ကုန်များ၊ အခကြေးငွေနှင့် ကန့်သတ်ချက်များ ရှိပါသည်။";
const safeWay = "စိတ်ချရသော နည်းလမ်းသည် Referral Link ဖြင့် အကောင့်ဖွင့်ခြင်း ဖြစ်ပါသည်။";
const countBy = "Exchange များ ကိုယ်တိုင် ထုတ်ပြန်ထားသော ကိန်းဂဏန်းများအရ";

/** "Binance က အချက် 6 ချက်တွင်၊ OKX က အချက် 5 ချက်တွင် ပိုသာပြီး အချက် 3 ချက်တွင် တူညီပါသည်" */
const tally = (a: Exchange, b: Exchange, s: ScoreSummary) =>
  `${a.name} က အချက် ${s.a.length} ချက်တွင်၊ ${b.name} က အချက် ${s.b.length} ချက်တွင် ပိုသာ${s.tie.length ? `ပြီး အချက် ${s.tie.length} ချက်တွင် တူညီ` : ""}ပါသည်`;

/** The "answer first" paragraph of a head-to-head page. */
function versusAnswer(a: Exchange, b: Exchange, s: ScoreSummary): string {
  const lead = (e: Exchange, rows: ScoreRow[]) =>
    rows.length
      ? `${e.name} က ${attach(joinList(rows.map((r) => r.topic)), rows.length > 1 ? "တို့တွင်" : "တွင်")} ပိုသာပါသည်။`
      : `${e.name} သည် မည်သည့် အချက်တွင်မျှ မပိုသာပါ။`;
  return `အချက်တိုင်းတွင် ပိုကောင်းသော Exchange သည် ${a.name} လည်း မဟုတ်၊ ${b.name} လည်း မဟုတ်ပါ။ ဤနှိုင်းယှဉ်ချက်ရှိ တိုင်းတာနိုင်သော အချက် ${s.measurable} ချက်အနက် ${tally(a, b, s)}။ ${lead(a, s.a)} ${lead(b, s.b)} ${a.name} ကို ရွေးသင့်သည့် အခြေအနေ: ${sentence(altInfo(a).chooseIf[0])} ${b.name} ကို ရွေးသင့်သည့် အခြေအနေ: ${sentence(altInfo(b).chooseIf[0])}`;
}

/* ---------------------------------- sentences -------------------------------- */

function leverageSentence(a: Exchange, b: Exchange): string {
  const la = leverageOf(a);
  const lb = leverageOf(b);
  if (la === lb)
    return `${a.name} နှင့် ${b.name} ၏ အများဆုံး Leverage တူညီပါသည်။ ${a.name} တွင် ${bare(a.maxLeverage)} ရနိုင်ပြီး ${b.name} တွင်လည်း ${bare(b.maxLeverage)} ရနိုင်ပါသည်။`;
  const [hi, lo] = la > lb ? [a, b] : [b, a];
  return `${hi.name} ၏ အများဆုံး Leverage က ပိုမြင့်ပါသည်။ ${hi.name} တွင် ${bare(hi.maxLeverage)} ရနိုင်ပြီး ${lo.name} တွင် ${bare(lo.maxLeverage)} ရနိုင်ပါသည်။`;
}

function depthSentence(a: Exchange, b: Exchange): string {
  const deeper = a.market.openInterestBn >= b.market.openInterestBn ? a : b;
  return `${cmcRanking} (${prettyDate(site.marketDataDate)} ရက်) အရ ${a.name} တွင် Derivatives ဈေးကွက် ${a.market.markets} ခုအနှံ့ ${oiGloss} ${formatBn(a.market.openInterestBn)} ရှိခဲ့ပြီး ${b.name} တွင် ဈေးကွက် ${b.market.markets} ခုအနှံ့ ${formatBn(b.market.openInterestBn)} ရှိခဲ့ပါသည်။ ${deeper.name} ၏ ဈေးကွက်က ပိုနက်ပါသည်၊ ထို့ကြောင့် Order ပမာဏကြီးများတွင် Spread များသောအားဖြင့် ပိုကျဉ်းပါသည်။`;
}

/** Products that `a` shows on its site and `b` does not, as one sentence ("" when there are none). */
function onlyOnSentence(a: Exchange, b: Exchange): string {
  const extra = featureList.filter((f) => has(a, f.key) && !has(b, f.key));
  if (!extra.length) return "";
  const notOffered = extra.filter((f) => altInfo(b).features[f.key].has === false);
  const notFound = extra.filter((f) => altInfo(b).features[f.key].has === null);
  return [
    notOffered.length ? `${a.name} တွင် ${joinList(notOffered.map((f) => f.noun))} ရှိသော်လည်း ${b.name} တွင် မရှိပါ။` : "",
    notFound.length
      ? `${a.name} တွင် ${joinList(notFound.map((f) => f.noun))} ရှိပါသည်၊ ${b.name} ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင်မူ ထိုကဲ့သို့သော ထုတ်ကုန်ကို ကျွန်ုပ်တို့ ရှာမတွေ့ပါ။`
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** One exchange in one country, without the final mark. A country note reads in brackets after the name. */
const statusPhrase = (e: Exchange, c: Country): string => {
  const { status, note } = altInfo(e).countries[c.key];
  const extra = note ? ` (${bare(note)})` : "";
  if (status === "restricted") return `${e.name}${extra} သည် ${c.residents}ကို ဝန်ဆောင်မှု မပေးပါ`;
  if (status === "regional") return `${e.name}${extra} သည် ${c.residents}ကို ဒေသဆိုင်ရာ ပလက်ဖောင်းမှတစ်ဆင့် ဝန်ဆောင်မှု ပေးပါသည်`;
  if (status === "partial") return `${e.name} သည် ${attach(`${c.name}${extra}`, "ကို")} တစ်စိတ်တစ်ပိုင်း ကန့်သတ်ထားပါသည်`;
  return `${e.name} သည် ${c.name}ကို ကန့်သတ်ထားသော နိုင်ငံများ စာရင်းတွင် မထည့်ထားပါ`;
};

/** Plain-text answer to "Can I use a or b in this country?". `c` is an entry of `compareText("my").countries`. */
const countryPairAnswer = (a: Exchange, b: Exchange, c: Country) =>
  `${statusPhrase(a, c)}။ ${statusPhrase(b, c)}။ နိုင်ငံစာရင်းများ ပြောင်းလဲနိုင်ပြီး စာရင်းတွင် မပါသော နိုင်ငံဖြစ်ခြင်းက ထုတ်ကုန်တိုင်းကို ထိုနိုင်ငံတွင် ပေးထားသည်ဟု အာမမခံပါ၊ Exchange ၏ ကိုယ်ပိုင် စည်းမျဉ်းများကသာ အဆုံးအဖြတ် ပေးပါသည်။`;

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
      ? "နှစ်ခုလုံးတွင် ရှိပါသည်"
      : has(a, key)
        ? `${a.name} တွင်သာ ရှိပါသည်`
        : has(b, key)
          ? `${b.name} တွင်သာ ရှိပါသည်`
          : "Exchange နှစ်ခုလုံး၏ ဝက်ဘ်ဆိုက်တွင် မတွေ့ပါ";
  const noTokenDiscount = "ထိုကဲ့သို့သော လျှော့ဈေးကို ထုတ်ပြန်မထားပါ။";
  const noFund = "အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ ဖော်ပြမထားပါ။";
  const noMica = "ကိုယ်ပိုင် စာမျက်နှာများတွင် MiCA ခွင့်ပြုချက်ရ ကုမ္ပဏီ မဖော်ပြထားပါ";
  const strongest = (list: string[]) => list.slice(0, 2).map(bare).join("။ ");

  const verdict: Faq[] = [
    { q: `${a.name} နဲ့ ${b.name} ဘယ်ဟာ ပိုကောင်းလဲ?`, a: versusAnswer(a, b, s) },
    {
      q: `${a.name} နဲ့ ${b.name} ရဲ့ အဓိက ကွာခြားချက်က ဘာလဲ?`,
      a: `${sentence(ia.pick)} ${sentence(ib.pick)}${aheadA.length ? ` ${a.name} ၏ အထင်ရှားဆုံး တိုင်းတာနိုင်သော အားသာချက်များ: ${strongest(aheadA)}။` : ""}${aheadB.length ? ` ${b.name} ၏ အားသာချက်များ: ${strongest(aheadB)}။` : ""}`,
    },
    {
      q: `${a.name} က ${b.name} ထက် ပိုကြီးလား?`,
      a: `${cmcRanking} (${marketDate} ရက်) အရ ${a.name} တွင် ${oiGloss} ${formatBn(a.market.openInterestBn)}၊ 24 နာရီ အရောင်းအဝယ်ပမာဏ ${formatBn(a.market.volume24hBn)} ရှိခဲ့ပြီး ${b.name} တွင် ${formatBn(b.market.openInterestBn)}၊ ${formatBn(b.market.volume24hBn)} ရှိခဲ့ပါသည်။ ${countBy} ${a.name} တွင် ${withoutSource(a.users)} ရှိပြီး ${b.name} တွင် ${withoutSource(b.users)} ရှိပါသည်။`,
    },
    {
      q: `အစပြုသူတွေအတွက် ${a.name} နဲ့ ${b.name} ဘယ်ဟာ ပိုကောင်းလဲ?`,
      a: `ပထမဆုံး အကောင့်အတွက် အရေးကြီးသည့် အချက် သုံးချက် ရှိပါသည်: ခရစ်တိုကို လွယ်ကူစွာ ဝယ်နိုင်ခြင်း၊ လေ့ကျင့်နိုင်သည့် နည်းလမ်းနှင့် အခကြေးငွေ နည်းခြင်း။ ကတ် သို့မဟုတ် ဘဏ်လွှဲဖြင့် ဝယ်ယူခြင်း: ${state("fiat")}။ စမ်းသပ် အရောင်းအဝယ် (Demo Trading): ${state("demoTrading")}။ Copy Trading: ${state("copyTrading")}။ ${feeSentence(a, b, "spot")} အထောက်အထား အတည်ပြုခြင်း (KYC): ${a.name} တွင် ${bare(a.signup.kycShort)}၊ ${b.name} တွင် ${bare(b.signup.kycShort)}။`,
    },
    {
      q: `Futures အရောင်းအဝယ်အတွက် ${a.name} နဲ့ ${b.name} ဘယ်ဟာ ပိုကောင်းလဲ?`,
      a: `${feeSentence(a, b, "futures")} ${leverageSentence(a, b)} ${depthSentence(a, b)} ${leverageRisk}`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${a.name} နဲ့ ${b.name} ဘယ်ဟာ အခကြေးငွေ ပိုသက်သာလဲ?`,
      a: `${feeSentence(a, b, "futures")} ${feeSentence(a, b, "spot")} ဤနှုန်းများသည် ပုံမှန်အဆင့် (VIP မဟုတ်) နှုန်းများ ဖြစ်ပြီး VIP အဆင့်များနှင့် Exchange Token များဖြင့် ထပ်မံ လျှော့ချနိုင်ပါသည်။`,
    },
    {
      q: `${a.name} နဲ့ ${b.name} မှာ ကိုယ်ပိုင် Token နဲ့ အခကြေးငွေ ပေးရင် လျှော့ဈေး ရလား?`,
      a: `${a.name}: ${a.tokenDiscount ? sentence(a.tokenDiscount) : noTokenDiscount} ${b.name}: ${b.tokenDiscount ? sentence(b.tokenDiscount) : noTokenDiscount}`,
    },
    { q: `${a.name} နဲ့ ${b.name} ဘယ်ဟာ Leverage ပိုမြင့်လဲ?`, a: `${leverageSentence(a, b)} ${leverageRisk}` },
    {
      q: `${a.name} နဲ့ ${b.name} ဘယ်မှာ Coin ပိုများလဲ?`,
      a: `${countBy} ${a.name} တွင် ${withoutSource(a.assets)} ရှိပြီး ${b.name} တွင် ${withoutSource(b.assets)} ရှိပါသည်။ Exchange များ ရေတွက်ပုံ မတူပါ၊ အချို့က Coin များကို ရေတွက်ပြီး အချို့က အရောင်းအဝယ် Pair များကို ရေတွက်သဖြင့် ကိန်းဂဏန်း နှစ်ခုကို တိုက်ရိုက် နှိုင်းယှဉ်၍ မရပါ။`,
    },
  ];

  const us = countryList.find((c) => c.key === "us")!;
  const uk = countryList.find((c) => c.key === "uk")!;
  const others = countryList.filter((c) => differing.includes(c.key) && c.key !== "us" && c.key !== "uk");
  const countries: Faq[] = [
    ...[us, uk, ...others.slice(0, 2)].map((c) => ({ q: `${c.name}မှာ ${a.name} ဒါမှမဟုတ် ${b.name} သုံးလို့ ရလား?`, a: countryPairAnswer(a, b, c) })),
    {
      q: `${a.name} နဲ့ ${b.name} မှာ KYC လိုအပ်လား?`,
      a: `လိုအပ်ပါသည်။ Exchange နှစ်ခုလုံးက အသုံးပြုသူအသစ်များကို အထောက်အထား အတည်ပြုခိုင်းပါသည်။ ${a.name}: ${sentence(a.signup.kycShort)} ${b.name}: ${sentence(b.signup.kycShort)} အထောက်အထား မအတည်ပြုဘဲ အရောင်းအဝယ်လုပ်လိုလျှင် နှစ်ခုလုံး ရွေးချယ်စရာ မဟုတ်ပါ။`,
    },
    {
      q: `${a.name} နဲ့ ${b.name} ဘယ်ဟာ ပိုလုံခြုံလဲ?`,
      a: `မည်သည့် ဗဟိုချုပ်ကိုင် Exchange (CEX) မျှ ဆုံးရှုံးနိုင်ခြေ ကင်းသည် မဟုတ်သဖြင့် Exchange တစ်ခုစီ ထုတ်ပြန်ထားသည့် အချက်များကို နှိုင်းယှဉ်ခြင်းက အမျှတဆုံး ဖြစ်ပါသည်။ ${a.name}: ${sentence(a.regulation)} Proof of Reserves (အရန်ငွေ သက်သေပြချက်): ${sentence(ia.reserves)} ${ia.fund ? sentence(ia.fund) : noFund} ${b.name}: ${sentence(b.regulation)} Proof of Reserves: ${sentence(ib.reserves)} ${ib.fund ? sentence(ib.fund) : noFund} မည်သည့် Exchange တွင်မဆို လက်ရှိ အရောင်းအဝယ်လုပ်နေသော ငွေကိုသာ ထားပါ။`,
    },
    {
      q: `${a.name} နဲ့ ${b.name} က ဥရောပသမဂ္ဂ (EU) မှာ MiCA ခွင့်ပြုချက် ရထားလား?`,
      a: `${a.name}: ${ia.mica ? `ရှိ – ${bare(ia.mica)}` : noMica}။ ${b.name}: ${ib.mica ? `ရှိ – ${bare(ib.mica)}` : noMica}။ ${regionalNote}`,
    },
  ];

  const onlyA = onlyOnSentence(a, b);
  const onlyB = onlyOnSentence(b, a);
  const nothing = (x: Exchange, y: Exchange) =>
    `ကျွန်ုပ်တို့ နှိုင်းယှဉ်သော ထုတ်ကုန် ${featureList.length} မျိုးအနက် မရှိပါ။ ${x.name} က ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် ပြသထားသော ထုတ်ကုန်တိုင်းကို ${y.name} ကလည်း ပြသထားပါသည်။`;
  const products: Faq[] = [
    { q: `${a.name} မှာ ရှိပြီး ${b.name} မှာ မရှိတာ ဘာလဲ?`, a: onlyA || nothing(a, b) },
    { q: `${b.name} မှာ ရှိပြီး ${a.name} မှာ မရှိတာ ဘာလဲ?`, a: onlyB || nothing(b, a) },
    {
      q: `${a.name} နဲ့ ${b.name} မှာ Copy Trading၊ အရောင်းအဝယ် ဘော့တ်၊ Options နဲ့ Demo Trading ရှိလား?`,
      a: `Copy Trading: ${state("copyTrading")}။ အရောင်းအဝယ် ဘော့တ်: ${state("tradingBots")}။ Options: ${state("options")}။ စမ်းသပ် အရောင်းအဝယ် (Demo Trading): ${state("demoTrading")}။${(["copyTrading", "tradingBots", "options", "demoTrading"] as FeatureKey[]).some((k) => has(a, k) !== has(b, k)) ? ` Exchange တစ်ခုတည်းကိုသာ ဖော်ပြထားသည့် နေရာတွင် ကျန် Exchange ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်၌ ထိုထုတ်ကုန်အတွက် စာမျက်နှာကို ${prettyDate(site.lastReviewed)} ရက်တွင် ကျွန်ုပ်တို့ ရှာမတွေ့ပါ။` : ""}`,
    },
  ];

  const referral: Faq[] = [
    {
      q: `${a.name} နဲ့ ${b.name} ရဲ့ Referral Code တွေက ဘာလဲ?`,
      a: `${a.name} Referral Code: ${a.referralCode}။ ထည့်ရမည့် နေရာ: ${sentence(a.referral.whereShort)} ${b.name} Referral Code: ${b.referralCode}။ ထည့်ရမည့် နေရာ: ${sentence(b.referral.whereShort)} ကုဒ် နှစ်ခုလုံး အခမဲ့ဖြစ်ပြီး အရောင်းအဝယ်အခကြေးငွေ မတိုးပါ။`,
    },
    {
      q: `${a.name} နဲ့ ${b.name} ဘယ်ဟာ ကြိုဆိုဘောနပ်စ် ပိုကောင်းလဲ?`,
      a: `${a.name}: ${offer(a)}။ ${b.name}: ${offer(b)}။ Exchange နှစ်ခုလုံး၏ ကြိုဆိုဆုလက်ဆောင်များသည် အထောက်အထား အတည်ပြုခြင်း၊ ငွေသွင်းခြင်း သို့မဟုတ် အရောင်းအဝယ်ပမာဏ စသည့် စည်းကမ်းချက်များနှင့် ချိတ်ဆက်ထားပြီး နိုင်ငံအလိုက် ကွာခြားသဖြင့် ကြော်ငြာထားသော ပမာဏထက် စည်းကမ်းချက်များကို နှိုင်းယှဉ်ပါ။`,
    },
    {
      q: `အကောင့်ဖွင့်ပြီးမှ ${a.name} ဒါမှမဟုတ် ${b.name} မှာ Referral Code ထည့်လို့ ရလား?`,
      a: `${a.name}: ${sentence(a.referral.afterSignupShort)} ${b.name}: ${sentence(b.referral.afterSignupShort)} Exchange နှစ်ခုလုံးတွင် ${safeWay}`,
    },
    {
      q: `${a.name} နဲ့ ${b.name} ကို တစ်ပြိုင်နက် သုံးလို့ ရလား?`,
      a: "ရပါသည်။ Exchange နှစ်ခုသည် သီးခြား ကုမ္ပဏီများ ဖြစ်သဖြင့် တစ်ခုရှိ အကောင့်က အခြားတစ်ခုရှိ အကောင့်ကို မထိခိုက်ပါ၊ Trader အများအပြားလည်း Exchange နှစ်ခုတွင် ငွေထားကြပါသည်။ အခကြေးငွေ အဆင့်၊ Referral နှင့် ဆုလက်ဆောင်များသည် အကောင့်တစ်ခုချင်းစီနှင့် ချိတ်ဆက်ထားပြီး အခြား Exchange သို့ မကူးပြောင်းပါ။",
    },
    {
      q: `${a.name} ကနေ ${b.name} ကို ခရစ်တို ဘယ်လို လွှဲရမလဲ?`,
      a: `အဆင့် 1: ${b.name} အကောင့်ကို Referral Code ${b.referralCode} ဖြင့် ဖွင့်ပြီး အထောက်အထား အတည်ပြုပါ။ အဆင့် 2: Position များကို Exchange များအကြား ရွှေ့၍ မရသဖြင့် ${a.name} တွင် ဖွင့်ထားသော Futures နှင့် Margin Position များကို ပိတ်ပါ။ အဆင့် 3: ${b.name} တွင် အသုံးပြုလိုသော Coin နှင့် Network အတွက် ငွေသွင်းလိပ်စာကို Copy ကူးပါ။ အဆင့် 4: ${a.name} မှ ထိုလိပ်စာသို့ တူညီသော Network ဖြင့် ငွေထုတ်ပါ၊ Network မှားလွှဲလျှင် ငွေ ဆုံးရှုံးနိုင်သဖြင့် စမ်းသပ်ရန် ပမာဏ အနည်းငယ်ကို အရင် ပို့ပါ။ ဆန့်ကျင်ဘက် ဦးတည်ရာသို့ ပြောင်းရွှေ့ရာတွင်လည်း ဤအဆင့်များအတိုင်း လုပ်နိုင်ပါသည်။`,
    },
  ];

  return [
    { id: "verdict", title: `${a.name} သို့မဟုတ် ${b.name}: ဘယ်ဟာ ပိုကောင်းလဲ?`, faqs: verdict },
    { id: "fees", title: "အခကြေးငွေ၊ Leverage နှင့် Coin များ", faqs: fees },
    { id: "countries", title: "နိုင်ငံများ၊ KYC နှင့် လုံခြုံရေး", faqs: countries },
    { id: "products", title: "ထုတ်ကုန်များ", faqs: products },
    { id: "referral", title: "Referral Code များနှင့် Exchange နှစ်ခုကြား ပြောင်းရွှေ့ခြင်း", faqs: referral },
  ];
}

/* ------------------------------ comparison hub ------------------------------ */

const hubAnswer = ({ lowF, hi, oi, mica }: HubFacts) =>
  `${names(lowF)} က ပုံမှန် Futures အခကြေးငွေ အနည်းဆုံး (${feePair(lowF[0].futuresFees)} Maker / Taker)၊ ${names(hi)} က Leverage အမြင့်ဆုံး (${leverageOf(hi[0])}x) ဖြစ်ပြီး ${names(oi)} က ${oiGloss} ${formatBn(oi[0].market.openInterestBn)} ဖြင့် Derivatives ဈေးကွက် အနက်ဆုံး ဖြစ်ပါသည်။ ${names(mica)} သည် ဥရောပ စီးပွားရေးဒေသ (EEA) တွင် နေထိုင်သူများအတွက် MiCA ခွင့်ပြုချက်ရ ပလက်ဖောင်းကို ဖော်ပြထားပါသည်။ သင့်အတွက် မည်သည့် Exchange က ပိုကောင်းသည်ဆိုသည်မှာ သင် ချင့်ချိန်နေသော Exchange အတွဲပေါ် မူတည်ပါသည်။ အောက်တွင် ထိုအတွဲကို ရွေးပါ။`;

function hubFaqs({ all, ranked, lowF, lowS, hi, mica, date, marketDate }: HubFacts): Faq[] {
  const later = all.filter((e) => addLater(e) !== "no");
  const signupOnly = all.filter((e) => addLater(e) === "no");
  const noMica = all.filter((e) => !altInfo(e).mica);
  return [
    {
      q: "ဘယ် ခရစ်တို Exchange က အခကြေးငွေ အနည်းဆုံးလဲ?",
      a: `ပုံမှန်အဆင့်တွင် ${names(lowF)} ၏ Futures အခကြေးငွေသည် ${feePair(lowF[0].futuresFees)} (Maker / Taker) ဖြင့် အနည်းဆုံး ဖြစ်ပြီး ${names(lowS)} ၏ Spot အခကြေးငွေသည် ${feePair(lowS[0].spotFees)} ဖြင့် အနည်းဆုံး ဖြစ်ပါသည်။ ကျန် Exchange များ: ${joinList(
        ranked.filter((e) => !lowF.includes(e)).map((e) => `${e.name} (Futures ${feePair(e.futuresFees)}၊ Spot ${feePair(e.spotFees)})`),
      )}။ VIP အဆင့်များနှင့် Exchange Token များဖြင့် ဤနှုန်းများကို ထပ်မံ လျှော့ချနိုင်ပါသည်။`,
    },
    {
      q: "ဘယ် ခရစ်တို Exchange က Leverage အမြင့်ဆုံး ပေးလဲ?",
      a: `${names(hi)}: ${bare(hi[0].maxLeverage)}။ ကျန် Exchange များ: ${joinList(ranked.filter((e) => !hi.includes(e)).map((e) => `${e.name} ${leverageOf(e)}x`))}။ ${leverageRisk}`,
    },
    {
      q: "ဘယ် ခရစ်တို Exchange က Futures ဈေးကွက် အနက်ဆုံးလဲ?",
      a: `${cmcRanking} (${marketDate} ရက်) ရှိ ${oiGloss} ဖြင့် တိုင်းတာထားပါသည်: ${joinList(ranked.map((e) => `${e.name} ${formatBn(e.market.openInterestBn)}`))}။ ဈေးကွက် ပိုနက်လျှင် Order ပမာဏကြီးများတွင် Spread များသောအားဖြင့် ပိုကျဉ်းပါသည်။`,
    },
    {
      q: "EEA အတွက် MiCA ခွင့်ပြုချက်ရ ပလက်ဖောင်း ရှိတဲ့ Exchange တွေက ဘယ်ဟာတွေလဲ?",
      a: `${joinList(mica.map((e) => `${e.name} (${bare(altInfo(e).mica)})`))} တို့ ဖြစ်ပါသည်။ ${names(noMica)} သည် ကိုယ်ပိုင် စာမျက်နှာများတွင် MiCA ခွင့်ပြုချက်ရ ကုမ္ပဏီ မဖော်ပြထားပါ။ ${regionalNote}`,
    },
    {
      q: "အကောင့်ဖွင့်ပြီးမှ Referral Code ထည့်လို့ ရတဲ့ Exchange တွေက ဘယ်ဟာတွေလဲ?",
      a: `${later.map((e) => `${e.name}: ${sentence(e.referral.afterSignupShort)}`).join(" ")} ${names(signupOnly)} တွင် ကုဒ်ကို အကောင့်ဖွင့်စဉ်တွင်သာ ထည့်နိုင်ပါသည်၊ သို့မဟုတ် နောက်မှ ထည့်နည်းကို ဖော်ပြမထားပါ။ မည်သည့် Exchange တွင်မဆို ${safeWay}`,
    },
    {
      q: "ဒီ နှိုင်းယှဉ်ချက်တွေကို ဘယ်လို ပြုလုပ်ထားလဲ?",
      a: `ကိန်းဂဏန်းတိုင်းကို Exchange ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက် သို့မဟုတ် အကူအညီ စင်တာ (အခကြေးငွေ ဇယား၊ စည်းမျဉ်းများ၊ ကန့်သတ်ထားသော နိုင်ငံများ စာရင်း၊ ထုတ်ကုန် စာမျက်နှာများ) မှ ဖတ်ယူထားပြီး စာမျက်နှာတိုင်းတွင် ရင်းမြစ်များကို ဖော်ပြထားပါသည်။ Open Interest၊ အရောင်းအဝယ်ပမာဏနှင့် Derivatives ဈေးကွက် အရေအတွက်တို့ကို ${cmcRanking}မှ ရယူထားပါသည်။ အချက်တစ်ခုတွင် မည်သည့် Exchange ပိုသာသည်ကို ထိုကိန်းဂဏန်းများမှ တိုက်ရိုက် ဆုံးဖြတ်ပြီး ကျွန်ုပ်တို့၏ ကိုယ်ပိုင် အဆင့်သတ်မှတ်ချက် မရှိပါ။ ယခု စစ်ဆေးချက်၏ ရက်စွဲသည် ${date} ရက် ဖြစ်ပါသည်။`,
    },
  ];
}

/* --------------------------------- everything -------------------------------- */

export const my: VersusText = {
  /* ---- scorecard: label of each row and, as `topic`, the row before "…တွင် ပိုသာပါသည်" ("" = not ranked) ---- */
  rows: {
    futuresFees: { label: "Futures အခကြေးငွေ (Maker / Taker)", topic: "Futures အခကြေးငွေ" },
    spotFees: { label: "Spot အခကြေးငွေ (Maker / Taker)", topic: "Spot အခကြေးငွေ" },
    leverage: { label: "အများဆုံး Leverage", topic: "အများဆုံး Leverage" },
    openInterest: { label: "Derivatives Open Interest", topic: "Open Interest" },
    volume: { label: "24 နာရီ Derivatives အရောင်းအဝယ်ပမာဏ", topic: "24 နာရီ Derivatives အရောင်းအဝယ်ပမာဏ" },
    markets: { label: "Derivatives ဈေးကွက်", topic: "Derivatives ဈေးကွက် အရေအတွက်" },
    users: { label: "အသုံးပြုသူ (Exchange ၏ ကိုယ်ပိုင် ကိန်းဂဏန်း)", topic: "အသုံးပြုသူ အရေအတွက်" },
    assets: { label: "စာရင်းဝင် ပိုင်ဆိုင်မှုများ (Exchange ၏ ကိုယ်ပိုင် ကိန်းဂဏန်း)", topic: "" },
    founded: { label: "တည်ထောင်ခဲ့သည့် နှစ်", topic: "" },
    products: { label: (compared) => `တွေ့ရှိသော ထုတ်ကုန် (နှိုင်းယှဉ်သော ${compared} မျိုးအနက်)`, topic: "ထုတ်ကုန် အမျိုးအစား" },
    countries: { label: (compared) => `ကန့်သတ်ထားသော နိုင်ငံ (နှိုင်းယှဉ်သော ${compared} နိုင်ငံအနက်)`, topic: "ဝန်ဆောင်မှုပေးသော နိုင်ငံများ" },
    mica: { label: "MiCA ခွင့်ပြုချက်ရ EEA ပလက်ဖောင်း", topic: "MiCA ခွင့်ပြုချက်" },
    kyc: { label: "အထောက်အထား အတည်ပြုခြင်း (KYC)", topic: "" },
    addLater: { label: "Referral Code ကို နောက်မှ ထည့်နိုင်ပါသလား?", topic: "Referral Code နောက်မှ ထည့်နိုင်ခြင်း" },
    offer: { label: "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်", topic: "" },
    reserves: { label: "Proof of Reserves", topic: "" },
    fund: { label: "အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ", topic: "" },
  },
  countOf: (count, of) => `${of} ခုအနက် ${count} ခု`,
  noMica: "မဖော်ပြထား",
  noFund: "မဖော်ပြထား",

  versusAnswer,
  leverageSentence,
  depthSentence,
  onlyOnSentence,
  countryPairAnswer,
  buildVersusFaqs,

  /* ---- head-to-head page ---- */
  page: {
    // Three wordings, chosen per pair.
    title: (a, b, shortMonthYear) => {
      const head = `${a.name} vs ${b.name} (${longMonth(shortMonthYear)})`;
      return fit(
        TITLE_MAX,
        [
          `${head}: အခကြေးငွေ၊ Leverage နှင့် ဘောနပ်စ်`,
          `${a.name} နဲ့ ${b.name} ဘယ်ဟာ ပိုကောင်းလဲ? အခကြေးငွေနှင့် KYC`,
          `${a.name} vs ${b.name}: ${yearOf(shortMonthYear)} တွင် ဘယ် Exchange ပိုကောင်းလဲ`,
        ][variant(3, a.slug, b.slug)],
        `${head}: အခကြေးငွေနှင့် Leverage`,
        head,
      );
    },
    description: (a, b, monthYear) => {
      const head = `${a.name} vs ${b.name}:`;
      const fees = `${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`;
      const lev = `Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x`;
      const rest = "ထုတ်ကုန်၊ နိုင်ငံ၊ KYC နှင့် Referral Code။";
      return fit(
        DESC_MAX,
        `${head} Futures အခကြေးငွေ ${fees}၊ ${lev}၊ ${rest} တရားဝင် ဒေတာ၊ ${monthYear}လတွင် စစ်ဆေးထားသည်။`,
        `${head} Futures ${fees}၊ ${lev}၊ ${rest} တရားဝင် ဒေတာ၊ ${monthYear}လတွင် စစ်ဆေးထားသည်။`,
        `${head} Futures ${fees}၊ ${lev}၊ ${rest} ${monthYear}လ စစ်ဆေးပြီး တရားဝင် ဒေတာ။`,
        `${head} Futures ${fees}၊ ${lev}၊ ${rest} တရားဝင် ဒေတာ (${monthYear})။`,
        `${head} Futures ${fees}၊ ${lev}၊ ${rest} (${monthYear})`,
        `${head} Futures ${fees}၊ ${lev}၊ ${rest}`,
      );
    },
    keywords: (a, b, former) => [
      `${a.name} vs ${b.name}`,
      `${b.name} vs ${a.name}`,
      `${a.name} နှင့် ${b.name} နှိုင်းယှဉ်ချက်`,
      `${a.name} နဲ့ ${b.name} ဘယ်ဟာ ပိုကောင်းလဲ`,
      `${b.name} နဲ့ ${a.name} ဘယ်ဟာ ပိုကောင်းလဲ`,
      `${a.name} vs ${b.name} အခကြေးငွေ`,
      `${a.name} vs ${b.name} Futures`,
      `${a.name} vs ${b.name} fees`,
      `${a.name} ${b.name} comparison`,
      ...former.flatMap(([old, other]) => [`${old} vs ${other}`, `${other} vs ${old}`]),
    ],

    crumbHome: "ပင်မစာမျက်နှာ",
    crumbHub: "Exchange နှိုင်းယှဉ်ချက်",
    crumbPage: (a, b) => `${a.name} vs ${b.name}`,

    formerNote: (e, formerName) => `${e.name} သည် ယခင်က ${formerName} ဟု အမည်ရခဲ့သော Exchange ဖြစ်ပါသည်။`,
    lead: (a, b, pickA, pickB, formerNote, date) =>
      `${a.name} နှင့် ${b.name} နှစ်ခုလုံးသည် Spot နှင့် Leverage ပါသော Futures အရောင်းအဝယ်အတွက် ဗဟိုချုပ်ကိုင် Exchange (CEX) များ ဖြစ်ပြီး အသုံးပြုသူအသစ်များအတွက် Referral အစီအစဉ် ရှိကြပါသည်။ ${sentence(pickA)} ${sentence(pickB)}${formerNote ? ` ${formerNote}` : ""} ဤ ထိပ်တိုက် နှိုင်းယှဉ်ချက်တွင် Exchange နှစ်ခု၏ အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုပေးသော နိုင်ငံများ၊ အထောက်အထား အတည်ပြုခြင်း စည်းမျဉ်းများနှင့် Referral ကမ်းလှမ်းချက်များကို ဘေးချင်းယှဉ် ဖော်ပြထားပါသည်။ ကိန်းဂဏန်းတိုင်းကို Exchange များ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်များမှ ${date} ရက်တွင် ဖတ်ယူထားပါသည်။`,

    toc: {
      "at-a-glance": "အကျဉ်းချုပ်",
      verdict: "ရွေးချယ်သင့်သည့် Exchange",
      fees: "အခကြေးငွေ",
      leverage: "Leverage နှင့် ဈေးကွက် အနက်",
      products: "ထုတ်ကုန်များ",
      countries: "နိုင်ငံများ",
      kyc: "အထောက်အထား အတည်ပြုခြင်း (KYC)",
      safety: "လုံခြုံရေးနှင့် ကြီးကြပ်မှု",
      referral: "Referral Code များ",
      "pros-cons": "အားသာချက် / အားနည်းချက်",
      faq: "မေးလေ့ရှိသော မေးခွန်းများ",
      sources: "ရင်းမြစ်များ",
    },
    onThisPage: "ဤစာမျက်နှာတွင်",

    /* Hero */
    updated: (date) => `${date} ရက်တွင် စစ်ဆေးပြီး အပ်ဒိတ်လုပ်ထားသည်`,
    h1: (a, b) => `${a.name} vs ${b.name}: အခကြေးငွေ၊ Leverage နှင့် လုံခြုံရေး နှိုင်းယှဉ်ချက်`,
    quickAnswer: "အတိုချုပ် အဖြေ",
    keyFigures: "အဓိက ကိန်းဂဏန်းများ",
    chips: (a, b, oiA, oiB) => [
      `Futures ${feePair(a.futuresFees)} vs ${feePair(b.futuresFees)}`,
      `Spot ${feePair(a.spotFees)} vs ${feePair(b.spotFees)}`,
      `Leverage ${leverageOf(a)}x vs ${leverageOf(b)}x`,
      `Open Interest ${oiA} vs ${oiB}`,
    ],
    boxTitle: "Referral Code ဖြင့် အကောင့်ဖွင့်ပါ",
    boxNote: "ကုဒ် နှစ်ခုလုံး အခမဲ့ဖြစ်ပြီး အခကြေးငွေကို မည်သည့်အခါမျှ မတိုးစေပါ။",
    codeLabel: (e) => `${e.name} Referral Code`,
    boxRisk: () => (
      <>
        Leverage သုံး အရောင်းအဝယ်သည် အလွန် အန္တရာယ်များပါသည်။ Exchange နှစ်ခုလုံး နိုင်ငံတိုင်းတွင် ဝန်ဆောင်မှု မပေးပါ။{" "}
        <a href="#countries">နိုင်ငံများ</a> အပိုင်းကို ကြည့်ပါ။
      </>
    ),

    /* At a glance */
    glanceTitle: (a, b) => `${a.name} vs ${b.name} အကျဉ်းချုပ်`,
    glanceText: (a, b, s) =>
      `“${a.name} vs ${b.name}” ဟု ရှာသည်ဖြစ်စေ “${b.name} vs ${a.name}” ဟု ရှာသည်ဖြစ်စေ နှိုင်းယှဉ်ချက် အတူတူပင် ဖြစ်ပါသည်။ ကိန်းဂဏန်းဖြင့် ဆုံးဖြတ်နိုင်သော အချက် ${s.measurable} ချက်အနက် ${tally(a, b, s)}။ အချက်တိုင်း အရေးပါပုံ မတူပါ၊ အရောင်းအဝယ် မကြာခဏ လုပ်သော Trader အတွက် Coin စာရင်း ပိုရှည်ခြင်းထက် အခကြေးငွေ ပိုနည်းခြင်းက ပိုအရေးကြီးပါသည်။ ထို့ကြောင့် သင် အရောင်းအဝယ်လုပ်ပုံနှင့် ကိုက်ညီသော ကော်လံကို ဖတ်ပါ။`,
    glanceCaption: (a, b) =>
      `${a.name} vs ${b.name}: အခကြေးငွေ၊ Leverage၊ ဈေးကွက် အရွယ်အစား၊ ထုတ်ကုန်များ၊ နိုင်ငံများ၊ အထောက်အထား အတည်ပြုခြင်းနှင့် Referral စည်းမျဉ်းများ`,
    compared: "အချက်",
    ahead: "ပိုသာ",
    level: "တူညီ",
    glanceNote: (marketDate, date) =>
      `အခကြေးငွေ: ပုံမှန်အဆင့် (VIP မဟုတ်)။ Open Interest၊ အရောင်းအဝယ်ပမာဏနှင့် ဈေးကွက်များ: ${cmcRanking}၊ ${marketDate} ရက်။ “–” သည် တန်ဖိုး နှစ်ခုကို အဆင့်ခွဲ၍ မရကြောင်း ဆိုလိုပါသည်။ ကျန်အချက်အားလုံးကို Exchange များ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်များမှ ${date} ရက်တွင် ဖတ်ယူထားပါသည်။`,

    /* Verdict */
    verdictTitle: (a, b) => `${a.name} သို့မဟုတ် ${b.name}: ဘယ်ဟာကို ရွေးသင့်လဲ?`,
    verdictText:
      "အချက်အားလုံးတွင် အနိုင်ရသော Exchange မရှိပါ၊ Exchange တစ်ခုစီသည် မတူညီသော Trader အမျိုးအစားအတွက် ဖြစ်ပါသည်။ အောက်ပါ အကွက် နှစ်ခုတွင် Exchange တစ်ခုစီ မည်သူနှင့် သင့်တော်သည်နှင့် အခြားတစ်ခုထက် တိုင်းတာနိုင်သော မည်သည့်အချက်တွင် ပိုသာသည်ကို ပြထားပါသည်။",
    bestFor: (role) => `အားသာချက်: ${role}`,
    chooseIf: (e) => `${e.name} ကို ရွေးသင့်သည့် အခြေအနေများ`,
    aheadOf: (e, other) => `${e.name} က ${other.name} ထက် ပိုသာသည့် အချက်များ`,
    noAdvantage: "ကျွန်ုပ်တို့ နှိုင်းယှဉ်သော အချက်များတွင် တိုင်းတာနိုင်သည့် အားသာချက် မရှိပါ။",
    thinkTwice: "ပြန်စဉ်းစားသင့်သည့် အခြေအနေများ",
    codeButton: (e) => `${e.name} Referral Code ${e.referralCode}`,

    /* Fees */
    feesTitle: (a, b) => `${a.name} vs ${b.name} အခကြေးငွေ`,
    feesModel:
      "Exchange နှစ်ခုလုံးသည် Maker / Taker စနစ်ကို သုံးပါသည်: Liquidity ထပ်ဖြည့်ပေးသော Limit Order များက Maker အခကြေးငွေ ပေးရပြီး Liquidity ကို ယူသွားသော Order များက Taker အခကြေးငွေ ပေးရပါသည်။",
    feesCaption: (a, b) => `${a.name} နှင့် ${b.name} ၏ ပုံမှန် Spot နှင့် Futures အခကြေးငွေ`,
    exchange: "Exchange",
    futuresMaker: "Futures Maker",
    futuresTaker: "Futures Taker",
    spotMaker: "Spot Maker",
    spotTaker: "Spot Taker",
    otherMarkets: "အခြား ဈေးကွက်များ (Maker / Taker)",
    feesNote: (date) =>
      `Exchange တစ်ခုစီ ထုတ်ပြန်ထားသော ပုံမှန်အဆင့် (VIP မဟုတ်) နှုန်းများကို ${date} ရက်တွင် စစ်ဆေးထားပါသည်။ အခကြေးငွေ ပြောင်းလဲနိုင်သဖြင့် အရောင်းအဝယ် မလုပ်မီ Exchange တွင် ပြန်စစ်ပါ။`,
    tokenTitle: "Token လျှော့ဈေးနှင့် အသေးစိတ် စည်းကမ်းချက်များ",
    noTokenDiscount: "Exchange Token ဖြင့် အခကြေးငွေ ပေးချေလျှင် ရသော လျှော့ဈေးကို ထုတ်ပြန်မထားပါ။",

    /* Leverage */
    leverageTitle: "Leverage နှင့် ဈေးကွက် အနက်",
    leverageRisk: `${leverageRisk} အများဆုံး Leverage သည် ကန့်သတ်ချက်သာ ဖြစ်ပြီး အကြံပြုချက် မဟုတ်ပါ။`,
    leverageCaption: (a, b) => `${a.name} နှင့် ${b.name} ၏ Leverage နှင့် Derivatives ဈေးကွက် ဒေတာ`,
    maxLeverage: "အများဆုံး Leverage",
    openInterest: "Open Interest",
    volume24h: "24 နာရီ Derivatives အရောင်းအဝယ်ပမာဏ",
    derivativesMarkets: "Derivatives ဈေးကွက်",
    listedAssets: "စာရင်းဝင် ပိုင်ဆိုင်မှုများ (Exchange ၏ ကိုယ်ပိုင် ကိန်းဂဏန်း)",
    leverageNote: (marketDate) =>
      `ဈေးကွက် ဒေတာ: ${cmcRanking}၊ ${marketDate} ရက်။ Exchange များသည် စာရင်းဝင် ပိုင်ဆိုင်မှုများကို ရေတွက်ပုံ မတူပါ၊ အချို့က Coin များကို ရေတွက်ပြီး အချို့က အရောင်းအဝယ် Pair များကို ရေတွက်ပါသည်။`,

    /* Products */
    productsTitle: (a, b) => `ထုတ်ကုန်များ: ${a.name} နှင့် ${b.name} တွင် ရှိသည့် ဝန်ဆောင်မှုများ`,
    productsSame: (compared) =>
      `Exchange နှစ်ခုလုံးသည် ကျွန်ုပ်တို့ နှိုင်းယှဉ်သော ထုတ်ကုန် ${compared} မျိုးလုံးကို ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် ပြသထားပါသည်။ ကွာခြားချက်များကို အသေးစိတ်တွင် တွေ့ရပါသည်။`,
    productsLegend: (date) =>
      `အမှန်ခြစ် သင်္ကေတသည် Exchange က ထိုထုတ်ကုန်ကို ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် ပြသထားကြောင်း ဆိုလိုပြီး မျဉ်းတိုသည် ${date} ရက်တွင် ထိုဝက်ဘ်ဆိုက်၌ သက်ဆိုင်ရာ စာမျက်နှာကို ကျွန်ုပ်တို့ ရှာမတွေ့ကြောင်း ဆိုလိုပါသည်။`,
    productsCaption: (a, b) => `${a.name} နှင့် ${b.name} ၏ ထုတ်ကုန်များ`,
    product: "ထုတ်ကုန်",
    offered: "ရှိ",
    notOffered: "မရှိ",
    noPage: "ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် စာမျက်နှာ မတွေ့",

    /* Countries */
    countriesTitle: (a, b) => `နိုင်ငံများ: ${a.name} နှင့် ${b.name} ကို အသုံးပြုနိုင်သည့် နေရာ`,
    countriesText: (compared, differing) =>
      `နိုင်ငံ ${compared} နိုင်ငံအတွက် Exchange တစ်ခုစီ၏ ကိုယ်ပိုင် စည်းမျဉ်းများတွင် ဖော်ပြထားသည်များ ဖြစ်ပါသည်။ Exchange နှစ်ခုသည် ထိုအနက် နိုင်ငံ ${differing} နိုင်ငံတွင် ကွာခြားပါသည်။ “${ct.statusLabel.regional}” ဆိုသည်မှာ Exchange က ထိုနိုင်ငံကို ကိုယ်ပိုင် ထုတ်ကုန်၊ အခကြေးငွေနှင့် ကန့်သတ်ချက်များ ရှိသော သီးခြား ပလက်ဖောင်းမှတစ်ဆင့် ဝန်ဆောင်မှု ပေးခြင်း ဖြစ်ပါသည်။`,
    countriesCaption: (a, b) => `${a.name} နှင့် ${b.name} ကို နိုင်ငံအလိုက် အသုံးပြုနိုင်မှု`,
    country: "နိုင်ငံ",
    countriesNote: (date) =>
      `“${ct.statusLabel.open}” ဆိုသည်မှာ ${date} ရက်တွင် Exchange ၏ ကန့်သတ်ထားသော နိုင်ငံများ စာရင်းတွင် မပါခြင်းသာ ဖြစ်ပြီး ထုတ်ကုန်တိုင်းကို ထိုနိုင်ငံတွင် ပေးထားသည်ဟု အာမမခံပါ။ Exchange နှစ်ခုလုံးက VPN သို့မဟုတ် မှားယွင်းသော အချက်အလက်ဖြင့် ကန့်သတ်ချက်ကို ရှောင်ကွင်းခြင်းကို တားမြစ်ထားပါသည်။`,
    differTitle: "Exchange နှစ်ခု ကွာခြားသည့် နိုင်ငံများ",
    differQuestion: (a, b, countryName) => `${countryName}မှာ ${a.name} လား၊ ${b.name} လား?`,
    neither: (a, b, hrefA, hrefB) => (
      <>
        သင် နေထိုင်ရာ နိုင်ငံတွင် Exchange နှစ်ခုလုံး ဝန်ဆောင်မှု မပေးပါသလား? အစားထိုး Exchange စာမျက်နှာများရှိ နိုင်ငံ ဇယားများတွင် သင့်နိုင်ငံကို
        လက်ခံသော အခြား Exchange များကို ပြထားပါသည်: <Link href={hrefA}>နိုင်ငံအလိုက် {a.name} အစားထိုး Exchange များ</Link> ·{" "}
        <Link href={hrefB}>နိုင်ငံအလိုက် {b.name} အစားထိုး Exchange များ</Link>
      </>
    ),
    restrictedTitle: "ကန့်သတ်ထားသော နိုင်ငံများနှင့် ဒေသဆိုင်ရာ ပလက်ဖောင်းများ",
    whereNot: (e) => `${e.name} ကို ဘယ်နိုင်ငံတွေမှာ သုံးလို့ မရလဲ?`,
    regionalPlatforms: "ဒေသဆိုင်ရာ ပလက်ဖောင်းများ:",

    /* Verification */
    kycTitle: (a, b) => `အထောက်အထား အတည်ပြုခြင်း (KYC): ${a.name} vs ${b.name}`,
    kycText:
      "Exchange နှစ်ခုလုံးက အသုံးပြုသူအသစ်များကို အထောက်အထား အတည်ပြုခိုင်းသဖြင့် KYC မလုပ်ဘဲ အရောင်းအဝယ်လုပ်ရန် မည်သည့်တစ်ခုမျှ ရွေးချယ်စရာ မဟုတ်ပါ။ ကွာခြားချက်သည် အတည်မပြုရသေးသော အကောင့်ဖြင့် ဘာများ လုပ်နိုင်သေးသည်နှင့် စစ်ဆေးပုံ မည်သို့ ဖြစ်သည် ဆိုသည့် အချက်တွင် ရှိပါသည်။",
    documents: "စာရွက်စာတမ်းများ:",
    minAge: "အနိမ့်ဆုံး အသက်:",
    howToRegister: (e) => `${e.name} တွင် အဆင့်ဆင့် အကောင့်ဖွင့်ပြီး အထောက်အထား အတည်ပြုနည်း`,

    /* Safety */
    safetyTitle: (a, b) => `လုံခြုံရေးနှင့် ကြီးကြပ်မှု: ${a.name} vs ${b.name}`,
    safetyText:
      "မည်သည့် ဗဟိုချုပ်ကိုင် Exchange (CEX) မျှ ဆုံးရှုံးနိုင်ခြေ ကင်းသည် မဟုတ်ပါ။ Exchange တစ်ခုစီက မိမိအကြောင်း ထုတ်ပြန်ထားသည့် အချက်များကိုသာ နှိုင်းယှဉ်နိုင်ပါသည်: လိုင်စင်ရထားသည့် နေရာ၊ Proof of Reserves (အရန်ငွေ သက်သေပြချက်) ဖြင့် အရန်ငွေကို သက်သေပြထားခြင်း ရှိ မရှိနှင့် အရေးပေါ် အခြေအနေအတွက် ရန်ပုံငွေ ထားရှိခြင်း ရှိ မရှိ။",
    safetyCaption: (a, b) => `${a.name} နှင့် ${b.name} ၏ ကြီးကြပ်မှု၊ Proof of Reserves နှင့် အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ`,
    licences: "Exchange က ဖော်ပြထားသော လိုင်စင်များ",
    entity: "လုပ်ငန်းလည်ပတ်သည့် ကုမ္ပဏီ",
    reserves: "Proof of Reserves",
    fund: "အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ",
    founded: "တည်ထောင်ခဲ့သည့် နှစ်",
    isSafe: (e) => `${e.name} လုံခြုံလား?`,
    safetyDetail: (e) => `${e.name} ၏ လုံခြုံရေးနှင့် ဝန်ဆောင်မှုပေးသော နိုင်ငံများ အသေးစိတ်`,

    /* Referral codes */
    referralTitle: (a, b) => `Referral Code နှင့် အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်များ: ${a.name} vs ${b.name}`,
    referralText:
      "မည်သည့် Exchange ကို ရွေးသည်ဖြစ်စေ Referral Code ဖြင့် အကောင့်ဖွင့်ပါ။ ကုဒ်သည် အခမဲ့ဖြစ်ပြီး အခကြေးငွေကို မည်သည့်အခါမျှ မတိုးစေဘဲ Exchange ၏ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်ကို ရယူခွင့် ပေးပါသည်။ နောက်ဆုံး အတန်းကို သတိပြုပါ၊ မေ့ကျန်ခဲ့သော ကုဒ်ကို နောက်မှ ထည့်၍ အမြဲ ရသည် မဟုတ်ပါ။",
    referralCaption: (a, b) => `${a.name} နှင့် ${b.name} ၏ Referral Code နှင့် အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်များ`,
    referralCodeOf: (e) => `${e.name} Referral Code`,
    referralCode: "Referral Code",
    newUserOffer: "အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်",
    inviteeReward: "ဖိတ်ခေါ်ခံရသူအဖြစ် သင် ရရှိမည့် အရာ",
    covers: "Referral တစ်ခုတည်းဖြင့် အကျုံးဝင်သည်များ",
    whereCode: "ကုဒ် ထည့်ရမည့် နေရာ",
    addLater: "နောက်မှ ထည့်နိုင်ပါသလား?",
    referralNote: (date) =>
      `ကမ်းလှမ်းချက်များကို ${date} ရက်တွင် စစ်ဆေးထားပါသည်။ ကြိုဆိုဆုလက်ဆောင်များသည် Task များပေါ် အခြေခံပြီး အထောက်အထား အတည်ပြုရန် လိုအပ်ကာ နိုင်ငံအလိုက် ကွာခြားပါသည်။`,

    /* Pros and cons */
    prosConsTitle: (a, b) => `${a.name} နှင့် ${b.name} ၏ အားသာချက်နှင့် အားနည်းချက်များ`,
    pros: "အားသာချက်",
    cons: "အားနည်းချက်",

    /* FAQ */
    faqTitle: (a, b) => `${a.name} vs ${b.name} – မေးလေ့ရှိသော မေးခွန်းများ`,
    faqText: (count, a, b) =>
      `${a.name} နှင့် ${b.name} အကြား ရွေးချယ်ခြင်းဆိုင်ရာ မေးခွန်း ${count} ခု: အခကြေးငွေ၊ Leverage၊ နိုင်ငံများ၊ အထောက်အထား အတည်ပြုခြင်း၊ ထုတ်ကုန်များနှင့် Referral Code များ။`,

    /* Sources */
    sourcesTitle: "ရင်းမြစ်များ: ဤကိန်းဂဏန်းများ ရရှိရာ နေရာ",
    sourcesText: (date, marketDate) =>
      `ဤစာမျက်နှာရှိ အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ အထောက်အထား အတည်ပြုခြင်း၊ နိုင်ငံများ၊ လိုင်စင်များ၊ အရန်ငွေနှင့် Referral စည်းမျဉ်းများဆိုင်ရာ အချက်အလက်အားလုံးကို Exchange နှစ်ခု၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်များနှင့် အကူအညီ စင်တာများမှ ${date} ရက်တွင် ဖတ်ယူထားပါသည်။ Open Interest၊ အရောင်းအဝယ်ပမာဏနှင့် Derivatives ဈေးကွက် အရေအတွက်တို့ကို ${cmcRanking} (${marketDate} ရက်) မှ ရယူထားပါသည်။ Exchange များသည် စည်းမျဉ်းများကို ကြိုတင် အသိမပေးဘဲ ပြောင်းလဲနိုင်သဖြင့် အောက်ပါ စာမျက်နှာများကသာ နောက်ဆုံး အဆုံးအဖြတ် ဖြစ်ပါသည်။`,
    officialPages: (e, count) => `${e.name}: တရားဝင် စာမျက်နှာ ${count} ခု`,

    /* More comparisons */
    moreTitle: "နောက်ထပ် နှိုင်းယှဉ်ချက်များ",
    against: (e) => `${e.name} နှင့် အခြား Exchange များ နှိုင်းယှဉ်ချက်`,
    allAlternatives: (e) => `${e.name} အစားထိုး Exchange များ အားလုံး`,
    allComparisons: "Exchange နှိုင်းယှဉ်ချက် အားလုံး",

    /* Risk notice and closing call to action */
    risk: (disclosureHref) => (
      <>
        <strong>ဆုံးရှုံးနိုင်ခြေ သတိပေးချက်:</strong> ခရစ်တို Derivatives များသည် ရှုပ်ထွေးသော ငွေကြေးဆိုင်ရာ ကိရိယာများ ဖြစ်ပါသည်။ Leverage
        သည် အမြတ်နှင့် အရှုံး နှစ်ခုလုံးကို အဆဆ တိုးစေပြီး Margin (အာမခံငွေ) အားလုံးကို မိနစ်ပိုင်းအတွင်း ဆုံးရှုံးနိုင်ပါသည်။ ဤစာမျက်နှာသည်
        အချက်အလက်အတွက်သာ ဖြစ်ပြီး ငွေကြေးဆိုင်ရာ အကြံဉာဏ် မဟုတ်ပါ။ ကျွန်ုပ်တို့၏ လင့်ခ်များမှတစ်ဆင့် အကောင့်ဖွင့်ပါက ကျွန်ုပ်တို့ ကော်မရှင်
        ရရှိနိုင်ပါသည်။ <Link href={disclosureHref}>Affiliate ထုတ်ဖော်ချက်</Link>ကို ကြည့်ပါ။ ထိုအချက်က ကိန်းဂဏန်းများကို မပြောင်းလဲစေပါ၊
        ကိန်းဂဏန်းအားလုံးသည် Exchange များ၏ ကိုယ်ပိုင် ကိန်းဂဏန်းများ ဖြစ်ပါသည်။
      </>
    ),
    ctaTitle: (a, b) => `${a.name} သို့မဟုတ် ${b.name}? Referral Code ဖြင့် စတင်ပါ`,
    ctaText: "မည်သည့် Exchange ကို ရွေးသည်ဖြစ်စေ Spot နှင့် Futures အတွက် အကောင့် တစ်ခုတည်းသာ လိုပြီး အပို ကုန်ကျစရိတ် မရှိပါ။",
    ctaButton: "နောက်ထပ် Exchange များ နှိုင်းယှဉ်မည်",
  },

  /* ---- comparison hub ---- */
  hub: {
    title: (shortMonthYear, pairs) => {
      const head = `ခရစ်တို Exchange နှိုင်းယှဉ်ချက် (${longMonth(shortMonthYear)})`;
      return fit(TITLE_MAX, `${head}: ထိပ်တိုက် အတွဲ ${pairs} တွဲ`, `ခရစ်တို Exchange ${pairs} တွဲ နှိုင်းယှဉ်ချက် (${longMonth(shortMonthYear)})`, head);
    },
    description: (exchangeNames, pairs, monthYear) => {
      const points = "အခကြေးငွေ၊ Leverage၊ နိုင်ငံ၊ KYC နှင့် Referral Code";
      return fit(
        DESC_MAX,
        `${exchangeNames} ကို အတွဲလိုက် ယှဉ်ထားသည်: ${points} ထိပ်တိုက် နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ။ တရားဝင် ဒေတာ၊ ${monthYear}လတွင် စစ်ဆေးထားသည်။`,
        `${exchangeNames} အတွဲလိုက်: ${points} ထိပ်တိုက် နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ။ တရားဝင် ဒေတာ၊ ${monthYear}လတွင် စစ်ဆေးထားသည်။`,
        `${exchangeNames}: ${points} ထိပ်တိုက် နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ။ တရားဝင် ဒေတာ (${monthYear})။`,
        `${exchangeNames}: ${points} နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ။ တရားဝင် ဒေတာ (${monthYear})။`,
        `${exchangeNames}: ${points} နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ (${monthYear})။`,
        `${exchangeNames}: အခကြေးငွေ၊ Leverage၊ KYC နှင့် Referral Code နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ။`,
      );
    },
    crumbHome: "ပင်မစာမျက်နှာ",
    crumbPage: "Exchange နှိုင်းယှဉ်ချက်",
    listName: "ခရစ်တို Exchange ထိပ်တိုက် နှိုင်းယှဉ်ချက်များ",
    answer: hubAnswer,
    faqs: hubFaqs,

    updated: (date) => `${date} ရက်တွင် စစ်ဆေးပြီး အပ်ဒိတ်လုပ်ထားသည်`,
    h1: (pairs) => `ခရစ်တို Exchange နှိုင်းယှဉ်ချက်: ထိပ်တိုက် နှိုင်းယှဉ်ချက် အတွဲ ${pairs} တွဲ`,
    lead: (exchangeCount) =>
      `Exchange ${exchangeCount} ခု၏ အတွဲတိုင်းကို တူညီသော အချက်များဖြင့် နှိုင်းယှဉ်ထားပါသည်: အခကြေးငွေ၊ Leverage၊ ဈေးကွက် အနက်၊ ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုပေးသော နိုင်ငံများ၊ အထောက်အထား အတည်ပြုခြင်း၊ ကြီးကြပ်မှုနှင့် Referral ကမ်းလှမ်းချက်များ။ နှိုင်းယှဉ်ချက်တိုင်းတွင် Exchange များ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်များမှ ကိန်းဂဏန်းများကို အသုံးပြုထားပါသည်။`,
    quickAnswer: "အတိုချုပ် အဖြေ",

    pickTitle: "နှိုင်းယှဉ်ရန် Exchange နှစ်ခု ရွေးပါ",
    pickText: (others) =>
      `အကွက်တစ်ခုစီတွင် Exchange တစ်ခုကို ကျန် Exchange ${others} ခုနှင့် နှိုင်းယှဉ်ထားပါသည်။ အတွဲတစ်တွဲလျှင် စာမျက်နှာ တစ်ခုသာ ရှိသဖြင့် “Binance vs OKX” နှင့် “OKX vs Binance” သည် နှိုင်းယှဉ်ချက် တစ်ခုတည်းသို့ ရောက်ပါသည်။`,
    alternativesOf: (e) => `${e.name} အစားထိုး Exchange များ`,
    referralCodeOf: (e) => `${e.name} Referral Code`,

    tableTitle: (exchangeCount) => `Exchange ${exchangeCount} ခုလုံး ဘေးချင်းယှဉ်`,
    tableText: "Exchange တိုင်း၏ အသုံးပြုသူအသစ် ကမ်းလှမ်းချက်၊ ပုံမှန် (VIP မဟုတ်) အခကြေးငွေ၊ Leverage နှင့် ဈေးကွက် အနက်ကို ဇယားတစ်ခုတည်းတွင် ဖော်ပြထားပါသည်။",
    tableNote: (date, marketDate) =>
      `အခကြေးငွေ: Exchange တစ်ခုစီ ထုတ်ပြန်ထားသော ပုံမှန်အဆင့်၊ ${date} ရက်တွင် စစ်ဆေးထားသည်။ Open Interest နှင့် ဈေးကွက်များ: CoinMarketCap၊ ${marketDate} ရက်။`,

    alternativesTitle: "Exchange တစ်ခုနှင့် ကျန် Exchange အားလုံး",
    alternativesText: (others) =>
      `Exchange နှစ်ခုကြား ဆုံးဖြတ်နေခြင်း မဟုတ်ဘဲ အစားထိုး Exchange ရှာနေပါသလား? အစားထိုး Exchange စာမျက်နှာများတွင် Exchange တစ်ခုကို ကျန် ${others} ခုနှင့် တစ်ပြိုင်နက် နှိုင်းယှဉ်ပြီး သင့်နိုင်ငံကို လက်ခံသည့် Exchange များကို ပြထားပါသည်။`,

    faqTitle: "Exchange နှိုင်းယှဉ်ချက် – မေးလေ့ရှိသော မေးခွန်းများ",

    ctaTitle: "ဆုံးဖြတ်ပြီးပြီလား? Referral Code ဖြင့် အကောင့်ဖွင့်ပါ",
    ctaText: (exchangeCount) =>
      `Exchange ${exchangeCount} ခုလုံးအတွက် စစ်ဆေးပြီး ကုဒ်များ ရှိပါသည်။ Spot နှင့် Futures အတွက် အကောင့် တစ်ခုတည်း ဖြစ်ပြီး အပို ကုန်ကျစရိတ် မရှိပါ။`,
    ctaButton: "Referral Code အားလုံး ကြည့်မည်",
  },
};
