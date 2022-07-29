import { DefaultLayout } from "@layouts/DefaultLayout";
import { ResultSection } from "@modules/ResultSection/ResultSection";

import { GetServerSideProps, NextPage } from "next";
import { TestResultsType } from "src/api/apiTypes";
import { getTestReport } from "src/api/testResults";

type PageProps = {
    testResults: TestResultsType;
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

export const getServerSideProps: GetServerSideProps = async context => {
    if (typeof context.params?.sessionId === "string") {
        const testResults = await getTestReport(context.params?.sessionId);

        if (testResults instanceof Error) {
            return { props: { error: testResults.message } };
        }

        return { props: { testResults } };
    }

    return {
        notFound: true,
    };
};
