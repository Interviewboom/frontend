import { NextPage } from "next";
import { useRouter } from "next/router";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { AllTestsSection } from "@modules/AllTestsSection";
import { getTests } from "src/redux/api/tests-api";
import { TestModel } from "src/models/entities/test-model/test-model";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";
import { getRunningQueriesThunk } from "src/redux/api/test-categories-api";
import { wrapper } from "src/redux/store";

import { selectAccessToken } from "src/redux/slices/authSlice";
import { useAppSelector } from "src/redux/hooks";

type PageProps = {
    allTests: TestModel[];
    error?: string;
};

const AllTestsPage: NextPage<PageProps> = ({ allTests, error }: PageProps) => {
    const accessToken = useAppSelector(selectAccessToken);

    const router = useRouter();

    if (!accessToken) {
        router.push("/auth/sign-in");
    }

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
