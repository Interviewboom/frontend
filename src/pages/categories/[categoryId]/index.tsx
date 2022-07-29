import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";

import { TestsByCategorySection } from "@modules/TestsByCategorySection/TestsByCategorySection";
import { TestCategory, TestType } from "src/api/apiTypes";
import { getTests, getCategory } from "src/api/categoriesTestsInfo";

type PageProps = {
    category: TestCategory;
    testsByCategory: TestType[];
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

export const getServerSideProps: GetServerSideProps = async context => {
    const categoryId = context.params?.categoryId;

    if (typeof categoryId === "string") {
        const testsByCategory = await getTests({ categoryId });

        if (testsByCategory instanceof Error) {
            return { props: { error: testsByCategory.message } };
        }

        const category = await getCategory(categoryId);

        if (category instanceof Error) {
            return { props: { error: category.message } };
        }

        return { props: { testsByCategory, category } };
    }

    return { notFound: true };
};
