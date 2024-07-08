import { fetchInputFile, runSolution, sum } from "../util";

type Move = "U" | "R" | "D" | "L";
type Button = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Button2 =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "A"
	| "B"
	| "C"
	| "D";

type Input = Move[][];
type Output = string;

export function parseInputFile(inputFile: string): Input {
	return inputFile
		.trim()
		.split("\n")
		.map((line) => <Move[]>line.split(""));
}

export function part1(input: Input): Output {
	let button: Button = "5";
	const code: Button[] = [];

	/*
	1 2 3
	4 5 6
	7 8 9
	*/

	const buttonAfterMove: Record<Button, Record<Move, Button>> = {
		1: { U: "1", R: "2", D: "4", L: "1" },
		2: { U: "2", R: "3", D: "5", L: "1" },
		3: { U: "3", R: "3", D: "6", L: "2" },
		4: { U: "1", R: "5", D: "7", L: "4" },
		5: { U: "2", R: "6", D: "8", L: "4" },
		6: { U: "3", R: "6", D: "9", L: "5" },
		7: { U: "4", R: "8", D: "7", L: "7" },
		8: { U: "5", R: "9", D: "8", L: "7" },
		9: { U: "6", R: "9", D: "9", L: "8" },
	};

	for (const line of input) {
		for (const move of line) {
			button = buttonAfterMove[button][move];
		}
		code.push(button);
	}

	return code.join("");
}

export function part2(input: Input): Output {
	let button: Button2 = "5";
	const code: Button2[] = [];

	/*
			1
		2 3 4
	5 6 7 8 9
		A B C
			D
	*/

	const buttonAfterMove: Record<Button2, Record<Move, Button2>> = {
		1: { U: "1", R: "1", D: "3", L: "1" },
		2: { U: "2", R: "3", D: "6", L: "2" },
		3: { U: "1", R: "4", D: "7", L: "2" },
		4: { U: "4", R: "4", D: "8", L: "3" },
		5: { U: "5", R: "6", D: "5", L: "5" },
		6: { U: "2", R: "7", D: "A", L: "5" },
		7: { U: "3", R: "8", D: "B", L: "6" },
		8: { U: "4", R: "9", D: "C", L: "7" },
		9: { U: "9", R: "9", D: "9", L: "8" },
		A: { U: "6", R: "B", D: "A", L: "A" },
		B: { U: "7", R: "C", D: "D", L: "A" },
		C: { U: "8", R: "C", D: "C", L: "B" },
		D: { U: "B", R: "D", D: "D", L: "D" },
	};

	for (const line of input) {
		for (const move of line) {
			button = buttonAfterMove[button][move];
		}
		code.push(button);
	}

	return code.join("");
}

runSolution<Input>(() => fetchInputFile(2016, 2), parseInputFile, part1, part2);
