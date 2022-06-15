import type { GetServerSideProps, NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import { CategoriesSection } from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import { TestCategory } from "@modules/CategoriesSection/CategoryCard";
import { getCategories } from "@utils/fetcher";

type HomePageProps = {
    categories: TestCategory[];
};

const HomePage: NextPage<HomePageProps> = ({ categories }: { categories: TestCategory[] }) => {
    return (
        <DefaultLayout>
            <FrontGreetingSection />
            <CategoriesSection categories={categories} />
            <TestsSection />
            <HowItWorksSection />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories(4);
    if (!categories) {
        return {
            notFound: true,
        };
    }
    return { props: { categories } };
};

export default HomePage;
