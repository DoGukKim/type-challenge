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
type ParseUrlParams<Url> = Url extends `${string}:${infer ParamName}`
  ? ParamName extends `${infer CurrentParam}/${infer RestUrl}`
    ? CurrentParam | ParseUrlParams<RestUrl>
    : ParamName
  : never;

// 다른 풀이 방법
// type Split<
//   S extends string,
//   T extends string,
//   A extends string[] = []
// > = S extends `${infer P}${T}${infer R}` ? Split<R, T, [...A, P]> : [...A, S];

// type PickParams<T, A extends string[] = []> = T extends [infer F, ...infer R]
//   ? F extends `:${infer Param}`
//     ? PickParams<R, [...A, Param]>
//     : PickParams<R, A>
//   : A[number];

// type ParseUrlParams<T extends string> = PickParams<Split<T, "/">>;
