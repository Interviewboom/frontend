import React, { FC } from "react";

import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";

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

            <Text size="big" isParagraph lineHeight={22}>
                {caption}
            </Text>
        </div>
    );
};

export default Step;
