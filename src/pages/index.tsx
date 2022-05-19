import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";

import { SupportProjectBlock } from "../components/modules/SupportProjectBlock/SupportProjectBlock";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            Home
            <SupportProjectBlock />
        </DefaultLayout>
    );
};

export default HomePage;
