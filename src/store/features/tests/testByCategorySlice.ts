import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TestCategory, TestType } from "src/api/apiTypes";
import { getTests, getCategory } from "src/api/categoriesTestsInfo";

type TestByCategoryStateType = {
    category: TestCategory | null;
    testsByCategory: TestType[] | null;
    error?: string | null;
};

const initialState: TestByCategoryStateType = {
    category: null,
    testsByCategory: null,
    error: null,
};

export const fetchTestsByCategory = createAsyncThunk<TestByCategoryStateType, string, { rejectValue: string }>(
    "testsByCategory/fetchTestsByCategory",
    async (categoryId: string, { rejectWithValue }) => {
        try {
            const testsByCategory = await getTests({ categoryId });

            if (testsByCategory instanceof Error) {
                return rejectWithValue(testsByCategory.message);
            }

            const category = await getCategory(categoryId);

            if (category instanceof Error) {
                return rejectWithValue(category.message);
            }

            return { testsByCategory, category };
        } catch (error) {
            return rejectWithValue("Something went wrong");
        }
    }
);

const testsByCategorySlice = createSlice({
    name: "testsByCategory",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTestsByCategory.pending, state => {
                state.error = null;
            })
            .addCase(fetchTestsByCategory.fulfilled, (state, action) => {
                state.category = action.payload.category;
                state.testsByCategory = action.payload.testsByCategory;

                state.error = null;
            })
            .addCase(fetchTestsByCategory.rejected, (state, action) => {
                state.error = action.payload ? action.payload : action.error.message;
            });
    },
});

export default testsByCategorySlice.reducer;
