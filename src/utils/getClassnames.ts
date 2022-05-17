export const getClassnames = (array: Array<string | boolean>): string => {
    return array.filter(arrItem => arrItem).join(" ");
};
