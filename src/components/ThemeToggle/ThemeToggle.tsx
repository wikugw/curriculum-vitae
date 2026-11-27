"use client";

import { getCurrentTheme, saveAndApplyTheme } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

/**
 * Switches between light and dark.
 *
 * The button shows the theme you would switch TO ("Dark" while in light mode).
 * Both labels are rendered and CSS shows the right one, so the server-rendered
 * HTML is already correct before React loads.
 */
export function ThemeToggle() {
  function handleClick() {
    const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
    saveAndApplyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-label="Toggle color theme"
    >
      <span className={styles.icon} aria-hidden="true" />
      <span className={styles.labelInLightMode}>Dark</span>
      <span className={styles.labelInDarkMode}>Light</span>
    </button>
  );
}
