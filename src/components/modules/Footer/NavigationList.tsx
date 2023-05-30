import { FC } from "react";

import { Link } from "@elements/Link";

import styles from "./NavigationList.module.scss";

interface NavigationListProps {
    // TODO: add links
    items?: Array<{ name: string; link: string }>;
}

export const NavigationList: FC<NavigationListProps> = ({ items }) => {
    return (
        <div className={styles.listContainer}>
            {items && (
                <ul className={styles.list}>
                    {items.map(({ name, link }) => (
                        <li className={styles.item}>
                            <Link key={name} href={link} className={styles.link}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
