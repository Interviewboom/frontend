import React, { ChangeEventHandler, FC } from "react";
import { Text } from "@elements/Text/Text";
import styles from "./RadioInputsGroupe.module.scss";

export type choiceType = {
    caption: string;
    value: string;
};

interface RadioInputsGroupeProps {
    choices: Array<choiceType>;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string | number;
}

export const RadioInputsGroupe: FC<RadioInputsGroupeProps> = ({ name, onChange, value, choices }) => {
    return (
        <div className={styles.group}>
            {choices.map(item => (
                <label
                    htmlFor={item.value}
                    className={`${styles.row} ${item.value === value && styles.highlightedBorder}`}
                    key={item.value}
                >
                    <input
                        type="radio"
                        name={name}
                        value={item.value}
                        checked={value === item.value}
                        className={styles.circle}
                        onChange={onChange}
                        id={item.value}
                    />
                    <div className={styles.customCircle} />

                    <Text size="medium">{item.caption}</Text>
                </label>
            ))}
        </div>
    );
};
