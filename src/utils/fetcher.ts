import { TestCategory } from "@modules/Categories/CategoryCard";
import { TestType } from "@modules/Tests/TestCard";
import axios from "axios";

export const getCategories = async (numberOfCategories: number) => {
    try {
        const res = await axios.get(`https://interviewboom.com/api/test-categories?limit=${numberOfCategories}`);
        const categories: TestCategory[] = await res.data;
        return categories;
    } catch (error) {
        return null;
    }
};

export const getTests = async (numberOfTests: number) => {
    try {
        const res = await axios.get(`https://interviewboom.com/api/tests?limit=${numberOfTests}`);
        const tests: TestType[] = await res.data;
        return tests;
    } catch (error) {
        return null;
    }
};
