import React, { FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    textType: "textBig" | "textMedium" | "textSmall";
    colorClass?: string;
}

export const Text: FC<TextProps> = ({ children, isParagraph, textType, colorClass }) => {
    if (isParagraph) {
        return <p className={`general ${styles[textType]} ${colorClass}`}>{children}</p>;
    }
    return <span className={`general ${styles[textType]} ${colorClass}`}>{children}</span>;
};

Text.defaultProps = {
    isParagraph: false,
    colorClass: "dark-text-color",
};
