/*
 * Korean particles change with the sound the word before them ends in: "Binance는" but "Bitget은",
 * "USDT를" but "레버리지 한도를" / "출금을". The Korean files build sentences around exchange names and data
 * texts, so they attach particles with `josa(word, "은/는")`.
 *
 * Hangul is read from its last syllable; Latin names, abbreviations, digits and signs from the way Koreans say them.
 */

/**
 * How Koreans write the exchange names in Hangul. The pages keep the Latin names and add the Hangul reading where
 * people search for it – titles, H1, keywords: `withHangul(e)` gives "Binance(바이낸스)".
 */
export const hangulName: Record<string, string> = {
  binance: "바이낸스",
  okx: "오케이엑스",
  bybit: "바이비트",
  bitget: "비트겟",
  gate: "게이트",
  kucoin: "쿠코인",
  mexc: "멕시",
};
export const withHangul = (e: { slug: string; name: string }) => (hangulName[e.slug] ? `${e.name}(${hangulName[e.slug]})` : e.name);

/** Latin words whose Korean reading ends in a consonant (true) or a vowel (false); "l" marks a final ㄹ. */
const latin: Record<string, boolean | "l"> = {
  binance: false, // 바이낸스
  okx: false, // 오케이엑스
  bybit: false, // 바이비트
  bitget: true, // 비트겟
  gate: false, // 게이트
  kucoin: true, // 쿠코인
  mexc: false, // 멕시 / 엠이엑스씨
  refco: false, // 레프코
  spot: true, // 스팟
  futures: false, // 퓨처스
  margin: true, // 마진
  earn: true, // 언
  bit: false, // 비트
  web3: false, // 웹쓰리
  p2p: false, // 피투피
};

/** Final sound of a spelled-out capital letter: L 엘, M 엠, N 엔, R 알 end in a consonant. */
const letter: Record<string, boolean | "l"> = { L: "l", M: true, N: true, R: "l" };

/** Final sound of a digit as read in Korean (영 일 이 삼 사 오 육 칠 팔 구); a trailing zero reads 십, 백, 천, 만. */
const digit: (boolean | "l")[] = [true, "l", false, true, false, false, true, "l", "l", false];

/** Whether the Korean reading of `word` ends in a consonant; "l" for a final ㄹ, which takes "로" like a vowel. */
export function finalSound(word: string): boolean | "l" {
  // A bracket or quote mark after the word is not read: "Binance(바이낸스)" ends like "Binance".
  const w = word.replace(/\s*\([^)]*\)\s*$/, "").replace(/[”’"'»\s]+$/, "");
  const last = w.slice(-1);
  const code = last.charCodeAt(0);
  if (code >= 0xac00 && code <= 0xd7a3) {
    const jong = (code - 0xac00) % 28;
    return jong === 0 ? false : jong === 8 ? "l" : true;
  }
  if (/\d/.test(last)) return digit[Number(last)];
  if (last === "%") return false; // 퍼센트
  const token = (/[A-Za-z0-9]+$/.exec(w) ?? [""])[0];
  const known = latin[token.toLowerCase()];
  if (known !== undefined) return known;
  if (/^[A-Z0-9]+$/.test(token)) return letter[last] ?? false; // USDT 티, KYC 씨, API 아이
  if (/ng$/i.test(token)) return true; // trading 트레이딩
  if (/l$/i.test(token)) return "l"; // referral 레퍼럴
  if (/[mnpt]$/i.test(token)) return true; // token 토큰, app 앱, wallet 월렛
  return false; // code 코드, maker 메이커, card 카드
}

/**
 * `word` with the right form of a particle pair, written "after a consonant/after a vowel":
 * josa("Bitget", "은/는") → "Bitget은", josa("Binance", "을/를") → "Binance를", josa("현물", "으로/로") → "현물로".
 * Pass `final` when the reading of the word is known better than the rules can tell.
 */
export function josa(word: string, pair: string, final: boolean | "l" = finalSound(word)): string {
  const [afterConsonant, afterVowel] = pair.split("/");
  // "(으)로" follows ㄹ without "으".
  if (final === "l" && afterConsonant === "으로") return word + afterVowel;
  return word + (final ? afterConsonant : afterVowel);
}
