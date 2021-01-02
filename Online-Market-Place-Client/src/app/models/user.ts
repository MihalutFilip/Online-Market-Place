import { Role } from '../enums/role';

export interface User {
    id: number;
    username: string;
    email: string;
    jwtToken: string;
    role: Role;
    password: string;
}