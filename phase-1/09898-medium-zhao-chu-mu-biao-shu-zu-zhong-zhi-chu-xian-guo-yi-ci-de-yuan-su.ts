// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";
import { ExpectFalse, NotEqual } from "../test-utils";

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>
];

// ============= Your Code Here =============
type Include<T, U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Include<R, U>
  : false;

type FindEles<
  T extends unknown[],
  A extends unknown[] = [],
  P extends unknown[] = []
> = T extends [infer F, ...infer R]
  ? Include<[...P, ...R], F> extends true
    ? FindEles<R, A, [...P, F]>
    : FindEles<R, [...A, F], [...P, F]>
  : A;
