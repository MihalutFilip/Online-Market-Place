import { Role } from '../enums/role';

export class User {
    id: number;
    username: string;
    email: string;
    jwtToken: string;
    role: Role;
    colorCode: string;
    password: string;
}