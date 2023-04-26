import { ParamsType, stringifyParams } from "@utils/api/stringifyParams";
import { api } from "src/redux/api";
import { TestCategoryResponseModel } from "src/models/response/test-categories-response-model/test-category-response-model";

const url = "test-categories";

export const testCategoriesApi = api.injectEndpoints({
    endpoints: build => ({
        getTestCategories: build.query<TestCategoryResponseModel[], ParamsType>({
            query: (paramsObj = {}) => {
                return {
                    url: `${url}${stringifyParams(paramsObj)}`,
                };
            },
        }),
        getTestCategory: build.query<TestCategoryResponseModel, string>({
            query: (id: string) => {
                return {
                    url: `${url}/${id}`,
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
