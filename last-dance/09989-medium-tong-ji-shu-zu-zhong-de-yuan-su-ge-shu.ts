// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5]>,
      {
        1: 1;
        2: 1;
        3: 1;
        4: 1;
        5: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
      {
        1: 2;
        2: 2;
        3: 2;
        4: 1;
        5: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
      {
        1: 3;
        2: 3;
        3: 2;
        4: 3;
        5: 1;
      }
    >
  >,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<
    Equal<
      CountElementNumberToObject<["1", "2", "0"]>,
      {
        0: 1;
        1: 1;
        2: 1;
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<["a", "b", ["c", ["d"]]]>,
      {
        a: 1;
        b: 1;
        c: 1;
        d: 1;
      }
    >
  >
];

// ============= Your Code Here =============
type Flatten<Arr> = Arr extends [infer Current, ...infer Rest]
  ? Current extends any[]
    ? [...Flatten<Current>, ...Flatten<Rest>]
    : [Current, ...Flatten<Rest>]
  : [];

type CountElementTo<Arr, Target, Result extends any[] = []> = Arr extends [
  infer Current,
  ...infer Rest
]
  ? Equal<Current, Target> extends true
    ? CountElementTo<Rest, Target, [...Result, 0]>
    : CountElementTo<Rest, Target, Result>
  : Result["length"];

type CountElementNumberToObject<T extends any[]> = {
  [P in Flatten<T>[number]]: CountElementTo<Flatten<T>, P>;
};
