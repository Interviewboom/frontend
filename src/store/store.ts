import { Action, configureStore, ThunkAction, combineReducers, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import testDetailsReducer from "./features/tests/testDetailsSlice";

import questionReducer from "./features/question/questionSlice";

const rootReducer = combineReducers({
    testDetails: testDetailsReducer,
    question: questionReducer,
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
