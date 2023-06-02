import { useMemo } from "react";

import { Link } from "@elements/Link";

import styles from "./UserPolicy.module.scss";

export const UserPolicy = () => {
    const list = useMemo(
        () => [
            { name: "Terms of Service", link: "/" },
            { name: "Privacy Policy", link: "/" },
        ],
        []
    );

    return (
        <ul className={styles.list}>
            {list.map(({ name, link }) => (
                <li key={name}>
                    <Link href={link} className={styles.link}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
