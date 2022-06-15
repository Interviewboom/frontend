import { TestCategory } from "@modules/CategoriesSection/CategoryCard";
import axios from "axios";

export const getCategories = async (numberOfCategories: number) => {
    const res = await axios.get(`https://interviewboom.com/api/test-categories?limit=${numberOfCategories}`);
    const categories: TestCategory[] = await res.data;
    return categories;
};
