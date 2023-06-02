// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>
];

// ============= Your Code Here =============
type IsUnique<T, F> = T extends true ? (F extends true ? true : false) : false;
type IsPrevRepeat<P extends string[], T> = T extends P[number] ? false : true;
type IsRestRepeat<R, T extends string> = R extends `${string}${T}${string}`
  ? false
  : true;

type FirstUniqueCharIndex<
  T extends string,
  P extends string[] = []
> = T extends `${infer F}${infer R}`
  ? IsUnique<IsPrevRepeat<P, F>, IsRestRepeat<R, F>> extends true
    ? P["length"]
    : FirstUniqueCharIndex<R, [...P, F]>
  : -1;
