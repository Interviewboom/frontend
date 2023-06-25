import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { ResetPasswordForm } from "@modules/ResetPasswordSection";
import { useAppDispatch } from "src/redux/hooks";
import { setAccessToken } from "src/redux/slices/authSlice";

const ResetPasswordPage: NextPage<FC> = () => {
    const router = useRouter();
    const { token } = router.query;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (token) {
            dispatch(setAccessToken(token as string));
            router.push("/auth/change-password");
        }
    }, [dispatch, router, token]);

    return (
        <DefaultLayout>{token ? <h1>Redirect to change password page...</h1> : <ResetPasswordForm />}</DefaultLayout>
    );
};

export default ResetPasswordPage;
