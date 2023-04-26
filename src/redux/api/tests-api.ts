import { ParamsType, stringifyParams } from "@utils/api/stringifyParams";
import { TestResponseModel } from "../../models/response/test-response-model/test-response-model";
import { api } from "./index";

const url = "tests";

export const testsApi = api.injectEndpoints({
    endpoints: build => ({
        getTests: build.query<TestResponseModel[], ParamsType>({
            query: (paramsObj = {}) => {
                return {
                    url: `${url}${stringifyParams(paramsObj)}`,
                };
            },
        }),
        getTest: build.query<TestResponseModel, string>({
            query: (id: string) => {
                return {
                    url: `${url}/${id}`,
                };
            },
        }),
    }),
});

// export endpoints for use in SSR
export const { getTests, getTest } = testsApi.endpoints;
