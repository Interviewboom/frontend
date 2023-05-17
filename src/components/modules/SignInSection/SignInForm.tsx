import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useLoginMutation } from "src/redux/api/auth-api";
import { useAppDispatch } from "src/redux/hooks";
import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { TextField } from "@elements/TextField";
import { Auth } from "@elements/Auth";
import { setAccessToken } from "src/redux/slices/authSlice";

import { signInValidationSchema } from "@utils/yupValidationSchemas";

import styles from "./SignInForm.module.scss";

interface FormValues {
    email: string;
    password: string;
}

export const SignInForm: FC = () => {
    const [isSubmitError, setIsSubmitError] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const [loginRequest, { data, isError }] = useLoginMutation();

    useEffect(() => {
        if (data?.accessToken) {
            dispatch(setAccessToken(data.accessToken));
            router.back();
        }
    }, [data]);

    useEffect(() => {
        if (isError) {
            setIsSubmitError(true);
        }
    }, [isError]);

    const submitHandler = (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void } // eslint-disable-line no-unused-vars
    ) => {
        setIsSubmitError(false);
        loginRequest({
            username: values.email,
            password: values.password,
        });
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
                <Button link="/auth/reset-password" size="small" color="transparent">
                    Forgot password?
                </Button>
            }
            wrongPage={
                <div className={styles.accountWrapper}>
                    <Text color="grey-text-color">Don&apos;t have an account?</Text>
                    <div
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => {
                            if (e.key === "Enter" || e.key === " ") {
                                router.push("/auth/sign-up");
                            }
                        }}
                        className={styles.textIconWrapper}
                        onClick={() => router.push("/auth/sign-up")}
                    >
                        <Text>Create account</Text>
                        <Icon name="arrowDashRight" width={10} height={10} />
                    </div>
                </div>
            }
        >
            {isSubmitError && <p className={styles.error}>Oops! Something went wrong. Please try again later</p>}
            {textFields.map(({ type, placeholder, value, error, name }) => (
                <TextField
                    key={placeholder}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={formik.handleChange}
                    error={error}
                />
            ))}
        </Auth>
    );
};
