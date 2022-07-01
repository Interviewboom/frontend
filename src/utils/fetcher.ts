import axios from "axios";
import { TestCategory, TestType } from "./apiTypes";

export const getCategories = async (numberOfCategories: number) => {
    try {
        const res = await axios.get(`https://interviewboom.com/api/test-categories?limit=${numberOfCategories}`);
        const categories: TestCategory[] = res.data;
        return categories;
    } catch (error) {
        return null;
    }
};

export const getTests = async (numberOfTests: number) => {
    try {
        const res = await axios.get(`https://interviewboom.com/api/tests?limit=${numberOfTests}`);
        const tests: TestType[] = res.data;
        return tests;
    } catch (error) {
        return null;
    }
};
