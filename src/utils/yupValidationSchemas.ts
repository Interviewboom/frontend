import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
    // .min(8, "Password must be at least 8 characters")
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){12}[A-Za-z\d@$!%*?&]+$/, "Password must be strong"),
});

export const signUpValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
        .email("Invalid email address")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){5}[A-Za-z\d@$!%*?&]+$/, "Password must be strong"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address")
        .required("Email is required"),
});
