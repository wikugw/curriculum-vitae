import type { Job } from "./types";

/** Work history, newest first. */
export const jobs: Job[] = [
  {
    company: "PT. Bukit Teknologi Digital",
    title: "Web & Mobile Developer",
    period: "Mar 2023 – Present",
    projects: [
      {
        name: "Asset Management Related Mobile Apps",
        role: "Mobile Developer",
        description:
          "Mobile app for technicians to run equipment inspections and manage maintenance work orders on site. Published on Google Play with 360+ monthly active devices across multiple mining sites.",
        businessPoints: [
          {
            label: "Inspection work orders",
            text: "technicians run scheduled, shutdown and corrective inspections on site and record findings with component, damage, cause, priority and photo evidence.",
          },
          {
            label: "Order management",
            text: "teams track mechanic orders, activities and part orders, and create new work orders with manpower, duration and required parts.",
          },
          {
            label: "Approval workflow",
            text: "supervisors review, edit and approve or reject findings and mechanic orders from their phones.",
          },
        ],
        technicalPoints: [
          "Flutter with Riverpod state management",
          "Offline-first sync using Isar local database",
          "Azure MSAL login",
          "Unit and widget tests",
        ],
      },
      {
        name: "Web UI Test Automation",
        role: "Frontend Developer / QA Automation",
        description: "End-to-end regression test suite for the asset management web platform.",
        businessPoints: [
          {
            text: "Reduced web regression time by ~85% (3 hrs → 20 min) by automating 9 modules with WebdriverIO + TypeScript, cutting the manual regression effort needed before each release.",
          },
        ],
        technicalPoints: [
          "TypeScript",
          "WebdriverIO",
          "ChromeDriver",
          "Node.js (tsx)",
          "Snapshot decorator that automatically captures before/after DOM and screenshots on every page access, for evidence-based debugging",
        ],
      },
      {
        name: "Buma Safety Internal Website",
        role: "Frontend Developer, Backend Developer (minor contributions)",
        description:
          "Enterprise safety platform for reporting, investigating and following up on workplace incidents. Used across 9 BUMA locations, including 7 mining sites.",
        businessPoints: [
          {
            label: "Incident Management",
            text: "built features covering the incident reporting workflow, from preliminary report and investigation team to the Incident Investigation Report (LPI), approval, and lessons learned.",
          },
          {
            label: "PICA Incident Management",
            text: "developed the PICA (Problem Identification & Corrective Action) module, which tracks corrective and preventive actions from investigation findings through to closure.",
          },
        ],
        technicalPoints: [
          "Micro-frontend architecture",
          "REST API integration (CRUD)",
          "Export to PDF",
          "Vue 3",
          "TypeScript",
        ],
      },
      {
        name: "Safety Related Mobile Apps",
        role: "Mobile Developer",
        description:
          "Offline-first mobile app for workers, foremen and supervisors to run daily on-site safety activities. Published on Google Play with 1,900+ monthly active devices across 9 BUMA locations, including 7 mining sites.",
        businessPoints: [
          {
            label: "Hazard Report",
            text: "workers report unsafe conditions found on site, with location, risk level, photos and an assigned person-in-charge (PIC).",
          },
          {
            label: "Inspection",
            text: "checklist-based area inspections. Each failed item is logged as a deviation, with evidence, a risk level and a PIC.",
          },
          {
            label: "Observation",
            text: "supervisors observe workers' safety behavior before, during and after a task to spot unsafe acts.",
          },
          {
            label: "Coaching & Feedback",
            text: "coaching sessions that follow up on observations, plus feedback to measure their effectiveness.",
          },
          {
            label: "Genba",
            text: "supervisors walk the area in person after major incidents or high-risk findings, to verify site conditions.",
          },
          {
            label: "Critical Risk Activity (CRA)",
            text: "verifies that the required controls are in place before high-risk activities begin.",
          },
          {
            label: "PICA (Problem Identification & Corrective Action)",
            text: "tracks follow-up actions from all findings until the assigned PIC resolves and closes them.",
          },
          {
            label: "Dashboards",
            text: "role-based summaries for foremen and supervisors, showing safety activity progress and targets.",
          },
        ],
        technicalPoints: [
          "React Native",
          "TypeScript",
          "Offline-first data flow with a local database",
          "Hash-based incremental master-data sync",
          "Azure MSAL login and an analytics tracking wrapper",
        ],
      },
      {
        name: "Btech Safety Website",
        role: "Frontend Developer, Backend Developer (minor contributions)",
        description:
          "Safety compliance web platform for risk assessment and safety master data, used across multiple operational sites.",
        businessPoints: [
          {
            label: "HIRADC (Hazard Identification, Risk Assessment & Determining Controls)",
            text: "built the full flow to create, view and manage risk assessments. Users identify hazards for each activity, assess the risk level and record control measures, which supports safety compliance at operational sites.",
          },
          {
            label: "Master Data Configuration",
            text: "built admin modules that keep reference data consistent across the platform:",
            subPoints: [
              "User targets for inspections and observations, set per job title or per employee",
              "Locations and sub-locations",
              "Priority observees",
              "Site configuration",
            ],
          },
        ],
        technicalPoints: [
          "Micro-frontend architecture with Vite Module Federation",
          "Power BI embedded page",
          "Azure MSAL login and an analytics tracking wrapper",
          "Unit tests with Vitest",
          "REST API integration (CRUD)",
          "Multi-language support",
        ],
      },
      {
        name: "Iron Platform: Maintenance & Asset Management Web App",
        role: "Frontend Developer",
        description:
          "Offline-first maintenance and asset management platform for mechanics, planners and maintenance managers.",
        businessPoints: [
          {
            label: "Iron Forms (Digital Maintenance Application)",
            text: "digital service sheets and e-forms. Mechanics use them to inspect equipment, record defects and cracks, log component interventions and interim engine services, and attach photos and documents.",
          },
          {
            label: "Approval & Quality workflow",
            text: "defects go from the mechanic to the planner, then through quality review and maintenance manager approval. Each step has status tracking, a pending-task monitor and version history.",
          },
          {
            label: "Iron Portal (Condition-Based Maintenance)",
            text: "dashboards and historical trend graphs of component condition. Teams configure CBM thresholds, risk ranking matrices and OEM intervals, which helps them plan component replacements before they fail.",
          },
          {
            label: "Iron Lake (Master Data)",
            text: "central management of equipment, assets, employees, organization units, business partners, roles, parameters and tasks.",
          },
        ],
        technicalPoints: [
          "Vue 3",
          "TypeScript",
          "Offline-first PWA with an IndexedDB store",
          "Azure MSAL login and an analytics tracking wrapper",
          "In-browser camera capture",
          "PDF generation and merging",
          "Dynamic, schema-driven form engine handling 10+ dynamic forms, with a JSON editor for form templates, and a drawing canvas for annotations and signatures",
        ],
      },
    ],
  },
  {
    company: "PT. Bukit Makmur Mandiri Utama",
    title: "Frontend Developer",
    period: "Jan 2022 – Mar 2023",
    projects: [
      {
        name: "Btech Safety Website",
        role: "Frontend Developer",
        description:
          "Internal safety web platform, including employee health reporting during the COVID-19 pandemic.",
        businessPoints: [
          {
            label: "Outbreak Management Form",
            text: "a questionnaire created and distributed to all employees as detailed attendance and health reporting during COVID-19.",
          },
          {
            label: "Master Data Configuration",
            text: "built admin modules that keep reference data consistent across the platform.",
          },
        ],
        technicalPoints: [
          "Vue 3",
          "TypeScript",
          "Azure MSAL login and an analytics tracking wrapper",
          "REST API integration (CRUD)",
          "Multi-language support",
          "Dynamic, schema-driven forms with an interactive Form Builder for form templates",
        ],
      },
    ],
  },
  {
    company: "Pusdatin Kemensos RI (Ministry of Social Affairs)",
    title: "Software Engineer",
    period: "Aug 2021 – Dec 2021",
    projects: [
      {
        name: "Oracle → SQL Server Migration",
        role: "Software Engineer",
        description:
          "Database migration of a government web application from Oracle to SQL Server.",
        businessPoints: [
          { text: "Maintained website availability during the database migration." },
          {
            text: "Ensured all stored procedure and function logic worked as originally intended after the SSMA migration tool failed to convert it.",
          },
        ],
        technicalPoints: ["Java (Spring)", "Oracle (source)", "SQL Server (target)"],
      },
    ],
  },
  {
    company: "PT. Grune Teknologi Indonesia",
    title: "Web Developer",
    period: "Nov 2020 – Aug 2021",
    projects: [
      {
        name: "Store Product Master Data App",
        role: "Web Developer (Frontend & Backend)",
        description: "Internal web application for managing a store's product master data.",
        businessPoints: [
          {
            label: "Product Master Data",
            text: "store staff create, view, update and delete product data used in the store's internal operations.",
          },
        ],
        technicalPoints: [
          "Laravel (backend)",
          "Vue.js (frontend)",
          "MySQL",
          "REST API integration (CRUD)",
        ],
      },
      {
        name: "Property Management App",
        role: "Web Developer (Frontend & Backend)",
        description: "Web application for managing property listings and browsing them on a map.",
        businessPoints: [
          {
            label: "Property map",
            text: "users browse properties as pins on a map and click a pin to see the property details.",
          },
        ],
        technicalPoints: [
          "Laravel (backend)",
          "Vue.js (frontend)",
          "MySQL",
          "Email notifications",
          "Google Maps API integration: rendered property pins from backend latitude/longitude data, with a detail popup on click",
        ],
      },
    ],
  },
];
