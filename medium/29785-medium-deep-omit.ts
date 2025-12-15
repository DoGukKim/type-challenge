// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type cases = [
  Expect<Equal<DeepOmit<obj, "person">, {}>>,
  Expect<
    Equal<DeepOmit<obj, "person.name">, { person: { age: { value: number } } }>
  >,
  Expect<Equal<DeepOmit<obj, "name">, obj>>,
  Expect<
    Equal<
      DeepOmit<obj, "person.age.value">,
      { person: { name: string; age: {} } }
    >
  >
];

// ============= Your Code Here =============
type DeepOmit<T, U extends PropertyKey> = U extends `${infer F}.${infer R}`
  ? {
      [K in keyof T]: K extends F ? DeepOmit<T[K], R> : T[K];
    }
  : Omit<T, U>;
