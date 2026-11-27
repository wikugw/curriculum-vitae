"use client";

import type { MouseEvent, ReactNode } from "react";
import { useDisclosureGroup } from "./DisclosureGroup";
import styles from "./Disclosure.module.css";

type DisclosureProps = {
  id: string;
  label: string;
  /** Shown next to the label, e.g. the number of items inside. */
  count: number;
  children: ReactNode;
};

/**
 * A collapsible panel built on the native <details> element, which gives
 * keyboard and screen reader support for free and still works without JavaScript.
 * Once React loads, the open state comes from the surrounding DisclosureGroup.
 */
export function Disclosure({ id, label, count, children }: DisclosureProps) {
  const { isOpen, toggle } = useDisclosureGroup();

  function handleSummaryClick(event: MouseEvent) {
    // Stop the browser's own toggle so React stays in control of the open state.
    event.preventDefault();
    toggle(id);
  }

  return (
    <details className={styles.disclosure} open={isOpen(id)}>
      <summary className={styles.summary} onClick={handleSummaryClick}>
        <span className={styles.chevron} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>{count}</span>
      </summary>

      <div className={styles.body}>{children}</div>
    </details>
  );
}
