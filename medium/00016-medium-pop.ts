// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
];

// ============= Your Code Here =============
type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : T;

// 다른 방법
// type Pop<T extends any[]> = T extends [...infer R, any] ? R : T;
