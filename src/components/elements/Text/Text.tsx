import { FC, ReactNode } from "react";

import { useCssClasses } from "@utils/getClassnames";

import styles from "./Text.module.scss";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    size?: "big" | "medium" | "small";
    color?: "darkTextColor" | "lightTextColor" | "greyTextColor" | "mostLightColor";
    semiBold?: true | false;
    className?: string;
    lineHeight?: 17 | 20 | 22 | 24 | 28 | 32;
}

export const Text: FC<TextProps> = ({
    children,
    isParagraph,
    size = "medium",
    color = "darkTextColor",
    semiBold = false,
    lineHeight = "",
    className,
}) => {
    const textClasses = useCssClasses([
        styles[size],
        semiBold && styles.semiBold,
        styles[color],
        styles[`lineHeight${lineHeight}`],
        className,
    ]);

    if (isParagraph) {
        return <p className={textClasses}>{children}</p>;
    }
    return <span className={textClasses}>{children}</span>;
};
