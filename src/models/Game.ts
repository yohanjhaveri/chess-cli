import { Coordinate, PieceColor } from "../types";
import { generateIterator, range } from "../utils";

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
    const BLACK_ROW_PAWN_VALUE = 7;
    const WHITE_ROW_PAWN_VALUE = 2;

    const rowIterator = generateIterator(8);

    const emptyRow = rowIterator.map(() => null);

    const blackRowPawn = rowIterator.map(
      (value) => new Pawn("B", [BLACK_ROW_PAWN_VALUE, value])
    );
    const whiteRowPawn = rowIterator.map(
      (value) => new Pawn("W", [WHITE_ROW_PAWN_VALUE, value])
    );

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
    const row = color === "W" ? 0 : 7;

    return [
      new Rook(color, [row, 0]),
      new Knight(color, [row, 1]),
      new Bishop(color, [row, 2]),
      new Queen(color, [row, 3]),
      new King(color, [row, 4]),
      new Bishop(color, [row, 5]),
      new Knight(color, [row, 6]),
      new Rook(color, [row, 7]),
    ];
  }

  private isValidMove = (piece: Piece, destination: Coordinate) => {
    const [x2, y2] = destination;

    if (!piece.validMoves.includes(destination)) {
      return false;
    }

    const pieceAtDestination = this.board.getCoordinate(x2, y2);

    if (pieceAtDestination.color === piece.color) {
      return false;
    }

    if (["Q", "R", "B"].includes(piece.name)) {
      const squaresBetween = this.getSquaresBetween(
        piece.position,
        destination
      );

      if (squaresBetween.find(([x, y]) => this.board.getCoordinate(x, y))) {
        return false;
      }
    }
  };

  public getSquaresBetween(origin: Coordinate, destination: Coordinate) {
    const [x1, y1] = origin;
    const [x2, y2] = destination;

    // Horizontal
    if (x1 === x2) {
      return range(y1 + 1, y2).map((y) => [x1, y]);
    }

    // Vertical
    if (y1 === y2) {
      return range(x1 + 1, x2).map((x) => [x, y1]);
    }

    // Diagonal
    if (x1 - x2 === y1 - y2) {
      return range(1, Math.abs(x1 - x2)).map((i) => [
        x1 + i * (x1 < x2 ? 1 : -1),
        y1 + i * (y1 < y2 ? 1 : -1),
      ]);
    }
  }
}
