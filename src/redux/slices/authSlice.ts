import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
}

interface SetUserPayload {
    user: User | null;
}

interface SetTokenPayload {
    token: string | null;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
    } as AuthState,
    reducers: {
        setUser: (state: AuthState, action: PayloadAction<SetUserPayload>) => {
            return { ...state, user: action.payload.user };
        },
        setToken: (state: AuthState, action: PayloadAction<SetTokenPayload>) => {
            return { ...state, token: action.payload.token };
        },
        logout: (state: AuthState) => {
            return { ...state, user: null, token: null };
        },
    },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
