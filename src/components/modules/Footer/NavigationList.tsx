import { FC } from "react";

import { Text } from "@elements/Text";

import styles from "./NavigationList.module.scss";

interface NavigationListProps {
    title: string;
    // TODO: add link
    items?: Array<{ name: string }>;
}

export const NavigationList: FC<NavigationListProps> = ({ title, items }) => {
    return (
        <div>
            <Text color="mostLightColor" size="big" isParagraph bold>
                {title}
            </Text>

            {items && (
                <ul className={styles.list}>
                    {items.map(item => (
                        <li key={item.name} className={styles.item}>
                            <Text color="mostLightColor">{item.name}</Text>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
