import { DefaultLayout } from "@layouts/DefaultLayout";
import { ResultSection } from "@modules/ResultSection/ResultSection";

import { NextPage } from "next";
import { getTestResults } from "src/redux/api/sessions-api";
import { getRunningQueriesThunk } from "src/redux/api/test-categories-api";
import { wrapper } from "src/redux/store";
import { TestResultsResponseModel } from "src/models/response/test-results-response-model/test-results-response-model";

type PageProps = {
    testResults: TestResultsResponseModel;
    error?: string;
};

const resultPage: NextPage<PageProps> = ({ testResults, error }: PageProps) => {
    return (
        <DefaultLayout error={error}>
            <ResultSection testResults={testResults} />
        </DefaultLayout>
    );
};

export default resultPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
    if (typeof context.params?.sessionId === "string") {
        const { data: testResults, isError: isTestResultsError } = await store.dispatch(
            getTestResults.initiate({ sessionId: context.params?.sessionId })
        );

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return { props: { testResults, error: isTestResultsError && "ups, something went wrong" } };
    }

    return {
        notFound: true,
    };
});
