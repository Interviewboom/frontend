import React, { ChangeEventHandler, FC, useId } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
    value: string;
    caption?: string;
    type?: "text" | "password";
    placeholder?: string;
    isDisable?: boolean;
    isReadonly?: boolean;
    isRequired?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const TextField: FC<TextFieldProps> = ({
    value,
    type = "text",
    placeholder,
    onChange,
    caption,
    isDisable,
    isReadonly,
    isRequired,
}) => {
    const id = useId();

    return (
        <div className={styles.group}>
            {caption && (
                <label htmlFor={id} className={styles.label}>
                    {caption}
                </label>
            )}
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.input}
                required={isRequired}
                readOnly={isReadonly}
                disabled={isDisable}
            />
        </div>
    );
};

TextField.defaultProps = {
    type: "text",
    placeholder: "",
    caption: "",
    isDisable: false,
    isReadonly: false,
    isRequired: true,
};
