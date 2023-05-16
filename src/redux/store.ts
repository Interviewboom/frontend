import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import { api } from "./api";
// eslint-disable-next-line import/named
import { authSlice } from "./slices/authSlice";

export const makeStore = wrapMakeStore(() =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            [authSlice.name]: authSlice.reducer,
        },
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
