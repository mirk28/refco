/**
 * Nouns counted with a variable number in Russian and Ukrainian: the form depends on the number
 * (1 биржа, 2–4 биржи, 5–20 бирж, 21 биржа …). Forms are given as [one, few, many]:
 * `slavicCount(6, ["биржа", "биржи", "бирж"])` → "6 бирж", `slavicForm(21, […])` → "биржа".
 * The rule is that of `Intl.PluralRules("ru")`; Ukrainian follows the same one. Pass the forms in the case the
 * sentence needs (after a preposition the three forms differ again: "на 1 бирже", "на 3 биржах", "на 6 биржах").
 */
export type SlavicForms = readonly [one: string, few: string, many: string];

const rules = new Intl.PluralRules("ru");

export function slavicForm(n: number, forms: SlavicForms): string {
  const rule = rules.select(n);
  return rule === "one" ? forms[0] : rule === "few" ? forms[1] : forms[2];
}

export const slavicCount = (n: number, forms: SlavicForms): string => `${n} ${slavicForm(n, forms)}`;
