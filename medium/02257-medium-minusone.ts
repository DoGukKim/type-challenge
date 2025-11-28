// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];

// ============= Your Code Here =============
type MinusOneMap = {
  "1": "0";
  "2": "1";
  "3": "2";
  "4": "3";
  "5": "4";
  "6": "5";
  "7": "6";
  "8": "7";
  "9": "8";
};

type StringToTuple<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}` ? StringToTuple<R, [...T, F]> : T;

type MinusOneHelper<T extends string[]> = T extends [
  ...infer R extends string[],
  infer L
]
  ? L extends keyof MinusOneMap
    ? [...R, MinusOneMap[L]]
    : [...MinusOneHelper<R>, "9"]
  : [];

type TupleToString<T extends string[]> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? `${F}${TupleToString<R>}`
  : "";

type RemoveFirstZero<S extends string> = S extends "0"
  ? S
  : S extends `0${infer R}`
  ? R
  : S;

type ParseToNumber<S extends string> =
  RemoveFirstZero<S> extends `${infer N extends number}` ? N : never;

type MinusOne<T extends number> = ParseToNumber<
  TupleToString<MinusOneHelper<StringToTuple<`${T}`>>>
>;

// type T = 099; // Decimals with leading zeros are not allowed.ts(1489)
// 선행 0이 있는 십진수는 허용되지 않습니다
// type ParseToNumber<S extends string> = S extends `${infer N extends number}`
//   ? N
//   : never;
// type Test = MinusOne<100>; // number
