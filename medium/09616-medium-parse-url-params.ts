// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<ParseUrlParams<"">, never>>,
  Expect<Equal<ParseUrlParams<":id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>
];

// ============= Your Code Here =============
type Split<
  S extends string,
  T extends string,
  A extends string[] = []
> = S extends `${infer P}${T}${infer R}` ? Split<R, T, [...A, P]> : [...A, S];

type PickParams<T, A extends string[] = []> = T extends [infer F, ...infer R]
  ? F extends `:${infer Param}`
    ? PickParams<R, [...A, Param]>
    : PickParams<R, A>
  : A[number];

type ParseUrlParams<T extends string> = PickParams<Split<T, "/">>;

// 더 좋은 풀이
// type ParseUrlParams<T> = T extends `${string}:${infer R}`
//   ? R extends `${infer P}/${infer L}`
//     ? P | ParseUrlParams<L>
//     : R
//   : never
