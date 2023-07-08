// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<
    Equal<GetMiddleElement<[() => number, "3", [3, 4], 5]>, ["3", [3, 4]]>
  >,
  Expect<
    Equal<
      GetMiddleElement<[() => string, () => number]>,
      [() => string, () => number]
    >
  >,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>
];
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>;

// ============= Your Code Here =============
type GetMiddleElement<T extends unknown[]> = T["length"] extends 0 | 1 | 2
  ? T
  : T extends [infer _, ...infer R, infer _]
  ? GetMiddleElement<R>
  : never;

// type CheckEnd<T extends unknown[]> = T["length"] extends 1 | 2 ? true : false;

// type GetMiddleElement<T extends unknown[]> = CheckEnd<T> extends true
//   ? [...T]
//   : T extends [infer _, ...infer R, infer _]
//   ? CheckEnd<R> extends true
//     ? [...R]
//     : GetMiddleElement<R>
//   : [];
