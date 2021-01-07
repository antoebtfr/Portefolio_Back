import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Test {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 50, default: '',})
    surname?: string;

    @Column({ type : 'varchar', length: 100, default: '',})
    firstname!: string;

}