import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import Donate from "../components/modules/Donate/Donate";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            Home
            <Donate />
        </DefaultLayout>
    );
};

export default HomePage;
