import { expect, test } from "vitest";
import { trim } from "../util";
import {
	type Input,
	isReportSafe,
	isReportSafeWithDampener,
	parseInputFile,
	part1,
	part2,
} from "./day-2";

const reports: Input = [
	[7, 6, 4, 2, 1],
	[1, 2, 7, 8, 9],
	[9, 7, 6, 2, 1],
	[1, 3, 2, 4, 5],
	[8, 6, 4, 4, 1],
	[1, 3, 6, 7, 9],
];

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
			7 6 4 2 1
			1 2 7 8 9
			9 7 6 2 1
			1 3 2 4 5
			8 6 4 4 1
			1 3 6 7 9
    `),
	).toEqual(reports);
});

test("isReportSafe", () => {
	expect(isReportSafe([7, 6, 4, 2, 1])).toBe(true);
	expect(isReportSafe([1, 2, 7, 8, 9])).toBe(false);
	expect(isReportSafe([9, 7, 6, 2, 1])).toBe(false);
	expect(isReportSafe([1, 3, 2, 4, 5])).toBe(false);
	expect(isReportSafe([8, 6, 4, 4, 1])).toBe(false);
	expect(isReportSafe([1, 3, 6, 7, 9])).toBe(true);
});

test("part1", () => {
	expect(part1(reports)).toBe(2);
});

test("isReportSafeWithDampener", () => {
	expect(isReportSafeWithDampener([7, 6, 4, 2, 1])).toBe(true);
	expect(isReportSafeWithDampener([1, 2, 7, 8, 9])).toBe(false);
	expect(isReportSafeWithDampener([9, 7, 6, 2, 1])).toBe(false);
	expect(isReportSafeWithDampener([1, 3, 2, 4, 5])).toBe(true);
	expect(isReportSafeWithDampener([8, 6, 4, 4, 1])).toBe(true);
	expect(isReportSafeWithDampener([1, 3, 6, 7, 9])).toBe(true);
});

test("part2", () => {
	expect(part2(reports)).toBe(4);
});
