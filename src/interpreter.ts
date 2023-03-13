import { PIECE_NAMES } from "./constants";
import { Coordinate, PieceName, Castle } from "./types";

type MoveResult = {
  piece: PieceName | null;
  destination: Coordinate | Castle | null;
};

const LETTER_OFFSET = 97; // ascii offset for letter a
const NUMBER_OFFSET = 49; // ascii offset for the number 1 as a character

export const getMove = (inputString: String): MoveResult => {
  const inputWords = inputString
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ");

  if (inputWords.includes("castle") || inputWords.includes("castles")) {
    if (inputWords.includes("queen")) {
      return {
        piece: "K",
        destination: "QC",
      };
    } else {
      return {
        piece: "K",
        destination: "KC",
      };
    }
  }

  const piece = inputWords.find((word) => word in PIECE_NAMES);
  const destination = inputWords.find((word) => /^[a-h][1-8]$/.test(word));

  return {
    piece: piece ? PIECE_NAMES[piece] : null,
    destination: destination
      ? [
          destination.charCodeAt(0) - LETTER_OFFSET,
          destination.charCodeAt(1) - NUMBER_OFFSET,
        ]
      : null,
  };
};
