import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonProps = {
    children?: ReactNode;
    link?: string;
    width?: "width320" | "width248";
    type?: "button" | "submit";
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, type = "button", onClick, width = "width320", link }) => {
    if (link) {
        <Link href={link}>
            <button className={`${styles.button} ${styles[width]}`} onClick={onClick} type={type ? "button" : "button"}>
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
    children: "",
    link: "",
};
