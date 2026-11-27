import { cvVersionIds, getCvPdfFileName, isCvVersion } from "@/config/cvVersions";
import { renderCvPdf } from "@/pdf/renderCvPdf";

/**
 * Serves the CV as a PDF: /cv/simple and /cv/detailed.
 *
 * Both files are built once at build time (generateStaticParams) and then served
 * as static files, so no PDF is generated when someone clicks download.
 */

export function generateStaticParams() {
  return cvVersionIds.map((version) => ({ version }));
}

export async function GET(_request: Request, { params }: RouteContext<"/cv/[version]">) {
  const { version } = await params;

  // Any other /cv/... URL is a 404.
  if (!isCvVersion(version)) {
    return new Response("Not found", { status: 404 });
  }

  const pdf = await renderCvPdf(version);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${getCvPdfFileName(version)}"`,
    },
  });
}
