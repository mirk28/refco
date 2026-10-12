type P = { className?: string; size?: number };

export const CheckIcon = ({ className = "check", size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#E7F6F0" />
    <path d="M6 10.3l2.6 2.6L14.2 7.4" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MinusIcon = ({ className = "check", size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#FDECEC" />
    <path d="M6.5 10h7" fill="none" stroke="#B42318" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const base = (d: React.ReactNode, size = 22) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

export const ShieldIcon = () => base(<><path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>);
export const BoltIcon = () => base(<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />);
export const ScaleIcon = () => base(<><path d="M12 3v18" /><path d="M5 7h14" /><path d="M5 7l-3 7a4 4 0 006 0L5 7z" /><path d="M19 7l-3 7a4 4 0 006 0l-3-7z" /></>);
export const LockIcon = () => base(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>);
export const RefreshIcon = () => base(<><path d="M21 12a9 9 0 01-15.5 6.2L3 16" /><path d="M3 12a9 9 0 0115.5-6.2L21 8" /><path d="M21 3v5h-5" /><path d="M3 21v-5h5" /></>);
export const EyeOffIcon = () => base(<><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0122 12a17 17 0 01-3.3 4.2M6.6 6.6A17 17 0 002 12s3.6 7 10 7a9.7 9.7 0 004.4-1" /><path d="M9.9 9.9a3 3 0 004.2 4.2" /></>);

export const ArrowIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

export const ExternalIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 4h5v5M16 4l-7 7M14 12v3a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h3" />
  </svg>
);
