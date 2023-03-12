import { PieceColor } from "../types";
import { generateIterator } from "../utils";

import { Piece } from "./pieces/Piece";
import { Bishop } from "./pieces/Bishop";
import { King } from "./pieces/King";
import { Knight } from "./pieces/Knight";
import { Pawn } from "./pieces/Pawn";
import { Queen } from "./pieces/Queen";
import { Rook } from "./pieces/Rook";
import { Board } from "./Board";

class Game {
  private board: Board;
  private pieces: any;

  constructor() {
    const { board, pieces } = this.getInitialState();

    this.board = new Board(board);
    this.pieces = pieces;
  }

  private getInitialState() {
    const rowIterator = generateIterator(8);

    const emptyRow = rowIterator.map(() => null);

    const blackRowPawn = rowIterator.map(() => new Pawn("B"));
    const whiteRowPawn = rowIterator.map(() => new Pawn("W"));

    const blackRowMain = this.generateMainRow("B");
    const whiteRowMain = this.generateMainRow("W");

    const [BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8] = blackRowPawn;
    const [WP1, WP2, BW3, WP4, WP5, WP6, BW7, WP8] = whiteRowPawn;

    const [BR1, BN1, BB1, BQ, BK, BB2, BN2, BR2] = blackRowMain;
    const [WR1, WN1, WB1, WQ, WK, WB2, WN2, WR2] = whiteRowMain;

    const board = [
      whiteRowMain,
      whiteRowPawn,
      emptyRow,
      emptyRow,
      emptyRow,
      emptyRow,
      blackRowPawn,
      blackRowMain,
    ];

    const pieces = {
      W: {
        P: [WP1, WP2, BW3, WP4, WP5, WP6, BW7, WP8],
        R: [WR1, WR2],
        N: [WN1, WN2],
        B: [WB1, WB2],
        Q: [WQ],
        K: [WK],
      },
      B: {
        P: [BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8],
        R: [BR1, BR2],
        N: [BN1, BN2],
        B: [BB1, BB2],
        Q: [BQ],
        K: [BK],
      },
    };

    return { board, pieces };
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

const game = new Game();
