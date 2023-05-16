import * as Yup from "yup";
import { emailPattern, passwordPattern } from "./regexConstants";

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .matches(emailPattern, "Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(passwordPattern, "Password must be strong"),
});

export const signUpValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
        .email("Invalid email address")
        .matches(emailPattern, "Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(passwordPattern, "Password must be strong"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .matches(emailPattern, "Invalid email address")
        .required("Email is required"),
});
