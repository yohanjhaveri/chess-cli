import { PieceDisplay } from "./types";

export const ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const COLS = ["a", "b", "c", "d", "e", "f", "g", "h"];

type Pieces = {
  [key: string]: PieceDisplay;
};

export const PIECES: Pieces = {
  R: "♜",
  N: "♞",
  B: "♝",
  Q: "♛",
  K: "♚",
  P: "♟︎",
};
