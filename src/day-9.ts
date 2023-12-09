import { fetchInputFile, runSolution, sum } from "./util";

export type Input = number[][];

export function parseInputFile(inputFile: string): Input {
  return inputFile
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
}

const pairs = <T>(arr: T[]): [T, T][] =>
  arr.slice(0, -1).map((v, i) => [v, arr[i + 1]]);

export function part1(histories: Input): number {
  const extrapolatedValues = histories.map((history) => {
    const diffs = [history];
    let pairDiffs = diffs[0];
    do {
      pairDiffs = pairs(pairDiffs).map(([a, b]) => b - a);
      diffs.push(pairDiffs);
    } while (pairDiffs.some((x) => x !== 0));

    return sum(diffs.map((diff) => diff.at(-1)!));
  });

  return sum(extrapolatedValues);
}

export function part2(histories: Input): number {
  const extrapolatedValues = histories.map((history) => {
    const diffs = [history];
    let pairDiffs = diffs[0];
    do {
      pairDiffs = pairs(pairDiffs).map(([a, b]) => b - a);
      diffs.push(pairDiffs);
    } while (pairDiffs.some((x) => x !== 0));

    return diffs.toReversed().reduce((res, diff) => diff.at(0)! - res, 0);
  });

  return sum(extrapolatedValues);
}

runSolution<Input>(() => fetchInputFile(2023, 9), parseInputFile, part1, part2);
