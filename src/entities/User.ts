import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Token } from "./Token";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 100, default: ''})
    lastname?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    firstname!: string;

    @Column({ type: 'varchar', length: 100, default: 'user'})
    role?: string;

    @Column({ type : 'int', default: 1})
    countryId?: Country;

    @Column({ type : 'varchar', length: 100, default: ''})
    phonenumber?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    email?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    password?: string;

    @Column({ type : 'timestamp'})
    birthday?: Date;

    @Column({ type : 'timestamp'})
    createdAt?: Date;

    @Column({ type : 'timestamp'})
    deletedAt?: Date;

    @Column({ type : 'timestamp'})
    updatedAt?: Date;
    
    @Column({ type : 'boolean', default: false})
    isConfirmed?: boolean;

    @Column({ type : 'varchar', length: 100, default: ''})
    token?: Token;
}