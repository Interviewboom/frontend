import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "src/models/entities/auth-model/auth-model";

interface AuthState {
    user: User | null;
    accessToken: string | null;
}

interface SetUserPayload {
    user: User | null;
}

interface SetAccessTokenPayload {
    accessToken: string | null;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        accessToken: null,
    } as AuthState,
    reducers: {
        setUser: (state: AuthState, action: PayloadAction<SetUserPayload>) => {
            return { ...state, user: action.payload.user };
        },
        setToken: (state: AuthState, action: PayloadAction<SetAccessTokenPayload>) => {
            return { ...state, accessToken: action.payload.accessToken };
        },
        logout: (state: AuthState) => {
            return { ...state, user: null, accessToken: null };
        },
    },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
