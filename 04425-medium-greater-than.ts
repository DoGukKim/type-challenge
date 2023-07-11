// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>> // deep error if a make array
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

// 문자열로 변환해 길이로 비교할 수 있다.
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
    ? S1F extends S2F // 두 자릿수가 같으면 재귀로 다음 자릿수로
      ? GreaterByDigit<S1R, S2R>
      : Includes<Map[S1F], S2F> extends true
      ? true
      : false
    : false
  : false;

// 1. 두 숫자가 동일한 경우 false
// 2. 문자열로 변환해 길이를 비교한다. A에 B를 비교.
// 3. 문자열로 변환해 길이를 비교한다. B에 A를 비교.
// 4. 두 숫자가 길이가 동일한 경우, 자릿수로 비교.
type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : GreaterByStringLength<`${T}`, `${U}`> extends true
  ? true
  : GreaterByStringLength<`${U}`, `${T}`> extends true
  ? false
  : GreaterByDigit<`${T}`, `${U}`>;
