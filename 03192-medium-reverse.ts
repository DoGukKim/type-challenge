// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

type errors = [
  // @ts-expect-error
  Reverse<"string">,
  // @ts-expect-error
  Reverse<{ key: "value" }>
];

// ============= Your Code Here =============
type Reverse<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : [];

// other solution
// type Reverse<T extends unknown[], A extends unknown[] = []> = T extends [
//   ...infer P,
//   infer L
// ]
//   ? Reverse<P, [...A, L]>
//   : A;
