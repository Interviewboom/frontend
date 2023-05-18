import { HYDRATE } from "next-redux-wrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
                headers.set(
                    "Authorization",
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZGVsZmFrQGdtYWlsLmNvbSIsInN1YiI6MSwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjg0NDIxMTU4LCJleHAiOjE2ODQ1MDc1NTh9.FaqX9Pn2srgtyRB2V2wJk_Bv30AWbLDU679bqQIPM5w"
                );
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
