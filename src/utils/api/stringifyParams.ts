import { RequestParamsModel } from "src/models/requests/request-params-model/request-params-model";

export const stringifyParams = (obj: RequestParamsModel) => {
    return Object.entries(obj).reduce((acc, [key, value], index) => {
        if (value !== null && value !== undefined) {
            return `${acc}${index === 0 ? "?" : "&"}${key}=${value}`;
        }

        return acc;
    }, "");
};
