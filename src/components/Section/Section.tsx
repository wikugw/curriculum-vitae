import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  title: string;
  /** Optional content under the title in the left column, e.g. a button. */
  titleExtra?: ReactNode;
  children: ReactNode;
};

/**
 * The two-column layout used by every CV section: a small label on the left,
 * the content on the right. On narrow screens the columns stack.
 */
export function Section({ id, title, titleExtra, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.titleColumn}>
        <h2 className={styles.title}>{title}</h2>
        {titleExtra}
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  );
}
