import { DefaultLayout } from "@layouts/DefaultLayout";
import { NextPage } from "next";
import { QuestionBlock } from "@modules/QuestionBlock/QuestionBlock";
import { getNextSessionQuestion } from "src/redux/api/sessions-api";
import { getTestQuestionAnswers } from "src/redux/api/tests-api";
import { wrapper } from "src/redux/store";
import { getRunningQueriesThunk } from "src/redux/api/test-categories-api";
import { Question } from "src/models/entities/question/question";
import { Answer } from "src/models/entities/answer/answer";

type PageProps = {
    questionData: { question: Question; count: number; countAnswered: number; test_id: number };
    answers: Answer[];
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
                error: (isNextQuestionInfoError || isAnswersError) && "ups, something went wrong",
            },
        };
    }

    return { notFound: true };
});
