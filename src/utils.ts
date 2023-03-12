export const generateIterator = (n: number) => {
  return [...Array(n).keys()];
};

export const generateIteratorRange = (s: number, e: number) => {
  return generateIterator(e - s).map((i) => i + s);
};
