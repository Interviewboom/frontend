import { createSlice, PayloadAction, createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

type AuthState = {
    accessToken: string | null;
};

const initialState: AuthState = {
    accessToken: null,
};

export type AuthPayloadAction = AuthState;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<AuthPayloadAction>) {
            return {
                ...state,
                accessToken: action.payload.accessToken,
            };
        },
        resetAccessToken() {
            return initialState;
        },
    },
});

// selectors
const selectSelf = (state: RootState) => state;
const selectAuthData = createDraftSafeSelector(selectSelf, state => state.auth);

export const { setAccessToken, resetAccessToken } = authSlice.actions;
export { selectAuthData };
export { authSlice };
