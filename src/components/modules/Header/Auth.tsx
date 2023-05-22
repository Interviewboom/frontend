import { Link } from "@elements/Link";

import styles from "./Auth.module.scss";
import { AUTH_ITEMS } from "./const";

export const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.navigationList}>
                {AUTH_ITEMS.map(item => (
                    <li key={item.name} className={styles.navigationItem}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
