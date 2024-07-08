import { fetchInputFile, runSolution, sum } from "../util";

type Input = [number, number, number][];
type Output = number;

export function parseInputFile(inputFile: string): Input {
	return inputFile
		.trim()
		.split("\n")
		.map(
			(line) => <[number, number, number]>line.trim().split(/\s+/).map(Number),
		);
}

export function part1(input: Input): Output {
	return input.filter(([a, b, c]) => a + b > c && b + c > a && a + c > b)
		.length;
}

export function part2(input: Input): Output {
	const newInput = [];

	for (let i = 0; i < Math.floor(input.length / 3); i++) {
		newInput.push([input[3 * i][0], input[3 * i + 1][0], input[3 * i + 2][0]]);
		newInput.push([input[3 * i][1], input[3 * i + 1][1], input[3 * i + 2][1]]);
		newInput.push([input[3 * i][2], input[3 * i + 1][2], input[3 * i + 2][2]]);
	}

	return newInput.filter(([a, b, c]) => a + b > c && b + c > a && a + c > b)
		.length;
}

runSolution<Input>(() => fetchInputFile(2016, 3), parseInputFile, part1, part2);
