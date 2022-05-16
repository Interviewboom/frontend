import React, { MouseEvent } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    type: "button",
};
