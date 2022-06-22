import React, { FC, ReactNode } from "react";
import styles from "./Title.module.scss";
import { useCssClasses } from "../../../utils/getClassnames";

interface TitleProps {
    level?: 1 | 2 | 3 | 4 | 5;
    children: ReactNode;
    color?: "dark-text-color" | "light-text-color" | "most-light-color";
    className?: string;
}
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<TitleProps> = ({ level = 3, children, color = "dark-text-color", className }) => {
    const titleClasses = useCssClasses([styles.heading, styles[`heading${level}`], styles[color], className]);
    const Tag = `h${level}` as HeadingTag;
    return <Tag className={titleClasses}>{children}</Tag>;
};
