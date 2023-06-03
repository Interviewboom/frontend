import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { Auth } from "@elements/Auth";
import { Link } from "@elements/Link";
import { Text } from "@elements/Text";
import { TextField } from "@elements/TextField";
import { signInValidationSchema } from "@utils/yupValidationSchemas";
import { useLoginMutation } from "src/redux/api/auth-api";
import { useAppDispatch } from "src/redux/hooks";
import { setAccessToken } from "src/redux/slices/authSlice";

import styles from "./SignInForm.module.scss";

interface FormValues {
    email: string;
    password: string;
}

export const SignInForm: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [loginRequest, { data, isError }] = useLoginMutation();

    useEffect(() => {
        if (data?.accessToken) {
            dispatch(setAccessToken(data.accessToken));
            router.back();
        }
    }, [data, dispatch, router]);

    const submitHandler = (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void } // eslint-disable-line no-unused-vars
    ) => {
        loginRequest({
            email: values.email,
            password: values.password,
        });

        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInValidationSchema,
        onSubmit: submitHandler,
    });

    const textFields = [
        {
            type: "email" as const,
            name: "email",
            placeholder: "Email",
            value: formik.values.email,
            error: formik.touched.email && formik.errors.email ? formik.errors.email : undefined,
        },
        {
            type: "password" as const,
            name: "password",
            placeholder: "Password",
            value: formik.values.password,
            error: formik.touched.password && formik.errors.password ? formik.errors.password : undefined,
        },
    ];

    return (
        <Auth
            keyword="Sign in"
            isSubmitting={formik.isSubmitting}
            title="Sign in"
            description="Welcome back!"
            onSubmit={formik.handleSubmit}
            beforeContent={
                <Link href="/auth/reset-password" className={styles.forgotPassword}>
                    Forgot password?
                </Link>
            }
            wrongPage={
                <div className={styles.accountWrapper}>
                    <Text size="big" color="greyTextColor">
                        Don&apos;t have an account?
                    </Text>
                    <Link href="/auth/sign-up" className={styles.textIconWrapper} withArrow="right">
                        Create account
                    </Link>
                </div>
            }
        >
            {textFields.map(({ type, placeholder, error, value, name }) => (
                <TextField
                    key={placeholder}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={formik.handleChange}
                    error={error || (isError ? "Error" : "")}
                />
            ))}
        </Auth>
    );
};
