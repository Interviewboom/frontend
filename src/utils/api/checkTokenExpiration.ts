import jwtDecode from "jwt-decode";

const TOKEN_EXPIRATION_DELTA = 60;

export const checkTokenExpiration = (accessToken: string): boolean => {
    const { exp }: { exp: number } = jwtDecode(accessToken);
    const now = new Date().getTime() / 1000;
    return exp - TOKEN_EXPIRATION_DELTA < now;
};
