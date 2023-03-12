import chalk from "chalk";

import { Piece } from "./pieces/Piece";
import { PieceColor } from "../types";
import { ROWS, COLS } from "../constants";

type Square = Piece | null;

export class Board {
  public state: Square[][];

  constructor(state: Square[][]) {
    this.state = state;
  }

  public printBoard(color: PieceColor) {
    if (color === "W") {
      this.printWhite();
    } else if (color === "B") {
      this.printBlack();
    }
  }

  private printWhite() {
    for (let x = ROWS.length - 1; x >= 0; x--) {
      let row = ROWS[x] + " ";

      for (let y = 0; y < COLS.length; y++) {
        row += this.printSquare(this.state[x][y]);
      }

      console.log(row);
    }

    console.log("  " + COLS.join(" "));
  }

  private printBlack() {
    for (let x = 0; x < ROWS.length; x++) {
      let row = ROWS[x] + " ";

      for (let y = COLS.length - 1; y >= 0; y--) {
        row += this.printSquare(this.state[x][y]);
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
