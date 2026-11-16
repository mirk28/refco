/**
 * Comparison logic for the "[Exchange] alternatives" pages.
 *
 * Every sentence built here is assembled from the verified fields in `src/data/exchanges/` and
 * `src/data/alternatives/`, so a comparison can never state a fee, a leverage limit or a country rule
 * that differs from the exchange pages.
 */
import { site } from "@/config/site";
import type { Exchange, Faq, Fee, Step } from "@/data/exchanges";
import { exchanges } from "@/data/exchanges";
import { alternativesData, countryList, featureList } from "@/data/alternatives";
import type { AlternativesInfo, FeatureKey } from "@/data/alternatives";
import { joinList } from "./faqs";
import { formatBn, prettyDate } from "./seo";

/* --------------------------------- helpers --------------------------------- */

export const pct = (s: string) => Number.parseFloat(s);
export const leverageOf = (e: Exchange) => Number(e.maxLeverage.match(/(\d+)x/)?.[1] ?? 0);
export const shortLeverage = (e: Exchange) => e.maxLeverage.replace(/\s*\(.*\)/, "");
export const feePair = (f: Fee) => `${f.maker} / ${f.taker}`;
export const altInfo = (e: Exchange): AlternativesInfo => alternativesData[e.slug];
export const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
export const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
export const verb = (list: unknown[], singular: string, plural: string) => (list.length === 1 ? singular : plural);

/** The other exchanges, ordered by CoinMarketCap's derivatives ranking. */
export const alternativesTo = (e: Exchange) => exchanges.filter((x) => x.slug !== e.slug).sort((a, b) => a.market.rank - b.market.rank);

/** All entries sharing the best score (lower is better). */
function best<T>(list: T[], score: (t: T) => number): T[] {
  const min = Math.min(...list.map(score));
  return list.filter((t) => score(t) === min);
}
const feeScore = (f: Fee) => pct(f.taker) * 1000 + pct(f.maker);

export const lowestFutures = (list: Exchange[]) => best(list, (e) => feeScore(e.futuresFees));
export const lowestSpot = (list: Exchange[]) => best(list, (e) => feeScore(e.spotFees));
export const highestLeverage = (list: Exchange[]) => best(list, (e) => -leverageOf(e));
export const largestOpenInterest = (list: Exchange[]) => best(list, (e) => -e.market.openInterestBn);
export const mostMarkets = (list: Exchange[]) => best(list, (e) => -e.market.markets);
export const withFeature = (list: Exchange[], key: FeatureKey) => list.filter((e) => altInfo(e).features[key].has === true);
export const withMica = (list: Exchange[]) => list.filter((e) => altInfo(e).mica);

/** "yes" – the exchange documents a self-service way; "request" – only by support request; "no" – sign-up only or undocumented. */
export const addLater = (e: Exchange): "yes" | "request" | "no" =>
  /^yes/i.test(e.referral.afterSignupShort) ? "yes" : /^by request/i.test(e.referral.afterSignupShort) ? "request" : "no";

const cheaper = (a: Fee, b: Fee) => feeScore(a) < feeScore(b);

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
export function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const label = market === "spot" ? "spot" : "perpetual futures";
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} and ${x.name} charge the same standard ${label} fees: ${fa.maker} maker / ${fa.taker} taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0 ? `${who} is cheaper for makers and takers` : mm !== 0 ? `${who} is cheaper for makers, takers pay the same` : `${who} is cheaper for takers, makers pay the same`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} is cheaper for makers, ${x.name} for takers`
          : `${x.name} is cheaper for makers, ${a.name} for takers`;
  return `On ${label} ${a.name} charges ${fa.maker} maker / ${fa.taker} taker and ${x.name} ${fx.maker} / ${fx.taker} – ${verdict}.`;
}

/** Which alternatives are cheaper than, level with or more expensive than `x` on one market (standard tier). */
export function feeSummary(x: Exchange, alts: Exchange[], market: "spot" | "futures"): string {
  const fee = (e: Exchange) => (market === "spot" ? e.spotFees : e.futuresFees);
  const fx = fee(x);
  const diff = (a: Exchange) => [Math.sign(pct(fee(a).maker) - pct(fx.maker)), Math.sign(pct(fee(a).taker) - pct(fx.taker))];
  const same = alts.filter((a) => diff(a).every((d) => d === 0));
  const lower = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d <= 0));
  const higher = alts.filter((a) => !same.includes(a) && diff(a).every((d) => d >= 0));
  const mixed = alts.filter((a) => !same.includes(a) && !lower.includes(a) && !higher.includes(a));
  const rates = (list: Exchange[]) => joinList(list.map((a) => `${a.name} (${feePair(fee(a))})`));
  return [
    `On ${market === "spot" ? "spot" : "perpetual futures"} ${x.name} charges ${feePair(fx)} (maker / taker).`,
    lower.length ? `Cheaper: ${rates(lower)}.` : `None of the ${alts.length} alternatives is cheaper.`,
    same.length ? `Same rates: ${names(same)}.` : "",
    higher.length ? `More expensive: ${rates(higher)}.` : "",
    mixed.length ? `Cheaper on one side only: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
export function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (label: string, fa: Fee, fx: Fee) => {
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Lower ${label} fees: ${feePair(fa)} instead of ${feePair(fx)} (maker / taker)`);
    else if (m < 0 && t === 0) out.push(`Lower ${label} maker fee: ${fa.maker} instead of ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Lower ${label} taker fee: ${fa.taker} instead of ${fx.taker}`);
    else if (m < 0) out.push(`Lower ${label} maker fee: ${fa.maker} instead of ${fx.maker} (but a higher taker fee)`);
    else if (t < 0) out.push(`Lower ${label} taker fee: ${fa.taker} instead of ${fx.taker} (but a higher maker fee)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Higher maximum leverage: ${leverageOf(a)}x instead of ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`More derivatives open interest: ${formatBn(a.market.openInterestBn)} against ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`More derivatives markets: ${a.market.markets} against ${x.market.markets}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes") out.push(`A forgotten referral code can still be added (${lcFirst(a.referral.afterSignupShort.replace(/^Yes – /, ""))})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = featureList.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Offers ${joinList(notOffered.map((f) => f.noun))}, which ${x.name} does not`);
  if (notFound.length) out.push(`Offers ${joinList(notFound.map((f) => f.noun))} – we found no such product on ${x.name}'s own site`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`An EEA platform authorised under MiCA (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countryList.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Does not restrict ${joinList(openWhere.map((c) => c.name))}, where ${x.name} is closed`);
  if (regionalWhere.length) out.push(`Serves ${joinList(regionalWhere.map((c) => c.name))} through a regional platform, where ${x.name} is closed`);
  return out;
}

/* ---------------------------------- country --------------------------------- */

/** Where the alternatives stand in one country, grouped by status. */
export function countryGroups(alts: Exchange[], key: (typeof countryList)[number]["key"]) {
  const by = (status: string) => alts.filter((a) => altInfo(a).countries[key].status === status);
  return { open: by("open"), regional: by("regional"), partial: by("partial"), restricted: by("restricted") };
}

/** Plain-text answer to "Which alternatives to x can be used in this country?". */
export function countryAnswer(x: Exchange, alts: Exchange[], c: (typeof countryList)[number]): string {
  const own = altInfo(x).countries[c.key];
  const g = countryGroups(alts, c.key);
  const note = (a: Exchange) => altInfo(a).countries[c.key].note;
  const withNote = (list: Exchange[]) => list.map((a) => (note(a) ? `${a.name} (${note(a)})` : a.name));
  const parts: string[] = [];
  if (own.status === "restricted") parts.push(`${x.name} names ${c.name} on its own list of restricted countries.`);
  else if (own.status === "partial") parts.push(`${x.name} restricts ${c.name} in part${own.note ? ` (${own.note})` : ""}.`);
  else if (own.status === "regional") parts.push(`${x.name} serves ${c.residents} through a regional platform${own.note ? ` (${own.note})` : ""}.`);
  else parts.push(`${x.name} does not list ${c.name} as restricted.`);
  if (g.open.length) parts.push(`${names(g.open)} ${verb(g.open, "does", "do")} not list ${c.name} as restricted.`);
  if (g.regional.length) parts.push(`${joinList(withNote(g.regional))} ${verb(g.regional, "serves", "serve")} ${c.residents} through a separate regional platform.`);
  if (g.partial.length) parts.push(`Partly restricted: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length) parts.push(`${names(g.restricted)} ${verb(g.restricted, "restricts", "restrict")} ${c.name}${own.status === "restricted" ? " as well" : ""}.`);
  if (!g.open.length && !g.regional.length) parts.push(`None of the ${alts.length} alternatives is fully open to ${c.residents}.`);
  parts.push("Country lists change, and a country that is not listed is no guarantee that every product is offered there – the exchange's own terms decide.");
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
export function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `The ${alts.length} ${x.name} alternatives compared here are ${names(alts)}. ${alts.map((a) => altInfo(a).pick).join(". ")}. All ${alts.length} ask new users for identity verification and each has its own list of restricted countries, so check the country table before you sign up.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
export function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Decide what has to be better than on ${x.name}`,
      text: `Lower fees, more leverage, more coins or simply an exchange that accepts your country: the tables on this page show where each alternative is ahead of ${x.name} and where it is not.`,
    },
    {
      title: "Check that the exchange accepts your country",
      text: "Every exchange has its own list of restricted countries, and some route you to a regional platform with different products and limits. Look at the country table before you register.",
    },
    {
      title: "Register through the referral link",
      text: `${names(signupOnly)} only ${verb(signupOnly, "takes", "take")} a referral code during registration or ${verb(signupOnly, "documents", "document")} no way to add one later, so use the link before the account exists.${later.length ? ` ${names(later)} ${verb(later, "allows", "allow")} adding it afterwards under conditions.` : ""}`,
    },
    {
      title: "Verify your identity before you move funds",
      text: `All ${alts.length} alternatives ask new users for identity verification, and on most of them deposits or trading stay locked until it is done. Have a passport, ID card or driver's licence ready.`,
    },
    {
      title: `Close your open positions on ${x.name}`,
      text: `Futures and margin positions cannot be moved between exchanges. Close them on ${x.name} first, or keep the account until they have run out.`,
    },
    {
      title: "Withdraw to your new deposit address",
      text: `Copy the deposit address from the new exchange, choose the same coin and the same network on both sides and send a small test amount first. A transfer on the wrong network can be lost.`,
    },
    {
      title: `Decide what happens to your ${x.name} account`,
      text: `You can keep it – accounts on different exchanges are independent of each other. Your fee tier, your referral and unused rewards stay with ${x.name} and do not carry over.`,
    },
  ];
}

export type AltFaqGroup = { id: string; title: string; faqs: Faq[] };

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
export function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
  const n = alts.length;
  const date = prettyDate(site.lastReviewed);
  const lowF = lowestFutures(alts);
  const lowS = lowestSpot(alts);
  const hi = highestLeverage(alts);
  const oi = largestOpenInterest(alts);
  const cheaperF = alts.filter((a) => cheaper(a.futuresFees, x.futuresFees));
  const cheaperS = alts.filter((a) => cheaper(a.spotFees, x.spotFees));
  const mica = withMica(alts);
  const noMica = alts.filter((a) => !altInfo(a).mica);
  const xInfo = altInfo(x);

  const choosing: Faq[] = [
    {
      q: `What is the best alternative to ${x.name}?`,
      a: `There is no single best ${x.name} alternative – it depends on why you want to switch. ${alts.map((a) => altInfo(a).pick).join(". ")}. All ${n} are compared with ${x.name} on this page by fees, leverage, products, country availability and verification, with figures from the exchanges' own sites, checked on ${date}.`,
    },
    {
      q: `Which exchanges are similar to ${x.name}?`,
      a: `${names(alts)} are the closest matches. Like ${x.name}, they are centralised exchanges that offer spot and leveraged futures trading under one account and run a referral programme for new users. They differ in fees, maximum leverage, the number of listed assets and the countries they accept.`,
    },
    {
      q: `What is the largest ${x.name} alternative?`,
      a: `Measured by derivatives open interest on CoinMarketCap (${prettyDate(site.marketDataDate)}), ${names(oi)} ${verb(oi, "is", "are")} the largest of the ${n} alternatives with ${formatBn(oi[0].market.openInterestBn)}. ${x.name} itself stood at ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Which ${x.name} alternative has the lowest fees?`,
      a: `${names(lowF)} ${verb(lowF, "has", "have")} the lowest standard futures fees of the ${n}: ${feePair(lowF[0].futuresFees)} (maker / taker). On spot, ${names(lowS)} ${verb(lowS, "is", "are")} cheapest with ${feePair(lowS[0].spotFees)}. ${x.name} charges ${feePair(x.futuresFees)} on futures and ${feePair(x.spotFees)} on spot.${lowF.length === 1 ? ` ${lowF[0].feeNote}` : ""} These are standard-tier rates; VIP levels and exchange tokens lower them further.`,
    },
    {
      q: `Which exchanges are cheaper than ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `On perpetual futures: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, against ${feePair(x.futuresFees)} on ${x.name}.` : `On perpetual futures none of the ${n} alternatives undercuts ${x.name}'s ${feePair(x.futuresFees)}.`} ${cheaperS.length ? `On spot: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, against ${feePair(x.spotFees)} on ${x.name}.` : `On spot none of them undercuts ${x.name}'s ${feePair(x.spotFees)}.`} All figures are maker / taker on the standard tier.`
          : `None of the ${n} alternatives undercuts ${x.name} on the standard tier: ${x.name} charges ${feePair(x.futuresFees)} on futures and ${feePair(x.spotFees)} on spot (maker / taker), the lowest rates in this comparison. The alternatives are worth a look for other reasons – regulation, products or the countries they accept.`,
    },
    {
      q: `Which ${x.name} alternative offers the highest leverage?`,
      a: `${names(hi)} ${verb(hi, "offers", "offer")} the highest leverage of the ${n}: ${hi[0].maxLeverage.replace(/^Up to/, "up to")}. The others: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. ${x.name} itself goes ${x.maxLeverage.replace(/^Up to/, "up to")}. High leverage sharply increases the risk of liquidation.`,
    },
  ];

  const restrictedAtHome = countryList.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countries: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Which ${x.name} alternatives can I use in ${c.name}?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Is there a ${x.name} alternative without KYC?`,
      a: `Not among these ${n}. Each of them asks new users for identity verification: ${alts.map((a) => `${a.name} – ${lcFirst(a.signup.kycShort)}`).join("; ")}. ${x.name} itself: ${lcFirst(x.signup.kycShort)}.`,
    },
    {
      q: `Which ${x.name} alternatives are regulated in the EU under MiCA?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "names", "name")} a MiCA-authorised entity for EEA residents.` : `None of the ${n} names a MiCA-authorised entity.`}${noMica.length ? ` ${names(noMica)} ${verb(noMica, "names", "name")} no MiCA authorisation on ${verb(noMica, "its", "their")} own pages.` : ""} ${xInfo.mica ? `${x.name} itself: ${xInfo.mica}.` : `${x.name} itself names none.`} A regional platform usually has its own product range, fees and limits.`,
    },
    {
      q: `Which ${x.name} alternative is the safest?`,
      a: `No centralised exchange is risk-free, so the honest comparison is what each one publishes. ${alts.map((a) => `${a.name}: proof of reserves – ${altInfo(a).reserves}. ${altInfo(a).fund ? `${altInfo(a).fund}.` : "No protection fund named."}`).join(" ")} Keep only the funds you actively trade with on any exchange.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = featureList.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Which ${x.name} alternatives offer ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${verb(yes, "offers", "offer")} ${f.noun}.` : `None of the ${n} alternatives shows ${f.noun} on its own site.`}${no.length ? ` ${names(no)} ${verb(no, "does", "do")} not offer it.` : ""}${unknown.length ? ` On the ${verb(unknown, "site", "sites")} of ${names(unknown)} we found no such product at our check.` : ""} ${x.name} itself ${own === true ? "has this as well" : own === false ? "does not" : "shows no such product on its site"}.`,
    };
  };
  const features: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Which ${x.name} alternative lists the most coins?`,
      a: `By their own figures: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}. ${x.name}: ${x.assets}. The exchanges count differently – some count coins, others trading pairs – so the figures are not directly comparable.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `How do I switch from ${x.name} to another exchange?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Can I keep my ${x.name} account when I open one on another exchange?`,
      a: `Yes. The exchanges are separate companies, so an account on one does not affect an account on another and you can use both side by side. What does not carry over is anything tied to the account: your ${x.name} referral, fee tier, welcome rewards and trading history stay with ${x.name}.`,
    },
    {
      q: `Can I move open futures positions from ${x.name} to another exchange?`,
      a: `No. A futures position exists only on the exchange where it was opened. To move, close the position on ${x.name}, withdraw the funds and open a new position on the other exchange – at the price and the fees that apply there.`,
    },
    {
      q: `Do the ${x.name} alternatives have referral codes?`,
      a: `Yes, all ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Using a referral code is free and does not raise your trading fees.`,
    },
    {
      q: `Can I add a referral code later on a ${x.name} alternative?`,
      a: `${alts.map((a) => `${a.name}: ${lcFirst(a.referral.afterSignupShort)}`).join(". ")}. The safe way on every exchange is to register through the referral link.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Is ${a.name} better than ${x.name}?`,
      a: `${ahead.length ? `${a.name} is ahead of ${x.name} on these points: ${ahead.map(lcFirst).join("; ")}.` : `On the points we compare, ${a.name} has no measurable advantage over ${x.name}.`} ${behind.length ? `${x.name} is ahead on: ${behind.map(lcFirst).join("; ")}.` : `${x.name} is ahead on none of them.`} ${a.name} suits you if ${lcFirst(altInfo(a).chooseIf[0])}.`,
    };
  });

  return [
    { id: "choosing", title: `Choosing a ${x.name} alternative`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Fees and leverage", faqs: fees },
    { id: "countries", title: "Countries, KYC and regulation", faqs: countries },
    { id: "features", title: "Products and coins", faqs: features },
    { id: "switching", title: `Switching from ${x.name} and referral codes`, faqs: switching },
    { id: "versus", title: `${x.name} vs. the alternatives`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
export function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `What are the best alternatives to ${x.name}?`,
    a: `${alts.map((a) => altInfo(a).pick).join(". ")}. Our ${x.name} alternatives page compares all ${alts.length} with ${x.name} by fees, leverage, products, country availability and verification.`,
  };
}
