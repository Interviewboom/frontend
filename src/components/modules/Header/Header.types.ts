interface NavigationTypes {
    name: string;
    link: string;
}
interface NavigationSubItem {
    icon: string;
}

interface NavigationItem {
    subList?: Array<NavigationTypes & NavigationSubItem>;
    moreLink?: NavigationTypes;
}

export type interfaceNavigationItem = NavigationTypes & NavigationItem;
