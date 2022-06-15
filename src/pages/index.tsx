import type { GetServerSideProps, NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import CategoriesSection from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";
import axios from "axios";
import { TestCategory } from "@modules/CategoriesSection/CategoryCard";

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
    const res = await axios.get("https://interviewboom.com/api/test-categories?limit=4");
    const categories: TestCategory[] = await res.data;

    if (!categories) {
        return {
            notFound: true,
        };
    }

    return { props: { categories } };
};

export default HomePage;
