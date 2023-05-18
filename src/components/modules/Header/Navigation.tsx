import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { getClassnames } from "src/utils/getClassnames";
import { Link } from "@elements/Link";
import { Icon } from "@elements/Icon";
import { formatLink } from "@utils/formatLink";

import { NAVIGATION_ITEMS } from "./helpers/const";

import styles from "./Navigation.module.scss";

import { interfaceNavigationItem } from "./Header.types";

type NavigationProps = {
    actionToCloseBurgerMenu: () => void;
};

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
                        {item?.subList ? (
                            <div className={styles.navigationSubBlock}>
                                <ul className={styles.navigationSubBlockList}>
                                    {item.subList.map(subItem => (
                                        <li key={subItem.name}>
                                            <Link
                                                href={formatLink(subItem.link)}
                                                classNameText={styles.navigationSubBlockLink}
                                                onClick={actionToCloseBurgerMenu}
                                            >
                                                <Icon
                                                    className={styles.icon}
                                                    name={subItem.icon}
                                                    width={33}
                                                    height={33}
                                                />
                                                {subItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                {item?.moreLink ? (
                                    <Link
                                        className={styles.moreLink}
                                        href={formatLink(item.moreLink.link)}
                                        withArrow="right"
                                        onClick={actionToCloseBurgerMenu}
                                    >
                                        {item.moreLink.name}
                                    </Link>
                                ) : null}
                            </div>
                        ) : null}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
