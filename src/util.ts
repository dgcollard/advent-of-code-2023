import "dotenv/config";
import fs from "node:fs";
import invariant from "tiny-invariant";

export async function fetchInputFile(
	year: number,
	day: number,
): Promise<string> {
	invariant(!!process.env.AOC_SESSION_ID, "AOC_SESSION_ID is not set");

	const cacheDir = "./.aoc";
	const cacheFile = `${cacheDir}/year-${year}-day-${day}-input.txt`;

	// create cache dir if it does not exist
	if (!fs.existsSync(cacheDir)) {
		fs.mkdirSync(cacheDir);
	}

	// return contents of cached file if it exists
	if (fs.existsSync(cacheFile)) {
		const input = fs.readFileSync(cacheFile, { encoding: "utf-8" });
		return input;
	}

	const res = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
		headers: {
			cookie: `session=${process.env.AOC_SESSION_ID}`,
		},
	});

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	const input = await res.text();
	fs.writeFileSync(cacheFile, input, { encoding: "utf-8" });

	return input;
}

export async function runSolution<InputT>(
	fetchInputFile: () => Promise<string>,
	parseInputFile: (input: string) => InputT,
	part1: (parsedInput: InputT) => number,
	part2: (parsedInput: InputT) => number,
) {
	if (process.env.TEST) return;

	const inputFile = await fetchInputFile();
	const inputParsed = await parseInputFile(inputFile);

	console.log(`part 1: ${part1(inputParsed)}`);
	console.log(`part 2: ${part2(inputParsed)}`);
}

/* some useful functions */

export function add(a: number, b: number): number {
	return a + b;
}

export function multiply(a: number, b: number): number {
	return a * b;
}

export function sum(numbers: number[]): number {
	return numbers.reduce(add, 0);
}

export function product(numbers: number[]): number {
	return numbers.reduce(multiply, 1);
}

export function gcd(a: number, b: number): number {
	if (!b) return a;
	return gcd(b, a % b);
}

export function lcm(a: number, b: number): number {
	return (a * b) / gcd(a, b);
}

export function reverse(str: string): string {
	let newStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str.charAt(i);
	}
	return newStr;
}

export function trim(strs: TemplateStringsArray) {
	return strs
		.flatMap((s) =>
			s
				.trim()
				.split("\n")
				.map((t) => t.trim()),
		)
		.join("\n");
}

export function pairs<T>(arr: T[]): [T, T][] {
	return arr.slice(0, -1).map((v, i) => [v, arr[i + 1]]);
}
