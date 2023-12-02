import { fetchInputFile, product, runSolution, sum } from "./util";

type Input = {
  [gameId: number]: Array<{
    red: number;
    green: number;
    blue: number;
  }>;
};

export function parseInputFile(inputFile: string): Input {
  const parseGame = (game: string) => {
    const match = game.match(/^Game (\d+): (.*)+/);

    const parseTurn = (turn: string) => {
      const balls = turn.split(", ").map((ball: string) => {
        const [amount, color] = ball.split(" ");
        return [color as "red" | "green" | "blue", Number(amount)];
      });
      return {
        red: 0,
        green: 0,
        blue: 0,
        ...Object.fromEntries(balls),
      };
    };

    const gameId = match![1];
    const turns = match![2].split("; ").map(parseTurn);

    return [gameId, turns];
  };

  const parsedInputFile = inputFile.trim().split("\n").map(parseGame);

  return Object.fromEntries(parsedInputFile);
}

export function part1(games: Input): number {
  const maxRed = 12,
    maxGreen = 13,
    maxBlue = 14;

  const possibleGameIds = Object.entries(games)
    .filter(([, turns]) =>
      turns.every(
        ({ red, green, blue }) =>
          red <= maxRed && green <= maxGreen && blue <= maxBlue
      )
    )
    .map(([gameId]) => Number(gameId));

  return sum(possibleGameIds);
}

export function part2(games: Input): number {
  const powers = Object.entries(games).map(([, turns]) => {
    const gameMinColors = turns.reduce(
      ([red, green, blue], turn) => [
        Math.max(red, turn.red),
        Math.max(green, turn.green),
        Math.max(blue, turn.blue),
      ],
      [0, 0, 0]
    );
    return product(gameMinColors);
  });

  return sum(powers);
}

runSolution<Input>(() => fetchInputFile(2023, 2), parseInputFile, part1, part2);
