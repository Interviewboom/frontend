import React, { ChangeEventHandler, FC, useId } from "react";
import { Text } from "@elements/Text/Text";
import { useCssClasses } from "src/utils/getClassnames";

import styles from "./RadioInput.module.scss";

interface RadioInputProps {
    value: string | number;
    caption: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    answerStatus?: boolean;
    isTestCompleted?: boolean;
}

export const RadioInput: FC<RadioInputProps> = ({
    value,
    name,
    caption,
    onChange,
    checked,
    answerStatus,
    isTestCompleted,
}) => {
    const classes = useCssClasses([
        styles.row,
        checked && styles.highlightedBorder,
        isTestCompleted && answerStatus && styles.green,
        isTestCompleted && answerStatus === false && checked && styles.red,
    ]);

    const id = useId();
    return (
        <label htmlFor={id} className={classes}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                className={styles.circle}
                onChange={onChange}
                disabled={isTestCompleted}
                id={id}
            />

            {!isTestCompleted && <div className={styles.customCircle} />}

            <Text size="medium">{caption}</Text>
            {isTestCompleted && answerStatus === false && checked && <span className={styles.close} />}
            {isTestCompleted && answerStatus && (
                <span className={styles.rightAnswerMark}>
                    <span className={styles.checkSign1} />
                    <span className={styles.checkSign2} />
                </span>
            )}
        </label>
    );
};
