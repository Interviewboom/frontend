import { Link } from "@elements/Link";
import { formatLink } from "@utils/formatLink";

import { AUTH_ITEMS } from "../helpers/const";
import styles from "./Auth.module.scss";

export const Auth = () => {
    return (
        <ul className={styles.navigationList}>
            {AUTH_ITEMS.map(item => (
                <li key={item.name}>
                    <Link withArrow="right" href={formatLink(item.link)} className={styles.navigationLink}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
