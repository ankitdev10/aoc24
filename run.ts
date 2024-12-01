import { execSync } from "child_process";

const args = process.argv.slice(2);

const dayFlag = args.find((arg) => arg.startsWith("--d"));
const taskFlag = args.find((arg) => arg.startsWith("--t"));

if (dayFlag && taskFlag) {
  const day = dayFlag.split("=")[1];
  const task = taskFlag.split("=")[1];

  const filePath = `${day}/${task}.ts`;

  try {
    execSync(`ts-node ${filePath}`, { stdio: "inherit" });
  } catch (error) {
    console.error("Error running the file:", error);
  }
} else {
  console.error("Invalid arguments. Usage: --d=<day> --t=<task>");
}
