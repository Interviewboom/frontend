import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    link?: string;
    width?: "width320" | "width248";
    height?: "heightBig" | "heightSmall";
    color?: "green" | "grey";
    onClick: () => void;

    type?: "button" | "submit";
};

export const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    onClick,
    width = "width320",
    link,
    height = "heightBig",
    color = "green",
}) => {
    if (link) {
        <Link href={link}>
            <button
                className={`${styles.button} ${styles[width]} ${styles[color]} ${styles[height]} `}
                onClick={onClick}
                type={type ? "button" : "submit"}
            >
                {children}
            </button>
        </Link>;
    }

    return (
        <button className={`${styles.button} ${styles[width]}`} onClick={onClick} type="button">
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: "button",
    width: "width320",
    height: "heightBig",
    link: "",
    color: "green",
};
