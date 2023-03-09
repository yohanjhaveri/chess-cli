import { PIECES } from "../../constants";
import { Piece } from "./Piece";
import { Coordinate, PieceColor, PieceDisplay } from "../../types";

export class King extends Piece {
  constructor(color: PieceColor) {
    const display = {
      W: PIECES.WK,
      B: PIECES.BK,
    }[color] as PieceDisplay;

    super(color, -1, display);
  }

  getAllMoves(position: Coordinate): Coordinate[] {
    return this.generatePositions(position);
  }

  getAllAttacks(position: Coordinate): Coordinate[] {
    return this.generatePositions(position);
  }

  private generatePositions([x, y]: Coordinate): Coordinate[] {
    const offsets: Coordinate[] = [
      [-1, -1], // up left
      [1, -1], // down left
      [-1, 1], // up right
      [1, 1], // down right
      [-1, 0], // up
      [1, 0], // down
      [0, -1], // left
      [0, 1], // right
    ];

    return offsets.map(([dx, dy]) => [x + dx, y + dy]);
  }
}