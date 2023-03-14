import { ROWS, COLS } from "../../constants";
import {
  Coordinate,
  PieceName,
  PieceColor,
  PiecePoints,
  PieceDisplay,
} from "../../types";

export abstract class Piece {
  public readonly name: PieceName;
  public readonly color: PieceColor;
  public readonly points: PiecePoints;
  public readonly display: PieceDisplay;

  public alive: boolean;
  public hasMoved: boolean;
  public position: Coordinate;
  public validMoves: Coordinate[];
  public validAttacks: Coordinate[];

  constructor(
    name: PieceName,
    color: PieceColor,
    points: PiecePoints,
    display: PieceDisplay,
    position: Coordinate
  ) {
    this.name = name;
    this.alive = true;
    this.hasMoved = false;
    this.color = color;
    this.points = points;
    this.display = display;
    this.position = position;
  }

  abstract getAllMoves(position: Coordinate): Coordinate[];
  abstract getAllAttacks(position: Coordinate): Coordinate[];

  private filterValidSquares(squares: Coordinate[]) {
    return squares.filter(([x, y]) => {
      if (x < 0 || x > ROWS.length) return false;
      if (y < 0 || y > COLS.length) return false;

      return true;
    });
  }

  private getValidMoves() {
    const moves = this.getAllMoves(this.position);
    return this.filterValidSquares(moves);
  }

  private getValidAttacks() {
    const attackingSquares = this.getAllAttacks(this.position);
    return this.filterValidSquares(attackingSquares);
  }

  public move(position: Coordinate) {
    this.position = position;
    this.hasMoved = true;
    this.validMoves = this.getValidMoves();
    this.validAttacks = this.getValidAttacks();
  }

  public kill() {
    this.alive = false;
  }
}
