import Link from "next/link";
import { NAVIGATION_ITEMS } from "./const";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {NAVIGATION_ITEMS.map(item => (
                    <li key={item.name} className={styles.navigationItem}>
                        <Link legacyBehavior href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
