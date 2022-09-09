import React, { FC, useState } from "react";
import { answerType, questionAllDataType } from "src/api/apiTypes";

import { LoadBar } from "@elements/LoadBar/LoadBar";
import { AnswersCheckbox } from "./AnswersCheckbox";
import { Answers } from "./Answers";

import styles from "./QuestionBlock.module.scss";
import { Modal } from "./Modal";

type QuestionBlockProps = {
    questionData: questionAllDataType;
    answers: answerType[];
};

export const QuestionBlock: FC<QuestionBlockProps> = ({ questionData, answers }) => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        questionData &&
        answers && (
            <div className={styles.question}>
                <div className={styles.wrapper}>
                    <div className={styles.barWrapper}>
                        <LoadBar
                            currentQuestionNumber={questionData.countAnswered + 1}
                            numberOfQuestions={questionData.count}
                            onClose={() => setModalOpened(true)}
                        />
                    </div>

                    {questionData.question.is_multiselect ? (
                        <AnswersCheckbox
                            questionInfo={questionData.question}
                            answers={answers}
                            isLast={questionData.count === questionData.countAnswered + 1}
                        />
                    ) : (
                        <Answers
                            questionInfo={questionData.question}
                            answers={answers}
                            isLast={questionData.count === questionData.countAnswered + 1}
                        />
                    )}
                </div>
                {modalOpened && <Modal setModalOpened={setModalOpened} />}
            </div>
        )
    );
};