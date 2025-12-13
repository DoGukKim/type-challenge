// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
  Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
  Expect<Equal<CompareArrayLength<[], []>, 0>>,
  Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>
];

// ============= Your Code Here =============
type CompareArrayLength<
  T extends any[],
  U extends any[],
  Acc extends any[] = []
> = T["length"] extends U["length"]
  ? 0
  : T["length"] extends Acc["length"]
  ? -1
  : U["length"] extends Acc["length"]
  ? 1
  : CompareArrayLength<T, U, [...Acc, 0]>;
