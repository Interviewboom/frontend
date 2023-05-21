import { FC } from "react";
import { useCssClasses } from "src/utils/getClassnames";
import { Icon } from "@elements/Icon";
import styles from "./Link.module.scss";
import { ButtonLikeLinkTypes } from "./ButtonLikeLink.types";
import { iconsName } from "./helpers/const";

export const ButtonLikeLink: FC<ButtonLikeLinkTypes> = ({
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
        <button type="button" className={linkClasses} onClick={onClick}>
            <span className={linkClassesText}>{children}</span>
            {withArrow ? <Icon name={iconsName[withArrow]} className={styles.icon} width={12} height={12} /> : null}
        </button>
    );
};
