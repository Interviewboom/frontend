import type { NextPage, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { FC } from "react";

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

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
}
