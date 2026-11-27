import { ChipList } from "@/components/Chip/Chip";
import { Section } from "@/components/Section/Section";
import type { SkillGroup } from "@/content/types";
import styles from "./Skills.module.css";

export function Skills({ skillGroups }: { skillGroups: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.group}>
            <div className={styles.groupTitle}>{group.title}</div>

            {group.rows.map((row) => (
              <div key={row.label} className={styles.row}>
                <span className={styles.rowLabel}>{row.label}</span>
                <div className={styles.rowItems}>
                  <ChipList items={row.items} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
