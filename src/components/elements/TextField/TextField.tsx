import React, { ChangeEventHandler, FC, useCallback, useId, useState } from "react";
import styles from "./TextField.module.scss";
import { Icon } from "../Icon/Icon";

interface TextFieldProps {
    value: string;
    caption?: string;
    type?: "text" | "password";
    placeholder?: string;
    isDisable?: boolean;
    isReadonly?: boolean;
    isRequired?: boolean;
    error?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

interface attributesType {
    placeholder?: string;
    isDisable?: boolean;
    isReadonly?: boolean;
    isRequired?: boolean;
}

export const TextField: FC<TextFieldProps> = ({
    value,
    type = "text",
    onChange,
    placeholder,
    caption,
    isDisable,
    isReadonly,
    isRequired,
    error,
}) => {
    const id = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const conditionalAttributes = {
        placeholder,
        required: isRequired,
        readOnly: isReadonly,
        disabled: isDisable,
    };

    const toggleVisibility = useCallback(() => {
        setIsPasswordVisible((prev: boolean) => !prev);
    }, []);

    const getExistingAttributes = useCallback((obj: attributesType): attributesType => {
        return Object.fromEntries(Object.entries(obj).filter(arr => !(arr[1] === undefined)));
    }, []);

    return (
        <div className={styles.group}>
            {caption && (
                <label htmlFor={id} className={styles.label}>
                    {caption}
                </label>
            )}
            <div className={styles.inputWrapper}>
                <input
                    type={isPasswordVisible ? "text" : type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`${styles.input} ${error ? styles.inputError : ""}`}
                    {...getExistingAttributes(conditionalAttributes)}
                />
                {type === "password" && (
                    <button type="button" className={styles.inputToggler} onClick={toggleVisibility}>
                        <Icon
                            svgUrl={`/assets/images/${isPasswordVisible ? "eye" : "eye-crossed"}.svg`}
                            width={22}
                            height={isPasswordVisible ? 16 : 19}
                            alt="eye"
                        />
                    </button>
                )}
            </div>
            {error && (
                <div className={styles.errorWrapper}>
                    <Icon svgUrl="/assets/images/error.svg" width={14} height={15} alt="error" />
                    <p className={styles.errorText}>{error}</p>
                </div>
            )}
        </div>
    );
};

TextField.defaultProps = {
    type: "text",
    caption: "",
    placeholder: "",
    isDisable: false,
    isReadonly: false,
    isRequired: false,
    error: "",
};
