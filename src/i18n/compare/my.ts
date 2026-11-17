/**
 * The sentences of the comparison pages in Burmese. Same functions and the same logic as `./en.ts`, written in
 * Burmese (polite written style "…ပါသည်။"; FAQ questions in the spoken form people type, ending "?").
 *
 * Wording: "Exchange" (Latin, counted "Exchange 6 ခု"), "Binance အစားထိုး Exchange", "Referral Code", "အခကြေးငွေ",
 * "Maker / Taker", "အထောက်အထား အတည်ပြုခြင်း", "Leverage", "ပိုသာ" for "ahead". The reader is "သင်" (dropped wherever
 * the subject is clear), the site "ကျွန်ုပ်တို့". Burmese has no plural agreement, gender or case, so `verb()` and the
 * singular / plural branches of the English file fall away. Exchange names stay Latin and take their particle after
 * one space ("Binance သည်", "OKX ၏"); a Burmese word takes its particle directly ("ကနေဒါတွင်") – `withParticle()`
 * decides for inserted data texts. No text is ever lower-cased.
 *
 * Sentences end with "။", lists built in code use `list()` of the dictionary ("A၊ B နှင့် C"); clause items that
 * English joins with "; " (advantages, KYC rules, assets) are joined as short sentences with "။ ". Data texts are
 * inserted in the shared forms of section 7 of the language sheet: `pick` without "။" (joined here with "။ "),
 * `afterSignupShort` loses its "ရပါသည် – " where English drops "Yes – ", `maxLeverage` ("150x အထိ (…)") follows
 * "Leverage", `chooseIf` follows "{name} သင့်တော်သည့် အခြေအနေ: ". Fee rates arrive in the site's notation (0.02%);
 * leverage stays 150x; amounts come from `formatBn` ("ဒေါ်လာ 34.1 ဘီလီယံ").
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { countryList, featureList } from "@/data/alternatives";
import type { CountryKey, CountryStatus, FeatureKey } from "@/data/alternatives";
import { getDictionary } from "@/i18n";
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

const locale = "my";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);

/* --------------------------------- joining --------------------------------- */

/** Puts a particle after an inserted text: directly after a Burmese letter, after one space after anything else. */
const withParticle = (text: string, particle: string) =>
  /\p{Script=Myanmar}$/u.test(text.trim()) ? `${text.trim()}${particle}` : `${text.trim()} ${particle}`;
/** A data text without a final "။" or "." – for texts that code closes or joins itself. */
const bare = (s: string) => s.trim().replace(/\s*[။.]$/, "");
/** Ends a data text with "။" unless it already ends a sentence. */
const stop = (s: string) => (/[။?]$/.test(s.trim()) ? s.trim() : `${bare(s)}။`);
/** The `pick` lines of several exchanges, one sentence each, joined with "။ " and closed. */
const picks = (list: Exchange[]) => `${list.map((a) => bare(altInfo(a).pick)).join("။ ")}။`;
/** `afterSignupShort` without its leading "ရပါသည် – ". */
const withoutYes = (s: string) => s.trim().replace(/^ရပါသည်\s*–\s*/, "");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` in sentences ("… တွင် Copy Trading ရှိပါသည်"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy Trading", noun: "Copy Trading" },
  tradingBots: { label: "အရောင်းအဝယ် ဘော့တ်", noun: "အရောင်းအဝယ် ဘော့တ်" },
  options: { label: "Options", noun: "Options အရောင်းအဝယ်" },
  demoTrading: { label: "စမ်းသပ် အရောင်းအဝယ် (Demo Trading)", noun: "စမ်းသပ် အရောင်းအဝယ် (Demo Trading)" },
  margin: { label: "Spot Margin", noun: "Spot Margin အရောင်းအဝယ်" },
  p2p: { label: "P2P အရောင်းအဝယ်", noun: "P2P အရောင်းအဝယ်" },
  fiat: { label: "ကတ် / ဘဏ်ဖြင့် ဝယ်ယူခြင်း", noun: "ကတ် သို့မဟုတ် ဘဏ်ငွေလွှဲဖြင့် ခရစ်တို ဝယ်ယူခြင်း" },
  earn: { label: "Earn / Staking", noun: "Earn ထုတ်ကုန်များ" },
  launchpad: { label: "Launchpad / Launchpool", noun: "Launchpad" },
  web3Wallet: { label: "Web3 Wallet", noun: "ကိုယ်တိုင် ထိန်းသိမ်းရသော Web3 Wallet" },
  card: { label: "ခရစ်တို ကတ်", noun: "ခရစ်တို ကတ်" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` for sentences ("ကနေဒါတွင်"), `short` for the tables. */
const countryWords: Record<CountryKey, { name: string; short: string }> = {
  us: { name: "အမေရိကန်ပြည်ထောင်စု", short: "အမေရိကန်" },
  uk: { name: "ယူနိုက်တက်ကင်းဒမ်း", short: "ယူကေ" },
  ca: { name: "ကနေဒါ", short: "ကနေဒါ" },
  de: { name: "ဂျာမနီ", short: "ဂျာမနီ" },
  fr: { name: "ပြင်သစ်", short: "ပြင်သစ်" },
  nl: { name: "နယ်သာလန်", short: "နယ်သာလန်" },
  es: { name: "စပိန်", short: "စပိန်" },
  it: { name: "အီတလီ", short: "အီတလီ" },
  au: { name: "ဩစတြေးလျ", short: "ဩစတြေးလျ" },
  jp: { name: "ဂျပန်", short: "ဂျပန်" },
  sg: { name: "စင်ကာပူ", short: "စင်ကာပူ" },
  hk: { name: "ဟောင်ကောင်", short: "ဟောင်ကောင်" },
  in: { name: "အိန္ဒိယ", short: "အိန္ဒိယ" },
  ae: { name: "အာရပ်စော်ဘွားများ ပြည်ထောင်စု", short: "UAE" },
};
/** `residents`: "ကနေဒါတွင် နေထိုင်သူများ". */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `${countryWords[c.key].name}တွင် နေထိုင်သူများ` }));

const statusLabel: Record<CountryStatus, string> = {
  restricted: "ကန့်သတ်ထားသည်",
  regional: "ဒေသဆိုင်ရာ ဝက်ဘ်ဆိုက်",
  partial: "တစ်စိတ်တစ်ပိုင်း ကန့်သတ်ထားသည်",
  open: "ကန့်သတ်မထားပါ",
};

/** The market of a fee comparison: "Spot" / "Perpetual Futures". */
const marketName = (market: "spot" | "futures") => (market === "spot" ? "Spot" : "Perpetual Futures");

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = marketName(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} နှင့် ${x.name} ၏ ${label} ပုံမှန် အခကြေးငွေ တူညီပါသည်: Maker ${fa.maker} / Taker ${fa.taker}။`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} က Maker နှင့် Taker နှစ်ဖက်စလုံးအတွက် ပိုသက်သာပါသည်`
      : mm !== 0
        ? `${who} က Maker အတွက် ပိုသက်သာပြီး Taker အခကြေးငွေ တူညီပါသည်`
        : `${who} က Taker အတွက် ပိုသက်သာပြီး Maker အခကြေးငွေ တူညီပါသည်`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} က Maker အတွက်၊ ${x.name} က Taker အတွက် ပိုသက်သာပါသည်`
          : `${x.name} က Maker အတွက်၊ ${a.name} က Taker အတွက် ပိုသက်သာပါသည်`;
  return `${label} တွင် ${a.name} က Maker ${fa.maker} / Taker ${fa.taker} ကောက်ခံပြီး ${x.name} က ${fx.maker} / ${fx.taker} ကောက်ခံပါသည်။ ${verdict}။`;
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
    `${marketName(market)} တွင် ${x.name} က ${feePair(fx)} (Maker / Taker) ကောက်ခံပါသည်။`,
    lower.length ? `ပိုသက်သာသည်: ${rates(lower)}။` : `အစားထိုး Exchange ${alts.length} ခုအနက် ပိုသက်သာသည့် Exchange မရှိပါ။`,
    same.length ? `နှုန်း တူညီသည်: ${names(same)}။` : "",
    higher.length ? `ပိုဈေးကြီးသည်: ${rates(higher)}။` : "",
    mixed.length ? `တစ်ဖက်တွင်သာ ပိုသက်သာသည်: ${rates(mixed)}။` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Measurable points on which `a` is ahead of `x`. Empty when there are none. Every point is a plain statement
 * ("…ပိုနည်းသည်: …") without "။": it stands as a list item and is joined with "။ " inside the FAQ answers.
 */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`${label} အခကြေးငွေ ပိုနည်းသည်: ${feePair(fx)} အစား ${feePair(fa)} (Maker / Taker)`);
    else if (m < 0 && t === 0) out.push(`${label} Maker အခကြေးငွေ ပိုနည်းသည်: ${fx.maker} အစား ${fa.maker}`);
    else if (t < 0 && m === 0) out.push(`${label} Taker အခကြေးငွေ ပိုနည်းသည်: ${fx.taker} အစား ${fa.taker}`);
    else if (m < 0) out.push(`${label} Maker အခကြေးငွေ ပိုနည်းသည်: ${fx.maker} အစား ${fa.maker} (သို့သော် Taker အခကြေးငွေ ပိုများသည်)`);
    else if (t < 0) out.push(`${label} Taker အခကြေးငွေ ပိုနည်းသည်: ${fx.taker} အစား ${fa.taker} (သို့သော် Maker အခကြေးငွေ ပိုများသည်)`);
  };
  fee("Spot", a.spotFees, x.spotFees);
  fee("Futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`အများဆုံး Leverage ပိုမြင့်သည်: ${leverageOf(x)}x အစား ${leverageOf(a)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Derivatives Open Interest ပိုများသည်: ${withParticle(formatBn(x.market.openInterestBn), "နှင့်")} ယှဉ်လျှင် ${formatBn(a.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Derivatives ဈေးကွက် ပိုများသည်: ${x.market.markets} ခုနှင့် ယှဉ်လျှင် ${a.market.markets} ခု`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`မေ့ကျန်ခဲ့သော Referral Code ကို နောက်မှ ထည့်နိုင်သေးသည် (${withoutYes(a.referral.afterSignupShort)})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`${joinList(notOffered.map((f) => f.noun))} ရှိသည်၊ ${x.name} တွင်မူ မရှိ`);
  if (notFound.length)
    out.push(`${joinList(notFound.map((f) => f.noun))} ရှိသည်၊ ${x.name} ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင်မူ ထိုကဲ့သို့သော ထုတ်ကုန်ကို ကျွန်ုပ်တို့ မတွေ့ခဲ့ရ`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`ဥရောပ စီးပွားရေးဒေသ (EEA) အတွက် MiCA ခွင့်ပြုချက်ရ ပလက်ဖောင်း ရှိသည် (${bare(altInfo(a).mica)})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`${x.name} ကန့်သတ်ထားသော ${withParticle(joinList(openWhere.map((c) => c.name)), "ကို")} ကန့်သတ်မထား`);
  if (regionalWhere.length)
    out.push(`${x.name} ကန့်သတ်ထားသော ${withParticle(joinList(regionalWhere.map((c) => c.name)), "တွင်")} ဒေသဆိုင်ရာ ပလက်ဖောင်းဖြင့် ဝန်ဆောင်မှု ပေးသည်`);
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
  /** The note of `x` follows its name, as the notes of the alternatives do. */
  const xName = own.note ? `${x.name} (${own.note})` : x.name;
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} ၏ ကိုယ်ပိုင် ကန့်သတ်ထားသော နိုင်ငံများ စာရင်းတွင် ${c.name} ပါဝင်ပါသည်။`);
  else if (own.status === "partial") parts.push(`${xName} သည် ${c.name}ကို တစ်စိတ်တစ်ပိုင်း ကန့်သတ်ထားပါသည်။`);
  else if (own.status === "regional") parts.push(`${xName} သည် ${c.residents}ကို ဒေသဆိုင်ရာ ပလက်ဖောင်းမှတစ်ဆင့် ဝန်ဆောင်မှု ပေးပါသည်။`);
  else parts.push(`${x.name} သည် ${c.name}ကို ကန့်သတ်ထားသော နိုင်ငံအဖြစ် မဖော်ပြထားပါ။`);
  if (g.open.length) parts.push(`${names(g.open)} သည် ${c.name}ကို ကန့်သတ်ထားသော နိုင်ငံအဖြစ် မဖော်ပြထားပါ။`);
  if (g.regional.length) parts.push(`${withParticle(joinList(withNote(g.regional)), "သည်")} ${c.residents}ကို သီးခြား ဒေသဆိုင်ရာ ပလက်ဖောင်းမှတစ်ဆင့် ဝန်ဆောင်မှု ပေးပါသည်။`);
  if (g.partial.length) parts.push(`တစ်စိတ်တစ်ပိုင်း ကန့်သတ်ထားသည်: ${joinList(withNote(g.partial))}။`);
  if (g.restricted.length) parts.push(`${names(g.restricted)} သည်${own.status === "restricted" ? "လည်း" : ""} ${c.name}ကို ကန့်သတ်ထားပါသည်။`);
  if (!g.open.length && !g.regional.length) parts.push(`အစားထိုး Exchange ${alts.length} ခုအနက် ${c.residents}အတွက် အပြည့်အဝ ဖွင့်ထားသည့် Exchange မရှိပါ။`);
  parts.push(
    "နိုင်ငံ စာရင်းများသည် ပြောင်းလဲတတ်ပါသည်။ စာရင်းတွင် မပါသော နိုင်ငံ ဖြစ်ရုံဖြင့် ထိုနိုင်ငံတွင် ထုတ်ကုန်တိုင်း ရနိုင်မည်ဟု အာမမခံနိုင်ပါ။ Exchange ၏ ကိုယ်ပိုင် စည်းမျဉ်းများကသာ အဆုံးအဖြတ် ဖြစ်ပါသည်။",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `ဤစာမျက်နှာတွင် နှိုင်းယှဉ်ထားသော ${x.name} အစားထိုး Exchange ${alts.length} ခုသည် ${names(alts)} တို့ ဖြစ်ပါသည်။ ${picks(alts)} Exchange ${alts.length} ခုလုံးသည် အသုံးပြုသူအသစ်များကို အထောက်အထား အတည်ပြုရန် တောင်းဆိုပြီး Exchange တစ်ခုစီတွင် ကိုယ်ပိုင် ကန့်သတ်ထားသော နိုင်ငံများ စာရင်း ရှိသဖြင့် အကောင့်မဖွင့်မီ နိုင်ငံ ဇယားကို စစ်ဆေးပါ။`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `${x.name} ထက် မည်သည့်အချက်တွင် ပိုကောင်းရမည်ကို ဆုံးဖြတ်ပါ`,
      text: `အခကြေးငွေ ပိုနည်းခြင်း၊ Leverage ပိုမြင့်ခြင်း၊ Coin ပိုများခြင်း သို့မဟုတ် သင့်နိုင်ငံကို လက်ခံသော Exchange ဖြစ်ရုံသာ လိုအပ်ခြင်း ဖြစ်နိုင်ပါသည်။ ဤစာမျက်နှာရှိ ဇယားများတွင် အစားထိုး Exchange တစ်ခုစီက ${x.name} ထက် မည်သည့်အချက်တွင် ပိုသာပြီး မည်သည့်အချက်တွင် ပိုမသာကြောင်း ပြထားပါသည်။`,
    },
    {
      title: "Exchange က သင့်နိုင်ငံကို လက်ခံကြောင်း စစ်ဆေးပါ",
      text: "Exchange တိုင်းတွင် ကိုယ်ပိုင် ကန့်သတ်ထားသော နိုင်ငံများ စာရင်း ရှိပြီး အချို့က ထုတ်ကုန်နှင့် ကန့်သတ်ချက် မတူသော ဒေသဆိုင်ရာ ပလက်ဖောင်းသို့ လွှဲပို့ပါသည်။ အကောင့်မဖွင့်မီ နိုင်ငံ ဇယားကို ကြည့်ပါ။",
    },
    {
      title: "Referral Link မှတစ်ဆင့် အကောင့်ဖွင့်ပါ",
      text: `${names(signupOnly)} သည် Referral Code ကို အကောင့်ဖွင့်စဉ်တွင်သာ လက်ခံသည်၊ သို့မဟုတ် နောက်မှ ထည့်နိုင်သည့် နည်းလမ်းကို မဖော်ပြထားပါ။ ထို့ကြောင့် အကောင့် မဖွင့်မီ လင့်ခ်ကို အသုံးပြုပါ။${later.length ? ` ${names(later)} တွင်မူ သတ်မှတ်ချက်များနှင့် ကိုက်ညီပါက နောက်မှ ထည့်နိုင်ပါသည်။` : ""}`,
    },
    {
      title: "ငွေမရွှေ့မီ အထောက်အထား အတည်ပြုပါ",
      text: `အစားထိုး Exchange ${alts.length} ခုလုံးသည် အသုံးပြုသူအသစ်များကို အထောက်အထား အတည်ပြုရန် တောင်းဆိုပြီး အများစုတွင် အတည်ပြုမပြီးမချင်း ငွေသွင်းခြင်း သို့မဟုတ် အရောင်းအဝယ်ကို ပိတ်ထားပါသည်။ နိုင်ငံကူးလက်မှတ်၊ အမျိုးသား မှတ်ပုံတင်ကတ် သို့မဟုတ် ယာဉ်မောင်းလိုင်စင်ကို အသင့် ပြင်ထားပါ။`,
    },
    {
      title: `${x.name} တွင် ဖွင့်ထားသော Position များကို ပိတ်ပါ`,
      text: `Futures နှင့် Margin Position များကို Exchange တစ်ခုမှ တစ်ခုသို့ ရွှေ့၍ မရပါ။ ${x.name} တွင် ဦးစွာ ပိတ်ပါ၊ သို့မဟုတ် Position များ ပြီးဆုံးသည်အထိ အကောင့်ကို ဆက်ထားပါ။`,
    },
    {
      title: "Exchange အသစ်၏ ငွေသွင်းလိပ်စာသို့ ငွေထုတ်ပါ",
      text: "Exchange အသစ်မှ ငွေသွင်းလိပ်စာကို ကူးယူပြီး နှစ်ဖက်စလုံးတွင် Coin တူ၊ Network တူကို ရွေးကာ ပမာဏ အနည်းငယ်ဖြင့် ဦးစွာ စမ်းပို့ပါ။ Network မှားပြီး လွှဲလျှင် ငွေ ဆုံးရှုံးနိုင်ပါသည်။",
    },
    {
      title: `${x.name} အကောင့်ကို မည်သို့ ထားမည်ကို ဆုံးဖြတ်ပါ`,
      text: `အကောင့်ကို ဆက်ထားနိုင်ပါသည်။ Exchange အသီးသီးရှိ အကောင့်များသည် တစ်ခုနှင့်တစ်ခု မသက်ဆိုင်ပါ။ အခကြေးငွေ အဆင့်၊ Referral နှင့် မသုံးရသေးသော ဆုလက်ဆောင်များသည် ${x.name} တွင်သာ ကျန်ရှိပြီး Exchange အသစ်သို့ ပါမလာပါ။`,
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
      q: `${x.name} အစားထိုး Exchange ဘယ်ဟာ အကောင်းဆုံးလဲ?`,
      a: `အကောင်းဆုံး ${x.name} အစားထိုး Exchange တစ်ခုတည်း မရှိပါ။ သင် ပြောင်းလိုသည့် အကြောင်းရင်းပေါ် မူတည်ပါသည်။ ${picks(alts)} ဤစာမျက်နှာတွင် Exchange ${n} ခုလုံးကို ${x.name} နှင့် အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ နိုင်ငံအလိုက် အသုံးပြုနိုင်မှုနှင့် အထောက်အထား အတည်ပြုခြင်းအလိုက် နှိုင်းယှဉ်ထားပြီး ကိန်းဂဏန်းများကို Exchange များ၏ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်များမှ ယူကာ ${date} ရက်တွင် စစ်ဆေးထားပါသည်။`,
    },
    {
      q: `${x.name} လို Exchange တွေ ဘာတွေ ရှိလဲ?`,
      a: `${names(alts)} တို့သည် အနီးစပ်ဆုံး ဖြစ်ပါသည်။ ${x.name} ကဲ့သို့ပင် အကောင့်တစ်ခုတည်းဖြင့် Spot နှင့် Leverage ပါသော Futures အရောင်းအဝယ်ကို ပေးသည့် ဗဟိုချုပ်ကိုင် Exchange (CEX) များ ဖြစ်ပြီး အသုံးပြုသူအသစ်များအတွက် Referral အစီအစဉ် ရှိပါသည်။ ကွာခြားချက်မှာ အခကြေးငွေ၊ အများဆုံး Leverage၊ ရောင်းဝယ်နိုင်သော ပိုင်ဆိုင်မှု အရေအတွက်နှင့် လက်ခံသည့် နိုင်ငံများ ဖြစ်ပါသည်။`,
    },
    {
      q: `${x.name} အစားထိုး Exchange တွေထဲမှာ ဘယ်ဟာ အကြီးဆုံးလဲ?`,
      a: `CoinMarketCap ၏ ${prettyDate(site.marketDataDate)} ရက် အချက်အလက်အရ Derivatives Open Interest (ဖွင့်ထားသော Position စုစုပေါင်း) ဖြင့် တိုင်းတာလျှင် ${names(oi)} သည် အစားထိုး Exchange ${n} ခုအနက် ${withParticle(formatBn(oi[0].market.openInterestBn), "ဖြင့်")} အကြီးဆုံး ဖြစ်ပါသည်။ ${x.name} ကိုယ်တိုင်၏ Open Interest သည် ${formatBn(x.market.openInterestBn)} ဖြစ်ပါသည်။`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `${x.name} အစားထိုး Exchange တွေထဲမှာ ဘယ်ဟာ အခကြေးငွေ အနည်းဆုံးလဲ?`,
      a: `${names(lowF)} သည် ${n} ခုအနက် ပုံမှန် Futures အခကြေးငွေ အနည်းဆုံး ဖြစ်ပါသည်: ${feePair(lowF[0].futuresFees)} (Maker / Taker)။ Spot တွင် ${names(lowS)} က ${feePair(lowS[0].spotFees)} ဖြင့် အသက်သာဆုံး ဖြစ်ပါသည်။ ${x.name} က Futures တွင် ${feePair(x.futuresFees)} နှင့် Spot တွင် ${feePair(x.spotFees)} ကောက်ခံပါသည်။${lowF.length === 1 ? ` ${stop(lowF[0].feeNote)}` : ""} ဤနှုန်းများသည် ပုံမှန်အဆင့် နှုန်းများ ဖြစ်ပြီး VIP အဆင့်များနှင့် Exchange ၏ ကိုယ်ပိုင် Token များဖြင့် ထပ်မံ လျှော့ချနိုင်ပါသည်။`,
    },
    {
      q: `${x.name} ထက် အခကြေးငွေ သက်သာတဲ့ Exchange တွေ ဘာတွေလဲ?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Perpetual Futures တွင် ပိုသက်သာသည်မှာ ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))} ဖြစ်ပြီး ${x.name} တွင် ${feePair(x.futuresFees)} ဖြစ်ပါသည်။` : `Perpetual Futures တွင် အစားထိုး Exchange ${n} ခုအနက် မည်သည့် Exchange မျှ ${x.name} ၏ ${feePair(x.futuresFees)} ထက် မသက်သာပါ။`} ${cheaperS.length ? `Spot တွင် ပိုသက်သာသည်မှာ ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))} ဖြစ်ပြီး ${x.name} တွင် ${feePair(x.spotFees)} ဖြစ်ပါသည်။` : `Spot တွင်မူ မည်သည့် Exchange မျှ ${x.name} ၏ ${feePair(x.spotFees)} ထက် မသက်သာပါ။`} ကိန်းဂဏန်းအားလုံးသည် ပုံမှန်အဆင့်ရှိ Maker / Taker နှုန်းများ ဖြစ်ပါသည်။`
          : `ပုံမှန်အဆင့်တွင် အစားထိုး Exchange ${n} ခုအနက် မည်သည့် Exchange မျှ ${x.name} ထက် မသက်သာပါ: ${x.name} က Futures တွင် ${feePair(x.futuresFees)} နှင့် Spot တွင် ${feePair(x.spotFees)} (Maker / Taker) ကောက်ခံပြီး ဤနှိုင်းယှဉ်ချက်တွင် အနိမ့်ဆုံး နှုန်းများ ဖြစ်ပါသည်။ သို့သော် အစားထိုး Exchange များကို ကြီးကြပ်မှု၊ ထုတ်ကုန်များ သို့မဟုတ် လက်ခံသည့် နိုင်ငံများကဲ့သို့ အခြား အကြောင်းရင်းများအတွက် ကြည့်ရှုသင့်ပါသည်။`,
    },
    {
      q: `${x.name} အစားထိုး Exchange တွေထဲမှာ ဘယ်ဟာ Leverage အမြင့်ဆုံးလဲ?`,
      a: `${names(highest)} သည် ${n} ခုအနက် Leverage အမြင့်ဆုံး ပေးပါသည်: ${bare(highest[0].maxLeverage)}။ ကျန် Exchange များ: ${joinList(
        alts.filter((a) => !highest.includes(a)).map((a) => `${a.name} ${leverageOf(a)}x`),
      )}။ ${x.name} ကိုယ်တိုင်က Leverage ${bare(x.maxLeverage)} ပေးပါသည်။ Leverage မြင့်ခြင်းက Liquidation (Position အတင်းပိတ်ခံရခြင်း) ဖြစ်နိုင်ခြေကို သိသိသာသာ မြင့်တက်စေပါသည်။`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `${x.name} အစားထိုး Exchange တွေထဲက ဘယ်ဟာတွေကို ${c.name}မှာ သုံးလို့ ရလဲ?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `KYC မလိုတဲ့ ${x.name} အစားထိုး Exchange ရှိလား?`,
      a: `ဤ Exchange ${n} ခုတွင် မရှိပါ။ Exchange တိုင်းက အသုံးပြုသူအသစ်များကို အထောက်အထား အတည်ပြုရန် တောင်းဆိုပါသည်။ ${alts.map((a) => `${a.name}: ${bare(a.signup.kycShort)}`).join("။ ")}။ ${x.name} ကိုယ်တိုင်: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `${x.name} အစားထိုး Exchange တွေထဲက ဘယ်ဟာတွေ ဥရောပသမဂ္ဂ (EU) မှာ MiCA လိုင်စင် ရထားလဲ?`,
      a: `${mica.length ? `${withParticle(joinList(mica.map((a) => `${a.name} (${bare(altInfo(a).mica)})`)), "သည်")} ဥရောပ စီးပွားရေးဒေသ (EEA) တွင် နေထိုင်သူများအတွက် MiCA ခွင့်ပြုချက်ရ ကုမ္ပဏီကို ဖော်ပြထားပါသည်။` : `အစားထိုး Exchange ${n} ခုအနက် MiCA ခွင့်ပြုချက်ရ ကုမ္ပဏီကို ဖော်ပြထားသည့် Exchange မရှိပါ။`}${noMica.length ? ` ${names(noMica)} သည် ကိုယ်ပိုင် စာမျက်နှာများတွင် MiCA ခွင့်ပြုချက်ကို မဖော်ပြထားပါ။` : ""} ${xInfo.mica ? `${x.name} ကိုယ်တိုင်: ${stop(xInfo.mica)}` : `${x.name} ကိုယ်တိုင်က မည်သည့် ကုမ္ပဏီကိုမျှ မဖော်ပြထားပါ။`} ဒေသဆိုင်ရာ ပလက်ဖောင်းတွင် များသောအားဖြင့် ကိုယ်ပိုင် ထုတ်ကုန်၊ အခကြေးငွေနှင့် ကန့်သတ်ချက်များ ရှိပါသည်။`,
    },
    {
      q: `${x.name} အစားထိုး Exchange တွေထဲမှာ ဘယ်ဟာ အလုံခြုံဆုံးလဲ?`,
      a: `ဆုံးရှုံးနိုင်ခြေ ကင်းသော ဗဟိုချုပ်ကိုင် Exchange (CEX) မရှိပါ။ ထို့ကြောင့် Exchange တစ်ခုစီ ထုတ်ပြန်ထားသည့် အချက်များကိုသာ ရိုးသားစွာ နှိုင်းယှဉ်နိုင်ပါသည်။ ${alts
        .map(
          (a, i) =>
            `${a.name} ၏ Proof of Reserves${i === 0 ? " (အရန်ငွေ သက်သေပြချက်)" : ""}: ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : `${a.name} က အသုံးပြုသူ ကာကွယ်ရေး ရန်ပုံငွေ မဖော်ပြထားပါ။`}`,
        )
        .join(" ")} မည်သည့် Exchange တွင်မဆို အရောင်းအဝယ်အတွက် တကယ် အသုံးပြုနေသော ငွေကိုသာ ထားပါ။`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `${x.name} အစားထိုး Exchange တွေထဲက ဘယ်ဟာတွေမှာ ${f.noun} ရှိလဲ?`,
      a: `${yes.length ? `${withParticle(joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name))), "တွင်")} ${f.noun} ရှိပါသည်။` : `အစားထိုး Exchange ${n} ခုအနက် မည်သည့် Exchange မျှ ကိုယ်ပိုင် ဝက်ဘ်ဆိုက်တွင် ${f.noun} ကို မပြသထားပါ။`}${no.length ? ` ${names(no)} တွင် ဤထုတ်ကုန် မရှိပါ။` : ""}${unknown.length ? ` ${names(unknown)} ၏ ဝက်ဘ်ဆိုက်တွင် ကျွန်ုပ်တို့ စစ်ဆေးစဉ်က ထိုကဲ့သို့သော ထုတ်ကုန်ကို မတွေ့ခဲ့ပါ။` : ""} ${own === true ? `${x.name} တွင်လည်း ဤထုတ်ကုန် ရှိပါသည်။` : own === false ? `${x.name} ကိုယ်တိုင်တွင် မရှိပါ။` : `${x.name} ကိုယ်တိုင်၏ ဝက်ဘ်ဆိုက်တွင် ထိုကဲ့သို့သော ထုတ်ကုန်ကို မပြသထားပါ။`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `${x.name} အစားထိုး Exchange တွေထဲမှာ ဘယ်ဟာ Coin အများဆုံး ရှိလဲ?`,
      a: `Exchange များ ကိုယ်တိုင် ဖော်ပြထားသော ကိန်းဂဏန်းများမှာ အောက်ပါအတိုင်း ဖြစ်ပါသည်။ ${alts.map((a) => `${a.name}: ${bare(a.assets)}`).join("။ ")}။ ${x.name}: ${stop(x.assets)} Exchange များသည် မတူညီသော နည်းဖြင့် ရေတွက်ကြပါသည်။ အချို့က Coin များကို ရေတွက်ပြီး အချို့က အရောင်းအဝယ် Pair များကို ရေတွက်သဖြင့် ကိန်းဂဏန်းများကို တိုက်ရိုက် နှိုင်းယှဉ်၍ မရပါ။`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `${x.name} ကနေ တခြား Exchange ကို ဘယ်လို ပြောင်းရမလဲ?`,
      a: switchSteps(x, alts)
        .map((s, i) => `အဆင့် ${i + 1}: ${s.title}။`)
        .join(" "),
    },
    {
      q: `${x.name} အကောင့်ကို ဆက်ထားပြီး တခြား Exchange မှာ အကောင့်ဖွင့်လို့ ရလား?`,
      a: `ရပါသည်။ Exchange များသည် သီးခြား ကုမ္ပဏီများ ဖြစ်သဖြင့် Exchange တစ်ခုရှိ အကောင့်က အခြား Exchange ရှိ အကောင့်ကို မထိခိုက်ပါ။ နှစ်ခုလုံးကို တစ်ပြိုင်နက် အသုံးပြုနိုင်ပါသည်။ အကောင့်နှင့် ချိတ်ဆက်ထားသည့် အရာများကိုမူ ယူသွား၍ မရပါ: ${x.name} Referral၊ အခကြေးငွေ အဆင့်၊ ကြိုဆိုဆုလက်ဆောင်များနှင့် အရောင်းအဝယ် မှတ်တမ်းတို့သည် ${x.name} တွင်သာ ကျန်ရှိပါသည်။`,
    },
    {
      q: `${x.name} မှာ ဖွင့်ထားတဲ့ Futures Position တွေကို တခြား Exchange ကို ရွှေ့လို့ ရလား?`,
      a: `မရပါ။ Futures Position သည် ဖွင့်ခဲ့သော Exchange တွင်သာ တည်ရှိပါသည်။ ပြောင်းရွှေ့လိုလျှင် ${x.name} တွင် Position ကို ပိတ်ပြီး ငွေထုတ်ကာ အခြား Exchange တွင် Position အသစ် ဖွင့်ပါ။ ထိုအခါ ထို Exchange ၏ ဈေးနှုန်းနှင့် အခကြေးငွေများ သက်ရောက်ပါမည်။`,
    },
    {
      q: `${x.name} အစားထိုး Exchange တွေမှာ Referral Code ရှိလား?`,
      a: `ရှိပါသည်။ Exchange ${n} ခုလုံး၏ ကုဒ်များ: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("၊ ")}။ Referral Code အသုံးပြုခြင်းသည် အခမဲ့ ဖြစ်ပြီး အရောင်းအဝယ်အခကြေးငွေ မတိုးပါ။`,
    },
    {
      q: `${x.name} အစားထိုး Exchange တွေမှာ Referral Code ကို နောက်မှ ထည့်လို့ ရလား?`,
      a: `${alts.map((a) => `${a.name}: ${bare(a.referral.afterSignupShort)}`).join("။ ")}။ Exchange တိုင်းတွင် စိတ်ချရသော နည်းလမ်းမှာ Referral Link မှတစ်ဆင့် အကောင့်ဖွင့်ခြင်း ဖြစ်ပါသည်။`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `${a.name} က ${x.name} ထက် ပိုကောင်းလား?`,
      a: `${ahead.length ? `${a.name} က ${x.name} ထက် အောက်ပါ အချက်များတွင် ပိုသာပါသည်: ${ahead.join("။ ")}။` : `ကျွန်ုပ်တို့ နှိုင်းယှဉ်သော အချက်များတွင် ${a.name} သည် ${x.name} ထက် တိုင်းတာနိုင်သော အားသာချက် မရှိပါ။`} ${behind.length ? `${x.name} က ပိုသာသည့် အချက်များ: ${behind.join("။ ")}။` : `${x.name} က မည်သည့် အချက်တွင်မျှ ပိုမသာပါ။`} ${a.name} သင့်တော်သည့် အခြေအနေ: ${bare(altInfo(a).chooseIf[0])}။`,
    };
  });

  return [
    { id: "choosing", title: `${x.name} အစားထိုး Exchange ရွေးနည်း`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "အခကြေးငွေနှင့် Leverage", faqs: fees },
    { id: "countries", title: "နိုင်ငံများ၊ KYC နှင့် ကြီးကြပ်မှု", faqs: countryFaqs },
    { id: "features", title: "ထုတ်ကုန်များနှင့် Coin များ", faqs: featureFaqs },
    { id: "switching", title: `${x.name} မှ ပြောင်းရွှေ့ခြင်းနှင့် Referral Code များ`, faqs: switching },
    { id: "versus", title: `${x.name} vs အစားထိုး Exchange များ`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `${x.name} အစားထိုး Exchange အကောင်းဆုံးတွေက ဘာတွေလဲ?`,
    a: `${picks(alts)} ကျွန်ုပ်တို့၏ ${x.name} အစားထိုး Exchange များ စာမျက်နှာတွင် Exchange ${alts.length} ခုလုံးကို ${x.name} နှင့် အခကြေးငွေ၊ Leverage၊ ထုတ်ကုန်များ၊ နိုင်ငံအလိုက် အသုံးပြုနိုင်မှုနှင့် အထောက်အထား အတည်ပြုခြင်းအလိုက် နှိုင်းယှဉ်ထားပါသည်။`,
  };
}

export const my: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "ရှိ", no: "မရှိ", notFound: "Exchange ၏ ဝက်ဘ်ဆိုက်တွင် မတွေ့ပါ" },
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
