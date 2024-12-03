import { expect, test } from "vitest";
import { part1, part2 } from "./day-3";

test("part1", () => {
	expect(
		part1(
			"xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
		),
	).toBe(161);
});

test("part2", () => {
	expect(
		part2(
			"xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
		),
	).toBe(48);
});
