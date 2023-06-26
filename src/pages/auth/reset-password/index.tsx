import type { NextPage, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { FC } from "react";

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
