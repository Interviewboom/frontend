import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, getTests } from "src/api/categoriesTestsInfo";
import { TestCategory, TestType } from "src/api/apiTypes";

type HomePageState = {
    categories: TestCategory[];
    popularTests: TestType[];
    error?: string;
};

const initialState: HomePageState = {
    categories: [],
    popularTests: [],
    error: undefined,
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {},
});

export default homePageSlice.reducer;
