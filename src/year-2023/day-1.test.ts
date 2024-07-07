import { expect, test } from "vitest";
import { parseInputFile, part1, part2 } from "./day-1";
import { trim } from "../util";

test("parseInputFile", () => {
  expect(
    parseInputFile(trim`
      1abc2
      pqr3stu8vwx
      a1b2c3d4e5f
      treb7uchet
    `)
  ).toEqual(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]);
});

test("part1", () => {
  expect(part1(["1abc2"])).toBe(12);
  expect(part1(["pqr3stu8vwx"])).toBe(38);
  expect(part1(["a1b2c3d4e5f"])).toBe(15);
  expect(part1(["treb7uchet"])).toBe(77);
  expect(part1(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])).toBe(
    142
  );
});

test("part2", () => {
  expect(part2(["two1nine"])).toBe(29);
  expect(part2(["eightwothree"])).toBe(83);
  expect(part2(["abcone2threexyz"])).toBe(13);
  expect(part2(["xtwone3four"])).toBe(24);
  expect(part2(["4nineeightseven2"])).toBe(42);
  expect(part2(["zoneight234"])).toBe(14);
  expect(part2(["7pqrstsixteen"])).toBe(76);
  expect(
    part2([
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ])
  ).toBe(281);
});
