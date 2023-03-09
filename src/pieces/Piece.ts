import { Coordinate, PieceColor, PieceDisplay, PiecePoints } from "../types";

export abstract class Piece {
  public readonly color: PieceColor;
  public readonly points: PiecePoints;
  public readonly display: string;

  public alive: boolean;
  public position: Coordinate;
  public validMoves: Coordinate[];
  public validAttacks: Coordinate[];

  constructor(color: PieceColor, points: PiecePoints, display: PieceDisplay) {
    this.alive = true;
    this.color = color;
    this.points = points;
    this.display = display;
  }

  abstract getAllMoves(position: Coordinate): Coordinate[];
  abstract getAllAttacks(position: Coordinate): Coordinate[];
  
  private filterValidSquares(squares: Coordinate[]) {
    return squares.filter(([x, y]) => {
      if (x < 0 || x > 7) return false;
      if (y < 0 || y > 7) return false;

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

  public kill() {
    this.alive = false;
  }
}
