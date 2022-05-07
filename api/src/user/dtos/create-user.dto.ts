import{ IsEmail, IsString, IsBoolean, IsOptional } from 'class-validator'

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsBoolean()
    isAdmin: boolean;

    @IsBoolean()
    @IsOptional()
    archived: boolean;

    constructor(email: string, password: string){
        this.email = email
        this.password = password
        this.archived = false
    }
}