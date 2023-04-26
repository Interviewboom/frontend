export type ParamsType = { [index: string]: string | number };

export const stringifyParams = (obj: ParamsType) => {
    return Object.entries(obj).reduce((acc, [key, value], index) => {
        if (value !== null && value !== undefined) {
            return `${acc}${index === 0 ? "?" : "&"}${key}=${value}`;
        }

        return acc;
    }, "");
};
