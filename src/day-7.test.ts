import { expect, test } from "vitest";
import {
  Input,
  handType,
  handTypeJoker,
  parseInputFile,
  part1,
  part2,
} from "./day-7";
import { trim } from "./util";

const hands: Input = [
  ["32T3K", 765],
  ["T55J5", 684],
  ["KK677", 28],
  ["KTJJT", 220],
  ["QQQJA", 483],
];

test("parseInputFile", () => {
  expect(
    parseInputFile(trim`
      32T3K 765
      T55J5 684
      KK677 28
      KTJJT 220
      QQQJA 483
    `)
  ).toEqual(hands);
});

test("handType", () => {
  expect(handType("AAAAA")).toBe(0); // five of a kind
  expect(handType("A8AAA")).toBe(1); // four of a kind
  expect(handType("AA00A")).toBe(2); // full house
  expect(handType("J45JJ")).toBe(3); // three of a kind
  expect(handType("QKQK1")).toBe(4); // two pair
  expect(handType("12JJ3")).toBe(5); // one pair
  expect(handType("12345")).toBe(6); // high card
});

test("part1", () => {
  expect(part1(hands)).toBe(6440);
});

test("handTypeJoker", () => {
  expect(handTypeJoker("T55J5")).toBe(1);
  expect(handTypeJoker("KTJJT")).toBe(1);
  expect(handTypeJoker("QQQJA")).toBe(1);
});

test("part2", () => {
  expect(part2(hands)).toBe(71503);
});
