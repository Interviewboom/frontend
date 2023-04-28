import { stringifyParams } from "@utils/api/stringifyParams";
import { RequestParamsModel } from "src/models/requests/request-params-model/request-params-model";
import { api } from "src/redux/api";
import { Test } from "src/models/entities/test/test";

export const testsApi = api.injectEndpoints({
    endpoints: build => ({
        getTests: build.query<Test[], RequestParamsModel>({
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
        getTestQuestionAnswers: build.query<Test[], { testId: string | number; questionId: string | number }>({
            query: ({ testId, questionId }) => {
                return {
                    url: `tests/${testId}/questions/${questionId}/answers`,
                };
            },
        }),
    }),
});

// export endpoints for use in SSR
export const { getTests, getTest, getTestQuestionAnswers } = testsApi.endpoints;
