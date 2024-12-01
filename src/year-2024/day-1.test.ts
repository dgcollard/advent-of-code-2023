import { expect, test } from "vitest";
import { trim } from "../util";
import { type Input, parseInputFile, part1, part2 } from "./day-1";

const locationLists: Input = [
	[3, 4, 2, 1, 3, 3],
	[4, 3, 5, 3, 9, 3],
];

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
			3   4
			4   3
			2   5
			1   3
			3   9
			3   3
    `),
	).toEqual(locationLists);
});

test("part1", () => {
	expect(part1(locationLists)).toBe(11);
});

test("part2", () => {
	expect(part2(locationLists)).toBe(31);
});
