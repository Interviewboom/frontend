import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";
import HowItWorksSection from "../components/modules/HowItWorksSection/HowItWorksSection";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            <FrontGreetingSection />
            <HowItWorksSection />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default HomePage;
