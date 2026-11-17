/**
 * French elision before a name that is a variable: "de Binance" but "d'OKX", "que Bybit" but "qu'OKX".
 * A name elides when it starts with a vowel sound – of the exchange names only OKX ("o-ka-ix").
 */
const elides = (name: string) => /^[aeiouyàâéèêëîïôûœh]/i.test(name) && !/^(h[^aeiouy]|y[aeiou])/i.test(name);

/** "de Binance" / "d'OKX" */
export const de = (name: string) => (elides(name) ? `d'${name}` : `de ${name}`);
/** "que Binance" / "qu'OKX" */
export const que = (name: string) => (elides(name) ? `qu'${name}` : `que ${name}`);
