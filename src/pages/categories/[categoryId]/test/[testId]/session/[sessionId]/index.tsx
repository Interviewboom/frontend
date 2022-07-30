import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";
import { QuestionType, answerType } from "src/api/apiTypes";
import { getNextQuestion, getQuestionAnswers } from "src/api/testFlow";
import "tinymce/skins/ui/oxide-dark/content.css";

import { QuestionBlock } from "@modules/QuestionBlock/QuestionBlock";

type PageProps = {
    questionData: { question: QuestionType; count: number; countAnswered: number };
    answers: answerType[];
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

export const getServerSideProps: GetServerSideProps = async context => {
    if (typeof context.params?.sessionId === "string") {
        const nextQuestionInfo = await getNextQuestion(context.params.sessionId);

        if (nextQuestionInfo instanceof Error) {
            return { props: { error: { message: nextQuestionInfo.message } } };
        }

        const answers = await getQuestionAnswers(nextQuestionInfo.question?.test_id, nextQuestionInfo.question?.id);

        if (answers instanceof Error) {
            return { props: { error: answers.message } };
        }

        return { props: { questionData: nextQuestionInfo, answers } };
    }

    return {
        notFound: true,
    };
};
