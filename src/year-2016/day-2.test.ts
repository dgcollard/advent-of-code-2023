import { expect, test } from "vitest";
import { trim } from "../util";
import { parseInputFile, part1, part2 } from "./day-2";

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
      ULL
      RRDDD
      LURDL
      UUUUD
    `),
	).toEqual([
		["U", "L", "L"],
		["R", "R", "D", "D", "D"],
		["L", "U", "R", "D", "L"],
		["U", "U", "U", "U", "D"],
	]);
});

test("part1", () => {
	expect(
		part1(
			parseInputFile(trim`
        ULL
        RRDDD
        LURDL
        UUUUD
      `),
		),
	).toBe("1985");
});

test("part2", () => {
	expect(
		part2(
			parseInputFile(trim`
        ULL
        RRDDD
        LURDL
        UUUUD
      `),
		),
	).toBe("5DB3");
});
