import type { GetServerSideProps, NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import { CategoriesSection } from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import { getCategories, getTests } from "src/api/categoriesTestsInfo";

import { TestCategory, TestType } from "src/api/apiTypes";
import { AboutSection } from "@modules/AboutSection/AboutSection";

type HomePageProps = {
    categories: TestCategory[];
    popularTests: TestType[];
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

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories({ limit: "4" });
    const popularTests = await getTests({ limit: "4" });

    if (categories instanceof Error && popularTests instanceof Error) {
        return { props: { error: categories.message } };
    }
    return { props: { popularTests, categories } };
};

export default HomePage;
