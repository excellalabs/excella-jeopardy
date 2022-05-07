export class User {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    archived: boolean;
    password: string;

    constructor(id: number, firstName: string, lastName: string, password: string, email: string, isAdmin: boolean, archived: boolean){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.archived = archived;
        this.password = password;
    }
}

export class UserDto {
    id?: number;
    firstName?: string;
    lastName?: string;
    isAdmin?: boolean;
    email?: string;
    archived?: boolean;
    password?: string;

    constructor(id?: number, firstName?: string, lastName?: string, password?: string, email?: string, isAdmin?: boolean, archived?: boolean){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.archived = archived;
        this.password = password;
    }
}