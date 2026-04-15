import { describe, expect, test } from "vitest";
import { readingTime } from "../src/index";

describe("readingTime", () => {
  const paragraph = (len: number) => Array(len).fill("word").join(" ");

  test("calculates reading time", () => {
    const text = paragraph(250);
    expect(readingTime(text)).toBe(1);
  });

  test("calculates short reading time", () => {
    const text = paragraph(8);
    expect(readingTime(text)).toBeCloseTo(0.032, 2);
  });

  test("calculates long reading time", () => {
    const text = paragraph(4000);
    expect(readingTime(text)).toBeCloseTo(16);
  });

  test("returns 0 for empty strings", () => {
    expect(readingTime("")).toBe(0);
  });
});
