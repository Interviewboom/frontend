/* eslint-disable no-param-reassign */
import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";

import { User } from "src/models/entities/auth-model/auth-model";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "src/redux/store";

interface AuthState {
    user: User | null;
    accessToken: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: AuthState, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setAccessToken: (state: AuthState, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        logout: (state: AuthState) => {
            state.user = null;
            state.accessToken = null;
        },
    },
    extraReducers: builder => {
        builder.addCase(
            HYDRATE,
            (_, action: PayloadAction<any, "__NEXT_REDUX_WRAPPER_HYDRATE__">) => action.payload.auth
        );
    },
});

const selectSelf = (state: RootState) => state;

export const selectAccessToken = createDraftSafeSelector(selectSelf, (state: RootState) => state.auth?.accessToken);

export const { setUser, setAccessToken, logout } = authSlice.actions;

export { authSlice };
