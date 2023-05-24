import { stringifyParams } from "@utils/api/stringifyParams";
import { TestModel } from "src/models/entities/test-model/test-model";
import { RequestParamsModel } from "src/models/requests/request-params-model/request-params-model";
import { api } from "src/redux/api";

export const testsApi = api.injectEndpoints({
    endpoints: build => ({
        getTests: build.query<TestModel[], RequestParamsModel>({
            query: (params = {}) => {
                return {
                    url: `tests${stringifyParams(params)}`,
                };
            },
        }),
        getTest: build.query<TestModel, string>({
            query: (id: string) => {
                return {
                    url: `tests/${id}`,
                };
            },
        }),
        getTestQuestionAnswers: build.query<TestModel[], { testId: string | number; questionId: string | number }>({
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
