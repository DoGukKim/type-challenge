// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >,
];

// ============= Your Code Here =============
type Merge<F, S> = {
  [P in keyof (F & S)]: P extends keyof (F | S) ? S[P] : (F & S)[P];
};

// 방법2
// type Merge<F, S> = {
//   [P in keyof (F & S)]: P extends keyof S ? S[P] : (F & S)[P];
// };

// 방법3
// type Merge<F, S> = {
//   [P in keyof (F & S)]: P extends keyof S
//     ? S[P]
//     : P extends keyof F
//     ? F[P]
//     : never;
// };

// 방법4
// type FlatObject<T> = {
//   [P in keyof T]: T[P];
// };
// type Merge<F, S> = FlatObject<Omit<F, keyof (F | S)> & S>;
