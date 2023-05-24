import Link from "next/link";
import React, { ReactNode, MouseEventHandler } from "react";

import { useCssClasses } from "@utils/getClassnames";

import styles from "./Button.module.scss";
import { ButtonLink } from "./ButtonLink";

type ButtonProps = {
    children: ReactNode;
    link?: string;
    size?: "big" | "medium" | "small";
    isAdaptive?: boolean;
    color?: "green" | "grey" | "transparent";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit";
    className?: string;
    disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    onClick,
    size = "big",
    link,
    isAdaptive = false,
    color = "green",
    className,
    disabled = false,
}) => {
    const buttonClasses = useCssClasses([
        styles.button,
        styles[size],
        styles[color],
        isAdaptive && styles.adaptive,
        className,
    ]);

    if (link) {
        return (
            <Link href={link} passHref legacyBehavior>
                <ButtonLink className={buttonClasses}>{children}</ButtonLink>
            </Link>
        );
    }

    return (
        <button
            type={type === "submit" ? "submit" : "button"}
            disabled={disabled}
            className={buttonClasses}
            {...(onClick ? { onClick } : {})}
        >
            {children}
        </button>
    );
};
