import type { NextPage } from "next";
import React from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { AllCategoriesSection } from "@modules/AllCategoriesSection";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";
import { errorObjectType } from "@utils/errorHandler";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { getTestCategories, getRunningQueriesThunk } from "src/redux/api/test-categories-api";
import { wrapper } from "src/redux/store";

type PageProps = {
    categories: TestCategoryModel[] & errorObjectType;
    error: string;
};

const AllCategoriesPage: NextPage<PageProps> = ({ categories, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <AllCategoriesSection categories={categories} />
        </DefaultLayout>
    );
};

export default AllCategoriesPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    const { data: categories, isError } = await store.dispatch(getTestCategories.initiate({}));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: { categories, error: getGenericErrorMessage(isError) },
    };
});
