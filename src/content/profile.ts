import type { Education, Highlight, Profile, SkillGroup } from "./types";

export const profile: Profile = {
  fullName: "Wiku Galindra Wardhana",
  shortName: "Wiku G. Wardhana",
  headline: "Web & Mobile Developer",
  location: "North Jakarta, Indonesia",
  contactLinks: [
    { label: "wikugw@gmail.com", href: "mailto:wikugw@gmail.com" },
    { label: "linkedin.com/in/wikugw", href: "https://linkedin.com/in/wikugw" },
    { label: "github.com/wikugw", href: "https://github.com/wikugw" },
  ],
  summary:
    "Web and mobile developer with 6 years of experience building enterprise applications, most recently safety and asset management platforms for mining operations. Focused on frontend and mobile development with Vue 3, React Native, Flutter and TypeScript, specializing in offline-first apps used by field workers on site.",
};

export const highlights: Highlight[] = [
  {
    title: "Frontend · 5+ years",
    text: "Built enterprise web apps with Vue 3 + TypeScript, including micro-frontend architecture, schema-driven dynamic forms and multi-step approval workflows.",
  },
  {
    title: "Mobile · 1 year",
    text: "Built offline-first mobile apps with React Native and Flutter for on-site safety activities and asset inspections, now used on 2,200+ monthly active devices.",
  },
  {
    title: "QA Automation",
    text: "Reduced web regression time by ~85% (3 hrs → 20 min) by automating 9 modules with WebdriverIO + TypeScript.",
  },
  {
    title: "Backend",
    text: "Minor contributions with .NET 8 and SQL Server on safety platform projects, plus earlier full-stack work with Laravel and an Oracle-to-SQL Server migration on Java Spring.",
  },
  {
    title: "Domain",
    text: "Safety management (incident, hazard, HIRADC, PICA) and maintenance & asset management (inspections, work orders, condition-based maintenance).",
  },
];

export const education: Education = {
  degree: "Bachelor of Computer Science",
  period: "2016 – 2020",
  school: "Brawijaya University, Malang",
  details: "Information Technology major, Faculty of Computer Science · GPA 3.55",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Currently using",
    rows: [
      { label: "Languages", items: ["TypeScript", "JavaScript", "Dart", "C#"] },
      {
        label: "Web",
        items: [
          "Vue 3",
          "Micro-frontend (Vite Module Federation)",
          "PWA",
          "IndexedDB",
          "REST API integration",
        ],
      },
      {
        label: "Mobile",
        items: ["React Native", "Flutter (Riverpod, Isar)", "Offline-first sync"],
      },
      { label: "Backend", items: [".NET 8 (minor)", "SQL Server"] },
      { label: "Testing", items: ["Vitest", "WebdriverIO", "ChromeDriver", "Unit & widget tests"] },
      {
        label: "Integration & Tools",
        items: ["Azure MSAL", "Power BI Embedded", "PDF generation", "Node.js", "Git"],
      },
    ],
  },
  {
    title: "Previously used",
    rows: [
      { label: "Backend", items: ["PHP (Laravel)", "Java (Spring)"] },
      { label: "Frontend", items: ["Vue.js (Vue 2)"] },
      { label: "Database", items: ["MySQL", "Oracle"] },
      { label: "Integration & Tools", items: ["Google Maps API", "SSMA (database migration)"] },
    ],
  },
];
