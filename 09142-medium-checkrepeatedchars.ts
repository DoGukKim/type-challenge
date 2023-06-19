// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

type cases = [
  Expect<Equal<CheckRepeatedChars<"abc">, false>>,
  Expect<Equal<CheckRepeatedChars<"abb">, true>>,
  Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
  Expect<Equal<CheckRepeatedChars<"">, false>>
];

// ============= Your Code Here =============
// type Include<T, U> = T extends [infer F, ...infer R]
//   ? Equal<F, U> extends true
//     ? true
//     : Include<R, U>
//   : false;

// type CheckRepeatedChars<
//   T extends string,
//   A extends string[] = []
// > = T extends `${infer F}${infer R}`
//   ? Include<A, F> extends true
//     ? true
//     : CheckRepeatedChars<R, [...A, F]>
//   : false;

type CheckRepeatedChars<S extends string> = S extends `${infer F}${infer R}`
  ? R extends `${string}${F}${string}`
    ? true
    : CheckRepeatedChars<R>
  : false;
