/** The shape of all CV content. Edit the data in the other files in this folder. */

export type ContactLink = {
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  shortName: string;
  headline: string;
  location: string;
  contactLinks: ContactLink[];
  summary: string;
};

export type Highlight = {
  title: string;
  text: string;
};

/** One point in a project's "Business view". */
export type BusinessPoint = {
  /** Optional bold lead-in, shown as "Label: text". */
  label?: string;
  text: string;
  /** Optional nested bullet list under the point. */
  subPoints?: string[];
};

export type Project = {
  name: string;
  role: string;
  description: string;
  businessPoints: BusinessPoint[];
  /**
   * Shown in the project's "Technical view".
   * Short items appear as tags, longer ones as a bullet list (see lib/splitTechnicalPoints).
   */
  technicalPoints: string[];
};

export type Job = {
  company: string;
  title: string;
  period: string;
  projects: Project[];
};

export type Education = {
  degree: string;
  period: string;
  school: string;
  details: string;
};

export type SkillRow = {
  label: string;
  items: string[];
};

export type SkillGroup = {
  title: string;
  rows: SkillRow[];
};
