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
type CheckPostUniqueChar<
  R,
  T extends string
> = R extends `${string}${T}${string}` ? false : true;

type FirstUniqueCharIndex<
  S extends string,
  P extends string[] = []
> = S extends `${infer C}${infer R}`
  ? C extends P[number]
    ? FirstUniqueCharIndex<R, [...P, C]>
    : CheckPostUniqueChar<R, C> extends true
    ? P["length"]
    : FirstUniqueCharIndex<R, [...P, C]>
  : -1;
