# Wiku's CV website

A single-page CV built with Next.js, deployed on Vercel. The page is fully pre-rendered to static HTML at build time.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Script           | What it does                                    |
| ---------------- | ----------------------------------------------- |
| `npm run build`  | Production build                                |
| `npm run check`  | Type-check, lint and formatting check, together |
| `npm run format` | Format all files with Prettier                  |

## Editing the CV

All text lives in [`src/content/`](src/content/). Components never need to change for a content update.

- `profile.ts`: name, contact links, summary, highlights, education, skills
- `experience.ts`: jobs and their projects (newest first)
- `types.ts`: the shape of the data, with notes on each field

In a project's "Technical view", items of 40 characters or less show as tags and longer ones as a bullet list.

## How the code is organized

```
src/
  app/              page, layout, global styles, SEO files (sitemap, robots, preview image, icon)
  components/       one folder per component, each with its own .module.css
    Disclosure/     the collapsible panels and the "Expand all" button (client components)
    ThemeToggle/    light/dark switch (client component)
  content/          the CV data
  config/site.ts    the public site URL
  lib/              small helpers (theme logic, tag/note split)
```

Everything is a Server Component except `Disclosure/` and `ThemeToggle/`, which need to run in the browser.

**Theme:** the page follows the system theme until the visitor clicks the toggle, after which their choice is saved in `localStorage`. A small script in `<head>` ([`src/lib/theme.ts`](src/lib/theme.ts)) applies the theme before the first paint, so there is no flash. Colors are defined once in [`globals.css`](src/app/globals.css) using `light-dark()`.

## PDF downloads

The "PDF" button in the header offers two versions, built from the same content files:

- **Simple** (`/cv/simple`, 2 pages): roles, projects with a one-line description, education and skills.
- **Detailed** (`/cv/detailed`): also every business and technical point of each project.

Both are A4, one column (readable by applicant tracking systems), and generated once at build time with `@react-pdf/renderer`. The code is in [`src/pdf/`](src/pdf/); the two versions are defined in [`src/config/cvVersions.ts`](src/config/cvVersions.ts). The fonts in `src/pdf/fonts/` are the complete IBM Plex files (SIL Open Font License), because the web subsets miss characters such as "→".

After changing CV content, check the PDFs with `npm run dev` and open `/cv/simple` and `/cv/detailed`.

## Deploying

Import the repository in Vercel. No settings or environment variables are needed: the site URL used for SEO comes from Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, and switches to a custom domain automatically if one is added.

## Design reference

The original Claude Design mockup is kept locally in `cv-website-mockup-design/` for reference. It is git-ignored and not part of the app.
