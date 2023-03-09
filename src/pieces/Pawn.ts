import { Piece } from "./Piece";
import { Coordinate } from "../types";

export class Pawn extends Piece {
  constructor() {
    super("p", 1);
  }

  getAllMoves([x, y]: Coordinate): Coordinate[] {
    return {
      W: [[x, y + 1]],
      B: [[x, y - 1]],
    }[this.color] as Coordinate[];
  }

  getAllAttacks([x, y]: Coordinate): Coordinate[] {
    return {
      W: [
        [x - 1, y + 1],
        [x + 1, y + 1],
      ],
      B: [
        [x - 1, y - 1],
        [x + 1, y - 1],
      ],
    }[this.color] as Coordinate[];
  }
}
