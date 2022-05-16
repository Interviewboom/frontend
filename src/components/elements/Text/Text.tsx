import React, { FC, ReactNode, useCallback } from "react";
import styles from "./Text.module.scss";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    textType?: "big" | "medium" | "small";
    color?: "dark-text-color" | "light-text-color";
    bold?: boolean;
}

export const Text: FC<TextProps> = ({
    children,
    isParagraph,
    textType = "medium",
    color = "dark-text-color",
    bold = false,
}) => {
    const getClassnames = useCallback((obj: { [key: string]: boolean }): string => {
        return Object.entries(obj)
            .filter(arr => arr[1])
            .map(arr => arr[0])
            .join(" ");
    }, []);

    const TextClasses = getClassnames({
        general: true,
        [styles[textType]]: true,
        bold,
        [color]: true,
    });

    if (isParagraph) {
        return <p className={TextClasses}>{children}</p>;
    }
    return <span className={TextClasses}>{children}</span>;
};

Text.defaultProps = {
    isParagraph: false,
    color: "dark-text-color",
    bold: false,
    textType: "medium",
};
