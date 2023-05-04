import { FC } from "react";
import Link from "next/link";
import { formatLink } from "@utils/formatLink";

import { NAVIGATION_ITEMS } from "./const";

import styles from "./Navigation.module.scss";

interface NavigationItem {
    name: string;
    link: string;
}

export const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {NAVIGATION_ITEMS.map((item: NavigationItem) => (
                    <li key={item.name} className={styles.navigationItem}>
                        <Link legacyBehavior href={formatLink(item.link)}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
