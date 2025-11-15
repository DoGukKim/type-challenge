// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

// ============= Your Code Here =============
type IsInteger<N extends number> = `${N}` extends `${string}.${string}`
  ? false
  : true;

type Integer<T extends number> = IsInteger<T> extends true
  ? number extends T
    ? never
    : T
  : never;
