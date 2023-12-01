import { fetchInputFile, runSolution, sum } from "./util";

type Input = string[];

export function parseInputFile(inputFile: string): Input {
  return inputFile.trim().split("\n");
}

const isDigit = (char: string) => "0123456789".includes(char);

export function part1(lines: Input): number {
  const calibrationValues = lines.map((line) => {
    const chars = line.split("");
    const firstDigit = chars.find(isDigit);
    const lastDigit = chars.reverse().find(isDigit);
    return Number(`${firstDigit}${lastDigit}`);
  });

  return sum(calibrationValues);
}

export function part2(lines: Input): number {
  // filter the string, keeping only digits and words converted to digits
  const replaceDigitWords = (str: string) => {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
      if (isDigit(str.charAt(i))) {
        newStr += str.charAt(i);
      }

      [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ].forEach((word, digit) => {
        if (str.substring(i, i + word.length) === word) {
          newStr += `${digit}`;
        }
      });
    }

    return newStr;
  };

  const calibrationValues = lines.map((line) => {
    const chars = replaceDigitWords(line).split("");
    const firstDigit = chars.find(isDigit);
    const lastDigit = chars.reverse().find(isDigit);
    return Number(`${firstDigit}${lastDigit}`);
  });

  return sum(calibrationValues);
}

runSolution<Input>(() => fetchInputFile(2023, 1), parseInputFile, part1, part2);
