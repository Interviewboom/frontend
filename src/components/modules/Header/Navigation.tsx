import Link from "next/link";
import { NAVIGATION_ITEMS } from "./const";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {NAVIGATION_ITEMS.map(item => (
                    <li className={styles.navigationItem}>
                        <Link href={item.link} legacyBehavior>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
