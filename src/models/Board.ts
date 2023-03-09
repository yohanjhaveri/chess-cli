import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Piece } from "./pieces/Piece";
import { Rook } from "./pieces/Rook";
import { Bishop } from "./pieces/Bishop";
import { Queen } from "./pieces/Queen";
import { King } from "./pieces/King";

import { PieceColor } from "../types";
import { ROWS, COLS } from "../constants";

import { generateIterator } from "../utils";
import chalk from "chalk";

type Square = Piece | null;

export class Board {
  public board: Square[][];

  constructor() {
    this.board = this.generateInitialBoard();
  }

  private generateInitialBoard(): Square[][] {
    const rowIterator = generateIterator(8);

    const emptyRow = rowIterator.map(() => null);

    const blackRowPawn = rowIterator.map(() => new Pawn("B"));
    const whiteRowPawn = rowIterator.map(() => new Pawn("W"));

    const blackRowMain = this.generateMainRow("B");
    const whiteRowMain = this.generateMainRow("W");

    return [
      whiteRowMain,
      whiteRowPawn,
      emptyRow,
      emptyRow,
      emptyRow,
      emptyRow,
      blackRowPawn,
      blackRowMain,
    ];
  }

  private generateMainRow(color: PieceColor): Piece[] {
    return [
      new Rook(color),
      new Knight(color),
      new Bishop(color),
      new Queen(color),
      new King(color),
      new Bishop(color),
      new Knight(color),
      new Rook(color),
    ];
  }

  public printBoard(color: PieceColor) {
    if (color === "W") {
      this.printWhite();
    } else if (color === "B") {
      this.printBlack();
    }
  }

  private printWhite() {
    for (let xIndex = 7; xIndex >= 0; xIndex--) {
      let row = ROWS[xIndex] + " ";

      for (let yIndex = 0; yIndex < 8; yIndex++) {
        row += this.printSquare(this.board[xIndex][yIndex]);
      }

      console.log(row);
    }

    console.log("  " + COLS.join(" "));
  }

  private printBlack() {
    for (let xIndex = 0; xIndex < 8; xIndex++) {
      let row = ROWS[xIndex] + " ";

      for (let yIndex = 7; yIndex >= 0; yIndex--) {
        row += this.printSquare(this.board[xIndex][yIndex]);
      }

      console.log(row);
    }

    console.log("  " + COLS.reverse().join(" "));
  }

  private printSquare(square: Square) {
    if (square === null) {
      return "⋅ ";
    } else if (square.color === "W") {
      return chalk.white(square.display + " ");
    } else if (square.color === "B") {
      return chalk.red(square.display + " ");
    }
  }
}
