import { useFormik } from "formik";
import { FC } from "react";

import { Auth } from "@elements/Auth";
import { Link } from "@elements/Link";
import { Text } from "@elements/Text";
import { TextField } from "@elements/TextField";
import { signInValidationSchema } from "@utils/yupValidationSchemas";
import { useLoginMutation } from "src/redux/api/auth-api";

import styles from "./SignInForm.module.scss";

interface FormValues {
    email: string;
    password: string;
}

export const SignInForm: FC = () => {
    const [loginRequest] = useLoginMutation();

    const submitHandler = async (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void } // eslint-disable-line no-unused-vars
    ) => {
        await loginRequest({
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
