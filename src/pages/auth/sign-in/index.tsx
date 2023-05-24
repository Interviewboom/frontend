import type { NextPage } from "next";
import React, { FC } from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { SignInForm } from "@modules/SignInSection";

const SignInPage: NextPage<FC> = () => {
    return (
        <DefaultLayout>
            <SignInForm />
        </DefaultLayout>
    );
};

export default SignInPage;
