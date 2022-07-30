import { ROLES } from "./roles.num";

export class  User {
    username = '';
    email = '';
    password = '';
    role = ROLES.USER

    constructor (username, email, password, role) {
        this.username=username;
        this.email=email;
        this.passwoed=password;
        this.role=role;
    }

}