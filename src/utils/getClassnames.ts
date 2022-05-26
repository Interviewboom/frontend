import { useMemo } from "react";

export const getClassnames = (array: Array<string | boolean>): string => {
    return array.filter(arrItem => arrItem).join(" ");
};

export const useCssClasses = (array: Array<string | boolean>): string => {
    return useMemo(() => getClassnames(array), [array]);
};
