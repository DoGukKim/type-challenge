// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<IsAlphabet<"A">, true>>,
  Expect<Equal<IsAlphabet<"z">, true>>,
  Expect<Equal<IsAlphabet<"9">, false>>,
  Expect<Equal<IsAlphabet<"!">, false>>,
  Expect<Equal<IsAlphabet<"😂">, false>>,
  Expect<Equal<IsAlphabet<"">, false>>
];

// ============= Your Code Here =============
type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

type UpperAlphabet = Uppercase<Alphabet>;

type IsAlphabet<S extends string> = S extends Alphabet | UpperAlphabet
  ? true
  : false;
