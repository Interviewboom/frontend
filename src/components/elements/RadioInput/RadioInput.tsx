import React, { ChangeEventHandler, FC, useId } from "react";
import { Text } from "@elements/Text/Text";
import { useCssClasses } from "src/utils/getClassnames";
import { Icon } from "@elements/Icon/Icon";

import styles from "./RadioInput.module.scss";

interface RadioInputProps {
    value: string | number;
    text: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    answerStatus?: boolean;
    isResultShown?: boolean;
    disabled?: boolean;
    type?: "radio" | "checkbox";
}

export const RadioInput: FC<RadioInputProps> = ({
    value,
    name,
    text,
    onChange,
    disabled,
    checked,
    answerStatus,
    isResultShown,
    type = "radio",
}) => {
    const classes = useCssClasses([
        styles.row,
        checked && styles.highlightedBorder,
        isResultShown && answerStatus && styles.green,
        isResultShown && answerStatus === false && checked && styles.red,
    ]);

    const custominputClasses = useCssClasses([styles.customHollowInput, type === "checkbox" && styles.checkBoxInput]);

    const id = useId();

    return (
        <label htmlFor={id} className={classes}>
            <input
                type={type}
                name={name}
                value={value}
                checked={checked}
                className={styles.circle}
                onChange={onChange}
                disabled={disabled}
                id={id}
            />

            {!isResultShown && (
                <div className={custominputClasses}>
                    {checked && type === "radio" && <div className={styles.innerCircle} />}
                    {checked && type === "checkbox" && <Icon name="checkMark" width={25} height={25} />}
                </div>
            )}

            <Text size="small">{text}</Text>
            {isResultShown && answerStatus === false && checked && <span className={styles.close} />}
            {isResultShown && answerStatus && (
                <span className={styles.rightAnswerMark}>
                    <span className={styles.checkSign1} />
                    <span className={styles.checkSign2} />
                </span>
            )}
        </label>
    );
};
