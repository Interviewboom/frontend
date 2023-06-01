import { User } from "src/models/entities/auth-model/auth-model";

export interface LoginResponse {
    user?: User;
    accessToken: string;
}
