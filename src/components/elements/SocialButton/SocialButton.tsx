/* eslint-disable react/prop-types */
import React, { useMemo, memo } from "react";

import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";

import styles from "./SocialButton.module.scss";

type ButtonProps = {
    keyword: string;
    width: number;
    height: number;
    name: string;
};

const upperCaseFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const SocialButton: React.FC<ButtonProps> = ({ keyword, width, height, name }) => {
    const uppercaseName = useMemo(() => upperCaseFirst(name), [name]);

    return (
        <div className={styles.textIconWrapper}>
            <Icon name={name} width={width} height={height} />
            <Text className={styles.inlineBLock}>
                {keyword} with {uppercaseName}
            </Text>
            <Icon name="arrowDashRight" width={10} height={10} />
        </div>
    );
};

export const MemoizedSocialButton = memo(SocialButton);
