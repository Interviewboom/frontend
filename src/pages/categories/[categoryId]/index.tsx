import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";

import { TestsByCategorySection } from "@modules/TestsByCategorySection/TestsByCategorySection";
import { TestCategory, TestType } from "src/api/apiTypes";
import { wrapper } from "src/store/store";
import { fetchTestsByCategory } from "src/store/features/tests/testByCategorySlice";

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async context => {
    const categoryId = context.params?.categoryId;
    if (typeof categoryId === "string") {
        await store.dispatch(fetchTestsByCategory(categoryId));

        const {
            testByCategoryState: { testsByCategory, category, error },
        } = store.getState();
        return { props: { testsByCategory, category, error } };
    }
    return { notFound: true };
});
