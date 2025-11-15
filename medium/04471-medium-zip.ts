// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];

// ============= Your Code Here =============
type Zip<T extends any[], U extends any[], A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? U[A["length"]] extends undefined
    ? []
    : [[F, U[A["length"]]], ...Zip<R, U, [...A, 0]>]
  : [];

// 더 깔끔한 방법
// type Zip<T extends any[], U extends any[]> = [T, U] extends [
//   [infer L, ...infer RestT],
//   [infer R, ...infer RestU]
// ]
//   ? [[L, R], ...Zip<RestT, RestU>]
//   : [];
