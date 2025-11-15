// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>
];

// ============= Your Code Here =============
type Map = {
  "0": [];
  "1": ["0"];
  "2": ["1", "0"];
  "3": ["2", "1", "0"];
  "4": ["3", "2", "1", "0"];
  "5": ["4", "3", "2", "1", "0"];
  "6": ["5", "4", "3", "2", "1", "0"];
  "7": ["6", "5", "4", "3", "2", "1", "0"];
  "8": ["7", "6", "5", "4", "3", "2", "1", "0"];
  "9": ["8", "7", "6", "5", "4", "3", "2", "1", "0"];
};

type Includes<T, U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

type GreaterByStringLength<
  S1 extends string,
  S2 extends string
> = S1 extends `${string}${infer S1R}`
  ? S2 extends `${string}${infer S2R}`
    ? GreaterByStringLength<S1R, S2R>
    : true
  : false;

type GreaterByDigit<
  S1 extends string,
  S2 extends string
> = S1 extends `${infer S1F extends keyof Map}${infer S1R}`
  ? S2 extends `${infer S2F}${infer S2R}`
    ? S1F extends S2F
      ? GreaterByDigit<S1R, S2R>
      : Includes<Map[S1F], S2F> extends true
      ? true
      : false
    : false
  : false;

type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : GreaterByStringLength<`${T}`, `${U}`> extends true
  ? true
  : GreaterByStringLength<`${U}`, `${T}`> extends true
  ? false
  : GreaterByDigit<`${T}`, `${U}`>;
