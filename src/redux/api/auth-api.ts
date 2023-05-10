import { api } from "src/redux/api";
import { User } from "../slices/authSlice";

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignUpRequest {
    name: string;
    email: string;
    password: string;
}

interface LoginResponse {
    user: User;
    token: string;
}

export const authApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<LoginResponse, SignInRequest>({
            query: credentials => {
                return {
                    url: "auth/login",
                    method: "POST",
                    body: credentials,
                };
            },
        }),
        register: build.mutation<any, SignUpRequest>({
            query: credentials => {
                return {
                    url: "auth/register",
                    method: "POST",
                    body: credentials,
                };
            },
        }),
    }),
});

// Export hooks for usage in functional components
export const { useLoginMutation, useRegisterMutation } = authApi;

// export endpoints for use in SSR
// export const { getNextSessionQuestion, getTestResults } = sessionsApi.endpoints;
