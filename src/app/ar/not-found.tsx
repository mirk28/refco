import Link from "next/link";
import { exchanges, exchangePath } from "@/data/exchanges";
import { getDictionary } from "@/i18n";
import { homePath } from "@/i18n/config";

const locale = "ar";

export default function NotFound() {
  const t = getDictionary(locale).notFound;
  return (
    <div className="container">
      <div className="legal" style={{ textAlign: "center", margin: "0 auto" }}>
        <span className="eyebrow">404</span>
        <h1>{t.title}</h1>
        <p className="lead" style={{ margin: "0 auto 24px" }}>
          {t.text}
        </p>
        <ul className="chips" style={{ justifyContent: "center" }}>
          {exchanges.map((e) => (
            <li key={e.slug}>
              <Link href={exchangePath(e.slug, locale)}>{e.name}</Link>
            </li>
          ))}
        </ul>
        <Link href={homePath(locale)} className="btn btn-primary">
          {t.back}
        </Link>
      </div>
    </div>
  );
}
