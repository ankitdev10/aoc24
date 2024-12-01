import { fileContent } from "../helpers/file-content";
import { join } from "path";
import { perf } from "../helpers/perf";

const fn = () => {
  const data = fileContent(join(process.cwd(), "day1", "input2.txt"));
  const formatted = data.reduce(
    (acc: { left: number[]; right: number[] }, curr) => {
      const [l, r] = curr.split("  ");
      acc.left.push(Number(l));
      acc.right.push(Number(r));
      return acc;
    },
    { left: [], right: [] },
  );

  const rightCount = formatted.right.reduce(
    (countMap, value) => {
      countMap[value] = (countMap[value] || 0) + 1;
      return countMap;
    },
    {} as { [key: number]: number },
  );

  const total = formatted.left.reduce((sum, leftValue) => {
    const occurenceInRight = rightCount[leftValue] || 0;
    return sum + leftValue * occurenceInRight;
  }, 0);

  return total;
};
perf(fn, "Day1-Two");
