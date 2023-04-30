import { DefaultLayout } from "@layouts/DefaultLayout";
import { OneTestSection } from "@modules/OneTestSection/OneTestSection";
import { DonationInfoSection } from "@modules/DonationInfoSection/DonationInfoSection";
import { NextPage } from "next";
import { wrapper } from "src/redux/store";
import { getRunningQueriesThunk, getTestCategory } from "src/redux/api/test-categories-api";
import { getTest } from "src/redux/api/tests-api";
import { TestCategoryModel } from "src/models/entities/test-category/test-category";
import { TestModel } from "src/models/entities/test/test";

type PageProps = {
    category: TestCategoryModel;
    oneTestInfo: TestModel;
    error?: string;
};

const TestDetailsPage: NextPage<PageProps> = ({ oneTestInfo, category, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <OneTestSection oneTestInfo={oneTestInfo} category={category} />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default TestDetailsPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
    const testId = context.params?.testId;
    const categoryId = context.params?.categoryId;

    if (typeof categoryId === "string" && typeof testId === "string") {
        const { data: oneTestInfo, isError: isOneTestInfoError } = await store.dispatch(getTest.initiate(testId));
        const { data: category, isError: isTestCategoryError } = await store.dispatch(
            getTestCategory.initiate(categoryId)
        );

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {
                oneTestInfo,
                category,
                error: (isOneTestInfoError || isTestCategoryError) && "ups, something went wrong",
            },
        };
    }

    return { notFound: true };
});
