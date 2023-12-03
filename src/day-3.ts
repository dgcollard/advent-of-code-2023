import { fetchInputFile, product, runSolution, sum } from "./util";

type Input = string[][];

export function parseInputFile(inputFile: string): Input {
  return inputFile
    .trim()
    .split("\n")
    .map((line) => [...line.split(""), "."]); // terminate every line with a . please
}

const isDigit = (char: string) => "0123456789".includes(char);
const isSymbol = (char: string) => !isDigit(char) && char != ".";

export function part1(engineSchematic: Input): number {
  const width = engineSchematic[0].length;
  const height = engineSchematic.length;

  const symbolPositions = new Set();

  for (let iy = 0; iy < height; iy++) {
    for (let ix = 0; ix < width; ix++) {
      if (isSymbol(engineSchematic[iy][ix])) {
        symbolPositions.add(`${ix},${iy}`);
      }
    }
  }

  let currentNumber = "";
  let currentNumberAdjacentToSymbol = false;

  let totalNumbers = 0;

  for (let iy = 0; iy < height; iy++) {
    for (let ix = 0; ix < width; ix++) {
      if (isDigit(engineSchematic[iy][ix])) {
        currentNumber += engineSchematic[iy][ix];

        if (
          [
            `${ix - 1},${iy - 1}`,
            `${ix},${iy - 1}`,
            `${ix + 1},${iy - 1}`,
            `${ix - 1},${iy}`,
            `${ix + 1},${iy}`,
            `${ix - 1},${iy + 1}`,
            `${ix},${iy + 1}`,
            `${ix + 1},${iy + 1}`,
          ].some((position) => symbolPositions.has(position))
        ) {
          currentNumberAdjacentToSymbol = true;
        }
      } else if (currentNumber) {
        if (currentNumberAdjacentToSymbol) {
          totalNumbers += Number(currentNumber);
        }

        currentNumber = "";
        currentNumberAdjacentToSymbol = false;
      }
    }
  }

  return totalNumbers;
}

const isGear = (chr: string) => chr === "*";

export function part2(engineSchematic: Input): number {
  const width = engineSchematic[0].length;
  const height = engineSchematic.length;

  const gearPositions = new Set();
  const gearToAdjacentNumbers: { [gear: string]: string[] } = {}; // map gears to array of adjacent numbers

  for (let iy = 0; iy < height; iy++) {
    for (let ix = 0; ix < width; ix++) {
      if (isGear(engineSchematic[iy][ix])) {
        gearPositions.add(`${ix},${iy}`);
      }
    }
  }

  let currentNumber = "";
  let currentNumberAdjacentToGears = new Set<string>();

  for (let iy = 0; iy < height; iy++) {
    for (let ix = 0; ix < width; ix++) {
      if (isDigit(engineSchematic[iy][ix])) {
        currentNumber += engineSchematic[iy][ix];

        [
          `${ix - 1},${iy - 1}`,
          `${ix},${iy - 1}`,
          `${ix + 1},${iy - 1}`,
          `${ix - 1},${iy}`,
          `${ix + 1},${iy}`,
          `${ix - 1},${iy + 1}`,
          `${ix},${iy + 1}`,
          `${ix + 1},${iy + 1}`,
        ]
          .filter((position) => gearPositions.has(position))
          .forEach((gear) => {
            currentNumberAdjacentToGears.add(gear);
          });
      } else if (currentNumber) {
        currentNumberAdjacentToGears.forEach((gear) => {
          gearToAdjacentNumbers[gear] ||= [];
          gearToAdjacentNumbers[gear].push(currentNumber);
        });

        currentNumber = "";
        currentNumberAdjacentToGears = new Set();
      }
    }
  }

  const gearRatios = Object.values(gearToAdjacentNumbers)
    .filter((numbers) => numbers.length === 2)
    .map((numbers) => product(numbers.map(Number)));

  return sum(gearRatios);
}

runSolution<Input>(() => fetchInputFile(2023, 3), parseInputFile, part1, part2);
