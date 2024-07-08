import { expect, test } from "vitest";
import { trim } from "../util";
import { parseInputFile, part1, part2 } from "./day-3";

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
			5 10 25
    `),
	).toEqual([[5, 10, 25]]);
});

test("part1", () => {
	expect(part1([[5, 10, 25]])).toBe(0);
});

test("part2", () => {
	expect(
		part2(
			parseInputFile(trim`
				101 301 501
				102 302 502
				103 303 503
				201 401 601
				202 402 602
				203 403 603
      `),
		),
	).toBe(6);
});
