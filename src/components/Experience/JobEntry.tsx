import type { Job } from "@/content/types";
import { ProjectEntry } from "./ProjectEntry";
import styles from "./Experience.module.css";

type JobEntryProps = {
  job: Job;
  jobIndex: number;
};

export function JobEntry({ job, jobIndex }: JobEntryProps) {
  return (
    <article className={styles.job}>
      <div>
        <div className={styles.jobTitleRow}>
          <h3 className={styles.company}>{job.company}</h3>
          <span className={styles.period}>{job.period}</span>
        </div>
        <div className={styles.jobTitle}>{job.title}</div>
      </div>

      {job.projects.map((project, projectIndex) => (
        <ProjectEntry
          key={project.name}
          project={project}
          jobIndex={jobIndex}
          projectIndex={projectIndex}
        />
      ))}
    </article>
  );
}
