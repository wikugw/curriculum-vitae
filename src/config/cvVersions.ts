import { profile } from "@/content/profile";

/**
 * The two downloadable PDF versions of the CV.
 * Used by both the download menu on the page and the route that builds the PDFs.
 */
export const cvVersions = {
  simple: {
    label: "Simple",
    description: "Roles, projects, education and skills at a glance.",
  },
  detailed: {
    label: "Detailed",
    description: "Everything, including the business and technical details of each project.",
  },
} as const;

export type CvVersion = keyof typeof cvVersions;

export const cvVersionIds = Object.keys(cvVersions) as CvVersion[];

export function isCvVersion(value: string): value is CvVersion {
  return value in cvVersions;
}

/** The URL the PDF is served from, e.g. "/cv/simple". */
export function getCvPdfPath(version: CvVersion): string {
  return `/cv/${version}`;
}

/** The name the downloaded file gets, e.g. "Wiku-Galindra-Wardhana-CV-Simple.pdf". */
export function getCvPdfFileName(version: CvVersion): string {
  const name = profile.fullName.replace(/\s+/g, "-");
  return `${name}-CV-${cvVersions[version].label}.pdf`;
}
