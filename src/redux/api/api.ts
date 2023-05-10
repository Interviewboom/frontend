import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { checkTokenExpiration } from "@utils/api/checkTokenExpiration";
import { resetAccessToken, setAccessToken } from "src/redux/auth-slice";
import { LoginResponseModel } from "src/models/responses/auth/login-response-model";
import { RootState } from "src/redux/store";
import { REACT_APP_API_BASE_URL } from "./constants";

const authBaseQuery = fetchBaseQuery({
    baseUrl: REACT_APP_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const { accessToken } = (getState() as RootState).auth;

        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }

        return headers;
    },
});
const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await authBaseQuery(args, api, extraOptions);

    const getAuthToken = async () => {
        // @TODO this is mocked user. use it for development. this must be changed later;
        const mockedBody = { username: "modelfak@gmail.com", password: "1234567" };

        const { data } = await authBaseQuery(
            {
                url: `auth/login`,
                method: "POST",
                body: mockedBody,
            },
            api,
            extraOptions
        );

        if (data) {
            const { accessToken: token } = data as LoginResponseModel;
            api.dispatch(setAccessToken({ accessToken: token }));
        } else {
            api.dispatch(resetAccessToken());
        }
    };

    if (result.error && result.error.status === 401) {
        api.dispatch(resetAccessToken());
        await getAuthToken();
        result = await authBaseQuery(args, api, extraOptions);
        return result;
    }

    const { accessToken } = (api.getState() as RootState).auth;

    if (accessToken) {
        if (checkTokenExpiration(accessToken)) {
            await getAuthToken();
        }
    }

    return result;
};
export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReAuth,
    tagTypes: ["api"],
    endpoints: () => ({}),
    // eslint-disable-next-line consistent-return
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
});
