import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import React, { FC } from "react";
import styles from "./LoadBar.module.scss";

interface LoadBarProps {
    currentQuestionNumber: number;
    numberOfQuestions: number;
    onClose: () => void;
}

export const LoadBar: FC<LoadBarProps> = ({ onClose, currentQuestionNumber, numberOfQuestions }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.alarm}>
                <Icon name="alarm" />
            </div>
            <Text size="small" lineHeight={24}>
                {currentQuestionNumber}/{numberOfQuestions}
            </Text>
            <progress className={styles.progress} max="1" value={currentQuestionNumber / numberOfQuestions} />

            <button type="button" className={styles.closeContainer} onClick={onClose}>
                <div className={styles.leftRight} />
                <div className={styles.rightLeft} />
            </button>
        </div>
    );
};
