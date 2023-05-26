// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

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
type PlusOrMinus<S extends string> = S extends `${infer F}${infer _}`
  ? F extends "+" | "-"
    ? F
    : ""
  : "";
type Num<S extends string> = S extends `${infer F}${infer R}`
  ? "+" | "-" | "%" extends F
    ? `${Num<R>}`
    : `${F}${Num<R>}`
  : S;
type Percent<S extends string> = S extends `${infer _}${"%"}` ? "%" : "";
type PercentageParser<S extends string> = S extends `${infer A}${infer R}`
  ? [
      `${PlusOrMinus<`${A}${R}`>}`,
      `${Num<`${A}${R}`>}`,
      `${Percent<`${A}${R}`>}`
    ]
  : ["", "", ""];
