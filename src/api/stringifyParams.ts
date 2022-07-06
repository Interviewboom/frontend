import { URLSearchParams } from "url";

export interface paramsType {
    [k: string]: string | number;
}

export const stringifyParams = (obj: paramsType) => {
    return `?${new URLSearchParams(obj)}`;
};
