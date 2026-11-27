"use client";

import { useRef } from "react";
import { cvVersionIds, cvVersions, getCvPdfFileName, getCvPdfPath } from "@/config/cvVersions";
import styles from "./DownloadMenu.module.css";

const MENU_ID = "cv-download-menu";

/**
 * "PDF" button that opens a small menu with the Simple and Detailed downloads.
 *
 * Opening, closing on Escape and closing on an outside click all come from the
 * browser's built-in popover (the `popover` attribute), not from JavaScript.
 * The only script here closes the menu once a download is picked.
 */
export function DownloadMenu() {
  const menuRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    menuRef.current?.hidePopover();
  }

  return (
    <>
      <button
        type="button"
        className={styles.button}
        popoverTarget={MENU_ID}
        aria-label="Download CV as PDF"
      >
        <DownloadIcon />
        PDF
      </button>

      <div ref={menuRef} id={MENU_ID} popover="auto" className={styles.menu}>
        <p className={styles.menuTitle}>Download CV</p>

        {cvVersionIds.map((version) => (
          <a
            key={version}
            href={getCvPdfPath(version)}
            download={getCvPdfFileName(version)}
            className={styles.option}
            onClick={closeMenu}
          >
            <span className={styles.optionLabel}>{cvVersions[version].label}</span>
            <span className={styles.optionDescription}>{cvVersions[version].description}</span>
          </a>
        ))}
      </div>
    </>
  );
}

function DownloadIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" />
    </svg>
  );
}
