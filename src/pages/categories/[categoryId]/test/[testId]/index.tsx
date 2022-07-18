import { DefaultLayout } from "@layouts/DefaultLayout";
import { OneTestSection } from "@modules/OneTestSection/OneTestSection";
import { DonationInfoSection } from "@modules/DonationInfoSection/DonationInfoSection";
import { GetServerSideProps, NextPage } from "next";
import { getCategory, getOneTest } from "src/api/tests";
import { TestType, TestCategory } from "src/api/apiTypes";

type PageProps = {
    category: TestCategory;
    test: TestType;
};

const TestDetailsPage: NextPage<PageProps> = ({ test, category }: { test: TestType; category: TestCategory }) => {
    return (
        <DefaultLayout>
            <OneTestSection test={test} category={category} />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default TestDetailsPage;

export const getServerSideProps: GetServerSideProps = async context => {
    const testId = context?.params?.testId;
    const categoryId = context?.params?.categoryId;

    if (typeof categoryId === "string" && typeof testId === "string") {
        const test = await getOneTest(testId, {});
        const category = await getCategory({}, categoryId);

        return { props: { test, category } };
    }

    return { props: { test: null, category: null } };
};
