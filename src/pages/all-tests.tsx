import { DefaultLayout } from "@layouts/DefaultLayout";
import { NextPage } from "next";

import { AllTestsSection } from "@modules/AllTestsSection";
import { wrapper } from "src/redux/store";
import { getRunningQueriesThunk } from "src/redux/api/test-categories-api/test-categories-api";
import { getTests } from "src/redux/api/tests-api/tests-api";
import { TestModel } from "src/models/entities/test-model/test-model";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";

type PageProps = {
    allTests: TestModel[];
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

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    const { data: allTests, isError: isAllTestsError } = await store.dispatch(getTests.initiate({}));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {
            allTests,
            error: getGenericErrorMessage(isAllTestsError),
        },
    };
});
