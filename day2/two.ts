import { fileContent } from "../helpers/file-content";
import { join } from "path";
import { perf } from "../helpers/perf";

const fn = () => {
  const data = fileContent(join(process.cwd(), "day2", "input2.txt"));

  let safeCount = 0;
  for (const line of data) {
    const parsed = line.split(" ").map(Number);
    const isSafe = isSafeSequence(parsed);
    if (isSafe) safeCount++;
  }
  return safeCount;
};

const isSafeSequence = (levels: number[]): boolean => {
  if (isConditionFullFilled(levels)) return true;

  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];

    if (isConditionFullFilled(modifiedLevels)) return true;
  }

  return false;
};

const isConditionFullFilled = (levels: number[]): boolean => {
  for (let i = 1; i < levels.length; i++) {
    if (
      Math.abs(levels[i] - levels[i - 1]) < 1 ||
      Math.abs(levels[i] - levels[i - 1]) > 3
    ) {
      return false;
    }

    if (
      i > 1 &&
      (levels[i] - levels[i - 1]) * (levels[i - 1] - levels[i - 2]) < 0
    ) {
      return false;
    }
  }

  return true;
};

perf(fn, "Day2-two");
