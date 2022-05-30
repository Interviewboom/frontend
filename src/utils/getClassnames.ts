import { useMemo } from "react";

export const getClassnames = (array: Array<string | boolean | undefined>): string => {
    return array.filter(arrItem => arrItem).join(" ");
};

export const useCssClasses = (array: Array<string | boolean | undefined>): string => {
    return useMemo(() => getClassnames(array), [array]);
};
