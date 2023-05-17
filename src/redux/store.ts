import { createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";

import { api } from "./api";
import { authSlice } from "./slices/authSlice";

const rootReducers = combineReducers({
    [api.reducerPath]: api.reducer,
    [authSlice.name]: authSlice.reducer,
});

export const makeStore = wrapMakeStore(() =>
    configureStore({
        reducer: rootReducers,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .prepend(
                    nextReduxCookieMiddleware({
                        subtrees: [authSlice.name],
                    })
                )
                .concat(api.middleware),
        devTools: process.env.NODE_ENV !== "production",
    })
);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
