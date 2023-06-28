// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

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
type Flatten<T extends unknown[], A extends unknown[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends unknown[]
    ? Flatten<[...F, ...R], A>
    : Flatten<[...R], [...A, F]>
  : A;

type FlattenDepth<
  T extends unknown[],
  C extends number = 1,
  A extends unknown[] = [],
  CA extends unknown[] = []  
> = T extends [infer F, ...infer R]
  // : CA['length'] extends C ? T : FlattenDepth<T, C, [...CA, '0']>;

type R = FlattenDepth<[[1], 2, 3, 4]>;
