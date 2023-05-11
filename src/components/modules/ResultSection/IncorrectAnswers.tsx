import React, { FC } from "react";
import { Icon } from "@elements/Icon/Icon";
import { Title } from "@elements/Title";
import { SessionQuestionModel } from "src/models/entities/session-question-model/session-question-model";

import styles from "./IncorrectAnswers.module.scss";

type IncorrectAnswersProps = {
    sessionQuestions: SessionQuestionModel[];
};

export const IncorrectAnswers: FC<IncorrectAnswersProps> = ({ sessionQuestions }) => {
    return (
        <>
            <Title className={styles.textClass} level={3}>
                Incorrect answers
            </Title>
            <ul className={styles.list}>
                {sessionQuestions.map((item, index) => {
                    if (item.is_answered) return null;

                    return (
                        <li className={styles.listItem} key={item.question_id}>
                            <Icon name="wrongCircle" width={48} height={48} className={styles.margRight} />
                            <Title level={5}>
                                {index + 1}. {item.question}
                            </Title>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
