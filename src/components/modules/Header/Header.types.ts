interface NavigationTypes {
    name: string;
    link: string;
}
interface NavigationSubItem {
    icon: string;
}

export interface NavigationItem {
    subList?: Array<NavigationTypes & NavigationSubItem>;
    moreLink?: NavigationTypes;
}

export type NavigationProps = {
    actionToCloseBurgerMenu: () => void;
};

export type interfaceNavigationItem = NavigationTypes & NavigationItem;
