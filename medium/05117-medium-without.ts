// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type ToUnion<T> = T extends number[] ? T[number] : T;
type Without<T, U> = T extends [infer F extends number, ...infer R]
  ? F extends ToUnion<U>
    ? [...Without<R, U>]
    : [F, ...Without<R, U>]
  : [];

// 다른 방법
// type Without<T, U, A extends number[] = []> = T extends [
//   infer F extends number,
//   ...infer R
// ]
//   ? F extends ToUnion<U>
//     ? Without<R, U, A>
//     : Without<R, U, [...A, F]>
//   : A;
