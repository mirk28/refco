import { buildLlmsFull } from "@/lib/llms-full";

export const dynamic = "force-static";

/**
 * llms-full.txt – every fact of the website in one Markdown file, for language models and agents
 * (content: src/lib/llms-full.ts). It is kept out of search indexes so that it cannot appear in
 * search results in place of the pages it summarises; agents that fetch it directly are not affected.
 */
export function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": "noindex",
    },
  });
}
