import React, { ChangeEventHandler, FC } from "react";
import { Text } from "@elements/Text/Text";
import styles from "./RadioInputsGroupe.module.scss";
import { getClassnames } from "../../../utils/getClassnames";

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

const RadioInputsGroupe: FC<RadioInputsGroupeProps> = ({ name, onChange, value, choices }) => {
    return (
        <div className={styles.group}>
            {choices.map(item => (
                <div className={getClassnames([styles.row, value === item.value && styles.checked])} key={item.value}>
                    <input
                        type="radio"
                        name={name}
                        value={item.value}
                        checked={value === item.value}
                        className={styles.circle}
                        onChange={onChange}
                    />

                    <Text textType="medium">{item.caption}</Text>
                </div>
            ))}
        </div>
    );
};

export default RadioInputsGroupe;
