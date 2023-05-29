// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
];

// ============= Your Code Here =============
type Result = Join<["a", "p", "p", "l", "e"], "-">;
type Join<T extends unknown[], U extends string | number> = T extends [
  infer F extends string,
  infer S extends string,
  ...infer R
]
  ? `${F}${U}${S}${Join<[S, ...R], U>}`
  : "";
