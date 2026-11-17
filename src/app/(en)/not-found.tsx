import Link from "next/link";
import { exchanges, exchangePath } from "@/data/exchanges";

export default function NotFound() {
  return (
    <div className="container">
      <div className="legal" style={{ textAlign: "center", margin: "0 auto" }}>
        <span className="eyebrow">404</span>
        <h1>This page doesn&apos;t exist</h1>
        <p className="lead" style={{ margin: "0 auto 24px" }}>
          The referral code you are looking for may have moved. Try one of these:
        </p>
        <ul className="chips" style={{ justifyContent: "center" }}>
          {exchanges.map((e) => (
            <li key={e.slug}>
              <Link href={exchangePath(e.slug)}>{e.name}</Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
