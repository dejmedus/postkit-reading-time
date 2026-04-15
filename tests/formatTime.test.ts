import { describe, expect, test } from "vitest";
import { formatTime } from "../src/index";

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
