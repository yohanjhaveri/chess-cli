import { PIECES } from "../../constants";
import { Piece } from "./Piece";
import { Coordinate, PieceColor } from "../../types";

export class Rook extends Piece {
  constructor(color: PieceColor) {
    const name = "R";
    const points = 5;
    const display = PIECES[name];

    super(name, color, points, display);
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
      moves.push([x - index, y]); // up
      moves.push([x + index, y]); // down
      moves.push([x, y - index]); // left
      moves.push([x, y + index]); // right
    }

    return moves;
  }
}
