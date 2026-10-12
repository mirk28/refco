import { qrPath } from "@/lib/qr";

/** Static, dependency-free QR code rendered as inline SVG at build time. */
export function QrCode({ value, size = 132, label }: { value: string; size?: number; label: string }) {
  const { d, size: n } = qrPath(value);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${n} ${n}`} role="img" aria-label={label} shapeRendering="crispEdges">
      <rect width={n} height={n} fill="#fff" />
      <path d={d} fill="#0B1B33" />
    </svg>
  );
}
