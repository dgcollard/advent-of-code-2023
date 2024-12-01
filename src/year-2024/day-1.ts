import invariant from "tiny-invariant";
import { fetchInputFile, runSolution, sum } from "../util";

export type Input = [number[], number[]];

export function parseInputFile(inputFile: string): Input {
	return inputFile
		.trim()
		.split("\n")
		.map((line) => line.split(/\s+/))
		.reduce<Input>(
			([locationListA, locationListB], [a, b]) => [
				[...locationListA, Number(a)],
				[...locationListB, Number(b)],
			],
			[[], []],
		);
}

export function part1([locationListA, locationListB]: Input): number {
	invariant(locationListA.length === locationListB.length);

	locationListA.sort();
	locationListB.sort();

	const distances = locationListA
		.map((a, i) => a - locationListB[i])
		.map(Math.abs);

	return sum(distances);
}

export function part2([locationListA, locationListB]: Input): number {
	const appearances: { [location: string]: number } = {};

	for (const b of locationListB) {
		appearances[b] = appearances[b] ? appearances[b] + 1 : 1;
	}

	const similarities = locationListA.map((a) => a * (appearances[a] ?? 0));

	return sum(similarities);
}

runSolution<Input>(() => fetchInputFile(2024, 1), parseInputFile, part1, part2);
