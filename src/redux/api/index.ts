import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { REACT_APP_API_BASE_URL } from "./constants";
import type { RootState } from "../store";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            } else {
                headers.set("Authorization", "Bearer TOKEN");
            }

            return headers;
        },
    }),
    tagTypes: ["api"],
    endpoints: () => ({}),
    // eslint-disable-next-line consistent-return
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
});
