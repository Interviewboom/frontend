import React, { FC, ReactNode, useMemo } from "react";
import styles from "./Text.module.scss";
import { getClassnames } from "../../../utils/getClassnames";

interface TextProps {
    children: ReactNode;
    isParagraph?: boolean;
    textType?: "big" | "medium" | "small";
    color?: "dark-text-color" | "light-text-color";
    bold?: true | false;
}

export const Text: FC<TextProps> = ({
    children,
    isParagraph,
    textType = "medium",
    color = "dark-text-color",
    bold = false,
}) => {
    const textClasses = useMemo(
        () => getClassnames([styles.general, styles[textType], bold && styles.bold, color]),
        [bold, color, textType]
    );

    if (isParagraph) {
        return <p className={textClasses}>{children}</p>;
    }
    return <span className={textClasses}>{children}</span>;
};

Text.defaultProps = {
    isParagraph: false,
    color: "dark-text-color",
    bold: false,
    textType: "medium",
};
