import { useRouter } from "next/router";
import { FC, useCallback } from "react";

import { Link } from "@elements/Link";
import { formatLink } from "@utils/formatLink";
import { getClassnames } from "src/utils/getClassnames";

import styles from "./Navigation.module.scss";
import { NavigationSubBlock } from "./NavigationSubBlock";
// eslint-disable-next-line import/order
import type { interfaceNavigationItem, NavigationProps } from "../Header.types";
// eslint-disable-next-line import/order
import { NAVIGATION_ITEMS } from "../helpers/const";

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
