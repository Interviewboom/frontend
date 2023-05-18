import { FC, ReactNode } from "react";
import { useCssClasses } from "src/utils/getClassnames";
import LinkNext from "next/link";
import { Icon } from "@elements/Icon";
import styles from "./Link.module.scss";

interface LinkProps {
    withArrow?: "left" | "right";
    withBorder?: boolean;
    href: string;
    children: ReactNode;
    className?: string;
    classNameText?: string;
    color?: "white";
    onClick?: () => void;
}

export const Link: FC<LinkProps> = ({
    href,
    children,
    withArrow,
    className,
    classNameText,
    withBorder,
    color,
    onClick,
}) => {
    const iconName = {
        left: "arrowLeftLong",
        right: "arrowRightLong",
    };

    const linkClasses = useCssClasses([
        styles.link,
        className,
        color && styles[color],
        withArrow && styles[withArrow],
        withBorder && styles.withBorder,
    ]);

    const linkClassesText = useCssClasses([styles.text, classNameText]);

    return (
        <LinkNext href={href} className={linkClasses} onClick={onClick}>
            <span className={linkClassesText}>{children}</span>
            {withArrow ? <Icon name={iconName[withArrow]} className={styles.icon} width={12} height={12} /> : null}
        </LinkNext>
    );
};
