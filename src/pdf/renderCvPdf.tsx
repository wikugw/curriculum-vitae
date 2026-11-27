import { renderToBuffer } from "@react-pdf/renderer";
import { cacheLife } from "next/cache";
import type { CvVersion } from "@/config/cvVersions";
import { CvDocument } from "./CvDocument";

/**
 * Builds the PDF for one CV version.
 *
 * "use cache" lets Next.js build each PDF once at build time and reuse it.
 * Without it the route would build the PDF on every download, because react-pdf
 * reads font files and stamps the current date, which Next.js treats as dynamic.
 * The content only changes with a new deployment, so the cache never expires.
 */
export async function renderCvPdf(version: CvVersion): Promise<Uint8Array<ArrayBuffer>> {
  "use cache";
  cacheLife("max");

  const pdf = await renderToBuffer(<CvDocument version={version} />);
  return new Uint8Array(pdf);
}
