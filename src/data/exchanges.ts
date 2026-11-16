/**
 * Exchange data + editorial content.
 *
 * Each exchange lives in its own file under `./exchanges/`. Everything stated there about the
 * referral code, registration, verification, welcome offer and fees was read on the exchange's
 * own website or help centre and is listed under `sources` (review date: site.lastReviewed).
 *
 * HOW TO CHANGE YOUR AFFILIATE LINKS:
 *   1. Put your personal referral URL into `affiliateUrl`.
 *   2. Put your referral code into `referralCode` (shown in the copy box).
 *   If you share commission with users, describe it in `feeDiscount` – it then becomes the main benefit.
 *
 * Market data (`market`) = CoinMarketCap derivatives ranking snapshot (see site.marketDataDate).
 */
import type { Exchange } from "./types";
import { binance } from "./exchanges/binance";
import { okx } from "./exchanges/okx";
import { bybit } from "./exchanges/bybit";
import { bitget } from "./exchanges/bitget";
import { gate } from "./exchanges/gate";
import { kucoin } from "./exchanges/kucoin";
import { mexc } from "./exchanges/mexc";

export type { Exchange, Faq, FaqTopic, Fee, ReferralInfo, SignupInfo, Source, Step } from "./types";

export const exchanges: Exchange[] = [binance, okx, bybit, bitget, gate, kucoin, mexc];

export const exchangePath = (slug: string) => `/${slug}-referral-code`;
export const getExchangeByPathSlug = (pathSlug: string) =>
  exchanges.find((e) => `${e.slug}-referral-code` === pathSlug);
export const getExchange = (slug: string) => exchanges.find((e) => e.slug === slug);
/** The URL every CTA uses: affiliate link if set, otherwise the official homepage. */
export const outboundUrl = (e: Exchange) => e.affiliateUrl || e.homepage;
export const hasAffiliate = (e: Exchange) => Boolean(e.affiliateUrl);
/** URL encoded in the "scan with your phone" QR code. */
export const qrUrl = (e: Exchange) => e.appUrl || e.affiliateUrl;
