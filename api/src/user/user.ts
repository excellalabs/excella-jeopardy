import { IsOptional } from 'class-validator';
import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsOptional()
    firstName: string;

    @Column()
    @IsOptional()
    lastName: string;

    @Column()
    email: string;

    @Column()
    isAdmin: boolean;

    @Column()
    @IsOptional()
    archived: boolean;

    @Column()
    password: string;

    @AfterInsert()
    logEvent() {
        console.log("New user created: ", this.email)
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Updated user with id: ",this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log("Removed user ", this.email)
    }
}