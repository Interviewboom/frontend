import React from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { AllCategoriesSection } from "@modules/AllCategoriesSection/AllCategoriesSection";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";

import { errorObjectType } from "@utils/errorHandler";

import { wrapper } from "src/redux/store";
import { getTestCategories, getRunningQueriesThunk } from "src/redux/api/test-categories-api";

type PageProps = {
    categories: TestCategoryModel[] & errorObjectType;
    error: string;
};

const AllCategoriesPage: NextPage<PageProps> = ({ categories, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <AllCategoriesSection categories={categories} />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default AllCategoriesPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    const { data: categories, isError } = await store.dispatch(getTestCategories.initiate({}));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: { categories, error: isError && "ups, something went wrong" },
    };
});
