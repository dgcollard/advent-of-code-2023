import { expect, test } from "vitest";
import { Input, parseInputFile, part1, part2 } from "./day-8";
import { trim } from "../util";

const map: Input = {
  stepsOrder: ["R", "L"],
  stepsMap: {
    AAA: { l: "BBB", r: "CCC" },
    BBB: { l: "DDD", r: "EEE" },
    CCC: { l: "ZZZ", r: "GGG" },
    DDD: { l: "DDD", r: "DDD" },
    EEE: { l: "EEE", r: "EEE" },
    GGG: { l: "GGG", r: "GGG" },
    ZZZ: { l: "ZZZ", r: "ZZZ" },
  },
};

test("parseInputFile", () => {
  expect(
    parseInputFile(trim`
      RL

      AAA = (BBB, CCC)
      BBB = (DDD, EEE)
      CCC = (ZZZ, GGG)
      DDD = (DDD, DDD)
      EEE = (EEE, EEE)
      GGG = (GGG, GGG)
      ZZZ = (ZZZ, ZZZ)
    `)
  ).toEqual(map);
});

test("part1", () => {
  expect(part1(map)).toBe(2);
});

test("part2", () => {
  expect(
    part2(
      parseInputFile(
        trim`
          LR

          11A = (11B, XXX)
          11B = (XXX, 11Z)
          11Z = (11B, XXX)
          22A = (22B, XXX)
          22B = (22C, 22C)
          22C = (22Z, 22Z)
          22Z = (22B, 22B)
          XXX = (XXX, XXX)
        `
      )
    )
  ).toBe(6);
});
