import React, { FC, ReactNode } from "react";
import styles from "./Title.module.scss";

interface TitlePropsType {
    level?: 1 | 2 | 3;
    children: ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<TitlePropsType> = ({ level, children }: TitlePropsType) => {
    const Tag = `h${level}` as HeadingTag;
    return <Tag className={styles[`heading${level}`]}>{children}</Tag>;
};

Title.defaultProps = {
    level: 3,
};
