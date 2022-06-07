import React, { FC } from "react";
import { Text } from "@elements/Text";
import { Icon } from "../../elements/Icon/Icon";

import styles from "./Step.module.scss";

interface stepProps {
    size: number;
    caption: string;
    iconName: string;
}

export const Step: FC<stepProps> = ({ size, caption, iconName }) => {
    return (
        <div className={styles.stepWrapper}>
            <div className={styles.step}>
                <Icon name={iconName} width={size} height={size} />
            </div>
            <figcaption className={styles.caption}>
                <Text size="big">{caption}</Text>
            </figcaption>
        </div>
    );
};

export default Step;
