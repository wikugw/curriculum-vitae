/** Items longer than this read better as a sentence in a bullet list than as a tag. */
const MAX_TAG_LENGTH = 40;

export function splitTechnicalPoints(points: string[]) {
  const tags = points.filter((point) => point.length <= MAX_TAG_LENGTH);
  const notes = points.filter((point) => point.length > MAX_TAG_LENGTH);

  return { tags, notes };
}
