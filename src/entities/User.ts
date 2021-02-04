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

    @Column({ type: 'varchar', length: 100, default: ''})
    role!: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    country?: Country;

    @Column({ type : 'varchar', length: 100, default: ''})
    phonenumber?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    email?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    password?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    birthday?: Date;

    @Column({ type : 'varchar', length: 100, default: ''})
    createdAt?: Date;

    @Column({ type : 'varchar', length: 100, default: ''})
    deletedAt?: Date;

    @Column({ type : 'varchar', length: 100, default: ''})
    updatedAt?: Date;
    
    @Column({ type : 'varchar', length: 100, default: ''})
    isConfirmed?: boolean;

    @Column({ type : 'varchar', length: 100, default: ''})
    token?: Token;
}