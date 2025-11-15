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
  T extends readonly any[],
  N extends number,
  A extends any[] = []
> = T extends [infer F, ...infer R]
  ? [...A, F]["length"] extends N
    ? [[...A, F], ...Chunk<R, N, []>]
    : Chunk<R, N, [...A, F]>
  : A extends []
  ? []
  : [A];

// 더 깔끔한 풀이
//   type Chunk<
//   T,
//   N,
//   S extends unknown[] = [],
//   A extends unknown[] = []
// > = T extends [infer F, ...infer R]
//   ? S["length"] extends N
//     ? Chunk<T, N, [], [...A, S]>
//     : Chunk<R, N, [...S, F], A>
//   : S extends []
//   ? A
//   : [...A, S];
