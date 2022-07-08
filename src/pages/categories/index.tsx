import { GetServerSideProps } from "next";
import React from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { AllCategoriesSection } from "@modules/AllCategoriesSection/AllCategoriesSection";
import { TestCategory } from "src/api/apiTypes";
import { getCategories } from "src/api/tests";

type PageProps = {
    categories: TestCategory[];
};

const AllCategoriesPage: NextPage<PageProps> = ({ categories }: { categories: TestCategory[] }) => {
    return (
        <DefaultLayout>
            <AllCategoriesSection categories={categories} />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default AllCategoriesPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories({});

    return { props: { categories } };
};
