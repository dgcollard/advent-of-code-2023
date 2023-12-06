import { expect, test } from "vitest";
import { Input, parseInputFile, part1, part2 } from "./day-6";
import { trim } from "./util";

const races: Input = [
  [7, 9],
  [15, 40],
  [30, 200],
];

test("parseInputFile", () => {
  expect(
    parseInputFile(trim`
      Time:      7  15   30
      Distance:  9  40  200
    `)
  ).toEqual(races);
});

test("part1", () => {
  expect(part1(races)).toBe(288);
});

test("part2", () => {
  expect(part2(races)).toBe(71503);
});
