import { Action, configureStore, ThunkAction, combineReducers, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import testDetailsReducer from "./features/tests/testDetailsSlice";
import questionReducer from "./features/question/questionSlice";
import categoriesReducer from "./features/categories/categoriesSlice";
import testByCategoryReducer from "./features/tests/testByCategorySlice";

const rootReducer = combineReducers({
    testDetailsState: testDetailsReducer,
    questionState: questionReducer,
    categoriesState: categoriesReducer,
    testByCategoryState: testByCategoryReducer,
});

const makeStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
