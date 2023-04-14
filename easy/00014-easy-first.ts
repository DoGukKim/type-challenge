// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

// ============= Your Code Here =============
type First<T extends readonly unknown[]> = T extends [] ? never : T[0];
// type First<T extends readonly unknown[]> = T['length'] extends 0 ? never : T[0];
// type First<T extends readonly unknown[]> = T extends infer B  extends (string | number | symbol)[] ? B[0] : never
