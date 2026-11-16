import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { seoToolPattern } from "@/config/bots";

/**
 * Answers crawlers of SEO, backlink and site-audit tools with 403 (list: src/config/bots.ts).
 *
 * The `matcher` below only lets requests through to this function whose User-Agent names one of those
 * crawlers, so normal visitors, search engines and AI crawlers are served straight from the static files
 * and never touch it. `/robots.txt` stays readable for everyone: a crawler that cannot read it would
 * assume that nothing is disallowed.
 */
export function proxy(request: NextRequest) {
  if (seoToolPattern.test(request.headers.get("user-agent") ?? "")) {
    return new NextResponse("403 Forbidden – automated SEO tools are not allowed on this website.\n", {
      status: 403,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: "/((?!robots\\.txt$).*)",
      has: [
        {
          type: "header",
          key: "user-agent",
          // Must be a literal (Next.js analyses it at build time). Keep in step with src/config/bots.ts.
          value:
            ".*([Aa]hrefs[Bb]ot|[Aa]hrefs[Ss]ite[Aa]udit|[Ss]emrush[Bb]ot|[Ss]ite[Aa]udit[Bb]ot|[Ss]plit[Ss]ignal[Bb]ot|MJ12[Bb]ot|[Mm]ajestic(SEO|12)|[Dd]ot[Bb]ot|[Rr]oger[Bb]ot|BLEX[Bb]ot|[Dd]ata[Ff]or[Ss][Ee][Oo][Bb]ot|[Ss]erpstat[Bb]ot|SEO[Kk]icks|[Bb]arkrowler|[Ll]inkdex[Bb]ot|[Mm]ega[Ii]ndex|[Ll]inkpad[Bb]ot|spbot|SE[Rr]anking|[Ss]enuto[Bb]ot|[Xx]ovi[Bb]ot|SISTRIX|[Cc]ognitive[Ss][Ee][Oo]|[Bb]acklink[Cc]rawler|Screaming Frog|[Ss]itebulb|[Ss]eobility|[Ss]ite[Cc]hecker[Bb]ot|[Nn]etpeak|[Oo]n[Cc]rawl|[Bb]otify|[Dd]eep[Cc]rawl|Lumar|[Cc]ontent[Kk]ing|[Ss]iteimprove|[Rr]yte[Bb]ot|SEOlyzer|SEOdiver).*",
        },
      ],
    },
  ],
};
