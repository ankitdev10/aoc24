import { fileContent } from "../helpers/file-content";
import { join } from "path";
import { perf } from "../helpers/perf";

const fn = () => {
  const data = fileContent(join(process.cwd(), "day1", "input1.txt"));

  const formatted = data.reduce(
    (acc: { left: number[]; right: number[] }, curr) => {
      const [l, r] = curr.split("  ");
      acc.left.push(Number(l));
      acc.right.push(Number(r));
      return acc;
    },
    { left: [], right: [] },
  );

  formatted.left.sort((a, b) => a - b);
  formatted.right.sort((a, b) => a - b);

  const total = formatted.left.reduce((sum, leftValue, index) => {
    return sum + Math.abs(leftValue - formatted.right[index]);
  }, 0);

  return total;
};

perf(fn, "Day1-One");
