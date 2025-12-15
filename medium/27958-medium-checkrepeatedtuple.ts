// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
  Expect<
    Equal<
      CheckRepeatedTuple<
        [number, 1, string, "1", boolean, true, false, unknown, any]
      >,
      false
    >
  >,
  Expect<Equal<CheckRepeatedTuple<[never, any, never]>, true>>
];

// ============= Your Code Here =============
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<U, F> extends true
    ? true
    : Includes<R, U>
  : false;

type CheckRepeatedTuple<
  T extends unknown[],
  U extends unknown[] = []
> = T extends [infer F, ...infer Rest]
  ? Includes<U, F> extends true
    ? true
    : CheckRepeatedTuple<Rest, [...U, F]>
  : false;
