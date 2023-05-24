import { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { QuestionBlock } from "@modules/QuestionBlock";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";
import { AnswerModel } from "src/models/entities/answer-model/answer-model";
import { QuestionModel } from "src/models/entities/question-model/question-model";
import { getNextSessionQuestion } from "src/redux/api/sessions-api";
import { getRunningQueriesThunk } from "src/redux/api/test-categories-api";
import { getTestQuestionAnswers } from "src/redux/api/tests-api";
import { wrapper } from "src/redux/store";

type PageProps = {
    questionData: { question: QuestionModel; count: number; countAnswered: number; test_id: number };
    answers: AnswerModel[];
    error: string;
};

const QuestionPage: NextPage<PageProps> = ({ questionData, answers, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <QuestionBlock questionData={questionData} answers={answers} />
        </DefaultLayout>
    );
};

export default QuestionPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
    if (typeof context.params?.sessionId === "string") {
        const { data: nextQuestionInfo, isError: isNextQuestionInfoError } = await store.dispatch(
            getNextSessionQuestion.initiate({ sessionId: context.params.sessionId })
        );

        const { data: answers, isError: isAnswersError } = await store.dispatch(
            getTestQuestionAnswers.initiate({
                // eslint-disable-next-line no-bitwise
                testId: nextQuestionInfo?.test_id || "",
                questionId: nextQuestionInfo?.question?.id || "",
            })
        );

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {
                questionData: nextQuestionInfo,
                answers,
                error: getGenericErrorMessage([isNextQuestionInfoError, isAnswersError]),
            },
        };
    }

    return { notFound: true };
});
