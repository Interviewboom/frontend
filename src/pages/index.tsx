import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { TextField } from "@elements/TextField";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            <TextField
                type="password"
                value=""
                placeholder="english"
                onChange={() => {}}
                caption="mova"
                error="fklzdl/vk"
            />
            Home
        </DefaultLayout>
    );
};

export default HomePage;
