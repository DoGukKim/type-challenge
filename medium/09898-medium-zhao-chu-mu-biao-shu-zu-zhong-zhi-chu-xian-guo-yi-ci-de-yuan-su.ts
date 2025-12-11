// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<FindEles<[1, 2, number]>, [1, 2, number]>>,
  Expect<Equal<FindEles<[1, 2, number, number]>, [1, 2]>>
];

// ============= Your Code Here =============
type Counter<T, E, Acc extends any[] = []> = T extends [infer F, ...infer R]
  ? Equal<F, E> extends true
    ? Counter<R, E, [...Acc, 0]>
    : Counter<R, E, Acc>
  : Acc["length"];

type FindEles<T extends any[], U = T> = T extends [infer F, ...infer R]
  ? Counter<U, F> extends 1
    ? [F, ...FindEles<R, U>]
    : [...FindEles<R, U>]
  : [];
