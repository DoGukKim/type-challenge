// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
  readonlyArr: readonly ["test"];
  fn: () => any;
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
  readonlyArr: readonly [string];
  fn: Function;
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];

// ============= Your Code Here =============

// my solution
type Primitives = [string, number, bigint, boolean, symbol, null, undefined];
type GetPrimitive<T, P = Primitives> = P extends [infer F, ...infer R]
  ? T extends F
    ? F
    : GetPrimitive<T, R>
  : never;
type ToPrimitive<T> = T extends object
  ? T extends (...arg: unknown[]) => unknown
    ? Function
    : { [P in keyof T]: ToPrimitive<T[P]> }
  : GetPrimitive<T>;

// type ToPrimitive<T> = T extends object ? (
//   T extends (...args: never[]) => unknown ? Function : {
//     [Key in keyof T]: ToPrimitive<T[Key]>
//   }
// ) : (
//   T extends { valueOf: () => infer P } ? P : T
// )
