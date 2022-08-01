import { DefaultLayout } from "@layouts/DefaultLayout";
import { OneTestSection } from "@modules/OneTestSection/OneTestSection";
import { DonationInfoSection } from "@modules/DonationInfoSection/DonationInfoSection";
import { GetServerSideProps, NextPage } from "next";
import { getCategory, getOneTest } from "src/api/categoriesTestsInfo";
import { TestType, TestCategory } from "src/api/apiTypes";

type PageProps = {
    category: TestCategory;
    oneTestInfo: TestType;
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

export const getServerSideProps: GetServerSideProps = async context => {
    const testId = context.params?.testId;
    const categoryId = context.params?.categoryId;

    if (typeof categoryId === "string" && typeof testId === "string") {
        const oneTestInfo = await getOneTest(testId);

        if (oneTestInfo instanceof Error) {
            return { props: { error: oneTestInfo.message } };
        }

        const category = await getCategory(categoryId);

        if (category instanceof Error) {
            return { props: { error: category.message } };
        }

        return { props: { oneTestInfo, category } };
    }

    return { notFound: true };
};
