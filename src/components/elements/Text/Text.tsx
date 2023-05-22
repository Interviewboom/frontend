import React, { FC, ReactNode } from "react";

import { useCssClasses } from "@utils/getClassnames";

import styles from "./Text.module.scss";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    size?: "big" | "medium" | "small";
    color?: "darkTextColor" | "lightTextColor" | "greyTextColor" | "mostLightColor";
    bold?: true | false;
    className?: string;
    lineHeight?: 17 | 20 | 22 | 24 | 28 | 32;
}

export const Text: FC<TextProps> = ({
    children,
    isParagraph,
    size = "medium",
    color = "darkTextColor",
    bold = false,
    lineHeight = "",
    className,
}) => {
    const textClasses = useCssClasses([
        styles.general,
        styles[size],
        bold && styles.bold,
        styles[color],
        styles[`lineHeight${lineHeight}`],
        className,
    ]);

    if (isParagraph) {
        return <p className={textClasses}>{children}</p>;
    }
    return <span className={textClasses}>{children}</span>;
};
