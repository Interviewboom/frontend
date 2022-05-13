import React, { ChangeEventHandler, FC, useCallback, useId } from "react";
import styles from "./TextField.module.scss";

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
    // const [isPasswordVisible, setisPasswordVisible] = useState(false);

    const conditionalAttributes = {
        placeholder,
        required: isRequired,
        readOnly: isReadonly,
        disabled: isDisable,
    };

    // const toggleVisibility = () => {
    //     setisPasswordVisible((prev: boolean) => !prev);
    // };

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
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className={`${styles.input} ${error ? styles.inputError : ""}`}
                {...getExistingAttributes(conditionalAttributes)}
            />
            {/* {type === "password" && (
                <button type="button" className={styles.inputToggler} onClick={toggleVisibility}>
                    <Icon svgUrl="/../../Icon/assets/eye.svg" width={22} height={16} />
                </button>
            )} */}
            {error && <div className={styles.error}>{error}</div>}
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
