// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
];

// ============= Your Code Here =============
type Join<T extends unknown[], U extends string | number> = T extends [
  infer F extends string,
  ...infer R
]
  ? R extends []
    ? `${F}`
    : `${F}${U}${Join<R, U>}`
  : never;

// type Join<T extends string[], U extends string | number> = T["length"] extends 1
//   ? `${T[0]}`
//   : T extends [infer F extends string, ...infer R extends string[]]
//   ? `${F}${U}${Join<R, U>}`
//   : "";
