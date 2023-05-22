import React, { FC, useState } from "react";

import { LoadBar } from "@elements/LoadBar/LoadBar";
import { AnswerModel } from "src/models/entities/answer-model/answer-model";
import { QuestionModel } from "src/models/entities/question-model/question-model";

import { Answers } from "./Answers";
import { AnswersCheckbox } from "./AnswersCheckbox";
import { Modal } from "./Modal";
import styles from "./QuestionBlock.module.scss";

type QuestionBlockProps = {
    questionData: { question: QuestionModel; count: number; countAnswered: number; test_id: number };
    answers: AnswerModel[];
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
