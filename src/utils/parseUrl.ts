export type LinkType = { link: string; name: string };

export const parseUrl = (url: string): LinkType[] => {
    const pathArray = url.split("/").filter(path => path !== "");

    return pathArray.map((path, index) => {
        const link = `/${pathArray.slice(0, index + 1).join("/")}`;
        return {
            link,
            name: path.charAt(0).toUpperCase() + path.slice(1),
        };
    });
};
