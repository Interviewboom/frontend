import type { NextPage } from "next";
import React, { FC } from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { SignUpForm } from "@modules/SignUpSection";

const SignUpPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <SignUpForm />
        </DefaultLayout>
    );
};

export default SignUpPage;
