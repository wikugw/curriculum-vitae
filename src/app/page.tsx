import { Education } from "@/components/Education/Education";
import { Experience } from "@/components/Experience/Experience";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Highlights } from "@/components/Highlights/Highlights";
import { PersonJsonLd } from "@/components/PersonJsonLd/PersonJsonLd";
import { Skills } from "@/components/Skills/Skills";
import { jobs } from "@/content/experience";
import { education, highlights, profile, skillGroups } from "@/content/profile";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd profile={profile} jobs={jobs} />
      <Header name={profile.shortName} />

      <main className={styles.main}>
        <Hero profile={profile} />
        <Highlights highlights={highlights} />
        <Experience jobs={jobs} />
        <Education education={education} />
        <Skills skillGroups={skillGroups} />
      </main>
    </>
  );
}
