import React, { FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    textType: "textBig" | "textMedium" | "textSmall";
    color?: "dark-text-color" | "light-text-color";
}

export const Text: FC<TextProps> = ({ children, isParagraph, textType, color }) => {
    if (isParagraph) {
        return <p className={`general ${styles[textType]} ${color}`}>{children}</p>;
    }
    return <span className={`general ${styles[textType]} ${color}`}>{children}</span>;
};

Text.defaultProps = {
    isParagraph: false,
    color: "dark-text-color",
};
