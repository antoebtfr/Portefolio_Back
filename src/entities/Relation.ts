import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('relations')

export class Relation {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type : 'varchar', length: 50, default: '',})
    label!: string; 
}