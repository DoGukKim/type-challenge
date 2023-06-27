// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];

// ============= Your Code Here =============
type ObjectEntries<T> = {
  [K in keyof T]-?: [
    K,
    T[K] extends undefined ? T[K] : Exclude<T[K], undefined>
  ];
}[keyof T];

// my solution
// type ObjectEntries<T, K = { [P in keyof T]-?: T[P] }> = keyof K extends infer U
//   ? U extends U
//     ? [U, K[U & keyof K] extends never ? undefined : K[U & keyof K]]
//     : never
//   : never;
