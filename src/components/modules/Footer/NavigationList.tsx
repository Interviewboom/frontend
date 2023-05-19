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
                    {items.map(item => (
                        <Link key={item.name} href={item.link} className={styles.item}>
                            {item.name}
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};
