import React, { FC, ReactNode } from "react";
import styles from "./Text.module.scss";
import { getClassnames } from "../../utils/getClassnames";

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
