import { useFormik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";

import { Auth } from "@elements/Auth";
import { Icon } from "@elements/Icon";
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
    const router = useRouter();

    const [registerRequest] = useRegisterMutation();

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
            isSubmitting={formik.isSubmitting}
            onSubmit={formik.handleSubmit}
            afterContent={
                <Text className={styles.additionalInfo}>
                    By creating an account, you agree to the <u className={styles.docs}>Terms of Service</u> and{" "}
                    <u className={styles.docs}>Privacy Policy</u>.
                </Text>
            }
            wrongPage={
                <div className={styles.accountWrapper}>
                    <Text color="greyTextColor">Already have an account?</Text>
                    <div
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => {
                            if (e.key === "Enter" || e.key === " ") {
                                router.push("/auth/sign-up");
                            }
                        }}
                        className={styles.textIconWrapper}
                        onClick={() => router.push("/auth/sign-in")}
                    >
                        <Text>Sign in</Text>
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
