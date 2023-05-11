export type RequestParamsModel = {
    [index: string]: string | number;
};

export interface SignInRequest {
    email: string;
    password: string;
}
export interface SignUpRequest {
    name: string;
    email: string;
    password: string;
}
