import { PIECES } from "../../constants";
import { Piece } from "./Piece";
import { Coordinate, PieceColor } from "../../types";

export class Bishop extends Piece {
  constructor(color: PieceColor) {
    super("B", color, 3, PIECES.B);
  }

  getAllMoves(position: Coordinate): Coordinate[] {
    return this.generatePositions(position);
  }

  getAllAttacks(position: Coordinate): Coordinate[] {
    return this.generatePositions(position);
  }

  private generatePositions([x, y]: Coordinate): Coordinate[] {
    const moves: Coordinate[] = [];

    for (let index = 1; index < 8; index++) {
      moves.push([x - index, y - index]); // up left
      moves.push([x + index, y - index]); // down left
      moves.push([x - index, y + index]); // up right
      moves.push([x + index, y + index]); // down right
    }

    return moves;
  }
}
