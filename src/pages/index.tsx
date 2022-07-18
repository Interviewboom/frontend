import type { GetServerSideProps, NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import { CategoriesSection } from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import { getCategories, getTests } from "src/api/tests";
import { TestCategory, TestType } from "src/api/apiTypes";
import { AboutSection } from "@modules/AboutSection/AboutSection";
import { errorObjectType } from "@utils/errorHandler";

type HomePageProps = {
    categories: TestCategory[] & errorObjectType;
    tests: TestType[] & errorObjectType;
};

const HomePage: NextPage<HomePageProps> = ({ categories, tests }: HomePageProps) => {
    return (
        <DefaultLayout error={tests.message ?? categories.message ?? ""}>
            <FrontGreetingSection />
            <CategoriesSection categories={categories} />
            <TestsSection tests={tests} />
            <HowItWorksSection />
            <DonationInfoSection />
            <AboutSection />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories({ limit: "4" });
    const tests = await getTests({ limit: "4" });

    return { props: { tests, categories } };
};

export default HomePage;
