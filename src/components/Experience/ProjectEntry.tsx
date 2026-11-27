import { ChipList } from "@/components/Chip/Chip";
import { Disclosure } from "@/components/Disclosure/Disclosure";
import type { BusinessPoint, Project } from "@/content/types";
import { splitTechnicalPoints } from "@/lib/splitTechnicalPoints";
import { getProjectPanelIds } from "./panelIds";
import styles from "./Experience.module.css";

type ProjectEntryProps = {
  project: Project;
  jobIndex: number;
  projectIndex: number;
};

export function ProjectEntry({ project, jobIndex, projectIndex }: ProjectEntryProps) {
  const panelIds = getProjectPanelIds(jobIndex, projectIndex);
  const { tags, notes } = splitTechnicalPoints(project.technicalPoints);

  return (
    <div className={styles.project}>
      <div>
        <h4 className={styles.projectName}>{project.name}</h4>
        <div className={styles.projectRole}>{project.role}</div>
      </div>

      {project.description && <p className={styles.description}>{project.description}</p>}

      <div className={styles.panels}>
        {project.businessPoints.length > 0 && (
          <Disclosure
            id={panelIds.business}
            label="Business view"
            count={project.businessPoints.length}
          >
            <ul className={styles.businessList}>
              {project.businessPoints.map((point) => (
                <BusinessPointItem key={point.label ?? point.text} point={point} />
              ))}
            </ul>
          </Disclosure>
        )}

        <Disclosure
          id={panelIds.technical}
          label="Technical view"
          count={project.technicalPoints.length}
        >
          <div className={styles.technicalBody}>
            {tags.length > 0 && <ChipList items={tags} />}

            {notes.length > 0 && (
              <ul className={styles.technicalNotes}>
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            )}
          </div>
        </Disclosure>
      </div>
    </div>
  );
}

function BusinessPointItem({ point }: { point: BusinessPoint }) {
  return (
    <li>
      {point.label && <strong className={styles.businessLabel}>{point.label}: </strong>}
      {point.text}

      {point.subPoints && (
        <ul className={styles.subPoints}>
          {point.subPoints.map((subPoint) => (
            <li key={subPoint}>{subPoint}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
