import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { Button } from "../components/elements/Button/Button";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            Home{" "}
            <Button onClick={() => {}} width="width248">
                buu
            </Button>
            <Button onClick={() => {}} link="/hhh" color="grey">
                link
            </Button>
        </DefaultLayout>
    );
};

export default HomePage;
