import { PIECES } from "../../constants";
import { Piece } from "./Piece";
import { Coordinate, PieceColor, PieceDisplay } from "../../types";

export class Knight extends Piece {
  constructor(color: PieceColor) {
    const display = {
      W: PIECES.WN,
      B: PIECES.BN,
    }[color] as PieceDisplay;

    super(color, 3, display);
  }

  getAllMoves(position: Coordinate): Coordinate[] {
    return this.generatePositions(position);
  }

  getAllAttacks(position: Coordinate): Coordinate[] {
    return this.generatePositions(position);
  }

  private generatePositions([x, y]: Coordinate): Coordinate[] {
    const offsets: Coordinate[] = [
      [-2, -1], // far up, left
      [2, -1], // far down, left
      [-1, -2], // up, far left
      [1, -2], // down, far left
      [-2, 1], // far up, right
      [2, 1], // far down, right
      [-1, 2], // up, far right
      [1, 2], // down, far right
    ];

    return offsets.map(([dx, dy]) => [x + dx, y + dy]);
  }
}
