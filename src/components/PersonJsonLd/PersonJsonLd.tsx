import { siteUrl } from "@/config/site";
import type { Job, Profile } from "@/content/types";

type PersonJsonLdProps = {
  profile: Profile;
  jobs: Job[];
};

/**
 * Structured data (schema.org "Person") that tells search engines who this page is about.
 * Test it with https://validator.schema.org/
 */
export function PersonJsonLd({ profile, jobs }: PersonJsonLdProps) {
  const currentJob = jobs[0];
  const profileLinks = profile.contactLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("https://"));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.headline,
    description: profile.summary,
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    worksFor: currentJob && { "@type": "Organization", name: currentJob.company },
    sameAs: profileLinks,
  };

  // Escape "<" so the JSON can never close the <script> tag early.
  const json = JSON.stringify(person).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
