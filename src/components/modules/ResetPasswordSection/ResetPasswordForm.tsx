import { FC } from "react";
import { useFormik } from "formik";

import { TextField } from "@elements/TextField";
import { Auth } from "@elements/Auth";

import { resetPasswordValidationSchema } from "@utils/yupValidationSchemas";

interface FormValues {
    email: string;
}

export const ResetPasswordForm: FC = () => {
    const submitHandler = async (values: FormValues, { setSubmitting }) => {
        // Perform form submission logic here

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
            error: formik.touched.email && formik.errors.email ? formik.errors.email : null,
        },
    ];

    return (
        <Auth
            keyword="Reset password"
            showSocials={false}
            isSubmitting={formik.isSubmitting}
            title="Reset password"
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
