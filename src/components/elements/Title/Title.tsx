import React, { FC, ReactNode } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
    level?: 1 | 2 | 3;
    children: ReactNode;
    color?: "dark-text-color" | "light-text-color";
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<TitleProps> = ({ level, children, color }: TitleProps) => {
    const Tag = `h${level}` as HeadingTag;
    return <Tag className={`${styles[`heading${level}`]} ${styles.heading} ${color}`}>{children}</Tag>;
};

Title.defaultProps = {
    level: 3,
    color: "dark-text-color",
};
