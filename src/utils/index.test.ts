import { describe, expect, it } from "vitest";
import { cn, formatDate, formatDateTime, formatTime } from "@/utils";

describe("cn", () => {
  it("merges tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});

describe("formatDate", () => {
  it("returns empty string for invalid input", () => {
    expect(formatDate("not-a-date")).toBe("");
  });

  it("formats valid date in local locale", () => {
    const s = formatDate(new Date(Date.UTC(2024, 0, 15)));
    expect(s.length).toBeGreaterThan(0);
  });
});

describe("formatTime", () => {
  it("formats time for valid date", () => {
    const s = formatTime(new Date(Date.UTC(2024, 0, 15, 14, 30, 0)));
    expect(s.length).toBeGreaterThan(0);
  });
});

describe("formatDateTime", () => {
  it("formats date and time", () => {
    const s = formatDateTime(new Date(Date.UTC(2024, 0, 15, 14, 30, 0)));
    expect(s.length).toBeGreaterThan(0);
  });
});
