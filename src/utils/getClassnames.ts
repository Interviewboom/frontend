import { useMemo } from "react";

export const getClassnames = (array: Array<string | boolean>): string => {
    return array.filter(arrItem => arrItem).join(" ");
};

export const useCssClasses = (array: Array<string | boolean>): string => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(() => getClassnames(array), [...array]);
};
