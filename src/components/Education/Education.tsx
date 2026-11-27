import { Section } from "@/components/Section/Section";
import type { Education as EducationEntry } from "@/content/types";
import styles from "./Education.module.css";

export function Education({ education }: { education: EducationEntry }) {
  return (
    <Section id="education" title="Education">
      <div className={styles.titleRow}>
        <h3 className={styles.degree}>{education.degree}</h3>
        <span className={styles.period}>{education.period}</span>
      </div>
      <div>{education.school}</div>
      <div className={styles.details}>{education.details}</div>
    </Section>
  );
}
