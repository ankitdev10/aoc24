export const perf = (fn: () => void, type: string) => {
  console.log(`${type} started`);
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${type} took ${end - start} milliseconds`);
};
