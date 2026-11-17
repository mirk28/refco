/**
 * The sentences of the comparison pages in German. Same functions and the same logic as `./en.ts`, written in
 * German grammar.
 *
 * Wording: "Börse", "Empfehlungscode", "Gebühren", informal "du". Exchange names take no article ("bei Binance",
 * "von OKX") and no genitive -s. Countries carry their article in `name` ("die USA") and the form after "in" in
 * `inName` ("in den USA"). Fee rates come from the data in German notation (0,02 %); leverage stays 150x.
 * German capitalises nouns, so inserted data texts keep their first letter – only the fixed sentence starters
 * of the data ("Bis zu", "Du" …) and the starters of the sentences written here are lower-cased.
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
  verb,
  withFeature,
  withMica,
} from "@/lib/compare";
import { formatBn as formatBnIn, prettyDate as prettyDateIn } from "@/lib/seo";
import type { AltFaqGroup, CompareText } from "./en";

const locale = "de";
const joinList = getDictionary(locale).list;
const altInfo = (e: Exchange) => altInfoIn(e, locale);
const alternativesTo = (e: Exchange) => alternativesIn(e, locale);
const names = (list: Exchange[]) => joinList(list.map((e) => e.name));
const formatBn = (n: number) => formatBnIn(n, locale);
const prettyDate = (iso: string) => prettyDateIn(iso, locale);
const count = (n: number) => n.toLocaleString("de-DE");

/* -------------------------------- capitals -------------------------------- */

/** Lower-cases only the fixed starters of the data texts ("Bis zu 150x …" → "bis zu 150x …", "Du …" → "du …"). */
const lcStart = (s: string) => s.replace(/^(Ja|Nein|Auf Anfrage|Bis zu|Du)(?=[\s–])/, (w) => w.charAt(0).toLowerCase() + w.slice(1));

/** The first words of the points built by `advantages` below – none of them is a noun. */
const pointStarters = new Set(["Niedrigere", "Höherer", "Mehr", "Ein", "Eine", "Bietet", "Keine", "Bedient"]);
/** A point of `advantages` inside a sentence: "niedrigere Spot-Gebühren …". Anything else keeps its capital. */
const lcPoint = (s: string) => {
  const first = s.split(" ")[0];
  return pointStarters.has(first) ? first.toLowerCase() + s.slice(first.length) : s;
};

/** Ends a data text with a full stop unless it already has one ("… 1 Mrd."). */
const stop = (s: string) => (/[.!?]$/.test(s) ? s : `${s}.`);
/** The `pick` lines of several exchanges as consecutive sentences. */
const picks = (list: Exchange[]) => list.map((a) => stop(altInfo(a).pick)).join(" ");

/* -------------------------------- vocabulary -------------------------------- */

/** `label` for the tables, `noun` as the object of "bietet" in sentences ("bietet eine Krypto-Karte"). */
const featureWords: Record<FeatureKey, { label: string; noun: string }> = {
  copyTrading: { label: "Copy Trading", noun: "Copy Trading" },
  tradingBots: { label: "Trading-Bots", noun: "Trading-Bots" },
  options: { label: "Optionen", noun: "Optionshandel" },
  demoTrading: { label: "Demo-Trading", noun: "Demo-Trading" },
  margin: { label: "Spot-Margin", noun: "Spot-Margin-Handel" },
  p2p: { label: "P2P-Handel", noun: "P2P-Handel" },
  fiat: { label: "Kauf per Karte / Bank", noun: "Kryptokäufe per Karte oder Banküberweisung" },
  earn: { label: "Earn / Staking", noun: "Earn-Produkte" },
  launchpad: { label: "Launchpad / Launchpool", noun: "ein Launchpad" },
  web3Wallet: { label: "Web3-Wallet", noun: "eine Web3-Wallet zur Selbstverwahrung" },
  card: { label: "Krypto-Karte", noun: "eine Krypto-Karte" },
};
const features = featureList.map((f) => ({ key: f.key, ...featureWords[f.key] }));

/** `name` with its article where German needs one ("die USA"), `inName` after "in" ("in den USA"), `short` for tables. */
const countryWords: Record<CountryKey, { name: string; inName: string; short: string }> = {
  us: { name: "die USA", inName: "in den USA", short: "USA" },
  uk: { name: "das Vereinigte Königreich", inName: "im Vereinigten Königreich", short: "Vereinigtes Königreich" },
  ca: { name: "Kanada", inName: "in Kanada", short: "Kanada" },
  de: { name: "Deutschland", inName: "in Deutschland", short: "Deutschland" },
  fr: { name: "Frankreich", inName: "in Frankreich", short: "Frankreich" },
  nl: { name: "die Niederlande", inName: "in den Niederlanden", short: "Niederlande" },
  es: { name: "Spanien", inName: "in Spanien", short: "Spanien" },
  it: { name: "Italien", inName: "in Italien", short: "Italien" },
  au: { name: "Australien", inName: "in Australien", short: "Australien" },
  jp: { name: "Japan", inName: "in Japan", short: "Japan" },
  sg: { name: "Singapur", inName: "in Singapur", short: "Singapur" },
  hk: { name: "Hongkong", inName: "in Hongkong", short: "Hongkong" },
  in: { name: "Indien", inName: "in Indien", short: "Indien" },
  ae: { name: "die Vereinigten Arabischen Emirate", inName: "in den VAE", short: "VAE" },
};
/** `residents` is nominative and accusative ("Nutzer mit Wohnsitz in den USA"). */
const countries = countryList.map((c) => ({ key: c.key, ...countryWords[c.key], residents: `Nutzer mit Wohnsitz ${countryWords[c.key].inName}` }));
type Country = (typeof countries)[number];
/** Dative plural: "Nutzern mit Wohnsitz in den USA". */
const residentsDat = (c: Country) => `Nutzern mit Wohnsitz ${c.inName}`;

const statusLabel: Record<CountryStatus, string> = {
  restricted: "Gesperrt",
  regional: "Regionale Website",
  partial: "Teilweise",
  open: "Nicht gesperrt",
};

/** "im Spot-Handel" / "bei Perpetual Futures" – the market of a fee comparison. */
const inMarket = (market: "spot" | "futures") => (market === "spot" ? "im Spot-Handel" : "bei Perpetual Futures");
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ------------------------------ pair comparison ----------------------------- */

/** One sentence comparing the standard fees of two exchanges on one market. */
function feeSentence(a: Exchange, x: Exchange, market: "spot" | "futures"): string {
  const fa = market === "spot" ? a.spotFees : a.futuresFees;
  const fx = market === "spot" ? x.spotFees : x.futuresFees;
  const where = inMarket(market);
  const m = Math.sign(pct(fa.maker) - pct(fx.maker));
  const t = Math.sign(pct(fa.taker) - pct(fx.taker));
  if (m === 0 && t === 0) return `${a.name} und ${x.name} verlangen ${where} dieselben Standardgebühren: ${fa.maker} Maker / ${fa.taker} Taker.`;
  const one = (who: string, mm: number, tt: number) =>
    mm !== 0 && tt !== 0
      ? `${who} ist für Maker und Taker günstiger`
      : mm !== 0
        ? `${who} ist für Maker günstiger, Taker zahlen gleich viel`
        : `${who} ist für Taker günstiger, Maker zahlen gleich viel`;
  const verdict =
    m <= 0 && t <= 0
      ? one(a.name, m, t)
      : m >= 0 && t >= 0
        ? one(x.name, m, t)
        : m < 0
          ? `${a.name} ist für Maker günstiger, ${x.name} für Taker`
          : `${x.name} ist für Maker günstiger, ${a.name} für Taker`;
  return `${cap(where)} verlangt ${a.name} ${fa.maker} Maker / ${fa.taker} Taker und ${x.name} ${fx.maker} / ${fx.taker} – ${verdict}.`;
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
    `${cap(inMarket(market))} verlangt ${x.name} ${feePair(fx)} (Maker / Taker).`,
    lower.length ? `Günstiger: ${rates(lower)}.` : `Keine der ${alts.length} Alternativen ist günstiger.`,
    same.length ? `Gleiche Gebühren: ${names(same)}.` : "",
    higher.length ? `Teurer: ${rates(higher)}.` : "",
    mixed.length ? `Nur bei Maker oder Taker günstiger: ${rates(mixed)}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

/** Measurable points on which `a` is ahead of `x`. Empty when there are none. */
function advantages(a: Exchange, x: Exchange): string[] {
  const out: string[] = [];
  const fee = (market: "spot" | "futures", fa: Fee, fx: Fee) => {
    const fees = market === "spot" ? "Spot-Gebühren" : "Futures-Gebühren";
    const where = market === "spot" ? "im Spot-Handel" : "bei Futures";
    const m = pct(fa.maker) - pct(fx.maker);
    const t = pct(fa.taker) - pct(fx.taker);
    if (m < 0 && t < 0) out.push(`Niedrigere ${fees}: ${feePair(fa)} statt ${feePair(fx)} (Maker / Taker)`);
    else if (m < 0 && t === 0) out.push(`Niedrigere Maker-Gebühr ${where}: ${fa.maker} statt ${fx.maker}`);
    else if (t < 0 && m === 0) out.push(`Niedrigere Taker-Gebühr ${where}: ${fa.taker} statt ${fx.taker}`);
    else if (m < 0) out.push(`Niedrigere Maker-Gebühr ${where}: ${fa.maker} statt ${fx.maker} (aber eine höhere Taker-Gebühr)`);
    else if (t < 0) out.push(`Niedrigere Taker-Gebühr ${where}: ${fa.taker} statt ${fx.taker} (aber eine höhere Maker-Gebühr)`);
  };
  fee("spot", a.spotFees, x.spotFees);
  fee("futures", a.futuresFees, x.futuresFees);
  if (leverageOf(a) > leverageOf(x)) out.push(`Höherer maximaler Hebel: ${leverageOf(a)}x statt ${leverageOf(x)}x`);
  if (a.market.openInterestBn > x.market.openInterestBn)
    out.push(`Mehr Open Interest bei Derivaten: ${formatBn(a.market.openInterestBn)} gegenüber ${formatBn(x.market.openInterestBn)}`);
  if (a.market.markets > x.market.markets) out.push(`Mehr Derivatemärkte: ${count(a.market.markets)} gegenüber ${count(x.market.markets)}`);
  if (addLater(a) === "yes" && addLater(x) !== "yes")
    out.push(`Ein vergessener Empfehlungscode lässt sich noch nachtragen (${a.referral.afterSignupShort.replace(/^Ja – /, "")})`);

  const fa = altInfo(a).features;
  const fx = altInfo(x).features;
  const extra = features.filter((f) => fa[f.key].has === true && fx[f.key].has !== true);
  const notOffered = extra.filter((f) => fx[f.key].has === false);
  const notFound = extra.filter((f) => fx[f.key].has === null);
  if (notOffered.length) out.push(`Bietet ${joinList(notOffered.map((f) => f.noun))}, ${x.name} dagegen nicht`);
  if (notFound.length) out.push(`Bietet ${joinList(notFound.map((f) => f.noun))} – auf der eigenen Website von ${x.name} haben wir kein solches Angebot gefunden`);

  if (altInfo(a).mica && !altInfo(x).mica) out.push(`Eine nach MiCA zugelassene Plattform für den EWR (${altInfo(a).mica})`);

  const ca = altInfo(a).countries;
  const cx = altInfo(x).countries;
  const closedAt = (status: string) => countries.filter((c) => cx[c.key].status === "restricted" && ca[c.key].status === status);
  const openWhere = closedAt("open");
  const regionalWhere = closedAt("regional");
  if (openWhere.length) out.push(`Keine Sperre ${joinList(openWhere.map((c) => c.inName))}, während ${x.name} dort nicht zugänglich ist`);
  if (regionalWhere.length)
    out.push(`Bedient Nutzer ${joinList(regionalWhere.map((c) => c.inName))} über eine regionale Plattform, während ${x.name} dort nicht zugänglich ist`);
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
  if (own.status === "restricted") parts.push(`${x.name} führt ${c.name} auf der eigenen Liste gesperrter Länder.`);
  else if (own.status === "partial") parts.push(`${x.name} schränkt das Angebot ${c.inName} teilweise ein${ownNote}.`);
  else if (own.status === "regional") parts.push(`${x.name} bedient ${c.residents} über eine regionale Plattform${ownNote}.`);
  else parts.push(`${x.name} führt ${c.name} nicht als gesperrtes Land.`);
  if (g.open.length) parts.push(`${names(g.open)} ${verb(g.open, "führt", "führen")} ${c.name} nicht als gesperrtes Land.`);
  if (g.regional.length)
    parts.push(
      `${joinList(withNote(g.regional))} ${verb(g.regional, "bedient", "bedienen")} ${c.residents} ${verb(g.regional, "über eine eigene regionale Plattform", "jeweils über eine eigene regionale Plattform")}.`,
    );
  if (g.partial.length) parts.push(`Teilweise gesperrt: ${withNote(g.partial).join("; ")}.`);
  if (g.restricted.length)
    parts.push(`${names(g.restricted)} ${verb(g.restricted, "sperrt", "sperren")} ${c.name}${own.status === "restricted" ? " ebenfalls" : ""}.`);
  if (!g.open.length && !g.regional.length) parts.push(`Keine der ${alts.length} Alternativen steht ${residentsDat(c)} uneingeschränkt offen.`);
  parts.push(
    "Länderlisten ändern sich, und dass ein Land nicht auf der Liste steht, garantiert nicht, dass dort jedes Produkt angeboten wird – maßgeblich sind die Bedingungen der jeweiligen Börse.",
  );
  return parts.join(" ");
}

/* ---------------------------------- content --------------------------------- */

/** The "answer first" paragraph at the top of an alternatives page. */
function quickAnswer(x: Exchange, alts: Exchange[]): string {
  return `Die ${alts.length} ${x.name}-Alternativen in diesem Vergleich sind ${names(alts)}. ${picks(alts)} Alle ${alts.length} verlangen von Neukunden eine Identitätsprüfung (KYC), und jede hat ihre eigene Liste gesperrter Länder – wirf deshalb vor der Registrierung einen Blick in die Ländertabelle.`;
}

/** Steps for moving from one exchange to another (also published as HowTo schema). */
function switchSteps(x: Exchange, alts: Exchange[]): Step[] {
  const signupOnly = alts.filter((a) => addLater(a) === "no");
  const later = alts.filter((a) => addLater(a) !== "no");
  return [
    {
      title: `Lege fest, was besser sein soll als bei ${x.name}`,
      text: `Niedrigere Gebühren, mehr Hebel, mehr Coins oder einfach eine Börse, die dein Land akzeptiert: Die Tabellen auf dieser Seite zeigen, wo jede Alternative ${x.name} voraus ist und wo nicht.`,
    },
    {
      title: "Prüfe, ob die Börse dein Land akzeptiert",
      text: "Jede Börse hat ihre eigene Liste gesperrter Länder, und manche leiten dich auf eine regionale Plattform mit anderen Produkten und Limits weiter. Sieh dir vor der Registrierung die Ländertabelle an.",
    },
    {
      title: "Registriere dich über den Empfehlungslink",
      text: `${names(signupOnly)} ${verb(signupOnly, "nimmt", "nehmen")} einen Empfehlungscode nur bei der Registrierung an oder ${verb(signupOnly, "dokumentiert", "dokumentieren")} keinen Weg, ihn später nachzutragen – nutze den Link deshalb, bevor das Konto angelegt ist.${later.length ? ` ${names(later)} ${verb(later, "erlaubt", "erlauben")} das Nachtragen unter bestimmten Bedingungen.` : ""}`,
    },
    {
      title: "Schließe die Identitätsprüfung ab, bevor du Guthaben überträgst",
      text: `Alle ${alts.length} Alternativen verlangen von Neukunden eine Identitätsprüfung, und bei den meisten bleiben Einzahlungen oder der Handel gesperrt, bis sie abgeschlossen ist. Halte Reisepass, Personalausweis oder Führerschein bereit.`,
    },
    {
      title: `Schließe deine offenen Positionen bei ${x.name}`,
      text: `Futures- und Margin-Positionen lassen sich nicht von einer Börse auf eine andere übertragen. Schließe sie zuerst bei ${x.name} oder behalte das Konto, bis sie ausgelaufen sind.`,
    },
    {
      title: "Zahle auf deine neue Einzahlungsadresse aus",
      text: "Kopiere die Einzahlungsadresse der neuen Börse, wähle auf beiden Seiten denselben Coin und dasselbe Netzwerk und sende zuerst einen kleinen Testbetrag. Eine Transaktion über das falsche Netzwerk kann verloren gehen.",
    },
    {
      title: `Entscheide, was mit deinem ${x.name}-Konto passiert`,
      text: `Du kannst es behalten – Konten bei verschiedenen Börsen sind voneinander unabhängig. Deine Gebührenstufe, deine Empfehlungszuordnung und nicht genutzte Prämien bleiben bei ${x.name} und werden nicht übertragen.`,
    },
  ];
}

/** All questions an alternatives page answers, grouped for display. Answers are built from the data files. */
function buildAlternativesFaqs(x: Exchange, alts: Exchange[]): AltFaqGroup[] {
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
      q: `Was ist die beste ${x.name}-Alternative?`,
      a: `Die eine beste ${x.name}-Alternative gibt es nicht – es kommt darauf an, warum du wechseln willst. ${picks(alts)} Auf dieser Seite werden alle ${n} mit ${x.name} verglichen: nach Gebühren, Hebel, Produkten, Verfügbarkeit nach Ländern und Identitätsprüfung, mit Zahlen von den Websites der Börsen selbst, geprüft am ${date}.`,
    },
    {
      q: `Welche Börsen sind ähnlich wie ${x.name}?`,
      a: `${names(alts)} kommen ${x.name} am nächsten. Wie ${x.name} sind sie zentralisierte Börsen, die Spot-Handel und Futures mit Hebel unter einem Konto anbieten und ein Empfehlungsprogramm für Neukunden betreiben. Sie unterscheiden sich bei den Gebühren, beim maximalen Hebel, bei der Zahl der gelisteten Assets und bei den Ländern, die sie akzeptieren.`,
    },
    {
      q: `Was ist die größte ${x.name}-Alternative?`,
      a: `Gemessen am Open Interest bei Derivaten auf CoinMarketCap (${prettyDate(site.marketDataDate)}) ${verb(oi, "ist", "sind")} ${names(oi)} mit ${formatBn(oi[0].market.openInterestBn)} ${verb(oi, "die größte", "die größten")} der ${n} Alternativen. ${x.name} selbst lag bei ${formatBn(x.market.openInterestBn)}.`,
    },
  ];

  const fees: Faq[] = [
    {
      q: `Welche ${x.name}-Alternative hat die niedrigsten Gebühren?`,
      a: `${names(lowF)} ${verb(lowF, "hat", "haben")} unter den ${n} die niedrigsten Standardgebühren für Futures: ${feePair(lowF[0].futuresFees)} (Maker / Taker). Im Spot-Handel ${verb(lowS, "ist", "sind")} ${names(lowS)} mit ${feePair(lowS[0].spotFees)} am günstigsten. ${x.name} verlangt ${feePair(x.futuresFees)} bei Futures und ${feePair(x.spotFees)} im Spot-Handel.${lowF.length === 1 ? ` ${lowF[0].feeNote}` : ""} Das sind die Sätze der Standardstufe; VIP-Stufen und die börseneigenen Token senken sie weiter.`,
    },
    {
      q: `Welche Börsen sind günstiger als ${x.name}?`,
      a:
        cheaperF.length || cheaperS.length
          ? `${cheaperF.length ? `Bei Perpetual Futures: ${joinList(cheaperF.map((a) => `${a.name} (${feePair(a.futuresFees)})`))}, gegenüber ${feePair(x.futuresFees)} bei ${x.name}.` : `Bei Perpetual Futures liegt keine der ${n} Alternativen unter den ${feePair(x.futuresFees)} von ${x.name}.`} ${cheaperS.length ? `Im Spot-Handel: ${joinList(cheaperS.map((a) => `${a.name} (${feePair(a.spotFees)})`))}, gegenüber ${feePair(x.spotFees)} bei ${x.name}.` : `Im Spot-Handel liegt keine von ihnen unter den ${feePair(x.spotFees)} von ${x.name}.`} Alle Angaben: Maker / Taker auf der Standardstufe.`
          : `Keine der ${n} Alternativen unterbietet ${x.name} auf der Standardstufe: ${x.name} verlangt ${feePair(x.futuresFees)} bei Futures und ${feePair(x.spotFees)} im Spot-Handel (Maker / Taker) – die niedrigsten Sätze in diesem Vergleich. Einen Blick wert sind die Alternativen aus anderen Gründen: Regulierung, Produkte oder die Länder, die sie akzeptieren.`,
    },
    {
      q: `Welche ${x.name}-Alternative bietet den höchsten Hebel?`,
      a: `${names(hi)} ${verb(hi, "bietet", "bieten")} unter den ${n} den höchsten Hebel: ${lcStart(hi[0].maxLeverage)}. Die übrigen: ${alts
        .filter((a) => !hi.includes(a))
        .map((a) => `${a.name} ${leverageOf(a)}x`)
        .join(", ")}. ${x.name} selbst bietet ${lcStart(x.maxLeverage)}. Ein hoher Hebel erhöht das Risiko einer Liquidation erheblich.`,
    },
  ];

  const restrictedAtHome = countries.filter((c) => xInfo.countries[c.key].status === "restricted" || xInfo.countries[c.key].status === "partial");
  const countryFaqs: Faq[] = [
    ...restrictedAtHome.slice(0, 4).map((c) => ({
      q: `Welche ${x.name}-Alternativen kann ich ${c.inName} nutzen?`,
      a: countryAnswer(x, alts, c),
    })),
    {
      q: `Gibt es eine ${x.name}-Alternative ohne KYC?`,
      a: `Nicht unter diesen ${n}. Jede von ihnen verlangt von Neukunden eine Identitätsprüfung: ${alts.map((a) => `${a.name} – ${a.signup.kycShort}`).join("; ")}. ${x.name} selbst: ${stop(x.signup.kycShort)}`,
    },
    {
      q: `Welche ${x.name}-Alternativen sind in der EU nach MiCA reguliert?`,
      a: `${mica.length ? `${joinList(mica.map((a) => `${a.name} (${altInfo(a).mica})`))} ${verb(mica, "nennt", "nennen")} für Nutzer im EWR eine nach MiCA zugelassene Gesellschaft.` : `Keine der ${n} nennt eine nach MiCA zugelassene Gesellschaft.`}${noMica.length ? ` ${names(noMica)} ${verb(noMica, "nennt", "nennen")} auf den eigenen Seiten keine MiCA-Zulassung.` : ""} ${xInfo.mica ? `${x.name} selbst: ${stop(xInfo.mica)}` : `${x.name} selbst nennt keine.`} Eine regionale Plattform hat meist ein eigenes Produktangebot, eigene Gebühren und eigene Limits.`,
    },
    {
      q: `Welche ${x.name}-Alternative ist am sichersten?`,
      a: `Keine zentralisierte Börse ist frei von Risiken – ehrlich vergleichen lässt sich daher nur, was jede einzelne veröffentlicht. ${alts.map((a) => `${a.name}: Reservenachweis – ${stop(altInfo(a).reserves)} ${altInfo(a).fund ? stop(altInfo(a).fund) : "Kein Schutzfonds genannt."}`).join(" ")} Halte auf jeder Börse nur das Guthaben, mit dem du aktiv handelst.`,
    },
  ];

  const featureFaq = (key: FeatureKey): Faq => {
    const f = features.find((it) => it.key === key)!;
    const yes = withFeature(alts, key);
    const unknown = alts.filter((a) => altInfo(a).features[key].has === null);
    const no = alts.filter((a) => altInfo(a).features[key].has === false);
    const own = xInfo.features[key].has;
    return {
      q: `Welche ${x.name}-Alternativen bieten ${f.noun}?`,
      a: `${yes.length ? `${joinList(yes.map((a) => (altInfo(a).features[key].note ? `${a.name} (${altInfo(a).features[key].note})` : a.name)))} ${verb(yes, "bietet", "bieten")} ${f.noun}.` : `Keine der ${n} Alternativen führt ${f.noun} auf ihrer eigenen Website.`}${no.length ? ` Bei ${names(no)} gibt es dieses Angebot nicht.` : ""}${unknown.length ? ` Auf ${verb(unknown, "der Website", "den Websites")} von ${names(unknown)} haben wir bei unserer Prüfung kein solches Angebot gefunden.` : ""} ${own === true ? `${x.name} selbst hat das ebenfalls im Angebot.` : own === false ? `Bei ${x.name} selbst gibt es das nicht.` : `${x.name} selbst zeigt auf der eigenen Website kein solches Angebot.`}`,
    };
  };
  const featureFaqs: Faq[] = [
    featureFaq("copyTrading"),
    featureFaq("tradingBots"),
    featureFaq("options"),
    featureFaq("demoTrading"),
    {
      q: `Welche ${x.name}-Alternative listet die meisten Coins?`,
      a: `Nach Angaben der Börsen selbst: ${alts.map((a) => `${a.name} – ${a.assets}`).join("; ")}. ${x.name}: ${stop(x.assets)} Die Börsen zählen unterschiedlich – manche zählen Coins, andere Handelspaare –, daher sind die Zahlen nicht direkt vergleichbar.`,
    },
  ];

  const switching: Faq[] = [
    {
      q: `Wie wechsle ich von ${x.name} zu einer anderen Börse?`,
      a: switchSteps(x, alts)
        .map((s, i) => `${i + 1}. ${s.title}.`)
        .join(" "),
    },
    {
      q: `Kann ich mein ${x.name}-Konto behalten, wenn ich bei einer anderen Börse ein Konto eröffne?`,
      a: `Ja. Die Börsen sind voneinander getrennte Unternehmen: Ein Konto bei der einen wirkt sich nicht auf ein Konto bei einer anderen aus, und du kannst beide parallel nutzen. Nicht übertragen wird alles, was an das Konto gebunden ist: Deine Empfehlungszuordnung bei ${x.name}, deine Gebührenstufe, Willkommensprämien und dein Handelsverlauf bleiben bei ${x.name}.`,
    },
    {
      q: `Kann ich offene Futures-Positionen von ${x.name} auf eine andere Börse übertragen?`,
      a: `Nein. Eine Futures-Position existiert nur auf der Börse, auf der sie eröffnet wurde. Für einen Wechsel schließt du die Position bei ${x.name}, zahlst das Guthaben aus und eröffnest auf der anderen Börse eine neue Position – zum Preis und zu den Gebühren, die dort gelten.`,
    },
    {
      q: `Haben die ${x.name}-Alternativen Empfehlungscodes?`,
      a: `Ja, alle ${n}: ${alts.map((a) => `${a.name} ${a.referralCode} (${a.feeDiscount || a.bonusHeadline})`).join("; ")}. Ein Empfehlungscode kostet nichts und erhöht deine Handelsgebühren nicht.`,
    },
    {
      q: `Kann ich bei einer ${x.name}-Alternative einen Empfehlungscode nachträglich eingeben?`,
      a: `${alts.map((a) => `${a.name}: ${a.referral.afterSignupShort}`).join(". ")}. Der sichere Weg ist bei jeder Börse die Registrierung über den Empfehlungslink.`,
    },
  ];

  const versus: Faq[] = alts.map((a) => {
    const ahead = advantages(a, x);
    const behind = advantages(x, a);
    return {
      q: `Ist ${a.name} besser als ${x.name}?`,
      a: `${ahead.length ? `${a.name} liegt in diesen Punkten vor ${x.name}: ${ahead.map(lcPoint).join("; ")}.` : `In den Punkten, die wir vergleichen, hat ${a.name} keinen messbaren Vorteil gegenüber ${x.name}.`} ${behind.length ? `Dafür liegt ${x.name} hier vorn: ${behind.map(lcPoint).join("; ")}.` : `${x.name} liegt in keinem dieser Punkte vorn.`} ${a.name} passt zu dir, wenn ${lcStart(altInfo(a).chooseIf[0])}.`,
    };
  });

  return [
    { id: "choosing", title: `Die passende ${x.name}-Alternative wählen`, faqs: [...choosing, ...xInfo.faqs] },
    { id: "fees", title: "Gebühren und Hebel", faqs: fees },
    { id: "countries", title: "Länder, KYC und Regulierung", faqs: countryFaqs },
    { id: "features", title: "Produkte und Coins", faqs: featureFaqs },
    { id: "switching", title: `Wechsel von ${x.name} und Empfehlungscodes`, faqs: switching },
    { id: "versus", title: `${x.name} im Vergleich zu den Alternativen`, faqs: versus },
  ];
}

/** The question the referral-code page of an exchange answers about its alternatives. */
function alternativesTeaserFaq(x: Exchange): Faq {
  const alts = alternativesTo(x);
  return {
    topic: "safety",
    q: `Was sind die besten ${x.name}-Alternativen?`,
    a: `${picks(alts)} Auf unserer Seite zu den ${x.name}-Alternativen vergleichen wir alle ${alts.length} mit ${x.name}: nach Gebühren, Hebel, Produkten, Verfügbarkeit nach Ländern und Identitätsprüfung.`,
  };
}

export const de: CompareText = {
  features,
  countries,
  statusLabel,
  mark: { yes: "Ja", no: "Nein", notFound: "Auf der Website nicht gefunden" },
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
