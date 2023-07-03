import type { NextPage, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { FC } from "react";

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
