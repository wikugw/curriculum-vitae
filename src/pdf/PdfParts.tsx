import { Link, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { styles } from "./styles";

/**
 * Small building blocks for the PDF. react-pdf has no <ul> or <h2>, so lists
 * and headings are built from <View> and <Text>.
 */

type PdfSectionProps = {
  title: string;
  /** The section's content as separate blocks. Each block needs a `key`. */
  blocks: ReactNode[];
};

/**
 * A titled section, rendered as a flat list of blocks directly on the page.
 *
 * Why flat: react-pdf breaks pages most reliably between siblings. With nested
 * views it sometimes moved a whole job to the next page and left half a page
 * empty. The title is kept on the same page as the first block, so it is never
 * left alone at the bottom of a page.
 */
export function PdfSection({ title, blocks }: PdfSectionProps) {
  const [firstBlock, ...otherBlocks] = blocks;

  return (
    <>
      <View wrap={false}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {firstBlock}
      </View>
      {otherBlocks}
    </>
  );
}

export function Bullet({ children, mark = "•" }: { children: ReactNode; mark?: string }) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletMark}>{mark}</Text>
      <View style={styles.bulletText}>{children}</View>
    </View>
  );
}

export function PdfLink({ href, children }: { href: string; children: string }) {
  return (
    <Link src={href} style={styles.link}>
      {children}
    </Link>
  );
}
