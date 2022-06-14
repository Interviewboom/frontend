import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import { HowItWorksSection } from "@modules/HowItWorksSection/HowItWorksSection";
import CategoriesSection from "@modules/CategoriesSection/CategoriesSection";
import { TestsSection } from "@modules/TestsSection/TestsSection";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            <FrontGreetingSection />
            <CategoriesSection />
            <TestsSection />
            <HowItWorksSection />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default HomePage;
