import { DisclosureGroup } from "@/components/Disclosure/DisclosureGroup";
import { ExpandAllButton } from "@/components/Disclosure/ExpandAllButton";
import { Section } from "@/components/Section/Section";
import type { Job } from "@/content/types";
import { JobEntry } from "./JobEntry";
import { getAllPanelIds } from "./panelIds";
import styles from "./Experience.module.css";

export function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <DisclosureGroup ids={getAllPanelIds(jobs)}>
      <Section id="experience" title="Experience" titleExtra={<ExpandAllButton />}>
        <div className={styles.jobList}>
          {jobs.map((job, jobIndex) => (
            <JobEntry key={job.company} job={job} jobIndex={jobIndex} />
          ))}
        </div>
      </Section>
    </DisclosureGroup>
  );
}
