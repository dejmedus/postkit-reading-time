/**
 * Format any number of minutes for display
 *
 * @param minutes number of minutes
 * @returns readable label, ex. Less than a minute, 20 minutes, 2 hours
 * @example formatTime(20) // "20 minutes"
 */
export function formatTime(minutes: number): string {
  if (minutes < 1) return "Less than a minute";
  if (minutes < 2) return "1 minute";
  if (minutes < 10) return `${Math.floor(minutes)} minutes`;
  if (minutes < 59) return `${Math.floor(minutes / 5) * 5} minutes`;
  if (minutes < 90) return "1 hour";
  if (minutes < 120) return "1.5 hours";
  if (minutes < 150) return "2 hours";
  if (minutes < 180) return "2.5 hours";
  return "A few hours";
}
