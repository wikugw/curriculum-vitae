import type { ReactNode } from "react";
import styles from "./Chip.module.css";

/** A small monospace tag, used for technologies and skills. */
export function Chip({ children }: { children: ReactNode }) {
  return <span className={styles.chip}>{children}</span>;
}

/** A wrapping row of chips. */
export function ChipList({ items }: { items: string[] }) {
  return (
    <div className={styles.chipList}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  );
}
