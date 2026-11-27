import { StyleSheet } from "@react-pdf/renderer";

/** The website's light-theme colors. The PDF is always light so it prints well. */
export const colors = {
  text: "#16171a",
  textMuted: "#5b5f66",
  textFaint: "#8a8e95",
  border: "#e6e6e3",
};

/**
 * Sizes are in points (1pt = 1/72 inch). A4 is 595 × 842 pt.
 *
 * The page is a flat list of blocks (see PdfSection), so vertical spacing is set
 * with marginTop on each block rather than with gaps on a parent.
 */
export const styles = StyleSheet.create({
  page: {
    paddingTop: 44,
    paddingBottom: 56,
    paddingHorizontal: 48,
    fontFamily: "IBM Plex Sans",
    fontSize: 9.5,
    lineHeight: 1.5,
    color: colors.text,
    // Ligatures draw "fi" as one glyph, and PDF readers then extract "first" as
    // "frst". Turning them off keeps the text correct for copy-paste and for the
    // applicant tracking systems that read CVs.
    fontFeatureSettings: { liga: false },
  },

  // Header

  name: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 1.2,
  },
  headline: {
    marginTop: 2,
    fontSize: 12,
    color: colors.textMuted,
  },
  contacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 14,
    marginTop: 8,
    fontFamily: "IBM Plex Mono",
    fontSize: 8.5,
    color: colors.textMuted,
  },
  link: {
    color: colors.text,
    textDecoration: "none",
  },
  summary: {
    marginTop: 10,
    fontSize: 10,
  },

  // Sections

  sectionTitle: {
    marginTop: 18,
    marginBottom: 2,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    fontFamily: "IBM Plex Mono",
    fontSize: 8,
    fontWeight: 500,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: colors.textFaint,
  },

  // Shared text styles

  bold: {
    fontWeight: 600,
  },
  muted: {
    color: colors.textMuted,
  },
  meta: {
    fontFamily: "IBM Plex Mono",
    fontSize: 8.5,
    color: colors.textMuted,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },

  // Highlights

  highlight: {
    marginTop: 6,
  },

  // Experience

  jobStart: {
    marginTop: 10,
  },
  company: {
    fontSize: 12,
    fontWeight: 600,
  },
  project: {
    marginTop: 7,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 600,
  },
  projectRole: {
    fontFamily: "IBM Plex Mono",
    fontSize: 8,
    color: colors.textFaint,
  },
  subheading: {
    marginTop: 5,
    marginBottom: 2,
    fontSize: 8.5,
    fontWeight: 500,
    color: colors.textMuted,
  },

  // Bullet lists

  bulletRow: {
    flexDirection: "row",
    marginTop: 2,
  },
  bulletMark: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  nestedList: {
    marginLeft: 10,
    color: colors.textMuted,
  },

  // Education

  education: {
    marginTop: 6,
  },

  // Skills

  skillGroup: {
    marginTop: 6,
  },
  skillRow: {
    flexDirection: "row",
    marginTop: 1,
  },
  skillLabel: {
    width: 110,
    color: colors.textMuted,
  },
  skillItems: {
    flex: 1,
  },

  // Footer, repeated on every page

  footer: {
    position: "absolute",
    bottom: 28,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "IBM Plex Mono",
    fontSize: 7.5,
    color: colors.textFaint,
  },
});
