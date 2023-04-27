import { RequestParams } from "../../models/entities/request-params/request-params";

export const stringifyParams = (obj: RequestParams) => {
    return Object.entries(obj).reduce((acc, [key, value], index) => {
        if (value !== null && value !== undefined) {
            return `${acc}${index === 0 ? "?" : "&"}${key}=${value}`;
        }

        return acc;
    }, "");
};
