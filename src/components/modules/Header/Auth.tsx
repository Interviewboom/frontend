import { Link } from "@elements/Link";
import { AUTH_ITEMS } from "./const";

import styles from "./Auth.module.scss";

export const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.navigationList}>
                {AUTH_ITEMS.map(item => (
                    <li key={item.name} className={styles.navigationItem}>
                        <Link withArrow="right" href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
