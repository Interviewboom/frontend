import { LoginRequestParamsModel } from "src/models/requests/auth/login-request-params-model";
import { LoginResponseModel } from "src/models/responses/auth/login-response-model";
import { api } from "src/redux/api";

export const authApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<LoginResponseModel, LoginRequestParamsModel>({
            query: params => {
                return {
                    url: "auth/login",
                    method: "POST",
                    body: params,
                };
            },
            transformErrorResponse: error => console.log("err", error),
        }),
    }),
});

// export endpoints for use in SSR
export const { login } = authApi.endpoints;
