import type { NextPage } from "next";

import { DefaultLayout } from "@layouts/DefaultLayout";
import RadioInputsGroupe from "../components/elements/RadioInputsGroupe/RadioInputsGroupe";

const HomePage: NextPage = () => {
    return (
        <DefaultLayout>
            <RadioInputsGroupe
                name="role"
                onChange={() => {}}
                value="SHIPPER"
                choices={[
                    { caption: "Shipper", value: "SHIPPER" },
                    { caption: "Driver", value: "DRIVER" },
                ]}
            />
            Home
        </DefaultLayout>
    );
};

export default HomePage;
