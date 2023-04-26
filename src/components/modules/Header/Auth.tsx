import Link from "next/link";
import { AUTH_ITEMS } from "./const";

import styles from "./Auth.module.scss";

export const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.navigationList}>
                {AUTH_ITEMS.map(item => (
                    <li className={styles.navigationItem}>
                        <Link href={item.link} legacyBehavior>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
