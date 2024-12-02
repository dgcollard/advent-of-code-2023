import { fetchInputFile, pairs, runSolution } from "../util";

export type Input = number[][];

export function parseInputFile(inputFile: string): Input {
	return inputFile
		.trim()
		.split("\n")
		.map((line) => line.split(/\s+/).map(Number));
}

export function isReportSafe(report: number[]) {
	const reportPairs = pairs(report);

	return (
		reportPairs.every(([a, b]) => a < b && b <= a + 3) ||
		reportPairs.every(([a, b]) => a > b && b >= a - 3)
	);
}

export function part1(reports: Input): number {
	const safeReports = reports.filter(isReportSafe);

	return safeReports.length;
}

export function isReportSafeWithDampener(report: number[]) {
	if (isReportSafe(report)) return true;

	const reportsWithDampener = report.map((_, i, arr) => [
		...arr.slice(0, i),
		...arr.slice(i + 1),
	]);

	return reportsWithDampener.some(isReportSafe);
}

export function part2(reports: Input): number {
	const safeReportsWithDampener = reports.filter(isReportSafeWithDampener);

	return safeReportsWithDampener.length;
}

runSolution<Input>(() => fetchInputFile(2024, 2), parseInputFile, part1, part2);
