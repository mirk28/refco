import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import type { CardFont } from "@/i18n/config";

/*
 * Card texts in scripts that `next/og` cannot draw: it places letters one by one, so Devanagari loses its conjuncts
 * and the i-sign stands after its consonant, and Arabic script does not join. sharp lays such a text out with Pango,
 * which shapes it with HarfBuzz and orders right-to-left text, and returns a transparent PNG that the card shows as
 * an image (`renderCard` in ./og.tsx).
 *
 * The fonts are the files `src/fonts/<family without spaces>/<family without spaces>-<Regular|Bold|ExtraBold>.ttf`,
 * read during the build (every card is static); a missing weight falls back to the next lighter one. sharp comes with
 * Next.js. On a Linux build machine without fonts fontconfig prints "Cannot load default config file"; that is
 * harmless, as the font files are given directly.
 */

// Only the fonts in src/fonts (src/fonts/fonts.conf): a build machine's own fontconfig rules can slip its fonts between
// ours. Set before the first text is drawn, when fontconfig reads its configuration. (On Windows the variable does
// not reach fontconfig; there the default configuration draws the same cards.)
process.env.FONTCONFIG_FILE = path.join(process.cwd(), "src/fonts/fonts.conf");

const weightFiles = { 400: ["Regular"], 700: ["Bold", "Regular"], 800: ["ExtraBold", "Bold", "Regular"] } as const;
export type CardWeight = keyof typeof weightFiles;

export type TextStyle = {
  /** Font size in pixels of the 1200×630 card. */
  size: number;
  weight?: CardWeight;
  color: string;
  /** Wrap width in pixels; without it the text stays on one line. */
  maxWidth?: number;
};

export type ShapedText = { src: string; width: number; height: number };

/** Drawn at twice the size and shown at half, for smooth edges. */
const scale = 2;

function fontFile(family: string, weight: CardWeight) {
  const folder = family.replace(/ /g, "");
  for (const name of weightFiles[weight]) {
    const file = path.join(process.cwd(), "src/fonts", folder, `${folder}-${name}.ttf`);
    if (fs.existsSync(file)) return file;
  }
  throw new Error(`No font file for ${family} in src/fonts/${folder}/`);
}

/** sharp makes a font file known to Pango when it draws with it; a family list needs all its files known first. */
const registered = new Map<string, Promise<unknown>>();
function register(file: string) {
  if (!registered.has(file)) registered.set(file, sharp({ text: { text: ".", fontfile: file } }).png().toBuffer());
  return registered.get(file);
}

// A separator dot stays at the end of a line, never at the start of the next.
const markup = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ ·/g, " ·");

export async function shapeText(text: string, font: CardFont, { size, weight = 400, color, maxWidth }: TextStyle, rtl = false): Promise<ShapedText> {
  const files = font.families.map((family) => fontFile(family, weight));
  await Promise.all(files.slice(0, -1).map(register));
  const fontSize = Math.round(size * (font.scale ?? 1));
  // Line height in 1024ths of a point; at 72 dpi a point is a pixel.
  const lineHeight = font.lineHeight ? ` line_height="${Math.round(fontSize * font.lineHeight * 1024)}"` : "";
  const { data, info } = await sharp({
    text: {
      // A right-to-left mark makes the paragraph right-to-left even when it starts with a Latin name; Pango then
      // aligns it to the right.
      text: `<span foreground="${color}" weight="${weight}"${lineHeight}>${rtl ? "‏" : ""}${markup(text)}</span>`,
      // Pango takes each letter from the first family in the list that has it.
      font: `${font.families.join(",")} ${fontSize}`,
      fontfile: files[files.length - 1],
      dpi: 72 * scale,
      width: maxWidth ? maxWidth * scale : undefined,
      rgba: true,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { src: `data:image/png;base64,${data.toString("base64")}`, width: info.width / scale, height: info.height / scale };
}
