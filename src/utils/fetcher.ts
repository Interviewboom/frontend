import { TestCategory } from "@modules/CategoriesSection/CategoryCard";
import { TestType } from "@modules/TestsSection/TestCard";
import axios from "axios";

export const getCategories = async (numberOfCategories: number) => {
    const res = await axios.get(`https://interviewboom.com/api/test-categories?limit=${numberOfCategories}`);
    const categories: TestCategory[] = await res.data;
    return categories;
};

export const getTests = async (numberOfTests: number) => {
    const res = await axios.get(`https://interviewboom.com/api/tests?limit=${numberOfTests}`);
    const tests: TestType[] = await res.data;
    return tests;
};
