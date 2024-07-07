import { fetchInputFile, runSolution, sum } from "../util";

type Input = { turn: "R" | "L"; dist: number }[];

export function parseInputFile(inputFile: string): Input {
	return inputFile
		.trim()
		.split(", ")
		.map((ab) => ({
			turn: <"R" | "L">ab.charAt(0),
			dist: Number(ab.slice(1)),
		}));
}

type Facing = "north" | "east" | "south" | "west";

const facingAfterTurn: Record<Facing, { R: Facing; L: Facing }> = {
	north: { R: "east", L: "west" },
	east: { R: "south", L: "north" },
	south: { R: "west", L: "east" },
	west: { R: "north", L: "south" },
};

export function part1(input: Input): number {
	let x = 0;
	let y = 0;
	let facing: Facing = "north";

	for (const { turn, dist } of input) {
		facing = facingAfterTurn[facing][turn];
		if (facing === "north") {
			y += dist;
		} else if (facing === "east") {
			x += dist;
		} else if (facing === "south") {
			y -= dist;
		} else if (facing === "west") {
			x -= dist;
		}
	}

	return Math.abs(x) + Math.abs(y);
}

export function part2(input: Input): number {
	let x = 0;
	let y = 0;
	let facing: "north" | "east" | "south" | "west" = "north";
	const visited = new Set();

	stop: for (const { turn, dist } of input) {
		facing = facingAfterTurn[facing][turn];
		if (facing === "north") {
			y += dist;
		} else if (facing === "east") {
			x += dist;
		} else if (facing === "south") {
			y -= dist;
		} else if (facing === "west") {
			x -= dist;
		}

		for (let i = 0; i < dist; i++) {
			if (facing === "north") {
				y++;
			} else if (facing === "east") {
				x++;
			} else if (facing === "south") {
				y--;
			} else if (facing === "west") {
				x--;
			}
			if (visited.has(`${x},${y}`)) {
				break stop;
			}
			visited.add(`${x},${y}`);
		}
	}

	return Math.abs(x) + Math.abs(y);
}

runSolution<Input>(() => fetchInputFile(2016, 1), parseInputFile, part1, part2);
