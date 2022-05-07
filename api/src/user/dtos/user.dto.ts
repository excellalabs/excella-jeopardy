import { Expose, Exclude } from 'class-transformer'

export class UserDto {
    @Expose()
    id: number;

    @Expose()
    email: string;

    @Exclude()
    password: string;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    isAdmin: boolean;

    @Expose()
    archived: boolean;
}