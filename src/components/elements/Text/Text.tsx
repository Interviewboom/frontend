import React, { FC, ReactNode } from "react";
import styles from "./Text.module.scss";
import { useCssClasses } from "../../../utils/getClassnames";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    size?: "big" | "medium" | "small";
    color?: "dark-text-color" | "light-text-color" | "most-light-color";
    bold?: true | false;
}

export const Text: FC<TextProps> = ({
    children,
    isParagraph,
    size = "medium",
    color = "dark-text-color",
    bold = false,
}) => {
    const textClasses = useCssClasses([styles.general, styles[size], bold && styles.bold, styles[color]]);

    if (isParagraph) {
        return <p className={textClasses}>{children}</p>;
    }
    return <span className={textClasses}>{children}</span>;
};

Text.defaultProps = {
    isParagraph: false,
    color: "dark-text-color",
    bold: false,
    size: "medium",
};
