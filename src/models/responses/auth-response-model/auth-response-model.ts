import { User } from "src/models/entities/auth-model/auth-model";

// export interface LoginResponse {
//     data: {
//         user?: User;
//         accessToken: string;
//     };
//     statusCode: number;
//     message: string;
//     error: string;
// }

export interface LoginResponse {
    user?: User;
    accessToken: string;
}
