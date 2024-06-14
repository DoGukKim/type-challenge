// ============= Test Cases =============
import type { Equal, Expect, ExpectExtends } from "./test-utils";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>,
  Expect<Equal<Join<[], "u">, "">>
];

// ============= Your Code Here =============
type Join<T, U extends string | number> = T extends [
  infer F extends string,
  ...infer R
]
  ? R extends []
    ? `${F}`
    : `${F}${U}${Join<R, U>}`
  : "";
