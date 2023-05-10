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
        setUser: (state, action: PayloadAction<SetUserPayload>) => {
            return { ...state, user: action.payload.user };
        },
        setToken: (state, action: PayloadAction<SetTokenPayload>) => {
            return { ...state, user: action.payload.token };
        },
        logout: state => {
            return { ...state, user: null, token: null };
        },
    },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
