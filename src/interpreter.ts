import { PIECE_NAMES } from "./constants";

export const getMove = (inputString: String) => {
  const inputWords = inputString
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ");

  const piece = inputWords.find((word) => PIECE_NAMES.has(word));
  const destination = inputWords.find((word) => /^[a-h][1-8]$/.test(word));

  return {
    piece: piece || null,
    destination: destination || null,
  };
};
