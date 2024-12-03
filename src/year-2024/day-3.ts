import { fetchInputFile, runSolution, sum } from "../util";

export type Input = string;

export function parseInputFile(inputFile: string): Input {
	return inputFile.trim();
}

export function part1(input: Input): number {
	const matches = input.matchAll(/mul\((?<a>\d+),(?<b>\d+)\)/g);

	let total = 0;

	for (const match of matches) {
		const a = Number(match?.groups?.a);
		const b = Number(match?.groups?.b);
		total += a * b;
	}

	return total;
}

export function part2(input: Input): number {
	const matches = input.matchAll(
		/(do\(\)|don\'t\(\)|mul\((?<a>\d+),(?<b>\d+)\))/g,
	);

	let total = 0;
	let on = true;

	for (const match of matches) {
		const instruction = match[0];

		// order matters, `do` is a prefix of `don't`
		if (instruction.startsWith("don't")) {
			on = false;
		} else if (instruction.startsWith("do")) {
			on = true;
		} else if (instruction.startsWith("mul") && on) {
			const a = Number(match?.groups?.a);
			const b = Number(match?.groups?.b);
			total += a * b;
		}
	}

	return total;
}

runSolution<Input>(() => fetchInputFile(2024, 3), parseInputFile, part1, part2);
