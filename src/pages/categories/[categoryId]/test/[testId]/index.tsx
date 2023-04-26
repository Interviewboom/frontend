import React from "react";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { OneTestSection } from "@modules/OneTestSection/OneTestSection";
import { DonationInfoSection } from "@modules/DonationInfoSection/DonationInfoSection";
import { TestType, TestCategory } from "src/api/apiTypes";
import { wrapper } from "src/store/store";
import { GetServerSideProps, NextPage } from "next";
import { fetchOneTestInfo, fetchCategory } from "src/store/features/tests/testDetailsSlice";

type PageProps = {
    category: TestCategory;
    oneTestInfo: TestType;
    error?: string;
};

const TestDetailsPage: NextPage<PageProps> = ({ oneTestInfo, category, error }) => {
    return (
        <DefaultLayout error={error}>
            <OneTestSection oneTestInfo={oneTestInfo} category={category} />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async context => {
    const testId = context.params?.testId;
    const categoryId = context.params?.categoryId;

    if (typeof categoryId === "string" && typeof testId === "string") {
        await store.dispatch(fetchOneTestInfo(testId));
        await store.dispatch(fetchCategory(categoryId));

        const {
            testDetailsState: { oneTestInfo, category, error },
        } = store.getState();

        return {
            props: { oneTestInfo, category, error },
        };
    }
    return { notFound: true };
});

export default TestDetailsPage;
