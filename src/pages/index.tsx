import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { AboutSection } from "@modules/AboutSection";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { WhySection } from "@modules/WhySection";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { TestModel } from "src/models/entities/test-model/test-model";
import { getRunningQueriesThunk, getTestCategories } from "src/redux/api/test-categories-api";
import { getTests } from "src/redux/api/tests-api";
import { wrapper } from "src/redux/store";

const TestsSection = dynamic(() => import("@modules/TestsSection/TestsSection"), { ssr: false });

type HomePageProps = {
    /* eslint-disable react/no-unused-prop-types */
    categories: TestCategoryModel[];
    popularTests: TestModel[];
    error?: string;
};

const HomePage: NextPage<HomePageProps> = ({ popularTests, error }: HomePageProps) => (
    <DefaultLayout error={error}>
        <FrontGreetingSection />
        <WhySection />
        <TestsSection popularTests={popularTests} />
        <AboutSection />
    </DefaultLayout>
);

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    const { data: categories, isError: isCategoriesError } = await store.dispatch(
        getTestCategories.initiate({ limit: "4" })
    );
    const { data: popularTests, isError: isPopularTestError } = await store.dispatch(getTests.initiate({ limit: "4" }));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
        props: {
            categories: categories || null,
            popularTests: popularTests || null,
            error: getGenericErrorMessage([isCategoriesError, isPopularTestError]),
        },
    };
});

export default HomePage;
