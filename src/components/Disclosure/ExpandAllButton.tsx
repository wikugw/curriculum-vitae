"use client";

import { useDisclosureGroup } from "./DisclosureGroup";
import styles from "./ExpandAllButton.module.css";

export function ExpandAllButton() {
  const { areAllOpen, setAllOpen } = useDisclosureGroup();

  return (
    <button type="button" className={styles.button} onClick={() => setAllOpen(!areAllOpen)}>
      {areAllOpen ? "Collapse all" : "Expand all"}
    </button>
  );
}
