import { useRouter } from "next/router";
import { FC, useCallback } from "react";

import { Link } from "@elements/Link";
import { formatLink } from "@utils/formatLink";
import { getClassnames } from "src/utils/getClassnames";

import styles from "./Navigation.module.scss";
import { NavigationSubBlock } from "./NavigationSubBlock";
import type { interfaceNavigationItem, NavigationProps } from "../Header.types";
import { NAVIGATION_ITEMS } from "../helpers/const";

export const Navigation: FC<NavigationProps> = ({ closeBurgerMenu }) => {
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
                        <Link className={styles.navigationLink} href={formatLink(item.link)} onClick={closeBurgerMenu}>
                            {item.name}
                        </Link>
                        <NavigationSubBlock
                            subList={item.subList}
                            moreLink={item.moreLink}
                            closeBurgerMenu={closeBurgerMenu}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
