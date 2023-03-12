import { PIECE_NAMES } from "./constants";

const getMove = (inputString: String) => {
  const inputWords = inputString
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ");

  const piece = inputWords.find((word) => PIECE_NAMES.has(word));
  const destination = inputWords.find((word) => /[a-h1-8]/.test(word));

  return {
    piece: piece || null,
    destination: destination || null,
  };
};
