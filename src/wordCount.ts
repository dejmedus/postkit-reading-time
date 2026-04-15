/**
 * Count the number of words in the given text
 *
 * @param str words to count
 * @returns number of words
 * @example wordCount("a couple of words") // 4
 */
export function wordCount(str: string): number {
  return str.match(/\S+/g)?.length ?? 0;
}
