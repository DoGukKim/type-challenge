// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
];

// ============= Your Code Here =============
// type e = "a" extends "a" | "b" ? true : false; // true
// type e = "a" | "b" extends "a" ? true : false; // false
// type e = ["a"] extends ["a" | "b"] ? true : false; // false
// type e = "string" | string // string
// type e = never | string // string
type R = IsUnion<string>;
type IsUnion<T, B = T> = [T] extends [never]
  ? false
  : T extends B
  ? [B] extends [T]
    ? false // 같게되면 유니언이 아니게 되므로 false를 반환. 즉, [string] extends [string]은 유니언이 아님.
    : true // 예를 들어, [string | number] extends [string]은 false로 true를 반환해서 유니언임을 판단.
  : false;
