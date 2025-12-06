// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
];

// ============= Your Code Here =============
type Chunk<
  T,
  N,
  S extends unknown[] = [],
  A extends unknown[] = []
> = T extends [infer F, ...infer R]
  ? S["length"] extends N
    ? Chunk<T, N, [], [...A, S]>
    : Chunk<R, N, [...S, F], A>
  : S extends []
  ? A
  : [...A, S];
