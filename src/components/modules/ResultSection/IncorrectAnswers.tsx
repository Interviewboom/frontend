import React, { FC } from "react";
import { Icon } from "@elements/Icon/Icon";
import { Title } from "@elements/Title";
import { SessionQuestion } from "src/api/apiTypes";

import styles from "./IncorrectAnswers.module.scss";

type IncorrectAnswersProps = {
    sessionQuestions: SessionQuestion[];
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
                        <li className={styles.listItem}>
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