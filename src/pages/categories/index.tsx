import { GetServerSideProps } from "next";
import React from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { AllCategoriesSection } from "@modules/AllCategoriesSection/AllCategoriesSection";
import { TestCategory } from "src/api/apiTypes";
import { errorObjectType } from "@utils/errorHandler";
import { wrapper } from "src/store/store";
import { fetchCategories } from "src/store/features/categories/categoriesSlice";

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async () => {
    await store.dispatch(fetchCategories());
    const {
        categoriesState: { categories, error },
    } = store.getState();
    return { props: { categories, error } };
});
