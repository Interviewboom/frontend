import { stringifyParams } from "@utils/api/stringifyParams";
import { RequestParams } from "src/models/entities/request-params/request-params";
import { TestCategory } from "src/models/entities/test-category/test-category";
import { api } from "src/redux/api";

export const testCategoriesApi = api.injectEndpoints({
    endpoints: build => ({
        getTestCategories: build.query<TestCategory[], RequestParams>({
            query: (paramsObj = {}) => {
                return {
                    url: `test-categories${stringifyParams(paramsObj)}`,
                };
            },
        }),
        getTestCategory: build.query<TestCategory, string>({
            query: (id: string) => {
                return {
                    url: `test-categories/${id}`,
                };
            },
        }),
    }),
    overrideExisting: false,
});

// Export hooks for usage in functional components
export const {
    util: { getRunningQueriesThunk },
} = testCategoriesApi;

// export endpoints for use in SSR
export const { getTestCategories, getTestCategory } = testCategoriesApi.endpoints;
