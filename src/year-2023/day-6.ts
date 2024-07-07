import invariant from "tiny-invariant";
import { fetchInputFile, product, runSolution, sum } from "../util";
import { kMaxLength } from "buffer";

export type Input = [number, number][];

export function parseInputFile(inputFile: string): Input {
  const lines = inputFile.trim().split("\n");

  const times = lines[0].split(/\s+/).slice(1).map(Number);
  const distances = lines[1].split(/\s+/).slice(1).map(Number);

  return times.map((time, i) => {
    return [time, distances[i]];
  });
}

export function part1(races: Input): number {
  const raceWins = races.map(([raceTime, raceDistance]) => {
    let minHold = 0;
    for (; minHold <= raceTime; minHold++) {
      const distance = (raceTime - minHold) * minHold;
      if (distance > raceDistance) break;
    }

    let maxHold = minHold;
    for (; maxHold <= raceTime; maxHold++) {
      const distance = (raceTime - maxHold) * maxHold;
      if (distance <= raceDistance) break;
    }

    return maxHold - minHold;
  });

  return product(raceWins);
}

export function part2(races: Input): number {
  const raceTime = Number(
    races
      .map(([time]) => time)
      .map(String)
      .join("")
  );
  const raceDistance = Number(
    races
      .map(([, distance]) => distance)
      .map(String)
      .join("")
  );

  let minHold = 0;
  for (; minHold <= raceTime; minHold++) {
    const distance = (raceTime - minHold) * minHold;
    if (distance > raceDistance) break;
  }

  let maxHold = minHold;
  for (; maxHold <= raceTime; maxHold++) {
    const distance = (raceTime - maxHold) * maxHold;
    if (distance <= raceDistance) break;
  }

  return maxHold - minHold;
}

runSolution<Input>(() => fetchInputFile(2023, 6), parseInputFile, part1, part2);
