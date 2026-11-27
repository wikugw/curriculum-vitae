import type { Job } from "@/content/types";

/** Stable ids for a project's two collapsible panels. */
export function getProjectPanelIds(jobIndex: number, projectIndex: number) {
  const prefix = `job-${jobIndex}-project-${projectIndex}`;
  return {
    business: `${prefix}-business`,
    technical: `${prefix}-technical`,
  };
}

/** Every panel id on the page, so "Expand all" knows what to open. */
export function getAllPanelIds(jobs: Job[]): string[] {
  return jobs.flatMap((job, jobIndex) =>
    job.projects.flatMap((project, projectIndex) => {
      const ids = getProjectPanelIds(jobIndex, projectIndex);
      const hasBusinessPanel = project.businessPoints.length > 0;
      return hasBusinessPanel ? [ids.business, ids.technical] : [ids.technical];
    }),
  );
}
