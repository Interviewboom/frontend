export const formatLink = (link: string): string => link.startsWith("#") ? `/${link}` : link;
