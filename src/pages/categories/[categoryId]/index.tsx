import { DefaultLayout } from "@layouts/DefaultLayout";
import { NextPage } from "next";
import { TestsByCategorySection } from "@modules/TestsByCategorySection/TestsByCategorySection";
import { wrapper } from "src/redux/store";
import { getRunningQueriesThunk, getTestCategory } from "src/redux/api/test-categories-api";
import { getTests } from "src/redux/api/tests-api";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { TestModel } from "src/models/entities/test-model/test-model";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";

type PageProps = {
    category: TestCategoryModel;
    testsByCategory: TestModel[];
    error?: string;
};

const TestsByCategoryPage: NextPage<PageProps> = ({ testsByCategory, category, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <TestsByCategorySection testsByCategory={testsByCategory} category={category} />
        </DefaultLayout>
    );
};

export default TestsByCategoryPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
    const categoryId = context.params?.categoryId;

    if (typeof categoryId === "string") {
        const { data: testsByCategory, isError: isTestsErrorError } = await store.dispatch(
            getTests.initiate({ categoryId })
        );
        const { data: category, isError: isTestCategoryError } = await store.dispatch(
            getTestCategory.initiate(categoryId)
        );

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {
                testsByCategory,
                category,
                error: getGenericErrorMessage([isTestsErrorError, isTestCategoryError]),
            },
        };
    }

    return { notFound: true };
});
