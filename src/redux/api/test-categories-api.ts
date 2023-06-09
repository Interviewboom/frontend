import { stringifyParams } from "@utils/api/stringifyParams";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { RequestParamsModel } from "src/models/requests/request-params-model/request-params-model";
import { api } from "src/redux/api";

export const testCategoriesApi = api.injectEndpoints({
    endpoints: build => ({
        getTestCategories: build.query<TestCategoryModel[], RequestParamsModel>({
            query: (paramsObj = {}) => {
                return {
                    url: `test-categories${stringifyParams(paramsObj)}`,
                };
            },
        }),
        getTestCategory: build.query<TestCategoryModel, string>({
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
