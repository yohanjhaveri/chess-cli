import { Coordinate, PieceColor, PiecePoint } from "../types";

export abstract class Piece {
  public readonly color: PieceColor;
  public readonly points: PiecePoint;
  public readonly display: string;

  public position: Coordinate;
  public validMoves: Coordinate[];
  public validAttacks: Coordinate[];

  constructor(display: string, points: PiecePoint) {
    this.display = display;
    this.points = points;
  }

  abstract getAllMoves(position: Coordinate): Coordinate[];
  abstract getAllAttacks(position: Coordinate): Coordinate[];
  
  private filterValidSquares(squares) {
    return squares.filter((m) => {
      if (m[0] < 0 || m[0] > 7) return false;
      if (m[1] < 0 || m[1] > 7) return false;

      return true;
    });
  }

  private getValidMoves() {
    const moves = this.getAllMoves(this.position);
    return this.filterValidSquares(moves)
  }

  private getValidAttacks() {
    const attackingSquares = this.getAllAttacks(this.position);
    return this.filterValidSquares(attackingSquares);
  }

  public move(position: Coordinate) {
    this.position = position;
    this.validMoves = this.getValidMoves();
    this.validAttacks = this.getValidAttacks();
  }

  public kill() {}
}
