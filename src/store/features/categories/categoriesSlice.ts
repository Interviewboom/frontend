import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "src/api/categoriesTestsInfo";
import { TestCategory } from "src/api/apiTypes";

type HomePageState = {
    categories: TestCategory[];
    error?: string | null;
};

const initialState: HomePageState = {
    categories: [],
    error: null,
};

export const fetchCategories = createAsyncThunk<TestCategory[] | Error, void, { rejectValue: string }>(
    "allCategoriesPage/fetchCategories",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getCategories();
            return response;
        } catch (error) {
            let errorMessage = "Failed to receive categories, please try again";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return rejectWithValue(errorMessage);
        }
    }
);

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.categories = [];
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload as TestCategory[];
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.error = action.payload ?? "Failed to fetch categories";
            });
    },
});

export default homePageSlice.reducer;
