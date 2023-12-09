import { fetchInputFile, lcm, product, runSolution, sum } from "./util";

export type Input = {
  stepsOrder: string[];
  stepsMap: { [currentStep: string]: { l: string; r: string } };
};

export function parseInputFile(inputFile: string): Input {
  const lines = inputFile.trim().split("\n");

  const stepsOrder = lines[0].split("");

  const stepsMap = Object.fromEntries(
    lines.slice(2).map((line) => {
      const match = line.match(/(?<from>\w+) = \((?<l>\w+), (?<r>\w+)\)/);

      return [
        match!.groups!.from,
        { l: match!.groups!.l, r: match!.groups!.r },
      ];
    })
  );

  return { stepsOrder, stepsMap };
}

export function part1({ stepsOrder, stepsMap }: Input): number {
  let i = 0;
  let pos = "AAA";
  while (pos !== "ZZZ") {
    const direction = stepsOrder[i++ % stepsOrder.length];
    pos =
      direction === "R"
        ? stepsMap[pos].r
        : direction === "L"
        ? stepsMap[pos].l
        : "X";
  }
  return i;
}

export function part2({ stepsOrder, stepsMap }: Input): number {
  let i = 0;
  let positions = Object.entries(stepsMap)
    .filter(([pos]) => pos.charAt(2) === "A")
    .map(([pos]) => pos);

  const scores = positions.map((eachPos) => {
    let i = 0;
    let pos = eachPos;
    while (pos.charAt(2) !== "Z") {
      const direction = stepsOrder[i++ % stepsOrder.length];
      pos =
        direction === "R"
          ? stepsMap[pos].r
          : direction === "L"
          ? stepsMap[pos].l
          : "X";
    }
    return i;
  });

  return scores.reduce(lcm, 1);
}

runSolution<Input>(() => fetchInputFile(2023, 8), parseInputFile, part1, part2);
