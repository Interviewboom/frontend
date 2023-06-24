import { NextPage } from "next";
import React, { FC } from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { ResetPasswordSuccess } from "@modules/ResetPasswordSection";

const ResetPasswordSuccessPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <ResetPasswordSuccess />
        </DefaultLayout>
    );
};

export default ResetPasswordSuccessPage;
