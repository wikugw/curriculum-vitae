import { Section } from "@/components/Section/Section";
import type { Highlight } from "@/content/types";
import styles from "./Highlights.module.css";

export function Highlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <Section title="Highlights">
      <div className={styles.list}>
        {highlights.map((highlight) => (
          <div key={highlight.title}>
            <div className={styles.title}>{highlight.title}</div>
            <div className={styles.text}>{highlight.text}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
