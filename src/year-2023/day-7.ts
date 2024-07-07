import invariant from "tiny-invariant";
import { fetchInputFile, product, runSolution, sum } from "../util";

export type Input = [string, number][];

export function parseInputFile(inputFile: string): Input {
  return inputFile
    .trim()
    .split("\n")
    .map((line) => {
      const [hand, bid] = line.split(" ");
      return [hand, Number(bid)];
    });
}

export function handType(hand: string): number {
  const cards = hand.split("");
  cards.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  function eq(x0: number, ...xs: number[]): boolean {
    // true if all cards are === to first card
    return xs.reduce((res, x) => cards[x] === cards[x0] && res, true);
  }

  if (eq(0, 1, 2, 3, 4)) {
    return 0; // five of a kind
  } else if (eq(0, 1, 2, 3) || eq(1, 2, 3, 4)) {
    return 1; // four of a kind
  } else if ((eq(0, 1, 2) && eq(3, 4)) || (eq(0, 1) && eq(2, 3, 4))) {
    return 2; // full house
  } else if (eq(0, 1, 2) || eq(1, 2, 3) || eq(2, 3, 4)) {
    return 3; // three of a kind
  } else if ((eq(0, 1) && (eq(2, 3) || eq(3, 4))) || (eq(1, 2) && eq(3, 4))) {
    return 4; // two pair
  } else if (eq(0, 1) || eq(1, 2) || eq(2, 3) || eq(3, 4)) {
    return 5; // one pair
  } else {
    return 6; // high card
  }
}

export function part1(hands: Input): number {
  const cardOrder = "AKQJT98765432";

  const winnings = hands
    .toSorted(([handA], [handB]) => {
      const typeA = handType(handA);
      const typeB = handType(handB);

      if (typeA === typeB) {
        for (let i = 0; i < handA.length; i++) {
          const ai = cardOrder.indexOf(handA.charAt(i));
          const bi = cardOrder.indexOf(handB.charAt(i));
          if (ai === bi) {
            continue;
          }
          return bi - ai;
        }
        return 0;
      }

      return typeB - typeA;
    })
    .map(([, bid], i) => bid * (i + 1));

  return sum(winnings);
}

// trial replacing jokers with each other card and keep the strongest type
export function handTypeJoker(hand: string) {
  const jokerCards = "AKQT98765432".split("");

  return Math.min(
    ...jokerCards.map((jokerCard) => handType(hand.replaceAll("J", jokerCard)))
  );
}

export function part2(hands: Input): number {
  const cardOrder = "AKQT98765432J";

  const winnings = hands
    .toSorted(([handA], [handB]) => {
      const typeA = handTypeJoker(handA);
      const typeB = handTypeJoker(handB);

      if (typeA === typeB) {
        for (let i = 0; i < handA.length; i++) {
          const ai = cardOrder.indexOf(handA.charAt(i));
          const bi = cardOrder.indexOf(handB.charAt(i));
          if (ai === bi) {
            continue;
          }
          return bi - ai;
        }
        return 0;
      }

      return typeB - typeA;
    })
    .map(([, bid], i) => bid * (i + 1));

  return sum(winnings);
}

runSolution<Input>(() => fetchInputFile(2023, 7), parseInputFile, part1, part2);
