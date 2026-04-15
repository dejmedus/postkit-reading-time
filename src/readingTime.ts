import { wordCount } from ".";

/**
 * Estimate the reading time of the given text
 *
 * @param str words to read
 * @returns number of minutes
 * @example readingTime("Oatmeal!") // 0.004
 */
export function readingTime(str: string): number {
  const count = wordCount(str);
  return count / 250;
}
