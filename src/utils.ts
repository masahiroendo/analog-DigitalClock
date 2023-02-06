export const range = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, i) => start + i);
};
