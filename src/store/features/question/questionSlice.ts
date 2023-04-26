import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { QuestionType, answerType } from "src/api/apiTypes";
import { getNextQuestion, getQuestionAnswers } from "src/api/testFlow";

type DataType = {
    questionData: { question: QuestionType; count: number; countAnswered: number; test_id: number } | null;
    answers: answerType[] | null;
};

interface QuestionState {
    data: DataType | null;
    error?: string | null;
}

const initialState: QuestionState = {
    data: null,
    error: null,
};

export const fetchQuestionData = createAsyncThunk<
    DataType | Error,
    string,
    {
        rejectValue: string;
    }
>("questionPage/fetchQuestionData", async (sessionId: string, { rejectWithValue }) => {
    try {
        const nextQuestionInfo = await getNextQuestion(sessionId);

        if (nextQuestionInfo instanceof Error) {
            return rejectWithValue(nextQuestionInfo.message);
        }

        const answers = await getQuestionAnswers(nextQuestionInfo?.test_id, nextQuestionInfo.question?.id);

        if (answers instanceof Error) {
            return rejectWithValue(answers.message);
        }

        return { questionData: nextQuestionInfo, answers } as DataType;
    } catch (error) {
        return rejectWithValue("Something went wrong");
    }
});

export const questionSlice = createSlice({
    name: "questionPage",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuestionData.pending, state => {})
            .addCase(fetchQuestionData.fulfilled, (state, action) => {
                state.data = action.payload as DataType;
                state.error = null;
            })
            .addCase(fetchQuestionData.rejected, (state, action) => {
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

export default questionSlice.reducer;
