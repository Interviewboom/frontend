import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { GetReadyBlock } from "@modules/GetReadyBlock";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            <GetReadyBlock />
            Home
        </DefaultLayout>
    );
};

export default HomePage;
