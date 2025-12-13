// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<LongestCommonPrefix<["flower", "flow", "flight"]>, "fl">>,
  Expect<Equal<LongestCommonPrefix<["dog", "racecar", "race"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "a", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "", "a"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "a", ""]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "", "a"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["", "a", "a"]>, "">>,
  Expect<Equal<LongestCommonPrefix<["a", "a", "a"]>, "a">>,
  Expect<Equal<LongestCommonPrefix<["abc", "abcd", "abcde"]>, "abc">>,
  Expect<Equal<LongestCommonPrefix<[" ", " ", " "]>, " ">>,
  Expect<
    Equal<
      LongestCommonPrefix<["type-challenges", "type-hero", "typescript"]>,
      "type"
    >
  >
];

// ============= Your Code Here =============
type LongestCommonPrefix<
  T extends string[],
  Base extends string = T[0]
> = Base extends `${infer Char}${infer RestBase}`
  ? T extends Array<`${Char}${string}`>
    ? `${Char}${LongestCommonPrefix<
        { [K in keyof T]: T[K] extends `${Char}${infer R}` ? R : never },
        RestBase
      >}`
    : ""
  : "";
