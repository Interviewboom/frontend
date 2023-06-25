import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { Auth } from "@elements/Auth";
import { Text } from "@elements/Text";
import { TextField } from "@elements/TextField";
import { resetPasswordValidationSchema } from "@utils/yupValidationSchemas";
import { useResetPasswordMutation } from "src/redux/api/auth-api";
import { useAppDispatch } from "src/redux/hooks";
import { setAccessToken } from "src/redux/slices/authSlice";

import styles from "./ResetPasswordForm.module.scss";

interface FormValues {
    email: string;
}

export const ResetPasswordForm: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [resetRequest, { data }] = useResetPasswordMutation();

    useEffect(() => {
        if (data?.accessToken) {
            dispatch(setAccessToken(data.accessToken));
            router.push("reset-password");
        }
    }, [data, dispatch, router]);

    const submitHandler = async (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void } // eslint-disable-line no-unused-vars
    ) => {
        resetRequest({
            email: values.email,
        });

        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: resetPasswordValidationSchema,
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
    ];

    return (
        <Auth
            keyword="Reset password"
            showSocials={false}
            isSubmitting={formik.isSubmitting}
            title="Reset password"
            afterContent={
                <Text className={styles.termsOfService}>
                    <u>Terms of Service</u>, <u>Privacy Policy</u>
                </Text>
            }
            description="Enter your email address and we will send you instructions to reset your password."
            onSubmit={formik.handleSubmit}
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
