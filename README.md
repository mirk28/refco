# RefCo – referral-code.org

Fast, SEO/GEO/AEO-optimised Next.js site for crypto exchange referral codes.
Static (SSG) pages. Google Analytics is the only third-party request and is loaded only after the
visitor has allowed it in the consent banner; without consent there are no cookies and no tracking.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are pre-rendered)
```

Requires Node.js 20.9+.

## Deploy (GitHub → Vercel)

1. Create an empty GitHub repo (e.g. `refco`) and push this folder:
   ```bash
   git init && git add . && git commit -m "Initial RefCo site"
   git branch -M main
   git remote add origin https://github.com/<you>/refco.git
   git push -u origin main
   ```
2. In Vercel: **Add New → Project → import the repo**. Framework preset: Next.js. No env vars needed.
3. Add the domain `referral-code.org` (and `www` → redirect to apex) under *Project → Settings → Domains*.
4. Submit `https://referral-code.org/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Where to change things

| What | File |
|---|---|
| **Affiliate links + referral codes** | `src/data/exchanges/<slug>.ts` → `affiliateUrl`, `referralCode` per exchange |
| Brand name, domain, review dates, contact email | `src/config/site.ts` → `site` |
| **Operator shown in the imprint and privacy policy** | `src/config/site.ts` → `legal` |
| Exchange texts, fees, FAQs, pros/cons, sign-up steps, sources | `src/data/exchanges/<slug>.ts` (types in `src/data/types.ts`) |
| Questions every exchange page answers (built from the data) | `src/lib/faqs.ts` |
| **"[Exchange] alternatives" pages**: why people switch, products, country availability, regional platforms | `src/data/alternatives/<slug>.ts` (index: `src/data/alternatives.ts`) |
| Comparison sentences and questions of the alternatives pages (built from the data) | logic `src/lib/compare.ts`, sentences `src/i18n/compare/<locale>.ts`, template `src/components/AlternativesPage.tsx`, its texts `src/i18n/alternatives/` |
| **"[Exchange] vs [Exchange]" pages** (21 pairs, no data of their own) | pairs and URLs `src/data/versus.ts`, logic `src/lib/versus.ts`, sentences and texts `src/i18n/versus/`, template `src/components/VersusPage.tsx` |
| Comparison hub `/compare` | `src/components/CompareHubPage.tsx`, texts in `src/i18n/versus/` |
| About, affiliate disclosure, imprint, privacy policy | `src/i18n/pages/<locale>.tsx`, template `src/components/TextPages.tsx` |
| **Language versions** (interface texts, exchange texts, routes) | `src/i18n/`, `src/data/i18n/<locale>/`, `src/app/<locale>/` – see "Language versions" below |
| Colours / design tokens | `src/app/globals.css` (`:root`) |
| Logo mark | `src/components/Logo.tsx`, `src/app/icon.svg`, `src/lib/og.tsx` |

### Language versions
English is the default and lives at the root (`/`, `/binance-referral-code`). Spanish lives at `/es`,
Brazilian Portuguese at `/pt` (hreflang `pt-BR` and `pt`), Turkish at `/tr`, German at `/de`, Hindi at `/hi`, Urdu at
`/ur` (right to left), Korean at `/ko`. Every
page exists in every language;
the last part of the address carries the keyword in that language:

| Page | English | Spanish | Portuguese | Turkish | German |
|---|---|---|---|---|---|
| Referral code | `/binance-referral-code` | `/es/codigo-de-referido-binance` | `/pt/codigo-de-indicacao-binance` | `/tr/binance-referans-kodu` | `/de/binance-empfehlungscode` |
| Alternatives | `/binance-alternatives` | `/es/alternativas-a-binance` | `/pt/alternativas-a-binance` | `/tr/binance-alternatifleri` | `/de/binance-alternativen` |
| Head to head | `/binance-vs-okx` | `/es/binance-vs-okx` | `/pt/binance-vs-okx` | `/tr/binance-vs-okx` | `/de/binance-vs-okx` |
| Hub | `/compare` | `/es/comparar` | `/pt/comparar` | `/tr/borsa-karsilastirma` | `/de/boersenvergleich` |
| About | `/about` | `/es/acerca-de` | `/pt/sobre` | `/tr/hakkimizda` | `/de/ueber-uns` |
| Legal | `/affiliate-disclosure`, `/imprint`, `/privacy` | `/es/divulgacion-de-afiliacion`, `/es/aviso-legal`, `/es/privacidad` | `/pt/divulgacao-de-afiliados`, `/pt/aviso-legal`, `/pt/privacidade` | `/tr/satis-ortakligi-aciklamasi`, `/tr/kunye`, `/tr/gizlilik-politikasi` | `/de/affiliate-hinweis`, `/de/impressum`, `/de/datenschutz` |

Hindi, Urdu and Korean keep the English address parts (`/hi/binance-referral-code`, `/ur/compare` …): Indian and
Pakistani readers search in Latin letters, and Urdu letters or Hangul would be percent-encoded. All of these address parts are defined in `src/i18n/config.ts`.

- **Written natively, not translated.** Portuguese, Turkish and German were written in the language from the English source:
  same facts, sections and list items, about the same length, with the search terms of that market. (The Spanish
  version was translated.) New languages follow the same rule.
- **Share cards for scripts with joined letters**: `next/og` draws letters one by one and cannot join Devanagari
  (conjuncts, vowel signs). Languages with `cardFont` in `localeInfo` (Hindi: Noto Sans Devanagari) get their card
  texts shaped by sharp (Pango with HarfBuzz, `src/lib/og-shape.ts`) and placed as images in the same layout
  (`renderCard` in `src/lib/og.tsx`). The font files – Regular, Bold, ExtraBold, with their OFL licence – are in
  `src/fonts/<family without spaces>/`. A `cardFont` can list several families (Urdu: Noto Sans for Latin, then Noto
  Nastaliq Urdu) and set a size factor and line height, because Nastaliq runs tall.
- **Right to left** (Urdu): `dir: "rtl"` in `localeInfo` sets `<html dir="rtl">` and mirrors the share card.
  `globals.css` uses logical properties (`padding-inline-start`, `inset-inline-end` …), so the layout mirrors by
  itself; `.rtl-flip` turns the arrow icon, and letter-spacing and upper-casing are off for Arabic script.
- **Korean**: the exchange names stay in Latin letters; titles, H1 and keywords add the Hangul reading
  (`withHangul` in `src/i18n/ko-josa.ts`: "Binance(바이낸스)"). Particles after a name or a data text depend on its
  last sound, so the Korean files attach them with `josa(word, "은/는")` from the same file. Large numbers use
  Korean units ("341억" for 34.1 billion); `npm run check:i18n` multiplies them out before it compares.
- **Number notation**: `localeInfo` in `src/i18n/config.ts` sets the decimal sign of a language. Fee rates from the
  English data are shown in that notation by `localRate` (`0,02%` in Portuguese, `%0,02` in Turkish, `0,02 %` in
  German); texts are
  written in it (`10.000 USDT`). `npm run check:i18n` reads both notations.

- **Facts are never translated.** Codes, links, fee numbers, market data, which products an exchange has, the
  status of a country and all source URLs come from the English data files. A translation holds text only,
  so it cannot change a fact.
- **Exchange texts**: `src/data/i18n/es/<slug>.ts` (referral-code page, type `ExchangeText`) and
  `src/data/i18n/es/alternatives/<slug>.ts` (comparison pages, type `AlternativesText`). When you change a
  text in `src/data/exchanges/<slug>.ts` or `src/data/alternatives/<slug>.ts`, change it in every language.
- **Check**: `npm run check:i18n` compares every translated data file with the English one (list lengths,
  numbers, quoted interface labels, the referral code). The build also stops if a list has a different length.
- **Interface texts** (headings, labels, sentences around the facts), one folder per page type, each with an
  `en` file that defines the keys and one file per language with the same keys:
  - `src/i18n/en.tsx`, `es.tsx` – layout, home page, referral-code page, share cards
  - `src/i18n/alternatives/` – alternatives pages
  - `src/i18n/versus/` – head-to-head pages and the comparison hub
  - `src/i18n/pages/` – about, affiliate disclosure, imprint, privacy policy
- **Sentences built from the data** ("OKX is cheaper for makers …", the generated questions and answers):
  `src/i18n/compare/<locale>.ts` and `src/i18n/versus/`. Every language writes these functions in its own
  grammar; the logic they use (who is cheaper, which country is open) is shared in `src/lib/compare.ts` and
  `src/lib/versus.ts`.
- **Routes**: every language has its own root layout so that `<html lang>` is right: `src/app/(en)/` for
  English, `src/app/es/` for Spanish. The Spanish folder has five small files; `[page]/page.tsx` serves every
  page below `/es` through `src/components/LocalePage.tsx`. `hreflang`, sitemap and `llms.txt` are generated
  from `locales` in `src/i18n/config.ts`.
- **Legal pages** in other languages carry a notice that the English version is the binding one.
- **Adding a language**:
  1. `src/i18n/config.ts`: add it to `locales`, `localeInfo` (hreflang codes, number notation, `dir: "rtl"` for
     right-to-left languages) and `segments` (the address parts), and add its
     folder to `languageFolders` in `next.config.mjs` (redirects for reversed pair addresses).
  2. Write `src/i18n/<locale>.tsx` and one file in each of `src/i18n/compare/`, `alternatives/`, `versus/`,
     `pages/`; register each in the `index.ts` next to it (and `src/i18n/index.ts`).
  3. Write `src/data/i18n/<locale>/<slug>.ts` and `src/data/i18n/<locale>/alternatives/<slug>.ts` for the seven
     exchanges and register them in `src/data/i18n/index.ts`.
  4. Copy `src/app/es/` to `src/app/<locale>/` and change the locale in its five files.
  5. Add the English name of the language to `englishName` in `src/app/llms.txt/route.ts`, run
     `npm run check:i18n` and `npm run build`.
- The share cards of the English pages are route handlers (`src/app/opengraph-image/`,
  `src/app/[slug]/opengraph-image/`), not `opengraph-image.tsx` files, because that file convention
  adds a hash to the URL inside a route group. The 404 page for unknown URLs is `src/app/global-not-found.tsx`.

### Affiliate links
While `affiliateUrl` is empty, every button links to the official homepage and the sign-up box says
"Official site: …". As soon as you add `affiliateUrl`, all CTAs switch to it and the box reads
"applied via link". If you also set `referralCode`, a copy-to-clipboard code box appears.
All outbound links carry `rel="sponsored nofollow noopener"` (Google guideline).

### New-user benefits & your own fee discount
Each exchange has `bonusHeadline`, `benefits`, `benefitNote` and `referralCovers` (verified offers –
re-check them when you update `lastReviewed`). If you share part of your commission with users
(kickback / cashback in your affiliate dashboard), write it into `feeDiscount`, e.g.
`"20% off trading fees for life"`. It then becomes the main benefit in titles, cards, the sign-up box
and a green badge on the landing page. One referral link always covers spot **and** futures.

### Exchange logos
`public/logos/` contains Binance, OKX and KuCoin marks. Bybit, Bitget, Gate and MEXC show a
monogram tile in brand colour. Download the official logos from each exchange's affiliate
dashboard / media kit, save them as `public/logos/<slug>.svg` (square works best) and set
`logo: "/logos/<slug>.svg"` in `src/data/exchanges/<slug>.ts`.

### Keep it fresh (important for SEO)
When you re-check data, update `lastReviewed` / `marketDataDate` in `site.ts` (titles show
"(Month Year)", sitemap and schema use the date) and adjust fees/market numbers in `src/data/exchanges/<slug>.ts`.
Every fact about the referral code, registration, KYC, welcome offer and fees is taken from the exchange's own
pages – the URLs are listed under `sources` in each file and shown on the page. Re-open them when you re-check.
Monthly is a good rhythm.

## What's built in

- **Pages:** home, 7 landing pages (`/<exchange>-referral-code`), 7 comparison pages
  (`/<exchange>-alternatives`), 21 head-to-head pages (`/<a>-vs-<b>`), the comparison hub
  (`/compare`), about/methodology, affiliate disclosure, imprint (`/impressum`
  redirects), privacy (`/datenschutz` redirects), 404.
  The three single-segment page types are served by `src/app/[slug]/page.tsx`, because Next.js
  cannot match a suffix inside a folder name.
- **Head-to-head pages** (`/<a>-vs-<b>`): one page per pair, 21 in total, in the order of the
  `exchanges` array (`/binance-vs-okx`). The reverse spelling is redirected in `next.config.mjs` –
  keep the slug list there in the same order as the array when you add an exchange. The pages
  hold no data: scorecard, verdict, country answers and FAQ are generated in `src/lib/versus.ts`
  from the exchange and alternatives data. `/compare` lists all pairs.
- **Internal linking:** every page is one click from the home page. Exchange pages link to their
  alternatives page and their six pair pages; alternatives pages link to every pair page of their
  exchange and to the other alternatives pages; pair pages link to both exchange pages (also into
  their fees, sign-up and safety sections), both alternatives pages and the ten related pairs.
- **Alternatives pages:** fees, leverage, KYC and referral rules are read from
  `src/data/exchanges/<slug>.ts`, so they can never differ from the referral-code pages. Only what
  those pages do not need (products, countries, regional platforms, reserves, funds, the "why
  switch" texts) lives in `src/data/alternatives/<slug>.ts`, with its own `sources`. Every
  "ahead / behind" list, fee sentence and FAQ answer is generated in `src/lib/compare.ts`.
- **SEO:** unique titles/descriptions, canonicals, Open Graph + Twitter cards, auto-generated
  OG images per page, `sitemap.xml`, `robots.txt`, web manifest, breadcrumbs, internal linking.
- **Schema.org (JSON-LD):** Organization, WebSite, ItemList, WebPage, Offer, BreadcrumbList,
  FAQPage, AboutPage.
- **GEO/AEO:** "Quick answer" blocks, fact tables with dates and sources, FAQ, `/llms.txt` (index)
  and `/llms-full.txt` (every exchange profile, the comparison tables and a verdict per pair in one
  Markdown file, generated in `src/lib/llms-full.ts`, served with `X-Robots-Tag: noindex`),
  AI crawlers explicitly allowed in `robots.txt`.
- **Performance:** fully static, system font stack, inline SVG, one tiny client component
  (copy button), long-term caching for logos.
- **Security/privacy:** strict security headers + CSP (`next.config.mjs`). No cookies and no
  third-party scripts unless the visitor allows Google Analytics (`site.analyticsId` in
  `src/config/site.ts`, banner and loader in `src/components/Analytics.tsx`; set the ID to "" to
  switch both off). The privacy policy describes it under "Cookies and analytics". Besides CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy` and `Permissions-Policy` the site sends `Cross-Origin-Opener-Policy`,
  `Cross-Origin-Embedder-Policy`, `Cross-Origin-Resource-Policy` (images for link previews are
  exempt), `Origin-Agent-Cluster`, `X-Permitted-Cross-Domain-Policies` and `X-XSS-Protection: 0`.
  Embedding anything from another origin (a video, a font, a script) needs a matching CSP entry
  and breaks under `Cross-Origin-Embedder-Policy: require-corp` unless that origin allows it.
- **SEO tools are blocked:** crawlers of backlink, keyword and site-audit tools (list in
  `src/config/bots.ts`) are disallowed in `robots.txt` and answered with 403 by `src/proxy.ts`.
  The proxy only runs for requests whose User-Agent names one of them, so normal visitors, search
  engines and AI crawlers are served from the static files. A new crawler has to be added in both
  files – the `matcher` in `proxy.ts` must be a literal.

## Before going live – checklist

- [x] Operator for imprint and privacy policy set in `src/config/site.ts` → `legal`
- [ ] Set up `hello@referral-code.org` (or change the email in `site.ts`)
- [ ] Add affiliate links (and codes) in `src/data/exchanges/<slug>.ts`
- [ ] Add official logos for Bybit, Bitget, Gate, MEXC
- [ ] Re-verify fees on each exchange's fee page
- [x] Analytics added with a consent banner; privacy policy updated
- [ ] Have the legal texts reviewed by a lawyer – they are a solid template, not legal advice
