import { useRouter } from "next/router";
import { FC } from "react";
import { useFormik } from "formik";

import { useLoginMutation } from "src/redux/api/auth-api";
import { persistedStore, persistor } from "src/redux/store";
import { setAccessToken } from "src/redux/slices/authSlice";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { TextField } from "@elements/TextField";
import { Auth } from "@elements/Auth";

import { signInValidationSchema } from "@utils/yupValidationSchemas";

import styles from "./SignInForm.module.scss";

interface FormValues {
    email: string;
    password: string;
}

export const SignInForm: FC = () => {
    const { accessToken } = persistedStore.getState().auth;
    const router = useRouter();

    const [loginRequest] = useLoginMutation();

    const submitHandler = async (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void } // eslint-disable-line no-unused-vars
    ) => {
        await loginRequest({
            email: values.email,
            password: values.password,
        });

        if (!accessToken) {
            // change it manually
            persistedStore.dispatch(setAccessToken("token..."));
            persistor.persist();
            router.back();
        } else {
            // reset persisted store, check in redux devtools
            persistor.purge();
            router.back();
        }

        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues: {
            email: "testemail@gmail.com",
            password: "qqqqqqqQ1@",
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
