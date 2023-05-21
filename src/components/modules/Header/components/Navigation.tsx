import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { getClassnames } from "src/utils/getClassnames";
import { formatLink } from "@utils/formatLink";
import { Link } from "@elements/Link";
import { NavigationSubBlock } from "./NavigationSubBlock";

import { NAVIGATION_ITEMS } from "../helpers/const";

import styles from "./Navigation.module.scss";

import { interfaceNavigationItem, NavigationProps } from "../Header.types";

export const Navigation: FC<NavigationProps> = ({ actionToCloseBurgerMenu }) => {
    const router = useRouter();

    const getLinkClasses = useCallback(
        (link: string) => {
            return getClassnames([styles.navigationItem, router.pathname === link && styles.active]);
        },
        [router]
    );

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {NAVIGATION_ITEMS.map((item: interfaceNavigationItem) => (
                    <li key={item.name} className={getLinkClasses(item.link)}>
                        <Link
                            className={styles.navigationLink}
                            href={formatLink(item.link)}
                            onClick={actionToCloseBurgerMenu}
                        >
                            {item.name}
                        </Link>
                        <NavigationSubBlock
                            subList={item.subList}
                            moreLink={item.moreLink}
                            actionToCloseBurgerMenu={actionToCloseBurgerMenu}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
