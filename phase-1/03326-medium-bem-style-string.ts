// ============= Test Cases =============
import type { Equal, Expect, IsAny } from "../test-utils";

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];

// ============= Your Code Here =============
type isNever<T> = [T] extends [never] ? "" : T;

type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${isNever<`__${E[number]}`>}${isNever<`--${M[number]}`>}`;
