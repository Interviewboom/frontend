import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory, getOneTest } from "src/api/categoriesTestsInfo";
import { TestType, TestCategory } from "src/api/apiTypes";

type TestDetailsState = {
    category: TestCategory | null;
    oneTestInfo: TestType | null;
    error: string | null;
    loading: boolean;
};

const initialState: TestDetailsState = {
    category: null,
    oneTestInfo: null,
    error: null,
    loading: false,
};

export const fetchCategory = createAsyncThunk("testDetails/fetchCategory", async (categoryId: string) => {
    const result = await getCategory(categoryId);
    if (result instanceof Error) {
        throw new Error(result.message);
    }
    return result;
});

export const fetchOneTestInfo = createAsyncThunk("testDetails/fetchOneTestInfo", async (testId: string) => {
    const result = await getOneTest(testId);
    if (result instanceof Error) {
        throw new Error(result.message);
    }
    return result;
});

const testDetailsSlice = createSlice({
    name: "testDetails",
    initialState,
    reducers: {
        clearData: state => {
            state.category = null;
            state.oneTestInfo = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategory.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.category = action.payload;
                state.loading = false;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.error = action.error.message ?? "Failed to fetch category";
                state.loading = false;
            })
            .addCase(fetchOneTestInfo.pending, state => {
                state.loading = true;
            })
            .addCase(fetchOneTestInfo.fulfilled, (state, action) => {
                state.oneTestInfo = action.payload;
                state.loading = false;
            })
            .addCase(fetchOneTestInfo.rejected, (state, action) => {
                state.error = action.error.message ?? "Failed to fetch test information";
                state.loading = false;
            });
    },
});

export const { clearData } = testDetailsSlice.actions;

export default testDetailsSlice.reducer;
