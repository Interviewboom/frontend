import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory, getOneTest } from "src/api/categoriesTestsInfo";
import { TestType, TestCategory } from "src/api/apiTypes";

type TestDetailsState = {
    category: TestCategory | null;
    oneTestInfo: TestType | null;
    error: string | null;
};

const initialState: TestDetailsState = {
    category: null,
    oneTestInfo: null,
    error: null,
};

export const fetchCategory = createAsyncThunk<TestCategory | Error, string, { rejectValue: string }>(
    "testDetails/fetchCategory",
    async (categoryId: string, { rejectWithValue }) => {
        try {
            const result = await getCategory(categoryId);
            return result;
        } catch (error) {
            let errorMessage = "Failed to receive category, please try again.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return rejectWithValue(errorMessage);
        }
    }
);

export const fetchOneTestInfo = createAsyncThunk<TestType | Error, string, { rejectValue: string }>(
    "testDetails/fetchOneTestInfo",
    async (testId: string, { rejectWithValue }) => {
        try {
            const response = await getOneTest(testId);
            return response;
        } catch (error) {
            let errorMessage = "Failed to receive test info, please try again.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return rejectWithValue(errorMessage);
        }
    }
);

const testDetailsSlice = createSlice({
    name: "testDetails",
    initialState,
    reducers: {
        clearData: state => {
            state.category = null;
            state.oneTestInfo = null;
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategory.pending, state => {})
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.category = action.payload as TestCategory;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.error = action.error.message ?? "Failed to fetch category";
            })
            .addCase(fetchOneTestInfo.pending, state => {})
            .addCase(fetchOneTestInfo.fulfilled, (state, action) => {
                state.oneTestInfo = action.payload as TestType;
            })
            .addCase(fetchOneTestInfo.rejected, (state, action) => {
                state.error = action.error.message ?? "Failed to fetch test information";
            });
    },
});

export const { clearData } = testDetailsSlice.actions;

export default testDetailsSlice.reducer;
