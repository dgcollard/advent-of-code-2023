import { expect, test } from "vitest";
import { parseInputFile, part1, part2 } from "./day-2";
import { trim } from "../util";

const games = {
  1: [
    { red: 4, green: 0, blue: 3 },
    { red: 1, green: 2, blue: 6 },
    { red: 0, green: 2, blue: 0 },
  ],
  2: [
    { red: 0, green: 2, blue: 1 },
    { red: 1, green: 3, blue: 4 },
    { red: 0, green: 1, blue: 1 },
  ],
  3: [
    { red: 20, green: 8, blue: 6 },
    { red: 4, green: 13, blue: 5 },
    { red: 1, green: 5, blue: 0 },
  ],
  4: [
    { red: 3, green: 1, blue: 6 },
    { red: 6, green: 3, blue: 0 },
    { red: 14, green: 3, blue: 15 },
  ],
  5: [
    { red: 6, green: 3, blue: 1 },
    { red: 1, green: 2, blue: 2 },
  ],
};

test("parseInputFile", () => {
  expect(
    parseInputFile(trim`
      Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
      Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
      Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
      Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
      Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
    `)
  ).toEqual(games);
});

test("part1", () => {
  expect(part1(games)).toBe(8);
});

test("part2", () => {
  expect(part2(games)).toBe(2286);
});
