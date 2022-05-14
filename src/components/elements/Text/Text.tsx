import React, { FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps {
    children: ReactNode;
    isBlock?: boolean;
    textType: "textStyle1" | "textStyle2" | "textStyle3";
}

export const Text: FC<TextProps> = ({ children, isBlock, textType }) => {
    if (isBlock) {
        return <div className={styles[textType]}>{children}</div>;
    }
    return <span className={styles[textType]}>{children}</span>;
};

Text.defaultProps = {
    isBlock: false,
};
