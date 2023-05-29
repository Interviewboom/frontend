import LinkNext from "next/link";
import { FC } from "react";

import { Icon } from "@elements/Icon";
import { useCssClasses } from "@utils/getClassnames";

import { iconsName } from "./helpers/const";
import styles from "./Link.module.scss";
import { LinkTypes } from "./Link.types";

export const Link: FC<LinkTypes> = ({
    href,
    children,
    withArrow,
    className,
    classNameText,
    withBorder,
    color,
    onClick,
}) => {
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
            {withArrow ? <Icon name={iconsName[withArrow]} className={styles.icon} width={12} height={12} /> : null}
        </LinkNext>
    );
};
