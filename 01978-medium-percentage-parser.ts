// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Case0 = ["", "", ""];
type Case1 = ["+", "", ""];
type Case2 = ["+", "1", ""];
type Case3 = ["+", "100", ""];
type Case4 = ["+", "100", "%"];
type Case5 = ["", "100", "%"];
type Case6 = ["-", "100", "%"];
type Case7 = ["-", "100", ""];
type Case8 = ["-", "1", ""];
type Case9 = ["", "", "%"];
type Case10 = ["", "1", ""];
type Case11 = ["", "100", ""];

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>
];

// ============= Your Code Here =============
type Operator = "+" | "-";
type Percent = "%";

type DropOperator<S extends string> = S extends `${Operator}${infer N}` ? N : S;
type DropPercent<S extends string> = S extends `${infer N}${Percent}` ? N : S;

type OperateParser<S extends string> = S extends `${infer O}${string}`
  ? O extends Operator
    ? O
    : ""
  : "";
type PercentParser<S extends string> = S extends `${string}${Percent}`
  ? Percent
  : "";

type PercentageParser<S extends string> = [
  OperateParser<S>,
  DropPercent<DropOperator<S>>,
  PercentParser<S>
];

// type SplitOperator<T> = T extends "+" | "-" ? T : never;
// type SplitPercent<T> = T extends `${infer Num}%` ? [Num, "%"] : [T, ""];
// type PercentageParser<T extends string> = T extends `${SplitOperator<
//   infer Operator
// >}${infer R}`
//   ? [Operator, ...SplitPercent<R>]
//   : ["", ...SplitPercent<T>];
