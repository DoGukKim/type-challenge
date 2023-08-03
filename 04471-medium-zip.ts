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
type Zip<
  T extends unknown[],
  U extends unknown[],
  A extends unknown[] = []
> = T extends [infer TF, ...infer TR]
  ? U extends [infer UF, ...infer UR]
    ? Zip<TR, UR, [...A, [TF, UF]]>
    : A
  : A;

// type Zip<
//   T extends unknown[],
//   U extends unknown[],
//   I extends unknown[] = [],
//   A extends unknown[] = []
// > = T extends [infer F, ...infer R]
//   ? U[I["length"]] extends undefined
//     ? A
//     : Zip<R, U, [...I, 0], [...A, [F, U[I["length"]]]]>
//   : A;
