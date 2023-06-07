// ============= Test Cases =============
import type { Equal, Expect, ExpectExtends } from "../test-utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >
];

// ============= Your Code Here =============

// type Flat<
//   T extends unknown[],
//   N = 1,
//   A extends unknown[] = []
// > = A["length"] extends N
//   ? T
//   : T extends [infer F extends unknown[]]
//   ? Flat<[...F], N, [...A, 0]>
//   : T;

// type FlattenDepth<T, N = 1, A extends unknown[] = []> = T extends [
//   infer F extends unknown[],
//   ...infer R
// ]
//   ? FlattenDepth<R, N, [...A, Flat<F, N>]>
//   : A;

// type Result = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>;
