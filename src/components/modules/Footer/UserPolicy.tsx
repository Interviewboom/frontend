import { useMemo } from "react";

import styles from "./UserPolicy.module.scss";

export const UserPolicy = () => {
    const list = useMemo(
        () => [{ name: "Файли cookie" }, { name: "Клієнтська угода" }, { name: "Політика конфіденційності" }],
        []
    );

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
