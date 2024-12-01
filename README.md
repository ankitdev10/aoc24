shitty code in typescript for AOC2024. Will i get past the first week? Time will tell but probably no lol

folder structure

```
.
├── day1
│   ├── input1.txt
│   ├── input2.txt
│   └── one.ts
│   └── two.ts
├── day2
│   ├── input1.txt
│   └── one.ts
├── helpers
│   ├── perf.ts
│   └── file-content.ts
├── package.json
├── pnpm-lock.yaml
├── run.ts
├── tsconfig.json
```

run with `npm run solve --d=<day> --t=<task>`

Example: `npm run solve --d=day1 --t=one` will run the `one.ts` file in the day1 folder

Output:

```
1388114 -> answer
Day1-One took 2.2255210000000716 milliseconds
```
