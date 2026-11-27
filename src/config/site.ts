/**
 * The public URL of the site, used for the canonical link, Open Graph tags and sitemap.
 *
 * Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time to the production domain,
 * e.g. "wiku-cv.vercel.app". If a custom domain is added later, Vercel switches this
 * value to that domain, so nothing here needs to change.
 */
function getSiteUrl(): string {
  const vercelProductionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (vercelProductionDomain) {
    return `https://${vercelProductionDomain}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = getSiteUrl();
