import { expect, test } from "vitest";
import { trim } from "../util";
import { parseInputFile, part1, part2 } from "./day-3";

const engineSchematic = [
	["4", "6", "7", ".", ".", "1", "1", "4", ".", ".", "."],
	[".", ".", ".", "*", ".", ".", ".", ".", ".", ".", "."],
	[".", ".", "3", "5", ".", ".", "6", "3", "3", ".", "."],
	[".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "."],
	["6", "1", "7", "*", ".", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", "+", ".", "5", "8", ".", "."],
	[".", ".", "5", "9", "2", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", ".", "7", "5", "5", ".", "."],
	[".", ".", ".", "$", ".", "*", ".", ".", ".", ".", "."],
	[".", "6", "6", "4", ".", "5", "9", "8", ".", ".", "."],
];

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
      467..114..
      ...*......
      ..35..633.
      ......#...
      617*......
      .....+.58.
      ..592.....
      ......755.
      ...$.*....
      .664.598..
    `),
	).toEqual(engineSchematic);
});

test("part1", () => {
	expect(part1(engineSchematic)).toBe(4361);
});

test("part2", () => {
	expect(part2(engineSchematic)).toBe(467835);
});
