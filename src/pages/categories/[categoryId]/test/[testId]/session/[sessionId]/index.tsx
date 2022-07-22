import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";
import { QuestionType, answerType } from "src/api/apiTypes";
import { getNextQuestion, getQuestionAnswers } from "src/api/testFlow";

import { QuestionBlock } from "@modules/QuestionBlock/QuestionBlock";
import { errorObjectType } from "@utils/errorHandler";

type PageProps = {
    questionData: { question: QuestionType; count: number; countAnswered: number } & errorObjectType;
    answers: answerType[] & errorObjectType;
};

const QuestionPage: NextPage<PageProps> = ({ questionData, answers }: PageProps) => {
    return (
        <DefaultLayout error={questionData.message || answers.message || ""}>
            <QuestionBlock questionData={questionData} answers={answers} />
        </DefaultLayout>
    );
};

export default QuestionPage;

export const getServerSideProps: GetServerSideProps = async context => {
    if (typeof context.params?.sessionId === "string") {
        const nextQuestionInfo = await getNextQuestion(context.params.sessionId);

        if (nextQuestionInfo instanceof Error)
            return {
                notFound: true,
            };

        const answers = await getQuestionAnswers(nextQuestionInfo.question.test_id, nextQuestionInfo.question.id);

        return { props: { questionData: nextQuestionInfo, answers } };
    }

    return {
        notFound: true,
    };
};
