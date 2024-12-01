import { expect, test } from "vitest";
import { trim } from "../util";
import { parseInputFile, part1, part2 } from "./day-1";

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
      R2, L3
    `),
	).toEqual([
		{ turn: "R", dist: 2 },
		{ turn: "L", dist: 3 },
	]);
});

test("part1", () => {
	expect(part1(parseInputFile("R2, L3"))).toBe(5);
	expect(part1(parseInputFile("R2, R2, R2"))).toBe(2);
	expect(part1(parseInputFile("R5, L5, R5, R3"))).toBe(12);
});

test.skip("part2", () => {
	expect(part2(parseInputFile("R8, R4, R4, R8"))).toBe(4);
});
