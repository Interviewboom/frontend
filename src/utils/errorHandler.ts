import { AxiosError } from "axios";

export type errorObjectType = { message: string };

export const handleRequestError = (error: unknown): errorObjectType => {
    if (error instanceof AxiosError) {
        return { message: error.response?.data?.message ?? error.message };
    }

    return { message: "something gone wrong" };
};
