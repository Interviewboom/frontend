import { URLSearchParams } from "url";

export type paramsType =
    | string
    | URLSearchParams
    | Record<string, string | readonly string[]>
    | Iterable<[string, string]>
    | readonly [string, string][]
    | undefined;

export const stringifyParams = (obj: paramsType) => {
    return `?${new URLSearchParams(obj)}`;
};
