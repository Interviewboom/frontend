import React, { ReactNode, MouseEventHandler, useMemo } from "react";
import Link from "next/link";
import { getClassnames } from "src/utils/getClassnames";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    link?: string;
    sizes?: "big" | "medium" | "small";
    isMobile?: boolean;
    color?: "green" | "grey";
    onClick?: MouseEventHandler<HTMLButtonElement>;

    type?: "button" | "submit";
};

export const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    onClick,
    sizes = "big",
    link,
    isMobile = false,
    color = "green",
}) => {
    const buttonClasses = useMemo(
        () => getClassnames([styles.button, styles[sizes], styles[color], isMobile && styles.mobile]),
        [sizes, color, isMobile]
    );

    const button = (
        <button
            type={type === "submit" ? "submit" : "button"}
            className={buttonClasses}
            {...(onClick ? { onClick } : {})}
        >
            {children}
        </button>
    );

    if (link) {
        return <Link href={link}>{button}</Link>;
    }

    return button;
};

Button.defaultProps = {
    type: "button",
    sizes: "big",
    link: "",
    isMobile: false,
    color: "green",
    onClick: () => {},
};
