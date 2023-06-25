import { NextPage } from "next";
import React, { FC } from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { ChangePasswordForm } from "@modules/ChangePasswordSection";

const ChangePasswordPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <ChangePasswordForm />
        </DefaultLayout>
    );
};

export default ChangePasswordPage;
