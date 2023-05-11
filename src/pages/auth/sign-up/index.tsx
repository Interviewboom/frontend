import React, { FC } from "react";
import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { SignUpForm } from "@modules/SignUpSection/SignUpForm";

const SignUpPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <SignUpForm />
        </DefaultLayout>
    );
};

export default SignUpPage;
