// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>
];

// ============= Your Code Here =============
type IsUnique<B1, B2> = B1 extends false
  ? B2 extends false
    ? true
    : false
  : false;

type IsPrevRepeat<T extends string, P extends string[]> = T extends P[number]
  ? true
  : false;

type IsRestRepeat<
  T extends string,
  R extends string
> = R extends `${string}${T}${string}` ? true : false;

type FirstUniqueCharIndex<
  T extends string,
  P extends string[] = []
> = T extends `${infer F}${infer R}`
  ? IsUnique<IsPrevRepeat<F, P>, IsRestRepeat<F, R>> extends true
    ? P["length"]
    : FirstUniqueCharIndex<R, [...P, F]>
  : -1;
