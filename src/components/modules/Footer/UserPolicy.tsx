import { useMemo } from "react";

import styles from "./UserPolicy.module.scss";

export const UserPolicy = () => {
    const list = useMemo(() => [{ name: "Cookies" }, { name: "Terms of Service" }, { name: "Privacy Policy" }], []);

    return (
        <ul className={styles.list}>
            {list.map((item, index) => (
                <li className={styles.item} key={index}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
};
