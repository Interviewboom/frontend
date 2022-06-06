import { Text } from "@elements/Text";
import { FC } from "react";

import styles from "./NavigationList.module.scss";

interface NavigationListProps {
    title: string;
    // TODO: add link
    items?: Array<{ name: string }>;
}

export const NavigationList: FC<NavigationListProps> = ({ title, items }) => {
    return (
        <div>
            <Text color="most-light-color" size="big" isParagraph bold>
                {title}
            </Text>

            {items && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <li className={styles.item}>
                            <Text color="most-light-color">{item.name}</Text>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
