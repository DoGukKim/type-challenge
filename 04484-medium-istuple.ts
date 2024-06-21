// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>
];

// ============= Your Code Here =============
// const some = [1, 2, 3];
// const some2 = [1, 2, 3] as const;
// type Test<T extends any[]> = T["length"];
// type Some = Test<typeof some>; // number
// type Some2 = Test<typeof some2>; // 3
// type R = [] extends readonly [] ? true : false; // true
// type R = readonly [] extends [] ? true : false; // false
// type R = [number] extends  readonly [number] ? true : false; // true
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false;
