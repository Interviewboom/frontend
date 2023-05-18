import * as Yup from "yup";
import { EMAIL_PATTERN } from "./regexConstants";

const emailValidation = Yup.string()
    .email("Invalid email address")
    .matches(EMAIL_PATTERN, "Invalid email address")
    .required("Email is required");

const passwordValidation = Yup.string().required("Password is required");
// .min(8, "Password must be at least 8 characters")
// .matches(PASSWORD_PATTERN, "Password must be strong");

export const signInValidationSchema = Yup.object().shape({
    email: emailValidation,
    password: passwordValidation,
});

export const signUpValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: emailValidation,
    password: passwordValidation,
    repeatPassword: passwordValidation
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
    email: emailValidation,
});
