export const perf = (fn: () => any, type: string) => {
  const start = performance.now();
  const ans = fn();
  const end = performance.now();
  console.log(`${type} answer: ${ans}`);
  console.log(`${type} took ${end - start} milliseconds`);
};
