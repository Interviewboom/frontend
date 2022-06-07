import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { FrontGreetingSection } from "@modules/FrontGreetingSection";
import { DonationInfoSection } from "@modules/DonationInfoSection";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            <FrontGreetingSection />
            <DonationInfoSection />
        </DefaultLayout>
    );
};

export default HomePage;
