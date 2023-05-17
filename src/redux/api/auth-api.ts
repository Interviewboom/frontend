import { SignUpRequest, SignInRequest } from "src/models/requests/request-params-model/request-params-model";
import { LoginResponse } from "src/models/responses/auth-response-model/auth-response-model";
import { api } from "src/redux/api";

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
