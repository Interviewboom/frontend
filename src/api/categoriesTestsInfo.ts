import { handleRequestError } from "@utils/errorHandler";

import { TestCategory, TestType } from "./apiTypes";
import { paramsType, stringifyParams } from "./stringifyParams";

import api from "./index";

export const getCategories = async (paramsObj: paramsType = {}) => {
    try {
        const res = await api.get<TestCategory[]>(`test-categories${stringifyParams(paramsObj)}`);
        const categories: TestCategory[] = res.data;

        return categories;
    } catch (error) {
        return handleRequestError(error);
    }
};

export const getCategory = async (id: string) => {
    try {
        const res = await api.get<TestCategory[]>(`test-categories/${id}`);
        const categories: TestCategory[] = res.data;

        return categories;
    } catch (error) {
        return handleRequestError(error);
    }
};

export const getTests = async (paramsObj: paramsType = {}) => {
    try {
        const res = await api.get<TestType[]>(`tests${stringifyParams(paramsObj)}`);
        const tests: TestType[] = res.data;

        return tests;
    } catch (error) {
        return handleRequestError(error);
    }
};

export const getOneTest = async (id: string) => {
    try {
        const res = await api.get<TestType>(`tests/${id}`);
        const oneTestInfo: TestType = res.data;

        return oneTestInfo;
    } catch (error) {
        return handleRequestError(error);
    }
};
