import { PIECE_NAMES } from "./constants";
import { Coordinate, PieceName } from "./types";

type MoveResult = {
  piece: PieceName | null;
  destination: Coordinate | null;
};

const letterOffset = 97; // ascii offset for letter a
const numberOffset = 49; // ascii offset for the number 1 as a character

export const getMove = (inputString: String): MoveResult => {
  const inputWords = inputString
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ");

  const piece = inputWords.find((word) => word in PIECE_NAMES);
  const destination = inputWords.find((word) => /^[a-h][1-8]$/.test(word));

  return {
    piece: piece ? PIECE_NAMES[piece] : null,
    destination: destination
      ? [
          destination.charCodeAt(0) - letterOffset,
          destination.charCodeAt(1) - numberOffset,
        ]
      : null,
  };
};
