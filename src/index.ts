import { test, expect } from "vitest";

function fn(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

test("adds", () => {
  expect(fn()).toBe(0);
  expect(fn(1)).toBe(1);
  expect(fn(1, 2, 3)).toBe(6);
});
