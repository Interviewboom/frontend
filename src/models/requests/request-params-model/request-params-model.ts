export type RequestParamsModel = {
    [index: string]: string | number;
};

export interface SignInRequest {
    email: string;
    password: string;
}
export interface SignUpRequest {
    fullName: string;
    email: string;
    password: string;
}
export interface ResetPasswordRequest {
    email: string;
}
