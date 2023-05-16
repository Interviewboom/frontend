export type RequestParamsModel = {
    [index: string]: string | number;
};

export interface SignInRequest {
    username: string;
    password: string;
}
export interface SignUpRequest {
    fullName: string;
    email: string;
    password: string;
}
