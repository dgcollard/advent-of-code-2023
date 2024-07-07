import invariant from "tiny-invariant";
import { fetchInputFile, runSolution, sum } from "../util";

type Input = { winners: number[]; picks: number[] }[];

export function parseInputFile(inputFile: string): Input {
  return inputFile
    .trim()
    .split("\n")
    .map((line) => {
      const match = line.match(/^Card\s+\d+: (.*) \| (.*)$/);
      invariant(match);

      return {
        winners: match[1].split(" ").filter(Boolean).map(Number),
        picks: match[2].split(" ").filter(Boolean).map(Number),
      };
    });
}

export function part1(cards: Input): number {
  const cardScores = cards.map(({ winners, picks }) => {
    const matched = picks.filter((n) => winners.includes(n));
    const score = matched.length > 0 ? Math.pow(2, matched.length - 1) : 0;
    return score;
  });

  return sum(cardScores);
}

export function part2(cards: Input): number {
  const cardScores = cards.map(({ winners, picks }) => {
    const matched = picks.filter((n) => winners.includes(n));
    return matched.length;
  });

  const cardTotals = new Array(cardScores.length).fill(1);

  for (let i = 0; i < cardTotals.length; i++) {
    for (let j = 0; j < cardScores[i]; j++) {
      cardTotals[i + j + 1] += cardTotals[i];
    }
  }

  return sum(cardTotals);
}

runSolution<Input>(() => fetchInputFile(2023, 4), parseInputFile, part1, part2);
