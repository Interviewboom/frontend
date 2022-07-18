import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";

import { TestsByCategorySection } from "@modules/TestsByCategorySection/TestsByCategorySection";
import { TestCategory, TestType } from "src/api/apiTypes";
import { getTests, getCategory } from "src/api/tests";

type PageProps = {
    category: TestCategory;
    tests: TestType[];
};

const TestsByCategoryPage: NextPage<PageProps> = ({
    tests,
    category,
}: {
    tests: TestType[];
    category: TestCategory;
}) => {
    return (
        <DefaultLayout>
            <TestsByCategorySection tests={tests} category={category} />
        </DefaultLayout>
    );
};

export default TestsByCategoryPage;

export const getServerSideProps: GetServerSideProps = async context => {
    const categoryId = context?.params?.categoryId;

    if (typeof categoryId === "string") {
        const tests = await getTests({ categoryId });
        const category = await getCategory(categoryId);

        return { props: { tests, category } };
    }

    return { props: { tests: null, category: null } };
};
