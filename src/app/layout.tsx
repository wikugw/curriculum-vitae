import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { siteUrl } from "@/config/site";
import { profile } from "@/content/profile";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Fonts are downloaded at build time and served from this site, not from Google.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const title = `${profile.fullName} · ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description: profile.summary,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121315" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The theme script changes data-theme before React loads, so React is told
    // not to warn about that attribute differing from the server HTML.
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
