// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];

// ============= Your Code Here =============
type MinusMap = {
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

type StrToArray<
  T extends string,
  A extends string[] = []
> = T extends `${infer F}${infer R}` ? StrToArray<R, [...A, F]> : A;

type Minus<T extends unknown[]> = T extends [...infer P, infer L]
  ? L extends keyof MinusMap
    ? [...P, MinusMap[L]]
    : [...Minus<P>, "9"]
  : never;

type ArrayToStr<T extends unknown[], S extends string = ""> = T extends [
  infer F extends string,
  ...infer R
]
  ? ArrayToStr<R, `${S}${F}`>
  : S;

type RemoveFrontZero<T> = T extends `0${infer R}` ? R : T;
type ParseInt<T extends string> = T extends "0"
  ? 0
  : RemoveFrontZero<T> extends `${infer N extends number}`
  ? N
  : never;

type MinusOne<T extends number> = T extends 0
  ? -1
  : ParseInt<ArrayToStr<Minus<StrToArray<`${T}`>>>>;
