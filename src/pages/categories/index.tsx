import React from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { AllCategoriesSection } from "@modules/AllCategoriesSection/AllCategoriesSection";
import { TestCategory } from "src/api/apiTypes";

import { errorObjectType } from "@utils/errorHandler";

import { wrapper } from "src/redux/store";
import { getTestCategories, getRunningQueriesThunk } from "src/redux/api/test-categories-api";

type PageProps = {
    categories: TestCategory[] & errorObjectType;
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
    try {
        const { data } = await store.dispatch(getTestCategories.initiate({}));
        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: { categories: data },
        };
    } catch (e) {
        console.log("e", e);
    }

    return {
        props: { categories: [] },
    };
});
