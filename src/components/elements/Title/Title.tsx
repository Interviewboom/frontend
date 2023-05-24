import React, { FC, ReactNode } from "react";

import { useCssClasses } from "@utils/getClassnames";

import styles from "./Title.module.scss";

interface TitleProps {
    level?: 1 | 2 | 3 | 4 | 5;
    children: ReactNode;
    color?: "darkTextColor" | "lightTextColor" | "mostLightColor";
    className?: string;
}
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<TitleProps> = ({ level = 3, children, color = "darkTextColor", className }) => {
    const titleClasses = useCssClasses([styles.heading, styles[`heading${level}`], styles[color], className]);
    const Tag = `h${level}` as HeadingTag;

    return <Tag className={titleClasses}>{children}</Tag>;
};
