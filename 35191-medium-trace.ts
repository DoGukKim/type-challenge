// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trace<[[1, 2], [3, 4]]>, 1 | 4>>,
  Expect<Equal<Trace<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>, 0>>,
  Expect<
    Equal<
      Trace<[["a", "b", ""], ["c", "", ""], ["d", "e", "f"]]>,
      "a" | "" | "f"
    >
  >
];

// ============= Your Code Here =============
type Trace<
  T extends any[][],
  Index extends any[] = []
> = Index["length"] extends T["length"]
  ? never
  : T[Index["length"]][Index["length"]] | Trace<T, [...Index, 0]>;
