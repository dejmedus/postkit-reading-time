import { wordCount } from ".";

/**
 * Estimate the reading time of the given text
 *
 * @param string words to read
 * @returns number of minutes
 */
export function readingTime(str: string): number {
  const count = wordCount(str);
  return count / 250;
}
