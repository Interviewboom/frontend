import React, { ChangeEventHandler, FC } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
    value: string;
    label: string;
    id: string;
    type: string;
    placeholder: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const TextField: FC<TextFieldProps> = ({ value, type, placeholder, handleChange, label, id }) => {
    return (
        <div className={styles.group}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className={styles.input}
            />
        </div>
    );
};

export default TextField;
