// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>
];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};

type Expected2 = { readonly a: string } | { readonly b: number };
// ============= Your Code Here =============
// 다른방법
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Function
//     ? T[P]
//     : T[P] extends Object
//     ? DeepReadonly<T[P]>
//     : T[P];
// };

type DeepReadonly<T> = T extends Function
  ? T
  : T extends Object
  ? { readonly [P in keyof T]: T[P] extends Object ? DeepReadonly<T[P]> : T[P] }
  : T;

// type DeepReadonly<T> = T extends Function
//   ? T
//   : T extends Object
//   ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
//   : T;