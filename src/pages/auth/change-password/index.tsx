import { NextPage } from "next";
import React, { FC } from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { NewPasswordForm } from "@modules/NewPasswordSection";

const ChangePasswordPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <NewPasswordForm />
        </DefaultLayout>
    );
};

export default ChangePasswordPage;
