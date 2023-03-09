import { PIECES } from "../../constants";
import { Piece } from "./Piece";
import { Coordinate, PieceColor, PieceDisplay } from "../../types";

export class Queen extends Piece {
  constructor(color: PieceColor) {
    const display = {
      W: PIECES.WQ,
      B: PIECES.BQ,
    }[color] as PieceDisplay;

    super(color, 9, display);
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
      moves.push([x - index, y]); // up
      moves.push([x + index, y]); // down
      moves.push([x, y - index]); // left
      moves.push([x, y + index]); // right
    }

    return moves;
  }
}
