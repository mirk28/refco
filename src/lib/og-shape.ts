import path from "node:path";
import sharp from "sharp";

/*
 * Card texts in scripts that `next/og` cannot draw: it places letters one by one, so Devanagari loses its conjuncts
 * and the i-sign stands after its consonant. sharp lays such a text out with Pango, which shapes it with HarfBuzz,
 * and returns a transparent PNG that the card shows as an image (`renderCard` in ./og.tsx).
 *
 * The fonts are the files `src/fonts/<family without spaces>/<family without spaces>-<Regular|Bold|ExtraBold>.ttf`,
 * read during the build (every card is static). sharp comes with Next.js. On a Linux build machine without fonts
 * fontconfig prints "Cannot load default config file"; that is harmless, as the font file is given directly.
 */

const weightFile = { 400: "Regular", 700: "Bold", 800: "ExtraBold" } as const;
export type CardWeight = keyof typeof weightFile;

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

// A separator dot stays at the end of a line, never at the start of the next.
const markup = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ ·/g, " ·");

export async function shapeText(text: string, font: string, { size, weight = 400, color, maxWidth }: TextStyle): Promise<ShapedText> {
  const folder = font.replace(/ /g, "");
  const { data, info } = await sharp({
    text: {
      text: `<span foreground="${color}" weight="${weight}">${markup(text)}</span>`,
      // At 72 dpi a point is a pixel.
      font: `${font} ${size}`,
      fontfile: path.join(process.cwd(), "src/fonts", folder, `${folder}-${weightFile[weight]}.ttf`),
      dpi: 72 * scale,
      width: maxWidth ? maxWidth * scale : undefined,
      rgba: true,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { src: `data:image/png;base64,${data.toString("base64")}`, width: info.width / scale, height: info.height / scale };
}
