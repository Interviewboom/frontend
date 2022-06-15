import type { GetServerSideProps, NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import { CategoriesSection } from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import { TestCategory } from "@modules/CategoriesSection/CategoryCard";
import { getCategories, getTests } from "@utils/fetcher";
import { TestType } from "../components/modules/TestsSection/TestCard";

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
        <DefaultLayout>
            <FrontGreetingSection />
            <CategoriesSection categories={categories} />
            <TestsSection tests={tests} />
            <HowItWorksSection />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories(4);
    const tests = await getTests(4);
    if (!categories && !tests) {
        return {
            notFound: true,
        };
    }
    return { props: { tests, categories } };
};

export default HomePage;
