import { DefaultLayout } from "@layouts/DefaultLayout";
import { ResultSection } from "@modules/ResultSection/ResultSection";
import { errorObjectType } from "@utils/errorHandler";

import { GetServerSideProps, NextPage } from "next";
import { TestResultsType } from "src/api/apiTypes";
import { getTestReport } from "src/api/testResults";

type PageProps = {
    testResults: TestResultsType & errorObjectType;
};
const resultPage: NextPage<PageProps> = ({ testResults }: PageProps) => {
    return (
        <DefaultLayout error={testResults.message ?? ""}>
            <ResultSection testResults={testResults} />
        </DefaultLayout>
    );
};

export default resultPage;

export const getServerSideProps: GetServerSideProps = async context => {
    if (typeof context.params?.sessionId === "string") {
        const testResults = await getTestReport(context.params?.sessionId);

        return { props: { testResults } };
    }

    return {
        notFound: true,
    };
};
