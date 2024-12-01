import fs from "fs";
export const fileContent = (path: string): string[] => {
  return fs
    .readFileSync(path, "utf-8")
    .split("\n")
    .filter((line) => line.trim() !== "");
};
