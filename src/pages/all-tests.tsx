import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";

import { AllTestsSection } from "@modules/AllTestsSection";
import { TestType } from "src/api/apiTypes";
import { getTests } from "src/api/categoriesTestsInfo";

type PageProps = {
    allTests: TestType[];
    error?: string;
};

const AllTestsPage: NextPage<PageProps> = ({ allTests, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <AllTestsSection allTests={allTests} />
        </DefaultLayout>
    );
};

export default AllTestsPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const allTests = await getTests();

    if (allTests instanceof Error) {
        return { props: { error: allTests.message } };
    }

    return { props: { allTests } };
};
