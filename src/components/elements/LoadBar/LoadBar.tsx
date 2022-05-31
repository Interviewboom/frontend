import { Text } from "@elements/Text";
import React, { FC } from "react";
import styles from "./LoadBar.module.scss";

interface LoadBarProps {
    currentQuestionNumber: number;
    numberOfQuestions: number;
}

export const LoadBar: FC<LoadBarProps> = ({ currentQuestionNumber, numberOfQuestions }) => {
    const onTestClose = () => {};

    return (
        <div className={styles.wrapper}>
            <div className={styles.clockWrapper} />

            <Text size="small">
                {currentQuestionNumber}/{numberOfQuestions}
            </Text>
            <progress className={styles.progress} max="1" value={currentQuestionNumber / numberOfQuestions} />

            <button type="button" className={styles.closeContainer} onClick={onTestClose}>
                <div className={styles.leftRight} />
                <div className={styles.rightLeft} />
            </button>
        </div>
    );
};
