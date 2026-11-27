import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { cvVersions, type CvVersion } from "@/config/cvVersions";
import { siteUrl } from "@/config/site";
import { jobs } from "@/content/experience";
import { education, highlights, profile, skillGroups } from "@/content/profile";
import type { BusinessPoint, Job, Project } from "@/content/types";
import { splitTechnicalPoints } from "@/lib/splitTechnicalPoints";
import "./fonts";
import type { ReactNode } from "react";
import { Bullet, PdfLink, PdfSection } from "./PdfParts";
import { styles } from "./styles";

/**
 * The CV as an A4 PDF, in one column so applicant tracking systems can read it.
 *
 * - Simple:   each project shows its name, role and one-line description.
 * - Detailed: each project also lists its business and technical points.
 */
export function CvDocument({ version }: { version: CvVersion }) {
  const showProjectDetails = version === "detailed";

  return (
    <Document
      title={`${profile.fullName} · CV (${cvVersions[version].label})`}
      author={profile.fullName}
      subject={profile.headline}
    >
      <Page size="A4" style={styles.page}>
        <CvHeader />

        <PdfSection
          title="Highlights"
          blocks={highlights.map((highlight) => (
            <Text key={highlight.title} style={styles.highlight}>
              <Text style={styles.bold}>{highlight.title}: </Text>
              <Text style={styles.muted}>{highlight.text}</Text>
            </Text>
          ))}
        />

        <PdfSection
          title="Experience"
          blocks={jobs.flatMap((job) => getJobBlocks(job, showProjectDetails))}
        />

        <PdfSection
          title="Education"
          blocks={[
            <View key="education" style={styles.education}>
              <View style={styles.titleRow}>
                <Text style={styles.bold}>{education.degree}</Text>
                <Text style={styles.meta}>{education.period}</Text>
              </View>
              <Text>{education.school}</Text>
              <Text style={styles.muted}>{education.details}</Text>
            </View>,
          ]}
        />

        <PdfSection
          title="Skills"
          blocks={skillGroups.map((group) => (
            <View key={group.title} style={styles.skillGroup} wrap={false}>
              <Text style={styles.bold}>{group.title}</Text>
              {group.rows.map((row) => (
                <View key={row.label} style={styles.skillRow}>
                  <Text style={styles.skillLabel}>{row.label}</Text>
                  <Text style={styles.skillItems}>{row.items.join(", ")}</Text>
                </View>
              ))}
            </View>
          ))}
        />

        <CvFooter version={version} />
      </Page>
    </Document>
  );
}

function CvHeader() {
  return (
    <View>
      <Text style={styles.name}>{profile.fullName}</Text>
      <Text style={styles.headline}>{profile.headline}</Text>

      <View style={styles.contacts}>
        <Text>{profile.location}</Text>
        {profile.contactLinks.map((link) => (
          <PdfLink key={link.href} href={link.href}>
            {link.label}
          </PdfLink>
        ))}
      </View>

      <Text style={styles.summary}>{profile.summary}</Text>
    </View>
  );
}

/**
 * One job as page blocks: the company heading together with its first project
 * (so a heading never ends up alone at the bottom of a page), then each other
 * project as its own block.
 */
function getJobBlocks(job: Job, showProjectDetails: boolean) {
  const [firstProject, ...otherProjects] = job.projects;

  return [
    <View key={job.company} style={styles.jobStart} wrap={false}>
      <View style={styles.titleRow}>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.meta}>{job.period}</Text>
      </View>
      <Text style={styles.muted}>{job.title}</Text>

      <ProjectBlock project={firstProject} showProjectDetails={showProjectDetails} />
    </View>,

    ...otherProjects.map((project) => (
      <ProjectBlock
        key={`${job.company}-${project.name}`}
        project={project}
        showProjectDetails={showProjectDetails}
      />
    )),
  ];
}

type ProjectBlockProps = {
  project: Project;
  showProjectDetails: boolean;
};

function ProjectBlock({ project, showProjectDetails }: ProjectBlockProps) {
  return (
    // A simple project is only a few lines, so it is never split across pages.
    <View style={styles.project} wrap={showProjectDetails}>
      <Text style={styles.projectName}>{project.name}</Text>
      <Text style={styles.projectRole}>{project.role}</Text>
      {project.description && <Text>{project.description}</Text>}

      {showProjectDetails && <ProjectDetails project={project} />}
    </View>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  const { tags, notes } = splitTechnicalPoints(project.technicalPoints);

  const businessItems = project.businessPoints.map((point) => (
    <Bullet key={point.text}>
      <BusinessPointText point={point} />
    </Bullet>
  ));

  const technicalItems = [
    tags.length > 0 && <Text key="tags">{tags.join(" · ")}</Text>,
    ...notes.map((note) => (
      <Bullet key={note}>
        <Text>{note}</Text>
      </Bullet>
    )),
  ].filter(Boolean);

  return (
    <>
      {businessItems.length > 0 && <DetailList heading="Business view" items={businessItems} />}
      <DetailList heading="Technical view" items={technicalItems} />
    </>
  );
}

/** A "Business view" or "Technical view" list. The heading stays on the same page as its first item. */
function DetailList({ heading, items }: { heading: string; items: ReactNode[] }) {
  const [firstItem, ...otherItems] = items;

  return (
    <>
      <View wrap={false}>
        <Text style={styles.subheading}>{heading}</Text>
        {firstItem}
      </View>
      {otherItems}
    </>
  );
}

function BusinessPointText({ point }: { point: BusinessPoint }) {
  return (
    <View>
      <Text>
        {point.label && <Text style={styles.bold}>{point.label}: </Text>}
        {point.text}
      </Text>

      {point.subPoints && (
        <View style={styles.nestedList}>
          {point.subPoints.map((subPoint) => (
            <Bullet key={subPoint} mark="–">
              <Text>{subPoint}</Text>
            </Bullet>
          ))}
        </View>
      )}
    </View>
  );
}

/**
 * Shown at the bottom of every page.
 *
 * No "Page X of Y": react-pdf's page-number text (the `render` prop) is silently
 * dropped when the PDF is built inside Next.js, so the footer only uses static text.
 */
function CvFooter({ version }: { version: CvVersion }) {
  const siteLabel = siteUrl.replace(/^https?:\/\//, "");

  return (
    <View style={styles.footer} fixed>
      <Link src={siteUrl} style={styles.link}>
        {siteLabel}
      </Link>
      <Text>CV · {cvVersions[version].label}</Text>
    </View>
  );
}
