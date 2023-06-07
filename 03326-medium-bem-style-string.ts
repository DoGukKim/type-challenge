// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

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

type HandleNever<T> = [T] extends [never] ? "" : T;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${HandleNever<`__${E[number]}`>}${HandleNever<`--${M[number]}`>}`;

// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = `${B}${E extends [] ? "" : `__${E[number]}`}${M extends []
//   ? ""
//   : `--${M[number]}`}`;

// type BEMString<T extends string, Type> = [T] extends [undefined]
//   ? ""
//   : `${Type & string}${T}`;

// type BEM<B, E extends string[], M extends string[]> = {
//   [key in number]: `${B & string}${BEMString<E[key], "__">}${BEMString<
//     M[number],
//     "--"
//   >}`;
// }[number];
