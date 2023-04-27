import { FC, useMemo } from "react";
import { useRouter } from "next/router";
import { ShareButton } from "@elements/ShareButton";
import { Title } from "@elements/Title/Title";
import { Breadcrumb } from "@elements/Breadcrumb";

import { TestResultsResponseModel } from "src/models/response/test-results-response-model/test-results-response-model";
import styles from "./ResultSection.module.scss";
import Statistics from "./Statistics";
import { IncorrectAnswers } from "./IncorrectAnswers";

type ResultProps = {
    testResults: TestResultsResponseModel;
};

export const ResultSection: FC<ResultProps> = ({ testResults }) => {
    const { sessionQuestions } = testResults;
    const router = useRouter();

    const correctAnsweredLength = useMemo(
        () => sessionQuestions?.filter(item => item.is_answered).length,
        [sessionQuestions]
    );

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.statsTitleShareWrapper}>
                    <Breadcrumb
                        links={[
                            { name: "Test categories", link: "/categories" },
                            { name: testResults?.test, link: router.asPath.split("session")[0] },
                            { name: "result", link: router.asPath },
                        ]}
                    />

                    <ShareButton className={styles.share} />
                    <Title level={2} className={styles.titleMargin}>
                        Final result of {`"${testResults.test}"`} test
                    </Title>
                    <Statistics
                        correctQuestionsNumber={correctAnsweredLength}
                        questionsNumber={sessionQuestions?.length}
                    />
                </div>

                <IncorrectAnswers sessionQuestions={testResults?.sessionQuestions} />
                <Statistics correctQuestionsNumber={correctAnsweredLength} questionsNumber={sessionQuestions?.length} />
            </div>
        </section>
    );
};
