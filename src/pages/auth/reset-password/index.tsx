import React, { FC } from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { ResetPasswordForm } from "@modules/ResetPasswordSection";

const ResetPasswordPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <ResetPasswordForm />
        </DefaultLayout>
    );
};

export default ResetPasswordPage;
