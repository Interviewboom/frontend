import { api } from "src/redux/api";
import { User } from "../slices/authSlice";

export interface SignInRequest {
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
                    url: `auth/login`,
                    method: "POST",
                    body: credentials,
                };
            },
        }),
    }),
});

// Export hooks for usage in functional components
export const { useLoginMutation } = authApi;

// export endpoints for use in SSR
// export const { getNextSessionQuestion, getTestResults } = sessionsApi.endpoints;
