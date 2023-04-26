import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";
import { QuestionType, answerType } from "src/api/apiTypes";
import { QuestionBlock } from "@modules/QuestionBlock/QuestionBlock";
import { wrapper } from "src/store/store";
import { fetchQuestionData } from "src/store/features/question/questionSlice";

type PageProps = {
    questionData: { question: QuestionType; count: number; countAnswered: number; test_id: number };
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async context => {
    if (typeof context.params?.sessionId === "string") {
        await store.dispatch(fetchQuestionData(context.params?.sessionId));

        const {
            questionState: { data, error },
        } = store.getState();

        return {
            props: { questionData: data?.questionData ?? null, answers: data?.answers ?? null, error },
        };
    }

    return {
        notFound: true,
    };
});
