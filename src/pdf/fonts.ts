import path from "node:path";
import { Font } from "@react-pdf/renderer";

/**
 * IBM Plex, the same typeface as the website.
 * These are the complete font files from IBM (github.com/IBM/plex): the smaller web
 * subsets are missing characters the CV uses, such as "→". License: fonts/OFL.txt.
 */
const fontsFolder = path.join(process.cwd(), "src/pdf/fonts");

function fontFile(fileName: string) {
  return path.join(fontsFolder, fileName);
}

Font.register({
  family: "IBM Plex Sans",
  fonts: [
    { src: fontFile("IBMPlexSans-Regular.ttf"), fontWeight: 400 },
    { src: fontFile("IBMPlexSans-Medium.ttf"), fontWeight: 500 },
    { src: fontFile("IBMPlexSans-SemiBold.ttf"), fontWeight: 600 },
  ],
});

Font.register({
  family: "IBM Plex Mono",
  fonts: [
    { src: fontFile("IBMPlexMono-Regular.ttf"), fontWeight: 400 },
    { src: fontFile("IBMPlexMono-Medium.ttf"), fontWeight: 500 },
  ],
});

// Keep words whole. By default react-pdf hyphenates long words across lines.
Font.registerHyphenationCallback((word) => [word]);
