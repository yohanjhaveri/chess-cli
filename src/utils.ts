export const generateIterator = (n: number) => {
  return [...Array(n).keys()];
};

export const generateIteratorRange = (s: number, e: number) => {
  return generateIterator(e - s).map((i) => i + s);
};

export const range = (start: number, stop?: number, step?: number) => {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  const result = [];

  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};
