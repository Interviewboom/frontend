import { AsyncThunkAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuestionType, answerType } from "src/api/apiTypes";
import { getNextQuestion, getQuestionAnswers } from "src/api/testFlow";

type PageProps = {
    questionData: { question: QuestionType; count: number; countAnswered: number; test_id: number };
    answers: answerType[];
    error: string;
};

interface QuestionState {
    data: PageProps;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
const initialState: QuestionState = {
    data: {
        questionData: {
            question: {
                id: 0,
                title: "",
                test_id: 0,
                question: "",
                level: 0,
                is_multiselect: false,
            },
            count: 0,
            countAnswered: 0,
            test_id: 0,
        },
        answers: [],
        error: "",
    },
    status: "idle",
    error: null,
};

export const fetchQuestionData = createAsyncThunk<PageProps, string>(
    "questionPage/fetchQuestionData",
    async (sessionId: string) => {
        const nextQuestionInfo = await getNextQuestion(sessionId);

        if (nextQuestionInfo instanceof Error) {
            throw new Error(nextQuestionInfo.message);
        }

        const answers = await getQuestionAnswers(nextQuestionInfo?.test_id, nextQuestionInfo.question?.id);

        if (answers instanceof Error) {
            throw new Error(answers.message);
        }

        return { questionData: nextQuestionInfo, answers } as PageProps;
    }
);

export const questionSlice = createSlice({
    name: "questionPage",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuestionData.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchQuestionData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchQuestionData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

export default questionSlice.reducer;
