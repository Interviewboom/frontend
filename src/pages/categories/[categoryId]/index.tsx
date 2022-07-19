import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";

import { TestsByCategorySection } from "@modules/TestsByCategorySection/TestsByCategorySection";
import { TestCategory, TestType } from "src/api/apiTypes";
import { getTests, getCategory } from "src/api/categoriesTestsInfo";

type PageProps = {
    category: TestCategory;
    testsByCategory: TestType[];
};

const TestsByCategoryPage: NextPage<PageProps> = ({ testsByCategory, category }: PageProps) => {
    return (
        <DefaultLayout>
            <TestsByCategorySection testsByCategory={testsByCategory} category={category} />
        </DefaultLayout>
    );
};

export default TestsByCategoryPage;

export const getServerSideProps: GetServerSideProps = async context => {
    const categoryId = context.params?.categoryId;

    if (typeof categoryId === "string") {
        const testsByCategory = await getTests({ categoryId });
        const category = await getCategory(categoryId);

        return { props: { testsByCategory, category } };
    }

    return { props: { testsByCategory: null, category: null } };
};
