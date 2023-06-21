import { ChangeEventHandler, FC, useCallback, useId, useState } from "react";

import { Icon } from "@elements/Icon";

import styles from "./TextField.module.scss";

interface TextFieldProps {
    value: string;
    name?: string;
    caption?: string;
    type?: "text" | "password" | "email";
    placeholder?: string;
    isDisable?: boolean;
    isReadonly?: boolean;
    err?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

interface attributesType {
    placeholder?: string;
    isDisable?: boolean;
    isReadonly?: boolean;
}

export const TextField: FC<TextFieldProps> = ({
    value,
    name,
    type = "text",
    onChange,
    placeholder,
    caption,
    isDisable,
    isReadonly,
    err,
}) => {
    const id = useId();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const conditionalAttributes = {
        placeholder,
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
            <div className={styles.inputWrapper}>
                {caption && (
                    <label htmlFor={id} className={styles.label}>
                        {caption}
                    </label>
                )}
                <input
                    type={isPasswordVisible ? "text" : type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`${styles.input} ${err && styles.inputError} ${
                        type !== "password" && !err && styles.inputRemoveExtraRightPadding
                    }`}
                    {...getExistingAttributes(conditionalAttributes)}
                />
                {type === "password" && !err && value && (
                    <button type="button" className={styles.inputToggler} onClick={toggleVisibility}>
                        {isPasswordVisible ? (
                            <Icon name="eye-crossed" width={30} height={30} />
                        ) : (
                            <Icon name="eye" width={30} height={30} />
                        )}
                    </button>
                )}
                {err && <span className={styles.errorWrapper}>{err}</span>}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: "text",
    caption: "",
    placeholder: "",
    isDisable: false,
    isReadonly: false,
    err: "",
};
