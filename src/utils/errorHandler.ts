import { AxiosError } from "axios";

export interface errorObjectType {
    message: string;
}

export const handleRequestError = (error: unknown) => {
    if (error instanceof AxiosError) {
        return new Error(error.response?.data?.message ?? error.message);
    }

    return new Error("something gone wrong");
};
