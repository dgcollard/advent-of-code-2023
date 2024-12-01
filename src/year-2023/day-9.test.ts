import { expect, test } from "vitest";
import { trim } from "../util";
import { type Input, parseInputFile, part1, part2 } from "./day-9";

const map: Input = [
	[0, 3, 6, 9, 12, 15],
	[1, 3, 6, 10, 15, 21],
	[10, 13, 16, 21, 30, 45],
];

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
      0 3 6 9 12 15
      1 3 6 10 15 21
      10 13 16 21 30 45
    `),
	).toEqual(map);
});

test("part1", () => {
	expect(part1(map)).toBe(114);
});

test("part2", () => {
	expect(part2(map)).toBe(2);
});
