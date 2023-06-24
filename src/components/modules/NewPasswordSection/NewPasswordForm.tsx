import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { Auth } from "@elements/Auth";
import { TextField } from "@elements/TextField";
import { changePasswordValidationSchema } from "@utils/yupValidationSchemas";
import { useChangePasswordMutation } from "src/redux/api/auth-api";
import { useAppDispatch } from "src/redux/hooks";
import { setAccessToken } from "src/redux/slices/authSlice";

interface FormValues {
    password: string;
    confirmPassword: string;
}

export const NewPasswordForm: FC = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [changePasswordRequest, { data, isError }] = useChangePasswordMutation();

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
        changePasswordRequest({
            password: values.password,
        });

        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: changePasswordValidationSchema,
        onSubmit: submitHandler,
    });

    const textFields = [
        {
            type: "password" as const,
            name: "password",
            placeholder: "New password",
            value: formik.values.password,
            error: formik.touched.password && formik.errors.password ? formik.errors.password : undefined,
        },
        {
            type: "password" as const,
            name: "confirmPassword",
            placeholder: "Confirm new password",
            value: formik.values.confirmPassword,
            error:
                formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : undefined,
        },
    ];

    return (
        <Auth
            keyword="Change password"
            isSubmitting={formik.isSubmitting}
            title="Change password"
            description=""
            onSubmit={formik.handleSubmit}
            showSocials={false}
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
