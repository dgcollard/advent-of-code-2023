import { expect, test } from "vitest";
import { trim } from "../util";
import { parseInputFile, part1, part2 } from "./day-4";

const cards = [
	{
		winners: [41, 48, 83, 86, 17],
		picks: [83, 86, 6, 31, 17, 9, 48, 53],
	},
	{
		winners: [13, 32, 20, 16, 61],
		picks: [61, 30, 68, 82, 17, 32, 24, 19],
	},
	{
		winners: [1, 21, 53, 59, 44],
		picks: [69, 82, 63, 72, 16, 21, 14, 1],
	},
	{
		winners: [41, 92, 73, 84, 69],
		picks: [59, 84, 76, 51, 58, 5, 54, 83],
	},
	{
		winners: [87, 83, 26, 28, 32],
		picks: [88, 30, 70, 12, 93, 22, 82, 36],
	},
	{
		winners: [31, 18, 13, 56, 72],
		picks: [74, 77, 10, 23, 35, 67, 36, 11],
	},
];

test("parseInputFile", () => {
	expect(
		parseInputFile(trim`
      Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
      Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
      Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
      Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
      Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
      Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
    `),
	).toEqual(cards);
});

test.skip("part1", () => {
	expect(part1(cards)).toBe(13);
});

test("part2", () => {
	expect(part2(cards)).toBe(30);
});
