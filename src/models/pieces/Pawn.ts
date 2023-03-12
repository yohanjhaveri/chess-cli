import { PIECES } from "../../constants";
import { Piece } from "./Piece";
import { Coordinate, PieceColor } from "../../types";

export class Pawn extends Piece {
  constructor(color: PieceColor) {
    super("P", color, 1, PIECES.P);
  }

  getAllMoves([x, y]: Coordinate) {
    return {
      W: [[x + 1, y]],
      B: [[x - 1, y]],
    }[this.color] as Coordinate[];
  }

  getAllAttacks([x, y]: Coordinate) {
    return {
      W: [
        [x + 1, y - 1],
        [x + 1, y + 1],
      ],
      B: [
        [x - 1, y - 1],
        [x - 1, y + 1],
      ],
    }[this.color] as Coordinate[];
  }
}
