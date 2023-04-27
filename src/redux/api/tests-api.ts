import { stringifyParams } from "@utils/api/stringifyParams";
import { RequestParams } from "src/models/entities/request-params/request-params";
import { api } from "src/redux/api";
import { Test } from "src/models/entities/test/test";

export const testsApi = api.injectEndpoints({
    endpoints: build => ({
        getTests: build.query<Test[], RequestParams>({
            query: (params = {}) => {
                return {
                    url: `tests${stringifyParams(params)}`,
                };
            },
        }),
        getTest: build.query<Test, string>({
            query: (id: string) => {
                return {
                    url: `tests/${id}`,
                };
            },
        }),
        getTestQuestionAnswers: build.query<Test[], RequestParams>({
            query: (paramsObj = {}) => {
                return {
                    url: `tests${stringifyParams(paramsObj)}`,
                };
            },
        }),
    }),
});

// export endpoints for use in SSR
export const { getTests, getTest } = testsApi.endpoints;
