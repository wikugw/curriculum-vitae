import { DownloadMenu } from "@/components/DownloadMenu/DownloadMenu";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

export function Header({ name }: { name: string }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.name}>{name}</span>

        <nav className={styles.nav} aria-label="Sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <DownloadMenu />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
