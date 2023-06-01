// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Falsy = false | 0 | "" | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>
];

// ============= Your Code Here =============
type Filter<T extends unknown[], P, A extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends P
    ? Filter<R, P, [...A, F]>
    : Filter<R, P, A>
  : A;
