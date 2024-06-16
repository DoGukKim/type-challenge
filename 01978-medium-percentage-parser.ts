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
type Symbols = "+" | "-";
type Percent = "%";

type OmitSymbol<T> = T extends `${Symbols}${infer S}` ? S : T;
type OmitPercent<T> = T extends `${infer S}${Percent}` ? S : T;
type ParseNumber<T> = OmitPercent<OmitSymbol<T>>;

type ParseSymbol<T> = T extends `${infer P}${string}`
  ? P extends Symbols
    ? P
    : ""
  : "";
type ParsePercent<T> = T extends `${string}${Percent}` ? Percent : "";

type PercentageParser<A extends string> = [
  ParseSymbol<A>,
  ParseNumber<A>,
  ParsePercent<A>
];
