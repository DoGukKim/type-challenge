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
type IsUniqueInRest<
  Rest extends string,
  Char extends string
> = Rest extends `${string}${Char}${string}` ? false : true;

type FirstUniqueCharIndex<
  S extends string,
  Processed extends string[] = []
> = S extends `${infer C}${infer R}`
  ? C extends Processed[number]
    ? FirstUniqueCharIndex<R, [...Processed, C]>
    : IsUniqueInRest<R, C> extends true
    ? Processed["length"]
    : FirstUniqueCharIndex<R, [...Processed, C]>
  : -1;
