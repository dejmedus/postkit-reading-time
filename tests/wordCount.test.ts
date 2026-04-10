import { describe, expect, test } from "vitest";
import { wordCount } from "../src/index";

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
