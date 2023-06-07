// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

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
type S<T> = ReturnType<() => T>;
type R = ToPrimitive<PersonInfo>;
type ToPrimitive<T> = T extends Function
  ? T
  : {
      [P in keyof T]: T[P] extends object
        ? ToPrimitive<T[P]>
        : T[P] extends S<T[P]>
        ? S<T[P]>
        : never;
    };
