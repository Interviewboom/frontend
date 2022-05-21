import React, { ReactNode, MouseEventHandler, useMemo } from "react";
import Link from "next/link";
import { getClassnames } from "src/utils/getClassnames";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    link?: string;
    width?: "big" | "medium" | "small" | "mobile";
    height?: "heightBig" | "heightSmall";
    color?: "green" | "grey";
    onClick?: MouseEventHandler<HTMLButtonElement>;

    type?: "button" | "submit";
};

export const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    onClick,
    width = "big",
    link,
    height = "heightBig",
    color = "green",
}) => {
    const buttonClasses = useMemo(
        () => getClassnames([styles.button, styles[width], styles[color], styles[height]]),
        [width, color, height]
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
    width: "big",
    height: "heightBig",
    link: "",
    color: "green",
    onClick: () => {},
};
