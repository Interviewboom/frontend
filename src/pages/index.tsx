import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import { CategoriesSection } from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import { AboutSection } from "@modules/AboutSection/AboutSection";
import { getTests } from "src/redux/api/tests-api";
import { TestCategoryModel } from "src/models/entities/test-category-model/test-category-model";
import { TestModel } from "src/models/entities/test-model/test-model";
import { getRunningQueriesThunk, getTestCategories } from "src/redux/api/test-categories-api";
import { wrapper } from "src/redux/store";
import { getGenericErrorMessage } from "@utils/api/getGenericErrorMessage";
import { setToken } from "../redux/slices/authSlice";

type HomePageProps = {
    categories: TestCategoryModel[];
    popularTests: TestModel[];
    error?: string;
};

const HomePage: NextPage<HomePageProps> = ({ categories, popularTests, error }: HomePageProps) => {
    return (
        <DefaultLayout error={error}>
            <FrontGreetingSection />
            <CategoriesSection categories={categories} />
            <TestsSection popularTests={popularTests} />
            <HowItWorksSection />
            <DonationInfoSection />
            <AboutSection />
        </DefaultLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    store.dispatch(
        setToken({
            accessToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vZGVsZmFrQGdtYWlsLmNvbSIsInN1YiI6MSwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjg0MjUzOTkyLCJleHAiOjE2ODQzNDAzOTJ9.m8C_KpaZ0qVkqfPrXO_TK_VZ_IfmwggF5uSwxwZpSKE",
        })
    );
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
