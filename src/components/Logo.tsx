import Link from "next/link";
import { site } from "@/config/site";

/**
 * RefCo mark: a navy tile holding a "code ticket" (notched coupon) with a
 * verified check – referral code + trust in one symbol.
 */
export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="rc-g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#0B1B33" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#rc-g)" />
      <path
        d="M11 15.5a2.5 2.5 0 012.5-2.5h21a2.5 2.5 0 012.5 2.5v4.2a4.3 4.3 0 000 8.6v4.2a2.5 2.5 0 01-2.5 2.5h-21a2.5 2.5 0 01-2.5-2.5v-4.2a4.3 4.3 0 000-8.6z"
        fill="#fff"
      />
      <path d="M18 24.2l3.6 3.6 7.6-7.6" fill="none" stroke="#059669" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} – ${site.domain} home`}>
      <LogoMark />
      <span className="brand-text">
        <span className="brand-name">
          Ref<span>Co</span>
        </span>
        <span className="brand-domain">{site.domain}</span>
      </span>
    </Link>
  );
}
