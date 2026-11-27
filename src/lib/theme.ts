/**
 * Light / dark theme.
 *
 * How it works:
 * - With no saved choice, the page follows the operating system theme.
 * - Clicking the toggle saves "light" or "dark" in localStorage. From then on
 *   that choice wins over the system theme.
 * - The chosen theme is written to <html data-theme="..."> and globals.css
 *   switches colors based on that attribute.
 */

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "cv-wiku-theme";

const darkModeQuery = "(prefers-color-scheme: dark)";

export function getCurrentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function saveAndApplyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (e.g. private mode). The theme still applies for this visit.
  }
}

/**
 * Runs inline in <head>, before the page paints, so visitors never see a flash
 * of the wrong theme. It is turned into a string below, so it must not use
 * anything from outside its own body.
 */
function applyThemeBeforePaint(storageKey: string, query: string) {
  const systemTheme = window.matchMedia(query);

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }

  function applyTheme() {
    const savedTheme = getSavedTheme();
    const systemPrefersDark = systemTheme.matches;
    const isDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }

  applyTheme();

  // Follow live system changes until the visitor picks a theme themselves.
  systemTheme.addEventListener("change", applyTheme);
}

export const themeInitScript = `(${applyThemeBeforePaint.toString()})(${JSON.stringify(
  THEME_STORAGE_KEY,
)}, ${JSON.stringify(darkModeQuery)});`;
