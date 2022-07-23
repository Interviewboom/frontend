import { FC, useMemo } from "react";
import { TestResultsType } from "src/api/apiTypes";

import { Title } from "@elements/Title/Title";
import { Button } from "@elements/Button/Button";
import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text/Text";

import styles from "./ResultSection.module.scss";

type ResultProps = {
    testResults: TestResultsType;
};

export const ResultSection: FC<ResultProps> = ({ testResults }) => {
    const { sessionQuestions } = testResults;

    const correctAnsweredLength = useMemo(
        () => sessionQuestions.filter(item => item.is_answered).length,
        [sessionQuestions]
    );

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Title level={2} className={styles.titleMargin}>
                    Final result of {`"${testResults.test}"`} test
                </Title>
                <Text isParagraph size="big" className={styles.textClass}>
                    Correct answered questions
                    <Text bold> {correctAnsweredLength}</Text> from <Text bold>{sessionQuestions.length}</Text>
                </Text>

                <ul className={styles.list}>
                    {testResults.sessionQuestions.map((item, index) => {
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

                <div className={styles.btnWrapper}>
                    <Button>try again</Button>
                </div>
            </div>
        </section>
    );
};
