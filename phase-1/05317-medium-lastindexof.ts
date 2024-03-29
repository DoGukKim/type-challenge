// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, "a", number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, "a", any, 1], any>, 5>>
];

// ============= Your Code Here =============
type LastIndexOf<T extends unknown[], U> = T extends [...infer P, infer L]
  ? Equal<L, U> extends true
    ? [...P]["length"]
    : LastIndexOf<P, U>
  : -1;

// type ToArrayOfLength<T, A extends unknown[] = []> = A["length"] extends T
//   ? A
//   : ToArrayOfLength<T, [...A, 1]>;

// type Pop<T extends unknown[]> = T extends [...infer R, infer L] ? R : never;

// type LastIndexOf<
//   T extends unknown[],
//   U,
//   A extends unknown[] = ToArrayOfLength<T["length"]>
// > = T extends [...infer R, infer L]
//   ? Equal<L, U> extends true
//     ? Pop<A>["length"]
//     : LastIndexOf<R, U, Pop<A>>
//   : -1;
