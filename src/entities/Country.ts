import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('countries')

export class Country {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 100, default: '',})
    name!: string;
}