import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import React from "react";
import styles from "./SocialButton.module.scss";

type ButtonProps = {
    keyword: string;
    width: number;
    height: number;
    name: string;
};

export const SocialButton: React.FC<ButtonProps> = ({ keyword, width, height, name }) => {
    const upperCaseFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
    return (
        <div className={styles.textIconWrapper}>
            <Icon name={name} width={width} height={height} />
            <Text className={styles.inlineBLock}>
                {keyword} with {upperCaseFirst(name)}
            </Text>
            <Icon name="arrowDashRight" width={10} height={10} />
        </div>
    );
};
