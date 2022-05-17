import React, { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    link?: string;
    width?: "big" | "medium" | "small";
    height?: "heightBig" | "heightSmall";
    color?: "green" | "grey";
    onClick: MouseEventHandler<HTMLButtonElement>;

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
    const button = (
        <button
            type={type === "submit" ? "submit" : "button"}
            className={`${styles.button} ${styles[width]} ${styles[color]} ${styles[height]} `}
            onClick={onClick}
        >
            {children}
        </button>
    );

    if (link) {
        <Link href={link}>{button}</Link>;
    }

    return button;
};

Button.defaultProps = {
    type: "button",
    width: "big",
    height: "heightBig",
    link: "",
    color: "green",
};
