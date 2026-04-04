import { describe, expect, test } from "vitest";
import { wordCount, readingTime, formatTime } from "../src/index";

describe("wordCount", () => {
  test("counts words", () => {
    expect(wordCount("Hi")).toBe(1);
    expect(wordCount("A fish jumped over something super tall. Wow!")).toBe(8);
    expect(wordCount("this.... h@s, lots of punctu^tion!")).toBe(5);
    expect(wordCount("a\nparagraph")).toBe(2);
  });

  test("returns 0 for empty strings", () => {
    expect(wordCount("")).toBe(0);
  });

  test("handles whitespace between words", () => {
    expect(wordCount("  one   two   three")).toBe(3);
  });
});

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

describe("formatTime", () => {
  test("formats a minute", () => {
    expect(formatTime(1)).toBe("1 minute");
    expect(formatTime(1.5)).toBe("1 minute");
  });

  test("formats multiple minutes", () => {
    expect(formatTime(13)).toBe("10 minutes");
    expect(formatTime(15)).toBe("15 minutes");
    expect(formatTime(17)).toBe("15 minutes");
    expect(formatTime(29)).toBe("25 minutes");
    expect(formatTime(45.67)).toBe("45 minutes");
  });

  test("formats less than a minute", () => {
    expect(formatTime(0.04)).toBe("Less than a minute");
    expect(formatTime(0.2)).toBe("Less than a minute");
    expect(formatTime(0.12345)).toBe("Less than a minute");
  });

  test("returns less than a minute for edge cases", () => {
    expect(formatTime(0)).toBe("Less than a minute");
    expect(formatTime(-5)).toBe("Less than a minute");
  });

  test("formats an hour", () => {
    expect(formatTime(59.9)).toBe("1 hour");
    expect(formatTime(60)).toBe("1 hour");
    expect(formatTime(89)).toBe("1 hour");
  });

  test("formats half hours", () => {
    expect(formatTime(90)).toBe("1.5 hours");
    expect(formatTime(100)).toBe("1.5 hours");
  });

  test("formats a long reading time", () => {
    expect(formatTime(120)).toBe("2 hours");
    expect(formatTime(150)).toBe("2.5 hours");
  });

  test("formats a really long reading time", () => {
    expect(formatTime(180)).toBe("A few hours");
    expect(formatTime(200)).toBe("A few hours");
  });
});
