import type { Profile } from "@/content/types";
import styles from "./Hero.module.css";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>{profile.fullName}</h1>
      <p className={styles.headline}>{profile.headline}</p>

      <div className={styles.contacts}>
        <span>{profile.location}</span>
        {profile.contactLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <p className={styles.summary}>{profile.summary}</p>
    </section>
  );
}
