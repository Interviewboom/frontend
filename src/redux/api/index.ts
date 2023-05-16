import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { REACT_APP_API_BASE_URL } from "./constants";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_API_BASE_URL,
        prepareHeaders: headers => {
            headers.set(
                "Authorization",
                `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZGVsZmFrQGdtYWlsLmNvbSIsInN1YiI6MSwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjg0MjEzODQyLCJleHAiOjE2ODQzMDAyNDJ9.sRy-YwedWoVyT7oalgLsi3pXuOfXii_zpJTvH5JXhPI`
            );
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
