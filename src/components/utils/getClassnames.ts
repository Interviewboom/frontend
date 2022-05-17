export const getClassnames = (obj: { [key: string]: boolean }): string => {
    return Object.entries(obj)
        .filter(arr => arr[1])
        .map(arr => arr[0])
        .join(" ");
};
