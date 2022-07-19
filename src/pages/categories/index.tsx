import { GetServerSideProps } from "next";
import React from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { AllCategoriesSection } from "@modules/AllCategoriesSection/AllCategoriesSection";
import { TestCategory } from "src/api/apiTypes";
import { getCategories } from "src/api/categoriesTestsInfo";

import { errorObjectType } from "@utils/errorHandler";

type PageProps = {
    categories: TestCategory[] & errorObjectType;
};

const AllCategoriesPage: NextPage<PageProps> = ({ categories }: PageProps) => {
    return (
        <DefaultLayout error={categories.message ?? ""}>
            <AllCategoriesSection categories={categories} />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default AllCategoriesPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories();

    return { props: { categories } };
};
