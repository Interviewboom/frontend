import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { Button } from "../components/elements/Button/Button";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            Home{" "}
            <Button onClick={() => {}} text="увыйти" width="width248">
                buu
            </Button>
            <Button onClick={() => {}} text="увыйти" link="/hhh">
                link
            </Button>
        </DefaultLayout>
    );
};

export default HomePage;
