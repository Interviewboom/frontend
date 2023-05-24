import React, { MouseEventHandler } from "react";

import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { useCssClasses } from "@utils/getClassnames";

import styles from "./ShareButton.module.scss";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export const ShareButton: React.FC<ButtonProps> = ({ onClick, className }) => {
    const buttonClasses = useCssClasses([styles.share, className]);

    return (
        <button type="button" className={buttonClasses} onClick={onClick}>
            <Icon name="share" width={18} height={15} className={styles.icon} />
            <Text>Share</Text>
        </button>
    );
};
