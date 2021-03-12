import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Token } from "./Token";

@Entity('users')

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

    @Column({ type : 'varchar', length: 100, nullable: true})
    phonenumber?: string;

    @Column({ type : 'varchar', length: 100, default: ''})
    email!: string;

    @Column({ type : 'varchar', length: 150, default: ''})
    password?: string;

    @Column({ type : 'date', nullable: true})
    birthdate?: Date;

    @Column({ type : 'timestamp'})
    createdAt?: Date;

    @Column({ type : 'date', nullable: true})
    deletedAt?: Date;

    @Column({ type : 'date', nullable: true})
    updatedAt?: Date;
    
    @Column({ type : 'boolean', default: false})
    isConfirmed?: boolean;

    @Column({ type : 'varchar', length: 100, default: ''})
    token?: Token;
}