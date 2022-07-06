import type { GetServerSideProps, NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import { CategoriesSection } from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import { getCategories, getTests } from "src/api/tests";
import { TestCategory, TestType } from "src/api/apiTypes";

type HomePageProps = {
    categories: TestCategory[];
    tests: TestType[];
};

const HomePage: NextPage<HomePageProps> = ({
    categories,
    tests,
}: {
    categories: TestCategory[];
    tests: TestType[];
}) => {
    return (
        <DefaultLayout error={(!Array.isArray(tests) && tests) || (!Array.isArray(categories) && categories) || ""}>
            <FrontGreetingSection />
            <CategoriesSection categories={categories} />
            <TestsSection tests={tests} />
            <HowItWorksSection />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories({ limit: "4" });
    const tests = await getTests({ limit: "4" });
    return { props: { tests, categories } };
};

export default HomePage;
