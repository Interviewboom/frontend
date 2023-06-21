import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useFormik } from "formik";
import { FC } from "react";

import { Auth } from "@elements/Auth";
import { Link } from "@elements/Link";
import { Text } from "@elements/Text";
import { TextField } from "@elements/TextField";
import { signUpValidationSchema } from "@utils/yupValidationSchemas";
import { useRegisterMutation } from "src/redux/api/auth-api";

import styles from "./SignUpForm.module.scss";

interface FormValues {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export const SignUpForm: FC = () => {
    const [registerRequest, { error, isLoading }] = useRegisterMutation();

    const isFetchBaseQueryError = (err: unknown): err is FetchBaseQueryError => {
        return typeof err === "object" && err !== null && "status" in err;
    };

    const submitHandler = async (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void } // eslint-disable-line no-unused-vars
    ) => {
        await registerRequest({
            fullName: values.name,
            email: values.email,
            password: values.password,
        });

        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: signUpValidationSchema,
        onSubmit: submitHandler,
    });

    const textFields = [
        {
            type: "text" as const,
            placeholder: "Name",
            name: "name",
            value: formik.values.name,
            error: formik.touched.name && formik.errors.name ? formik.errors.name : undefined,
        },
        {
            type: "email" as const,
            placeholder: "Email",
            name: "email",
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
        {
            type: "password" as const,
            placeholder: "Password again",
            name: "repeatPassword",
            value: formik.values.repeatPassword,
            error:
                formik.touched.repeatPassword && formik.errors.repeatPassword
                    ? formik.errors.repeatPassword
                    : undefined,
        },
    ];

    return (
        <Auth
            title="Create account"
            description="Once you’re done you’ll get access to your personalised roadmap"
            error={isFetchBaseQueryError(error) && error}
            isSubmitting={formik.isSubmitting}
            isLoading={isLoading}
            onSubmit={formik.handleSubmit}
            afterContent={
                <Text className={styles.additionalInfo}>
                    By creating an account, you agree to the <u className={styles.docs}>Terms of Service</u> and{" "}
                    <u className={styles.docs}>Privacy Policy</u>.
                </Text>
            }
            wrongPage={
                <div className={styles.accountWrapper}>
                    <Text size="big" color="greyTextColor">
                        Already have an account?
                    </Text>
                    <Link href="/auth/sign-in" className={styles.textIconWrapper} withArrow="right">
                        Sign in
                    </Link>
                </div>
            }
        >
            {textFields.map(({ type, placeholder, value, error: err, name }) => (
                <TextField
                    key={placeholder}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={formik.handleChange}
                    err={err}
                />
            ))}
        </Auth>
    );
};
