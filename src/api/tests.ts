import { AxiosError } from "axios";
import { TestCategory, TestType } from "./apiTypes";
import { paramsType, stringifyParams } from "./stringifyParams";
import api from "./index";

export const getCategories = async (paramsObj: paramsType) => {
    try {
        const res = await api.get<TestCategory[]>(`test-categories${stringifyParams(paramsObj)}`);
        const categories: TestCategory[] = res.data;

        return categories;
    } catch (error) {
        const err = error as AxiosError;

        if (err.message) {
            return err.message;
        }
        return "error ocurred while loading categories";
    }
};

export const getCategory = async (paramsObj: paramsType, id: string) => {
    try {
        const res = await api.get<TestCategory[]>(`test-categories/${id}${stringifyParams(paramsObj)}`);
        const categories: TestCategory[] = res.data;

        return categories;
    } catch (error) {
        const err = error as AxiosError;

        if (err.message) {
            return err.message;
        }
        return "error ocurred while loading categories";
    }
};

export const getTests = async (paramsObj: paramsType) => {
    try {
        const res = await api.get<TestType[]>(`tests${stringifyParams(paramsObj)}`);
        const tests: TestType[] = res.data;
        return tests;
    } catch (error) {
        const err = error as AxiosError;

        if (err.message) {
            return err.message;
        }
        return "error ocurred while loading tests";
    }
};
