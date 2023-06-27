import type { NextPage } from "next";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from "next-i18next";
// eslint-disable-next-line import/no-extraneous-dependencies
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { FC } from "react";

import { Title } from "@elements/Title";
import { DefaultLayout } from "@layouts/DefaultLayout";
import { SignInForm } from "@modules/SignInSection";

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["TestComponent"])),
        },
    };
}

const SignInPage: NextPage<FC> = () => {
    const { t } = useTranslation();
    return (
        <DefaultLayout>
            <Title>{t("TestComponent:welcome_msg")}</Title>
            <SignInForm />
        </DefaultLayout>
    );
};

export default SignInPage;
