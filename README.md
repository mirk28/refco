# RefCo – referral-code.org

Fast, SEO/GEO/AEO-optimised Next.js site for crypto exchange referral codes.
Static (SSG) pages, no cookies, no tracking, no external requests → no cookie banner needed.

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
| **Affiliate links + referral codes** | `src/data/exchanges.ts` → `affiliateUrl`, `referralCode` per exchange |
| Brand name, domain, review dates, contact email | `src/config/site.ts` → `site` |
| **Imprint / privacy placeholders** (`[BRACKETS]`) | `src/config/site.ts` → `legal` |
| Exchange texts, fees, FAQs, pros/cons | `src/data/exchanges.ts` |
| Colours / design tokens | `src/app/globals.css` (`:root`) |
| Logo mark | `src/components/Logo.tsx`, `src/app/icon.svg`, `src/lib/og.tsx` |

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
`logo: "/logos/<slug>.svg"` in `src/data/exchanges.ts`.

### Keep it fresh (important for SEO)
When you re-check data, update `lastReviewed` / `marketDataDate` in `site.ts` (titles show
"(Month Year)", sitemap and schema use the date) and adjust fees/market numbers in `exchanges.ts`.
Monthly is a good rhythm.

## What's built in

- **Pages:** home, 7 landing pages (`/<exchange>-referral-code`), about/methodology,
  affiliate disclosure, imprint (`/impressum` redirects), privacy (`/datenschutz` redirects), 404.
- **SEO:** unique titles/descriptions, canonicals, Open Graph + Twitter cards, auto-generated
  OG images per page, `sitemap.xml`, `robots.txt`, web manifest, breadcrumbs, internal linking.
- **Schema.org (JSON-LD):** Organization, WebSite, ItemList, WebPage, Offer, BreadcrumbList,
  FAQPage, AboutPage.
- **GEO/AEO:** "Quick answer" blocks, fact tables with dates and sources, FAQ, `/llms.txt`,
  AI crawlers explicitly allowed in `robots.txt`.
- **Performance:** fully static, system font stack, inline SVG, one tiny client component
  (copy button), long-term caching for logos.
- **Security/privacy:** strict security headers + CSP (`next.config.mjs`), no cookies, no
  third-party scripts.

## Before going live – checklist

- [ ] Fill all `[BRACKETS]` in `src/config/site.ts` (imprint + privacy)
- [ ] Set up `hello@referral-code.org` (or change the email in `site.ts`)
- [ ] Add affiliate links (and codes) in `src/data/exchanges.ts`
- [ ] Add official logos for Bybit, Bitget, Gate, MEXC
- [ ] Re-verify fees on each exchange's fee page
- [ ] If you add analytics later: update the privacy policy and add a consent banner
- [ ] Have the legal texts reviewed by a lawyer – they are a solid template, not legal advice
