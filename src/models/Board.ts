import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Piece } from "./pieces/Piece";
import { Rook } from "./pieces/Rook";
import { Bishop } from "./pieces/Bishop";
import { Queen } from "./pieces/Queen";
import { King } from "./pieces/King";

import { PieceColor } from "../types";

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
}
